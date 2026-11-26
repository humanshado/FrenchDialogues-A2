// Étape 4 · Bilan « Santé et médias » (Unités 7–8, book pp. 97–124)
// Original test, DELF A2 style: one point per item, answers explained. Covers u07, u08.
window.TEST = {
  id: "e4-test",
  rubrique: 4,
  after: 8,
  title: "Étape 4 test · Health and the media",
  titleFr: "Bilan · Santé et médias",
  covers: ["u07", "u08"],
  pages: "Unités 7–8 · book pp. 97–124",
  intro: "Do the whole test without looking anything up, then check each section. Section 5 is a DELF A2-style listening task, section 6 a reading task on an e-mail (exercise 2 type). Your results list the units to revise before Étape 5.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose the best answer.",
      items: [
        { s: "You don't feel very well.", o: ["Je suis un peu patraque.", "Je suis en pleine forme.", "Je suis au courant."], a: 0, lesson: "u07" },
        { s: "You advise a friend against something.", o: ["Je te déconseille de dormir sur le ventre.", "Je te déconseille dormir sur le ventre.", "Je te déconseille que tu dors."], a: 0, lesson: "u07" },
        { s: "You give your point of view.", o: ["À mon avis, il faut enseigner les premiers secours.", "À mon avis de enseigner.", "Mon avis, c'est enseigner il faut."], a: 0, lesson: "u07" },
        { s: "You see an accident in Europe. You call…", o: ["le 112", "le 911", "le 114"], a: 0, lesson: "u07" },
        { s: "You express a preference.", o: ["Je préfère la radio à la télé.", "Je préfère la radio que la télé.", "Je préfère la radio de la télé."], a: 0, lesson: "u08" },
        { s: "Something fascinates you.", o: ["Ça me passionne !", "Ça me déconseille !", "Je me suis ennuyé."], a: 0, lesson: "u08" },
        { s: "You give a positive review of a film.", o: ["Je l'ai adoré, je vous le conseille !", "C'est nul, je me suis ennuyé.", "C'est décevant."], a: 0, lesson: "u08" },
        { s: "You say why you don't watch the TV news.", o: ["À cause des images, qui sont souvent horribles.", "Grâce aux images horribles.", "C'est pourquoi les images."], a: 0, lesson: "u08" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): object pronoun, superlative, lequel, cause / consequence, subjunctive…",
      items: [
        { p: "Tu parles à ton médecin ? — Oui, je ___ parle demain.", a: "lui", lesson: "u07" },
        { p: "Tes gouttes ? Je ___ mets trois fois par jour.", a: "les", lesson: "u07" },
        { p: "Ce sont les ___ plantes pour les tisanes. (bon, +)", a: "meilleures", lesson: "u07" },
        { p: "C'est le romarin qui soulage le ___ les migraines. (bien, +)", a: "mieux", lesson: "u07" },
        { p: "Tu as vu ces tisanes ? ___ choisis-tu ?", a: "Lesquelles|lesquelles", lesson: "u07" },
        { p: "Je suis toujours informé ___ réseaux sociaux. (😀)", a: "grâce aux", lesson: "u08" },
        { p: "Les articles sont trop longs, c'est ___ je ne lis que les titres.", a: "pourquoi", lesson: "u08" },
        { p: "Il faut que tu ___ cette vidéo ! (regarder)", a: "regardes", lesson: "u08" },
        { p: "C'est bien que les séniors ___ connectés. (être)", a: "soient", lesson: "u08" },
        { p: "Ce film ? Je vais ___ revoir avec mes parents.", a: "le", lesson: "u08" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Qu'est-ce qui ne va pas ?"], ["B", "___"]], o: ["J'ai le nez bouché et je tousse.", "Je préfère la radio.", "C'est la meilleure."], a: 0, lesson: "u07" },
        { lines: [["A", "La victime respire ?"], ["B", "___"]], o: ["Oui, elle me parle.", "Oui, je lui respire.", "Oui, c'est le 15."], a: 0, lesson: "u07" },
        { lines: [["A", "Un de tes enfants est malade ?"], ["B", "___"]], o: ["Oui, le plus petit.", "Oui, lequel.", "Oui, quel."], a: 0, lesson: "u07" },
        { lines: [["A", "Comment tu t'informes ?"], ["B", "___"]], o: ["J'aime mieux lire la presse en ligne.", "Il faut que je m'informe hier.", "Je l'ai informé."], a: 0, lesson: "u08" },
        { lines: [["A", "Tu as vu le dernier épisode ?"], ["B", "___"]], o: ["Non, je ne l'ai pas encore vu.", "Non, je n'ai pas le vu.", "Non, je ne lui ai pas vu."], a: 0, lesson: "u08" },
        { lines: [["A", "Les réseaux sociaux, c'est bien pour les séniors ?"], ["B", "___"]], o: ["Oui, mais il est important qu'ils vérifient les informations.", "Oui, mais ils vérifient qu'il est important.", "Oui, grâce à cause des infox."], a: 0, lesson: "u08" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "la toux", b: "the cough", lesson: "u07" }, { a: "la sieste", b: "the nap", lesson: "u07" }, { a: "le / la blessé(e)", b: "the injured person", lesson: "u07" },
        { a: "l'auditeur", b: "the listener", lesson: "u08" }, { a: "les infox", b: "fake news", lesson: "u08" }, { a: "s'abonner", b: "to subscribe", lesson: "u08" }
      ]
    },
    {
      id: "s5", type: "listen", marks: 5,
      instr: "DELF A2 · Compréhension de l'oral. Écoutez et répondez.",
      instrEn: "A radio advert, a phone message and short dialogues. Play each recording twice, then choose.",
      items: [
        { say: "Vous manquez de sommeil ? Venez au Bar à sieste du centre-ville ! Vingt minutes dans un fauteuil massant pour douze euros. Ouvert du lundi au vendredi, de onze heures à quinze heures.", q: "Une sieste coûte…", o: ["12 €", "20 €", "15 €"], a: 0, lesson: "u07" },
        { say: "Vous manquez de sommeil ? Venez au Bar à sieste du centre-ville ! Vingt minutes dans un fauteuil massant pour douze euros. Ouvert du lundi au vendredi, de onze heures à quinze heures.", q: "Le bar à sieste est ouvert…", o: ["du lundi au vendredi", "tous les jours", "le week-end"], a: 0, lesson: "u07" },
        { say: "Bonjour, ici la pharmacie du Centre. Votre sirop est arrivé. Vous pouvez venir le chercher à partir de dix-sept heures. Pensez à apporter votre ordonnance.", q: "Qu'est-ce que la personne doit apporter ?", o: ["son ordonnance", "son sirop", "sa carte d'identité"], a: 0, lesson: "u07" },
        { say: "Ce documentaire sur les océans, je l'ai trouvé passionnant ! Je te le conseille vraiment.", q: "La personne…", o: ["fait une critique positive", "fait une critique négative", "s'excuse"], a: 0, lesson: "u08" },
        { say: "Moi, j'aime mieux écouter des podcasts que regarder la télé : je les écoute dans le métro.", q: "La personne exprime…", o: ["une préférence", "une inquiétude", "un conseil médical"], a: 0, lesson: "u08" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 10,
      instr: "DELF A2 · Compréhension des écrits. Lisez le courriel et répondez.",
      instrEn: "Read the e-mail from a local radio station, then decide: true or false?",
      doc: { type: "card", style: "board", title: "RADIO QUARTIER · Atelier podcast", sub: "De : contact@radioquartier.fr · Objet : votre inscription", rows: [
        ["Bonjour Malik,", "merci pour votre inscription à notre atelier « Créer son podcast »."],
        ["Quand ?", "les samedis 4, 11 et 18 mars, de 10 h à 12 h"],
        ["Où ?", "dans notre studio, 3 rue des Écoles (2e étage, sans ascenseur)"],
        ["Au programme", "choisir un sujet, écrire un texte, enregistrer sa voix, publier un épisode"],
        ["À apporter", "votre téléphone ou un ordinateur portable et des écouteurs"],
        ["Important", "il faut que vous confirmiez votre présence avant le 1er mars ; l'atelier est gratuit, mais les places sont limitées"]
      ], foot: "À bientôt sur nos ondes ! L'équipe de Radio Quartier" },
      items: [
        { s: "Malik s'est inscrit à un atelier de radio.", ok: true, lesson: "u08" },
        { s: "L'atelier dure trois samedis.", ok: true, lesson: "u08" },
        { s: "Les séances ont lieu l'après-midi.", ok: false, why: "de 10 h à 12 h (le matin)", lesson: "u08" },
        { s: "Le studio a un ascenseur.", ok: false, why: "2e étage, sans ascenseur", lesson: "u08" },
        { s: "Pendant l'atelier, on va enregistrer sa voix.", ok: true, lesson: "u08" },
        { s: "Il faut apporter des écouteurs.", ok: true, lesson: "u08" },
        { s: "L'atelier coûte 20 euros.", ok: false, why: "Il est gratuit.", lesson: "u08" },
        { s: "Malik doit confirmer avant le 1er mars.", ok: true, why: "« il faut que vous confirmiez »", lesson: "u08" },
        { s: "Il y a beaucoup de places.", ok: false, why: "les places sont limitées", lesson: "u08" },
        { s: "Le courriel est écrit par l'équipe de la radio.", ok: true, lesson: "u08" }
      ]
    }
  ],
  selfCheck: [
    ["Donner des conseils pour la santé et le bien-être", "give health and well-being advice"],
    ["Parler de mes problèmes de santé à la pharmacie", "talk about health problems at the pharmacy"],
    ["Donner mon point de vue", "give my point of view"],
    ["Appeler les secours et donner les informations essentielles", "call the emergency services"],
    ["Exprimer ma préférence et mon intérêt", "express preference and interest"],
    ["Expliquer une cause et une conséquence", "explain a cause and a consequence"],
    ["Faire la critique positive ou négative d'un film ou d'un média", "review a film or a medium"]
  ]
};
