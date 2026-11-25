#!/usr/bin/env python3
"""Build the Édito A2 interactive course: one self-contained HTML page per unit and test, plus the course home page.

    python3 build.py              -> docs/  (GitHub Pages site)
    python3 build.py --standalone -> dist/  (pages with no link back to the course home)

Each unit lives in src/lessons/uNN.js and calls LESSONS.push({...}).
Each étape test lives in src/tests/eN-test.js and sets window.TEST = {...}.
"""
import json, sys, html, pathlib, subprocess

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
standalone = "--standalone" in sys.argv
OUT = ROOT / ("dist" if standalone else "docs")
OUT.mkdir(exist_ok=True)

css = (SRC / "style.css").read_text(encoding="utf-8")
art = (SRC / "art.js").read_text(encoding="utf-8")
engine = (SRC / "engine.js").read_text(encoding="utf-8")

# units are grouped in "étapes" of two (the book puts a DELF strategies/training page after every odd unit)
ETAPES = {1: ("Parcours et souvenirs", "Life paths and memories", [1, 2]), 2: ("Chez soi, entre nous", "Home and people", [3, 4]), 3: ("Demain, à table !", "The future and food", [5, 6]),
          4: ("Santé et médias", "Health and the media", [7, 8]), 5: ("Consommer, voyager", "Consuming and travelling", [9, 10]), 6: ("Travail et nature", "Work and nature", [11, 12])}
UCOL = ["#2f9c8a", "#c2508e", "#4f9d4f", "#9b4fb0", "#e86a2e", "#2f9c8a", "#e0474f", "#3a6fd8", "#9b4fb0", "#7d9a2e", "#e86a2e", "#3a4f8a", "#4f9d4f"]
# the book's table of contents: (unit, French title, English title, situations, communication, grammar, pages, DELF page after it)
TOC = [
    (1, "Nouvelles vies", "New lives", "Parcours · intentions · goûts · sorties", "parler de son parcours · exprimer son intention · parler de ses goûts · proposer, accepter, refuser une sortie", "passé composé · la négation (rien, personne, jamais, plus) · il y a, pendant, depuis", "pp. 13–26", "Compréhension de l'oral"),
    (2, "Je me souviens", "I remember", "Souvenirs · goûts · paysages et météo", "raconter un souvenir · aimer / ne pas aimer · interroger sur un souvenir", "l'imparfait · les pronoms y et en · la place de l'adjectif", "pp. 27–40", None),
    (3, "Comme à la maison", "At home", "Logement · location · colocation", "décrire et louer un logement · exprimer sa déception · consoler", "qui, que, où · la comparaison · la condition", "pp. 41–54", "Compréhension de l'oral"),
    (4, "Tous pareils, tous différents", "All the same, all different", "Portrait physique · compliments · caractère", "faire un portrait · faire un compliment · parler du caractère", "l'équivalence · chaque, tout, tous · les pronoms possessifs", "pp. 55–68", None),
    (5, "En route vers le futur !", "On the road to the future!", "Avenir · objets · innovations", "imaginer l'avenir · décrire l'utilité d'un objet · surprise · espoir", "le futur simple · si + présent / futur · le pronom on", "pp. 69–82", "Compréhension des écrits"),
    (6, "En cuisine", "In the kitchen", "Recettes · restaurant · alimentation", "instructions de cuisine · mettre en garde · au restaurant · satisfaction", "le pronom en · obligation et interdiction · ne… que", "pp. 83–96", None),
    (7, "À votre santé !", "To your health!", "Santé · bien-être · urgences", "donner un conseil · problèmes de santé · point de vue", "pronoms COD et COI · le superlatif · lequel, laquelle", "pp. 97–110", "Compréhension des écrits"),
    (8, "Dans les médias", "In the media", "Presse · radio · podcasts · réseaux", "préférence · intérêt · critique positive ou négative", "cause et conséquence · le subjonctif · place des pronoms", "pp. 111–124", None),
    (9, "Consommer responsable", "Responsible consumption", "Réparer · échanger · recycler", "souhait, désir · donner un conseil · demander un service", "le conditionnel présent · le gérondif", "pp. 125–138", "Production écrite"),
    (10, "Envies d'ailleurs ?", "Wanderlust?", "Voyages · tourisme · séjour", "structurer son propos · renseignements de voyage · visite · agacement", "passé composé et imparfait · accord du participe · celui, celle", "pp. 139–152", None),
    (11, "De jolis parcours", "Fine careers", "Études · travail · CV · projets", "parler de sa formation · remercier · message formel · projets professionnels", "le discours rapporté · le pronom y (COI)", "pp. 153–166", "Production orale"),
    (12, "Soif de nature", "Thirst for nature", "Environnement · animaux · biodiversité", "peur, inquiétude · capacité · approbation · protester", "le but · la forme passive", "pp. 167–180", "Épreuve blanche"),
]


def page(title, body, lang="en"):
    return f"""<!DOCTYPE html>
<html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}</title><style>{css}</style></head>
<body>{body}</body></html>
"""


