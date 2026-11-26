// DELF A2 · Épreuve blanche (mock exam). The book has one on p. 181 onwards; this is an ORIGINAL mock exam
// in the same format (4 papers, /25 each): no item, recording or document from the book is reproduced.
// Productions écrite and orale are self-assessed with a rubric and a model answer.
window.TEST = {
  id: "delf-a2-blanc",
  rubrique: 6,
  after: 12,
  label: "DELF A2",
  title: "DELF A2 mock exam · all four papers",
  titleFr: "DELF A2 · Épreuve blanche",
  covers: ["u01", "u02", "u03", "u04", "u05", "u06", "u07", "u08", "u09", "u10", "u11", "u12"],
  pages: "Unités 1–12 · format of the book's épreuve blanche (p. 181)",
  intro: "A complete, original mock exam in the DELF A2 format: four papers, each out of 25. Use the timers to work in real conditions (listening about 25 min, reading 30 min, writing 45 min, speaking 6–8 min after 10 min of preparation). Listening and reading are marked automatically; for writing and speaking, compare with the model answer and mark yourself with the grid. To pass the real DELF A2 you need 50/100, with at least 5/25 in each paper.",
  papers: { pass: 50, minEach: 5 },
  sections: [
    /* ===================== 1. COMPRÉHENSION DE L'ORAL (25) ===================== */
    {
      id: "co1", type: "listen", marks: 6, paper: "1. Compréhension de l'oral", time: 25,
      instr: "Exercice 1 · Vous écoutez des annonces publiques.",
      instrEn: "Public announcements. Listen twice, then answer. (The timer covers the whole listening paper.)",
      items: [
        { say: "Mesdames et messieurs, le train à destination de Nantes partira avec vingt minutes de retard, voie sept.", q: "Le train part de quelle voie ?", o: ["voie 7", "voie 17", "voie 20"], a: 0, lesson: "u10" },
        { say: "Chers clients, aujourd'hui seulement, tous les produits de beauté sont à moins trente pour cent au rez-de-chaussée.", q: "Qu'est-ce qui est en promotion ?", o: ["les produits de beauté", "les vêtements", "l'électroménager"], a: 0, lesson: "u09" },
        { say: "La piscine municipale fermera exceptionnellement à dix-huit heures ce soir pour le nettoyage des bassins.", q: "Ce soir, la piscine ferme à…", o: ["18 h", "20 h", "16 h"], a: 0, lesson: "u06" },
        { say: "Attention : à cause des travaux, la ligne de bus numéro quatre ne s'arrête pas place de la Mairie cette semaine.", q: "Quel est le problème ?", o: ["le bus 4 ne s'arrête pas à la Mairie", "le bus 4 est gratuit", "la Mairie est fermée"], a: 0, lesson: "u05" },
        { say: "Bienvenue au musée ! La visite guidée en français commence dans dix minutes devant l'accueil.", q: "Où commence la visite guidée ?", o: ["devant l'accueil", "à la cafétéria", "au premier étage"], a: 0, lesson: "u10" },
        { say: "Venez goûter nos nouveaux fromages de montagne au rayon frais, à côté des yaourts !", q: "Qu'est-ce qu'on peut goûter ?", o: ["des fromages", "des yaourts", "des fruits"], a: 0, lesson: "u06" }
      ]
    },
    {
      id: "co2", type: "listen", marks: 6, paper: "1. Compréhension de l'oral",
      instr: "Exercice 2 · Vous écoutez la radio.",
      instrEn: "Short radio items. Listen twice, then answer.",
      items: [
        { say: "La météo du week-end : soleil et chaleur dans le sud, avec jusqu'à trente-cinq degrés à Marseille. Pensez à boire beaucoup d'eau !", q: "Quel temps fera-t-il dans le sud ?", o: ["chaud et ensoleillé", "froid et pluvieux", "du vent et de la neige"], a: 0, lesson: "u02" },
        { say: "La météo du week-end : soleil et chaleur dans le sud, avec jusqu'à trente-cinq degrés à Marseille. Pensez à boire beaucoup d'eau !", q: "Quel conseil donne la radio ?", o: ["boire beaucoup d'eau", "rester au lit", "prendre un parapluie"], a: 0, lesson: "u07" },
        { say: "Du vendredi au dimanche, le festival de la bande dessinée revient à Angoulême : rencontres avec les auteurs, ateliers pour enfants et expositions.", q: "De quel événement parle-t-on ?", o: ["un festival de BD", "un salon de l'auto", "un concert de rock"], a: 0, lesson: "u08" },
        { say: "Du vendredi au dimanche, le festival de la bande dessinée revient à Angoulême : rencontres avec les auteurs, ateliers pour enfants et expositions.", q: "Combien de jours dure-t-il ?", o: ["trois jours", "deux jours", "une semaine"], a: 0, lesson: "u08" },
        { say: "Selon une nouvelle enquête, six Français sur dix achètent maintenant des vêtements d'occasion, surtout pour faire des économies.", q: "Pourquoi achètent-ils d'occasion ?", o: ["pour faire des économies", "pour la mode", "pour aider les magasins"], a: 0, lesson: "u09" },
        { say: "Bonne nouvelle pour les cyclistes : vingt kilomètres de nouvelles pistes cyclables ouvriront en ville au printemps.", q: "Qu'est-ce qui va ouvrir ?", o: ["des pistes cyclables", "un parking", "une gare"], a: 0, lesson: "u05" }
      ]
    },
    {
      id: "co3", type: "listen", marks: 6, paper: "1. Compréhension de l'oral",
      instr: "Exercice 3 · Vous écoutez un message sur votre répondeur.",
      instrEn: "A voicemail. Each question replays the full message.",
      items: [
        { say: "Bonjour, c'est Monique, votre voisine du troisième. Je vais fêter mes soixante ans samedi prochain dans la salle commune de l'immeuble, à partir de dix-neuf heures. J'aimerais savoir si vous pourriez m'aider à installer les tables vers dix-sept heures. Si vous avez des chaises pliantes, apportez-les ! Rappelez-moi avant jeudi, s'il vous plaît. Merci !", q: "Quel événement prépare Monique ?", o: ["un anniversaire", "un déménagement", "une réunion de travail"], a: 0, lesson: "u04" },
        { say: "Bonjour, c'est Monique, votre voisine du troisième. Je vais fêter mes soixante ans samedi prochain dans la salle commune de l'immeuble, à partir de dix-neuf heures. J'aimerais savoir si vous pourriez m'aider à installer les tables vers dix-sept heures. Si vous avez des chaises pliantes, apportez-les ! Rappelez-moi avant jeudi, s'il vous plaît. Merci !", q: "Où a lieu la fête ?", o: ["dans la salle commune de l'immeuble", "au restaurant", "chez sa fille"], a: 0, lesson: "u03" },
        { say: "Bonjour, c'est Monique, votre voisine du troisième. Je vais fêter mes soixante ans samedi prochain dans la salle commune de l'immeuble, à partir de dix-neuf heures. J'aimerais savoir si vous pourriez m'aider à installer les tables vers dix-sept heures. Si vous avez des chaises pliantes, apportez-les ! Rappelez-moi avant jeudi, s'il vous plaît. Merci !", q: "La fête commence à…", o: ["19 h", "17 h", "16 h"], a: 0, lesson: "u03" },
        { say: "Bonjour, c'est Monique, votre voisine du troisième. Je vais fêter mes soixante ans samedi prochain dans la salle commune de l'immeuble, à partir de dix-neuf heures. J'aimerais savoir si vous pourriez m'aider à installer les tables vers dix-sept heures. Si vous avez des chaises pliantes, apportez-les ! Rappelez-moi avant jeudi, s'il vous plaît. Merci !", q: "Qu'est-ce qu'elle vous demande ?", o: ["de l'aider à installer les tables", "de faire un gâteau", "de payer la salle"], a: 0, lesson: "u09" },
        { say: "Bonjour, c'est Monique, votre voisine du troisième. Je vais fêter mes soixante ans samedi prochain dans la salle commune de l'immeuble, à partir de dix-neuf heures. J'aimerais savoir si vous pourriez m'aider à installer les tables vers dix-sept heures. Si vous avez des chaises pliantes, apportez-les ! Rappelez-moi avant jeudi, s'il vous plaît. Merci !", q: "Qu'est-ce que vous pouvez apporter ?", o: ["des chaises pliantes", "des verres", "de la musique"], a: 0, lesson: "u03" },
        { say: "Bonjour, c'est Monique, votre voisine du troisième. Je vais fêter mes soixante ans samedi prochain dans la salle commune de l'immeuble, à partir de dix-neuf heures. J'aimerais savoir si vous pourriez m'aider à installer les tables vers dix-sept heures. Si vous avez des chaises pliantes, apportez-les ! Rappelez-moi avant jeudi, s'il vous plaît. Merci !", q: "Il faut…", o: ["la rappeler avant jeudi", "lui envoyer un SMS samedi", "attendre son appel"], a: 0, lesson: "u03" }
      ]
    },
    {
      id: "co4", type: "listen", marks: 7, paper: "1. Compréhension de l'oral",
      instr: "Exercice 4 · Écoutez les dialogues. Quelle est la situation ?",
      instrEn: "Short dialogues. What is the speaker doing: inviting, advising, apologising, protesting…?",
      items: [
        { say: "— Tu viens dîner à la maison vendredi ? — Avec plaisir ! J'apporte le dessert.", q: "Dans ce dialogue, on…", o: ["invite quelqu'un", "s'excuse", "proteste"], a: 0, lesson: "u01" },
        { say: "— Je suis vraiment désolé pour mon retard, mon train était bloqué. — Ce n'est pas grave, on vient de commencer.", q: "Dans ce dialogue, on…", o: ["s'excuse", "félicite", "demande un prix"], a: 0, lesson: "u04" },
        { say: "— J'ai mal à la gorge depuis trois jours. — Tu devrais boire une tisane au miel et aller voir le médecin.", q: "Dans ce dialogue, on…", o: ["donne un conseil", "invite quelqu'un", "raconte un voyage"], a: 0, lesson: "u07" },
        { say: "— Félicitations pour ton diplôme ! — Merci, je suis tellement contente !", q: "Dans ce dialogue, on…", o: ["félicite quelqu'un", "refuse une invitation", "demande un service"], a: 0, lesson: "u11" },
        { say: "— Pourriez-vous m'aider à porter ma valise, s'il vous plaît ? — Bien sûr, donnez-la-moi.", q: "Dans ce dialogue, on…", o: ["demande un service", "donne son opinion", "exprime la peur"], a: 0, lesson: "u09" },
        { say: "— La mairie va fermer le parc pour construire un parking. — Quoi ? Je ne suis pas d'accord, c'est inacceptable !", q: "Dans ce dialogue, on…", o: ["proteste", "approuve", "remercie"], a: 0, lesson: "u12" },
        { say: "— Dans dix ans, je crois qu'on travaillera tous à distance. — Peut-être, mais moi, je préférerai toujours le bureau.", q: "Dans ce dialogue, on…", o: ["parle de l'avenir", "parle du passé", "commande un repas"], a: 0, lesson: "u05" }
      ]
    },

    /* ===================== 2. COMPRÉHENSION DES ÉCRITS (25) ===================== */
    {
      id: "ce1", type: "match", marks: 6, paper: "2. Compréhension des écrits", time: 30,
      instr: "Exercice 1 · Des amis cherchent une activité pour le week-end. Associez chaque personne à une annonce.",
      instrEn: "Read the six ads, then match each person with the best ad. (The timer covers the whole reading paper.)",
      doc: { type: "card", style: "board", title: "CE WEEK-END EN VILLE", sub: "six annonces", rows: [
        ["A · Atelier vélo", "Apprenez à réparer votre vélo avec nos bénévoles. Gratuit, apportez votre vélo !"],
        ["B · Balade nature", "Randonnée de 12 km avec un guide pour découvrir les oiseaux du lac. Bonnes chaussures obligatoires."],
        ["C · Cuisine du monde", "Cours de cuisine sénégalaise : préparez un thiéboudienne et dégustez-le ensemble."],
        ["D · Ciné-débat", "Projection d'un documentaire sur les réseaux sociaux, suivie d'une discussion."],
        ["E · Troc party", "Échangez vos vêtements et vos livres. Pas d'argent, seulement des échanges !"],
        ["F · Après-midi jeux", "Jeux de société pour toute la famille, goûter offert aux enfants."]
      ] },
      items: [
        { a: "Inès veut se débarrasser de ses vieux vêtements sans les jeter.", b: "E · Troc party", lesson: "u09" },
        { a: "Karim adore marcher et observer les animaux.", b: "B · Balade nature", lesson: "u12" },
        { a: "Léa et ses trois enfants cherchent une activité ensemble.", b: "F · Après-midi jeux", lesson: "u04" },
        { a: "Tom a un vélo cassé et pas d'argent.", b: "A · Atelier vélo", lesson: "u09" },
        { a: "Amina aime découvrir de nouveaux plats.", b: "C · Cuisine du monde", lesson: "u06" },
        { a: "Paul s'intéresse aux médias et aime donner son avis.", b: "D · Ciné-débat", lesson: "u08" }
      ]
    },
    {
      id: "ce2", type: "choose", marks: 6, paper: "2. Compréhension des écrits",
      instr: "Exercice 2 · Lisez ce courriel et répondez.",
      instrEn: "Read the e-mail, then choose the right answer.",
      doc: { type: "card", style: "board", title: "De : Julie · À : Sam · Objet : Notre week-end à Bruxelles !", sub: "courriel", rows: [
        ["", "Salut Sam ! Ça y est, j'ai réservé l'hôtel pour notre week-end à Bruxelles, du 12 au 14 mai."],
        ["", "On arrive le vendredi soir en train. Samedi matin, je voudrais visiter le musée de la BD ; l'après-midi, on pourrait se promener dans le quartier Art nouveau."],
        ["", "Dimanche, mon cousin Hugo nous invite à déjeuner chez lui. Il habite près du parc, à dix minutes de l'hôtel."],
        ["", "Pense à prendre un parapluie : il pleut souvent là-bas ! Et n'oublie pas ta carte d'identité."],
        ["", "Dis-moi si le programme te plaît. Bises, Julie"]
      ] },
      items: [
        { s: "Julie et Sam sont…", o: ["des amis", "des collègues", "un professeur et son élève"], a: 0, lesson: "u01" },
        { s: "Comment vont-ils voyager ?", o: ["en train", "en avion", "en voiture"], a: 0, lesson: "u10" },
        { s: "Samedi matin, ils vont…", o: ["visiter un musée", "déjeuner chez Hugo", "faire du shopping"], a: 0, lesson: "u10" },
        { s: "Qui est Hugo ?", o: ["le cousin de Julie", "le frère de Sam", "le guide"], a: 0, lesson: "u04" },
        { s: "Julie conseille à Sam de prendre…", o: ["un parapluie", "un maillot de bain", "un vélo"], a: 0, lesson: "u02" },
        { s: "Julie demande à Sam…", o: ["si le programme lui plaît", "de réserver l'hôtel", "d'acheter les billets"], a: 0, lesson: "u11" }
      ]
    },
    {
      id: "ce3", type: "tf", marks: 6, paper: "2. Compréhension des écrits",
      instr: "Exercice 3 · Lisez le règlement et répondez : vrai ou faux ?",
      instrEn: "Read the rules of a shared garden, then decide: true or false?",
      doc: { type: "card", style: "board", title: "JARDIN PARTAGÉ DES LILAS · Règlement", sub: "pour tous les jardiniers", rows: [
        ["Horaires", "ouvert tous les jours de 8 h à 20 h, sauf le lundi"],
        ["Adhésion", "15 € par an et par famille ; une parcelle par famille"],
        ["Interdit", "les pesticides et les produits chimiques ; les chiens dans les parcelles"],
        ["Obligatoire", "trier les déchets verts dans le composteur"],
        ["Outils", "les outils sont dans la cabane ; rangez-les après utilisation"],
        ["Réunion", "le premier samedi du mois, à 10 h, pour organiser les travaux"]
      ] },
      items: [
        { s: "Le jardin est fermé le lundi.", ok: true, lesson: "u12" },
        { s: "Chaque personne peut avoir deux parcelles.", ok: false, why: "une parcelle par famille", lesson: "u12" },
        { s: "On peut utiliser des pesticides.", ok: false, why: "ils sont interdits", lesson: "u12" },
        { s: "Les déchets verts vont dans le composteur.", ok: true, lesson: "u12" },
        { s: "Chaque jardinier doit apporter ses outils.", ok: false, why: "les outils sont dans la cabane", lesson: "u09" },
        { s: "Il y a une réunion chaque mois.", ok: true, why: "le premier samedi du mois", lesson: "u12" }
      ]
    },
    {
      id: "ce4", type: "choose", marks: 7, paper: "2. Compréhension des écrits",
      instr: "Exercice 4 · Lisez l'article et répondez.",
      instrEn: "Read the short article, then choose the right answer.",
      doc: { type: "card", style: "board", title: "LYON · Un café où on répare tout", sub: "article", rows: [
        ["", "Depuis deux ans, le Café des Bricoleurs ouvre ses portes chaque mercredi soir, dans une ancienne boulangerie du quartier de la Croix-Rousse."],
        ["", "Le principe est simple : vous apportez un objet cassé (lampe, grille-pain, vêtement…) et des bénévoles vous aident à le réparer. C'est gratuit, mais on peut laisser un petit don."],
        ["", "« Avant, je jetais tout. Maintenant, je répare et j'apprends en même temps », explique Rachid, 34 ans."],
        ["", "Le café a déjà réparé plus de 1 500 objets. Les organisateurs cherchent maintenant des bénévoles qui savent coudre ou réparer des ordinateurs."]
      ] },
      items: [
        { s: "Le café ouvre…", o: ["le mercredi soir", "tous les jours", "le week-end"], a: 0, lesson: "u09" },
        { s: "Avant, le lieu était…", o: ["une boulangerie", "une bibliothèque", "un garage"], a: 0, lesson: "u03" },
        { s: "Pour faire réparer un objet, il faut…", o: ["rien payer : c'est gratuit", "payer 10 €", "acheter une pièce"], a: 0, lesson: "u09" },
        { s: "Qui aide à réparer ?", o: ["des bénévoles", "des techniciens payés", "des étudiants en stage"], a: 0, lesson: "u09" },
        { s: "Qu'est-ce que Rachid a changé ?", o: ["il répare au lieu de jeter", "il a ouvert un café", "il est devenu bénévole"], a: 0, lesson: "u09" },
        { s: "Combien d'objets ont été réparés ?", o: ["plus de 1 500", "150", "15 000"], a: 0, lesson: "u12" },
        { s: "Le café cherche des personnes qui savent…", o: ["coudre ou réparer des ordinateurs", "cuisiner", "conduire"], a: 0, lesson: "u12" }
      ]
    },

    /* ===================== 3. PRODUCTION ÉCRITE (25) ===================== */
    {
      id: "pe1", type: "write", marks: 13, paper: "3. Production écrite", time: 45,
      instr: "Exercice 1 · Racontez une expérience.",
      instrEn: "Write 60–80 words. (The timer covers both writing exercises.)",
      items: [{
        task: "Vous avez passé un week-end dans une ville que vous ne connaissiez pas. Sur votre blog, vous racontez ce que vous avez fait et vous donnez vos impressions. (60 à 80 mots)",
        en: "Tell what you did during a weekend in a new city, and give your impressions.",
        min: 60, lesson: "u10",
        model: ["Le week-end dernier, je suis allée à Bordeaux avec deux amies. Il faisait beau et la ville était très animée.", "Samedi, nous avons visité le quartier historique, puis nous avons mangé des huîtres au marché. Le soir, nous nous sommes promenées au bord de la Garonne : c'était magique !", "Dimanche, il a plu, alors nous sommes allées au musée. J'ai adoré cette ville : je vous la conseille ! (75 mots)"],
        note: "Imparfait for the description (il faisait beau), passé composé for the events, words to organise (puis, alors) and impressions (c'était magique, j'ai adoré)."
      }],
      rubric: [["Respect de la consigne (sujet, 60–80 mots)", 2], ["Raconter des événements (passé composé, ordre logique)", 3], ["Décrire et donner ses impressions", 2], ["Vocabulaire adapté", 2], ["Grammaire (temps, accords)", 2], ["Orthographe et cohérence (et, mais, puis, alors…)", 2]]
    },
    {
      id: "pe2", type: "write", marks: 12, paper: "3. Production écrite",
      instr: "Exercice 2 · Répondez à un message.",
      instrEn: "Write 60–80 words.",
      doc: { type: "card", style: "board", title: "De : Nadia · Objet : Viens avec nous !", sub: "courriel", rows: [
        ["", "Coucou ! Samedi prochain, on organise une journée de nettoyage de la plage avec l'association. Ensuite, pique-nique tous ensemble ! Tu viens ? Tu peux apporter quelque chose à manger ? Bises, Nadia"]
      ] },
      items: [{
        task: "Vous répondez à Nadia. Vous la remerciez, vous refusez l'invitation et vous expliquez pourquoi. Vous proposez une autre solution. (60 à 80 mots)",
        en: "Thank Nadia, refuse, explain why, and suggest something else.",
        min: 60, lesson: "u01",
        model: ["Salut Nadia,", "Merci beaucoup pour ton invitation ! C'est une super idée de nettoyer la plage. Malheureusement, je ne peux pas venir samedi : je dois aller à l'anniversaire de ma grand-mère à Lille.", "Mais je voudrais vraiment participer à une action de l'association. Est-ce qu'il y aura une autre journée le mois prochain ? Si tu veux, on pourrait aussi se voir dimanche pour boire un café et tu me racontes !", "Bises, Sam (72 mots)"],
        note: "Thank → refuse politely (malheureusement, je ne peux pas) → explain (parce que / je dois) → suggest (on pourrait…) → informal closing (bises)."
      }],
      rubric: [["Respect de la consigne (remercier, refuser, expliquer, proposer)", 3], ["Adapter le message (salutation, formule finale, tu)", 2], ["Vocabulaire adapté", 2], ["Grammaire (conditionnel, temps)", 3], ["Orthographe et cohérence", 2]]
    },

    /* ===================== 4. PRODUCTION ORALE (25) ===================== */
    {
      id: "po1", type: "speak", marks: 6, paper: "4. Production orale",
      instr: "Exercice 1 · Entretien dirigé (1 min 30).",
      instrEn: "No preparation. Answer the examiner's questions about yourself: record yourself or speak aloud.",
      items: [{
        task: "Bonjour ! Présentez-vous : comment vous vous appelez, où vous habitez, ce que vous faites, ce que vous aimez faire le week-end. Parlez aussi d'un projet pour l'année prochaine.",
        en: "Introduce yourself: name, home, job or studies, weekend activities, a plan for next year.",
        prep: ["Je m'appelle…", "J'habite à… depuis…", "Je travaille comme… / Je suis étudiant(e) en…", "Le week-end, j'aime…", "L'année prochaine, je vais…"],
        lesson: "u01",
        model: ["Bonjour ! Je m'appelle Ana, j'ai vingt-huit ans et j'habite à Lyon depuis trois ans.", "Je suis infirmière dans un hôpital. Le week-end, j'aime faire du vélo au bord du Rhône et cuisiner pour mes amis.", "L'année prochaine, je vais passer le DELF B1, et j'aimerais voyager au Québec."]
      }],
      rubric: [["Se présenter, parler de soi et de ses activités", 2], ["Répondre aux questions, parler d'un projet", 2], ["Prononciation et fluidité", 2]]
    },
    {
      id: "po2", type: "speak", marks: 9, paper: "4. Production orale", time: 10,
      instr: "Exercice 2 · Monologue suivi (2 min).",
      instrEn: "Choose one subject. Prepare for exercises 2 and 3 together (10 min), then speak for about 2 minutes.",
      items: [
        { task: "Parlez d'un voyage qui vous a marqué(e). Où ? Quand ? Avec qui ? Qu'est-ce qui s'est passé ? Pourquoi est-ce un bon souvenir ?", en: "A trip you remember: where, when, who with, what happened, why it was good.", prep: ["C'était en…", "Il faisait… / On était…", "Un jour, soudain…", "C'est le meilleur souvenir parce que…"], lesson: "u10",
          model: ["Le voyage qui m'a le plus marqué, c'est celui que j'ai fait au Maroc en 2022, avec ma sœur.", "Il faisait très chaud et on dormait chez l'habitant, dans une famille très accueillante.", "Un jour, on s'est perdues dans le désert ! Un berger nous a aidées et il nous a invitées à boire un thé.", "C'est mon meilleur souvenir parce que j'ai découvert une autre culture et des gens généreux."] },
        { task: "Parlez de vos habitudes pour protéger la planète. Qu'est-ce que vous faites déjà ? Qu'est-ce que vous aimeriez changer ? Pourquoi ?", en: "Your eco-habits: what you already do, what you'd like to change, why.", prep: ["Je trie mes déchets…", "J'achète d'occasion…", "J'aimerais…", "pour que…"], lesson: "u12",
          model: ["Pour protéger la planète, je fais déjà des petits gestes : je trie mes déchets et j'achète souvent des vêtements d'occasion.", "Je vais au travail à vélo, sauf quand il pleut.", "J'aimerais manger moins de viande et prendre moins l'avion, mais c'est difficile parce que ma famille habite loin.", "Je pense que chacun a un rôle à jouer pour que nos enfants vivent sur une planète en bonne santé."] }
      ],
      rubric: [["Présenter le sujet, donner des informations", 3], ["Organiser son discours (d'abord, ensuite, parce que, mais…)", 2], ["Vocabulaire et grammaire (temps du passé, conditionnel)", 2], ["Prononciation et fluidité", 2]]
    },
    {
      id: "po3", type: "speak", marks: 10, paper: "4. Production orale",
      instr: "Exercice 3 · Exercice en interaction (3 min 30).",
      instrEn: "Choose one subject and play the scene: imagine the examiner's lines, or practise with a partner.",
      items: [
        { task: "Vous voulez louer un appartement pour un mois à Montréal. Vous téléphonez à l'agence : vous posez des questions sur le logement (taille, quartier, équipements, prix) et vous prenez rendez-vous pour une visite. L'examinateur joue le rôle de l'agent immobilier.", en: "Phone an agency about renting a flat in Montreal: ask about size, area, equipment, price; book a visit.", prep: ["Je voudrais avoir des renseignements…", "Il fait combien de mètres carrés ?", "Est-ce que… est compris ?", "Je pourrais le visiter… ?"], lesson: "u03",
          model: ["— Bonjour, je voudrais avoir des renseignements sur l'appartement de la rue Saint-Denis, s'il vous plaît.", "— Il fait combien de mètres carrés ? Il y a combien de chambres ?", "— Il est meublé ? Est-ce que l'Internet et le chauffage sont compris dans le loyer ?", "— Et le quartier, il est calme ? Il y a un métro près de l'appartement ?", "— Parfait. Je pourrais le visiter jeudi après-midi ? … Très bien, merci beaucoup, à jeudi !"] },
        { task: "Votre ami(e) veut changer de métier mais il/elle hésite. Vous lui demandez ce qui ne va pas, vous lui donnez des conseils et vous l'encouragez. L'examinateur joue le rôle de l'ami(e).", en: "A friend wants to change jobs but hesitates: ask what's wrong, give advice, encourage them.", prep: ["Qu'est-ce qui ne va pas ?", "Tu devrais… / Je te conseille de…", "Tu y penses depuis longtemps ?", "C'est sûr, tu vas y arriver !"], lesson: "u11",
          model: ["— Alors, qu'est-ce qui ne va pas dans ton travail ?", "— Tu y penses depuis longtemps ? Qu'est-ce qui te plairait comme métier ?", "— Je te conseille de faire une formation en alternance : comme ça, tu gagnes un peu d'argent.", "— Tu pourrais aussi parler à des gens qui font ce métier.", "— Évidemment, c'est un grand changement, mais tu es capable de le faire. Je suis sûr(e) que tu vas y arriver !"] }
      ],
      rubric: [["Réaliser la tâche (questions, propositions, réactions)", 3], ["Échanger : saluer, demander, répondre, prendre congé", 2], ["Vocabulaire adapté", 2], ["Grammaire (questions, conditionnel, impératif)", 1.5], ["Prononciation et fluidité", 1.5]]
    }
  ],
  selfCheck: [
    ["Comprendre des annonces, la radio, un message et de courts dialogues", "understand announcements, radio, a voicemail and short dialogues"],
    ["Comprendre des annonces, un courriel, un règlement et un court article", "understand ads, an e-mail, rules and a short article"],
    ["Raconter une expérience et donner mes impressions par écrit", "tell an experience and give impressions in writing"],
    ["Répondre à un message pour remercier, refuser et proposer", "reply to a message: thank, refuse, suggest"],
    ["Me présenter et parler d'un sujet pendant deux minutes", "introduce myself and speak on a topic for two minutes"],
    ["Jouer une situation de la vie quotidienne avec quelqu'un", "role-play an everyday situation"]
  ]
};
