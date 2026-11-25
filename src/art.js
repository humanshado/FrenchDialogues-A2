/* Illustration library for the Édito A1 interactive course (FrenchDialogues).
   Everything is drawn as inline SVG (no image files): characters, shop/scene backdrops and small
   diagrams used by the grammar infographics. window.ART is used by engine.js. */
(function () {
  "use strict";

  /* ---------- cast: the look of each character kind ---------- */
  // skin, hair colour, hair style, top, bottom, skirt?, extra
  const CAST = {
    m1: { skin: "#f1c7a1", hair: "#3b2a1e", hs: "short", top: "#2f6db5", bottom: "#33414f" },
    m2: { skin: "#c98e62", hair: "#1b1b1b", hs: "short", top: "#1f8a8a", bottom: "#4a3b2e", beard: true },
    m3: { skin: "#8d5a3b", hair: "#141414", hs: "curly", top: "#e0a526", bottom: "#2c3e50" },
    m4: { skin: "#f3d2b4", hair: "#9a9a9a", hs: "bald", top: "#7a4b8c", bottom: "#3a3a3a", glasses: true },
    m5: { skin: "#e9b98f", hair: "#c58a3a", hs: "short", top: "#c0392b", bottom: "#2d4f6b" },
    m6: { skin: "#f0c8a0", hair: "#5a3a22", hs: "short", top: "#3f7a5a", bottom: "#555", glasses: true },
    f1: { skin: "#f1c7a1", hair: "#7a2a1c", hs: "long", top: "#a3407e", bottom: "#33414f", skirt: true },
    f2: { skin: "#c98e62", hair: "#1b1b1b", hs: "bun", top: "#6b4e9b", bottom: "#2c3e50" },
    f3: { skin: "#f3d2b4", hair: "#d9a74a", hs: "bob", top: "#c0392b", bottom: "#2d4f6b", skirt: true },
    f4: { skin: "#8d5a3b", hair: "#141414", hs: "curly", top: "#3f7a5a", bottom: "#4a3b2e", skirt: true },
    f5: { skin: "#e9b98f", hair: "#5a3a22", hs: "long", top: "#d35400", bottom: "#2c3e50" },
    f6: { skin: "#f3d2b4", hair: "#b8b8b8", hs: "bun", top: "#2f6db5", bottom: "#555", skirt: true, glasses: true },
    m7: { skin: "#5e3b26", hair: "#111", hs: "short", top: "#0f7b6c", bottom: "#1f2a44" },
    f7: { skin: "#f6dcc4", hair: "#2a1a10", hs: "long", top: "#f0b429", bottom: "#3a4f8a" },
    f8: { skin: "#d8a67c", hair: "#111", hs: "bob", top: "#e0474f", bottom: "#222" },
    k1: { skin: "#f1c7a1", hair: "#7a4a22", hs: "short", top: "#e67e22", bottom: "#2f6db5", child: true },
    k2: { skin: "#8d5a3b", hair: "#141414", hs: "curly", top: "#9b59b6", bottom: "#c0392b", skirt: true, child: true }
  };
  const SHOES = "#3a2a1e", INK = "#2b2118";

  /* ---------- one standing character; feet at (0,0), about 200 units tall ---------- */
  // o: { outfit: "apron"|"uniform"|"vest"|"suit"|"coat", oc: outfit colour, phone, sit, wave, hold: emoji }
  function person(kind, o = {}) {
    const L = CAST[kind] || CAST.m1, s = L.skin, hc = L.hair;
    const p = [];
    // hair behind the head
    if (L.hs === "long") p.push(`<path d="M-21,-176 Q-24,-200 0,-199 Q24,-200 21,-176 L24,-138 Q0,-130 -24,-138Z" fill="${hc}"/>`);
    if (L.hs === "bob") p.push(`<path d="M-21,-176 Q-24,-200 0,-199 Q24,-200 21,-176 L22,-158 Q0,-152 -22,-158Z" fill="${hc}"/>`);
    // legs / skirt
    if (o.sit) {
      p.push(`<rect x="-24" y="-92" width="48" height="26" rx="8" fill="${L.bottom}"/>`);
    } else if (L.skirt) {
      p.push(`<rect x="-15" y="-60" width="9" height="56" fill="${s}"/><rect x="6" y="-60" width="9" height="56" fill="${s}"/>`);
      p.push(`<path d="M-26,-94 L26,-94 L33,-52 L-33,-52Z" fill="${L.bottom}"/>`);
    } else {
      p.push(`<rect x="-24" y="-94" width="22" height="90" rx="4" fill="${L.bottom}"/><rect x="2" y="-94" width="22" height="90" rx="4" fill="${L.bottom}"/>`);
    }
    if (!o.sit) p.push(`<ellipse cx="-13" cy="-3" rx="13" ry="5" fill="${SHOES}"/><ellipse cx="13" cy="-3" rx="13" ry="5" fill="${SHOES}"/>`);
    // torso
    const top = o.outfit === "vest" || o.outfit === "suit" ? "#ffffff" : L.top;
    p.push(`<path d="M-30,-90 L-30,-140 Q-30,-153 -17,-153 L17,-153 Q30,-153 30,-140 L30,-90Z" fill="${top}"/>`);
    if (o.outfit === "vest") p.push(`<path d="M-30,-90 L-30,-140 Q-30,-153 -17,-153 L-6,-153 L0,-115 L0,-90Z M30,-90 L30,-140 Q30,-153 17,-153 L6,-153 L0,-115 L0,-90Z" fill="${o.oc || "#222"}"/><path d="M-4,-150 L4,-150 L0,-142Z" fill="#222"/>`);
    if (o.outfit === "suit") p.push(`<path d="M-30,-90 L-30,-140 Q-30,-153 -17,-153 L-8,-153 L0,-112 L0,-90Z M30,-90 L30,-140 Q30,-153 17,-153 L8,-153 L0,-112 L0,-90Z" fill="${o.oc || "#2c3e50"}"/><path d="M-3,-152 L3,-152 L5,-120 L0,-114 L-5,-120Z" fill="#c0392b"/>`);
    if (o.outfit === "uniform") p.push(`<path d="M-10,-153 L0,-140 L10,-153" fill="none" stroke="#fff" stroke-width="3"/><rect x="10" y="-138" width="12" height="8" rx="2" fill="#ffcd00"/>`);
    if (o.outfit === "coat") p.push(`<path d="M-32,-60 L-30,-140 Q-30,-153 -17,-153 L-6,-153 L0,-120 L6,-153 L17,-153 Q30,-153 30,-140 L32,-60Z" fill="#fdfdfd" stroke="rgba(0,0,0,.18)"/><path d="M-8,-150 Q-14,-120 0,-112 Q14,-120 8,-150" fill="none" stroke="#2f6db5" stroke-width="2.5"/><circle cx="0" cy="-110" r="4" fill="#2f6db5"/>`);
    if (o.outfit === "apron") p.push(`<path d="M-21,-140 L21,-140 L26,-60 L-26,-60Z" fill="${o.oc || "#fff"}" stroke="rgba(0,0,0,.12)"/><path d="M-21,-140 L-10,-153 M21,-140 L10,-153" stroke="${o.oc || "#fff"}" stroke-width="3"/><rect x="-11" y="-112" width="22" height="12" rx="2" fill="rgba(0,0,0,.08)"/>`);
    if (o.outfit === "coat") p.push(`<path d="M-31,-62 L-31,-140 Q-31,-153 -17,-153 L-6,-153 L0,-120 L6,-153 L17,-153 Q31,-153 31,-140 L31,-62Z" fill="${o.oc || "#8a6d4b"}"/><circle cx="0" cy="-104" r="2" fill="#333"/><circle cx="0" cy="-88" r="2" fill="#333"/>`);
    // arms + hands
    const arm = o.outfit === "suit" || o.outfit === "vest" ? (o.oc || "#2c3e50") : o.outfit === "coat" ? (o.oc || "#8a6d4b") : L.top;
    if (o.phone) {
      p.push(`<rect x="-40" y="-148" width="12" height="58" rx="6" fill="${arm}"/><circle cx="-34" cy="-86" r="7" fill="${s}"/>`);
      p.push(`<path d="M28,-146 L40,-146 L32,-180 L22,-176Z" fill="${arm}"/><circle cx="25" cy="-180" r="7" fill="${s}"/>`);
    } else if (o.wave) {
      p.push(`<rect x="-40" y="-148" width="12" height="58" rx="6" fill="${arm}"/><circle cx="-34" cy="-86" r="7" fill="${s}"/>`);
      p.push(`<path d="M28,-148 L40,-148 L52,-188 L42,-192Z" fill="${arm}"/><circle cx="48" cy="-196" r="8" fill="${s}"/>`);
    } else {
      p.push(`<rect x="-40" y="-148" width="12" height="58" rx="6" fill="${arm}"/><rect x="28" y="-148" width="12" height="58" rx="6" fill="${arm}"/>`);
      p.push(`<circle cx="-34" cy="-86" r="7" fill="${s}"/><circle cx="34" cy="-86" r="7" fill="${s}"/>`);
    }
    // neck + head
    p.push(`<rect x="-6" y="-161" width="12" height="10" fill="${s}"/><circle cx="-17" cy="-174" r="4" fill="${s}"/><circle cx="17" cy="-174" r="4" fill="${s}"/><circle cx="0" cy="-175" r="17" fill="${s}"/>`);
    // hair on top
    if (L.hs === "short") p.push(`<path d="M-18,-178 Q-19,-198 0,-197 Q19,-198 18,-178 Q14,-189 2,-188 Q-10,-189 -18,-178Z" fill="${hc}"/>`);
    if (L.hs === "long" || L.hs === "bob") p.push(`<path d="M-18,-176 Q-16,-196 0,-195 Q16,-196 18,-176 Q10,-187 -2,-186 Q-11,-185 -18,-176Z" fill="${hc}"/>`);
    if (L.hs === "bun") p.push(`<circle cx="0" cy="-198" r="9" fill="${hc}"/><path d="M-18,-176 Q-18,-195 0,-195 Q18,-195 18,-176 Q9,-186 0,-186 Q-9,-186 -18,-176Z" fill="${hc}"/>`);
    if (L.hs === "curly") p.push([[-14, -186], [-6, -192], [3, -193], [11, -189], [16, -181], [-17, -178]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${hc}"/>`).join(""));
    if (L.hs === "bald") p.push(`<path d="M-18,-170 Q-19,-182 -14,-186 M18,-170 Q19,-182 14,-186" stroke="${hc}" stroke-width="5" fill="none" stroke-linecap="round"/>`);
    if (L.beard) p.push(`<path d="M-15,-172 Q-14,-154 0,-153 Q14,-154 15,-172 Q8,-164 0,-164 Q-8,-164 -15,-172Z" fill="${hc}"/>`);
    // face
    p.push(`<circle cx="-6" cy="-177" r="2" fill="${INK}"/><circle cx="6" cy="-177" r="2" fill="${INK}"/><path d="M-6,-167 Q0,-162 6,-167" stroke="${INK}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`);
    if (kind[0] === "f") p.push(`<circle cx="-10" cy="-170" r="3" fill="#e88" opacity=".35"/><circle cx="10" cy="-170" r="3" fill="#e88" opacity=".35"/>`);
    if (L.glasses) p.push(`<g stroke="${INK}" stroke-width="1.4" fill="none"><circle cx="-6" cy="-177" r="5"/><circle cx="6" cy="-177" r="5"/><path d="M-1,-177 L1,-177"/></g>`);
    if (o.phone) p.push(`<text x="18" y="-170" font-size="16">📱</text>`);
    if (o.hold) p.push(`<text x="22" y="-80" font-size="26">${o.hold}</text>`);
    return p.join("");
  }
  const placed = (kind, x, y, sc, o, who) => `<g class="actor" data-who="${who || ""}" transform="translate(${x},${y}) scale(${sc})"><g class="bob">${person(kind, o)}</g></g>`;

  // head-and-shoulders avatar for speech bubbles and lists
  function avatar(kind, size = 46, o = {}) {
    const L = CAST[kind] || CAST.m1;
    return `<svg class="av" width="${size}" height="${size}" viewBox="-34 -212 68 68" aria-hidden="true"><defs><clipPath id="c${kind}${size}"><circle cx="0" cy="-178" r="33"/></clipPath></defs><circle cx="0" cy="-178" r="33" fill="${L.top}22"/><g clip-path="url(#c${kind}${size})">${person(kind, o)}</g></svg>`;
  }

  /* ---------- scenery helpers ---------- */
  const E = (e, x, y, sz = 28) => `<text x="${x}" y="${y}" font-size="${sz}" text-anchor="middle" dominant-baseline="central">${e}</text>`;
  const row = (arr, x0, x1, y, sz) => arr.map((e, i) => E(e, x0 + (arr.length === 1 ? (x1 - x0) / 2 : i * (x1 - x0) / (arr.length - 1)), y, sz)).join("");
  const shelf = (x, y, w, items, sz = 26, wood = "#a0703c") => `<rect x="${x}" y="${y}" width="${w}" height="6" rx="2" fill="${wood}"/>${row(items, x + 18, x + w - 18, y - sz / 2 - 1, sz)}`;
  const sign = (t, bg, fg, x = 320, w = 300, y = 10) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="34" rx="6" fill="${bg}"/><text x="${x}" y="${y + 23}" font-size="17" font-weight="800" letter-spacing="2" text-anchor="middle" fill="${fg}" font-family="Georgia,serif">${t}</text>`;
  const floor = (c, y = 245) => `<rect x="0" y="${y}" width="640" height="${300 - y}" fill="${c}"/>`;
  const wall = (c) => `<rect x="0" y="0" width="640" height="300" fill="${c}"/>`;
  const counter = (x, w, c, top = [], sz = 24, y = 170) => `<rect x="${x}" y="${y}" width="${w}" height="${262 - y}" rx="4" fill="${c}"/><rect x="${x - 6}" y="${y - 6}" width="${w + 12}" height="10" rx="3" fill="${shade(c, -25)}"/>${row(top, x + 24, x + w - 24, y - 6 - sz / 2, sz)}`;
  const glassCase = (x, w, items, sz = 24) => `<rect x="${x}" y="172" width="${w}" height="90" rx="4" fill="#d9c2a0"/><rect x="${x + 8}" y="178" width="${w - 16}" height="44" rx="3" fill="#e8f4fb" stroke="#b7d5e6"/>${row(items, x + 26, x + w - 26, 202, sz)}<rect x="${x - 6}" y="166" width="${w + 12}" height="8" rx="3" fill="#b99a74"/>`;
  const awning = (x, w, c1, c2, y = 0, h = 40) => { let s = ""; const n = Math.round(w / 32); for (let i = 0; i < n; i++) s += `<path d="M${x + i * w / n},${y} h${w / n} v${h} q-${w / n / 2},12 -${w / n},0Z" fill="${i % 2 ? c2 : c1}"/>`; return s; };
  const win = (x, y, w, h, inside = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#bfe3f5" stroke="#fff" stroke-width="5"/>${inside}<path d="M${x + w / 2},${y} V${y + h}" stroke="#fff" stroke-width="4"/>`;
  function shade(hex, amt) { const n = parseInt(hex.slice(1), 16); const c = v => Math.max(0, Math.min(255, v + amt)); return "#" + [c(n >> 16), c((n >> 8) & 255), c(n & 255)].map(v => v.toString(16).padStart(2, "0")).join(""); }

  /* ---------- scenes ---------- */
  // each: back (drawn behind the people), front (drawn in front: counters), outfit for the staff, staff x / client x
  const SCENES = {
    boulangerie: {
      outfit: "apron", oc: "#fff",
      back: () => wall("#f6e3c4") + floor("#c9a27a") + sign("BOULANGERIE · PÂTISSERIE", "#7a3b1d", "#ffe9c2", 320, 380) +
        shelf(40, 98, 260, ["🥖", "🥖", "🥖", "🍞", "🍞"], 30) + shelf(40, 150, 260, ["🥐", "🥐", "🥨", "🥯", "🥐"], 26) +
        win(400, 60, 200, 120, row(["🌳", "🏠", "🌳"], 420, 580, 140, 30)),
      front: () => glassCase(50, 260, ["🥧", "🍰", "🧁", "🍫", "🍮"], 26)
    },
    poste: {
      outfit: "uniform",
      back: () => wall("#fff4c2") + `<rect x="0" y="0" width="640" height="54" fill="#003da5"/>` + floor("#cfd6de") + sign("LA POSTE", "#ffcd00", "#003da5", 320, 200, 10) +
        `<rect x="60" y="70" width="220" height="80" rx="6" fill="#ffffff" stroke="#ccc"/>` + row(["✉️", "📦", "💌", "📬"], 85, 255, 110, 28) +
        `<rect x="470" y="80" width="56" height="90" rx="10" fill="#ffcd00" stroke="#c9a000"/><rect x="482" y="100" width="32" height="6" rx="3" fill="#003da5"/>` + E("📮", 600, 130, 34),
      front: () => counter(50, 270, "#003da5", ["⚖️", "📦", "🖊️", "📄"], 24)
    },
    marche: {
      outfit: "apron", oc: "#3f7a5a",
      back: () => `<rect x="0" y="0" width="640" height="300" fill="#bfe3f5"/>` + E("☀️", 600, 40, 34) + `<rect x="0" y="180" width="640" height="120" fill="#b9b1a5"/>` +
        [...Array(16)].map((_, i) => `<ellipse cx="${20 + i * 40}" cy="${270 + (i % 2) * 14}" rx="18" ry="7" fill="#a39a8c"/>`).join("") +
        awning(30, 300, "#c0392b", "#fff", 30, 36) + `<rect x="36" y="66" width="6" height="110" fill="#7a5230"/><rect x="318" y="66" width="6" height="110" fill="#7a5230"/>` +
        E("🌳", 470, 120, 80) + E("⛪", 560, 150, 50),
      front: () => `<rect x="30" y="178" width="300" height="84" rx="4" fill="#8a5a2b"/>` +
        [0, 1, 2, 3].map(i => `<rect x="${38 + i * 72}" y="160" width="66" height="34" rx="3" fill="#c48a4a" stroke="#8a5a2b"/>`).join("") +
        row(["🍅", "🥒", "🫑", "🍎"], 71, 287, 170, 22) + row(["🍓", "🍋", "🥕", "🌿"], 71, 287, 226, 22) + `<text x="300" y="214" font-size="12" font-weight="700" fill="#fff">2,50 €/kg</text>`
    },
    epicerie: {
      outfit: "apron", oc: "#7a3b1d",
      back: () => wall("#efe6d8") + floor("#b5895a") + sign("ÉPICERIE FINE", "#2d4f6b", "#fff", 320, 280) +
        shelf(30, 90, 270, ["🍝", "🍚", "🫙", "🍯", "🥫"], 26) + shelf(30, 140, 270, ["🍷", "🍾", "💧", "🫒", "🧂"], 26) +
        shelf(360, 90, 250, ["🥫", "🥫", "🍪", "🍪"], 26, "#7a5230") + shelf(360, 140, 250, ["🧃", "🥛", "🥛", "🧈"], 26, "#7a5230") + shelf(360, 190, 250, ["🍬", "☕", "🍫", "🍵"], 24, "#7a5230"),
      front: () => counter(40, 270, "#7a5230", ["🧀", "🥚", "🍖", "🧈"], 26)
    },
    papeterie: {
      outfit: null,
      back: () => wall("#e8eef7") + floor("#c4b49e") + sign("PAPETERIE", "#5b4fb5", "#fff", 320, 220) +
        shelf(30, 92, 270, ["📒", "📓", "📕", "📗", "📘"], 26) + shelf(30, 145, 270, ["✏️", "🖍️", "📏", "✂️", "📎"], 24) +
        shelf(360, 92, 250, ["📁", "📂", "🗂️", "📇"], 26, "#7a5230") + shelf(360, 145, 250, ["✉️", "📜", "🖌️", "🖇️"], 24, "#7a5230"),
      front: () => glassCase(50, 260, ["🖋️", "🖊️", "🖋️", "🖊️", "✒️"], 24) + `<text x="128" y="244" font-size="12" font-weight="700" fill="#5a3a22">32 €</text><text x="232" y="244" font-size="12" font-weight="700" fill="#5a3a22">75 €</text>`
    },
    poissonnerie: {
      outfit: "apron", oc: "#dfeefa",
      back: () => wall("#dbeef7") + [...Array(10)].map((_, i) => `<rect x="${i * 64}" y="54" width="62" height="2" fill="#bcd8e8"/>`).join("") + floor("#9fb7c4") + sign("POISSONNERIE", "#1f5f8b", "#fff", 320, 260) +
        E("⚓", 560, 110, 46) + E("🐟", 470, 100, 30) + E("🦞", 520, 160, 30),
      front: () => `<rect x="30" y="176" width="300" height="86" rx="4" fill="#1f5f8b"/><path d="M24,176 L336,176 L320,150 L40,150Z" fill="#eaf6fb"/>` +
        row(["🐟", "🦐", "🦀", "🦪", "🐠", "🦞"], 60, 300, 160, 22) + `<text x="40" y="200" font-size="12" font-weight="700" fill="#fff">plateau classique 20 € · mélangé 30 €</text>`
    },
    cafe: {
      outfit: "vest", oc: "#222", clientSit: true,
      back: () => wall("#7a3b1d") + `<rect x="0" y="150" width="640" height="95" fill="#5a2a12"/>` + floor("#d9c7a8") + sign("CAFÉ DE LA PAIX", "#1b1b1b", "#f5d68a", 320, 280) +
        `<rect x="222" y="62" width="132" height="92" rx="6" fill="#2c3a2f" stroke="#a0703c" stroke-width="5"/><text x="288" y="84" font-size="13" fill="#fff" text-anchor="middle" font-family="Georgia,serif">MENU à 15 €</text><text x="288" y="104" font-size="10" fill="#ddd" text-anchor="middle">salade de chèvre</text><text x="288" y="120" font-size="10" fill="#ddd" text-anchor="middle">steak-frites</text><text x="288" y="136" font-size="10" fill="#ddd" text-anchor="middle">tarte · glace</text>` +
        win(430, 60, 170, 90, row(["🗼"], 440, 590, 110, 40)) + `<rect x="430" y="168" width="10" height="80" fill="#3a2a1e"/><rect x="520" y="168" width="10" height="80" fill="#3a2a1e"/><rect x="420" y="150" width="120" height="22" rx="4" fill="#3a2a1e"/>`,
      front: () => `<ellipse cx="420" cy="196" rx="70" ry="12" fill="#e9e2d0" stroke="#999"/><rect x="415" y="200" width="10" height="60" fill="#555"/><ellipse cx="420" cy="262" rx="30" ry="6" fill="#555"/>` + E("☕", 395, 184, 20) + E("🍷", 445, 182, 20)
    },
    hotel: {
      outfit: "suit", oc: "#7a1f2b", split: true,
      back: () => wall("#f3ead8") + `<rect x="320" y="0" width="320" height="300" fill="#e2eefb"/>` + floor("#b58d6a") + `<rect x="320" y="245" width="320" height="55" fill="#a9b8c9"/>` +
        sign("HÔTEL DU MOULIN ★★★", "#7a1f2b", "#ffe9c2", 160, 270) +
        `<rect x="40" y="62" width="120" height="70" rx="4" fill="#7a5230"/>` + [0, 1, 2, 3, 4, 5].map(i => E("🔑", 58 + (i % 3) * 40, 82 + Math.floor(i / 3) * 30, 16)).join("") + E("🛎️", 230, 110, 30) +
        `<path d="M320,0 V300" stroke="#fff" stroke-width="6"/>` + win(470, 50, 140, 100, E("🌙", 510, 90, 26)) + E("🛋️", 600, 230, 40) + E("🖼️", 380, 80, 34),
      front: () => counter(40, 250, "#7a1f2b", ["☎️", "📒", "🖊️"], 24)
    },
    gare: {
      outfit: "uniform",
      back: () => wall("#d6dde4") + floor("#9aa6b2") + sign("GUICHET · SNCF", "#2b2b6b", "#fff", 170, 230) +
        `<rect x="506" y="44" width="128" height="104" rx="6" fill="#1b1b1b"/><text x="514" y="64" font-size="12" fill="#ffcd00" font-family="monospace">DÉPARTS</text>` +
        [["07:58", "LILLE", "TGV"], ["08:28", "LILLE", "TGV"], ["09:12", "LYON", "TGV"], ["09:40", "DIJON", "TER"]].map((r, i) => `<text x="514" y="${86 + i * 17}" font-size="11" fill="#fff" font-family="monospace">${r[0]} ${r[1].padEnd(5, " ")} ${r[2]}</text>`).join("") +
        E("🕗", 300, 90, 40) + `<rect x="0" y="200" width="640" height="8" fill="#ffcd00" opacity=".5"/>` + E("🚄", 600, 205, 40),
      front: () => `<rect x="40" y="168" width="260" height="94" rx="4" fill="#4a5a6b"/><rect x="60" y="104" width="220" height="70" fill="#cfe7f3" opacity=".55" stroke="#fff" stroke-width="3"/><rect x="34" y="162" width="272" height="10" rx="3" fill="#2f3b47"/>` + E("🎫", 250, 150, 22)
    },
    vetements: {
      outfit: null,
      back: () => wall("#f7e7ea") + floor("#d7c3b0") + sign("BOUTIQUE · MODE", "#a3407e", "#fff", 320, 250) +
        `<rect x="40" y="80" width="240" height="5" rx="2" fill="#777"/><rect x="40" y="80" width="5" height="165" fill="#777"/><rect x="275" y="80" width="5" height="165" fill="#777"/>` + row(["👗", "👚", "👕", "🧥", "👖", "👔"], 64, 256, 112, 30) +
        `<rect x="470" y="50" width="130" height="195" rx="4" fill="#c0392b"/>` + [0, 1, 2, 3, 4].map(i => `<path d="M${476 + i * 26},52 v190" stroke="#922" stroke-width="2"/>`).join("") + `<text x="535" y="40" font-size="13" text-anchor="middle" font-weight="700" fill="#a3407e">CABINES</text>` +
        `<rect x="330" y="70" width="70" height="140" rx="35" fill="#cfe7f3" stroke="#bbb" stroke-width="4"/>`,
      front: () => ""
    },
    chaussures: {
      outfit: null,
      back: () => wall("#eef0e6") + floor("#c4a98a") + sign("CHAUSSURES", "#3a2a1e", "#f5d68a", 320, 240) +
        shelf(30, 100, 260, ["👠", "👡", "👢", "👠"], 26) + shelf(30, 150, 260, ["👟", "👞", "🥾", "👟"], 26) +
        win(380, 60, 220, 110, `<rect x="390" y="130" width="200" height="8" fill="#a0703c"/>` + row(["👡", "👡", "👠"], 410, 570, 115, 28)) + `<text x="490" y="54" font-size="12" text-anchor="middle" font-weight="700" fill="#3a2a1e">VITRINE</text>` +
        `<rect x="250" y="205" width="110" height="18" rx="4" fill="#7a5230"/>` + E("📦", 300, 236, 22),
      front: () => ""
    },
    fleuriste: {
      outfit: "apron", oc: "#3f7a5a",
      back: () => wall("#eaf5e6") + floor("#b8a58a") + sign("FLEURISTE", "#3f7a5a", "#fff", 320, 220) +
        shelf(30, 110, 270, ["🌷", "🌹", "🌻", "🌼", "🪻"], 30, "#7a5230") + shelf(30, 165, 270, ["🪴", "🌿", "🪴", "🌵"], 30, "#7a5230") +
        [380, 450, 520, 590].map((x, i) => `<rect x="${x - 22}" y="200" width="44" height="45" rx="5" fill="#9aa6b2"/>${E(["💐", "🌹", "🌷", "🌺"][i], x, 186, 40)}`).join(""),
      front: () => counter(40, 270, "#7a5230", ["💐", "✂️", "🎀"], 26)
    },

    classe: {
      outfit: null, noCounter: true,
      back: () => wall("#eef3e9") + floor("#c9b28f") + `<rect x="150" y="30" width="340" height="130" rx="6" fill="#2f4f3f" stroke="#a0703c" stroke-width="7"/><text x="320" y="78" font-size="30" fill="#fff" text-anchor="middle" font-family="Georgia,serif">Bonjour !</text><text x="320" y="112" font-size="15" fill="#dfe" text-anchor="middle" font-family="monospace">A B C D E F G H I J K L M</text><text x="320" y="134" font-size="15" fill="#dfe" text-anchor="middle" font-family="monospace">N O P Q R S T U V W X Y Z</text>` +
        E("🗺️", 70, 80, 46) + E("🇫🇷", 575, 70, 40) + E("🕘", 575, 130, 32) + `<rect x="40" y="130" width="80" height="6" fill="#a0703c"/>` + row(["📚", "📗", "📘"], 50, 110, 116, 22),
      front: () => [110, 530].map(x => `<rect x="${x - 60}" y="214" width="120" height="10" rx="3" fill="#a0703c"/><rect x="${x - 52}" y="224" width="8" height="40" fill="#7a5230"/><rect x="${x + 44}" y="224" width="8" height="40" fill="#7a5230"/>` + E("📓", x - 20, 204, 20) + E("✏️", x + 22, 206, 18)).join("")
    },
    train: {
      outfit: "uniform", noCounter: true, allSit: true,
      back: () => wall("#dfe6ee") + `<rect x="0" y="232" width="640" height="68" fill="#5a6b7c"/>` + [30, 190, 350, 510].map(x => `<rect x="${x}" y="40" width="130" height="92" rx="18" fill="#bfe3f5" stroke="#8fa3b5" stroke-width="5"/><path d="M${x + 6},112 q30,-30 60,-6 t62,-10 V126 H${x + 6}Z" fill="#7cb16a"/>` + E(["🌳", "🐄", "🏡", "⛪"][(x / 160) | 0], x + 90, 100, 22)).join("") +
        `<rect x="0" y="0" width="640" height="26" fill="#9b2335"/><text x="20" y="18" font-size="13" font-weight="800" fill="#fff" letter-spacing="2">TGV INOUI · VOITURE 12</text>` + E("🧳", 600, 16, 18) + [100, 220, 320, 430, 540].map(x => `<rect x="${x - 38}" y="150" width="76" height="112" rx="16" fill="#2b3d5c"/><rect x="${x - 32}" y="156" width="64" height="18" rx="6" fill="#d9d9d9"/>`).join(""),
      seats: true,
      front: () => `<rect x="0" y="262" width="640" height="38" fill="#4a5b6c"/>`
    },
    ville: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#cfe9f7"/>` + E("☀️", 600, 36, 30) +
        `<path d="M300,150 L300,70 L320,40 L340,70 L340,150Z" fill="#d8c3a0"/><path d="M360,150 L360,80 L378,56 L396,80 L396,150Z" fill="#d8c3a0"/><rect x="290" y="100" width="120" height="60" fill="#e6d4b5"/><circle cx="350" cy="122" r="14" fill="#b9c9d9"/>` +
        `<rect x="0" y="95" width="230" height="70" fill="#efe2c8"/>` + [0, 1, 2, 3, 4, 5].map(i => win(10 + i * 36, 108, 24, 30)).join("") + `<rect x="430" y="90" width="210" height="75" fill="#f3e6cc"/>` + [0, 1, 2, 3, 4].map(i => win(442 + i * 38, 104, 26, 32)).join("") +
        `<rect x="0" y="160" width="640" height="30" fill="#7fb3d5"/><path d="M0,176 q40,-6 80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/><path d="M380,160 q60,-40 120,0" stroke="#b08d64" stroke-width="10" fill="none"/>` +
        floor("#cbbfae", 190) + `<rect x="0" y="196" width="640" height="6" fill="#999" opacity=".4"/>` + E("🌳", 40, 205, 50) + E("🚋", 560, 215, 40),
      front: () => ""
    },
    metro: {
      outfit: null, noCounter: true,
      back: () => wall("#e9eef1") + [...Array(18)].map((_, i) => [...Array(6)].map((_, j) => `<rect x="${i * 36}" y="${30 + j * 20}" width="34" height="18" rx="3" fill="#f7fafb" stroke="#d6dee3"/>`).join("")).join("") +
        `<rect x="0" y="0" width="640" height="28" fill="#1f2a44"/><circle cx="22" cy="14" r="10" fill="#e0474f"/><text x="22" y="19" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">M</text><text x="40" y="19" font-size="13" font-weight="700" fill="#fff">Ligne 2 · direction Saint-Philibert</text>` +
        `<rect x="420" y="40" width="190" height="56" rx="6" fill="#fff" stroke="#1f2a44" stroke-width="2"/><path d="M432,68 H598" stroke="#e0474f" stroke-width="6"/>` + [440, 480, 520, 560, 596].map((x, i) => `<circle cx="${x}" cy="68" r="6" fill="#fff" stroke="#1f2a44" stroke-width="2"/>`).join("") + `<text x="515" y="56" font-size="11" text-anchor="middle" fill="#1f2a44">Gare Lille-Flandres ⇄ bus 10</text>` +
        `<rect x="0" y="160" width="640" height="85" fill="#c9d3d9"/><rect x="0" y="236" width="640" height="10" fill="#f0c419"/>` + floor("#8c979e", 245) +
        `<rect x="30" y="150" width="200" height="86" rx="18" fill="#e9eef1" stroke="#7a8a96" stroke-width="3"/><rect x="48" y="166" width="60" height="40" rx="6" fill="#9fc6dd"/><rect x="128" y="166" width="60" height="40" rx="6" fill="#9fc6dd"/>`,
      front: () => ""
    },
    arret: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#d9ecf5"/>` + `<rect x="0" y="70" width="640" height="120" fill="#ebdcc2"/>` + [0, 1, 2, 3, 4, 5, 6, 7].map(i => win(16 + i * 80, 90, 44, 54)).join("") + floor("#a7a29a", 190) +
        `<rect x="0" y="232" width="640" height="68" fill="#5c5c5c"/><path d="M0,265 H640" stroke="#fff" stroke-width="4" stroke-dasharray="30 22"/>` +
        `<rect x="440" y="96" width="8" height="140" fill="#3a4a5a"/><rect x="420" y="92" width="110" height="34" rx="4" fill="#2b59c3"/><text x="475" y="114" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">🚌 ARRÊT</text><rect x="452" y="134" width="74" height="46" fill="#fff" stroke="#2b59c3"/><text x="489" y="152" font-size="10" text-anchor="middle">L1 · L12</text><text x="489" y="168" font-size="10" text-anchor="middle">toute la nuit</text>` + E("🚌", 120, 220, 70),
      front: () => ""
    },
    supermarche: {
      outfit: "apron", oc: "#e0474f",
      back: () => wall("#f4f1ea") + floor("#d7d2c8") + sign("SUPERMARCHÉ · CAISSES", "#e0474f", "#fff", 320, 300) +
        shelf(360, 90, 260, ["🥫", "🍝", "🍚", "🫙", "🥫"], 24, "#9aa6b2") + shelf(360, 140, 260, ["🧃", "🥛", "💧", "🍷", "🧃"], 24, "#9aa6b2") + shelf(360, 190, 260, ["🧀", "🥚", "🧈", "🍫", "☕"], 24, "#9aa6b2") +
        `<text x="490" y="58" font-size="13" font-weight="700" fill="#e0474f" text-anchor="middle">Rayon épicerie · Rayon boissons</text>` + E("🛒", 600, 236, 40),
      front: () => counter(40, 260, "#5b6b7c", ["💳", "🧾", "🛍️"], 22) + `<rect x="70" y="146" width="44" height="22" rx="3" fill="#1b1b1b"/><text x="92" y="161" font-size="11" fill="#6f6" text-anchor="middle" font-family="monospace">12,40€</text>`
    },
    restaurant: {
      outfit: "vest", oc: "#1b1b1b", clientSit: true,
      back: () => wall("#f3e3d3") + floor("#9a6b48") + sign("RESTAURANT · CHEZ LÉA", "#7a1f2b", "#ffe9c2", 320, 300) +
        `<rect x="40" y="62" width="150" height="130" rx="6" fill="#2c3a2f" stroke="#a0703c" stroke-width="6"/><text x="115" y="86" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,serif">Plat du jour</text><text x="115" y="112" font-size="11" fill="#ddd" text-anchor="middle">Entrée · soupe</text><text x="115" y="132" font-size="11" fill="#ddd" text-anchor="middle">Plat · poulet frites</text><text x="115" y="152" font-size="11" fill="#ddd" text-anchor="middle">Dessert · tarte</text><text x="115" y="176" font-size="13" fill="#f5d68a" text-anchor="middle">16 €</text>` +
        win(470, 56, 140, 90, E("🌇", 540, 100, 36)) + E("🪴", 610, 220, 40),
      front: () => `<rect x="290" y="196" width="250" height="12" rx="4" fill="#fff" stroke="#ccc"/><rect x="300" y="208" width="8" height="54" fill="#5a3a22"/><rect x="522" y="208" width="8" height="54" fill="#5a3a22"/>` + row(["🍽️", "🍷", "🥖", "🍽️"], 320, 520, 186, 22)
    },
    grandmagasin: {
      outfit: "suit", oc: "#1f2a44",
      back: () => wall("#fbeff1") + floor("#e2d6cc") + `<rect x="0" y="0" width="640" height="40" fill="#e0474f"/><text x="320" y="27" font-size="20" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="4">SOLDES · −30 % · −50 %</text>` +
        `<path d="M420,250 L560,80 L600,80 L460,250Z" fill="#c9ced6"/><path d="M430,250 L566,86" stroke="#7a8a96" stroke-width="4"/>` + `<text x="580" y="70" font-size="11" text-anchor="middle" fill="#555">1er étage · Mode</text>` +
        `<rect x="40" y="86" width="220" height="5" rx="2" fill="#777"/>` + row(["👗", "🧥", "👔", "👚", "👖"], 60, 240, 116, 28) + `<rect x="270" y="110" width="44" height="32" rx="4" fill="#fff" stroke="#e0474f"/><text x="292" y="131" font-size="12" font-weight="800" fill="#e0474f" text-anchor="middle">−50%</text>`,
      front: () => counter(40, 230, "#1f2a44", ["🛍️", "💳", "🏷️"], 22)
    },
    objets: {
      outfit: "uniform",
      back: () => wall("#eef1f4") + floor("#b9c1c8") + sign("OBJETS TROUVÉS", "#1f2a44", "#fff", 320, 260) +
        shelf(380, 96, 230, ["☂️", "👜", "🎒", "🧣"], 28, "#7a8a96") + shelf(380, 150, 230, ["📱", "🔑", "👓", "🧤"], 26, "#7a8a96") + shelf(380, 204, 230, ["💼", "📚", "🧸", "⌚"], 26, "#7a8a96"),
      front: () => counter(40, 270, "#4a5a6b", ["📋", "🖊️", "☎️"], 22)
    },
    montreal: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#dfe9f3"/>` + `<rect x="0" y="40" width="170" height="160" fill="#a9573b"/><rect x="470" y="60" width="170" height="140" fill="#8b4a33"/>` + [0, 1, 2].map(i => win(16 + i * 52, 60, 36, 46) + win(16 + i * 52, 124, 36, 46)).join("") + [0, 1, 2].map(i => win(486 + i * 52, 80, 36, 46)).join("") +
        `<path d="M200,200 L200,120 L230,70 L260,120 L260,200Z" fill="#c9cdd3"/>` + `<rect x="300" y="110" width="150" height="32" rx="4" fill="#0b7a3a"/><text x="375" y="131" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">Rue Sainte-Catherine</text>` +
        floor("#e9eef3", 200) + [...Array(30)].map((_, i) => `<circle cx="${(i * 71) % 640}" cy="${(i * 37) % 190}" r="2.5" fill="#fff"/>`).join("") + E("🚲", 560, 230, 40) + E("🚌", 80, 228, 50),
      front: () => ""
    },
    fete: {
      outfit: null, noCounter: true,
      back: () => wall("#fdf1e4") + floor("#c9a27a") + `<path d="M0,30 Q80,70 160,30 T320,30 T480,30 T640,30" stroke="#999" stroke-width="2" fill="none"/>` + [...Array(16)].map((_, i) => `<path d="M${i * 40 + 10},${34 + 16 * Math.sin(i * 0.8)} l10,22 l10,-22Z" fill="${["#e0474f", "#f0c419", "#2f9c8a", "#9b4fb0"][i % 4]}"/>`).join("") +
        E("🎈", 60, 120, 50) + E("🎈", 590, 110, 46) + E("🎉", 560, 190, 34) + `<rect x="210" y="70" width="220" height="40" rx="8" fill="#e0474f"/><text x="320" y="97" font-size="20" font-weight="900" fill="#fff" text-anchor="middle" font-family="Georgia,serif">Félicitations !</text>`,
      front: () => `<rect x="230" y="200" width="180" height="10" rx="3" fill="#fff" stroke="#ddd"/><rect x="240" y="210" width="8" height="52" fill="#7a5230"/><rect x="392" y="210" width="8" height="52" fill="#7a5230"/>` + E("🎂", 290, 184, 34) + E("🥂", 350, 186, 26) + E("🎁", 390, 188, 26)
    },
    spectacle: {
      outfit: "suit", oc: "#7a1f2b", split: true,
      back: () => wall("#3a1020") + `<rect x="320" y="0" width="320" height="300" fill="#e2eefb"/>` + floor("#5a2a12") + `<rect x="320" y="245" width="320" height="55" fill="#a9b8c9"/>` +
        `<path d="M10,0 Q60,120 20,240 L0,240 V0Z M310,0 Q260,120 300,240 L320,240 V0Z" fill="#b3263a"/>` + `<rect x="60" y="20" width="200" height="34" rx="6" fill="#f5d68a"/><text x="160" y="43" font-size="15" font-weight="800" fill="#3a1020" text-anchor="middle">BILLETTERIE</text>` +
        `<rect x="70" y="62" width="180" height="70" rx="6" fill="#fff"/><text x="160" y="84" font-size="11" text-anchor="middle">Samedi 24 juin</text><text x="160" y="102" font-size="11" text-anchor="middle">Concert · 21 h</text><text x="160" y="120" font-size="11" text-anchor="middle">Dîner · 19 h 30</text>` +
        `<path d="M320,0 V300" stroke="#fff" stroke-width="6"/>` + win(470, 50, 140, 100, E("🌆", 540, 96, 34)) + E("🛋️", 600, 230, 40),
      front: () => counter(40, 250, "#7a1f2b", ["🎟️", "☎️", "📒"], 24)
    },
    appartement: {
      outfit: "suit", oc: "#5b6b7c", noCounter: true,
      back: () => wall("#f4efe6") + floor("#c9a27a") + win(250, 40, 150, 110, E("🏙️", 325, 95, 40)) + `<rect x="40" y="60" width="70" height="185" rx="3" fill="#e9dcc6" stroke="#a0703c" stroke-width="3"/><circle cx="98" cy="155" r="4" fill="#7a5230"/>` +
        E("📦", 470, 222, 44) + E("📦", 520, 225, 40) + E("📦", 495, 186, 36) + E("🪴", 600, 215, 40) + `<rect x="440" y="80" width="130" height="80" fill="#fff" stroke="#ccc"/><text x="505" y="105" font-size="11" font-weight="800" text-anchor="middle">ÉTAT DES LIEUX</text><text x="505" y="124" font-size="9" text-anchor="middle">entrée ☐ sortie ☐</text><text x="505" y="142" font-size="9" text-anchor="middle">T2 · 45 m² · 3e étage</text>`,
      front: () => ""
    },
    aeroport: {
      outfit: "uniform", noCounter: false,
      back: () => wall("#e6edf3") + floor("#b9c1c8") + `<rect x="0" y="0" width="640" height="34" fill="#1f2a44"/><text x="20" y="23" font-size="15" font-weight="800" fill="#fff">✈️ ENREGISTREMENT · CHECK-IN</text>` +
        `<rect x="420" y="48" width="200" height="110" rx="6" fill="#1b1b1b"/><text x="430" y="68" font-size="11" fill="#ffcd00" font-family="monospace">DÉPARTS</text>` + [["10:35", "MARRAKECH", "À L'HEURE"], ["11:10", "DAKAR", "RETARDÉ"], ["11:45", "MONTRÉAL", "EMBARQUEMENT"], ["12:20", "BUDAPEST", "À L'HEURE"]].map((r, i) => `<text x="430" y="${88 + i * 18}" font-size="10" fill="#fff" font-family="monospace">${r[0]} ${r[1].padEnd(9, " ")} ${r[2]}</text>`).join("") +
        win(30, 50, 200, 100, E("🛫", 130, 100, 44)) + E("🧳", 560, 220, 40),
      front: () => counter(40, 250, "#3a4a5a", ["🛂", "🏷️", "⚖️"], 22)
    },
    plage: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#bfe3f5"/>` + E("☀️", 580, 40, 40) + `<rect x="0" y="120" width="640" height="60" fill="#3a9bd5"/><path d="M0,130 q40,-8 80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>` + floor("#f2dca6", 175) + E("⛵", 120, 120, 34) + E("⛱️", 560, 200, 60) + E("🏐", 80, 240, 26) + E("🐚", 300, 280, 20),
      front: () => ""
    },
    medecin: {
      outfit: "coat", oc: "#ffffff", clientSit: true,
      back: () => wall("#eef6f4") + floor("#c7d3cf") + `<rect x="40" y="50" width="120" height="150" rx="6" fill="#fff" stroke="#9bb"/><text x="100" y="72" font-size="11" font-weight="800" text-anchor="middle" fill="#2f9c8a">Dr Martin</text><text x="100" y="88" font-size="9" text-anchor="middle">médecin généraliste</text>` + [0, 1, 2, 3, 4].map(i => `<rect x="${60 + i * 16}" y="${110 + i * 14}" width="${80 - i * 16}" height="8" fill="#333" opacity="${0.15 + i * 0.12}"/>`).join("") +
        win(470, 50, 130, 90, E("🌳", 535, 96, 36)) + E("🩺", 330, 120, 30) + `<rect x="250" y="70" width="40" height="60" fill="#fff" stroke="#ccc"/><text x="270" y="96" font-size="22" text-anchor="middle">⚕️</text>`,
      front: () => `<rect x="60" y="196" width="230" height="12" rx="4" fill="#a0703c"/><rect x="70" y="208" width="8" height="54" fill="#7a5230"/><rect x="272" y="208" width="8" height="54" fill="#7a5230"/>` + E("📋", 120, 186, 24) + E("💻", 240, 184, 26)
    },
    pharmacie: {
      outfit: "coat", oc: "#ffffff",
      back: () => wall("#f2f8f2") + floor("#cfd8cf") + `<rect x="250" y="16" width="140" height="40" rx="6" fill="#2f8a4f"/><text x="320" y="44" font-size="20" font-weight="900" fill="#fff" text-anchor="middle">✚ PHARMACIE</text>` +
        shelf(380, 80, 240, ["💊", "🧴", "🩹", "🌡️", "🧴"], 24, "#9bb") + shelf(380, 135, 240, ["🍯", "💊", "🧼", "🩹", "💊"], 24, "#9bb") + shelf(380, 190, 240, ["🧸", "🍼", "🧴", "😷", "💊"], 24, "#9bb"),
      front: () => counter(40, 260, "#2f8a4f", ["📋", "💊", "💳"], 22)
    },
    amphi: {
      outfit: "suit", oc: "#3a4f8a", noCounter: true,
      back: () => wall("#efe9df") + floor("#a77b55") + `<rect x="160" y="30" width="320" height="120" rx="4" fill="#fff" stroke="#888"/><text x="320" y="62" font-size="18" font-weight="800" text-anchor="middle" fill="#3a4f8a">Économie · Master 1</text><text x="320" y="92" font-size="13" text-anchor="middle">Cours magistral · Amphi B</text><path d="M200,120 L260,100 L320,110 L380,80 L440,90" stroke="#e0474f" stroke-width="3" fill="none"/>` +
        [0, 1, 2].map(i => `<rect x="${20 + i * 10}" y="${170 + i * 22}" width="${600 - i * 20}" height="14" fill="#7a5230" opacity="${0.6 - i * 0.12}"/>`).join(""),
      front: () => ""
    },
    route: {
      outfit: "uniform", noCounter: true,
      back: () => `<rect width="640" height="300" fill="#cfe9f7"/>` + `<path d="M0,170 q160,-50 320,-20 t320,-30 V300 H0Z" fill="#9ccf7f"/>` + `<rect x="0" y="210" width="640" height="90" fill="#5c5c5c"/><path d="M0,255 H640" stroke="#fff" stroke-width="4" stroke-dasharray="40 30"/>` +
        E("🚗", 470, 230, 70) + `<path d="M560,236 l14,-26 l14,26z" fill="#e0474f" stroke="#fff" stroke-width="2"/>` + E("💨", 420, 205, 26) + E("🌳", 80, 165, 50) + E("🌳", 600, 150, 40),
      front: () => ""
    },
    campagne: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#cfe9f7"/>` + E("☀️", 590, 40, 34) + `<path d="M0,150 q120,-60 260,-20 t380,-30 V300 H0Z" fill="#a8d57f"/><path d="M0,190 q200,-40 380,-6 t260,-10 V300 H0Z" fill="#8cc463"/>` +
        [0, 1, 2, 3].map(i => `<path d="M${60 + i * 150},${190 - i * 4} l120,-8" stroke="#c9b26a" stroke-width="10" opacity=".7"/>`).join("") +
        `<rect x="470" y="104" width="90" height="60" fill="#c4553b"/><path d="M460,106 L515,70 L570,106Z" fill="#7a3324"/><rect x="505" y="132" width="20" height="32" fill="#5a2a12"/>` + E("🐄", 140, 200, 40) + E("🐑", 230, 214, 30) + E("🌳", 60, 150, 54) + E("🌻", 340, 236, 26) + E("🚜", 400, 196, 40) + floor("#b59a6a", 262),
      front: () => ""
    },
    montagne: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#d4ecfa"/>` + `<path d="M-20,220 L140,50 L260,180 L380,30 L560,200 L660,110 V300 H-20Z" fill="#7f97b0"/><path d="M110,82 L140,50 L172,86 L156,80 L140,92 L126,82Z M350,62 L380,30 L414,68 L396,62 L380,74 L364,64Z" fill="#fff"/>` +
        `<path d="M0,230 q160,-30 320,-6 t320,-12 V300 H0Z" fill="#7fbf6a"/>` + [40, 100, 520, 590].map(x => E("🌲", x, 200, 40)).join("") + E("🐐", 250, 236, 30) + E("🏠", 470, 220, 34) + E("⛷️", 300, 160, 24) + floor("#9a8a6a", 268),
      front: () => ""
    },
    jardin: {
      outfit: "apron", oc: "#4f8a3f", noCounter: true,
      back: () => `<rect width="640" height="300" fill="#d6eef9"/>` + E("☀️", 600, 34, 28) + `<rect x="0" y="70" width="640" height="90" fill="#cfb08a"/>` + [0, 1, 2, 3, 4, 5].map(i => win(20 + i * 104, 84, 56, 50)).join("") +
        `<rect x="0" y="160" width="640" height="140" fill="#8a6a45"/>` + [0, 1, 2].map(r => `<rect x="${20 + r * 210}" y="178" width="180" height="60" rx="6" fill="#6b4e2e" stroke="#a0703c" stroke-width="5"/>` + [0, 1, 2, 3].map(i => E(["🥬", "🍅", "🥕", "🌷"][(i + r) % 4], 44 + r * 210 + i * 42, 212, 24)).join("")).join("") +
        `<rect x="250" y="120" width="140" height="32" rx="4" fill="#4f8a3f"/><text x="320" y="142" font-size="15" font-weight="800" fill="#fff" text-anchor="middle">JARDIN PARTAGÉ</text>` + E("🪣", 600, 264, 24),
      front: () => ""
    },
    kiosque: {
      outfit: "vest", oc: "#2b5f8a",
      back: () => `<rect width="640" height="300" fill="#cfe5f2"/>` + `<rect x="180" y="20" width="280" height="40" rx="4" fill="#2b5f8a"/><text x="320" y="47" font-size="20" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="2">KIOSQUE · PRESSE</text>` + floor("#b9b1a5") +
        [0, 1, 2].map(r => `<rect x="380" y="${74 + r * 56}" width="240" height="6" fill="#5a4030"/>` + [0, 1, 2, 3, 4].map(i => `<rect x="${388 + i * 46}" y="${36 + r * 56 + 22}" width="38" height="16" fill="${["#e0474f", "#2f9c8a", "#f0c419", "#9b4fb0", "#2b5f8a"][(i + r) % 5]}" transform="skewX(-4)"/>`).join("")).join("") +
        `<text x="500" y="250" font-size="11" fill="#333" text-anchor="middle">magazines · journaux · BD</text>`,
      front: () => counter(40, 260, "#2b5f8a", ["📰", "🗞️", "🪙"], 22)
    },
    // generic fall-backs
    rue: {
      outfit: null, noCounter: true,
      back: () => `<rect width="640" height="300" fill="#bfe3f5"/>` + E("☀️", 600, 40, 30) + `<rect x="0" y="60" width="200" height="185" fill="#e8d3b0"/><rect x="440" y="80" width="200" height="165" fill="#d9c2a0"/>` +
        [0, 1, 2].map(i => win(20 + i * 60, 90, 40, 50)).join("") + [0, 1, 2].map(i => win(460 + i * 60, 110, 40, 50)).join("") + floor("#a39a8c") + E("🌳", 320, 160, 80),
      front: () => ""
    },
    maison: {
      outfit: null, noCounter: true,
      back: () => wall("#f3ead8") + floor("#b58d6a") + win(240, 50, 160, 100, E("🌤️", 320, 90, 30)) + E("🛋️", 90, 215, 70) + E("🪴", 590, 210, 50) + E("🖼️", 500, 90, 40),
      front: () => ""
    },
    bureau: {
      outfit: "suit", oc: "#2c3e50", noCounter: true,
      back: () => wall("#e6ecf2") + floor("#9aa6b2") + win(400, 40, 200, 110, E("🏙️", 500, 95, 50)) + E("🗂️", 60, 120, 40) + E("☕", 110, 120, 26),
      front: () => counter(40, 250, "#7a5230", ["💻", "📞", "📄"], 26)
    }
  };

  // dialogue: { scene, people: {name: kind}, staff: name, sit: [names], phone: [names] }
  function scene(d) {
    const S = SCENES[d.scene] || SCENES.rue;
    const names = Object.keys(d.people);
    const staff = d.staff && d.people[d.staff] ? d.staff : null;
    const others = names.filter(n => n !== staff);
    const actors = [], chairs = [];
    const opt = (n) => ({ outfit: n === staff ? S.outfit : null, oc: S.oc, phone: (d.phone || []).includes(n) || (S.split && n !== staff), sit: (d.sit || []).includes(n) || (S.allSit) || (S.clientSit && n !== staff), wave: (d.wave || []).includes(n), hold: (d.hold || {})[n] });
    const sc = (k, base) => (CAST[k] || {}).child ? base * 0.66 : base;
    if (staff) actors.push(placed(d.people[staff], S.split ? 140 : 170, 256, sc(d.people[staff], 0.92), opt(staff), staff));
    const n = others.length;
    const xs = S.split ? [480, 560] : staff ? (n > 2 ? [380, 470, 560] : n > 1 ? [420, 520] : [460]) : n > 3 ? [100, 250, 400, 550] : n > 2 ? [150, 320, 490] : n > 1 ? [220, 430] : [320];
    others.forEach((nm, i) => {
      const o = opt(nm), sx = xs[i] || 300 + i * 80, k = d.people[nm];
      if (o.sit) { chairs.push(`<rect x="${sx - 25}" y="150" width="50" height="90" rx="8" fill="#3a2a1e"/>`); actors.push(placed(k, sx, 290, sc(k, 0.88), o, nm)); }
      else actors.push(placed(k, sx, 262, sc(k, 0.95), o, nm));
    });
    return `<svg class="scene-svg" viewBox="0 0 640 300" role="img" aria-label="${(d.title || d.titleFr || "scene").replace(/"/g, "")}">${S.back()}${S.allSit ? "" : chairs.join("")}${actors.join("")}${S.front ? S.front() : ""}</svg>`;
  }

  /* ---------- small diagrams for grammar infographics ---------- */
  const MINI = {
    dans: `<rect x="20" y="30" width="80" height="60" rx="4" fill="none" stroke="#7a5230" stroke-width="4"/><path d="M20,30 L35,15 L115,15 L100,30" fill="none" stroke="#7a5230" stroke-width="3"/><circle cx="60" cy="72" r="14" fill="#d62839"/>`,
    sur: `<rect x="15" y="62" width="90" height="8" rx="2" fill="#7a5230"/><rect x="22" y="70" width="6" height="30" fill="#7a5230"/><rect x="92" y="70" width="6" height="30" fill="#7a5230"/><circle cx="60" cy="48" r="14" fill="#d62839"/>`,
    sous: `<rect x="15" y="40" width="90" height="8" rx="2" fill="#7a5230"/><rect x="22" y="48" width="6" height="52" fill="#7a5230"/><rect x="92" y="48" width="6" height="52" fill="#7a5230"/><circle cx="60" cy="86" r="14" fill="#d62839"/>`,
    devant: `<rect x="40" y="20" width="60" height="70" rx="4" fill="#cdb79a"/><circle cx="50" cy="80" r="16" fill="#d62839"/>`,
    derriere: `<circle cx="78" cy="40" r="16" fill="#d62839"/><rect x="20" y="30" width="60" height="70" rx="4" fill="#cdb79a"/>`,
    acote: `<rect x="15" y="40" width="50" height="60" rx="4" fill="#cdb79a"/><circle cx="92" cy="84" r="16" fill="#d62839"/>`,
    trop: `<text x="60" y="58" font-size="56" text-anchor="middle" dominant-baseline="central">👖</text><path d="M20,100 H100" stroke="#c2402a" stroke-width="4"/><text x="104" y="40" font-size="26" fill="#c2402a">↓</text>`,
    assez: `<text x="60" y="58" font-size="56" text-anchor="middle" dominant-baseline="central">👖</text><path d="M20,100 H100" stroke="#2f8a4f" stroke-width="4"/><text x="104" y="40" font-size="26" fill="#2f8a4f">✓</text>`,
    phone: `<text x="30" y="58" font-size="44" text-anchor="middle" dominant-baseline="central">☎️</text><path d="M55,58 q10,-14 20,0 t20,0" stroke="#d62839" stroke-width="3" fill="none"/><text x="104" y="58" font-size="40" text-anchor="middle" dominant-baseline="central">📱</text>`,
    gauche: `<rect x="50" y="10" width="20" height="95" fill="#ccc"/><rect x="5" y="40" width="65" height="20" fill="#ccc"/><path d="M60,100 V52 H20" stroke="#e0474f" stroke-width="6" fill="none" stroke-linejoin="round"/><path d="M26,40 L10,52 26,64" fill="#e0474f"/><circle cx="60" cy="100" r="6" fill="#2b59c3"/>`,
    droite: `<rect x="50" y="10" width="20" height="95" fill="#ccc"/><rect x="50" y="40" width="65" height="20" fill="#ccc"/><path d="M60,100 V52 H100" stroke="#e0474f" stroke-width="6" fill="none" stroke-linejoin="round"/><path d="M94,40 L110,52 94,64" fill="#e0474f"/><circle cx="60" cy="100" r="6" fill="#2b59c3"/>`,
    toutdroit: `<rect x="50" y="5" width="20" height="100" fill="#ccc"/><rect x="5" y="45" width="110" height="16" fill="#ddd"/><path d="M60,100 V22" stroke="#e0474f" stroke-width="6"/><path d="M48,28 L60,10 72,28" fill="#e0474f"/><circle cx="60" cy="100" r="6" fill="#2b59c3"/>`,
    traverser: `<rect x="0" y="35" width="120" height="40" fill="#999"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${22 + i * 16}" y="38" width="9" height="34" fill="#fff"/>`).join("")}<path d="M60,100 V12" stroke="#e0474f" stroke-width="5"/><path d="M50,18 L60,4 70,18" fill="#e0474f"/>`,
    premiere: `<rect x="50" y="5" width="20" height="100" fill="#ccc"/><rect x="50" y="68" width="65" height="14" fill="#ccc"/><rect x="50" y="22" width="65" height="14" fill="#ccc"/><text x="100" y="94" font-size="11" font-weight="800" fill="#2b59c3">1re</text><text x="100" y="48" font-size="11" font-weight="800" fill="#888">2e</text><path d="M60,104 V75 H104" stroke="#e0474f" stroke-width="5" fill="none"/><circle cx="60" cy="104" r="5" fill="#2b59c3"/>`,
    bise: `<text x="60" y="56" font-size="64" text-anchor="middle" dominant-baseline="central">😚</text><text x="98" y="28" font-size="22">💋</text><text x="20" y="28" font-size="22">💋</text>`,
    main: `<text x="60" y="56" font-size="64" text-anchor="middle" dominant-baseline="central">🤝</text>`,
    coucou: `<text x="60" y="56" font-size="64" text-anchor="middle" dominant-baseline="central">👋</text>`,
    ici: `<circle cx="60" cy="55" r="40" fill="#dcf2ee"/><text x="60" y="56" font-size="46" text-anchor="middle" dominant-baseline="central">📍</text>`,
    loin: `<path d="M10,90 Q60,20 110,90" stroke="#aaa" stroke-width="3" fill="none" stroke-dasharray="5 5"/><text x="12" y="90" font-size="22" text-anchor="middle">🚶</text><text x="108" y="86" font-size="26" text-anchor="middle">🏰</text><text x="60" y="30" font-size="12" text-anchor="middle" font-weight="700">5 km</text>`,
    pres: `<path d="M30,90 Q60,60 90,90" stroke="#aaa" stroke-width="3" fill="none" stroke-dasharray="5 5"/><text x="28" y="90" font-size="22" text-anchor="middle">🚶</text><text x="92" y="86" font-size="26" text-anchor="middle">🏛️</text><text x="60" y="58" font-size="12" text-anchor="middle" font-weight="700">50 m</text>`
  };
  const mini = (k, sz = 90) => MINI[k] ? `<svg class="mini-svg" width="${sz}" height="${sz}" viewBox="0 0 120 110" aria-hidden="true">${MINI[k]}</svg>` : "";


  /* ---------- flags (drawn, so they show on every system) ---------- */
  const V3 = (a, b, c) => `<rect width="10" height="20" fill="${a}"/><rect x="10" width="10" height="20" fill="${b}"/><rect x="20" width="10" height="20" fill="${c}"/>`;
  const H3 = (a, b, c) => `<rect width="30" height="7" fill="${a}"/><rect y="6.6" width="30" height="7" fill="${b}"/><rect y="13.3" width="30" height="6.7" fill="${c}"/>`;
  const star = (x, y, r, c) => { let d = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; d += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(2) + "," + (y + rr * Math.sin(a)).toFixed(2); } return `<path d="${d}Z" fill="${c}"/>`; };
  const nordic = (bg, cr) => `<rect width="30" height="20" fill="${bg}"/><rect x="8" width="4" height="20" fill="${cr}"/><rect y="8" width="30" height="4" fill="${cr}"/>`;
  const FLAGS = {
    fr: V3("#0055a4", "#fff", "#ef4135"), it: V3("#009246", "#fff", "#ce2b37"), be: V3("#000", "#fdda24", "#ef3340"), ie: V3("#169b62", "#fff", "#ff883e"),
    ml: V3("#14b53a", "#fcd116", "#ce1126"), sn: V3("#00853f", "#fdef42", "#e31b23") + star(15, 10, 3.6, "#00853f"), ci: V3("#f77f00", "#fff", "#009e60"), gn: V3("#ce1126", "#fcd116", "#009460"),
    ro: V3("#002b7f", "#fcd116", "#ce1126"), ng: V3("#008751", "#fff", "#008751"), mx: V3("#006847", "#fff", "#ce1126") + `<circle cx="15" cy="10" r="2.6" fill="#8b5a2b"/>`, pe: V3("#d91023", "#fff", "#d91023"),
    td: V3("#002664", "#fecb00", "#c60c30"), cm: V3("#007a5e", "#ce1126", "#fcd116") + star(15, 10, 3, "#fcd116"),
    de: H3("#000", "#dd0000", "#ffce00"), ru: H3("#fff", "#0039a6", "#d52b1e"), nl: H3("#ae1c28", "#fff", "#21468b"), lu: H3("#ed2939", "#fff", "#00a1de"), hu: H3("#ce2939", "#fff", "#477050"),
    co: `<rect width="30" height="10" fill="#fcd116"/><rect y="10" width="30" height="5" fill="#003893"/><rect y="15" width="30" height="5" fill="#ce1126"/>`,
    es: `<rect width="30" height="20" fill="#aa151b"/><rect y="5" width="30" height="10" fill="#f1bf00"/>`, ar: H3("#74acdf", "#fff", "#74acdf") + `<circle cx="15" cy="10" r="2.4" fill="#f6b40e"/>`,
    ga: H3("#009e60", "#fcd116", "#3a75c4"), at: H3("#ed2939", "#fff", "#ed2939"), pl: `<rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#dc143c"/>`,
    ht: `<rect width="30" height="10" fill="#00209f"/><rect y="10" width="30" height="10" fill="#d21034"/>`, se: nordic("#006aa7", "#fecc00"), dk: nordic("#c8102e", "#fff"), no: nordic("#ba0c2f", "#fff") + `<rect x="9" width="2" height="20" fill="#00205b"/><rect y="9" width="30" height="2" fill="#00205b"/>`, fi: nordic("#fff", "#003580"),
    ch: `<rect width="30" height="20" fill="#da291c"/><rect x="13" y="4" width="4" height="12" fill="#fff"/><rect x="9" y="8" width="12" height="4" fill="#fff"/>`,
    ca: `<rect width="30" height="20" fill="#fff"/><rect width="7.5" height="20" fill="#d52b1e"/><rect x="22.5" width="7.5" height="20" fill="#d52b1e"/><path d="M15,4 l1.5,3 2,-1 -.6,4 2,-1 -.5,2 1.6,.4 -3,2.2 .4,1.4 h-2.6 v2 h-1.6 v-2 h-2.6 l.4,-1.4 -3,-2.2 1.6,-.4 -.5,-2 2,1 -.6,-4 2,1z" fill="#d52b1e"/>`,
    qc: `<rect width="30" height="20" fill="#003da5"/><rect x="13" width="4" height="20" fill="#fff"/><rect y="8" width="30" height="4" fill="#fff"/>`,
    jp: `<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="5.5" fill="#bc002d"/>`, cn: `<rect width="30" height="20" fill="#de2910"/>` + star(6, 6, 3.4, "#ffde00"),
    vn: `<rect width="30" height="20" fill="#da251d"/>` + star(15, 10, 5, "#ff0"), kr: `<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="4.5" fill="#cd2e3a"/><path d="M10.5,10 a4.5,4.5 0 0 0 9,0Z" fill="#0047a0"/>`,
    br: `<rect width="30" height="20" fill="#009c3b"/><path d="M15,2.5 L27,10 15,17.5 3,10Z" fill="#ffdf00"/><circle cx="15" cy="10" r="4" fill="#002776"/>`,
    us: [...Array(7)].map((_, i) => `<rect y="${i * 20 / 6.5}" width="30" height="${20 / 13}" fill="#b22234"/>`).join("") + `<rect width="13" height="10.8" fill="#3c3b6e"/>`,
    gb: `<rect width="30" height="20" fill="#012169"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="4"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#c8102e" stroke-width="1.5"/><path d="M15,0 V20 M0,10 H30" stroke="#fff" stroke-width="6"/><path d="M15,0 V20 M0,10 H30" stroke="#c8102e" stroke-width="3.4"/>`,
    ma: `<rect width="30" height="20" fill="#c1272d"/>` + star(15, 10, 4.5, "#006233"), tn: `<rect width="30" height="20" fill="#e70013"/><circle cx="15" cy="10" r="5" fill="#fff"/><circle cx="15.8" cy="10" r="3.4" fill="#e70013"/><circle cx="16.6" cy="10" r="2.8" fill="#fff"/>` + star(15.6, 10, 1.6, "#e70013"),
    dz: `<rect width="15" height="20" fill="#006233"/><rect x="15" width="15" height="20" fill="#fff"/><circle cx="15" cy="10" r="4.4" fill="#d21034"/><circle cx="16.3" cy="10" r="3.6" fill="#fff"/>` + star(16.8, 10, 1.6, "#d21034"),
    in: H3("#ff9933", "#fff", "#138808") + `<circle cx="15" cy="10" r="2.2" fill="none" stroke="#000080" stroke-width=".7"/>`, km: `<rect width="30" height="5" fill="#ffc61e"/><rect y="5" width="30" height="5" fill="#fff"/><rect y="10" width="30" height="5" fill="#ce1126"/><rect y="15" width="30" height="5" fill="#3a75c4"/><path d="M0,0 L11,10 0,20Z" fill="#3d8e33"/>`,
    ne: H3("#e05206", "#fff", "#0db02b") + `<circle cx="15" cy="10" r="2.2" fill="#e05206"/>`, gr: [...Array(9)].map((_, i) => `<rect y="${i * 20 / 9}" width="30" height="${20 / 9}" fill="${i % 2 ? "#fff" : "#0d5eaf"}"/>`).join("") + `<rect width="11" height="11" fill="#0d5eaf"/><rect x="4.5" width="2" height="11" fill="#fff"/><rect y="4.5" width="11" height="2" fill="#fff"/>`,
    pt: `<rect width="12" height="20" fill="#006600"/><rect x="12" width="18" height="20" fill="#ff0000"/><circle cx="12" cy="10" r="3.4" fill="#ffcc00"/>`, sk: H3("#fff", "#0b4ea2", "#ee1c25"), lb: `<rect width="30" height="20" fill="#fff"/><rect width="30" height="5" fill="#ed1c24"/><rect y="15" width="30" height="5" fill="#ed1c24"/><path d="M15,6 L18,13 H12Z" fill="#00a651"/>`,
    eu: `<rect width="30" height="20" fill="#039"/>` + [...Array(12)].map((_, i) => star(15 + 6 * Math.cos(i * Math.PI / 6), 10 + 6 * Math.sin(i * Math.PI / 6), 1, "#fc0")).join("")
  };
  const flag = (code, w = 30) => FLAGS[code] ? `<svg class="flag" width="${w}" height="${w * 2 / 3}" viewBox="0 0 30 20" aria-hidden="true"><g>${FLAGS[code]}</g><rect width="30" height="20" fill="none" stroke="rgba(0,0,0,.18)" stroke-width=".6"/></svg>` : "";

  /* ---------- a street plan with places and an animated route ---------- */
  // spec: { streets: [{ p: [[x,y],…], name, w }], river: [[x,y],…], places: [{ id, x, y, pic, name }], route: [[x,y],…], here: [x,y] }  (viewBox 400 × 260)
  function map(sp) {
    const P = pts => pts.map((q, i) => (i ? "L" : "M") + q[0] + "," + q[1]).join(" ");
    const blocks = `<rect width="400" height="260" fill="#f3efe6"/>` + [...Array(8)].map((_, i) => [...Array(6)].map((_, j) => `<rect x="${i * 52 + 6}" y="${j * 46 + 6}" width="40" height="34" rx="4" fill="#e6dfd0"/>`).join("")).join("");
    const river = sp.river ? `<path d="${P(sp.river)}" stroke="#8ec5e6" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : "";
    const parks = (sp.parks || []).map(k => `<rect x="${k[0]}" y="${k[1]}" width="${k[2]}" height="${k[3]}" rx="8" fill="#bfe0b0"/>`).join("");
    const streets = (sp.streets || []).map(st => `<path d="${P(st.p)}" stroke="#fff" stroke-width="${st.w || 12}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`).join("");
    const names = (sp.streets || []).filter(st => st.name).map((st, i) => { const a = st.p[0], b = st.p[st.p.length - 1], vert = Math.abs(b[0] - a[0]) < Math.abs(b[1] - a[1]); const x = (a[0] + b[0]) / 2 + (st.dx || 0), y = (a[1] + b[1]) / 2 + (st.dy || 0);
      return `<text x="${x}" y="${y}" font-size="8.5" fill="#6b6255" text-anchor="middle" dominant-baseline="central" ${vert ? `transform="rotate(-90 ${x} ${y})"` : ""} font-style="italic">${st.name}</text>`; }).join("");
    const route = sp.route ? `<path class="route" d="${P(sp.route)}" stroke="#e0474f" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 7"/>` : "";
    const places = (sp.places || []).map(pl => `<g class="mplace" data-place="${pl.id}" data-say="${(pl.say || pl.name).replace(/"/g, "")}" transform="translate(${pl.x},${pl.y})"><circle r="15" fill="#fff" stroke="${pl.c || "#2b59c3"}" stroke-width="2.5"/><text font-size="16" text-anchor="middle" dominant-baseline="central">${pl.pic}</text><text y="${pl.y > 225 ? -21 : 26}" font-size="9.5" font-weight="700" text-anchor="middle" fill="#2b2118" paint-order="stroke" stroke="#f3efe6" stroke-width="3">${pl.name}</text></g>`).join("");
    const here = sp.here ? `<g transform="translate(${sp.here[0]},${sp.here[1]})"><circle r="8" fill="#e0474f"/><circle r="14" fill="none" stroke="#e0474f" stroke-width="2" class="pulse"/><text y="${sp.here[1] > 220 ? -16 : 26}" font-size="9" font-weight="800" text-anchor="middle" fill="#e0474f" paint-order="stroke" stroke="#f3efe6" stroke-width="3">Vous êtes ici</text></g>` : "";
    const rose = `<g transform="translate(22,24)"><circle r="14" fill="#fff" stroke="#999"/><path d="M0,-11 L4,0 0,11 -4,0Z" fill="#2b2118"/><text y="-16" font-size="8" text-anchor="middle">N</text></g>`;
    return `<svg class="map-svg" viewBox="0 0 400 260" role="img" aria-label="plan">${blocks}${parks}${river}${streets}${names}${route}${places}${here}${rose}</svg>`;
  }

  /* ---------- a transit diagram: two lines and a change ---------- */
  // spec: { lines: [{ name, color, stations: [] }, …], from, change, to }
  function metro(sp) {
    const W = 720, out = [], pos = {};
    sp.lines.forEach((ln, li) => {
      const y = 60 + li * 100, x0 = li === 0 ? 130 : (pos[sp.change] ? pos[sp.change][0] : 130), n = ln.stations.length;
      const step = Math.min(160, (W - x0 - 150) / Math.max(1, n - 1)), pw = ln.name.length * 8 + 22;
      out.push(`<rect x="${x0 - pw - 18}" y="${y - 11}" width="${pw}" height="22" rx="11" fill="${ln.color}"/><text x="${x0 - pw / 2 - 18}" y="${y + 5}" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">${ln.name}</text>`);
      out.push(`<path d="M${x0},${y} H${x0 + step * (n - 1)}" stroke="${ln.color}" stroke-width="10" stroke-linecap="round"/>`);
      ln.stations.forEach((st, i) => {
        const x = x0 + step * i, onRoute = (sp.path || []).includes(st);
        if (!(li > 0 && st === sp.change)) pos[st] = [x, y];
        out.push(`<g class="mstation" data-say="${st.replace(/"/g, "")}"><circle cx="${x}" cy="${y}" r="${onRoute ? 9 : 7}" fill="#fff" stroke="${onRoute ? "#1f2a44" : ln.color}" stroke-width="${onRoute ? 4 : 3}"/><text x="${x}" y="${y + 27}" font-size="12.5" font-weight="${onRoute ? 800 : 500}" text-anchor="middle" fill="#1f2a44">${st}</text></g>`);
      });
      if (ln.dir) out.push(`<text x="${x0 + step * (n - 1) + 16}" y="${y + 5}" font-size="12" fill="${ln.color}" font-weight="800">→ ${ln.dir}</text>`);
    });
    if (sp.change && pos[sp.change]) { const [x] = pos[sp.change]; out.push(`<path d="M${x},70 V150" stroke="#1f2a44" stroke-width="3" stroke-dasharray="4 4"/><rect x="${x + 8}" y="98" width="78" height="22" rx="11" fill="#fff" stroke="#1f2a44"/><text x="${x + 47}" y="113" font-size="11.5" text-anchor="middle" font-weight="800">⇄ changez</text>`); }
    if (sp.from && pos[sp.from]) { const [x, yy] = pos[sp.from]; out.push(`<text x="${x}" y="${yy - 16}" font-size="12" text-anchor="middle" font-weight="700">🚶 départ</text>`); }
    return `<svg class="metro-svg" viewBox="0 0 ${W} 210" role="img" aria-label="plan des transports">${out.join("")}</svg>`;
  }

  // an analogue clock face for times: ART.clock(7, 58)
  function clock(hh, mm, sz = 110) {
    const a = (v, max) => (v / max) * 2 * Math.PI - Math.PI / 2;
    const hx = 50 + 24 * Math.cos(a((hh % 12) + mm / 60, 12)), hy = 50 + 24 * Math.sin(a((hh % 12) + mm / 60, 12));
    const mx = 50 + 36 * Math.cos(a(mm, 60)), my = 50 + 36 * Math.sin(a(mm, 60));
    const ticks = [...Array(12)].map((_, i) => { const t = a(i, 12); return `<path d="M${50 + 40 * Math.cos(t)},${50 + 40 * Math.sin(t)} L${50 + 45 * Math.cos(t)},${50 + 45 * Math.sin(t)}" stroke="#2b2118" stroke-width="${i % 3 ? 1.5 : 3}"/>`; }).join("");
    return `<svg class="clock-svg" width="${sz}" height="${sz}" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48" fill="#fff" stroke="#2b2118" stroke-width="3"/>${ticks}<path d="M50,50 L${hx},${hy}" stroke="#2b2118" stroke-width="5" stroke-linecap="round"/><path d="M50,50 L${mx},${my}" stroke="#d62839" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="50" r="3.5" fill="#2b2118"/></svg>`;
  }

  // a euro coin / note visual for prices
  function money(amount) {
    const e = Math.floor(amount), c = Math.round((amount - e) * 100);
    const notes = [50, 20, 10, 5], coins = [2, 1]; let left = e; const out = [];
    notes.forEach(n => { while (left >= n && out.length < 8) { out.push(`<span class="note n${n}">${n} €</span>`); left -= n; } });
    coins.forEach(n => { while (left >= n && out.length < 10) { out.push(`<span class="coin">${n}€</span>`); left -= n; } });
    if (c) out.push(`<span class="coin small">${c}c</span>`);
    return `<span class="money">${out.join("")}</span>`;
  }

  window.ART = { CAST, person, avatar, scene, mini, clock, money, SCENES, flag, FLAGS, map, metro };
})();
