// Content checker: node tools/check.js
// Loads every chapter and test and reports structural problems (bad answer indexes, missing fields, duplicates…).
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..", "src");
let problems = 0;
const bad = (where, msg) => { problems++; console.log(`✗ ${where}: ${msg}`); };
global.window = global; global.LESSONS = [];
const files = fs.readdirSync(path.join(root, "lessons")).filter(f => f.endsWith(".js")).sort();
files.forEach(f => { LESSONS.length = 0; eval(fs.readFileSync(path.join(root, "lessons", f), "utf8")); const L = LESSONS[0]; check(L, f); });

function check(L, f) {
  ["id", "rubrique", "num", "title", "titleFr", "pages", "goals", "glance", "dialogues", "vocab", "grammar", "expressions", "sounds", "practice", "roleplays", "culture"].forEach(k => { if (L[k] == null) bad(f, `missing ${k}`); });
  L.dialogues.forEach(d => {
    if (!d.scene) bad(f, `dialogue ${d.id} has no scene`);
    if (d.staff && !d.people[d.staff]) bad(f, `dialogue ${d.id} staff not in people`);
    d.lines.forEach((l, i) => { if (l[0] && !d.people[l[0]]) bad(f, `dialogue ${d.id} line ${i} speaker "${l[0]}" unknown`); if (l.length < 3) bad(f, `dialogue ${d.id} line ${i} has no English`); });
  });
  const seen = new Set();
  L.vocab.forEach(v => { if (seen.has(v.t)) bad(f, `duplicate vocab ${v.t}`); seen.add(v.t); if (!v.en || !v.cat) bad(f, `vocab ${v.t} missing en/cat`); if (v.g && !["m", "f", "pl"].includes(v.g)) bad(f, `vocab ${v.t} bad gender`); });
  L.practice.forEach((q, i) => {
    const w = `${f} practice #${i} (${q.type})`;
    if (["mcq", "fill", "reply", "listen"].includes(q.type)) { if (!Array.isArray(q.options) || q.answer == null || q.answer < 0 || q.answer >= q.options.length) bad(w, "answer index out of range"); if (new Set(q.options).size !== q.options.length) bad(w, "duplicate options"); }
    if (q.type === "fill" && !q.sentence.includes("___")) bad(w, "no ___ in sentence");
    if (q.type === "tf" && (typeof q.ok !== "boolean" || !q.s)) bad(w, "tf needs s and ok");
    if (q.type === "type" && !(q.answers && q.answers.length)) bad(w, "type needs answers");
    if (q.type === "order" && !(q.words && q.words.length > 1)) bad(w, "order needs words");
  });
  if (L.classify) L.classify.items.forEach((x, i) => { if (x.a < 0 || x.a >= L.classify.options.length) bad(f, `classify item ${i} answer out of range`); });
  L.grammar.forEach(g => [].concat(g.widget || []).forEach(w => {
    if (w.type === "combo") w.rows.forEach(r => w.cols.forEach(c => { if (!w.out[r.k + "|" + c.k]) bad(f, `combo ${g.id} missing ${r.k}|${c.k}`); }));
    if (w.type === "sort") w.items.forEach(x => { if (!w.cols.some(c => c.k === x.k)) bad(f, `sort ${g.id} item ${x.t} has unknown column`); });
    if (w.type === "agree") w.words.forEach(x => ["ms", "fs", "mp", "fp"].forEach(k => { if (!x.f[k]) bad(f, `agree ${g.id} missing form ${k}`); }));
  }));
  L.grammar.forEach(g => [].concat(g.info || []).forEach(i => { if (i.type === "conj") i.verbs.forEach(v => { if (v.forms.length !== 6) bad(f, `conj ${v.inf} needs 6 forms`); }); }));
  L.grammar.concat(L.ateliers || []).forEach(g => [].concat(g.info || [], g.model || []).forEach(i => { if (i.type === "map" && i.quiz) i.quiz.forEach(q => { if (!i.map.places.some(p => p.id === q.answer)) bad(f, `map quiz answer ${q.answer} not a place`); }); }));
  [].concat(L.delf ? L.delf.items : [], L.detente ? L.detente.items : []).forEach((q, i) => { if (["mcq", "fill", "reply", "listen"].includes(q.type) && (q.answer < 0 || q.answer >= q.options.length)) bad(f, `delf/detente #${i} answer out of range`); });
  (L.roleplays || []).forEach(r => r.turns.forEach((t, i) => { if (!t.them || !t.you || !t.hint) bad(f, `roleplay "${r.title}" turn ${i} incomplete`); }));
  console.log(`✓ ${f}: ${L.dialogues.length} dialogues, ${L.vocab.length} words, ${L.grammar.length} grammar blocks, ${L.practice.length} activities`);
}

const tdir = path.join(root, "tests");
if (fs.existsSync(tdir)) fs.readdirSync(tdir).filter(f => f.endsWith(".js")).forEach(f => {
  global.window = {}; eval(fs.readFileSync(path.join(tdir, f), "utf8")); const T = window.TEST;
  T.covers.forEach(c => { if (!files.includes(c + ".js")) bad(f, `covers missing chapter ${c}`); });
  T.sections.forEach(s => s.items.forEach((it, i) => {
    if ((s.type === "choose" || s.type === "dialogue" || s.type === "listen") && (it.a < 0 || it.a >= it.o.length)) bad(f, `${s.id} item ${i} answer out of range`);
    if (s.type === "listen" && (!it.say || !it.q)) bad(f, `${s.id} item ${i} listen needs say and q`);
    if (s.type === "type" && !it.a) bad(f, `${s.id} item ${i} no answer`);
    if (!it.lesson) bad(f, `${s.id} item ${i} no lesson tag`);
  }));
  console.log(`✓ ${f}: ${T.sections.length} sections, ${T.sections.reduce((a, s) => a + s.marks, 0)} points`);
});
console.log(problems ? `\n${problems} problem(s) found` : "\nAll content checks passed.");
process.exit(problems ? 1 : 0);
