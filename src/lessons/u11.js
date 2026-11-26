// Unité 11 · De jolis parcours (Édito A2, 2e édition, book pp. 153–166)
// Situations: raconter son parcours · remercier un ancien prof · un CV original · un premier contact professionnel · une reconversion · un espace de coworking
// Grammar: la mise en relief · le discours rapporté au présent · le pronom COI y
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u11", rubrique: 6, num: 11,
  title: "Fine career paths",
  titleFr: "De jolis parcours",
  pages: "Book pp. 153–166",
  opener: { fr: "C'est ce métier qui m'a toujours fait rêver !", en: "It's this job that has always made me dream!" },
  hero: { scene: "bureau", people: { "Nour": "f4", "Bastien": "m2" } },
  situations: [
    ["🎓", "Raconter son parcours", "studies: [[J'ai passé mon bac scientifique.]] · [[J'ai fait une année de césure.]]"],
    ["💌", "Remercier un professeur", "thanks: [[Je vous remercie pour tout.]] · [[Merci pour votre enseignement.]]"],
    ["📄", "Faire son CV", "reported speech: [[Elle me demande ce que je sais faire.]]"],
    ["✉️", "Un message formel", "[[Bonjour Madame,]] · [[Merci d'avance.]] · [[Bien cordialement,]]"],
    ["🔄", "Changer de métier", "projects: [[Je vais me former pour devenir pâtissier.]] · [[J'y pense depuis longtemps.]]"]
  ],
  goals: [
    "Talk about your studies: [[J'ai obtenu mon bac en…]], [[Je me suis inscrit(e) en…]], [[J'ai raté / réussi mes examens.]]",
    "Thank someone: [[Je vous remercie pour…]], [[Merci pour…]], [[Je vous dis merci.]]",
    "Write a formal message: greeting, polite request, closing formula",
    "Talk about your career plans and say something is obvious: [[Évidemment !]], [[C'est sûr.]], [[C'est certain.]]",
    "Highlight a word with [[C'est… qui / que]], [[Ce qui…, c'est…]] (la mise en relief)",
    "Report what someone says or asks in the present: [[Il dit que…]], [[Elle demande si / ce que / ce qui / où…]] · Use [[y]] for [[à + chose]]"
  ],
  glance: [
    ["🗣️", "Communication", "your studies · thanking · formal messages · career plans · stating the obvious"],
    ["🧩", "Grammaire", "highlighting (c'est… qui/que) · reported speech in the present · the pronoun y"],
    ["🗂️", "Vocabulaire", "the French school system · studies · exams · diplomas · sectors · jobs · the CV"],
    ["🔊", "Phonie-graphie", "[ø] (bleu), [o] (mot) and [u] (cours)"],
    ["⭐", "The phrase to learn first", "[[C'est ce qui me plaît dans ce métier.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "My path so far", titleFr: "À la cafétéria · Les anciens élèves racontent",
      note: "A student journalist interviews Bastien, a former pupil of a French lycée abroad, for the school website. Listen to the vocabulary of studies and to the mise en relief.",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Nour": "f4", "Bastien": "m2" },
      lines: [
        ["Nour", "Bastien, tu peux nous raconter ton parcours ?", "Bastien, can you tell us about your path?"],
        ["Bastien", "Bien sûr. J'ai passé mon bac scientifique au lycée français de Dakar, avec mention bien.", "Of course. I took my science baccalaureate at the French lycée in Dakar, with a 'bien' grade."],
        ["Nour", "Qu'est-ce que tu as préféré au lycée ?", "What did you like most at the lycée?"],
        ["Bastien", "L'ambiance, c'est ce que j'ai préféré. Et les maths : ce sont des matières que j'ai toujours aimées.", "The atmosphere is what I liked best. And maths: it's a subject I've always loved."],
        ["Nour", "Et après le bac ?", "And after the bac?"],
        ["Bastien", "Je me suis inscrit en informatique à l'université de Lyon. Mais j'ai raté ma première année…", "I enrolled in computer science at the University of Lyon. But I failed my first year…"],
        ["Nour", "Tu as redoublé ?", "Did you repeat the year?"],
        ["Bastien", "Non. J'ai fait une année de césure : j'ai travaillé dans une association au Sénégal. C'est une expérience que je ne regrette pas !", "No. I took a gap year: I worked for an association in Senegal. It's an experience I don't regret!"],
        ["Nour", "Et aujourd'hui ?", "And today?"],
        ["Bastien", "Je suis en troisième année de licence et j'ai réussi tous mes examens. Ce qui est le plus difficile, c'est l'organisation du travail.", "I'm in the third year of my degree and I've passed all my exams. What's hardest is organising my work."]
      ],
      glossary: [["passer / obtenir son bac", "to take / get one's baccalaureate"], ["rater ≠ réussir un examen", "to fail ≠ to pass an exam"], ["redoubler", "to repeat a year"], ["l'année de césure", "the gap year"]]
    },
    {
      id: "d2", n: 2, title: "A thank-you letter", titleFr: "À la maison · Lettre à une ancienne prof",
      note: "Nour is writing a letter to the teacher who changed her life. She reads her draft to her brother. Listen to how she thanks her teacher.",
      scene: "maison", people: { "Nour": "f4", "Karim": "m5" },
      lines: [
        ["Karim", "Tu écris à qui ?", "Who are you writing to?"],
        ["Nour", "À Mme Ferrand, ma prof d'histoire au collège. C'est elle qui m'a donné envie de devenir journaliste.", "To Mrs Ferrand, my history teacher at secondary school. She's the one who made me want to become a journalist."],
        ["Karim", "Lis-moi ta lettre !", "Read me your letter!"],
        ["Nour", "« Chère Madame Ferrand, je vous remercie pour tout ce que vous m'avez apporté. Merci pour votre enseignement et pour vos conseils de lecture. »", "'Dear Mrs Ferrand, thank you for everything you gave me. Thank you for your teaching and for your reading suggestions.'"],
        ["Karim", "C'est joli. Elle était sévère, non ?", "That's nice. She was strict, wasn't she?"],
        ["Nour", "Un peu ! Mais ce sont ses commentaires qui m'ont permis d'avancer. Alors j'ajoute : « Merci aussi pour vos notes parfois sévères ! »", "A bit! But it was her comments that helped me move forward. So I'm adding: 'Thank you also for your sometimes strict marks!'"],
        ["Karim", "Et pour finir ?", "And to finish?"],
        ["Nour", "« Je ne vous oublierai jamais. Je vous dis merci. » Et je signe.", "'I'll never forget you. I say thank you.' And I sign."]
      ],
      glossary: [["Je vous remercie pour…", "Thank you for…"], ["Merci pour votre enseignement", "Thank you for your teaching"], ["c'est elle qui…", "she's the one who…"], ["permettre d'avancer", "to help (someone) move forward"]]
    },
    {
      id: "d3", n: 3, title: "Is the CV dead?", titleFr: "Au bureau · Ça sert encore, un CV ?",
      note: "Bastien is looking for a work-study place (alternance). A careers adviser helps him with his CV. Listen to the reported speech: [[Ils disent que…]], [[Je me demande si…]].",
      scene: "bureau", staff: "La conseillère", people: { "La conseillère": "f6", "Bastien": "m2" },
      lines: [
        ["Bastien", "Je me demande si le CV est encore utile. Tout le monde est sur les réseaux professionnels !", "I wonder whether a CV is still useful. Everyone's on professional networks!"],
        ["La conseillère", "Oui, il est utile ! Les recruteurs disent qu'ils regardent un CV en moins d'une minute.", "Yes, it's useful! Recruiters say they look at a CV in less than a minute."],
        ["Bastien", "Alors je fais une seule page ?", "So I do a single page?"],
        ["La conseillère", "Exactement. Les jeunes diplômés me demandent souvent ce qu'ils doivent mettre quand ils n'ont pas d'expérience.", "Exactly. Young graduates often ask me what they should put when they have no experience."],
        ["Bastien", "C'est mon problème ! Qu'est-ce que je mets ?", "That's my problem! What do I put?"],
        ["La conseillère", "Ta formation, tes stages, tes compétences, tes langues… et tes centres d'intérêt. Ton année de césure, c'est ce qui va intéresser les entreprises.", "Your education, your internships, your skills, your languages… and your interests. Your gap year is what will interest companies."],
        ["Bastien", "Et si je fais un CV original, comme une affiche ?", "And if I make an original CV, like a poster?"],
        ["La conseillère", "Pourquoi pas, pour la communication ! Mais pour l'informatique, un CV clair et précis, c'est ce qui marche le mieux.", "Why not, for communications! But for IT, a clear and precise CV is what works best."]
      ],
      glossary: [["Je me demande si…", "I wonder whether…"], ["Ils disent que…", "They say that…"], ["ce qu'ils doivent mettre", "what they should put"], ["la formation en alternance", "work-study training"]]
    },
    {
      id: "d4", n: 4, title: "A first professional contact", titleFr: "Sur un réseau professionnel · Premier message",
      note: "Bastien writes to a company manager on a professional network. Listen to the formulas of a formal message.",
      scene: "bureau", people: { "Bastien": "m2", "Mme Garnier": "f1" },
      lines: [
        ["Bastien", "« Bonjour Madame, je suis étudiant en troisième année d'informatique. Je voudrais faire partie de votre réseau. »", "'Hello Madam, I'm a third-year computer-science student. I'd like to join your network.'"],
        ["Mme Garnier", "« Bonjour Bastien, j'accepte votre invitation avec plaisir. Quel poste vous intéresse ? »", "'Hello Bastien, I'm pleased to accept your invitation. Which position interests you?'"],
        ["Bastien", "« Merci pour votre réponse. Je cherche une alternance en développement web à partir de septembre. »", "'Thank you for your reply. I'm looking for a work-study placement in web development from September.'"],
        ["Mme Garnier", "« Nous recrutons justement deux alternants. Pouvez-vous m'envoyer votre CV ? »", "'We happen to be recruiting two work-study students. Could you send me your CV?'"],
        ["Bastien", "« Avec plaisir, je vous l'envoie aujourd'hui. Acceptez-vous de me rencontrer pour un entretien ? »", "'With pleasure, I'll send it today. Would you agree to meet me for an interview?'"],
        ["Mme Garnier", "« Bien sûr. Je vous propose jeudi à 10 heures. Bien cordialement, Hélène Garnier. »", "'Of course. I suggest Thursday at 10. Kind regards, Hélène Garnier.'"],
        ["Bastien", "« Merci d'avance. Bien à vous, Bastien Mendy. »", "'Thank you in advance. Yours, Bastien Mendy.'"]
      ],
      glossary: [["Bonjour Madame, / Madame,", "formal greeting"], ["Acceptez-vous de… ? Pouvez-vous… ?", "Would you agree to…? Could you…?"], ["Merci d'avance.", "Thanks in advance."], ["Bien à vous, / Bien cordialement,", "Yours, / Kind regards,"]]
    },
    {
      id: "d5", n: 5, title: "A new job, a new life", titleFr: "À la pâtisserie · La reconversion",
      note: "Thomas was a consultant; now he's training to become a pastry chef. A former colleague visits him. Listen to how he talks about his plans, and to the pronoun [[y]].",
      scene: "boulangerie", people: { "Élodie": "f3", "Thomas": "m4" },
      lines: [
        ["Élodie", "Thomas ! Tu as vraiment quitté ton poste de consultant ?", "Thomas! Did you really leave your consultant job?"],
        ["Thomas", "Oui ! J'ai mis un terme à ma carrière pour devenir pâtissier.", "Yes! I ended my career to become a pastry chef."],
        ["Élodie", "Tu y pensais depuis longtemps ?", "Had you been thinking about it for a long time?"],
        ["Thomas", "Depuis toujours ! Enfant, je voulais travailler avec mes mains. J'y ai bien réfléchi, et je me suis lancé.", "Forever! As a child, I wanted to work with my hands. I thought it through carefully, and I took the plunge."],
        ["Élodie", "Et tu as besoin d'un diplôme ?", "And do you need a qualification?"],
        ["Thomas", "Oui, je fais une formation en alternance : je vais obtenir mon CAP de pâtissier dans un an.", "Yes, I'm doing work-study training: I'll get my pastry qualification in a year."],
        ["Élodie", "Ce n'est pas trop dur ?", "Isn't it too hard?"],
        ["Thomas", "Je gagne moins d'argent, c'est sûr. Mais je passe plus de temps en famille, et voir les clients contents, c'est ce qui me plaît dans ce métier !", "I earn less money, that's for sure. But I spend more time with my family, and seeing happy customers is what I like about this job!"],
        ["Élodie", "Évidemment, tu as l'air heureux !", "Obviously, you look happy!"]
      ],
      glossary: [["mettre un terme à sa carrière", "to end one's career"], ["se reconvertir, la reconversion", "to retrain, career change"], ["y penser, y réfléchir", "to think about it"], ["Évidemment ! C'est sûr.", "Obviously! That's for sure."]]
    },
    {
      id: "d6", n: 6, title: "A day at the coworking space", titleFr: "Dans un coworking · Travailler autrement",
      note: "Nour, now a freelance journalist, visits a coworking space. The manager explains how it works. Listen to the vocabulary of work.",
      scene: "bureau", staff: "Le gérant", people: { "Le gérant": "m6", "Nour": "f4" },
      lines: [
        ["Nour", "Bonjour ! Je suis travailleuse indépendante et je travaille à distance. Je cherche un local pour ne plus être seule chez moi.", "Hello! I'm self-employed and I work remotely. I'm looking for a space so I'm no longer alone at home."],
        ["Le gérant", "Vous êtes au bon endroit ! Ici, il y a des graphistes, des formateurs, des ingénieurs… C'est un vrai réseau.", "You've come to the right place! Here there are graphic designers, trainers, engineers… It's a real network."],
        ["Nour", "Quels sont les horaires ?", "What are the opening hours?"],
        ["Le gérant", "On est ouvert de 8 heures à 20 heures. Le matériel est compris : imprimante, salle de réunion, café…", "We're open from 8 am to 8 pm. Equipment is included: printer, meeting room, coffee…"],
        ["Nour", "Et le tarif ?", "And the price?"],
        ["Le gérant", "Cent cinquante euros par mois, ou quinze euros la journée. Vous voulez essayer ?", "One hundred and fifty euros a month, or fifteen euros a day. Would you like to try?"],
        ["Nour", "Oui ! L'ambiance de travail, c'est ce qui compte le plus pour moi.", "Yes! The working atmosphere is what matters most to me."],
        ["Le gérant", "Alors venez demain. Et le vendredi, on déjeune tous ensemble !", "Then come tomorrow. And on Fridays, we all have lunch together!"]
      ],
      glossary: [["le travail à distance ≠ en présentiel", "remote work ≠ on site"], ["le travailleur / la travailleuse indépendant(e)", "the self-employed worker"], ["le local, le matériel, le tarif", "the premises, the equipment, the price"], ["l'ambiance de travail", "the working atmosphere"]]
    }
  ],

  vocab: [
    { t: "l'école primaire, maternelle", en: "primary school, nursery school", pic: "🏫", cat: "Le système scolaire", g: "f" },
    { t: "le collège", en: "lower secondary school (11–15)", pic: "🎒", cat: "Le système scolaire", g: "m", note: "not a university college!" },
    { t: "le lycée", en: "upper secondary school (15–18)", pic: "📚", cat: "Le système scolaire", g: "m" },
    { t: "l'université, la fac", en: "the university, uni", pic: "🎓", cat: "Le système scolaire", g: "f" },
    { t: "l'élève", en: "the pupil (school)", pic: "🧒", cat: "Le système scolaire" },
    { t: "l'étudiant(e)", en: "the student (higher education)", pic: "🧑‍🎓", cat: "Le système scolaire" },
    { t: "l'enseignant(e), le / la prof", en: "the teacher", pic: "🧑‍🏫", cat: "Le système scolaire" },
    { t: "la matière, le cours", en: "the subject, the class", pic: "📐", cat: "Les études", g: "f" },
    { t: "apprendre ≠ enseigner", en: "to learn ≠ to teach", pic: "📖", cat: "Les études" },
    { t: "faire des études (littéraires…)", en: "to study (literature…)", pic: "✍️", cat: "Les études" },
    { t: "être en première année", en: "to be in first year", pic: "1️⃣", cat: "Les études" },
    { t: "l'année de césure", en: "the gap year", pic: "🌍", cat: "Les études", g: "f" },
    { t: "la formation en alternance", en: "work-study training", pic: "🔁", cat: "Les études", g: "f" },
    { t: "passer un examen, le bac", en: "to take an exam, the bac", pic: "📝", cat: "L'évaluation" },
    { t: "réussir ≠ rater un examen", en: "to pass ≠ to fail an exam", pic: "✅", cat: "L'évaluation" },
    { t: "redoubler", en: "to repeat a year", pic: "🔂", cat: "L'évaluation" },
    { t: "une bonne / mauvaise note", en: "a good / bad mark", pic: "💯", cat: "L'évaluation", g: "f" },
    { t: "la mention (assez bien, bien, très bien)", en: "the grade / honours", pic: "🏅", cat: "L'évaluation", g: "f" },
    { t: "le baccalauréat, le bac", en: "the school-leaving exam", pic: "📜", cat: "Les diplômes", g: "m" },
    { t: "la licence (bac +3)", en: "the bachelor's degree", pic: "🎓", cat: "Les diplômes", g: "f" },
    { t: "le master (bac +5)", en: "the master's degree", pic: "🎓", cat: "Les diplômes", g: "m" },
    { t: "le doctorat", en: "the PhD", pic: "🔬", cat: "Les diplômes", g: "m" },
    { t: "la beauté, le bien-être", en: "beauty, well-being", pic: "💅", cat: "Les secteurs", g: "f" },
    { t: "l'informatique, le numérique", en: "IT, digital", pic: "💻", cat: "Les secteurs", g: "f" },
    { t: "la restauration, le nettoyage", en: "catering, cleaning", pic: "🍽️", cat: "Les secteurs", g: "f" },
    { t: "la communication, le marketing", en: "communications, marketing", pic: "📣", cat: "Les secteurs", g: "f" },
    { t: "l'agent(e) d'entretien", en: "the cleaner", pic: "🧹", cat: "Les professions" },
    { t: "le coiffeur, la coiffeuse", en: "the hairdresser", pic: "💇", cat: "Les professions" },
    { t: "le formateur, la formatrice", en: "the trainer", pic: "👩‍🏫", cat: "Les professions" },
    { t: "l'ingénieur(e)", en: "the engineer", pic: "👷", cat: "Les professions" },
    { t: "le / la chef(fe) d'entreprise", en: "the business owner", pic: "💼", cat: "Les professions" },
    { t: "l'emploi, le poste, le job", en: "the job, the position", pic: "🪪", cat: "Le travail", g: "m" },
    { t: "l'employé(e), le / la salarié(e)", en: "the employee", pic: "🧑‍💼", cat: "Le travail" },
    { t: "l'entreprise, la société", en: "the company", pic: "🏢", cat: "Le travail", g: "f" },
    { t: "le travail à distance ≠ en présentiel", en: "remote ≠ on-site work", pic: "🏠", cat: "Le travail", g: "m" },
    { t: "le travail en équipe", en: "teamwork", pic: "🤝", cat: "Le travail", g: "m" },
    { t: "le coworking", en: "the coworking space", pic: "🪑", cat: "Le travail", g: "m" },
    { t: "le CV, le parcours", en: "the CV, the career path", pic: "📄", cat: "Le CV et la recherche d'emploi", g: "m" },
    { t: "les compétences, l'expérience", en: "the skills, the experience", pic: "🧠", cat: "Le CV et la recherche d'emploi", g: "f" },
    { t: "les centres d'intérêt", en: "the interests, hobbies", pic: "⚽", cat: "Le CV et la recherche d'emploi", g: "m" },
    { t: "l'offre d'emploi, l'annonce", en: "the job offer, the ad", pic: "📌", cat: "Le CV et la recherche d'emploi", g: "f" },
    { t: "le / la candidat(e), l'entretien", en: "the candidate, the interview", pic: "🗨️", cat: "Le CV et la recherche d'emploi" },
    { t: "le recrutement, recruter", en: "recruitment, to recruit", pic: "🔎", cat: "Le CV et la recherche d'emploi", g: "m" }
  ],

  grammar: [
    {
      id: "g-formation",
      title: "Talking about your studies",
      body: [
        "[[J'ai passé mon bac scientifique.]] · [[J'ai obtenu mon baccalauréat au lycée français de…]] · [[Je me suis inscrit(e) en informatique.]] · [[J'ai raté ma première année.]] · [[J'ai fait une année de césure.]] · [[J'ai réussi mes examens.]] · [[Je suis étudiant(e) en droit.]]",
        "The French system: <b>école maternelle</b> (3–6) → <b>école élémentaire</b> (6–11) → <b>collège</b> (11–15) → <b>lycée</b> (15–18, bac) → <b>université</b>: licence (bac +3) → master (bac +5) → doctorat."
      ],
      info: { type: "timeline", title: "🎓 Bastien's path", ends: ["lycée", "", "aujourd'hui"], items: [
        { x: 8, fr: "Il a passé son bac à Dakar.", en: "He took his bac in Dakar.", pic: "📜" },
        { x: 30, fr: "Il a raté sa première année.", en: "He failed his first year.", pic: "❌" },
        { x: 52, fr: "Il a fait une année de césure.", en: "He took a gap year.", pic: "🌍" },
        { x: 74, fr: "Il a réussi ses examens.", en: "He passed his exams.", pic: "✅" },
        { x: 88, fr: "Il cherche une alternance.", en: "Work-study next.", pic: "🔎" }
      ] }
    },
    {
      id: "g-relief",
      title: "Highlighting: [[C'est… qui / que]], [[Ce qui…, c'est…]]",
      body: [
        "To insist on the <b>subject</b>: [[C'est / Ce sont + nom + qui…]]: [[C'est un prof qui a changé ma vie.]] · with a stressed pronoun: [[C'est vous qui m'avez fait découvrir le théâtre.]] · [[Ce sont eux qui m'ont permis d'avancer.]]",
        "To insist on the <b>object</b>: [[C'est / Ce sont + nom + que…]]: [[C'est une expérience que je ne regrette pas.]] · [[Ce sont des matières que j'ai toujours aimées.]]",
        "With [[ce]]: [[C'est ce qui me plaît.]] · [[C'est ce que j'ai préféré.]] · or at the start: [[Ce qui est le plus difficile, c'est l'organisation.]] · [[Ce que j'ai préféré, ce sont les fêtes.]] Note: [[que]] → [[qu']] before a vowel; in speech, people often say [[c'est]] even with a plural."
      ],
      info: { type: "compare", title: "🔦 qui or que?", cols: [
        { head: "… qui + verbe", en: "the highlighted word is the subject", color: "#3a6fd8", lines: [["C'est la prof qui m'a motivée.", "The teacher motivated me."], ["C'est ce qui me plaît.", "That's what I like."], ["Ce sont eux qui m'ont aidé.", "They helped me."]] },
        { head: "… que + sujet + verbe", en: "the highlighted word is the object", color: "#9b4fb0", lines: [["C'est le métier que je veux faire.", "I want to do this job."], ["C'est ce que j'ai préféré.", "That's what I liked best."], ["C'est l'examen que j'ai raté.", "I failed that exam."]] }
      ] },
      widget: {
        type: "sort", label: "qui or que (qu')?",
        cols: [{ k: "qui", label: "… qui", color: "#3a6fd8" }, { k: "que", label: "… que / qu'", color: "#9b4fb0" }],
        items: [
          { t: "C'est l'université ___ a les meilleurs résultats.", k: "qui", say: "C'est l'université qui a les meilleurs résultats." }, { t: "C'est la littérature ___ il étudie.", k: "que", say: "C'est la littérature qu'il étudie." },
          { t: "Ce sont les matières ___ l'intéressent.", k: "qui", say: "Ce sont les matières qui l'intéressent." }, { t: "C'est l'examen ___ j'ai raté.", k: "que", say: "C'est l'examen que j'ai raté." },
          { t: "___ est formidable, c'est l'ambiance. (Ce…)", k: "qui", say: "Ce qui est formidable, c'est l'ambiance." }, { t: "___ il faut faire, c'est un CV clair. (Ce…)", k: "que", say: "Ce qu'il faut faire, c'est un CV clair." },
          { t: "C'est toi ___ as eu la meilleure note !", k: "qui", say: "C'est toi qui as eu la meilleure note !" }, { t: "C'est le poste ___ je préfère.", k: "que", say: "C'est le poste que je préfère." }
        ]
      }
    },
    {
      id: "g-remercier",
      title: "Thanking and writing a formal message",
      body: [
        "Thanking: [[Je vous remercie pour tout.]] · [[Merci pour votre enseignement.]] · [[Merci pour votre réponse.]] · [[Je vous dis merci.]] · [[Merci d'avance.]]",
        "Formal message: greet → [[Madame, / Monsieur,]] or [[Bonjour Madame,]] · ask → [[Je voudrais + infinitif]], [[Pouvez-vous… ?]], [[Acceptez-vous de… ?]], [[Je me demande comment…]] · close → [[Merci d'avance.]] [[Bien à vous,]] [[Bien cordialement,]]"
      ],
      info: { type: "card", style: "board", caption: "✉️ A formal message · tap a line", title: "NOUVEAU MESSAGE", sub: "À : Hélène Garnier · Objet : alternance en développement web", rows: [
        ["Saluer", "Bonjour Madame,", "Bonjour Madame,"],
        ["Se présenter", "Je suis étudiant en troisième année d'informatique.", "Je suis étudiant en troisième année d'informatique."],
        ["Dire ce qu'on veut", "Je voudrais faire une alternance dans votre entreprise.", "Je voudrais faire une alternance dans votre entreprise."],
        ["Demander poliment", "Acceptez-vous de me rencontrer ?", "Acceptez-vous de me rencontrer ?"],
        ["Conclure", "Merci d'avance. Bien cordialement, Bastien Mendy", "Merci d'avance. Bien cordialement."]
      ], foot: "Pièce jointe : CV_Bastien_Mendy.pdf" }
    },
    {
      id: "g-rapporte",
      title: "Reported speech in the present",
      body: [
        "To report a statement: [[dire, répondre, affirmer, ajouter, annoncer, expliquer, répéter]] + [[que]]: « C'est plus facile pour nous. » → [[Ils disent que c'est plus facile pour eux.]] Don't forget to change the pronouns!",
        "To report a question: [[demander, vouloir savoir, se demander]] + the question word ([[où, quand, comment, pourquoi, qui…]]): « Pourquoi ce poste vous intéresse ? » → [[Elle me demande pourquoi ce poste m'intéresse.]]",
        "Changes: [[est-ce que]] / no question word → [[si]] · [[qu'est-ce que]] → [[ce que]] · [[qu'est-ce qui]] → [[ce qui]]."
      ],
      info: { type: "merge", title: "🔁 Direct → indirect", rows: [
        { a: "« Est-ce que le CV est utile ? »", b: "si", g: "x", r: "Il se demande si le CV est utile.", ex: "Il se demande si le CV est utile.", en: "est-ce que → si" },
        { a: "« Qu'est-ce que vous savez faire ? »", b: "ce que", g: "x", r: "Elle demande ce que je sais faire.", ex: "Elle demande ce que je sais faire.", en: "qu'est-ce que → ce que" },
        { a: "« Qu'est-ce qui est important ? »", b: "ce qui", g: "x", r: "Ils se demandent ce qui est important.", ex: "Ils se demandent ce qui est important.", en: "qu'est-ce qui → ce qui" },
        { a: "« Où as-tu étudié ? »", b: "où", g: "x", r: "Elle veut savoir où tu as étudié.", ex: "Elle veut savoir où tu as étudié.", en: "question word stays" },
        { a: "« Je n'ai pas d'expérience. »", b: "que", g: "x", r: "Il dit qu'il n'a pas d'expérience.", ex: "Il dit qu'il n'a pas d'expérience.", en: "je → il" }
      ] },
      widget: {
        type: "combo", label: "Report it · pick a reporting verb and what was said",
        rows: [{ k: "dit", label: "Il dit…" }, { k: "demande", label: "Elle demande…" }],
        cols: [{ k: "exp", label: "💬 « J'ai de l'expérience. »" }, { k: "poste", label: "❓ « Est-ce que le poste est libre ? »" }, { k: "faire", label: "❓ « Qu'est-ce que tu veux faire ? »" }, { k: "diff", label: "❓ « Qu'est-ce qui est difficile ? »" }],
        out: {
          "dit|exp": ["Il dit qu'il a de l'expérience.", "He says he has experience."], "demande|exp": ["Elle dit qu'elle a de l'expérience.", "She says she has experience.", "a statement → dire que"],
          "dit|poste": ["Il demande si le poste est libre.", "He asks if the position is free.", "a question → demander si"], "demande|poste": ["Elle demande si le poste est libre.", "She asks if the position is free."],
          "dit|faire": ["Il demande ce que je veux faire.", "He asks what I want to do.", "tu → je"], "demande|faire": ["Elle me demande ce que je veux faire.", "She asks me what I want to do."],
          "dit|diff": ["Il demande ce qui est difficile.", "He asks what's difficult."], "demande|diff": ["Elle veut savoir ce qui est difficile.", "She wants to know what's difficult."]
        }
      }
    },
    {
      id: "g-projets",
      title: "Career plans and stating the obvious",
      body: [
        "Plans: [[Je vais mettre un terme à ma carrière pour devenir…]] · [[Je vais devoir me former et obtenir un diplôme de…]] · [[Après deux ans de formation, je vais…]] · [[Ce qui me plaît dans ce métier, c'est…]]",
        "The obvious: [[Évidemment !]] · [[C'est sûr.]] · [[C'est évident.]] · [[C'est certain.]]"
      ]
    },
    {
      id: "g-y",
      title: "The pronoun [[y]] (COI): [[à + chose]]",
      body: [
        "[[y]] replaces the complement of a verb followed by [[à]] when it's a <b>thing or an idea</b>: [[Tu réponds à ce message ? — Oui, j'y réponds tout de suite !]] · [[penser à, réfléchir à, s'intéresser à, répondre à, faire attention à, s'habituer à, jouer à, arriver à]]",
        "Place: <b>before</b> the verb (also in the negative and the passé composé): [[J'y ai bien réfléchi.]] · [[Je ne m'y intéresse pas.]] · <b>after</b> the verb in the affirmative imperative: [[Pensez-y !]]",
        "⚠️ For <b>people</b>, use [[à + pronom tonique]]: [[Il pense à son collègue. → Il pense à lui.]] but [[Il pense à ses vacances. → Il y pense.]]"
      ],
      info: { type: "pattern", title: "💭 y = à + quelque chose", rows: [
        ["Ta reconversion ?", "J'", { opts: ["y pense depuis longtemps.", "y ai bien réfléchi.", "y suis arrivé !"] }],
        ["Ce message urgent ?", "Je", { opts: ["n'y réponds pas.", "y réponds tout de suite.", "y fais attention."] }],
        ["Le nouveau logiciel ?", "On", { opts: ["s'y habitue vite.", "s'y intéresse beaucoup.", "y travaille."] }]
      ], note: "person → à lui / à elle / à eux" },
      widget: {
        type: "sort", label: "y or à + pronom tonique?",
        cols: [{ k: "y", label: "y (chose, idée)", color: "#2f9c8a" }, { k: "ton", label: "à lui / à elle… (personne)", color: "#e86a2e" }],
        items: [
          { t: "Je réponds aux mails. → J'___ réponds.", k: "y", say: "J'y réponds." }, { t: "Je pense à mes collègues. → Je pense ___.", k: "ton", say: "Je pense à eux." },
          { t: "Il s'intéresse au marketing. → Il s'___ intéresse.", k: "y", say: "Il s'y intéresse." }, { t: "Elle fait attention à sa santé. → Elle ___ fait attention.", k: "y", say: "Elle y fait attention." },
          { t: "Tu penses à ta prof ? → Tu penses ___ ?", k: "ton", say: "Tu penses à elle ?" }, { t: "Pensez à votre CV ! → Pensez-___ !", k: "y", say: "Pensez-y !" }
        ]
      }
    }
  ],

  expressions: [
    { fn: "Pour parler de sa formation", fnEn: "your studies", icon: "🎓", items: [
      ["J'ai passé mon bac scientifique.", "I took a science bac.", "std", true],
      ["Je me suis inscrit(e) en informatique.", "I enrolled in computer science.", "std", true],
      ["J'ai raté / réussi mes examens.", "I failed / passed my exams.", "std"],
      ["J'ai fait une année de césure.", "I took a gap year.", "std"],
      ["Je suis étudiant(e) en droit.", "I'm a law student.", "std"]
    ] },
    { fn: "Pour remercier", fnEn: "thanking", icon: "🙏", items: [
      ["Je vous remercie pour tout.", "Thank you for everything.", "poli", true],
      ["Merci pour votre enseignement.", "Thank you for your teaching.", "poli"],
      ["Merci pour votre réponse.", "Thank you for your reply.", "poli"],
      ["Je vous dis merci.", "I say thank you.", "std"]
    ] },
    { fn: "Pour écrire un message formel", fnEn: "formal messages", icon: "✉️", items: [
      ["Madame, / Monsieur,", "Dear Madam, / Dear Sir,", "poli", true],
      ["Pouvez-vous m'envoyer… ?", "Could you send me…?", "poli"],
      ["Acceptez-vous de me rencontrer ?", "Would you agree to meet me?", "poli"],
      ["Merci d'avance.", "Thanks in advance.", "poli", true],
      ["Bien à vous, / Bien cordialement,", "Yours, / Kind regards,", "poli", true]
    ] },
    { fn: "Pour parler de ses projets / une évidence", fnEn: "plans · the obvious", icon: "🚀", items: [
      ["Je vais me former pour devenir…", "I'm going to train to become…", "std", true],
      ["Ce qui me plaît dans ce métier, c'est…", "What I like about this job is…", "std", true],
      ["Évidemment ! · C'est sûr.", "Obviously! · That's for sure.", "std"],
      ["C'est évident. · C'est certain.", "It's obvious. · It's certain.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · a job interview", lanes: ["La recruteuse", "Le candidat"], av: ["f1", "m2"], steps: [
    { s: 0, fr: "Bonjour ! Pouvez-vous me parler de votre parcours ?", en: "Hello! Can you tell me about your background?" },
    { s: 1, fr: "J'ai passé mon bac à Dakar, puis je me suis inscrit en informatique.", en: "I took my bac in Dakar, then enrolled in computer science." },
    { s: 0, fr: "Qu'est-ce qui vous intéresse dans ce poste ?", en: "What interests you in this position?" },
    { s: 1, fr: "C'est le travail en équipe qui m'intéresse le plus.", en: "It's the teamwork that interests me most." },
    { s: 0, fr: "Vous avez pensé à vos horaires en alternance ?", en: "Have you thought about your work-study hours?" },
    { s: 1, fr: "Oui, j'y ai bien réfléchi. Je serai en entreprise trois semaines par mois.", en: "Yes, I've thought it through. I'll be at the company three weeks a month." }
  ] },

  sounds: {
    intro: "Phonie-graphie: three rounded vowels. [ø] (bleu): lips rounded, tongue forward. [o] (mot): lips rounded, tongue back. [u] (cours): lips very rounded and pushed forward. Compare [[deux]], [[dos]], [[doux]].",
    letters: [
      { l: "eu · œu · e(u)", name: "[ø] · bleu", tip: "[[deux]], [[il veut]], [[ma sœur]], [[peu]], [[sérieux]].", ex: ["ma sœur veut", "un peu sérieux", "deux jeux"] },
      { l: "o · au · eau · ô", name: "[o] · mot", tip: "[[le mot]], [[l'auto]], [[un bureau]], [[le diplôme]], [[le réseau]].", ex: ["un beau diplôme", "le réseau professionnel", "un bureau"] },
      { l: "ou · où · oû", name: "[u] · cours", tip: "[[le cours]], [[où]], [[nous]], [[trouver]], [[le goût]].", ex: ["trouver du travail", "où chercher ?", "tous les cours"] }
    ],
    pairs: [
      { a: ["deux", "two"], b: ["doux", "soft"], note: "[ø] / [u]" },
      { a: ["le dos", "the back"], b: ["deux", "two"], note: "[o] / [ø]" },
      { a: ["le mot", "the word"], b: ["la moue", "the pout"], note: "[o] / [u]" },
      { a: ["C'est lui qui…", "He's the one who…"], b: ["C'est lui que…", "He's the one whom…"], note: "mise en relief" },
      { a: ["il dit que", "he says that"], b: ["il demande si", "he asks whether"], note: "discours rapporté" },
      { a: ["j'y pense", "I think about it"], b: ["je pense à lui", "I think about him"], note: "y / à + pronom" }
    ]
  },
  classify: {
    label: "🔊 [ø], [o] ou [u] ?", q: "Listen: which sound do you hear: [ø] (bleu), [o] (mot) or [u] (cours)?",
    options: ["[ø] bleu", "[o] mot", "[u] cours"],
    items: [
      { say: "deux", a: 0 }, { say: "le bureau", a: 1 }, { say: "le cours", a: 2 }, { say: "il veut", a: 0 },
      { say: "le diplôme", a: 1 }, { say: "nous", a: 2 }, { say: "sérieux", a: 0 }, { say: "le réseau", a: 1 }, { say: "trouver", a: 2 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Bastien a passé un bac littéraire.", ok: false, explain: "un bac scientifique" },
    { type: "mcq", tag: "Dialogue 1", q: "Après sa première année ratée, Bastien…", options: ["a fait une année de césure", "a redoublé", "a arrêté ses études"], answer: 0 },
    { type: "mcq", tag: "Dialogue 1", q: "Pour Bastien, le plus difficile, c'est…", options: ["l'organisation du travail", "les maths", "l'ambiance"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Mme Ferrand était la professeure de français de Nour.", ok: false, explain: "She was her history teacher." },
    { type: "mcq", tag: "Dialogue 3", q: "D'après la conseillère, le CV de Bastien doit faire…", options: ["une page", "trois pages", "une affiche"], answer: 0 },
    { type: "tf", tag: "Dialogue 4", s: "Mme Garnier propose un entretien jeudi à 10 heures.", ok: true },
    { type: "mcq", tag: "Dialogue 5", q: "Thomas est devenu…", options: ["apprenti pâtissier", "consultant", "boulanger"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Thomas gagne plus d'argent qu'avant.", ok: false, explain: "He earns less, but spends more time with his family." },
    { type: "mcq", tag: "Dialogue 6", q: "Au coworking, une journée coûte…", options: ["15 €", "150 €", "50 €"], answer: 0 },
    { type: "fill", tag: "Mise en relief", sentence: "C'est elle ___ m'a donné envie d'être journaliste.", options: ["qui", "que", "ce que"], answer: 0 },
    { type: "fill", tag: "Mise en relief", sentence: "C'est une expérience ___ je ne regrette pas.", options: ["que", "qui", "ce qui"], answer: 0 },
    { type: "fill", tag: "Mise en relief", sentence: "___ me plaît, c'est le travail en équipe.", options: ["Ce qui", "Ce que", "Qui"], answer: 0 },
    { type: "fill", tag: "Mise en relief", sentence: "___ j'ai préféré au lycée, ce sont les fêtes.", options: ["Ce que", "Ce qui", "Que"], answer: 0 },
    { type: "type", tag: "Mise en relief", q: "Highlight the subject: « Nous étudions le droit. » → C'est…", answers: ["C'est nous qui étudions le droit."] },
    { type: "fill", tag: "Discours rapporté", sentence: "« Est-ce que tu as un CV ? » → Il me demande ___ j'ai un CV.", options: ["si", "que", "ce que"], answer: 0 },
    { type: "fill", tag: "Discours rapporté", sentence: "« Qu'est-ce que vous savez faire ? » → Elle demande ___ je sais faire.", options: ["ce que", "ce qui", "qu'est-ce que"], answer: 0 },
    { type: "fill", tag: "Discours rapporté", sentence: "« Qu'est-ce qui est difficile ? » → Il veut savoir ___ est difficile.", options: ["ce qui", "ce que", "si"], answer: 0 },
    { type: "fill", tag: "Discours rapporté", sentence: "« Ce poste m'intéresse. » → Il affirme que ce poste ___ intéresse.", options: ["l'", "m'", "t'"], answer: 0 },
    { type: "type", tag: "Discours rapporté", q: "Report: « Je vais créer un profil. » → Elle annonce…", answers: ["Elle annonce qu'elle va créer un profil.", "qu'elle va créer un profil"] },
    { type: "fill", tag: "Pronom y", sentence: "Tu penses à ta reconversion ? — Oui, j'___ pense tous les jours.", options: ["y", "en", "lui"], answer: 0 },
    { type: "fill", tag: "Pronom y", sentence: "Tu penses à ton ancien prof ? — Oui, je pense souvent ___ .", options: ["à lui", "y", "lui"], answer: 0 },
    { type: "fill", tag: "Pronom y", sentence: "Ce message est important : réponds-___ vite !", options: ["y", "en", "le"], answer: 0 },
    { type: "type", tag: "Pronom y", q: "Replace with y: « Je ne m'intéresse pas à la politique. »", answers: ["Je ne m'y intéresse pas."] },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu crois qu'il faut un diplôme pour ce métier ?", options: ["Évidemment ! C'est sûr.", "J'y ai bien raté.", "Bien cordialement."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce qui vous plaît dans ce poste ?", options: ["C'est le contact avec les clients qui me plaît.", "Je vous dis merci.", "C'est un collège."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "(e-mail formel) Comment terminer ?", options: ["Merci d'avance. Bien cordialement,", "Bisous, à plus !", "Salut !"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "En France, les élèves de 11 à 15 ans vont…", options: ["au collège", "au lycée", "à l'université"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Une licence, c'est…", options: ["bac +3", "bac +5", "le bac"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la candidate", "le CV", "l'entretien", "le nettoyage"], answer: 3, explain: "le nettoyage is a sector; the others are about recruitment." },
    { type: "order", tag: "Construisez", en: "It's this teacher who changed my life.", words: ["C'est", "cette", "professeure", "qui", "a", "changé", "ma", "vie."] },
    { type: "listen", tag: "Écoute", q: "What does the speaker say?", say: "J'ai raté ma première année de droit, alors j'ai fait une année de césure en Espagne.", options: ["she failed her first year and took a gap year", "she passed her first year in Spain", "she repeated her year"], answer: 0 }
  ],

  roleplays: [
    { title: "🎓 Présente ton parcours (DELF PO ex. 1)", brief: "The examiner asks about your studies or career. Answer simply.", memo: ["J'ai passé / obtenu…", "Je me suis inscrit(e)…", "Ce que j'ai préféré, c'est…"], partner: "f6", you: "m2",
      turns: [
        { them: "Vous avez fait quelles études ?", themEn: "What did you study?", hint: "You got your bac in 2020, then enrolled in economics.", you: "J'ai obtenu mon bac en 2020, puis je me suis inscrit en économie.", youEn: "I got my bac in 2020, then enrolled in economics." },
        { them: "Qu'est-ce que vous avez préféré ?", themEn: "What did you like best?", hint: "Highlight: the internships are what you liked best.", you: "Ce que j'ai préféré, ce sont les stages.", youEn: "What I liked best were the internships." },
        { them: "Et vos projets ?", themEn: "And your plans?", hint: "You're going to do a master's, then work in marketing.", you: "Je vais faire un master, puis je voudrais travailler dans le marketing.", youEn: "I'm going to do a master's, then I'd like to work in marketing." }
      ] },
    { title: "🏫 Entretien dans une école (DELF PO ex. 3)", brief: "You are in France and want to study at a vocational school. Introduce yourself to the director and explain why.", memo: ["Je voudrais…", "Ce qui me plaît, c'est…", "J'y pense depuis…"], partner: "m6", you: "f3",
      turns: [
        { them: "Bonjour, asseyez-vous. Pourquoi voulez-vous étudier ici ?", themEn: "Hello, sit down. Why do you want to study here?", hint: "You want to become a hairdresser; your school has a very good reputation.", you: "Je voudrais devenir coiffeuse, et votre école a une très bonne réputation.", youEn: "I'd like to become a hairdresser, and your school has a very good reputation." },
        { them: "Vous y pensez depuis longtemps ?", themEn: "Have you been thinking about it for long?", hint: "Yes, you've thought about it since you were a child.", you: "Oui, j'y pense depuis que je suis enfant.", youEn: "Yes, I've been thinking about it since I was a child." },
        { them: "Qu'est-ce qui vous plaît dans ce métier ?", themEn: "What do you like about this job?", hint: "Highlight: working with your hands and the contact with clients.", you: "Ce qui me plaît, c'est travailler avec mes mains et le contact avec les clients.", youEn: "What I like is working with my hands and the contact with customers." }
      ] },
    { title: "📞 Rapporte un message", brief: "Your colleague missed a call from a client. Report what the client said and asked.", memo: ["Il dit que…", "Il demande si…", "Il veut savoir ce que / quand…"], partner: "m4", you: "f4",
      turns: [
        { them: "M. Roux a appelé ? Qu'est-ce qu'il a dit ?", themEn: "Mr Roux called? What did he say?", hint: "He says he received your e-mail.", you: "Il dit qu'il a reçu ton e-mail.", youEn: "He says he got your e-mail." },
        { them: "Il a une question ?", themEn: "Does he have a question?", hint: "He asks if the meeting is on Monday.", you: "Oui, il demande si la réunion est lundi.", youEn: "Yes, he's asking if the meeting is on Monday." },
        { them: "C'est tout ?", themEn: "Is that all?", hint: "He also wants to know what he must bring.", you: "Il veut aussi savoir ce qu'il doit apporter.", youEn: "He also wants to know what he has to bring." }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Une enquête sur le travail idéal", intro: "Survey your group on the ideal job, make a top 10 of criteria and draw the class's 'identikit' of the perfect job.",
      steps: [["Préparation", ["In groups, read the survey results (see the culture tab): for whom is this study? What's necessary in a job? In what order?"]], ["Réalisation", ["Discuss each criterion: is it important for you too? What other criteria are necessary?", "Note all the group's criteria and rank them: make a 'top 10' of the ideal job."]], ["Présentation", ["Present your top 10 to the class. Take notes on the other groups' answers.", "Do you agree with their rankings? Discuss, then summarise the class's ideal job."]]],
      phrases: ["L'important, c'est de…", "Le plus important, c'est de…", "Ce qui est important, c'est…", "… c'est ce qui est important.", "avoir un travail utile, créatif · travailler en équipe", "profiter de sa famille · gagner de l'argent · se former"],
      model: { type: "card", style: "board", caption: "🏆 A group's top 5 · tap a line", title: "NOTRE TRAVAIL IDÉAL", sub: "groupe 2 · top 5", rows: [
        ["1", "Le plus important, c'est d'avoir de bonnes relations avec ses collègues.", "Le plus important, c'est d'avoir de bonnes relations avec ses collègues."],
        ["2", "Ce qui compte aussi, c'est l'équilibre entre vie privée et vie professionnelle.", "Ce qui compte aussi, c'est l'équilibre entre vie privée et vie professionnelle."],
        ["3", "Faire un travail utile, c'est ce qui nous motive.", "Faire un travail utile, c'est ce qui nous motive."],
        ["4", "L'important, c'est de pouvoir se former.", "L'important, c'est de pouvoir se former."],
        ["5", "Et un temps de transport réduit !", "Et un temps de transport réduit !"]
      ], foot: "Vous êtes d'accord avec nous ?" } }
  ],
  delf: {
    skill: "Production orale", title: "The DELF A2 speaking paper: strategies",
    about: "The DELF A2 <b>production orale</b> lasts 6 to 8 minutes, after 10 minutes of preparation (for exercises 2 and 3). <b>Exercise 1, entretien dirigé</b> (about 1 min 30): you introduce yourself and answer simple questions about your daily life, a past experience or your plans. <b>Exercise 2, monologue suivi</b> (about 2 min): you talk about a person, an event or an activity, then answer the examiner's questions. <b>Exercise 3, exercice en interaction</b> (about 3 min 30): you play a role with the examiner to organise something or solve an everyday situation. For exercises 2 and 3 you draw two topics and choose <b>one</b>.",
    tips: ["Read both topics carefully before choosing: you can't change your mind.", "During preparation, write only ideas and key words, not full sentences.", "For exercise 2, use the questions given to structure your talk; link ideas with et, mais, alors, donc.", "For exercise 3, ask yourself: what's my role? the examiner's role? what must I do?", "If you don't know a word, explain it with other words."],
    items: [
      { type: "mcq", q: "How long do you have to prepare?", options: ["10 minutes, for exercises 2 and 3", "30 minutes for all exercises", "no preparation"], answer: 0 },
      { type: "mcq", q: "In exercise 1 (entretien dirigé), the examiner asks about…", options: ["your daily life, past experiences or plans", "a newspaper article", "a role play at the bank"], answer: 0 },
      { type: "mcq", q: "Topic: « Parlez de votre professeur(e) préféré(e). » A good start:", options: ["Ma professeure préférée, c'était Mme Diop, ma prof de maths au collège.", "Bonjour, je voudrais un café.", "Le collège, c'est de 11 à 15 ans."], answer: 0 },
      { type: "mcq", q: "During preparation, you should write…", options: ["key words and ideas", "the whole text, word for word", "nothing at all"], answer: 0 },
      { type: "mcq", q: "You don't know the word « tondeuse ». You say…", options: ["« la machine pour couper l'herbe »", "nothing and stop talking", "the English word"], answer: 0 },
      { type: "mcq", q: "Exercise 3, topic: a francophone friend asks about work in your country. Your role is…", options: ["to answer his questions about job offers, salaries, holidays", "to ask him for a job", "to describe your favourite teacher"], answer: 0 }
    ]
  },
  detente: {
    title: "Le bon diplôme",
    intro: "Match each level with the French diploma.",
    items: [
      { type: "mcq", q: "À la fin du lycée, on passe…", options: ["le bac", "la licence", "le master"], answer: 0 },
      { type: "mcq", q: "Bac +3 à l'université :", options: ["la licence", "le doctorat", "le CAP"], answer: 0 },
      { type: "mcq", q: "Bac +5 :", options: ["le master", "le bac", "la licence"], answer: 0 },
      { type: "mcq", q: "Après le master, on peut faire…", options: ["un doctorat", "un collège", "une maternelle"], answer: 0 },
      { type: "mcq", q: "« Mention très bien » veut dire…", options: ["une excellente note globale", "on a raté", "on a redoublé"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "💼 What makes the ideal job? (PageGroup survey, 2018, quoted by the book)", unit: " %", items: [
      { fr: "la reconnaissance du travail accompli", en: "recognition of work done", v: 91, pic: "👏" },
      { fr: "l'équilibre vie privée / vie professionnelle", en: "work–life balance", v: 81, pic: "⚖️" },
      { fr: "travailler dans une entreprise socialement responsable", en: "a socially responsible company", v: 74.5, pic: "🌱" },
      { fr: "un temps de transport réduit", en: "a short commute", v: 52, pic: "🚇" }
    ] }
  ],
  culture: [
    { icon: "🏖️", kind: "Oh, le cliché !", t: "« Les Français ne travaillent pas beaucoup. »", d: "French employees have 25 days of paid holiday and 11 public holidays: 36 days off a year, according to the book. That's a lot, but in Austria, Malta, Greece or Bolivia, employees in principle have 37 or 38." },
    { icon: "🔁", kind: "Au fait !", t: "La formation en alternance", d: "Work-study lets you learn a trade while working: the student studies one or two weeks a month and works the rest of the time in a company." },
    { icon: "🌴", kind: "Francophonie", t: "Coworking en Martinique", d: "The book presents a coworking space in the marina of Le Marin, in Martinique: shared offices, a network of entrepreneurs and trainers, and restaurants, beaches and hiking trails nearby for balanced days." },
    { icon: "📄", kind: "Francophonie", t: "Le CV au Québec et en Suisse", d: "In <b>Québec</b>, you don't put personal information on your CV (age, marital status, photo…). In <b>Switzerland</b>, each job is presented precisely: company, place, dates, role, concrete achievements." },
    { icon: "💇", kind: "Au fait !", t: "Les coworkings de la beauté", d: "Coworking isn't just for computers: some spaces welcome hairdressers, beauticians, manicurists or masseurs, so customers can get all their treatments in the same place." },
    { icon: "🔄", kind: "Civilisation", t: "Changer de vie", d: "Many French people retrain (se reconvertir): to work with their hands, follow a childhood dream or spend more time with family. Bakers, cheesemakers and pastry chefs are popular second careers." }
  ],
  tips: [
    { icon: "🏫", t: "Faux ami: collège", d: "[[le collège]] = school for 11–15-year-olds, not a university college. University = [[l'université]], [[la fac]]." },
    { icon: "🔦", t: "qui or que?", d: "After [[qui]] comes a <b>verb</b> ([[c'est lui qui part]]); after [[que]] comes a <b>subject</b> ([[c'est lui que je vois]])." },
    { icon: "💭", t: "y for things, à lui for people", d: "[[J'y pense]] (à mon projet) · [[Je pense à elle]] (à ma prof)." }
  ],
  mistakes: [
    ["C'est elle que m'a aidé.", "C'est elle qui m'a aidée.", "subject → qui"],
    ["Ce que me plaît, c'est…", "Ce qui me plaît, c'est…", "ce qui = subject"],
    ["Il demande qu'est-ce que je fais.", "Il demande ce que je fais.", "qu'est-ce que → ce que"],
    ["Elle demande est-ce que tu viens.", "Elle demande si tu viens.", "est-ce que → si"],
    ["Je pense à mon prof. → J'y pense.", "Je pense à lui.", "people → à + pronom tonique"],
    ["Pense y !", "Penses-y !", "imperative: hyphen, and -s before y"],
    ["Je suis au collège à Lyon (= university).", "Je suis à l'université de Lyon.", "faux ami"],
    ["J'ai passé mon examen (= I passed).", "J'ai réussi mon examen.", "passer = to take; réussir = to pass"]
  ]
});
