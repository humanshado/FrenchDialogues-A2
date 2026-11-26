/* French lesson engine for the Édito A2 interactive course (FrenchDialogues).
   Renders the unit object in window.LESSONS (or an étape bilan in window.TEST).
   Needs art.js (window.ART) loaded first. */
(function () {
  "use strict";
  const T = window.TEST || null;
  const L = T ? testLesson(T) : window.LESSONS[window.LESSONS.length - 1];
  function testLesson(t) {
    const ls = window.LESSONS, seen = new Set(), tag = (arr, id) => (arr || []).map(x => Object.assign({ src: id }, x));
    return {
      id: t.id, title: t.title, rubrique: t.rubrique, num: 0,
      vocab: ls.flatMap(l => tag(l.vocab, l.id)).filter(v => !seen.has(v.t) && seen.add(v.t)),
      practice: ls.flatMap(l => tag(l.practice, l.id)),
      dialogues: ls.flatMap(l => (l.dialogues || []).map(d => Object.assign({ src: l.id }, d))),
      lessons: ls.map(l => ({ id: l.id, num: l.num, title: l.title, titleFr: l.titleFr }))
    };
  }
  const A = window.ART;
  const $ = (s, el = document) => el.querySelector(s);
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const BOOK = "Édito A2 · Méthode de français";
  const RUB = { 1: "Parcours et souvenirs", 2: "Chez soi, entre nous", 3: "Demain, à table !", 4: "Santé et médias", 5: "Consommer, voyager", 6: "Travail et nature" };
  const UCOL = ["#2f9c8a", "#c2508e", "#4f9d4f", "#9b4fb0", "#e86a2e", "#2f9c8a", "#e0474f", "#3a6fd8", "#9b4fb0", "#7d9a2e", "#e86a2e", "#3a4f8a", "#4f9d4f"];
  const ucol = n => UCOL[n] || "#0f7b6c";

  /* ---------- storage ---------- */
  const KEY = "french-edito-a2-v1";
  const DEF = { en: true, pr: true, gc: true, rate: 0.9 };
  let S = { lessons: {}, words: {}, prefs: Object.assign({}, DEF) };
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) {}
  S.prefs = Object.assign({}, DEF, S.prefs);
  S.prefs.rate = [0.65, 0.9, 1.05].reduce((a, v) => Math.abs(v - S.prefs.rate) < Math.abs(a - S.prefs.rate) ? v : a, 0.9);
  const LS = S.lessons[L.id] = S.lessons[L.id] || { done: {}, best: {} };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

  /* ---------- text helpers ---------- */
  const G = { m: "masculine", f: "feminine", pl: "plural" };
  const fr = (txt, cls = "", g = "") => `<span class="fr ${cls} ${g ? "g-" + g : ""}" lang="fr">${esc(txt)}</span>`;
  // [[texte]] · [[texte|shown]] · [[m:un croissant]] (gender-coloured) inside prose → tappable French
  const tz = (html) => String(html).replace(/\[\[(?:(m|f|pl):)?([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, g, say, show) => `<b class="say ${g ? "g-" + g : ""}" lang="fr" data-say="${esc(say)}">${show || say}</b>`);
  const low = (s) => s.toLocaleLowerCase("fr");
  const norm = (s) => low(String(s)).replace(/[’‘`´]/g, "'").replace(/[.,!?¿;:"“”«»()…\–—]/g, " ").replace(/\s*'\s*/g, "'").replace(/\s+/g, " ").trim();
  const bare = (s) => norm(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe");
  // 2 = exact, 1 = right except accents, 0 = wrong
  const judge = (answers, v) => answers.some(a => norm(a) === norm(v)) ? 2 : answers.some(a => bare(a) === bare(v)) ? 1 : 0;

  /* ---------- French numbers, prices and times in words ---------- */
  const U = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
  const TENS = { 2: "vingt", 3: "trente", 4: "quarante", 5: "cinquante", 6: "soixante" };
  function n99(n) {
    if (n < 20) return U[n];
    let t = Math.floor(n / 10), u = n % 10;
    if (t === 7 || t === 9) { t -= 1; u += 10; }
    const base = t === 8 ? "quatre-vingt" : TENS[t];
    if (u === 0) return t === 8 ? "quatre-vingts" : base;
    if ((u === 1 || u === 11) && t !== 8) return base + " et " + U[u];
    return base + "-" + U[u];
  }
  function frNum(n) {
    n = Math.floor(n); if (n < 100) return n99(n);
    if (n < 1000) { const c = Math.floor(n / 100), r = n % 100; const cs = (c === 1 ? "cent" : U[c] + " cent") + (c > 1 && r === 0 ? "s" : ""); return r ? cs + " " + n99(r) : cs; }
    const m = Math.floor(n / 1000), r = n % 1000; const ms = m === 1 ? "mille" : frNum(m) + " mille"; return r ? ms + " " + frNum(r) : ms;
  }
  const priceStr = (p) => (Number.isInteger(p) ? String(p) : p.toFixed(2).replace(".", ",")) + " €";
  function priceWords(p) { const e = Math.floor(p), c = Math.round((p - e) * 100); if (!e) return `${frNum(c)} centime${c > 1 ? "s" : ""}`; return `${frNum(e)} euro${e > 1 ? "s" : ""}${c ? " " + frNum(c) : ""}`; }
  const timeStr = (hh, mm) => `${hh} h ${String(mm).padStart(2, "0")}`.replace(/ h 00$/, " h");
  const timeWords = (hh, mm) => `${hh === 1 ? "une" : frNum(hh).replace(/ et un$/, " et une")} heure${hh > 1 ? "s" : ""}${mm ? " " + frNum(mm).replace(/ et un$/, " et une").replace(/^un$/, "une") : ""}`.replace(/^zéro heure/, "zéro heure");

  /* ---------- speech ---------- */
  let voice = null; const synth = window.speechSynthesis;
  function pickVoice() {
    if (!synth) return;
    const vs = synth.getVoices().filter(v => /^fr/i.test(v.lang));
    voice = vs.find(v => /fr-FR/i.test(v.lang) && /Google|Microsoft|Amélie|Thomas|Audrey|Marie|Denise|Henri|Julie/i.test(v.name)) || vs.find(v => /fr-FR/i.test(v.lang)) || vs[0] || null;
    const b = $("#voice-banner"); if (b) b.style.display = voice ? "none" : "block";
  }
  if (synth) { pickVoice(); synth.onvoiceschanged = pickVoice; }
  function cleanForTTS(t) { return String(t).replace(/\(.*?\)/g, "").replace(/…+|\.{3,}/g, " ").replace(/[\/←→|]/g, ", ").replace(/\s–\s/g, ", ").replace(/\*/g, "").trim(); }
  function speak(text, btn, rate) {
    return new Promise(res => {
      if (!synth) { res(); return; }
      synth.cancel();
      const u = new SpeechSynthesisUtterance(cleanForTTS(text));
      u.lang = voice ? voice.lang : "fr-FR"; if (voice) u.voice = voice;
      u.rate = rate || S.prefs.rate;
      document.querySelectorAll(".speaking").forEach(e => e.classList.remove("speaking"));
      if (btn) btn.classList.add("speaking");
      let done = false; const end = () => { if (done) return; done = true; if (btn) btn.classList.remove("speaking"); res(); };
      u.onend = end; u.onerror = end;
      synth.speak(u);
      setTimeout(end, 4000 + String(text).length * 120);
    });
  }
  const playBtn = (txt, extra = "") => `<button class="play ${extra}" data-say="${esc(txt)}" title="Écouter" aria-label="Listen">🔊</button>`;
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-say]"); if (b) { e.stopPropagation(); speak(b.dataset.say, b.classList.contains("play") ? b : b.querySelector(".play")); }
  });

  /* ---------- sections ---------- */
  const SECTIONS = [
    ["overview", "Aperçu", "🏠"], ["dialogues", "Dialogues", "💬"], ["vocabulary", "Vocabulaire", "🗂️"],
    ["grammar", "Grammaire", "🧩"], ["expressions", "Pour communiquer", "🗨️"], ["sounds", "Prononciation", "🗣️"],
    ["listening", "Écoute", "🎧"], ["practice", "Activités", "✍️"], ["speaking", "Jeu de rôle", "🎭"],
    ["ateliers", "Ateliers & DELF", "🛠️"], ["culture", "Civilisation", "🇫🇷"], ["review", "Révision", "🔁"]
  ];
  const EN = { overview: "Overview", dialogues: "Dialogues", vocabulary: "Vocabulary", grammar: "Grammar", expressions: "Ways of saying it", sounds: "Pronunciation", listening: "Listening", practice: "Activities (quiz)", speaking: "Role-play", ateliers: "Projects & exam prep", culture: "Culture & tips", review: "Review" };
  const learnable = SECTIONS.filter(s => !["overview", "review"].includes(s[0]));

  function header(sub, title, chips) {
    return `<header class="top"><div class="top-inner">
        <div class="brand"><small>${window.COURSE_HOME ? `<a href="${window.COURSE_HOME}">← Cours</a> · ` : ""}${sub}</small><b>${title}</b></div>
        <div class="toggles">${chips}</div></div>`;
  }
  const CHIPS = `<button class="chip" id="t-en" title="Show or hide the English">EN</button><button class="chip" id="t-pr" title="Say-it hints">🔤 Hints</button><button class="chip" id="t-gc" title="Colour nouns by gender: blue masculine, pink feminine, purple plural"><span class="gdot m"></span><span class="gdot f"></span> Genre</button><button class="chip" id="t-rate">🐢 Speed</button>`;
  function renderShell() {
    document.title = `Unité ${L.num} · ${L.titleFr} · Édito A2`; document.documentElement.style.setProperty("--unit", ucol(L.num));
    document.body.innerHTML = header(`Édito A2 · Unité ${L.num} · ${esc(L.pages)}`, `${esc(L.titleFr)} <span class="muted" style="font-weight:400">· ${esc(L.title)}</span>`, CHIPS) + `
      <div class="progress"><div id="pbar"></div></div>
      <nav class="tabs" id="tabs">${SECTIONS.map(([id, n, ic]) => `<a href="#${id}" data-tab="${id}" title="${EN[id]}">${ic} ${n}<span class="tick"></span></a>`).join("")}</nav>
    </header>
    <main id="main"></main>
    <footer>Interactive course based on the situations, grammar points and vocabulary of <i>${BOOK}</i> (Didier). Dialogues, explanations, illustrations and activities are original. Audio is your device's French text-to-speech voice.</footer>`;
    wirePrefs();
  }
  let refreshChips = () => {};
  const RATES = [[0.65, "🐢 Slow"], [0.9, "🚶 Normal"], [1.05, "🐇 Fast"]];
  const speedBar = () => `<div class="speedbar" title="Audio speed"><span class="muted">Speed</span>${RATES.map(([v, n]) => `<button class="chip ${Math.abs(v - S.prefs.rate) < 0.01 ? "on" : ""}" data-rate="${v}">${n}</button>`).join("")}</div>`;
  document.addEventListener("click", e => { const b = e.target.closest(".speedbar [data-rate]"); if (!b) return; S.prefs.rate = +b.dataset.rate; save(); refreshChips(); });
  function wirePrefs() {
    const K = [["#t-en", "en"], ["#t-pr", "pr"], ["#t-gc", "gc"]];
    const setChips = () => {
      K.forEach(([s, k]) => { const b = $(s); if (b) b.classList.toggle("on", S.prefs[k]); });
      const r = $("#t-rate"); if (r) r.textContent = "🔊 Speed: " + (S.prefs.rate < 0.8 ? "🐢 Slow" : S.prefs.rate < 1 ? "🚶 Normal" : "🐇 Fast");
      document.querySelectorAll(".speedbar [data-rate]").forEach(b => b.classList.toggle("on", Math.abs(+b.dataset.rate - S.prefs.rate) < 0.01));
      document.body.classList.toggle("no-en", !S.prefs.en);
      document.body.classList.toggle("no-pr", !S.prefs.pr);
      document.body.classList.toggle("no-gc", !S.prefs.gc);
    };
    K.forEach(([s, k]) => { const b = $(s); if (b) b.onclick = () => { S.prefs[k] = !S.prefs[k]; save(); setChips(); }; });
    const r = $("#t-rate"); if (r) r.onclick = () => { S.prefs.rate = S.prefs.rate < 0.8 ? 0.9 : S.prefs.rate < 1 ? 1.05 : 0.65; save(); setChips(); };
    refreshChips = setChips;
    setChips();
  }
  function updateProgress() {
    const n = learnable.filter(s => LS.done[s[0]]).length;
    $("#pbar").style.width = (100 * n / learnable.length) + "%";
    document.querySelectorAll("#tabs a").forEach(a => { $(".tick", a).textContent = LS.done[a.dataset.tab] ? "✓" : ""; });
  }
  function doneButton(id, next) {
    const el = h(`<div class="row done-btn"><button class="btn primary">${LS.done[id] ? "✓ Terminé" : "Mark as complete"} → ${next ? "next: " + SECTIONS.find(s => s[0] === next)[1] : ""}</button></div>`);
    $("button", el).onclick = () => { LS.done[id] = true; save(); updateProgress(); if (next) location.hash = next; };
    return el;
  }
  const nextOf = id => { const i = SECTIONS.findIndex(s => s[0] === id); return SECTIONS[i + 1] && SECTIONS[i + 1][0]; };
  const voiceBanner = () => h(`<details class="banner" id="voice-banner" style="display:none"><summary>🔈 <b>No French voice found on this device</b>, so audio won't play. Tap for how to add one.</summary><p style="margin:8px 0 0">You can still read and do the activities. <b>Windows:</b> Settings → Time &amp; language → Speech → Add voices → Français (France). <b>Android:</b> Google Speech Services → add French. <b>iPhone/Mac:</b> Settings → Accessibility → Spoken Content → Voices → French. Chrome and Edge on a desktop usually include one already.</p></details>`);

  const views = {};
  function route() {
    const id = (location.hash || "#overview").slice(1);
    const view = views[id] ? id : "overview";
    document.querySelectorAll("#tabs a").forEach(a => a.classList.toggle("active", a.dataset.tab === view));
    const a = $(`#tabs a[data-tab="${view}"]`); if (a) a.scrollIntoView({ block: "nearest", inline: "center" });
    if (synth) synth.cancel();
    const main = $("#main"); main.innerHTML = "";
    main.appendChild(voiceBanner()); pickVoice();
    views[view](main);
    if (!["overview", "review"].includes(view)) main.appendChild(doneButton(view, nextOf(view)));
    window.scrollTo(0, 0);
  }
  const secHead = (id, lead) => h(`<div><h2>${SECTIONS.find(s => s[0] === id)[2]} ${SECTIONS.find(s => s[0] === id)[1]} <span class="muted h2en">· ${EN[id]}</span></h2><p class="lead">${lead}</p></div>`);

  /* ---------- Overview ---------- */
  views.overview = (m) => {
    const d0 = L.hero || L.dialogues[0];
    m.appendChild(h(`<div class="stack">
      <div class="card hero2" style="border-top:6px solid ${ucol(L.num)}">
        <div class="hero-art">${A.scene(d0)}</div>
        <div class="hero-txt">
          <div class="rub-badge" style="background:${ucol(L.num)}">Unité ${L.num} · Étape ${L.rubrique} · ${esc(RUB[L.rubrique])}</div>
          <div class="fr big" style="color:${ucol(L.num)}">${esc(L.titleFr)}</div>
          <h2 style="margin-top:0">${esc(L.title)}</h2>
          <p class="lead" style="margin:0">${esc(L.pages)} · ${L.dialogues.map(d => esc(d.titleFr || d.title)).join(" · ")}</p>
          ${L.opener ? `<div class="opener" data-say="${esc(L.opener.fr)}">« ${fr(L.opener.fr)} » <span class="en">${esc(L.opener.en)}</span></div>` : ""}
        </div>
      </div>
      <div class="ov-grid">
        <div class="card"><h3 style="margin-top:0">🎯 By the end of this unit you can…</h3><ul class="goals">${L.goals.map(g => `<li>${tz(g)}</li>`).join("")}</ul></div>
        <div class="card"><h3 style="margin-top:0">🧭 At a glance</h3>
          <div class="glance">${L.glance.map(g => `<div class="gl"><span class="gl-ic">${g[0]}</span><div><b>${esc(g[1])}</b><div class="muted">${tz(g[2])}</div></div></div>`).join("")}</div></div>
      </div>
      ${L.situations ? `<div class="sits">${L.situations.map(x => `<div class="sit"><span class="sit-ic">${x[0]}</span><div><b>${esc(x[1])}</b><div class="muted">${tz(x[2])}</div></div></div>`).join("")}</div>` : ""}
      <div><h3>Your path</h3><div class="path">${learnable.map(([id, n, ic], i) => `<a href="#${id}"><div class="step ${LS.done[id] ? "done" : ""}"><span class="num">${LS.done[id] ? "✓" : i + 1}</span><span>${ic} ${n}<br><small class="muted">${EN[id]}</small></span></div></a>`).join("")}</div></div>
      <div class="card muted" style="font-size:14px">💡 <b>How to use this page:</b> work through the tabs in order. Tap any 🔊 or <b class="say" data-say="Bonjour !">bold French</b> to hear it. The chips at the top hide the English, hide the say-it hints, switch the gender colours (<span class="g-m">blue = masculine</span>, <span class="g-f">pink = feminine</span>, <span class="g-pl">purple = plural</span>) and change the audio speed. Your progress is saved in this browser.</div>
    </div>`));
  };

  /* ---------- Dialogues ---------- */
  function bubbleAvatar(d, name) { return A.avatar(d.people[name], 40, { outfit: name === d.staff ? (A.SCENES[d.scene] || {}).outfit : null, oc: (A.SCENES[d.scene] || {}).oc }); }
  views.dialogues = (m) => {
    m.appendChild(secHead("dialogues", "Listen, then read along. <b>▶ Play</b> reads the whole scene. <b>🔁 Shadow</b> pauses after each line so you can repeat it. <b>🎭 Be…</b> lets you take one role: the course reads the other part and waits for you. <b>🙈 Hide text</b> turns it into a listening test. Use the <b>Speed</b> switch on each dialogue (or the 🔊 Speed chip at the top) to slow the voice down."));
    L.dialogues.forEach(d => {
      const names = Object.keys(d.people);
      const card = h(`<div class="card dlg" style="margin-bottom:18px">
        <div class="dlg-head"><div><span class="sit-n">${esc(d.n || "")}</span> ${fr(d.titleFr || d.title, "dtitle")} <span class="muted">· ${esc(d.title)}</span><div class="muted" style="font-size:14px">${tz(d.note || "")}</div></div>
          <div class="row"><button class="btn small" data-act="play">▶ Play</button><button class="btn small" data-act="shadow">🔁 Shadow</button>${names.map(n => `<button class="btn small" data-role="${esc(n)}">🎭 Be ${esc(n.replace(/^(La |Le |L’|L')/i, ""))}</button>`).join("")}<button class="btn small" data-act="hide">🙈 Hide text</button></div></div>
        ${speedBar()}
        <div class="scene-wrap">${A.scene(d)}</div>
        <div class="shadow-cue"></div>
        <div class="bubbles">${d.lines.map((ln, i) => {
          if (!d.people[ln[0]]) return `<div class="stage-dir" data-i="${i}">${esc(ln[1])}${ln[2] ? ` <span class="en">· ${esc(ln[2])}</span>` : ""}</div>`;
          const side = names.indexOf(ln[0]) === 0 ? "left" : "right"; const g = d.people[ln[0]][0];
          return `<div class="bub ${side} ${g}" data-i="${i}">${bubbleAvatar(d, ln[0])}<div class="body"><div class="who">${esc(ln[0])}</div>${fr(ln[1], "line")}<div class="en">${esc(ln[2])}</div></div></div>`;
        }).join("")}</div>
        ${d.glossary ? `<div class="dgloss">${d.glossary.map(x => `<span class="gchip" data-say="${esc(x[0])}">${tz(`[[${x[0]}]]`)} <span class="en">${esc(x[1])}</span></span>`).join("")}</div>` : ""}
      </div>`);
      const bubs = [...card.querySelectorAll("[data-i]")]; const cue = $(".shadow-cue", card);
      const actors = [...card.querySelectorAll(".actor")];
      const spoken = i => d.people[d.lines[i][0]];
      let runId = 0;
      const highlight = i => { bubs.forEach((b, j) => b.classList.toggle("active", j === i)); actors.forEach(a => a.classList.toggle("talking", i >= 0 && a.dataset.who === d.lines[i][0])); if (i >= 0) bubs[i].scrollIntoView({ block: "nearest", behavior: "smooth" }); };
      bubs.forEach((b, i) => { const body = b.querySelector(".body"); if (body) body.onclick = () => { runId++; b.classList.add("revealed"); highlight(i); speak(d.lines[i][1]).then(() => highlight(-1)); }; });
      const wait = ms => new Promise(r => setTimeout(r, ms));
      async function run(mode, role) {
        const my = ++runId;
        card.classList.toggle("roleplay", !!role); bubs.forEach(b => b.classList.toggle("mine", !!role && d.lines[+b.dataset.i][0] === role));
        for (let i = 0; i < d.lines.length; i++) {
          if (my !== runId) return;
          if (!spoken(i)) continue;
          highlight(i);
          if (role && d.lines[i][0] === role) {
            const secs = Math.max(3, Math.round(d.lines[i][1].length / 9));
            for (let s = secs; s > 0; s--) { if (my !== runId) return; cue.textContent = `🎤 Your line! Say it now (${s})… tap the bubble to peek`; await wait(1000); }
            if (my !== runId) return; bubs[i].classList.add("revealed"); cue.textContent = "✓ Model answer:"; await speak(d.lines[i][1]); continue;
          }
          cue.textContent = mode === "shadow" ? "Listen…" : "";
          await speak(d.lines[i][1]);
          if (my !== runId) return;
          if (mode === "shadow") {
            const secs = Math.max(2, Math.round(d.lines[i][1].length / 10));
            for (let s = secs; s > 0; s--) { if (my !== runId) return; cue.textContent = `🎤 À vous ! Repeat it (${s})`; await wait(1000); }
          } else await wait(300);
        }
        highlight(-1); cue.textContent = mode === "shadow" ? "✓ Bravo ! Now try it with the text hidden." : role ? "✓ Bravo ! Swap roles and play the other part." : "";
      }
      card.querySelector('[data-act="play"]').onclick = () => run("play");
      card.querySelector('[data-act="shadow"]').onclick = () => run("shadow");
      card.querySelectorAll("[data-role]").forEach(b => b.onclick = () => run("role", b.dataset.role));
      card.querySelector('[data-act="hide"]').onclick = (e) => { card.classList.toggle("hidetext"); bubs.forEach(b => b.classList.remove("revealed")); e.target.textContent = card.classList.contains("hidetext") ? "👁 Show text" : "🙈 Hide text"; };
      m.appendChild(card);
    });
  };

  /* ---------- Vocabulary ---------- */
  const boxOf = w => S.words[w.t] || 0;
  const setBox = (w, b) => { S.words[w.t] = Math.max(0, Math.min(5, b)); save(); };
  const vfr = (v, cls = "") => fr(v.t, cls, v.g);
  views.vocabulary = (m) => {
    const cats = ["Tout", ...new Set(L.vocab.map(v => v.cat))];
    let cat = "Tout", mode = "pics";
    m.appendChild(secHead("vocabulary", `${L.vocab.length} words and phrases. <b>Picture</b> mode is a picture dictionary, <b>List</b> mode adds say-it hints and notes, then <b>Flashcards</b> test you. Flashcard results feed your spaced-review deck. Nouns are coloured by gender: <span class="g-m">masculine</span>, <span class="g-f">feminine</span>, <span class="g-pl">plural</span>.`));
    const bar = h(`<div class="row" style="justify-content:space-between;margin-bottom:6px"><div class="filters"></div><div class="row"><button class="chip on" data-m="pics">🖼️ Pictures</button><button class="chip" data-m="list">📋 List</button><button class="chip" data-m="flash">🃏 Flashcards</button></div></div>`);
    const box = h(`<div></div>`); m.append(bar, box);
    const drawFilters = () => { $(".filters", bar).innerHTML = cats.map(c => `<button class="chip ${c === cat ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join(""); };
    bar.onclick = e => { const c = e.target.closest("[data-c]"), mm = e.target.closest("[data-m]");
      if (c) cat = c.dataset.c; if (mm) { mode = mm.dataset.m; bar.querySelectorAll("[data-m]").forEach(x => x.classList.toggle("on", x === mm)); }
      if (c || mm) draw(); };
    const list = () => L.vocab.filter(v => cat === "Tout" || v.cat === cat);
    function draw() {
      drawFilters(); box.innerHTML = "";
      if (mode === "pics") box.appendChild(h(`<div class="picdict">${list().map(v => `<button class="pd ${v.g ? "pd-" + v.g : ""}" data-say="${esc(v.t)}"><span class="pd-pic">${v.pic || "💬"}</span>${vfr(v)}<span class="en">${esc(v.en)}</span></button>`).join("")}</div>`));
      else if (mode === "list") box.appendChild(h(`<div class="grid">${list().map(v => `<div class="card vcard ${v.g ? "vc-" + v.g : ""}" data-say="${esc(v.t)}">${playBtn(v.t)}<span class="box">${"●".repeat(boxOf(v))}${"○".repeat(5 - boxOf(v))}</span><div class="pic">${v.pic || "💬"}</div>${vfr(v)}${v.pr ? `<div class="pr">${esc(v.pr)}</div>` : ""}<div>${esc(v.en)}</div>${v.g ? `<span class="tag g-tag-${v.g}">${G[v.g]}</span>` : ""}${v.note ? `<div class="muted" style="font-size:13px">${tz(v.note)}</div>` : ""}</div>`).join("")}</div>`));
      else flash(box, shuffle(list()));
    }
    draw();
  };
  function flash(box, deck) {
    let i = 0, dir = "fr", known = 0;
    const wrap = h(`<div class="flash-wrap"><div class="row" style="justify-content:center"><button class="chip on" data-d="fr">Français → English</button><button class="chip" data-d="en">English → Français</button></div><div class="muted" id="fc-count" style="margin-top:8px"></div><div class="flash"><div class="flash-inner"><div class="face front"></div><div class="face back"></div></div></div><div class="row" style="justify-content:center" id="fc-btns"><button class="btn" data-r="0">😕 Encore</button><button class="btn primary" data-r="1">😀 Je sais</button></div><p class="muted" style="font-size:13px">Tap the card to flip it. Say the French out loud before you flip.</p></div>`);
    box.appendChild(wrap);
    const card = $(".flash", wrap);
    function show() {
      if (i >= deck.length) { wrap.innerHTML = `<div class="card" style="text-align:center"><div class="score">${known}/${deck.length}</div><p>Words you marked “Encore” come back more often in the <a href="#review">Révision</a> tab.</p><button class="btn primary" id="fc-again">Shuffle &amp; go again</button></div>`; $("#fc-again", wrap).onclick = () => { box.innerHTML = ""; flash(box, shuffle(deck)); }; return; }
      const v = deck[i]; card.classList.remove("flipped");
      $("#fc-count", wrap).textContent = `Card ${i + 1} of ${deck.length}`;
      const frFace = `<div class="pic">${v.pic || "💬"}</div>${vfr(v)}${v.pr ? `<div class="pr">${esc(v.pr)}</div>` : ""}${playBtn(v.t)}`;
      const enFace = `<div class="pic">${v.pic || "💬"}</div><div style="font-size:22px;font-weight:600">${esc(v.en)}</div>${v.g ? `<span class="tag g-tag-${v.g}">${G[v.g]}</span>` : ""}`;
      $(".front", wrap).innerHTML = dir === "fr" ? `${vfr(v)}${playBtn(v.t)}` : enFace;
      $(".back", wrap).innerHTML = dir === "fr" ? enFace : frFace;
      card.classList.toggle("gb-m", v.g === "m"); card.classList.toggle("gb-f", v.g === "f"); card.classList.toggle("gb-pl", v.g === "pl");
      if (dir === "fr") speak(v.t);
    }
    card.onclick = (e) => { if (e.target.closest(".play")) return; card.classList.toggle("flipped"); if (dir === "en" && card.classList.contains("flipped")) speak(deck[i].t); };
    $("#fc-btns", wrap).onclick = e => { const r = e.target.closest("[data-r]"); if (!r || i >= deck.length) return; const v = deck[i]; if (r.dataset.r === "1") { known++; setBox(v, boxOf(v) + 1); } else setBox(v, 0); i++; show(); };
    wrap.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { dir = b.dataset.d; wrap.querySelectorAll("[data-d]").forEach(x => x.classList.toggle("on", x === b)); show(); });
    show();
  }

  /* ---------- Grammar ---------- */
  views.grammar = (m) => {
    m.appendChild(secHead("grammar", "The grammar points of the unit, with infographics and builders. Everything French is tappable: tap to hear it."));
    L.grammar.forEach(g => {
      const c = h(`<div class="card gblock" style="margin-bottom:18px"><h3>${tz(g.title)}</h3>${(g.body || []).map(p => `<p>${tz(p)}</p>`).join("")}</div>`);
      (g.info ? [].concat(g.info) : []).forEach(i => c.appendChild(infoEl(i)));
      if (g.table) c.appendChild(tableEl(g.table));
      (g.widget ? [].concat(g.widget) : []).forEach(w => { if (WIDGETS[w.type]) c.appendChild(WIDGETS[w.type](w)); });
      if (g.after) c.appendChild(h(`<div class="after">${g.after.map(p => `<p>${tz(p)}</p>`).join("")}</div>`));
      m.appendChild(c);
    });
  };
  function tableEl(t) {
    const sc = t.say == null ? 0 : t.say;
    return h(`<div style="overflow-x:auto"><table class="g"><tr>${t.head.map(x => `<th>${x}</th>`).join("")}</tr>${t.rows.map(r => `<tr>${r.map((cell, j) => j === sc ? `<td class="frcell">${fr(cell)} ${playBtn(cell)}</td>` : `<td>${tz(cell)}</td>`).join("")}</tr>`).join("")}</table></div>`);
  }

  /* ---------- infographics ---------- */
  const SPLIT = s => { const i = s.indexOf("|"); return i < 0 ? esc(s) : `${esc(s.slice(0, i))}<span class="end">${esc(s.slice(i + 1))}</span>`; };
  const plain = s => s.replace(/\|/g, "");
  const ig = (title, inner, cls = "") => h(`<figure class="info ${cls}">${title ? `<figcaption>${tz(title)}</figcaption>` : ""}${inner}</figure>`);
  const sayChip = (t, g, en) => `<span class="schip ${g ? "g-" + g : ""}" data-say="${esc(plain(t))}">${SPLIT(t)}${en ? ` <span class="en">${esc(en)}</span>` : ""}</span>`;
  const INFO = {
    // conversation map: two lanes, numbered steps
    flow: (s) => ig(s.title || "🗺️ Conversation map", `<div class="flow"><div class="lane-heads"><span>${A.avatar(s.av ? s.av[0] : "f2", 34)} ${esc(s.lanes[0])}</span><span>${esc(s.lanes[1])} ${A.avatar(s.av ? s.av[1] : "m1", 34)}</span></div>${s.steps.map((st, i) => `<div class="fstep ${st.s ? "r" : "l"}"><div class="fcard" data-say="${esc(st.fr)}"><span class="fn">${i + 1}</span><div>${fr(st.fr)}<div class="en">${esc(st.en)}</div>${st.alt ? `<div class="alt">or: ${st.alt.map(a => tz(`[[${a}]]`)).join(" · ")}</div>` : ""}</div></div></div>`).join("")}</div>`, "flow-fig"),
    // gender columns
    gender: (s) => ig(s.title, `<div class="gcols">${s.cols.map(c => `<div class="gcol gc-${c.g}"><div class="ghead"><span class="gbadge">${esc(c.badge)}</span><b>${esc(c.head)}</b></div>${c.items.map(x => sayChip(Array.isArray(x) ? x[0] : x, c.g, Array.isArray(x) ? x[1] : "")).join("")}${c.note ? `<div class="gnote">${tz(c.note)}</div>` : ""}</div>`).join("")}</div>`),
    // merge equations: à + le = au
    merge: (s) => ig(s.title, `<div class="merges">${s.rows.map(r => `<div class="mrow ${r.no ? "nomerge" : ""}" data-say="${esc(r.ex || r.r)}"><span class="mb mb-p">${esc(r.a)}</span><span class="op">+</span><span class="mb mb-${r.g || "x"}">${esc(r.b)}</span><span class="op">=</span><span class="mb mb-r ${r.no ? "" : "fused"}">${esc(r.r)}</span><span class="mex">${r.ex ? fr(r.ex, "", r.g) : ""}${r.en ? ` <span class="en">${esc(r.en)}</span>` : ""}</span></div>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`),
    // a scale from little to a lot (or cheap to expensive, rare to well done…)
    scale: (s) => ig(s.title, `<div class="scale"><div class="sbar" style="background:linear-gradient(90deg,${(s.colors || ["#dcf2ee", "#0f7b6c"]).join(",")})"></div>${s.items.map((x, i) => `<div class="smark ${i % 2 ? "dn" : "up"}" style="left:${x.v}%" data-say="${esc(x.fr)}"><span class="spic">${x.pic || "●"}</span>${fr(x.fr)}<span class="en">${esc(x.en)}</span></div>`).join("")}</div>${s.ends ? `<div class="sends"><span>${esc(s.ends[0])}</span><span>${esc(s.ends[1])}</span></div>` : ""}`),
    // register ladder: formal at the top
    ladder: (s) => ig(s.title, `<div class="ladder">${s.levels.map((l, i) => `<div class="rung" style="margin-left:${i * 6}%;border-color:${l.color}"><div class="rname" style="background:${l.color}">${esc(l.name)}<small>${esc(l.en)}</small></div><div class="rex">${l.ex.map(x => sayChip(x)).join("")}${l.note ? `<div class="muted" style="font-size:13px">${tz(l.note)}</div>` : ""}</div></div>`).join("")}</div>`),
    // conjugation grid with endings highlighted + quiz-me
    conj: (s) => {
      const P = ["je", "tu", "il / elle", "nous", "vous", "ils / elles"];
      const el = ig(s.title, `<div class="conj">${s.verbs.map((v, vi) => `<div class="cverb"><div class="cinf" data-say="${esc(v.inf)}">${fr(v.inf)} <span class="en">${esc(v.en)}</span></div>${v.forms.map((f, k) => `<div class="cform" data-say="${esc(plain(f))}" data-v="${vi}" data-k="${k}"><span class="cp">${P[k]}</span><span class="fr" lang="fr">${SPLIT(f)}</span></div>`).join("")}</div>`).join("")}</div><div class="row" style="margin-top:10px"><button class="btn small qz">🎯 Quiz me</button><span class="qzbox"></span></div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`);
      const box = $(".qzbox", el);
      $(".qz", el).onclick = () => {
        const vi = Math.floor(Math.random() * s.verbs.length), k = Math.floor(Math.random() * 6), v = s.verbs[vi], ans = plain(v.forms[k]);
        box.innerHTML = `<span>${fr(v.inf)} → <b>${P[k].split(" / ")[Math.random() < .5 ? 0 : P[k].split(" / ").length - 1]}</b> …</span> <input class="tin" style="width:200px" placeholder="type the full form"> <button class="btn small">Check</button> <span class="qfb"></span>`;
        const inp = $("input", box); inp.focus();
        const go = () => { const ok = judge([ans, ans.replace(/^(je|j'|tu|il|elle|nous|vous|ils|elles) ?/, ""), ...(ans.match(/^(il|ils) /) ? [ans.replace(/^il /, "elle ").replace(/^ils /, "elles ")] : [])], inp.value); $(".qfb", box).innerHTML = ok ? `<span style="color:var(--good)">✓ ${esc(ans)}</span>` : `<span style="color:var(--bad)">✗ ${esc(ans)}</span>`; speak(ans); };
        $("button", box).onclick = go; inp.onkeydown = e => { if (e.key === "Enter") go(); };
      };
      return el;
    },
    // picture dictionary built from the lesson's vocab (cat) or from items
    pics: (s) => { const items = s.items || L.vocab.filter(v => [].concat(s.from).includes(v.cat)); return ig(s.title, `<div class="picdict small">${items.map(v => `<button class="pd ${v.g ? "pd-" + v.g : ""}" data-say="${esc(v.t)}"><span class="pd-pic">${v.pic}</span>${fr(v.t, "", v.g)}${v.en ? `<span class="en">${esc(v.en)}</span>` : ""}</button>`).join("")}</div>`); },
    // side-by-side panels, optionally with a mini picture
    compare: (s) => ig(s.title, `<div class="cmp" style="grid-template-columns:repeat(${s.cols.length},1fr)">${s.cols.map(c => `<div class="cmpcol" style="border-color:${c.color || "var(--line)"}"><div class="cmphead" style="background:${c.color || "var(--accent)"}">${esc(c.head)}${c.en ? `<small>${esc(c.en)}</small>` : ""}</div>${c.mini ? `<div class="cmppic">${A.mini(c.mini)}</div>` : c.pic ? `<div class="cmppic emo">${c.pic}</div>` : ""}<div class="cmplines">${c.lines.map(x => Array.isArray(x) ? `<div class="cl" data-say="${esc(plain(x[0]))}">${fr(x[0])}<span class="en">${esc(x[1])}</span></div>` : `<div class="cl" data-say="${esc(plain(x))}">${fr(x)}</div>`).join("")}</div></div>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`),
    // a styled real-world document: chalkboard menu, departures board, ticket, receipt, booking card, label
    card: (s) => ig(s.caption || "", `<div class="doc doc-${s.style}"><div class="doc-title">${esc(s.title)}</div>${s.sub ? `<div class="doc-sub">${esc(s.sub)}</div>` : ""}<div class="doc-rows">${s.rows.map(r => `<div class="doc-row" data-say="${esc(r[2] || r[0])}"><span>${esc(r[0])}</span><span class="dots"></span><span>${esc(r[1] || "")}</span></div>`).join("")}</div>${s.foot ? `<div class="doc-foot">${esc(s.foot)}</div>` : ""}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "doc-fig"),
    // a row of mini illustrations with captions
    minis: (s) => ig(s.title, `<div class="minis">${s.items.map(x => `<div class="minic" data-say="${esc(x.fr)}">${A.mini(x.mini, 80)}${fr(x.fr)}<span class="en">${esc(x.en)}</span></div>`).join("")}</div>`),
    // pattern: highlight the fixed part of a sentence frame and its slots
    pattern: (s) => ig(s.title, `<div class="pattern">${s.rows.map(r => `<div class="prow">${r.map(p => typeof p === "string" ? `<span class="pfix" data-say="${esc(p)}">${esc(p)}</span>` : `<span class="pslot ${p.g ? "g-" + p.g : ""}">${p.opts.map(o => `<span data-say="${esc(o)}">${esc(o)}</span>`).join("")}</span>`).join("")}</div>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`)
  };

  const ALPHA = [["A", "a", "a"], ["B", "be", "bé"], ["C", "se", "cé"], ["D", "de", "dé"], ["E", "ə", "euh"], ["F", "ɛf", "effe"], ["G", "ʒe", "gé"], ["H", "aʃ", "ache"], ["I", "i", "i"], ["J", "ʒi", "ji"], ["K", "ka", "ka"], ["L", "ɛl", "elle"], ["M", "ɛm", "emme"],
    ["N", "ɛn", "ène"], ["O", "o", "o"], ["P", "pe", "pé"], ["Q", "ky", "cu"], ["R", "ɛʁ", "erre"], ["S", "ɛs", "esse"], ["T", "te", "té"], ["U", "y", "u"], ["V", "ve", "vé"], ["W", "dubləve", "double vé"], ["X", "iks", "ixe"], ["Y", "igʁɛk", "i grec"], ["Z", "zɛd", "zède"]];
  const LETTER = Object.fromEntries(ALPHA.map(a => [a[0], a[2]]));
  const ACC = { "É": "e accent aigu", "È": "e accent grave", "Ê": "e accent circonflexe", "À": "a accent grave", "Ç": "c cédille", "Ë": "e tréma", "Ï": "i tréma", "Ô": "o accent circonflexe", "Â": "a accent circonflexe", "Î": "i accent circonflexe", "Û": "u accent circonflexe", "Ù": "u accent grave" };
  function spellOut(word) {
    const out = []; const W = word.toUpperCase();
    for (let i = 0; i < W.length; i++) {
      const c = W[i]; if (c === " ") { out.push("espace"); continue; } if (c === "-") { out.push("tiret"); continue; } if (c === "'" || c === "’") { out.push("apostrophe"); continue; }
      if (W[i + 1] === c && LETTER[c]) { out.push("deux " + LETTER[c]); i++; continue; }
      out.push(ACC[c] || LETTER[c] || c);
    }
    return out.join(", ");
  }
  const DAYS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  const SEASONS = [["l'hiver", "❄️", "#cfe3f7", [11, 0, 1], "winter"], ["le printemps", "🌸", "#e6f5d8", [2, 3, 4], "spring"], ["l'été", "☀️", "#fff1c7", [5, 6, 7], "summer"], ["l'automne", "🍂", "#f8e0cc", [8, 9, 10], "autumn"]];
  Object.assign(INFO, {
    // street plan with numbered directions and a "where do I arrive?" listening game
    map: (s) => {
      const el = ig(s.title, `<div class="mapwrap">${A.map(s.map)}</div>${s.steps ? `<ol class="msteps">${s.steps.map(st => `<li data-say="${esc(st.fr)}">${st.mini ? A.mini(st.mini, 44) : ""}<div>${fr(st.fr)}<div class="en">${esc(st.en)}</div></div></li>`).join("")}</ol>` : ""}${s.quiz ? `<div class="row mquiz"><button class="btn small primary">🎧 Où est-ce que j'arrive ? · follow the directions</button><span class="mq-fb muted"></span></div>` : ""}${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "map-fig");
      if (s.quiz) {
        let cur = null; const fb = $(".mq-fb", el);
        $(".mquiz button", el).onclick = () => { cur = s.quiz[Math.floor(Math.random() * s.quiz.length)]; fb.innerHTML = `🔊 Listen, then tap the place where you arrive. <button class="btn small" data-again>▶ again</button>`; speak(cur.say); };
        el.addEventListener("click", e => {
          if (e.target.closest("[data-again]") && cur) { speak(cur.say); return; }
          const pl = e.target.closest(".mplace"); if (!pl || !cur) return; e.stopPropagation();
          const ok = pl.dataset.place === cur.answer, right = s.map.places.find(x => x.id === cur.answer);
          fb.innerHTML = `${ok ? `<span style="color:var(--good)">✓ Bravo ! You're at <b>${esc(right.name)}</b>.</span>` : `<span style="color:var(--bad)">✗ No: it was <b>${esc(right.name)}</b>.</span>`} <span class="fr" lang="fr">${esc(cur.say)}</span>${cur.en ? ` <span class="en">· ${esc(cur.en)}</span>` : ""}`; cur = null;
        }, true);
      }
      return el;
    },
    metro: (s) => ig(s.title, `<div class="mapwrap">${A.metro(s.metro)}</div>${s.steps ? `<ol class="msteps">${s.steps.map(st => `<li data-say="${esc(st.fr)}"><span class="mic">${st.pic || "🚇"}</span><div>${fr(st.fr)}<div class="en">${esc(st.en)}</div></div></li>`).join("")}</ol>` : ""}${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "map-fig"),
    // horizontal bar chart (survey results, percentages…)
    bars: (s) => { const mx = Math.max(...s.items.map(x => x.v)); return ig(s.title, `<div class="bars">${s.items.map((x, i) => `<div class="barrow" data-say="${esc(x.fr)}"><span class="blab"><span class="bpic">${x.pic || ""}</span>${fr(x.fr)}<span class="en">${esc(x.en || "")}</span></span><span class="btrack"><span class="bfill" style="width:${100 * x.v / mx}%;background:${x.c || `hsl(${(i * 47 + 160) % 360} 55% 48%)`}"></span><b>${x.v}${s.unit || ""}</b></span></div>`).join("")}</div>${s.source ? `<div class="muted" style="font-size:12px;margin-top:6px">${esc(s.source)}</div>` : ""}${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`); },
    // number tiles: digit + words, optional maths hint (70 = 60 + 10)
    numbers: (s) => ig(s.title, `<div class="numtiles">${s.list.map(n => { const v = Array.isArray(n) ? n[0] : n, w = Array.isArray(n) ? n[1] : frNum(n); return `<button class="numt ${s.hl && s.hl.includes(v) ? "hl" : ""}" data-say="${esc(w)}"><span class="nd">${typeof v === "number" ? v.toLocaleString("fr-FR") : v}</span><span class="nw">${esc(w)}</span>${s.math && s.math[v] ? `<span class="nm">${esc(s.math[v])}</span>` : ""}</button>`; }).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`),
    alphabet: (s) => ig(s.title || "🔤 L'alphabet · tap a letter", `<div class="alpha">${ALPHA.map(a => `<button class="alet ${"AEIOUY".includes(a[0]) ? "vow" : ""}" data-say="${esc(a[2])}"><b>${a[0]}</b><small>[${a[1]}]</small></button>`).join("")}</div><div class="gnote">${tz(s.note || "Pink letters (A E I O U Y) are the <b>voyelles</b> (vowels); the others are <b>consonnes</b>. Careful: French <b>E</b> sounds like “uh” and <b>I</b> sounds like “ee”, the opposite of what English speakers expect!")}</div>${s.accents ? `<div class="accs">${s.accents.map(a => `<span class="schip" data-say="${esc(a[2])}"><b style="font-size:20px">${esc(a[0])}</b> ${esc(a[1])} <span class="en">${esc(a[3] || "")}</span></span>`).join("")}</div>` : ""}`),
    calendar: (s) => ig(s.title || "📅 La semaine, les mois, les saisons", `<div class="week">${DAYS.map((d, i) => `<button class="wday ${i > 4 ? "we" : ""}" data-say="${d}"><b>${d.slice(0, 3)}</b><span>${d}</span></button>`).join("")}</div><div class="seasons">${SEASONS.map(([n, ic, bg, ms, en]) => `<div class="season" style="background:${bg}"><div class="sh" data-say="${n}"><span style="font-size:26px">${ic}</span> ${fr(n)} <span class="en">${en}</span></div>${ms.map(mm => `<span class="schip" data-say="${MONTHS[mm]}">${MONTHS[mm]}</span>`).join("")}</div>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`),
    // past ← now → future
    timeline: (s) => { const E = s.ends || ["avant", "maintenant", "après"]; return ig(s.title, `<div class="tline"><div class="tl-axis"><span>◀ ${esc(E[0])}</span><span class="tl-now">${esc(E[1])}</span><span>${esc(E[2])} ▶</span></div>${s.items.map((x, i) => `<div class="tl-it ${i % 2 ? "dn" : "up"}" style="left:${x.x}%" data-say="${esc(x.fr)}"><span class="tl-pic">${x.pic || "●"}</span>${fr(x.fr)}<span class="en">${esc(x.en)}</span></div>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`); },
    // drawn flags with country, preposition and nationality
    flags: (s) => ig(s.title, `<div class="flags">${s.items.map(x => `<button class="flagt ${x.g ? "ft-" + x.g : ""}" data-say="${esc(x.say || x.prep || x.country)}">${A.flag(x.c, 44)}<span class="ftc">${esc(x.country)}</span>${x.prep ? `<span class="ftp">${esc(x.prep)}</span>` : ""}${x.nat ? `<span class="ftn">${esc(x.nat)}</span>` : ""}</button>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`),
    // a phone with text messages
    sms: (s) => ig(s.title, `<div class="phone"><div class="ph-top">${esc(s.with || "Messages")}</div>${s.msgs.map(x => `<div class="smsb ${x.me ? "me" : ""}" data-say="${esc(x.t)}"><span class="fr" lang="fr">${esc(x.t)}</span>${x.en ? `<span class="en">${esc(x.en)}</span>` : ""}</div>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "phone-fig"),
    // identity card, badge, registration form
    form: (s) => ig(s.caption || "", `<div class="idform idf-${s.style || "fiche"}"><div class="idf-head">${esc(s.title)}${s.flag ? ` ${A.flag(s.flag, 26)}` : ""}</div><div class="idf-body">${s.photo ? `<div class="idf-photo">${A.avatar(s.photo, 86)}</div>` : ""}<div class="idf-fields">${s.fields.map(f => `<div class="idf-row" data-say="${esc(f[2] || f[1])}"><span class="idf-l">${esc(f[0])}</span><span class="idf-v">${esc(f[1])}</span></div>`).join("")}</div></div>${s.mrz ? `<div class="idf-mrz">${esc(s.mrz)}</div>` : ""}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "doc-fig")
  });
  Object.assign(INFO, {
    // family tree: rows of generations, each person { n: name, k: cast kind, rel: relation to "moi", me: true }
    tree: (s) => ig(s.title, `<div class="ftree">${s.rows.map((row, ri) => `<div class="fgen">${row.map(grp => `<div class="fcouple">${[].concat(grp).map(p => `<div class="fperson ${p.me ? "me" : ""}" data-say="${esc(p.say || (p.rel ? p.rel + ", " + p.n : p.n))}">${A.avatar(p.k, 58)}<b>${esc(p.n)}</b>${p.rel ? `<span class="frel ${p.g ? "g-" + p.g : ""}">${esc(p.rel)}</span>` : ""}</div>`).join(`<span class="fheart">❤</span>`)}</div>`).join("")}</div>${ri < s.rows.length - 1 ? `<div class="flink"></div>` : ""}`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`),
    // a day planner: times with clock faces
    agenda: (s) => ig(s.title, `<div class="agenda">${s.items.map(x => `<div class="ag-row" data-say="${esc(x.say || x.fr)}"><div class="ag-clock">${A.clock(x.h, x.m, 54)}<b>${esc(x.t || timeStr(x.h, x.m))}</b></div><div class="ag-pic">${x.pic || ""}</div><div>${fr(x.fr)}<div class="en">${esc(x.en)}</div></div></div>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`)
  });
  Object.assign(INFO, {
    // apartment floor plan: rooms + furniture; quiz = spoken description → tap the object
    floorplan: (s) => {
      const P = s.plan, svg = `<svg class="map-svg" viewBox="0 0 400 260" role="img" aria-label="plan"><rect width="400" height="260" fill="#f6f1e7"/>${P.rooms.map(r => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.c || "#fff"}" stroke="#5a4a3a" stroke-width="4"/><text x="${r.x + 8}" y="${r.y + 16}" font-size="11" font-weight="800" fill="#5a4a3a">${r.name}</text>${r.m2 ? `<text x="${r.x + r.w - 8}" y="${r.y + 16}" font-size="9" text-anchor="end" fill="#8a7a6a">${r.m2} m²</text>` : ""}`).join("")}${(P.doors || []).map(d => `<rect x="${d[0]}" y="${d[1]}" width="${d[2]}" height="${d[3]}" fill="#f6f1e7"/>`).join("")}${(P.windows || []).map(d => `<rect x="${d[0]}" y="${d[1]}" width="${d[2]}" height="${d[3]}" fill="#8ec5e6"/>`).join("")}${P.items.map(it => `<g class="mplace" data-place="${it.id}" data-say="${esc(it.say || it.name)}" transform="translate(${it.x},${it.y})"><circle r="13" fill="#fff" stroke="#c2508e" stroke-width="2"/><text font-size="15" text-anchor="middle" dominant-baseline="central">${it.pic}</text><text y="${it.y > 225 ? -18 : 23}" font-size="8.5" font-weight="700" text-anchor="middle" fill="#2b2118" paint-order="stroke" stroke="#fff" stroke-width="3">${it.name}</text></g>`).join("")}</svg>`;
      const el = ig(s.title, `<div class="mapwrap">${svg}</div>${s.quiz ? `<div class="row mquiz"><button class="btn small primary">🎧 Qu'est-ce que c'est ? · find the object</button><span class="mq-fb muted"></span></div>` : ""}${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "map-fig");
      if (s.quiz) {
        let cur = null; const fb = $(".mq-fb", el);
        $(".mquiz button", el).onclick = () => { cur = s.quiz[Math.floor(Math.random() * s.quiz.length)]; fb.innerHTML = `🔊 Listen, then tap the object. <button class="btn small" data-again>▶ again</button>`; speak(cur.say); };
        el.addEventListener("click", e => {
          if (e.target.closest("[data-again]") && cur) { speak(cur.say); return; }
          const pl = e.target.closest(".mplace"); if (!pl || !cur) return; e.stopPropagation();
          const ok = pl.dataset.place === cur.answer, right = P.items.find(x => x.id === cur.answer);
          fb.innerHTML = `${ok ? `<span style="color:var(--good)">✓ Oui ! C'est ${esc(right.say || right.name)}.</span>` : `<span style="color:var(--bad)">✗ Non : c'est ${esc(right.say || right.name)}.</span>`} <span class="fr" lang="fr">${esc(cur.say)}</span>${cur.en ? ` <span class="en">· ${esc(cur.en)}</span>` : ""}`; cur = null;
        }, true);
      }
      return el;
    },
    // pictogram signs: interdiction (red) / obligation (blue)
    signs: (s) => ig(s.title, `<div class="signs">${s.items.map(x => `<button class="sign sign-${x.type || "no"}" data-say="${esc(x.fr)}"><span class="sg-ic"><span class="sg-pic">${x.pic}</span>${(x.type || "no") === "no" ? `<span class="sg-bar"></span>` : ""}</span>${fr(x.fr)}<span class="en">${esc(x.en)}</span></button>`).join("")}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`),
    // a postcard
    postcard: (s) => ig(s.caption || "", `<div class="postcard"><div class="pc-left"><div class="pc-photo">${s.pic || "🏖️"}<span>${esc(s.place || "")}</span></div><div class="pc-text">${s.lines.map(l => `<p data-say="${esc(l[0])}"><span class="fr" lang="fr">${esc(l[0])}</span>${l[1] ? `<span class="en">${esc(l[1])}</span>` : ""}</p>`).join("")}</div></div><div class="pc-right"><div class="pc-stamp">${s.stamp || "🇫🇷"}</div><div class="pc-to">${(s.to || []).map(t => `<div>${esc(t)}</div>`).join("")}</div></div></div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "doc-fig"),
    // la maison d'être: the verbs conjugated with être in the passé composé
    etrehouse: (s) => {
      const V = [["naître", "né(e)", "👶", 40, 222], ["mourir", "mort(e)", "🕯️", 360, 222], ["arriver", "arrivé(e)", "🧳", 40, 150], ["partir", "parti(e)", "🛫", 360, 150], ["entrer", "entré(e)", "🚪", 140, 232], ["sortir", "sorti(e)", "🏃", 262, 232], ["monter", "monté(e)", "⬆️", 120, 128], ["descendre", "descendu(e)", "⬇️", 280, 128], ["rester", "resté(e)", "🛋️", 200, 162], ["tomber", "tombé(e)", "🍂", 316, 70], ["venir", "venu(e)", "👋", 80, 72], ["aller", "allé(e)", "➡️", 200, 22], ["passer", "passé(e)", "🚶", 40, 22], ["retourner", "retourné(e)", "🔁", 360, 22]];
      const svg = `<svg class="map-svg etre-svg" viewBox="0 0 400 260"><rect width="400" height="260" fill="#eef6ff"/><path d="M90,110 L200,45 L310,110Z" fill="#e0474f"/><rect x="105" y="110" width="190" height="135" fill="#fff4e0" stroke="#7a5230" stroke-width="3"/><rect x="180" y="185" width="40" height="60" fill="#a0703c"/><rect x="125" y="125" width="40" height="34" fill="#bfe3f5" stroke="#7a5230"/><rect x="235" y="125" width="40" height="34" fill="#bfe3f5" stroke="#7a5230"/><text x="200" y="100" font-size="13" font-weight="900" text-anchor="middle" fill="#fff">ÊTRE</text>${V.map(v => `<g class="mplace" data-say="${v[0]} : il est ${v[1].replace("(e)", "")}" transform="translate(${v[3]},${v[4]})"><rect x="-42" y="-16" width="86" height="32" rx="9" fill="#fff" stroke="#9b4fb0" stroke-width="2"/><text x="-22" y="1" font-size="14" text-anchor="middle" dominant-baseline="central">${v[2]}</text><text x="11" y="-4" font-size="9.5" font-weight="800" text-anchor="middle" fill="#2b2118">${v[0]}</text><text x="11" y="8" font-size="8.5" text-anchor="middle" fill="#9b4fb0">${v[1]}</text></g>`).join("")}</svg>`;
      return ig(s.title || "🏠 La maison d'être", `<div class="mapwrap">${svg}</div>${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "map-fig");
    }
  });
  const BODY = [
    ["tete", "la tête", 196, 20, "l", "à la tête", 14], ["yeux", "les yeux", 208, 34, "r", "aux yeux", 12], ["oreille", "l'oreille", 222, 40, "r", "à l'oreille", 40], ["dents", "les dents", 200, 50, "l", "aux dents", 46],
    ["gorge", "la gorge", 200, 70, "r", "à la gorge"], ["epaule", "l'épaule", 164, 86, "l", "à l'épaule"], ["bras", "le bras", 150, 120, "l", "au bras"], ["dos", "le dos", 222, 112, "r", "au dos"],
    ["ventre", "le ventre", 200, 140, "r", "au ventre"], ["main", "la main", 140, 168, "l", "à la main"], ["genou", "le genou", 186, 222, "l", "au genou"], ["jambe", "la jambe", 214, 238, "r", "à la jambe"], ["pied", "le pied", 222, 284, "r", "au pied"]
  ];
  Object.assign(INFO, {
    body: (s) => {
      const fig = `<g fill="#f1c7a1" stroke="#b07a52" stroke-width="2"><circle cx="200" cy="38" r="22"/><rect x="190" y="58" width="20" height="14"/><path d="M168,72 h64 l10,90 h-84z" fill="#6fa8dc"/><path d="M168,74 l-26,96 l12,4 l24,-84z"/><path d="M232,74 l26,96 l-12,4 l-24,-84z"/><path d="M176,160 h22 l-4,128 h-16z" fill="#3a4f8a"/><path d="M202,160 h22 l-2,128 h-16z" fill="#3a4f8a"/><ellipse cx="186" cy="292" rx="12" ry="5"/><ellipse cx="214" cy="292" rx="12" ry="5"/><circle cx="143" cy="174" r="7"/><circle cx="257" cy="174" r="7"/></g><circle cx="192" cy="34" r="2.5" fill="#333"/><circle cx="208" cy="34" r="2.5" fill="#333"/><path d="M193,48 q7,5 14,0" stroke="#a33" stroke-width="2" fill="none"/>`;
      const marks = BODY.map(([id, name, x, y, side, , ly0]) => { const lx = side === "l" ? 70 : 330, ly = ly0 || y; return `<g class="mplace" data-place="${id}" data-say="${name}"><path d="M${x},${y} L${lx + (side === "l" ? 34 : -34)},${ly}" stroke="#c2508e" stroke-width="1.2" stroke-dasharray="3 2"/><circle cx="${x}" cy="${y}" r="4.5" fill="#c2508e"/><rect x="${lx - 34}" y="${ly - 10}" width="68" height="20" rx="10" fill="#fff" stroke="#c2508e"/><text x="${lx}" y="${ly + 4}" font-size="10.5" font-weight="700" text-anchor="middle" fill="#2b2118">${name}</text></g>`; }).join("");
      const el = ig(s.title || "🧍 Le corps · tap a body part", `<div class="mapwrap" style="max-width:520px"><svg class="map-svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#f6f1e7"/>${fig}${marks}</svg></div>${s.quiz !== false ? `<div class="row mquiz"><button class="btn small primary">🎧 J'ai mal où ? · tap where it hurts</button><span class="mq-fb muted"></span></div>` : ""}${s.note ? `<div class="gnote">${tz(s.note)}</div>` : ""}`, "map-fig");
      if (s.quiz !== false) {
        let cur = null; const fb = $(".mq-fb", el);
        $(".mquiz button", el).onclick = () => { cur = BODY[Math.floor(Math.random() * BODY.length)]; fb.innerHTML = `🔊 Listen, then tap. <button class="btn small" data-again>▶ again</button>`; speak(`J'ai mal ${cur[5]}.`); };
        el.addEventListener("click", e => {
          if (e.target.closest("[data-again]") && cur) { speak(`J'ai mal ${cur[5]}.`); return; }
          const pl = e.target.closest(".mplace"); if (!pl || !cur) return; e.stopPropagation();
          const ok = pl.dataset.place === cur[0];
          fb.innerHTML = `${ok ? `<span style="color:var(--good)">✓ Oui !</span>` : `<span style="color:var(--bad)">✗ Non : ${esc(cur[1])}.</span>`} <span class="fr" lang="fr">J'ai mal ${esc(cur[5])}.</span>`; cur = null;
        }, true);
      }
      return el;
    }
  });
  function infoEl(spec) { return INFO[spec.type] ? INFO[spec.type](spec) : h(`<div></div>`); }

  /* ---------- interactive widgets ---------- */
  const WIDGETS = {};
  const wbox = (label, inner) => h(`<div class="widget"><div class="label">${esc(label)}</div>${inner}</div>`);
  WIDGETS.combo = (w) => {
    let r = w.rows[0].k, c = w.cols[0].k;
    const el = wbox(w.label, `<div class="row rows"></div><div class="row cols" style="margin-top:8px"></div><div class="result" style="font-size:30px"></div><div class="cap" style="text-align:center"></div>`);
    function draw(sayIt) {
      $(".rows", el).innerHTML = w.rows.map(x => `<button class="chip ${x.k === r ? "on" : ""}" data-r="${x.k}">${esc(x.label)}</button>`).join("");
      $(".cols", el).innerHTML = w.cols.map(x => `<button class="chip ${x.k === c ? "on" : ""}" data-c="${x.k}">${esc(x.label)}</button>`).join("");
      const o = w.out[r + "|" + c]; if (!o) return;
      $(".result", el).innerHTML = `${fr(o[0])} ${playBtn(o[0])}`;
      $(".cap", el).innerHTML = `<b class="en">${esc(o[1])}</b>${o[2] ? `<div class="muted" style="font-size:13px;margin-top:4px">${tz(o[2])}</div>` : ""}`;
      if (sayIt) speak(o[0]);
    }
    el.onclick = e => { const a = e.target.closest("[data-r]"), b = e.target.closest("[data-c]"); if (a) r = a.dataset.r; if (b) c = b.dataset.c; if (a || b) draw(true); };
    draw(false); return el;
  };
  // à / de + le, la, l', les — computes the contraction and shows it as an equation
  const plOf = n => n.pl || (/(eau|eu)$/.test(n.t) ? n.t + "x" : /[sxz]$/.test(n.t) ? n.t : n.t + "s");
  function artFor(n, pl) { return pl ? "les" : n.v ? "l'" : n.g === "f" ? "la" : "le"; }
  function contract(p, art) { const M = { à: { le: "au", les: "aux" }, de: { le: "du", les: "des" } }; return (M[p] && M[p][art]) || (art === "l'" ? p + " l'" : p + " " + art); }
  WIDGETS.contract = (w) => {
    let pi = 0, ni = 0, pl = false;
    const el = wbox(w.label || "Build it · pick a word and singular / plural", `<div class="row ps"></div><div class="row ns" style="margin-top:8px"></div><div class="row" style="margin-top:8px"><button class="chip" data-pl="1">➕ plural</button></div><div class="eq"></div><div class="result" style="font-size:30px;min-height:56px"></div><div class="cap" style="text-align:center"></div>`);
    function draw(sayIt) {
      const P = w.preps[pi], n = w.nouns[ni], art = artFor(n, pl), out = contract(P.p, art), noun = pl ? plOf(n) : n.t;
      const phrase = `${P.frame ? P.frame + " " : ""}${out}${out.endsWith("'") ? "" : " "}${noun}`;
      $(".ps", el).innerHTML = w.preps.map((x, i) => `<button class="chip ${i === pi ? "on" : ""}" data-p="${i}">${esc(x.label || x.p)}</button>`).join("");
      $(".ns", el).innerHTML = w.nouns.map((x, i) => `<button class="chip ${i === ni ? "on" : ""}" data-n="${i}"><span class="g-${x.g}">${x.pic || ""} ${esc(x.t)}</span></button>`).join("");
      el.querySelector("[data-pl]").classList.toggle("on", pl);
      const g = pl ? "pl" : n.g, fused = out.indexOf(" ") < 0;
      $(".eq", el).innerHTML = `<span class="mb mb-p">${esc(P.p)}</span><span class="op">+</span><span class="mb mb-${g}">${esc(art)}</span><span class="op">=</span><span class="mb mb-r ${fused ? "fused" : ""}">${esc(out)}</span>`;
      $(".result", el).innerHTML = `${fr(phrase, "", g)} ${playBtn(phrase)}`;
      const why = fused ? `${P.p} + ${art} always fuse into <b>${out}</b>.` : art === "l'" ? `Before a vowel or a silent h, ${n.g === "f" ? "la" : "le"} becomes <b>l'</b> and nothing fuses.` : `${P.p} + la never fuses: <b>${out}</b>.`;
      $(".cap", el).innerHTML = `<div>${why}</div>${P.en ? `<div class="muted en" style="font-size:13px">${esc(P.en(n, pl))}</div>` : ""}`;
      if (sayIt) speak(phrase);
    }
    el.onclick = e => { const a = e.target.closest("[data-p]"), b = e.target.closest("[data-n]"), c = e.target.closest("[data-pl]"); if (a) pi = +a.dataset.p; if (b) ni = +b.dataset.n; if (c) pl = !pl; if (a || b || c) draw(true); };
    draw(false); return el;
  };
  // adjective / determiner agreement: pick a noun, a word and singular/plural
  WIDGETS.agree = (w) => {
    let ni = 0, wi = 0, pl = false;
    const el = wbox(w.label || "Make it agree", `<div class="row ws"></div><div class="row ns" style="margin-top:8px"></div><div class="row" style="margin-top:8px"><button class="chip" data-pl="1">➕ plural</button></div><div class="result" style="font-size:32px;min-height:56px"></div><div class="cap" style="text-align:center"></div>`);
    function draw(sayIt) {
      const n = w.nouns[ni], x = w.words[wi], key = (n.g === "f" ? "f" : "m") + (pl ? "p" : "s");
      let form = x.f[key]; if (key === "ms" && n.v && x.f.msv && x.pos === "before") form = x.f.msv;
      if (key === "ms" && n.v && x.f.msv && x.pos === "det") form = x.f.msv;
      const noun = pl ? plOf(n) : n.t, art = pl ? (x.pos === "before" ? "de" : "des") : n.g === "f" ? "une" : "un";
      const phrase = x.pos === "det" ? `${form} ${noun} ?` : x.pos === "before" ? `${art} ${form} ${noun}` : `${art} ${noun} ${form}`;
      $(".ws", el).innerHTML = w.words.map((y, i) => `<button class="chip ${i === wi ? "on" : ""}" data-w="${i}">${esc(y.f.ms)}${y.en ? ` <span class="muted">· ${esc(y.en)}</span>` : ""}</button>`).join("");
      $(".ns", el).innerHTML = w.nouns.map((y, i) => `<button class="chip ${i === ni ? "on" : ""}" data-n="${i}"><span class="g-${y.g}">${y.pic || ""} ${esc(y.t)}</span></button>`).join("");
      el.querySelector("[data-pl]").classList.toggle("on", pl);
      const base = x.f.ms, tail = form.startsWith(base) ? form.slice(base.length) : null;
      const shown = tail != null && tail ? `${esc(base)}<span class="end">${esc(tail)}</span>` : `<span class="end">${esc(form)}</span>`;
      const g = pl ? "pl" : n.g;
      $(".result", el).innerHTML = `<span class="fr g-${g}" lang="fr">${esc(phrase).replace(esc(form), shown)}</span> ${playBtn(phrase)}`;
      const notes = [];
      notes.push(`${n.t} is <b class="g-${n.g}">${G[n.g]}</b>${pl ? ", <b class='g-pl'>plural</b>" : ""} → <b>${esc(form)}</b>`);
      if (x.pos !== "det" && (tail == null || (form !== base && !["e", "s", "es"].includes(tail)))) notes.push("⚠️ irregular form: learn it by heart");
      if (form === x.f.msv && form !== base) notes.push(`before a vowel sound the masculine becomes <b>${esc(form)}</b>`);
      if (pl && x.pos === "before") notes.push("<b>des</b> becomes <b>de</b> when an adjective comes before the noun");
      if (x.pos === "after") notes.push("most adjectives go <b>after</b> the noun"); else if (x.pos === "before") notes.push("short common adjectives (beau, bon, grand, petit, joli, nouveau…) go <b>before</b> the noun");
      $(".cap", el).innerHTML = notes.map(s => `<div>${s}</div>`).join("") + (w.en ? `<div class="muted en" style="font-size:13px">${esc(w.en(n, x, pl))}</div>` : "");
      if (sayIt) speak(phrase);
    }
    el.onclick = e => { const a = e.target.closest("[data-n]"), b = e.target.closest("[data-w]"), c = e.target.closest("[data-pl]"); if (a) ni = +a.dataset.n; if (b) wi = +b.dataset.w; if (c) pl = !pl; if (a || b || c) draw(true); };
    draw(false); return el;
  };
  // tap an item, then tap the column it belongs in
  WIDGETS.sort = (w) => {
    const items = shuffle(w.items.map((x, i) => Object.assign({ i }, x))); const placed = {}; let sel = null;
    const el = wbox(w.label, `<div class="spool"></div><div class="scols" style="grid-template-columns:repeat(${w.cols.length},1fr)">${w.cols.map(c => `<div class="scol2" data-col="${c.k}" style="border-color:${c.color || "var(--line)"}"><div class="sch" style="background:${c.color || "var(--accent)"}">${esc(c.label)}</div><div class="sin"></div></div>`).join("")}</div><div class="row" style="justify-content:space-between;margin-top:8px"><span class="sfb muted">Tap a word, then tap its column.</span><span class="row"><button class="btn small" data-x="reset">↺ Reset</button><button class="btn small primary" data-x="check">Check</button></span></div>`);
    const draw = () => {
      $(".spool", el).innerHTML = items.filter(x => placed[x.i] == null).map(x => `<button class="tile ${sel === x.i ? "sel" : ""}" data-it="${x.i}">${x.pic ? x.pic + " " : ""}${esc(x.t)}</button>`).join("") || `<span class="muted">All placed. Press Check.</span>`;
      el.querySelectorAll(".scol2").forEach(c => { $(".sin", c).innerHTML = items.filter(x => placed[x.i] === c.dataset.col).map(x => `<button class="tile small" data-back="${x.i}">${x.pic ? x.pic + " " : ""}${esc(x.t)}</button>`).join(""); });
    };
    el.onclick = e => {
      const it = e.target.closest("[data-it]"), col = e.target.closest("[data-col]"), back = e.target.closest("[data-back]"), x = e.target.closest("[data-x]");
      if (it) { sel = +it.dataset.it; speak(w.items[sel].say || w.items[sel].t); draw(); return; }
      if (back) { delete placed[+back.dataset.back]; draw(); return; }
      if (col && sel != null) { placed[sel] = col.dataset.col; sel = null; draw(); return; }
      if (x && x.dataset.x === "reset") { Object.keys(placed).forEach(k => delete placed[k]); sel = null; draw(); $(".sfb", el).textContent = "Tap a word, then tap its column."; }
      if (x && x.dataset.x === "check") {
        let ok = 0; el.querySelectorAll("[data-back]").forEach(b => { const i = +b.dataset.back, good = placed[i] === w.items[i].k; b.classList.add(good ? "ok" : "no"); if (good) ok++; });
        $(".sfb", el).innerHTML = `<b>${ok} / ${w.items.length}</b> correct${ok === w.items.length ? " · Parfait ! 🎉" : " · red ones are in the wrong column (tap to take them back)"}`;
      }
    };
    draw(); return el;
  };
  // prices: see / hear / write French prices
  WIDGETS.prices = (w) => {
    const pool = w.prices || [0.5, 1.2, 2.8, 3.5, 4.9, 8.5, 12, 15.7, 16, 21, 32, 47, 62, 75, 81, 92, 99.99];
    let cur = pool[0];
    const el = wbox(w.label || "Prices in French · hear it, read it, write it", `<div class="pricetag"><span class="pt-num"></span></div><div class="pt-money" style="text-align:center"></div><div class="result pt-words" style="font-size:24px;min-height:40px"></div><div class="row" style="justify-content:center"><button class="btn small" data-a="new">🎲 New price</button><button class="btn small" data-a="hear">🔊 Hear it</button><button class="btn small" data-a="game">🎧 Listening game</button></div><div class="pgame" style="margin-top:10px"></div>`);
    const draw = (sayIt) => { $(".pt-num", el).textContent = priceStr(cur); $(".pt-money", el).innerHTML = A.money(cur); $(".pt-words", el).innerHTML = fr(priceWords(cur)); if (sayIt) speak(priceWords(cur)); };
    el.onclick = e => {
      const b = e.target.closest("[data-a]"); if (!b) return;
      if (b.dataset.a === "new") { cur = pool[Math.floor(Math.random() * pool.length)]; draw(true); }
      if (b.dataset.a === "hear") speak(priceWords(cur));
      if (b.dataset.a === "game") {
        const p = Math.round((Math.random() * 98 + 1) * (Math.random() < .5 ? 1 : 2)) / 2, g = $(".pgame", el);
        g.innerHTML = `<div class="row" style="justify-content:center"><button class="play big-play" style="margin:0">▶</button><input class="tin" style="width:120px" placeholder="e.g. 12,50" inputmode="decimal"> € <button class="btn small primary">Check</button></div><div class="gfb" style="text-align:center"></div>`;
        const say = () => speak(priceWords(p), $(".big-play", g)); say(); $(".big-play", g).onclick = say;
        const chk = () => { const v = parseFloat($("input", g).value.replace(",", ".")); const ok = Math.abs(v - p) < 0.001; $(".gfb", g).innerHTML = `${ok ? "✓ Bravo !" : "✗"} <b>${priceStr(p)}</b> = ${fr(priceWords(p))}`; };
        $(".btn.primary", g).onclick = chk; $("input", g).onkeydown = e2 => { if (e2.key === "Enter") chk(); };
      }
    };
    draw(false); return el;
  };
  // times: clock + 24-hour official time in words
  WIDGETS.clock = (w) => {
    let i = 0; const ts = w.times;
    const el = wbox(w.label || "Train times · the 24-hour clock", `<div class="clockrow"><div class="ck"></div><div><div class="ck-big"></div><div class="ck-words"></div><div class="row" style="margin-top:8px"><button class="btn small" data-a="prev">◀</button><button class="btn small" data-a="next">▶</button><button class="btn small" data-a="rand">🎲 Random</button><button class="btn small" data-a="game">🎧 Which time?</button></div></div></div><div class="cgame"></div>`);
    const draw = (sayIt, t = ts[i]) => { $(".ck", el).innerHTML = A.clock(t[0], t[1], 120); $(".ck-big", el).textContent = timeStr(t[0], t[1]); $(".ck-words", el).innerHTML = fr(timeWords(t[0], t[1])) + (t[2] ? ` <span class="en">· ${esc(t[2])}</span>` : ""); if (sayIt) speak(timeWords(t[0], t[1])); };
    el.onclick = e => {
      const b = e.target.closest("[data-a]"); if (!b) return; const a = b.dataset.a;
      if (a === "prev") { i = (i + ts.length - 1) % ts.length; draw(true); }
      if (a === "next") { i = (i + 1) % ts.length; draw(true); }
      if (a === "rand") { const t = [Math.floor(Math.random() * 24), Math.floor(Math.random() * 12) * 5 + (Math.random() < .3 ? 2 : 0)]; draw(true, t); }
      if (a === "game") {
        const t = [6 + Math.floor(Math.random() * 16), [0, 2, 4, 15, 28, 30, 45, 58][Math.floor(Math.random() * 8)]];
        const opts = shuffle([t, [t[0], (t[1] + 10) % 60], [(t[0] + 1) % 24, t[1]], [(t[0] + 12) % 24, t[1]]]);
        const g = $(".cgame", el); g.innerHTML = `<div class="row" style="justify-content:center;margin-top:10px"><button class="play big-play" style="margin:0">▶</button>${opts.map((o, k) => `<button class="tile" data-o="${k}">${timeStr(o[0], o[1])}</button>`).join("")}</div><div class="gfb" style="text-align:center"></div>`;
        const say = () => speak(timeWords(t[0], t[1]), $(".big-play", g)); say(); $(".big-play", g).onclick = say;
        g.onclick = e2 => { const o = e2.target.closest("[data-o]"); if (!o) return; e2.stopPropagation(); const ok = opts[+o.dataset.o] === t; o.classList.add(ok ? "ok" : "no"); $(".gfb", g).innerHTML = `${ok ? "✓ Exact !" : "✗"} ${timeStr(t[0], t[1])} = ${fr(timeWords(t[0], t[1]))}`; };
      }
    };
    draw(false); return el;
  };


  // numbers: see / hear / type numbers
  WIDGETS.numbers = (w) => {
    const lo = w.min || 0, hi = w.max || 100, rnd = () => lo + Math.floor(Math.random() * (hi - lo + 1));
    let cur = rnd(), score = 0, tries = 0;
    const el = wbox(w.label || `Numbers ${lo}–${hi} · hear it, read it, write it`, `<div class="pricetag"><span class="pt-num"></span></div><div class="result pt-words" style="font-size:24px;min-height:40px"></div><div class="row" style="justify-content:center"><button class="btn small" data-a="new">🎲 New number</button><button class="btn small" data-a="hear">🔊 Hear it</button><button class="btn small" data-a="game">🎧 Listening game</button><button class="btn small" data-a="read">📖 Reading game</button></div><div class="pgame" style="margin-top:10px"></div>`);
    const draw = (sayIt) => { $(".pt-num", el).textContent = cur.toLocaleString("fr-FR"); $(".pt-words", el).innerHTML = fr(frNum(cur)); if (sayIt) speak(frNum(cur)); };
    el.onclick = e => {
      const b = e.target.closest("[data-a]"); if (!b) return; const g = $(".pgame", el);
      if (b.dataset.a === "new") { cur = rnd(); draw(true); }
      if (b.dataset.a === "hear") speak(frNum(cur));
      if (b.dataset.a === "game") {
        const n = rnd();
        g.innerHTML = `<div class="row" style="justify-content:center"><button class="play big-play" style="margin:0">▶</button><input class="tin" style="width:140px" placeholder="type the number" inputmode="numeric"> <button class="btn small primary">Check</button></div><div class="gfb" style="text-align:center"></div>`;
        const say = () => speak(frNum(n), $(".big-play", g)); say(); $(".big-play", g).onclick = say;
        const chk = () => { const v = parseInt($("input", g).value.replace(/\s/g, ""), 10); const ok = v === n; tries++; if (ok) score++; $(".gfb", g).innerHTML = `${ok ? "✓ Bravo !" : "✗"} <b>${n.toLocaleString("fr-FR")}</b> = ${fr(frNum(n))} <span class="muted">· score ${score}/${tries}</span>`; };
        $(".btn.primary", g).onclick = chk; $("input", g).onkeydown = e2 => { if (e2.key === "Enter") chk(); }; $("input", g).focus();
      }
      if (b.dataset.a === "read") {
        const n = rnd(), near = [n + 10, n - 10, n + 1, n - 1, n + 20, n + 2].filter(x => x >= lo && x <= Math.max(hi, n + 20) && x !== n);
        const opts = shuffle([n, ...shuffle([...new Set(near)]).slice(0, 3)]);
        g.innerHTML = `<div style="text-align:center"><div class="fr" style="font-size:22px">${esc(frNum(n))}</div><div class="row" style="justify-content:center;margin-top:8px">${opts.map(o => `<button class="tile" data-o="${o}">${o.toLocaleString("fr-FR")}</button>`).join("")}</div><div class="gfb"></div></div>`;
        g.onclick = e2 => { const o = e2.target.closest("[data-o]"); if (!o) return; e2.stopPropagation(); const ok = +o.dataset.o === n; tries++; if (ok) score++; o.classList.add(ok ? "ok" : "no"); speak(frNum(n)); $(".gfb", g).innerHTML = `${ok ? "✓ Exact !" : "✗ " + n} <span class="muted">· score ${score}/${tries}</span>`; g.onclick = null; };
      }
    };
    draw(false); return el;
  };
  // spelling: the course spells a word, you type it; or type your own name and hear it spelled
  WIDGETS.spell = (w) => {
    let cur = null, score = 0, tries = 0;
    const el = wbox(w.label || "Épelez ! · spelling game", `<div class="row" style="justify-content:center"><button class="btn small primary" data-a="go">🎧 Spell me a word</button><button class="btn small" data-a="again">▶ again (slow)</button></div><div class="row" style="justify-content:center;margin-top:8px"><input class="tin sp-in" style="width:220px" placeholder="type the word you hear" autocomplete="off"><button class="btn small" data-a="chk">Check</button></div><div class="gfb sp-fb" style="text-align:center;min-height:24px"></div><hr style="border:0;border-top:1px dashed var(--line);margin:12px 0"><div class="row" style="justify-content:center"><input class="tin sp-mine" style="width:220px" placeholder="your name, e.g. Tellier"><button class="btn small" data-a="mine">🔤 Spell it for me</button></div><div class="sp-out" style="text-align:center;margin-top:6px"></div>`);
    const fb = $(".sp-fb", el);
    el.onclick = e => {
      const b = e.target.closest("[data-a]"); if (!b) return; const a = b.dataset.a;
      if (a === "go") { cur = w.words[Math.floor(Math.random() * w.words.length)]; $(".sp-in", el).value = ""; fb.textContent = "Listen…"; speak(spellOut(cur), null, 0.7); $(".sp-in", el).focus(); }
      if (a === "again" && cur) speak(spellOut(cur), null, 0.6);
      if (a === "chk" && cur) { tries++; const ok = judge([cur], $(".sp-in", el).value) === 2; if (ok) score++; fb.innerHTML = `${ok ? "✓ Bravo !" : "✗"} <b>${esc(cur)}</b> = <span class="muted">${esc(spellOut(cur))}</span> · score ${score}/${tries}`; }
      if (a === "mine") { const v = $(".sp-mine", el).value.trim(); if (!v) return; $(".sp-out", el).innerHTML = `<span class="fr" lang="fr">${esc(spellOut(v))}</span>`; speak(spellOut(v), null, 0.75); }
    };
    $(".sp-in", el).onkeydown = e => { if (e.key === "Enter") el.querySelector('[data-a="chk"]').click(); };
    return el;
  };
  // dates: le premier mars, lundi 12 octobre…
  WIDGETS.date = (w) => {
    const make = () => ({ m: Math.floor(Math.random() * 12), d: 1 + Math.floor(Math.random() * 28), wd: Math.floor(Math.random() * 7) });
    let cur = make(); const words = x => `${DAYS[x.wd]} ${x.d === 1 ? "premier" : frNum(x.d)} ${MONTHS[x.m]}`;
    const IN = { "l'hiver": "en hiver", "le printemps": "au printemps", "l'été": "en été", "l'automne": "en automne" };
    const el = wbox(w.label || "Quelle est la date ? · dates and seasons", `<div class="datecard"><div class="dc-top"></div><div class="dc-num"></div><div class="dc-wd"></div></div><div class="result dc-words" style="font-size:22px;min-height:36px"></div><div class="cap dc-seas" style="text-align:center"></div><div class="row" style="justify-content:center"><button class="btn small" data-a="new">🎲 New date</button><button class="btn small" data-a="today">📅 Today</button><button class="btn small" data-a="hear">🔊 Hear it</button></div>`);
    const draw = (sayIt) => { $(".dc-top", el).textContent = MONTHS[cur.m]; $(".dc-num", el).textContent = cur.d; $(".dc-wd", el).textContent = DAYS[cur.wd]; $(".dc-words", el).innerHTML = fr(words(cur)); const se = SEASONS.find(x => x[3].includes(cur.m)); $(".dc-seas", el).innerHTML = `${se[1]} C'est ${fr(IN[se[0]])}.${cur.d === 1 ? " <span class='muted'>· the 1st is <b>premier</b>; every other day is just the number.</span>" : ""}`; if (sayIt) speak(words(cur)); };
    el.onclick = e => { const b = e.target.closest("[data-a]"); if (!b) return; if (b.dataset.a === "new") { cur = make(); draw(true); } if (b.dataset.a === "today") { const t = new Date(); cur = { m: t.getMonth(), d: t.getDate(), wd: (t.getDay() + 6) % 7 }; draw(true); } if (b.dataset.a === "hear") speak(words(cur)); };
    draw(false); return el;
  };

  // everyday (12-hour) time: neuf heures moins le quart, midi et demi…
  function hourWord(h) { h = ((h % 24) + 24) % 24; if (h === 0) return "minuit"; if (h === 12) return "midi"; const hh = h > 12 ? h - 12 : h; return `${hh === 1 ? "une" : frNum(hh)} heure${hh > 1 ? "s" : ""}`; }
  function timeInformal(h, m) {
    if (m === 0) return `Il est ${hourWord(h)}.`;
    if (m === 15) return `Il est ${hourWord(h)} et quart.`;
    if (m === 30) return `Il est ${hourWord(h)} et ${(h % 12 === 0) ? "demi" : "demie"}.`;
    if (m === 45) return `Il est ${hourWord(h + 1)} moins le quart.`;
    if (m < 30) return `Il est ${hourWord(h)} ${frNum(m).replace(/^un$/, "une").replace(/ et un$/, " et une")}.`;
    return `Il est ${hourWord(h + 1)} moins ${frNum(60 - m).replace(/^un$/, "une")}.`;
  }
  WIDGETS.clock12 = (w) => {
    const pool = w.times || [[7, 0], [8, 15], [9, 30], [8, 45], [10, 10], [11, 50], [12, 0], [12, 30], [14, 20], [17, 40], [0, 0], [18, 55]];
    let cur = pool[0], score = 0, tries = 0;
    const el = wbox(w.label || "Quelle heure est-il ? · everyday time", `<div class="clockrow"><div class="ck"></div><div><div class="ck-big"></div><div class="ck-words"></div><div class="ck-off muted" style="font-size:13px"></div><div class="row" style="margin-top:8px"><button class="btn small" data-a="rand">🎲 New time</button><button class="btn small" data-a="hear">🔊 Hear it</button><button class="btn small" data-a="game">🎧 Which clock?</button></div></div></div><div class="cgame"></div>`);
    const draw = (sayIt, t = cur) => { cur = t; $(".ck", el).innerHTML = A.clock(t[0], t[1], 120); $(".ck-big", el).textContent = timeStr(t[0], t[1]); $(".ck-words", el).innerHTML = fr(timeInformal(t[0], t[1])); $(".ck-off", el).innerHTML = `official: ${esc(timeWords(t[0], t[1]))}`; if (sayIt) speak(timeInformal(t[0], t[1])); };
    el.onclick = e => {
      const b = e.target.closest("[data-a]"); if (!b) return; const a = b.dataset.a;
      if (a === "rand") draw(true, [Math.floor(Math.random() * 24), [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55][Math.floor(Math.random() * 12)]]);
      if (a === "hear") speak(timeInformal(cur[0], cur[1]));
      if (a === "game") {
        const t = [1 + Math.floor(Math.random() * 11), [0, 15, 30, 45, 10, 50, 20, 40][Math.floor(Math.random() * 8)]];
        const opts = shuffle([t, [t[0], (t[1] + 30) % 60], [(t[0] % 11) + 1, t[1]], [t[0], 60 - t[1] === 60 ? 15 : 60 - t[1]]].filter((o, i, arr) => arr.findIndex(x => x[0] === o[0] && x[1] === o[1]) === i)).slice(0, 4);
        const g = $(".cgame", el); g.innerHTML = `<div class="row" style="justify-content:center;margin-top:10px"><button class="play big-play" style="margin:0">▶</button>${opts.map((o, k) => `<button class="tile ckopt" data-o="${k}">${A.clock(o[0], o[1], 70)}</button>`).join("")}</div><div class="gfb" style="text-align:center"></div>`;
        const say = () => speak(timeInformal(t[0], t[1]), $(".big-play", g)); say(); $(".big-play", g).onclick = say;
        g.onclick = e2 => { const o = e2.target.closest("[data-o]"); if (!o) return; e2.stopPropagation(); const pick = opts[+o.dataset.o], ok = pick[0] === t[0] && pick[1] === t[1]; tries++; if (ok) score++; o.classList.add(ok ? "ok" : "no"); $(".gfb", g).innerHTML = `${ok ? "✓ Exact !" : "✗"} ${fr(timeInformal(t[0], t[1]))} <span class="muted">· score ${score}/${tries}</span>`; g.onclick = null; };
      }
    };
    draw(false); return el;
  };

  /* ---------- Ateliers, DELF, Détente ---------- */
  views.ateliers = (m) => {
    m.appendChild(secHead("ateliers", "The unit's <b>ateliers</b> (group projects you can also do alone), a <b>DELF A2</b> practice task with strategies, and the <b>détente</b> game."));
    (L.ateliers || []).forEach((a, i) => {
      const c = h(`<div class="card atelier" style="margin-bottom:16px"><div class="at-head"><span class="at-n" style="background:${ucol(L.num)}">${i + 1}</span><div><div class="ckind">${a.tech ? "Atelier tech' 📱" : "Atelier"}</div><b style="font-size:19px">${esc(a.title)}</b><div class="muted">${tz(a.intro)}</div></div></div>
        <div class="at-steps">${a.steps.map((st, j) => `<div class="at-step"><div class="at-sh">${["🧠", "🛠️", "🎤", "📌"][j] || "•"} ${esc(st[0])}</div><ul>${st[1].map(x => `<li>${tz(x)}</li>`).join("")}</ul></div>`).join("")}</div>
        ${a.phrases ? `<div class="at-ph"><b>Useful phrases:</b> ${a.phrases.map(x => tz(`[[${x}]]`)).join(" · ")}</div>` : ""}</div>`);
      (a.model ? [].concat(a.model) : []).forEach(x => c.appendChild(infoEl(x)));
      m.appendChild(c);
    });
    if (L.delf) {
      const D = L.delf;
      const c = h(`<div class="card delf" style="margin-bottom:16px"><div class="delf-badge">DELF A2 · ${esc(D.skill)}</div><b style="font-size:19px">${esc(D.title)}</b><p class="muted" style="margin:4px 0 10px">${tz(D.about)}</p>${D.tips ? `<div class="delf-tips">${D.tips.map(t => `<div class="dtip">✅ ${tz(t)}</div>`).join("")}</div>` : ""}<div class="delf-doc"></div><div class="row"><button class="btn primary">Start the DELF task (${D.items.length} questions)</button></div><div class="delf-q"></div></div>`);
      (D.docs || []).forEach(d => $(".delf-doc", c).appendChild(infoEl(d)));
      $(".btn.primary", c).onclick = (e) => { e.target.remove(); runQuiz($(".delf-q", c), D.items, "delf"); };
      m.appendChild(c);
    }
    if (L.detente) {
      const D = L.detente;
      const c = h(`<div class="card detente"><div class="ckind">Détente 🎲</div><b style="font-size:19px">${esc(D.title)}</b><p class="muted" style="margin:4px 0 10px">${tz(D.intro)}</p><div class="dt-doc"></div><div class="row"><button class="btn primary">Play</button></div><div class="dt-q"></div></div>`);
      (D.docs || []).forEach(d => $(".dt-doc", c).appendChild(infoEl(d)));
      $(".btn.primary", c).onclick = (e) => { e.target.remove(); runQuiz($(".dt-q", c), shuffle(D.items), "detente"); };
      m.appendChild(c);
    }
  };

  /* ---------- Pour communiquer ---------- */
  const REG = { poli: ["poli", "polite"], std: ["courant", "everyday"], fam: ["familier", "casual"], sout: ["soutenu", "formal"] };
  views.expressions = (m) => {
    m.appendChild(secHead("expressions", "The book's <i>Pour…</i> boxes: the key phrases of the unit, grouped by what you want to do. Learn the ones marked ⭐ first. Tap a phrase to hear it."));
    L.expressions.forEach(g => {
      m.appendChild(h(`<div class="card xgroup" style="margin-bottom:14px"><div class="xhead"><span class="xic">${g.icon || "🗨️"}</span><div><b>${esc(g.fn)}</b>${g.fnEn ? ` <span class="muted">· ${esc(g.fnEn)}</span>` : ""}</div></div><div class="xitems">${g.items.map(x => `<div class="xitem" data-say="${esc(x[0])}"><div>${x[3] ? "⭐ " : ""}${fr(x[0])}<div class="en">${esc(x[1])}</div></div>${x[2] ? `<span class="reg reg-${x[2]}">${REG[x[2]][0]}<small>${REG[x[2]][1]}</small></span>` : ""}</div>`).join("")}</div>${g.reply ? `<div class="xreply">↪ ${g.reply.map(r => tz(`[[${r}]]`)).join(" · ")}</div>` : ""}</div>`));
    });
    if (L.flow) m.appendChild(infoEl(L.flow));
  };

  /* ---------- Pronunciation ---------- */
  views.sounds = (m) => {
    const sd = L.sounds;
    m.appendChild(secHead("sounds", tz(sd.intro)));
    const g = h(`<div class="stack"></div>`);
    sd.letters.forEach(x => g.appendChild(h(`<div class="card letter"><div class="glyph" data-say="${esc(x.ex[0])}">${esc(x.l)}</div><div><b>${esc(x.name)}</b><p style="margin:4px 0 8px">${tz(x.tip)}</p>${x.ex.map(w => `<span class="ex" data-say="${esc(w)}">${fr(w)}<button class="play" style="width:28px;height:28px;font-size:12px">🔊</button></span>`).join("")}</div></div>`)));
    m.appendChild(g);
    if (sd.pairs && sd.pairs.length) {
      m.appendChild(h(`<h3>Minimal pairs: hear the difference</h3>`));
      const pg = h(`<div class="stack"></div>`);
      sd.pairs.forEach(p => pg.appendChild(h(`<div class="card pair"><div class="side" data-say="${esc(p.a[0])}">${fr(p.a[0])}<div class="en">${esc(p.a[1])}</div></div><div class="vs">${esc(p.note)}<br>vs</div><div class="side" data-say="${esc(p.b[0])}">${fr(p.b[0])}<div class="en">${esc(p.b[1])}</div></div></div>`)));
      m.appendChild(pg);
      m.appendChild(h(`<h3>🎯 Which one did you hear?</h3>`));
      const game = h(`<div class="card" style="text-align:center"><button class="play big-play" id="pg-play">▶</button><div class="row" style="justify-content:center" id="pg-opts"></div><div id="pg-fb" class="muted" style="margin-top:10px">Press play, then choose what you heard.</div><div class="muted" id="pg-score" style="font-size:13px"></div></div>`);
      let cur, right = 0, total = 0;
      const next = () => { const p = sd.pairs[Math.floor(Math.random() * sd.pairs.length)]; cur = { p, pick: Math.random() < .5 ? "a" : "b" }; $("#pg-opts", game).innerHTML = shuffle(["a", "b"]).map(k => `<button class="opt" data-k="${k}">${fr(p[k][0])} <span class="en">${esc(p[k][1])}</span></button>`).join(""); };
      $("#pg-play", game).onclick = (e) => speak(cur.p[cur.pick][0], e.currentTarget, 0.75);
      $("#pg-opts", game).onclick = e => { const b = e.target.closest("[data-k]"); if (!b) return; total++; const ok = b.dataset.k === cur.pick; if (ok) right++;
        $("#pg-fb", game).innerHTML = ok ? `<span style="color:var(--good)">✓ Correct !</span>` : `<span style="color:var(--bad)">✗ It was ${fr(cur.p[cur.pick][0])}</span>`;
        $("#pg-score", game).textContent = `Score: ${right}/${total}`; next(); };
      next(); m.appendChild(game);
    }
    m.appendChild(recorderCard("Record yourself", "Say a word or a dialogue line, then play it back and compare it with the 🔊 model."));
  };
  function recorderCard(title, sub) {
    const el = h(`<div class="card" style="margin-top:16px"><b>🎙️ ${title}</b><p class="muted" style="margin:4px 0 10px;font-size:14px">${sub}</p><div class="rec"><button class="btn" id="rec-btn">● Record</button><span id="rec-state" class="muted"></span><audio id="rec-audio" controls style="display:none;height:36px"></audio></div></div>`);
    let mr = null, chunks = [];
    $("#rec-btn", el).onclick = async () => {
      const st = $("#rec-state", el), btn = $("#rec-btn", el);
      if (mr && mr.state === "recording") { mr.stop(); return; }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mr = new MediaRecorder(stream); chunks = [];
        mr.ondataavailable = e => chunks.push(e.data);
        mr.onstop = () => { stream.getTracks().forEach(t => t.stop()); const a = $("#rec-audio", el); a.src = URL.createObjectURL(new Blob(chunks)); a.style.display = "inline-block"; btn.textContent = "● Record again"; st.innerHTML = ""; a.play().catch(() => {}); };
        mr.start(); btn.textContent = "■ Stop"; st.innerHTML = `<span class="dot"></span> recording…`;
      } catch (e) { st.innerHTML = "The microphone isn't available here. Open the course from its GitHub Pages address to record, or just say it out loud."; }
    };
    return el;
  }

  /* ---------- quiz runner ---------- */
  const PRAISE = ["Correct !", "Bravo !", "Parfait !", "Exact !", "Très bien !"];
  function runQuiz(m, items, quizId, onDone) {
    let i = 0, score = 0; const wrong = [], wrongItems = [];
    const q = h(`<div class="quiz card"></div>`); m.appendChild(q);
    function show() {
      if (i >= items.length) {
        const pct = Math.round(100 * score / items.length);
        LS.best[quizId] = Math.max(LS.best[quizId] || 0, pct); save();
        q.innerHTML = `<div style="text-align:center"><div class="score">${score} / ${items.length}</div><p>${pct >= 90 ? "Excellent ! 🌟" : pct >= 70 ? "Très bien ! 👍" : "Courage ! Review the tabs and try again 💪"} · Best: ${LS.best[quizId]}%</p>${wrong.length ? `<div style="text-align:left"><b>Review these:</b><ul>${wrong.map(w => `<li>${w}</li>`).join("")}</ul></div>` : ""}<button class="btn primary" id="qa">Try again</button></div>`;
        $("#qa", q).onclick = () => { q.remove(); runQuiz(m, shuffle(items), quizId, onDone); };
        if (onDone) onDone(pct, wrongItems, score, items.length); return;
      }
      const it = items[i];
      q.innerHTML = `<div class="qhead"><span>Question ${i + 1} / ${items.length}${it.tag ? ` · <span class="qtag">${esc(it.tag)}</span>` : ""}</span><span>Score ${score}</span></div><div class="qbar"><div style="width:${100 * i / items.length}%"></div></div><div class="qbody"></div>`;
      const body = $(".qbody", q);
      const finish = (ok, correctText, explain, note) => {
        if (ok) score++; else { wrong.push(esc(correctText)); wrongItems.push(it); }
        if (it.word) setBox(it.word, ok ? boxOf(it.word) + 1 : 0);
        body.appendChild(h(`<div class="feedback ${ok ? "good" : "bad"}">${ok ? "✓ " + PRAISE[Math.floor(Math.random() * PRAISE.length)] + (note ? " " + note : "") : "✗ Pas tout à fait. Answer: <b>" + esc(correctText) + "</b>"}${explain ? `<span class="ex-text">${tz(explain)}</span>` : ""}</div>`));
        const nb = h(`<div class="row" style="justify-content:flex-end;margin-top:10px"><button class="btn primary">Suivant →</button></div>`);
        $("button", nb).onclick = () => { i++; show(); }; body.appendChild(nb); $("button", nb).focus();
      };
      if (it.type === "order") return orderQ(body, it, finish);
      if (it.type === "match") return matchQ(body, it, finish);
      if (it.type === "type") return typeQ(body, it, finish);
      let head = "", opts = it.options, answer = it.answer;
      if (it.type === "tf") { opts = ["Vrai", "Faux"]; answer = it.ok ? 0 : 1; head = `<div class="qtext">Vrai ou faux ? <span class="muted" style="font-weight:400">${esc(it.q || "")}</span></div><div class="qsentence">${fr(it.s)} ${playBtn(it.s)}</div>${it.en ? `<div class="en" style="text-align:center">${esc(it.en)}</div>` : ""}`; }
      if (it.type !== "tf" && !it.keepOrder) { const idx = shuffle(opts.map((_, j) => j)); opts = idx.map(j => opts[j]); answer = idx.indexOf(answer); }
      if (it.type === "mcq") head = `${it.pic ? `<div class="qpic">${it.pic}</div>` : ""}<div class="qtext">${tz(esc(it.q).replace(/\[\[([^\]]+)\]\]/g, "[[$1]]"))}</div>`;
      if (it.type === "fill") { const [a, b = ""] = it.sentence.split("___"); head = `<div class="qtext">${esc(it.q || "Complétez · fill in the blank")}</div><div class="qsentence"><span class="fr">${esc(a)}<span class="blank">?</span>${esc(b)}</span></div>${it.en ? `<div class="en" style="text-align:center">${esc(it.en)}</div>` : ""}`; }
      if (it.type === "reply") head = `<div class="qtext">${esc(it.q || "Choose the best reply")}</div><div class="qsentence">${fr(it.prompt)} ${playBtn(it.prompt)}</div>${it.en ? `<div class="en" style="text-align:center">${esc(it.en)}</div>` : ""}`;
      if (it.type === "listen") head = `<div class="qtext">${esc(it.q || "Écoutez. What did you hear?")}</div><button class="play big-play" data-say="${esc(it.say)}">▶</button>`;
      body.innerHTML = head + `<div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}">${tz(esc(o))}</button>`).join("")}</div>`;
      if (it.type === "listen") setTimeout(() => speak(it.say, $(".big-play", body)), 250);
      body.querySelector(".opts").onclick = e => {
        const b = e.target.closest(".opt"); if (!b || e.target.closest(".say")) return;
        const k = +b.dataset.k, ok = k === answer;
        body.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.k === answer) x.classList.add("correct"); });
        if (!ok) b.classList.add("wrong");
        if (it.type === "fill") speak(it.sentence.replace("___", opts[answer]));
        else if (it.type === "reply" || (it.type === "mcq" && it.sayAnswer)) speak(opts[answer]);
        finish(ok, opts[answer], it.explain);
      };
    }
    show();
  }
  function orderQ(body, it, finish) {
    const lines = !!it.lines, pool = shuffle(it.words.map((w, k) => ({ w, k }))); let ans = [];
    body.innerHTML = `<div class="qtext">${lines ? esc(it.q || "Remettez le dialogue dans l'ordre · put the lines in order") : `Construisez la phrase · build the sentence: <span class="en" style="color:var(--ink)">“${esc(it.en)}”</span>`}</div><div class="muted" style="font-size:13px">Tap the ${lines ? "lines" : "words"} in order. Tap a placed one to take it back.</div><div class="tiles answer ${lines ? "lines" : ""}"></div><div class="tiles pool ${lines ? "lines" : ""}"></div><div class="row" style="justify-content:flex-end"><button class="btn small" id="o-clear">Clear</button><button class="btn primary" id="o-check">Check</button></div>`;
    const draw = () => {
      $(".answer", body).innerHTML = ans.map((x, j) => `<button class="tile" data-a="${j}">${lines ? `<b>${j + 1}.</b> ` : ""}${esc(x.w)}</button>`).join("");
      $(".pool", body).innerHTML = pool.filter(x => !ans.includes(x)).map(x => `<button class="tile" data-p="${x.k}">${esc(x.w)}</button>`).join("");
    };
    body.onclick = e => {
      const p = e.target.closest("[data-p]"), a = e.target.closest("[data-a]");
      if (p) { ans.push(pool.find(x => x.k === +p.dataset.p)); draw(); speak(ans[ans.length - 1].w); }
      if (a) { ans.splice(+a.dataset.a, 1); draw(); }
    };
    $("#o-clear", body).onclick = () => { ans = []; draw(); };
    $("#o-check", body).onclick = (e) => {
      if (ans.length < it.words.length) return;
      const ok = ans.every((x, j) => x.w === it.words[j]); body.onclick = null; e.target.disabled = true; $("#o-clear", body).disabled = true;
      if (!lines) speak(it.words.join(" "));
      finish(ok, lines ? it.words.map((w, j) => `${j + 1}. ${w}`).join("  ") : it.words.join(" ").replace(/ ([.,?!])/g, "$1"), it.explain);
    };
    draw();
  }
  function matchQ(body, it, finish) {
    const left = shuffle(it.pairs.map((p, k) => ({ t: p[0], k }))), right = shuffle(it.pairs.map((p, k) => ({ t: p[1], k })));
    let sel = null, matched = 0, mistakes = 0;
    body.innerHTML = `<div class="qtext">${esc(it.q || "Associez · match each French word with its meaning")}</div><div class="match">${left.map((l, j) => `<button class="mi" data-side="l" data-k="${l.k}">${fr(l.t)}</button><button class="mi" data-side="r" data-k="${right[j].k}">${esc(right[j].t)}</button>`).join("")}</div>`;
    body.querySelector(".match").onclick = e => {
      const b = e.target.closest(".mi"); if (!b || b.classList.contains("ok")) return;
      if (b.dataset.side === "l") speak(it.pairs[+b.dataset.k][0]);
      if (!sel || sel.dataset.side === b.dataset.side) { if (sel) sel.classList.remove("sel"); sel = b; b.classList.add("sel"); return; }
      if (sel.dataset.k === b.dataset.k) { sel.classList.replace("sel", "ok"); b.classList.add("ok"); matched++; sel = null;
        if (matched === it.pairs.length) finish(mistakes <= 1, mistakes <= 1 ? "" : `${mistakes} mismatches. Try the match again later`); }
      else { mistakes++; const s = sel; s.classList.remove("sel"); [s, b].forEach(x => x.classList.add("no")); setTimeout(() => [s, b].forEach(x => x.classList.remove("no")), 500); sel = null; }
    };
  }
  const FRKEYS = ["é", "è", "ê", "à", "â", "ç", "î", "ô", "ù", "û", "ë", "ï", "œ", "’"];
  const keyRow = () => `<div class="row frkeys">${FRKEYS.map(c => `<button class="chip" data-ch="${c === "’" ? "'" : c}">${c}</button>`).join("")}</div>`;
  function wireKeys(el) { el.addEventListener("click", e => { const k = e.target.closest("[data-ch]"); if (!k) return; const host = k.closest("li,.qbody,.tsec"); const inp = (host && host._last) || (host && host.querySelector("input")); if (!inp || inp.disabled) return; const s = inp.selectionStart ?? inp.value.length; inp.value = inp.value.slice(0, s) + k.dataset.ch + inp.value.slice(inp.selectionEnd ?? s); inp.focus(); inp.setSelectionRange(s + 1, s + 1); }); }
  function typeQ(body, it, finish) {
    body.innerHTML = `<div class="qtext">${tz(esc(it.q).replace(/\[\[([^\]]+)\]\]/g, "[[$1]]"))}</div>${it.say ? `<div style="text-align:center">${playBtn(it.say, "big-play")}</div>` : ""}${it.en ? `<div class="en" style="text-align:center;margin-bottom:8px">${esc(it.en)}</div>` : ""}<div class="row"><input class="tin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Écrivez en français…" style="flex:1"><button class="btn primary" id="t-check">Check</button></div>${keyRow()}`;
    wireKeys(body);
    const inp = $("input", body); inp.focus(); if (it.say) setTimeout(() => speak(it.say, $(".big-play", body)), 250);
    const go = () => { if (!inp.value.trim()) return; const j = judge(it.answers, inp.value); inp.disabled = true; $("#t-check", body).disabled = true; inp.classList.add(j ? "ok" : "no"); speak(it.answers[0]); finish(j > 0, it.answers[0], it.explain, j === 1 ? `(watch the accents: <b>${esc(it.answers[0])}</b>)` : ""); };
    $("#t-check", body).onclick = go; inp.onkeydown = e => { if (e.key === "Enter") go(); };
  }
  function vocabMCQ(n, dir, pool = L.vocab) {
    return shuffle(pool).slice(0, n).map(w => {
      const distract = shuffle(pool.filter(x => x !== w && x.en !== w.en && x.t !== w.t)).slice(0, 3);
      const opts = shuffle([w, ...distract]);
      return dir === "listen"
        ? { type: "listen", say: w.t, options: opts.map(o => o.en), answer: opts.indexOf(w), word: w, src: w.src, area: "vocabulary", tag: "Vocabulaire" }
        : dir === "en2fr"
          ? { type: "mcq", q: `How do you say “${w.en}”?`, pic: w.pic, options: opts.map(o => o.t), answer: opts.indexOf(w), word: w, src: w.src, area: "vocabulary", sayAnswer: true, tag: "Vocabulaire" }
          : { type: "mcq", q: `What does [[${w.t}]] mean?`, options: opts.map(o => o.en), answer: opts.indexOf(w), word: w, src: w.src, area: "vocabulary", tag: "Vocabulaire" };
    });
  }
  // gender from the article you hear
  function genderItems(n) {
    const pool = L.vocab.filter(v => (v.g === "m" || v.g === "f") && /^(un|une|le|la|du|de la) /i.test(v.t));
    return shuffle(pool).slice(0, n).map(v => ({ type: "listen", q: "Masculin ou féminin ? Listen to the article.", say: v.t, options: ["masculin (un / le / du)", "féminin (une / la / de la)"], answer: v.g === "m" ? 0 : 1, explain: `[[${v.t}]] = ${v.en}`, word: v }));
  }

  /* ---------- Listening ---------- */
  views.listening = (m) => {
    m.appendChild(secHead("listening", "Train your ear without reading. Each question plays by itself: press ▶ to hear it again. Use the Speed switch below if it's too fast."));
    const B = L.classify;
    m.appendChild(h(speedBar()));
    const pick = h(`<div class="row" style="margin-bottom:14px"><button class="chip on" data-l="words">🔤 Words (10)</button><button class="chip" data-l="lines">💬 Dialogue lines (8)</button><button class="chip" data-l="gender">⚥ Masculin / féminin (8)</button>${B ? `<button class="chip" data-l="cls">${esc(B.label)} (8)</button>` : ""}<button class="chip" data-l="dict">⌨️ Dictée (6)</button></div>`);
    const box = h(`<div></div>`); m.append(pick, box);
    const allLines = L.dialogues.flatMap(d => d.lines.filter(l => d.people[l[0]]).map(l => ({ l, d })));
    const sets = {
      words: () => vocabMCQ(10, "listen"),
      gender: () => genderItems(8),
      lines: () => shuffle([...new Map(allLines.filter(x => x.l[1].length > 6).map(x => [x.l[1], x])).values()]).slice(0, 8).map(({ l }) => {
        const others = shuffle([...new Set(allLines.filter(x => x.l[1] !== l[1]).map(x => x.l[2]).filter(t => t !== l[2]))]).slice(0, 3);
        const opts = shuffle([l[2], ...others]); return { type: "listen", say: l[1], options: opts, answer: opts.indexOf(l[2]) };
      }),
      cls: () => shuffle(B.items).slice(0, 8).map(x => ({ type: "listen", q: B.q, say: x.say, options: B.options, answer: x.a, explain: `[[${x.say}]]${x.en ? " · " + x.en : ""}` })),
      dict: () => shuffle(L.vocab.filter(v => v.t.length < 26 && !v.noDict)).slice(0, 6).map(w => ({ type: "type", q: "Dictée · listen and type what you hear", say: w.t, answers: [w.t].concat(w.alt || []), word: w, explain: `[[${w.t}]] = ${w.en}` }))
    };
    const go = k => { box.innerHTML = ""; runQuiz(box, sets[k](), "listen-" + k); };
    pick.onclick = e => { const b = e.target.closest("[data-l]"); if (!b) return; pick.querySelectorAll("[data-l]").forEach(x => x.classList.toggle("on", x === b)); go(b.dataset.l); };
    go("words");
  };

  /* ---------- Activities (practice quiz) ---------- */
  views.practice = (m) => {
    m.appendChild(secHead("practice", "Mixed activities in the style of the book's right-hand page: vrai ou faux, complétez, choisissez, remettez dans l'ordre, associez, plus vocabulary and typing. Your best score is saved."));
    const pick = h(`<div class="row" style="margin-bottom:14px"><button class="chip on" data-p="all">🎲 Everything (${L.practice.length + 10})</button><button class="chip" data-p="book">📘 Unit activities only (${L.practice.length})</button><button class="chip" data-p="voc">🗂️ Vocabulary only (14)</button></div>`);
    const box = h(`<div></div>`); m.append(pick, box);
    const go = k => {
      box.innerHTML = "";
      const matchItem = { type: "match", pairs: shuffle(L.vocab.filter(v => v.t.length < 24)).slice(0, 6).map(v => [v.t, v.en]), tag: "Associez" };
      const items = k === "book" ? shuffle(L.practice) : k === "voc" ? [matchItem, ...vocabMCQ(6, "fr2en"), ...vocabMCQ(4, "en2fr"), ...genderItems(3)] : [...shuffle(L.practice), matchItem, ...vocabMCQ(5, "fr2en"), ...vocabMCQ(4, "en2fr")];
      runQuiz(box, items, k === "all" ? "practice" : "practice-" + k);
    };
    pick.onclick = e => { const b = e.target.closest("[data-p]"); if (!b) return; pick.querySelectorAll("[data-p]").forEach(x => x.classList.toggle("on", x === b)); go(b.dataset.p); };
    go("all");
  };

  /* ---------- Role-play ---------- */
  views.speaking = (m) => {
    m.appendChild(secHead("speaking", "Like the last activity of each book page: <i>Imaginez et jouez le dialogue.</i> Your partner speaks; you answer out loud using the hint, then reveal a model answer and compare."));
    (L.roleplays || []).forEach((rp, idx) => {
      const card = h(`<div class="card rp" style="margin-bottom:16px"><div class="rp-head"><b>${esc(rp.title)}</b><div class="muted" style="font-size:14px">${tz(rp.brief)}</div>${rp.memo ? `<div class="memo">${rp.memo.map(x => `<span>${esc(x)}</span>`).join("")}</div>` : ""}</div><div class="rp-body"></div></div>`);
      const body = $(".rp-body", card); let i = 0;
      function show() {
        if (i >= rp.turns.length) { body.innerHTML = `<div style="text-align:center"><div class="score">🎉</div><p>Dialogue terminé ! Do it again faster, change the details, or swap roles.</p><button class="btn primary">Recommencer</button></div>`; $("button", body).onclick = () => { i = 0; show(); }; return; }
        const r = rp.turns[i];
        body.innerHTML = `<div class="muted">Turn ${i + 1} of ${rp.turns.length}</div>
          <div class="bub left"><div>${A.avatar(rp.partner || "f2", 40)}</div><div class="body" data-say="${esc(r.them)}">${fr(r.them, "line")} ${playBtn(r.them)}${r.themEn ? `<div class="en">${esc(r.themEn)}</div>` : ""}</div></div>
          <div class="yourturn">🎤 <b>À vous :</b> ${tz(r.hint)}</div>
          <div class="row"><button class="btn" data-x="show">👁 Show a model answer</button><button class="btn primary" data-x="next">Suivant →</button></div>
          <div class="model bub right" style="display:none"><div>${A.avatar(rp.you || "m1", 40)}</div><div class="body">${fr(r.you, "line")} ${playBtn(r.you)}${r.youEn ? `<div class="en">${esc(r.youEn)}</div>` : ""}</div></div>`;
        $('[data-x="show"]', body).onclick = () => { $(".model", body).style.display = "flex"; speak(r.you); };
        $('[data-x="next"]', body).onclick = () => { i++; show(); };
        if (idx === 0 || i > 0) setTimeout(() => speak(r.them), 200);
      }
      show(); m.appendChild(card);
    });
    m.appendChild(recorderCard("Record your dialogue", "Record the whole role-play in one take, then listen back."));
  };

  /* ---------- Culture & tips ---------- */
  views.culture = (m) => {
    m.appendChild(secHead("culture", "The unit's <b>Civilisation</b> page, the <b>Oh, le cliché !</b> box, <b>Francophonie</b> and <b>Au fait !</b> notes, plus memory aids and the mistakes learners make most often."));
    (L.cultureInfo || []).forEach(i => m.appendChild(infoEl(i)));
    if (L.culture) { const g = h(`<div class="cgrid"></div>`); L.culture.forEach(t => g.appendChild(h(`<div class="card ccard ${/clich/i.test(t.kind || "") ? "cliche" : /francophonie/i.test(t.kind || "") ? "franco" : ""}"><div class="cic">${t.icon}</div><div><div class="ckind">${esc(t.kind || "Culture")}</div><b>${tz(t.t)}</b><p style="margin:4px 0 0">${tz(t.d)}</p></div></div>`))); m.appendChild(g); }
    if (L.tips) { m.appendChild(h(`<h3>💡 Astuces · tips</h3>`)); const g = h(`<div class="stack"></div>`); L.tips.forEach(t => g.appendChild(h(`<div class="card tipcard"><div class="ic">${t.icon}</div><div><b>${tz(t.t)}</b><p style="margin:4px 0 0">${tz(t.d)}</p></div></div>`))); m.appendChild(g); }
    if (L.mistakes) { m.appendChild(h(`<h3>⚠️ Ne dites pas… dites ! · common mistakes</h3>`)); m.appendChild(h(`<div class="mist">${L.mistakes.map(x => `<div class="mrow2"><span class="no-say">✗ ${esc(x[0])}</span><span class="yes-say" data-say="${esc(x[1])}">✓ ${fr(x[1])}</span><span class="muted">${tz(x[2] || "")}</span></div>`).join("")}</div>`)); }
  };

  /* ---------- Review ---------- */
  views.review = (m) => {
    const weak = L.vocab.filter(w => boxOf(w) <= 1);
    const strong = L.vocab.filter(w => boxOf(w) >= 3).length;
    m.appendChild(secHead("review", "Spaced repetition: each correct answer moves a word up a box (○ → ●●●●●) and a miss sends it back to the start. Review the weak words every day until they reach 3 boxes or more."));
    m.appendChild(h(`<div class="grid" style="margin-bottom:16px">
      <div class="card"><div class="muted">Sections completed</div><div class="score" style="font-size:36px;text-align:left">${learnable.filter(s => LS.done[s[0]]).length}/${learnable.length}</div></div>
      <div class="card"><div class="muted">Words known well (3+)</div><div class="score" style="font-size:36px;text-align:left">${strong}/${L.vocab.length}</div></div>
      <div class="card"><div class="muted">Best activities score</div><div class="score" style="font-size:36px;text-align:left">${LS.best.practice != null ? LS.best.practice + "%" : "—"}</div></div></div>`));
    const box = h(`<div></div>`); m.appendChild(box);
    if (weak.length) { box.appendChild(h(`<h3>Due for review: ${weak.length} words</h3>`)); flash(box, shuffle(weak)); }
    else box.appendChild(h(`<div class="card">🎉 Nothing due: every word is in box 2 or higher. Come back tomorrow, or test yourself in the Activités tab.</div>`));
    const reset = h(`<div style="margin-top:30px"><button class="btn small" id="rs">Reset this unit's progress</button> <span id="rs-c"></span></div>`);
    $("#rs", reset).onclick = () => { $("#rs-c", reset).innerHTML = `Are you sure? <button class="btn small" id="rs-y">Yes, reset</button>`; $("#rs-y", reset).onclick = () => { S.lessons[L.id] = { done: {}, best: {} }; L.vocab.forEach(w => delete S.words[w.t]); save(); location.reload(); }; };
    m.appendChild(reset);
  };

  /* =====================================================================
     TEST PAGES: bilan (fixed test), mastery test, results
     ===================================================================== */
  function initTest() {
    S.tests = S.tests || {};
    const TS = S.tests[T.id] = S.tests[T.id] || { attempts: [] };
    const lessonName = id => { const l = L.lessons.find(x => x.id === id); return l ? `Unité ${l.num} · ${l.titleFr}` : id; };
    const lessonLink = (id, area) => window.COURSE_HOME ? `<a href="${id}.html#${area || "grammar"}">${esc(lessonName(id))} ↗</a>` : esc(lessonName(id));
    const fmt = n => (Math.round(n * 2) / 2).toString();
    document.title = `${T.title} · Édito A2`;
    document.body.innerHTML = header(`${BOOK} · ${T.label ? esc(T.label) : "Étape " + T.rubrique} · ${esc(T.pages)}`, esc(T.title), `<button class="chip" id="t-en">EN</button><button class="chip" id="t-gc"><span class="gdot m"></span><span class="gdot f"></span> Genre</button><button class="chip" id="t-rate">🐢 Speed</button>`) + `
      <nav class="tabs" id="tabs"><a href="#book" data-tab="book">📘 Bilan</a><a href="#mastery" data-tab="mastery">🎯 Mastery test</a><a href="#results" data-tab="results">📈 Résultats</a></nav>
    </header><main id="main"></main>
    <footer>Original test covering the units of this étape · answers explained item by item.</footer>`;
    wirePrefs();

    function saveAttempt(a) { TS.attempts.push(Object.assign({ date: new Date().toISOString() }, a)); save(); }
    function weakReport(wrongs) {
      const g = {}; wrongs.forEach(w => { if (!w.lesson) return; g[w.lesson] = g[w.lesson] || { n: 0, areas: new Set() }; g[w.lesson].n++; g[w.lesson].areas.add(w.area || "grammar"); });
      const ids = Object.keys(g).sort((a, b) => g[b].n - g[a].n);
      if (!ids.length) return `<p>🌟 No mistakes. You've mastered these units: on to the next ones!</p>`;
      return `<b>Revise these first:</b><ul>${ids.map(id => `<li>${lessonLink(id, [...g[id].areas][0])} · ${g[id].n} mistake${g[id].n > 1 ? "s" : ""}</li>`).join("")}</ul>`;
    }
    const fbLine = (ok, ans, why) => `${ok ? "✓" : "✗ Answer: " + fr(ans)} <span class="muted">${tz(esc(why || ""))}</span>`;
    const pickTiles = (sec, el, onPick) => { const pick = {}; let locked = false;
      el.addEventListener("click", e => { const b = e.target.closest("[data-j]"); if (!b || locked) return; const i = b.dataset.i; pick[i] = +b.dataset.j;
        el.querySelectorAll(`[data-i="${i}"]`).forEach(x => x.classList.toggle("sel", x === b)); if (onPick) onPick(+i, pick[i]); });
      return { pick, lock() { locked = true; } };
    };
    const markTiles = (el, i, a, p) => el.querySelectorAll(`[data-i="${i}"]`).forEach((x, j) => { if (j === a) x.classList.add("ok"); else if (j === p) x.classList.add("no"); });

    const mixSec = (sec) => Object.assign({}, sec, { items: sec.items.map(it => { const idx = shuffle(it.o.map((_, j) => j)); return Object.assign({}, it, { o: idx.map(j => it.o[j]), a: idx.indexOf(it.a) }); }) });
    const W = {};
    W.match = (sec) => {
      const bs = shuffle(sec.items.map(x => x.b));
      const el = h(`<ol class="titems">${sec.items.map((it, i) => `<li><span class="qsent">${fr(it.a)} → <select data-i="${i}"><option value="">……</option>${bs.map(b => `<option>${esc(b)}</option>`).join("")}</select></span><div class="fb"></div></li>`).join("")}</ol>`);
      return { el, check() {
        let sc = 0; const wrong = [];
        el.querySelectorAll("select").forEach(s => { const it = sec.items[+s.dataset.i], ok = s.value === it.b; s.disabled = true; s.classList.add(ok ? "ok" : "no");
          if (ok) sc++; else wrong.push({ lesson: it.lesson });
          s.closest("li").querySelector(".fb").innerHTML = fbLine(ok, it.b, it.why); });
        return { score: sc * sec.marks / sec.items.length, wrong };
      } };
    };
    W.dialogue = (sec) => {
      sec = mixSec(sec);
      const el = h(`<ol class="titems">${sec.items.map((it, i) => `<li><div class="mini">${it.lines.map(([who, txt]) => `<div><b>${esc(who)} :</b> ${txt === "___" ? `<span class="blank" data-b="${i}">……</span>` : fr(txt)}</div>`).join("")}</div><div class="opts" style="margin-top:6px">${it.o.map((o, j) => `<button class="tile opt-l" data-i="${i}" data-j="${j}">${"abc"[j]}. ${esc(o)}</button>`).join("")}</div><div class="fb"></div></li>`).join("")}</ol>`);
      const P = pickTiles(sec, el, (i, j) => { el.querySelector(`[data-b="${i}"]`).textContent = sec.items[i].o[j]; speak(sec.items[i].o[j]); });
      return { el, check() {
        P.lock(); let sc = 0; const wrong = [];
        sec.items.forEach((it, i) => { const ok = P.pick[i] === it.a; if (ok) sc++; else wrong.push({ lesson: it.lesson });
          markTiles(el, i, it.a, P.pick[i]); el.querySelectorAll("li > .fb")[i].innerHTML = fbLine(ok, it.o[it.a], it.why); });
        return { score: sc * sec.marks / sec.items.length, wrong };
      } };
    };
    W.type = (sec) => {
      const el = h(`<div>${keyRow()}<ol class="titems tgrid">${sec.items.map((it, i) => `<li><span class="qsent">${tz(esc(it.p).replace(/\[\[([^\]]+)\]\]/g, "[[$1]]")).replace("___", `<input class="tin" data-i="${i}" type="text" autocomplete="off" autocapitalize="off" spellcheck="false">`)}${it.p.includes("___") ? "" : ` → <input class="tin" data-i="${i}" type="text" autocomplete="off" autocapitalize="off" spellcheck="false">`}</span>${it.en ? `<div class="en" style="font-size:13px">${esc(it.en)}</div>` : ""}<div class="fb"></div></li>`).join("")}</ol></div>`);
      el.addEventListener("focusin", e => { if (e.target.matches("input")) el._last = e.target; });
      el.querySelector(".frkeys").addEventListener("click", e => { const k = e.target.closest("[data-ch]"); const inp = el._last; if (!k || !inp || inp.disabled) return; const s = inp.selectionStart ?? inp.value.length; inp.value = inp.value.slice(0, s) + k.dataset.ch + inp.value.slice(inp.selectionEnd ?? s); inp.focus(); inp.setSelectionRange(s + 1, s + 1); });
      return { el, check() {
        let sc = 0; const wrong = [];
        el.querySelectorAll("input").forEach(inp => { const it = sec.items[+inp.dataset.i], ans = it.a.split("|"), j = judge(ans, inp.value), ok = j > 0; inp.disabled = true; inp.classList.add(ok ? "ok" : "no");
          if (ok) sc++; else wrong.push({ lesson: it.lesson });
          inp.closest("li").querySelector(".fb").innerHTML = fbLine(ok, ans[0], (j === 1 ? "watch the accents: " + ans[0] + ". " : "") + (it.why || "")); });
        return { score: sc * sec.marks / sec.items.length, wrong };
      } };
    };
    W.tf = (sec) => {
      const el = h(`<ol class="titems">${sec.items.map((it, i) => `<li><div class="row" style="justify-content:space-between"><span class="qsent">${fr(it.s)} ${playBtn(it.s)}</span><span class="row"><button class="tile" data-i="${i}" data-j="0">✓ Vrai</button><button class="tile" data-i="${i}" data-j="1">✗ Faux</button></span></div>${it.en ? `<div class="en" style="font-size:13px">${esc(it.en)}</div>` : ""}<div class="fb"></div></li>`).join("")}</ol>`);
      const P = pickTiles(sec, el);
      return { el, check() {
        P.lock(); let sc = 0; const wrong = [];
        sec.items.forEach((it, i) => { const a = it.ok ? 0 : 1, ok = P.pick[i] === a; if (ok) sc++; else wrong.push({ lesson: it.lesson });
          markTiles(el, i, a, P.pick[i]); el.querySelectorAll("li > .fb")[i].innerHTML = `${ok ? "✓" : "✗"} <b>${it.ok ? "Vrai" : "Faux"}</b> <span class="muted">${tz(esc(it.why || ""))}</span>`; });
        return { score: sc * sec.marks / sec.items.length, wrong };
      } };
    };
    W.choose = (sec) => {
      sec = mixSec(sec);
      const el = h(`<ol class="titems">${sec.items.map((it, i) => `<li><div class="row" style="justify-content:space-between"><span class="qsent"><b>${esc(it.s)}</b>${it.en ? ` <span class="muted">(${esc(it.en)})</span>` : ""}</span><span class="row">${it.o.map((o, j) => `<button class="tile" data-i="${i}" data-j="${j}">${"abcd"[j]}) ${esc(o)}</button>`).join("")}</span></div><div class="fb"></div></li>`).join("")}</ol>`);
      const P = pickTiles(sec, el, (i, j) => speak(sec.items[i].o[j]));
      return { el, check() {
        P.lock(); let sc = 0; const wrong = [];
        sec.items.forEach((it, i) => { const ok = P.pick[i] === it.a; if (ok) sc++; else wrong.push({ lesson: it.lesson });
          markTiles(el, i, it.a, P.pick[i]); el.querySelectorAll("li > .fb")[i].innerHTML = fbLine(ok, it.o[it.a], it.why); });
        return { score: sc * sec.marks / sec.items.length, wrong };
      } };
    };
    W.listen = (sec) => {
      sec = mixSec(sec);
      const el = h(`<ol class="titems">${sec.items.map((it, i) => `<li><div class="row" style="gap:8px;align-items:center"><button class="btn small" data-play="${i}">▶ Écouter</button><b>${esc(it.q)}</b></div><div class="opts" style="margin-top:6px">${it.o.map((o, j) => `<button class="tile opt-l" data-i="${i}" data-j="${j}">${"abcd"[j]}. ${esc(o)}</button>`).join("")}</div><div class="fb"></div></li>`).join("")}</ol>`);
      const heard = {};
      el.addEventListener("click", e => { const b = e.target.closest("[data-play]"); if (!b) return; const i = +b.dataset.play; heard[i] = (heard[i] || 0) + 1; speak(sec.items[i].say); if (heard[i] >= 2) b.textContent = "▶ Écouter encore"; });
      const P = pickTiles(sec, el);
      return { el, check() {
        P.lock(); let sc = 0; const wrong = [];
        sec.items.forEach((it, i) => { const ok = P.pick[i] === it.a; if (ok) sc++; else wrong.push({ lesson: it.lesson, area: "dialogues" });
          markTiles(el, i, it.a, P.pick[i]); el.querySelectorAll("li > .fb")[i].innerHTML = `${fbLine(ok, it.o[it.a], it.why)}<div class="muted" style="margin-top:4px">📝 ${fr(it.say)}</div>`; });
        return { score: sc * sec.marks / sec.items.length, wrong };
      } };
    };
    /* self-assessed productions (DELF mock): write and speak */
    const rubricEl = (sec) => `<div class="rubric"><b>Auto-évaluation</b> <span class="muted" style="font-size:13px">· compare with the model, then mark yourself honestly</span>${sec.rubric.map(([lab, mx], k) => `<div class="rrow"><span>${tz(esc(lab))}</span><select data-r="${k}">${Array.from({ length: mx * 2 + 1 }, (_, v) => `<option value="${v / 2}">${fmt(v / 2)}</option>`).join("")}</select><span class="muted">/ ${mx}</span></div>`).join("")}</div>`;
    const rubricScore = (el, sec) => { let t = 0; el.querySelectorAll("select[data-r]").forEach(x => { t += +x.value; x.disabled = true; }); return Math.min(t, sec.marks); };
    const modelEl = (it) => `<div class="model" hidden><div class="muted" style="font-size:13px;margin-bottom:4px">Model answer (one possible answer)</div>${it.model.map(p => `<p>${fr(p)} ${playBtn(p)}</p>`).join("")}${it.note ? `<p class="muted" style="font-size:13px">💡 ${tz(esc(it.note))}</p>` : ""}</div>`;
    W.write = (sec) => {
      const it = sec.items[0];
      const el = h(`<div><div class="task">${fr(it.task)}</div>${it.en ? `<div class="en" style="font-size:13px">${esc(it.en)}</div>` : ""}
        <textarea class="wtext" rows="7" placeholder="Écrivez ici… (${it.min || 60} mots minimum)" spellcheck="false"></textarea>
        <div class="row" style="justify-content:space-between"><span class="muted wc">0 mot</span><button class="btn small showm">👀 Show the model answer</button></div>${modelEl(it)}${rubricEl(sec)}</div>`);
      const ta = $(".wtext", el), wc = $(".wc", el);
      ta.addEventListener("input", () => { const n = (ta.value.match(/[^\s'’]+/g) || []).length; wc.textContent = `${n} mot${n > 1 ? "s" : ""}${n && n < (it.min || 60) ? " · too short" : ""}`; });
      $(".showm", el).onclick = () => { $(".model", el).hidden = false; };
      return { el, check() { ta.disabled = true; $(".model", el).hidden = false; const score = rubricScore(el, sec);
        return { score, wrong: score < sec.marks * 0.6 ? [{ lesson: it.lesson }] : [] }; } };
    };
    W.speak = (sec) => {
      const el = h(`<div>${sec.items.length > 1 ? `<p class="muted" style="font-size:14px">Choose <b>one</b> subject.</p>` : ""}${sec.items.map((it, i) => `<div class="card subj" data-s="${i}" style="margin:8px 0"><b>${sec.items.length > 1 ? "Sujet " + "AB"[i] + " · " : ""}</b>${fr(it.task)}${it.en ? `<div class="en" style="font-size:13px">${esc(it.en)}</div>` : ""}
        ${it.prep ? `<div class="muted" style="font-size:13px;margin-top:6px">Ideas: ${it.prep.map(x => fr(x)).join(" · ")}</div>` : ""}
        <div class="row" style="margin-top:8px"><button class="btn small rec" data-s="${i}">🎙️ Record myself</button><audio class="aud" controls hidden></audio><button class="btn small showm" data-s="${i}">👀 Model answer</button></div>${modelEl(it)}</div>`).join("")}${rubricEl(sec)}</div>`);
      el.addEventListener("click", async e => {
        const sm = e.target.closest(".showm"); if (sm) { sm.closest(".subj").querySelector(".model").hidden = false; return; }
        const rb = e.target.closest(".rec"); if (!rb) return;
        if (rb._mr) { rb._mr.stop(); return; }
        try {
          const st = await navigator.mediaDevices.getUserMedia({ audio: true }); const mr = new MediaRecorder(st), ch = [];
          mr.ondataavailable = ev => ch.push(ev.data);
          mr.onstop = () => { st.getTracks().forEach(t => t.stop()); const a = rb.parentNode.querySelector(".aud"); a.src = URL.createObjectURL(new Blob(ch)); a.hidden = false; rb._mr = null; rb.textContent = "🎙️ Record again"; };
          mr.start(); rb._mr = mr; rb.textContent = "⏹ Stop";
        } catch (err) { rb.textContent = "🎙️ Microphone not available: speak aloud"; rb.disabled = true; }
      });
      return { el, check() { el.querySelectorAll(".model").forEach(x => x.hidden = false); const score = rubricScore(el, sec);
        return { score, wrong: score < sec.marks * 0.6 ? [{ lesson: sec.items[0].lesson }] : [] }; } };
    };
    const SECNAME = { listen: "Écoutez", match: "Associez", dialogue: "Complétez le dialogue", type: "Écrivez", tf: "Vrai ou faux", choose: "Choisissez", write: "Production écrite", speak: "Production orale" };

    const paperReport = (rs) => { const P = {}; rs.forEach(([sec, r]) => { P[sec.paper] = P[sec.paper] || { got: 0, max: 0 }; P[sec.paper].got += r.score; P[sec.paper].max += sec.marks; });
      const tot = Object.values(P).reduce((a, p) => a + p.got, 0), min = T.papers.minEach || 5, pass = tot >= T.papers.pass && Object.values(P).every(p => p.got >= min);
      return `<table class="g" style="max-width:420px;margin:0 auto 12px">${Object.entries(P).map(([k, p]) => `<tr><td>${esc(k)}</td><td style="text-align:right"><b>${fmt(p.got)}</b> / ${p.max}${p.got < min ? " ⚠️" : ""}</td></tr>`).join("")}</table>
        <p style="font-size:18px">${pass ? "🎓 <b>Réussi !</b> You'd pass the DELF A2 (50/100 or more, at least " + min + "/25 in each paper)." : "📚 <b>Not yet:</b> you need " + T.papers.pass + "/100 in total and at least " + min + "/25 in each paper."}</p>`; };
    const views = {};
    views.book = (m) => {
      const start = Date.now(), results = {};
      const max = T.sections.reduce((a, s) => a + s.marks, 0);
      m.appendChild(h(`<div><h2>${fr(T.titleFr)}</h2><p class="lead">${tz(esc(T.intro))} The test is out of <b>${max} points</b>.</p></div>`));
      const widgets = [];
      T.sections.forEach((sec, n) => {
        const w = W[sec.type](sec); widgets.push([sec, w]);
        const card = h(`<div class="card tsec" style="margin-bottom:14px"><div class="row" style="justify-content:space-between;align-items:flex-start"><div style="flex:1"><div style="font-size:18px;font-weight:600">${n + 1}. ${fr(sec.instr)}</div><div class="muted" style="font-size:14px">${tz(esc(sec.instrEn))}</div></div><div class="markbox"><span class="got">—</span><span class="of">${sec.marks}</span></div></div>${sec.time ? `<div class="row" style="margin:6px 0"><button class="btn small tmr">⏱ Start the ${sec.time}-minute timer</button></div>` : ""}<div class="tbody"></div><div class="row" style="justify-content:space-between;margin-top:10px"><span class="secfb muted"></span><button class="btn small chk">Check this section</button></div></div>`);
        if (sec.doc) [].concat(sec.doc).forEach(d => $(".tbody", card).appendChild(infoEl(d)));
        if (sec.time) $(".tmr", card).onclick = (e) => { const b = e.target; if (b._t) return; let left = sec.time * 60;
          const tick = () => { const mm = Math.floor(left / 60), ss = left % 60; b.textContent = left > 0 ? `⏱ ${mm}:${String(ss).padStart(2, "0")} left` : "⏰ Temps écoulé ! Time's up"; if (left-- <= 0) { clearInterval(b._t); b.classList.add("primary"); } };
          tick(); b._t = setInterval(tick, 1000); };
        if (sec.paper && sec.paper !== (T.sections[n - 1] || {}).paper) m.appendChild(h(`<h3 class="paperh">${esc(sec.paper)}</h3>`));
        $(".tbody", card).appendChild(w.el);
        const doCheck = () => { if (results[sec.id]) return results[sec.id]; const r = w.check(); results[sec.id] = r;
          $(".got", card).textContent = fmt(r.score); card.classList.add(r.score === sec.marks ? "full" : "part"); $(".chk", card).disabled = true;
          if (sec.explain) $(".secfb", card).innerHTML = "💡 " + tz(esc(sec.explain)); return r; };
        $(".chk", card).onclick = doCheck; w.doCheck = doCheck;
        m.appendChild(card);
      });
      const fin = h(`<div class="card" style="text-align:center"><button class="btn primary" id="finish">Finish &amp; save my score</button><div id="summary"></div></div>`);
      m.appendChild(fin);
      $("#finish", fin).onclick = () => {
        const rs = widgets.map(([sec, w]) => [sec, w.doCheck()]);
        const total = rs.reduce((a, [, r]) => a + r.score, 0), wrong = rs.flatMap(([, r]) => r.wrong);
        const pct = Math.round(100 * total / max);
        saveAttempt({ mode: "book", score: total, max, pct, secs: Math.round((Date.now() - start) / 1000), weak: wrong.map(w => w.lesson) });
        $("#finish", fin).remove();
        $("#summary", fin).innerHTML = `<div class="score">${fmt(total)} / ${max}</div><p>${T.papers ? "" : pct >= 90 ? "Excellent ! 🌟 You're ready for the next units." : pct >= 70 ? "Très bien 👍 Revise the units below, then retake the test." : "Revise the words and practise a bit more before moving on 💪"}</p>
          <table class="g" style="max-width:420px;margin:0 auto 12px">${rs.map(([sec, r], i) => `<tr><td>${i + 1}. ${SECNAME[sec.type] || sec.type}</td><td style="text-align:right"><b>${fmt(r.score)}</b> / ${sec.marks}</td></tr>`).join("")}</table>
          ${T.papers ? paperReport(rs) : ""}<div style="text-align:left">${weakReport(wrong)}</div><button class="btn" id="retake">↻ Retake the bilan</button> <a class="btn" href="#mastery" style="text-decoration:none">🎯 Try the mastery test</a>`;
        $("#retake", fin).onclick = () => route();
      };
      if (T.selfCheck) m.appendChild(h(`<div class="card" style="margin-top:14px"><b>Auto-évaluation · self-assessment</b><p class="muted" style="font-size:14px">Can you do these in French? Rate yourself from 1 (not yet) to 5 (easily).</p><ol>${T.selfCheck.map(s => `<li>${fr(s[0])} <span class="muted">· ${esc(s[1])}</span></li>`).join("")}</ol></div>`));
    };
    views.mastery = (m) => {
      m.appendChild(h(`<div><h2>🎯 Mastery test</h2><p class="lead">A fresh mix of about 30 questions every time, drawn from <b>all ${L.lessons.length} units</b> this test covers: vocabulary both ways, listening, gender, grammar, sentence building and dialogues. Your mistakes also go into each word's spaced-review deck.</p>
        <div class="card"><b>Covers:</b><ul>${L.lessons.map(l => `<li>${lessonLink(l.id, "overview")}</li>`).join("")}</ul><button class="btn primary" id="go">Start a new mastery test</button></div></div>`));
      $("#go", m).onclick = () => {
        m.innerHTML = ""; const start = Date.now();
        const all = L.dialogues.flatMap(d => d.lines.filter(l => d.people[l[0]]).map(l => ({ l, src: d.src }))).filter(x => x.l[1].length > 8);
        const lines = shuffle(all).slice(0, 4).map(({ l, src }) => {
          const others = shuffle([...new Set(all.map(x => x.l[2]).filter(t => t !== l[2]))]).slice(0, 3);
          const o = shuffle([l[2], ...others]); return { type: "listen", say: l[1], options: o, answer: o.indexOf(l[2]), src, area: "dialogues" };
        });
        const prac = shuffle(L.practice).slice(0, 12).map(x => Object.assign({ area: "practice" }, x));
        const gen = genderItems(3).map(x => Object.assign({ src: x.word.src, area: "vocabulary" }, x));
        const items = shuffle([...vocabMCQ(5, "fr2en"), ...vocabMCQ(3, "en2fr"), ...vocabMCQ(3, "listen"), ...gen, ...lines, ...prac]);
        runQuiz(m, items, T.id + "-mastery", (pct, wrongItems, sc, n) => {
          saveAttempt({ mode: "mastery", score: sc, max: n, pct, secs: Math.round((Date.now() - start) / 1000), weak: wrongItems.map(w => w.src) });
          m.appendChild(h(`<div class="card" style="margin-top:14px">${weakReport(wrongItems.map(w => ({ lesson: w.src, area: w.area })))}<button class="btn primary" id="again">New mastery test</button></div>`));
          $("#again", m).onclick = () => route();
        });
      };
    };
    views.results = (m) => {
      const at = TS.attempts.slice().reverse();
      const best = mode => { const xs = TS.attempts.filter(a => a.mode === mode); return xs.length ? Math.max(...xs.map(a => a.pct)) + "%" : "—"; };
      m.appendChild(h(`<div><h2>📈 Résultats</h2><p class="lead">Your attempts are saved in this browser. Aim for 90% or more on both tests before moving on.</p>
        <div class="grid" style="margin-bottom:16px"><div class="card"><div class="muted">Best bilan</div><div class="score" style="font-size:36px;text-align:left">${best("book")}</div></div>
        <div class="card"><div class="muted">Best mastery test</div><div class="score" style="font-size:36px;text-align:left">${best("mastery")}</div></div>
        <div class="card"><div class="muted">Attempts</div><div class="score" style="font-size:36px;text-align:left">${TS.attempts.length}</div></div></div>
        ${at.length ? `<div class="card" style="overflow-x:auto"><table class="g"><tr><th>Date</th><th>Test</th><th>Score</th><th></th><th>Time</th></tr>${at.map(a => `<tr><td>${new Date(a.date).toLocaleString()}</td><td>${a.mode === "book" ? "📘 Bilan" : "🎯 Mastery"}</td><td><b>${a.mode === "book" ? fmt(a.score) : a.score} / ${a.max}</b></td><td style="width:35%"><div class="qbar" style="margin:0"><div style="width:${a.pct}%;background:${a.pct >= 90 ? "var(--good)" : a.pct >= 70 ? "var(--accent)" : "var(--bad)"}"></div></div></td><td>${Math.floor(a.secs / 60)}m ${a.secs % 60}s</td></tr>`).join("")}</table></div>
        <div class="card" style="margin-top:14px"><b>From your latest attempt:</b> ${weakReport((at[0].weak || []).map(l => ({ lesson: l })))}</div>` : `<div class="card">No attempts yet. Start with the <a href="#book">📘 Bilan</a>.</div>`}</div>`));
    };
    function route() {
      const id = (location.hash || "#book").slice(1), v = views[id] ? id : "book";
      document.querySelectorAll("#tabs a").forEach(a => a.classList.toggle("active", a.dataset.tab === v));
      if (synth) synth.cancel();
      const m = $("#main"); m.innerHTML = ""; m.appendChild(voiceBanner()); pickVoice(); views[v](m); window.scrollTo(0, 0);
    }
    route(); window.addEventListener("hashchange", route);
  }

  // exposed for the build-time self-test (node)
  window.FR_HELPERS = { frNum, priceWords, timeWords, timeInformal, contract, artFor, plOf, judge };
  if (typeof document === "undefined" || !document.body) return;
  if (T) initTest();
  else { renderShell(); updateProgress(); route(); window.addEventListener("hashchange", route); }
})();