def node_json(js):
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout)


def lesson_meta(path):
    js = (f"global.window=global;global.LESSONS=[];{path.read_text(encoding='utf-8')};const l=LESSONS[0];const h=l.hero||l.dialogues[0];"
          "console.log(JSON.stringify({id:l.id,rubrique:l.rubrique,num:l.num,title:l.title,titleFr:l.titleFr,pages:l.pages,"
          "scene:{scene:h.scene,people:h.people,staff:h.staff,wave:h.wave,sit:h.sit,title:l.titleFr},"
          "nv:l.vocab.length,nq:l.practice.length,nd:l.dialogues.length}))")
    return node_json(js)


def test_meta(path):
    js = f"global.window={{}};{path.read_text(encoding='utf-8')};const t=window.TEST;console.log(JSON.stringify({{id:t.id,rubrique:t.rubrique,after:t.after,title:t.title,titleFr:t.titleFr,pages:t.pages,covers:t.covers}}))"
    return node_json(js)


home = "" if standalone else 'window.COURSE_HOME="index.html";'
lessons, lesson_files = {}, {f.stem: f for f in (SRC / "lessons").glob("*.js")}
for f in sorted(lesson_files.values()):
    m = lesson_meta(f); lessons[m["num"]] = m
    scripts = f"<script>window.LESSONS=[];{home}</script><script>{f.read_text(encoding='utf-8')}</script><script>{art}</script><script>{engine}</script>"
    (OUT / f"{m['id']}.html").write_text(page(f"Unité {m['num']} · {m['titleFr']} · Édito A2", scripts), encoding="utf-8")
    print("built", OUT / f"{m['id']}.html")

# Révisions page: every unit's vocabulary, grammar, expressions and common mistakes, searchable and printable
if not standalone:
    allu = "".join(f"<script>{f.read_text(encoding='utf-8')}</script>" for f in sorted(lesson_files.values()))
    rev = (SRC / "revision.js").read_text(encoding="utf-8")
    (OUT / "revision.html").write_text(page("Révisions · Édito A2", f"<script>window.LESSONS=[];{home}window.UCOL={json.dumps(UCOL)};</script>{allu}<script>{rev}</script>"), encoding="utf-8")
    print("built", OUT / "revision.html")

tests = []
for f in sorted((SRC / "tests").glob("*.js")) if (SRC / "tests").exists() else []:
    t = test_meta(f); tests.append(t)
    covered = "".join(f"<script>{lesson_files[c].read_text(encoding='utf-8')}</script>" for c in t["covers"])
    scripts = f"<script>window.LESSONS=[];{home}</script>{covered}<script>{f.read_text(encoding='utf-8')}</script><script>{art}</script><script>{engine}</script>"
    (OUT / f"{t['id']}.html").write_text(page(f"{t['title']} · Édito A2", scripts), encoding="utf-8")
    print("built", OUT / f"{t['id']}.html")

