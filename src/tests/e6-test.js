// Étape 6 · Bilan « Travail et nature » (Unités 11–12, book pp. 153–180)
// Original test, DELF A2 style: one point per item, answers explained. Covers u11, u12.
window.TEST = {
  id: "e6-test",
  rubrique: 6,
  after: 12,
  title: "Étape 6 test · Work and nature",
  titleFr: "Bilan · Travail et nature",
  covers: ["u11", "u12"],
  pages: "Unités 11–12 · book pp. 153–180",
  intro: "The last étape test of the course. Do it without looking anything up, then check each section. Section 5 is a DELF A2-style listening task, section 6 a reading task on a job offer. Your results list the units to revise before the DELF A2 mock exam (book p. 181).",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose the best answer.",
      items: [
        { s: "You talk about your studies.", o: ["J'ai obtenu mon bac en 2021.", "J'ai réussi mon bac demain.", "Je suis au collège de l'université."], a: 0, lesson: "u11" },
        { s: "You thank a former teacher.", o: ["Je vous remercie pour tout.", "Je vous remercie de tout pour.", "Merci à vous pour rien."], a: 0, lesson: "u11" },
        { s: "You end a formal e-mail.", o: ["Bien cordialement,", "Gros bisous !", "Salut, à plus !"], a: 0, lesson: "u11" },
        { s: "Something is obvious.", o: ["Évidemment !", "Ça me fait peur.", "Je proteste."], a: 0, lesson: "u11" },
        { s: "You're worried about the planet.", o: ["Je suis inquiète pour la planète.", "Je suis capable de la planète.", "Bravo pour la planète !"], a: 0, lesson: "u12" },
        { s: "You approve of a decision.", o: ["Nous approuvons cette décision.", "Nous protestons contre cette décision.", "Nous disons non."], a: 0, lesson: "u12" },
        { s: "You protest.", o: ["Nous ne sommes pas d'accord avec cela !", "Bravo, c'est une bonne nouvelle !", "Heureusement !"], a: 0, lesson: "u12" },
        { s: "You say what you can do.", o: ["Je sais jardiner et je suis bon en informatique.", "Je suis bon en jardiner.", "Je connais jardiner."], a: 0, lesson: "u12" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): mise en relief, reported speech, y, imperative + pronoun, pour / pour que, passive…",
      items: [
        { p: "C'est cette prof ___ m'a donné envie d'enseigner.", a: "qui", lesson: "u11" },
        { p: "___ me plaît dans ce métier, c'est le contact. (Ce…)", a: "Ce qui|ce qui", lesson: "u11" },
        { p: "« Est-ce que tu as un CV ? » → Il me demande ___ j'ai un CV.", a: "si", lesson: "u11" },
        { p: "« Qu'est-ce que vous savez faire ? » → Elle demande ___ je sais faire.", a: "ce que", lesson: "u11" },
        { p: "Ta reconversion ? Tu ___ penses depuis longtemps ?", a: "y", lesson: "u11" },
        { p: "Tes déchets ? Trie-___ !", a: "les", lesson: "u12" },
        { p: "Ton vieux vélo ? Ne ___ jette pas !", a: "le", lesson: "u12" },
        { p: "Les abeilles dansent pour que les autres ___ où sont les fleurs. (savoir)", a: "sachent", lesson: "u12" },
        { p: "La pétition a été ___ par mille habitants. (signer)", a: "signée", lesson: "u12" },
        { p: "Les photos ___ publiées demain par le jury. (être, futur)", a: "seront", lesson: "u12" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Tu as réussi tes examens ?"], ["B", "___"]], o: ["Non, j'ai raté ma première année.", "Non, j'ai passé ma réussite.", "Non, je suis au collège en master."], a: 0, lesson: "u11" },
        { lines: [["A", "Qu'est-ce qu'il a dit, le recruteur ?"], ["B", "___"]], o: ["Il dit qu'il va me rappeler.", "Il dit qu'est-ce qu'il rappelle.", "Il demande que si je rappelle."], a: 0, lesson: "u11" },
        { lines: [["A", "Tu penses souvent à ton ancien prof ?"], ["B", "___"]], o: ["Oui, je pense souvent à lui.", "Oui, j'y pense souvent à lui.", "Oui, je lui pense."], a: 0, lesson: "u11" },
        { lines: [["A", "Pourquoi tu ne prends pas l'avion ?"], ["B", "___"]], o: ["Pour ne pas polluer.", "Pour que je ne pollue pas.", "Pour ne polluer pas."], a: 0, lesson: "u12" },
        { lines: [["A", "Qui a créé ce site de co-jardinage ?"], ["B", "___"]], o: ["Il a été créé par une jardinière.", "Il a créé par une jardinière.", "Il est créant une jardinière."], a: 0, lesson: "u12" },
        { lines: [["A", "Je vais jeter ces piles dans la poubelle."], ["B", "___"]], o: ["Non, ne les jette pas ! Recycle-les.", "Oui, jette-leur !", "Non, les ne jette pas !"], a: 0, lesson: "u12" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "l'année de césure", b: "the gap year", lesson: "u11" }, { a: "redoubler", b: "to repeat a year", lesson: "u11" }, { a: "l'entretien", b: "the (job) interview", lesson: "u11" },
        { a: "le gaspillage", b: "wastefulness", lesson: "u12" }, { a: "la chouette", b: "the owl", lesson: "u12" }, { a: "trier", b: "to sort", lesson: "u12" }
      ]
    },
    {
      id: "s5", type: "listen", marks: 5,
      instr: "DELF A2 · Compréhension de l'oral. Écoutez et répondez.",
      instrEn: "A voicemail, a radio announcement and short dialogues. Play each recording twice, then choose.",
      items: [
        { say: "Bonjour, ici Hélène Garnier, de la société Webexpert. J'ai bien reçu votre CV. Je vous propose un entretien mardi à quatorze heures. Merci de me rappeler pour confirmer.", q: "L'entretien est…", o: ["mardi à 14 h", "jeudi à 10 h", "mardi à 10 h"], a: 0, lesson: "u11" },
        { say: "Bonjour, ici Hélène Garnier, de la société Webexpert. J'ai bien reçu votre CV. Je vous propose un entretien mardi à quatorze heures. Merci de me rappeler pour confirmer.", q: "Qu'est-ce que la personne doit faire ?", o: ["rappeler pour confirmer", "envoyer son CV", "attendre un e-mail"], a: 0, lesson: "u11" },
        { say: "Samedi, grande journée de nettoyage au bord du lac ! Rendez-vous à neuf heures devant la mairie. Les gants et les sacs sont fournis, apportez seulement une gourde.", q: "Qu'est-ce qu'il faut apporter ?", o: ["une gourde", "des gants", "des sacs"], a: 0, lesson: "u12" },
        { say: "Ce que j'aime dans mon nouveau métier, c'est travailler avec mes mains. Avant, j'étais assis devant un ordinateur toute la journée.", q: "La personne…", o: ["a changé de métier", "veut un ordinateur", "cherche un stage"], a: 0, lesson: "u11" },
        { say: "Ils veulent construire une route dans la forêt ? Nous ne sommes pas d'accord ! Nous allons manifester dimanche.", q: "La personne exprime…", o: ["une protestation", "une approbation", "une peur des animaux"], a: 0, lesson: "u12" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 10,
      instr: "DELF A2 · Compréhension des écrits. Lisez l'offre d'emploi et répondez.",
      instrEn: "Read the job offer, then decide: true or false?",
      doc: { type: "card", style: "board", title: "OFFRE D'EMPLOI · Animateur / Animatrice nature (H/F)", sub: "Parc naturel des Vallons · contrat de 6 mois, d'avril à septembre", rows: [
        ["Missions", "accueillir les visiteurs, animer des balades et des ateliers pour les enfants, participer aux journées de nettoyage"],
        ["Profil", "vous connaissez bien la faune et la flore ; vous savez parler à un groupe ; l'anglais est un plus"],
        ["Formation", "bac +2 minimum dans l'environnement ; les étudiants en alternance sont acceptés"],
        ["Horaires", "35 heures par semaine, travail le week-end (2 jours de repos en semaine)"],
        ["Lieu", "en présentiel, au parc ; pas de travail à distance"],
        ["Candidature", "envoyez votre CV et une lettre de motivation avant le 15 mars à recrutement@parcdesvallons.fr"]
      ], foot: "Les entretiens auront lieu fin mars." },
      items: [
        { s: "C'est un contrat d'un an.", ok: false, why: "6 mois, d'avril à septembre", lesson: "u11" },
        { s: "L'animateur s'occupe aussi des enfants.", ok: true, why: "ateliers pour les enfants", lesson: "u11" },
        { s: "Il faut bien connaître les animaux et les plantes.", ok: true, why: "la faune et la flore", lesson: "u12" },
        { s: "Parler anglais est obligatoire.", ok: false, why: "c'est un plus", lesson: "u11" },
        { s: "Il faut avoir au moins bac +2.", ok: true, lesson: "u11" },
        { s: "Les étudiants en alternance peuvent répondre.", ok: true, lesson: "u11" },
        { s: "On ne travaille jamais le week-end.", ok: false, why: "travail le week-end", lesson: "u11" },
        { s: "On peut travailler de chez soi.", ok: false, why: "pas de travail à distance", lesson: "u11" },
        { s: "Il faut envoyer un CV et une lettre.", ok: true, lesson: "u11" },
        { s: "Les entretiens auront lieu en avril.", ok: false, why: "fin mars", lesson: "u11" }
      ]
    }
  ],
  selfCheck: [
    ["Parler de ma formation et de mon parcours", "talk about my studies and career path"],
    ["Remercier et écrire un message formel", "thank someone and write a formal message"],
    ["Rapporter ce que quelqu'un dit ou demande", "report what someone says or asks"],
    ["Parler de mes projets professionnels", "talk about my career plans"],
    ["Exprimer la peur, l'inquiétude et ma capacité d'agir", "express fear, worry and my ability to act"],
    ["Approuver ou protester", "approve or protest"],
    ["Donner des conseils écologiques avec l'impératif", "give eco-tips with the imperative"]
  ]
};
