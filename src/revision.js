// Révisions: one page to search and revise the whole course (vocabulary, grammar, expressions, common mistakes).
// Reads window.LESSONS (all units) and the learner's saved word boxes from localStorage. Printable; vocabulary exports to CSV (Anki-friendly).
(function () {
  const L = (window.LESSONS || []).slice().sort((a, b) => a.num - b.num);
  const KEY = "french-edito-a2-v1";
  let S = {}; try { S = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { S = {}; }
  const W = S.words || {};
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const tz = h => String(h).replace(/\[\[(?:(m|f|pl):)?([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, g, say, show) => `<b class="say ${g ? "g-" + g : ""}" lang="fr" data-say="${esc(say)}">${show || say}</b>`);
  const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/\[\[(?:(?:m|f|pl):)?([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, a, b) => b || a);
  const bare = s => String(s).toLocaleLowerCase("fr").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/[’']/g, "'");
  const G = { m: "masc.", f: "fém.", pl: "plur." };
  const UC = window.UCOL || [];
  const boxOf = t => Math.min(5, +W[t] || 0);
  const home = window.COURSE_HOME ? `<a href="index.html">← Cours</a> · ` : "";

  // ---- speech ----
  let voice = null, rate = 0.9;
  const pickVoice = () => { const vs = speechSynthesis.getVoices(); voice = vs.find(v => /^fr(-|_)FR/i.test(v.lang)) || vs.find(v => /^fr/i.test(v.lang)) || null; };
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  const speak = t => { if (!("speechSynthesis" in window)) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = "fr-FR"; if (voice) u.voice = voice; u.rate = rate; speechSynthesis.speak(u); };
  document.addEventListener("click", e => { const el = e.target.closest("[data-say]"); if (el) speak(el.dataset.say); });

  // ---- data ----
  const unitName = l => `Unité ${l.num} · ${l.titleFr}`;
  const VOC = []; L.forEach(l => l.vocab.forEach(v => VOC.push({ l, v })));
  const GRAM = []; L.forEach(l => l.grammar.forEach(g => GRAM.push({ l, g })));
  const EXP = []; L.forEach(l => (l.expressions || []).forEach(x => EXP.push({ l, x })));
  const MIS = []; L.forEach(l => (l.mistakes || []).forEach(m => MIS.push({ l, m })));

  document.title = "Révisions · Édito A2";
  document.body.innerHTML = `<header class="top"><div class="top-inner"><div class="brand"><small>${home}Édito A2 · the whole course</small><b>Révisions · Revision</b></div>
    <div class="row noprint" style="gap:6px"><button class="chip" id="rv-rate">🔊 Speed: normal</button><button class="chip" id="rv-print">🖨️ Print</button><button class="chip" id="rv-csv">⬇️ Vocabulary CSV</button></div></div>
    <nav class="tabs noprint" id="rv-tabs"><a href="#vocab" data-t="vocab">🗂️ Vocabulaire</a><a href="#grammar" data-t="grammar">🧩 Grammaire</a><a href="#expr" data-t="expr">🗨️ Pour communiquer</a><a href="#mistakes" data-t="mistakes">⚠️ Erreurs fréquentes</a></nav></header>
    <main id="rv-main"><div class="card noprint rv-bar">
      <input id="rv-q" type="search" placeholder="Search in French or English… (accents optional)" autocomplete="off" spellcheck="false">
      <select id="rv-u"><option value="">All units</option>${L.map(l => `<option value="${l.id}">${esc(unitName(l))}</option>`).join("")}</select>
      <label class="rv-weak" id="rv-weak-l"><input type="checkbox" id="rv-weak"> Only words to review</label>
      <span class="muted" id="rv-count"></span></div><div id="rv-out"></div></main>
    <footer>Everything from the ${L.length} units in one place. Tap any French word to hear it. Word boxes (●) come from your flashcard reviews in each unit.</footer>`;

  const $ = s => document.querySelector(s);
  const RATES = [[0.9, "normal"], [0.7, "slow"], [1.05, "fast"]]; let ri = 0;
  $("#rv-rate").onclick = () => { ri = (ri + 1) % RATES.length; rate = RATES[ri][0]; $("#rv-rate").textContent = "🔊 Speed: " + RATES[ri][1]; };
  $("#rv-print").onclick = () => window.print();
  $("#rv-csv").onclick = () => {
    const rows = [["french", "english", "gender", "unit", "category", "note"]].concat(filtVoc().map(({ l, v }) => [v.t, v.en, v.g || "", unitName(l), v.cat, strip(v.note || "")]));
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" })); a.download = "edito-a2-vocabulaire.csv"; document.body.appendChild(a); a.click(); a.remove();
  };

  let tab = (location.hash || "#vocab").slice(1);
  const match = (q, ...fields) => !q || fields.some(f => bare(strip(f || "")).includes(q));
  const unitOk = l => !$("#rv-u").value || $("#rv-u").value === l.id;
  const badge = l => `<a class="ubadge rv-u" href="${l.id}.html" style="background:${UC[l.num] || "#2f9c8a"}">U${l.num}</a>`;
  function filtVoc() { const q = bare($("#rv-q").value.trim()), weak = $("#rv-weak").checked; return VOC.filter(({ l, v }) => unitOk(l) && match(q, v.t, v.en, v.cat, v.note) && (!weak || boxOf(v.t) < 3)); }

  const views = {
    vocab() {
      const list = filtVoc(); $("#rv-count").textContent = `${list.length} words`;
      if (!list.length) return `<div class="card">No word matches.</div>`;
      const byU = {}; list.forEach(x => (byU[x.l.id] = byU[x.l.id] || []).push(x));
      return Object.keys(byU).map(id => { const l = byU[id][0].l; const cats = {}; byU[id].forEach(({ v }) => (cats[v.cat] = cats[v.cat] || []).push(v));
        return `<section class="card rv-sec"><h2>${badge(l)} ${esc(unitName(l))} <span class="muted" style="font-size:14px;font-weight:400">· ${esc(l.title)}</span></h2>${Object.entries(cats).map(([c, vs]) => `<h3>${esc(c)}</h3><table class="g rv-voc">${vs.map(v => `<tr class="${v.g ? "vc-" + v.g : ""}"><td class="rv-pic">${v.pic || ""}</td><td><b class="say ${v.g ? "g-" + v.g : ""}" lang="fr" data-say="${esc(v.t)}">${esc(v.t)}</b>${v.g ? ` <span class="tag g-tag-${v.g}">${G[v.g]}</span>` : ""}${v.note ? `<div class="muted" style="font-size:13px">${tz(v.note)}</div>` : ""}</td><td>${esc(v.en)}</td><td class="rv-box" title="flashcard box">${"●".repeat(boxOf(v.t))}${"○".repeat(5 - boxOf(v.t))}</td></tr>`).join("")}</table>`).join("")}</section>`; }).join("");
    },
    grammar() {
      const q = bare($("#rv-q").value.trim());
      const list = GRAM.filter(({ l, g }) => unitOk(l) && match(q, g.title, ...(g.body || [])));
      $("#rv-count").textContent = `${list.length} grammar points`;
      if (!list.length) return `<div class="card">No grammar point matches.</div>`;
      return `<div class="rv-grid">${list.map(({ l, g }) => `<div class="card rv-g"><div>${badge(l)} <a class="muted" style="font-size:12px" href="${l.id}.html#grammar">open in the unit ↗</a></div><h3>${tz(g.title)}</h3>${(g.body || []).map(b => `<p>${tz(b)}</p>`).join("")}</div>`).join("")}</div>`;
    },
    expr() {
      const q = bare($("#rv-q").value.trim());
      const list = EXP.map(({ l, x }) => ({ l, x, items: x.items.filter(it => match(q, it[0], it[1], x.fn, x.fnEn)) })).filter(e => unitOk(e.l) && e.items.length);
      $("#rv-count").textContent = `${list.reduce((a, e) => a + e.items.length, 0)} expressions`;
      if (!list.length) return `<div class="card">No expression matches.</div>`;
      return `<div class="rv-grid">${list.map(({ l, x, items }) => `<div class="card rv-g"><div>${badge(l)}</div><h3>${x.icon || ""} ${esc(x.fn)} <span class="muted" style="font-size:13px;font-weight:400">· ${esc(x.fnEn || "")}</span></h3><ul class="rv-ex">${items.map(([f, e, reg, star]) => `<li>${star ? "⭐ " : ""}<b class="say" lang="fr" data-say="${esc(f)}">${esc(f)}</b> <span class="muted">${esc(e)}</span>${reg && reg !== "std" ? ` <span class="tag">${esc(reg)}</span>` : ""}</li>`).join("")}</ul></div>`).join("")}</div>`;
    },
    mistakes() {
      const q = bare($("#rv-q").value.trim());
      const list = MIS.filter(({ l, m }) => unitOk(l) && match(q, ...m));
      $("#rv-count").textContent = `${list.length} common mistakes`;
      if (!list.length) return `<div class="card">No mistake matches.</div>`;
      return `<div class="card"><table class="g rv-mis"><tr><th></th><th>✗ Not this</th><th>✓ But this</th><th>Why</th></tr>${list.map(({ l, m: [w, r, why] }) => `<tr><td>${badge(l)}</td><td><s>${esc(w)}</s></td><td><b class="say" lang="fr" data-say="${esc(r)}">${esc(r)}</b></td><td class="muted">${tz(esc(why))}</td></tr>`).join("")}</table></div>`;
    }
  };
  function render() {
    if (!views[tab]) tab = "vocab";
    document.querySelectorAll("#rv-tabs a").forEach(a => a.classList.toggle("active", a.dataset.t === tab));
    $("#rv-weak-l").style.display = tab === "vocab" ? "" : "none";
    $("#rv-out").innerHTML = views[tab]();
  }
  document.querySelectorAll("#rv-tabs a").forEach(a => a.onclick = e => { e.preventDefault(); tab = a.dataset.t; history.replaceState(null, "", "#" + tab); render(); });
  let timer; $("#rv-q").oninput = () => { clearTimeout(timer); timer = setTimeout(render, 120); };
  $("#rv-u").onchange = render; $("#rv-weak").onchange = render;
  render();
})();
