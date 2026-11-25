// Étape 1 · Bilan « Parcours et souvenirs » (Unités 1–2, book pp. 13–40)
// Original test, DELF A2 style: one point per item, answers explained. Covers u01, u02.
window.TEST = {
  id: "e1-test",
  rubrique: 1,
  after: 2,
  title: "Étape 1 test · Life paths and memories",
  titleFr: "Bilan · Parcours et souvenirs",
  covers: ["u01", "u02"],
  pages: "Unités 1–2 · book pp. 13–40",
  intro: "Do the whole test without looking anything up, then check each section. Section 5 is a DELF A2-style listening task (play each recording twice), section 6 a reading task on a blog post. Your results list the units to revise before Étape 2.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose the best answer.",
      items: [
        { s: "You say where you grew up.", o: ["J'ai grandi au Sénégal.", "Je suis grandi au Sénégal.", "J'ai grandu au Sénégal."], a: 0, lesson: "u01" },
        { s: "You say what you intend to do.", o: ["J'ai l'intention de rester en France.", "J'ai l'intention rester en France.", "J'ai intention à rester en France."], a: 0, lesson: "u01" },
        { s: "You suggest an outing to a friend.", o: ["Ça te dit, un concert samedi ?", "Ça te plaît bien.", "Ça me rappelle un concert."], a: 0, lesson: "u01" },
        { s: "You refuse politely.", o: ["Je suis désolé(e), je ne peux pas.", "Ça marche !", "J'ai horreur de toi."], a: 0, lesson: "u01" },
        { s: "Something brings back a childhood memory.", o: ["Ça me rappelle mon enfance.", "Je me rappelle de mon enfance demain.", "Ça me plaît mon enfance."], a: 0, lesson: "u02" },
        { s: "You hate something.", o: ["J'ai horreur de ça !", "Ça me plaît bien.", "J'aime bien."], a: 0, lesson: "u02" },
        { s: "You ask a traveller about their memories.", o: ["Quels souvenirs vous gardez de votre voyage ?", "Vous partez quand ?", "Vous avez gardé la valise ?"], a: 0, lesson: "u02" },
        { s: "It's extremely hot for days.", o: ["C'est la canicule !", "Il fait un temps humide.", "Il y a de la fraîcheur."], a: 0, lesson: "u02" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): auxiliary, participle, negative, time word, imparfait, pronoun, adjective…",
      items: [
        { p: "Elle ___ partie en Erasmus à Bordeaux.", a: "est", lesson: "u01" },
        { p: "Ils se sont ___ en 2010. (marier)", a: "mariés", lesson: "u01" },
        { p: "Il y a quelqu'un ? — Non, il n'y a ___.", a: "personne", lesson: "u01" },
        { p: "Je n'ai ___ fait de spécial. (= nothing)", a: "rien", lesson: "u01" },
        { p: "J'habite à Lyon ___ trois ans. (still true)", a: "depuis", lesson: "u01" },
        { p: "Quand j'___ petite, j'adorais la plage. (être)", a: "étais", lesson: "u02" },
        { p: "Nous ___ en Bretagne tous les étés. (partir)", a: "partions", lesson: "u02" },
        { p: "Tu reviens de la plage ? — Oui, j'___ reviens.", a: "en", lesson: "u02" },
        { p: "Tu vas à l'île Maurice ? — Oui, j'___ vais en juin.", a: "y", lesson: "u02" },
        { p: "Elle a ramené ___ jolies affiches.", a: "de", lesson: "u02" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Tu fais encore du judo ?"], ["B", "___"]], o: ["Non, je n'en fais plus.", "Non, je n'ai vu personne.", "Non, il y a dix ans."], a: 0, lesson: "u01" },
        { lines: [["A", "On se retrouve chez moi à 19 h ?"], ["B", "___"]], o: ["Ça marche !", "Je suis née à Rome.", "Je n'aime pas du tout."], a: 0, lesson: "u01" },
        { lines: [["A", "Vous vous êtes rencontrés quand ?"], ["B", "___"]], o: ["Il y a six ans, sur un tournage.", "Depuis demain.", "Pendant la canicule."], a: 0, lesson: "u01" },
        { lines: [["A", "Tu te souviens de ta maison d'enfance ?"], ["B", "___"]], o: ["Oui, il y avait un grand jardin.", "Oui, il y a eu un grand jardin.", "Oui, il y aura un grand jardin."], a: 0, lesson: "u02" },
        { lines: [["A", "Vous allez recommencer l'expérience ?"], ["B", "___"]], o: ["Oui, j'y retourne l'été prochain.", "Oui, j'en retourne l'été prochain.", "Oui, j'étais content."], a: 0, lesson: "u02" },
        { lines: [["A", "Il fait quel temps là-bas ?"], ["B", "___"]], o: ["Il y a du vent et le ciel est gris.", "C'est un souvenir de famille.", "Ça me plaît bien de revoir ces photos."], a: 0, lesson: "u02" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "un coup de foudre", b: "love at first sight", lesson: "u01" }, { a: "célibataire", b: "single", lesson: "u01" }, { a: "l'accrobranche", b: "tree-top adventure course", lesson: "u01" },
        { a: "inoubliable", b: "unforgettable", lesson: "u02" }, { a: "le sommet", b: "the summit", lesson: "u02" }, { a: "l'orage", b: "the thunderstorm", lesson: "u02" }
      ]
    },
    {
      id: "s5", type: "listen", marks: 5,
      instr: "DELF A2 · Compréhension de l'oral. Écoutez et répondez.",
      instrEn: "Listen to each document (twice, as in the exam), then choose. The transcript appears after you check.",
      items: [
        { say: "Mesdames et messieurs, le château ferme dans quinze minutes. Merci de vous diriger vers la sortie.", q: "Exercice 1 · Qu'est-ce que vous devez faire ?", o: ["aller vers la sortie", "acheter un billet", "attendre le guide"], a: 0, lesson: "u01" },
        { say: "Pendant les Journées du patrimoine, tous les musées de la ville sont gratuits samedi et dimanche, de dix heures à dix-huit heures.", q: "Exercice 2 · Les musées sont gratuits…", o: ["samedi et dimanche", "seulement samedi", "toute la semaine"], a: 0, lesson: "u01" },
        { say: "Salut, c'est Hugo ! Pour la balade en kayak jeudi, rendez-vous à treize heures trente à l'arrêt de tram Confluence. N'oublie pas ton maillot de bain !", q: "Exercice 3 · Le rendez-vous est à…", o: ["13 h 30", "14 h 30", "13 h"], a: 0, lesson: "u01" },
        { say: "La météo pour demain : de la pluie et des orages dans le Nord-Ouest, du soleil et trente degrés sur la Corse.", q: "Exercice 2 · Demain, en Corse, il va faire…", o: ["beau et chaud", "de l'orage", "froid"], a: 0, lesson: "u02" },
        { say: "Tu te souviens ? Quand on était petits, on allait chez Mamie tous les mercredis. Elle nous faisait des crêpes !", q: "Exercice 4 · La personne…", o: ["raconte un souvenir", "propose une sortie", "refuse une invitation"], a: 0, lesson: "u02" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 10,
      instr: "DELF A2 · Compréhension des écrits. Lisez l'article de blog et répondez.",
      instrEn: "Read the travel blog post, then decide: true or false?",
      doc: { type: "card", style: "board", title: "UN SOUVENIR INOUBLIABLE", sub: "le blog de Nora · Montréal", rows: [
        ["Avant", "Quand j'étais étudiante, je vivais à Toulouse. Je rêvais de voyager."],
        ["Le départ", "Il y a cinq ans, je suis partie au Québec pour un stage de six mois."],
        ["Montréal", "J'y ai rencontré mon mari ! On a fait connaissance dans un festival de jazz."],
        ["L'hiver", "Il faisait moins vingt degrés, mais je n'ai jamais eu froid : j'adorais la neige !"],
        ["Aujourd'hui", "J'habite à Montréal depuis cinq ans. Je ne suis plus étudiante : je suis journaliste."],
        ["Projet", "Je compte rentrer en France l'année prochaine pour présenter ma fille à ma famille."]
      ], foot: "Et vous, quel est votre souvenir de voyage préféré ?" },
      items: [
        { s: "Nora habitait à Toulouse quand elle était étudiante.", ok: true, lesson: "u02" },
        { s: "Elle est partie au Québec il y a cinq ans.", ok: true, lesson: "u01" },
        { s: "Son stage a duré un an.", ok: false, why: "six mois", lesson: "u01" },
        { s: "Elle a rencontré son mari à Toulouse.", ok: false, why: "à Montréal, dans un festival de jazz", lesson: "u01" },
        { s: "Elle n'aimait pas l'hiver au Québec.", ok: false, why: "elle adorait la neige", lesson: "u02" },
        { s: "Il faisait très froid en hiver.", ok: true, lesson: "u02" },
        { s: "Elle vit encore à Montréal aujourd'hui.", ok: true, why: "depuis cinq ans", lesson: "u01" },
        { s: "Elle est toujours étudiante.", ok: false, why: "elle ne l'est plus : elle est journaliste", lesson: "u01" },
        { s: "Elle a l'intention de rester à Montréal pour toujours.", ok: false, why: "elle compte rentrer en France l'année prochaine", lesson: "u01" },
        { s: "Elle a une fille.", ok: true, lesson: "u01" }
      ]
    }
  ],
  selfCheck: [
    ["Raconter mon parcours", "talk about my life path"],
    ["Exprimer mon intention de faire quelque chose", "say what I intend to do"],
    ["Parler de mes goûts et de mes loisirs", "talk about my tastes and hobbies"],
    ["Proposer, accepter ou refuser une sortie", "suggest, accept or refuse an outing"],
    ["Raconter un souvenir avec l'imparfait", "tell a memory using the imparfait"],
    ["Dire ce que j'aime et ce que je n'aime pas", "say what I like and dislike"],
    ["Décrire un paysage et parler de la météo", "describe a landscape and talk about the weather"]
  ]
};
