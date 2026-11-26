// Étape 2 · Bilan « Chez soi, entre nous » (Unités 3–4, book pp. 41–68)
// Original test, DELF A2 style: one point per item, answers explained. Covers u03, u04.
window.TEST = {
  id: "e2-test",
  rubrique: 2,
  after: 4,
  title: "Étape 2 test · Home and people",
  titleFr: "Bilan · Chez soi, entre nous",
  covers: ["u03", "u04"],
  pages: "Unités 3–4 · book pp. 41–68",
  intro: "Do the whole test without looking anything up, then check each section. Section 5 is a DELF A2-style listening task (a phone message and short dialogues), section 6 a reading task on a property ad. Your results list the units to revise before Étape 3.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose the best answer.",
      items: [
        { s: "You call about a flat you saw online.", o: ["Je suis intéressé(e) par votre annonce.", "Je suis intéressant par votre annonce.", "Votre annonce m'intéresse beaucoup de."], a: 0, lesson: "u03" },
        { s: "You want to know the rent.", o: ["Quel est le montant du loyer ?", "Quelle est la superficie ?", "C'est à quel étage ?"], a: 0, lesson: "u03" },
        { s: "You missed a viewing. You're disappointed.", o: ["Zut ! C'est dommage.", "Courage !", "Ça va aller."], a: 0, lesson: "u03" },
        { s: "Your friend is sad: she lost her cat. You comfort her.", o: ["Ne t'inquiète pas, il va revenir.", "Mince, c'est ton problème.", "Si tu veux, achète un chat."], a: 0, lesson: "u03" },
        { s: "You compliment a colleague on her new jacket.", o: ["Cette couleur te donne bonne mine !", "Tu as mauvaise mine !", "Tu ressembles à une veste."], a: 0, lesson: "u04" },
        { s: "You describe someone's height.", o: ["Il mesure 1,75 m.", "Il fait 1,75 m de taille 44.", "Il a 1,75 m d'âge."], a: 0, lesson: "u04" },
        { s: "You describe a shy friend kindly.", o: ["C'est quelqu'un de discret et réfléchi.", "C'est quelqu'un de bruyante.", "Il est du genre bavard."], a: 0, lesson: "u04" },
        { s: "You say your sister and you look alike.", o: ["Nous avons les mêmes yeux.", "Nous avons le même yeux.", "Nous avons autant yeux."], a: 0, lesson: "u04" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): relative pronoun, comparison, si, equivalence, chaque / tout, possessive pronoun…",
      items: [
        { p: "C'est la pièce ___ je préfère.", a: "que", lesson: "u03" },
        { p: "Voici la chambre ___ je dors.", a: "où", lesson: "u03" },
        { p: "Je loue un studio ___ est au 4e étage.", a: "qui", lesson: "u03" },
        { p: "On vit bien en ville, mais on vit ___ à la campagne. (+)", a: "mieux", lesson: "u03" },
        { p: "Il y a ___ chambres que dans notre maison. (=)", a: "autant de", lesson: "u03" },
        { p: "___ il pleut, on reste à la maison.", a: "S'|s'", lesson: "u03" },
        { p: "Il est ___ grand que son père. (=)", a: "aussi", lesson: "u04" },
        { p: "___ corps est unique. (each)", a: "Chaque|chaque", lesson: "u04" },
        { p: "___ le monde a des défauts.", a: "Tout|tout", lesson: "u04" },
        { p: "C'est ta photo ? — Oui, c'est la ___ .", a: "mienne", lesson: "u04" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Le loyer est de 700 euros par mois."], ["B", "___"]], o: ["Ça inclut les charges ?", "C'est quelqu'un de discret.", "Si il fait beau."], a: 0, lesson: "u03" },
        { lines: [["A", "Le bus ou l'appartement, c'est pareil ?"], ["B", "___"]], o: ["Non, dans le bus, c'est mieux !", "Non, dans le bus, c'est plus bien !", "Non, dans le bus, c'est meilleur qu'avant bien."], a: 0, lesson: "u03" },
        { lines: [["A", "J'ai perdu mes clés…"], ["B", "___"]], o: ["Ce n'est pas grave. Si tu veux, tu peux attendre chez moi.", "Zut, c'est le tien.", "Tu es trop fort !"], a: 0, lesson: "u03" },
        { lines: [["A", "Tu es trop fort au foot !"], ["B", "___"]], o: ["Merci, c'est gentil !", "C'est la tienne.", "Je mesure 1,60 m."], a: 0, lesson: "u04" },
        { lines: [["A", "Ton frère te ressemble ?"], ["B", "___"]], o: ["Oui, il a le même sourire que moi.", "Oui, il a la même sourire.", "Oui, chaque sourire."], a: 0, lesson: "u04" },
        { lines: [["A", "Ce sont les photos de Sami ?"], ["B", "___"]], o: ["Oui, ce sont les siennes.", "Oui, c'est la sienne.", "Oui, ce sont les leurs siens."], a: 0, lesson: "u04" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "le locataire", b: "the tenant", lesson: "u03" }, { a: "le grenier", b: "the attic", lesson: "u03" }, { a: "bruyant", b: "noisy", lesson: "u03" },
        { a: "le sosie", b: "the lookalike", lesson: "u04" }, { a: "têtu", b: "stubborn", lesson: "u04" }, { a: "avoir bonne mine", b: "to look well", lesson: "u04" }
      ]
    },
    {
      id: "s5", type: "listen", marks: 5,
      instr: "DELF A2 · Compréhension de l'oral. Écoutez et répondez.",
      instrEn: "Exercise 3 (a phone message) and exercise 4 (short dialogues). Play each recording twice, then choose.",
      items: [
        { say: "Bonjour, c'est Lucas Martin. J'appelle pour le studio meublé de la rue des Lilas. Il fait combien de mètres carrés ? Je voudrais le visiter samedi matin. Vous pouvez m'envoyer un message au zéro six, vingt-deux, quarante-quatre, dix, quatre-vingt-huit.", q: "Lucas veut…", o: ["louer un studio meublé", "acheter une maison", "partager une colocation"], a: 0, lesson: "u03" },
        { say: "Bonjour, c'est Lucas Martin. J'appelle pour le studio meublé de la rue des Lilas. Il fait combien de mètres carrés ? Je voudrais le visiter samedi matin. Vous pouvez m'envoyer un message au zéro six, vingt-deux, quarante-quatre, dix, quatre-vingt-huit.", q: "Il voudrait visiter…", o: ["samedi matin", "samedi soir", "dimanche matin"], a: 0, lesson: "u03" },
        { say: "Bonjour, c'est Lucas Martin. J'appelle pour le studio meublé de la rue des Lilas. Il fait combien de mètres carrés ? Je voudrais le visiter samedi matin. Vous pouvez m'envoyer un message au zéro six, vingt-deux, quarante-quatre, dix, quatre-vingt-huit.", q: "Qu'est-ce que vous devez faire ?", o: ["lui envoyer un message", "le rappeler ce soir", "attendre son appel"], a: 0, lesson: "u03" },
        { say: "Oh, ta nouvelle coupe de cheveux est super ! Ça te va vraiment bien.", q: "Dans ce dialogue, la personne…", o: ["fait un compliment", "s'excuse", "propose de l'aide"], a: 0, lesson: "u04" },
        { say: "Mince, l'appartement est déjà loué ? — Oui, désolé. — C'est dommage, il me plaisait beaucoup.", q: "La personne exprime…", o: ["sa déception", "sa joie", "son accord"], a: 0, lesson: "u03" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 10,
      instr: "DELF A2 · Compréhension des écrits. Lisez l'annonce et répondez.",
      instrEn: "Read the flatshare ad, then decide: true or false?",
      doc: { type: "card", style: "board", title: "CHERCHONS 3e COLOCATAIRE !", sub: "Lyon, quartier de la Croix-Rousse", rows: [
        ["Le logement", "appartement ancien de 90 m², au 2e étage avec ascenseur, très clair"],
        ["Les pièces", "3 chambres, un grand salon, une cuisine équipée, une salle de bain, un balcon"],
        ["Ta chambre", "12 m², meublée (lit deux places, bureau, étagère), plus grande que les nôtres !"],
        ["Le quartier", "animé, avec beaucoup de commerces, à 10 minutes à pied du métro"],
        ["Le loyer", "450 € par mois, charges comprises (sauf l'électricité)"],
        ["Nous", "Inès, 24 ans, d'un naturel calme, et Paul, 26 ans, du genre bavard mais très ordonné"]
      ], foot: "Si tu es intéressé(e), écris-nous ! Visites le samedi." },
      items: [
        { s: "L'appartement est neuf.", ok: false, why: "C'est un appartement ancien.", lesson: "u03" },
        { s: "Il y a un ascenseur.", ok: true, lesson: "u03" },
        { s: "Il y a trois chambres.", ok: true, lesson: "u03" },
        { s: "La chambre libre est moins grande que les autres.", ok: false, why: "plus grande que les nôtres", lesson: "u03" },
        { s: "La chambre libre est meublée.", ok: true, lesson: "u03" },
        { s: "Le quartier est calme.", ok: false, why: "Il est animé.", lesson: "u03" },
        { s: "L'électricité est incluse dans le loyer.", ok: false, why: "charges comprises sauf l'électricité", lesson: "u03" },
        { s: "Inès est d'un naturel calme.", ok: true, lesson: "u04" },
        { s: "Paul est désordonné.", ok: false, why: "Il est très ordonné.", lesson: "u04" },
        { s: "On peut visiter le samedi.", ok: true, lesson: "u03" }
      ]
    }
  ],
  selfCheck: [
    ["Décrire un logement", "describe a home"],
    ["Poser des questions pour louer un logement", "ask questions to rent a home"],
    ["Comparer deux logements ou deux modes de vie", "compare two homes or lifestyles"],
    ["Exprimer ma déception et consoler quelqu'un", "express disappointment and comfort someone"],
    ["Faire le portrait physique de quelqu'un", "describe someone's appearance"],
    ["Faire un compliment et y répondre", "pay and answer a compliment"],
    ["Parler du caractère de quelqu'un", "talk about someone's personality"]
  ]
};