if not standalone:
    parts = []
    for e, (efr, een, units) in ETAPES.items():
        cards = []
        for (n, tfr, ten, sit, comm, gram, pages, delf) in [c for c in TOC if c[0] in units]:
            col = UCOL[n]
            if n in lessons:
                l = lessons[n]
                cards.append(f'<a class="card lesson-link" href="{l["id"]}.html" data-id="{l["id"]}" style="border-left:6px solid {col}"><span class="thumb" data-scene=\'{html.escape(json.dumps(l["scene"]), quote=True)}\'></span>'
                             f'<span style="flex:1;min-width:0"><span class="ubadge" style="background:{col}">Unité {n}</span> <span class="muted" style="font-size:12px">{pages}</span><br><span class="frt">{html.escape(tfr)}</span><br>'
                             f'<span style="font-size:14px">{html.escape(ten)}</span><br><span class="muted" style="font-size:12px">{html.escape(sit)}</span><br>'
                             f'<span class="muted" style="font-size:12px">{l["nd"]} dialogues · {l["nv"]} words · {l["nq"]} activities</span><br><span class="prog muted" style="font-size:12px"></span></span></a>')
            else:
                cards.append(f'<div class="card lesson-link soon" style="border-left:6px solid {col}"><span class="n" style="background:{col};color:#fff">{n}</span><span style="flex:1"><span class="frt">{html.escape(tfr)}</span><br>'
                             f'<span style="font-size:14px">{html.escape(ten)}</span><br><span class="muted" style="font-size:12px">{html.escape(sit)} · {html.escape(gram)} · {pages} · coming soon</span></span></div>')
            for t in [t for t in tests if t["after"] == n]:
                cards.append(f'<a class="card lesson-link test-link" href="{t["id"]}.html" data-test="{t["id"]}"><span class="n">📝</span><span style="flex:1"><span class="frt">{html.escape(t["titleFr"])}</span><br>'
                             f'<span style="font-size:14px">{html.escape(t["title"])}</span><br><span class="muted" style="font-size:12px">{html.escape(t["pages"])} · bilan + mastery test</span><br><span class="prog muted" style="font-size:12px"></span></span></a>')
            if delf and not [t for t in tests if t["after"] == n]:
                cards.append(f'<div class="card lesson-link soon"><span class="n">🎓</span><span style="flex:1"><span class="frt">DELF A2 · {html.escape(delf)}</span><br><span class="muted" style="font-size:12px">stratégies et entraînement · coming soon</span></span></div>')
        parts.append(f'<section class="rubrique"><h2><span class="rnum" style="background:{UCOL[units[-1]]}">{e}</span> Étape {e} · {html.escape(efr)} <span class="muted" style="font-size:16px;font-weight:400">· {html.escape(een)}</span></h2><div class="chapters">{"".join(cards)}</div></section>')
    built = len(lessons)
    nv = sum(l["nv"] for l in lessons.values()); nq = sum(l["nq"] for l in lessons.values()); nd = sum(l["nd"] for l in lessons.values())
    body = f"""<header class="top"><div class="top-inner"><div class="brand"><small>Interactive course · FrenchDialogues</small><b>Édito A2 · Méthode de français</b></div></div></header>
<main>
<div class="card home-hero"><div><h1>Édito A2</h1><p class="lead" style="margin-top:8px">An interactive course built on the 12 units of <i>Édito A2, méthode de français</i> (Didier, 2e édition, 2022), the next step after the A1 course. Each unit follows the book's themes, communication goals, grammar, vocabulary, pronunciation, culture and mediation pages, from <b>Nouvelles vies</b> to the DELF A2.</p>
<p style="font-size:14px">Every unit has illustrated dialogues with audio, a shadow mode and a role mode, a picture dictionary and flashcards, grammar infographics and builders, the <i>Pour communiquer</i> boxes, pronunciation, listening and dictation, book-style activities, role-plays, ateliers with DELF practice, and the civilisation and cliché pages.</p>
<p class="muted" style="font-size:13px">{built} of 12 units ready · {nd} dialogues · {nv} words · {nq} activities · progress is saved in this browser</p></div><div id="hero-scene"></div></div>
<a class="card lesson-link" href="revision.html" style="border-left:6px solid #2f9c8a"><span class="n" style="background:#2f9c8a;color:#fff">📚</span><span style="flex:1"><span class="frt">Révisions</span><br><span style="font-size:14px">Search and revise the whole course: all the vocabulary, grammar points, <i>Pour communiquer</i> expressions and common mistakes in one page. Printable, with a vocabulary export (CSV for Anki or a spreadsheet).</span></span></a>
<div class="card legend"><b>How each unit works</b><div class="lgrid">
<span>💬 <b>Dialogues</b> play, shadow, take a role</span><span>🗂️ <b>Vocabulaire</b> picture dictionary + flashcards</span><span>🧩 <b>Grammaire</b> infographics + builders</span><span>🗨️ <b>Pour communiquer</b> the key phrases</span>
<span>🗣️ <b>Prononciation</b> sounds + minimal pairs</span><span>🎧 <b>Écoute</b> listening + dictation</span><span>✍️ <b>Activités</b> book-style quiz</span><span>🛠️ <b>Ateliers & DELF</b> projects + exam practice</span></div></div>
{''.join(parts)}</main>
<footer>Themes, situations, grammar points and vocabulary follow <i>Édito A2</i> (Didier, 2e édition, 2022). Dialogues, explanations, illustrations and activities are original. Audio is your device's French text-to-speech voice.</footer>
<script>{art}</script>
<script>
document.getElementById("hero-scene").innerHTML=ART.scene({{scene:"train",people:{{"A":"f1","B":"m3","C":"f4","D":"m1"}}}});
document.querySelectorAll("[data-scene]").forEach(el=>{{try{{el.innerHTML=ART.scene(JSON.parse(el.dataset.scene));}}catch(e){{}}}});
try{{const S=JSON.parse(localStorage.getItem("french-edito-a2-v1")||"{{}}");
document.querySelectorAll("[data-id]").forEach(a=>{{const l=(S.lessons||{{}})[a.dataset.id];if(!l)return;const n=Object.keys(l.done||{{}}).length;
a.querySelector(".prog").textContent=(n>=10?"✓ ":"")+n+"/10 sections"+(l.best&&l.best.practice!=null?" · activités "+l.best.practice+"%":"");}});
document.querySelectorAll("[data-test]").forEach(a=>{{const t=(S.tests||{{}})[a.dataset.test];if(!t||!t.attempts.length)return;const b=m=>{{const x=t.attempts.filter(y=>y.mode===m);return x.length?Math.max(...x.map(y=>y.pct))+"%":"—"}};
a.querySelector(".prog").textContent="bilan "+b("book")+" · mastery "+b("mastery");}});}}catch(e){{}}
</script>"""
    (OUT / "index.html").write_text(page("Édito A2 · Interactive French course", body), encoding="utf-8")
    print("built", OUT / "index.html")
