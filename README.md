# Édito A2: interactive course

Interactive lessons for **Édito A2, méthode de français** (Didier, 2e édition, 2022): 12 units, each built around a theme with its communication goals, grammar, vocabulary, phonie-graphie, culture and mediation pages, from *Nouvelles vies* to the DELF A2. It follows on from the [Édito A1 course](https://github.com/humanshado/FrenchDialogues).

The book's themes, situations, grammar points and vocabulary are followed unit by unit. The dialogues, explanations, illustrations and activities are original, so the book's text, recordings and answer key are not reproduced. Figures quoted from the book's culture pages are given with their source.

## What's in each unit

| Tab | What you do |
|---|---|
| 🏠 Aperçu | The unit's opening phrase, its situations, goals, an at-a-glance card and your progress |
| 💬 Dialogues | Illustrated scenes (the speaker animates as each line plays), with audio and translations. **▶ Play** · **🔁 Shadow** (pauses so you can repeat) · **🎭 Be…** (take one role: the course plays the other part and waits for you) · **🙈 Hide text** (listening test) |
| 🗂️ Vocabulaire | A colour-coded **picture dictionary** (blue masculine, pink feminine, purple plural), a list with say-it hints, and flashcards in both directions with spaced repetition |
| 🧩 Grammaire | Rules with **infographics** (gender columns, fusion equations, conjugation grids with quiz-me, drawn flags with prepositions, interactive **street plans** with an animated route and a *“where do I arrive?”* listening game, a **transit diagram**, survey **bar charts**, number tiles, the alphabet, a season calendar, a past–present–future timeline, scales, SMS threads, ID cards and forms, receipts, menus and labels) and **builders** (sorting games, sentence combos, agreement builder, partitive builder, number / price / date / clock trainers, a spelling machine) |
| 🗨️ Pour communiquer | The book's *Pour…* boxes: key phrases grouped by function, with register badges (poli / courant / familier / soutenu), plus a two-lane **conversation map** |
| 🗣️ Prononciation | Sound cards, minimal pairs, a "which did you hear?" game and a recorder |
| 🎧 Écoute | Listening quizzes on words and dialogue lines, *masculin ou féminin ?*, a unit-specific ear game, and dictation |
| ✍️ Activités | Book-style activities: vrai ou faux, complétez, choisissez, trouvez la question, remettez dans l'ordre, associez, typed answers (with é è ê à ç… buttons; missing accents are accepted but flagged) |
| 🎭 Jeu de rôle | Guided role-plays with memo notes and model answers |
| 🛠️ Ateliers & DELF | The unit's **atelier médiation** (a group project, as in the book's mediation page the *atelier médiation*), a **DELF A2** practice task with strategies, and the **détente** game |
| 🇫🇷 Civilisation | The civilisation page, **Oh, le cliché !**, **Francophonie** and **Au fait !** notes, memory tips and a *ne dites pas… dites* list |
| 🔁 Révision | Progress, and the words due for review |

The chips at the top of every page show or hide the English and the say-it hints, switch the gender colours on and off, and change the audio speed. Audio comes from the browser's French text-to-speech voice. Progress is saved in your browser's localStorage.

Every two units, an **étape test** has a 📘 **Bilan** (fixed 40–45-point test with a DELF-style reading task, a listening section with transcripts, and explanations; options are shuffled on every attempt), a 🎯 **Mastery test** (about 30 new randomised questions each time) and 📈 **Résultats** (history, best scores, units to revise).

Every two units, an **étape test** has a 📘 **Bilan** (fixed 45-point test with DELF A2-style listening and reading tasks and explanations; options are shuffled on every attempt), a 🎯 **Mastery test** (about 30 new randomised questions each time) and 📈 **Résultats** (history, best scores, units to revise).

📚 **Révisions** (`revision.html`): every unit's vocabulary, grammar points, *Pour communiquer* expressions and common mistakes in one searchable page, with a words-to-review filter, print styles and a CSV export for Anki.

## Use it

Enable **GitHub Pages**: Settings → Pages → Deploy from a branch → `main`, folder `/docs`.
Then open `https://humanshado.github.io/FrenchDialogues-A2/`. You can also open `docs/index.html` locally.

## Structure

```
src/engine.js          lesson engine (all tabs, quizzes, widgets, infographics, tests)
src/art.js             SVG illustration library: characters, scene backdrops, flags, plans, diagrams
src/style.css          shared styles
src/revision.js        the Révisions page (search, print, CSV export)
src/lessons/u01.js     unit content (one file per unit)
src/tests/e1-test.js   étape tests (e1 = units 1–2, e2 = units 3–4…)
tools/check.js         content checker (answer indexes, missing fields, duplicates…)
build.py               builds docs/ (site + course home) or dist/ (--standalone pages)
docs/                  built site served by GitHub Pages
```

Workflow: `node tools/check.js` → `python3 build.py`.

## Progress

- [x] Étape 1 · Parcours et souvenirs: Unité 1 *Nouvelles vies*, Unité 2 *Je me souviens* (book pp. 13–40) + bilan
- [x] Étape 2 · Chez soi, entre nous: Unité 3 *Comme à la maison*, Unité 4 *Tous pareils, tous différents* (book pp. 41–68) + bilan
- [x] Étape 3 · Demain, à table !: Unité 5 *En route vers le futur !*, Unité 6 *En cuisine* (book pp. 69–96) + bilan
- [x] Étape 4 · Santé et médias: Unité 7 *À votre santé !*, Unité 8 *Dans les médias* (book pp. 97–124) + bilan
- [ ] Étape 5 · Consommer, voyager: Unités 9–10
- [ ] Étape 6 · Travail et nature: Unités 11–12
- [ ] DELF A2 · Épreuve blanche

So far: 44 dialogues, 418 words, 255 activities, 4 étape tests.
