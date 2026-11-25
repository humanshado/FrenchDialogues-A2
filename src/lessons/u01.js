// Unité 1 · Nouvelles vies (Édito A2, 2e édition, book pp. 13–26)
// Situations: raconter son parcours · une histoire d'amour · un week-end en famille · proposer une sortie · les Journées du patrimoine
// Grammar: le passé composé (auxiliaires, accords, participes irréguliers) · la phrase négative (rien, personne, jamais, plus) · il y a, pendant, depuis
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u01", rubrique: 1, num: 1,
  title: "New lives",
  titleFr: "Nouvelles vies",
  pages: "Book pp. 13–26",
  opener: { fr: "Faites des expériences uniques !", en: "Have unique experiences!" },
  hero: { scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Chiara": "f4", "Hugo": "m2" } },
  situations: [
    ["🧭", "Mon parcours", "your life path: [[Je suis née près de Rome, j'ai fait mes études à Bordeaux, puis je me suis installée à Lyon.]]"],
    ["💘", "Une histoire d'amour", "how a couple met: [[Ils se sont rencontrés en 2008 et ils se sont mariés deux ans après.]]"],
    ["🛶", "Le week-end", "tastes and activities: [[Je suis fan de kayak.]] · [[Je n'ai rien fait de spécial.]]"],
    ["🎶", "On sort ?", "suggest an outing: [[Ça te dit, un concert samedi ?]] · [[Ça marche !]] · [[Désolée, je ne peux pas.]]"],
    ["🏰", "Les Journées du patrimoine", "culture for free: [[Le château est ouvert depuis ce matin.]]"]
  ],
  goals: [
    "Talk about your life path: [[Je suis né(e) à…]], [[J'ai grandi en…]], [[J'ai fait mes études à…]], [[Je suis devenu(e)…]]",
    "Say what you intend to do: [[Je compte chercher du travail.]], [[J'ai l'intention de rester en France.]], [[C'est décidé !]]",
    "Talk about your tastes: [[Je suis fan de jazz.]], [[Ce n'est pas du tout mon truc.]], [[Ma passion, c'est…]]",
    "Suggest, accept or refuse an outing: [[Ça te dit ?]], [[Ça marche !]], [[Je suis désolé(e), je ne peux pas.]]",
    "Use the passé composé with avoir and être, with the right past participle and agreement",
    "Use the negative: [[ne… rien]], [[ne… personne]], [[ne… jamais]], [[ne… plus]], before and in the passé composé",
    "Place an event in time: [[il y a onze ans]], [[pendant deux semaines]], [[depuis hier]]"
  ],
  glance: [
    ["🗣️", "Communication", "life path · intentions · tastes · suggesting, accepting and refusing an outing"],
    ["🧩", "Grammaire", "passé composé (review +) · rien, personne, jamais, plus · il y a, pendant, depuis"],
    ["🗂️", "Vocabulaire", "life events · personal life · studies and career · artistic professions · leisure: places, outings, outdoor and indoor activities"],
    ["🔊", "Phonie-graphie", "[y] (tu) / [u] (tout) and how they're written"],
    ["⭐", "The phrase to learn first", "[[Ça te dit ? — Ça marche !]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "My life path", titleFr: "Au café · Ma vie en France",
      note: "Chiara, a new colleague, tells Hugo her story. Listen to the passé composé with [[être]] (agreement!) and to her intentions.",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Hugo": "m2", "Chiara": "f4" },
      lines: [
        ["Hugo", "Alors, Chiara, tu viens d'où exactement ? Tu parles très bien français !", "So, Chiara, where exactly are you from? You speak French really well!"],
        ["Chiara", "Merci ! Je suis née en Italie et j'ai grandi près de Rome.", "Thanks! I was born in Italy and I grew up near Rome."],
        ["Hugo", "Et tu as appris le français où ?", "And where did you learn French?"],
        ["Chiara", "À l'université. Pendant mes études, je suis partie en Erasmus à Bordeaux. Je suis tombée amoureuse de la France !", "At university. During my studies I went to Bordeaux on Erasmus. I fell in love with France!"],
        ["Hugo", "Et après ?", "And then?"],
        ["Chiara", "J'ai fini mes études à Rome, puis je suis revenue. Je me suis installée à Lyon il y a trois ans.", "I finished my studies in Rome, then I came back. I settled in Lyon three years ago."],
        ["Hugo", "Tu comptes rester ici ?", "Are you planning to stay here?"],
        ["Chiara", "Oui, c'est décidé ! J'ai l'intention de demander la nationalité française. Et je compte apprendre à faire du kayak sur la Saône !", "Yes, it's decided! I intend to apply for French nationality. And I'm planning to learn kayaking on the Saône!"]
      ],
      glossary: [["Je suis née / j'ai grandi", "I was born / I grew up"], ["tomber amoureux, amoureuse de", "to fall in love with"], ["Je compte + infinitif", "I'm planning to…"], ["avoir l'intention de", "to intend to"]]
    },
    {
      id: "d2", n: 2, title: "A love story", titleFr: "À un mariage · Leur rencontre",
      note: "At a wedding party, two guests talk about how the couple met. Listen to the life events in the passé composé.",
      scene: "fete", people: { "Inès": "f2", "Malik": "m3" },
      lines: [
        ["Malik", "Tu sais comment Léa et Sami se sont rencontrés ?", "Do you know how Léa and Sami met?"],
        ["Inès", "Oui ! Ils ont fait connaissance sur le tournage d'un film, il y a six ans. C'était un vrai coup de foudre !", "Yes! They met on a film shoot six years ago. It was love at first sight!"],
        ["Malik", "Ah bon ? Mais ils ne se sont pas mariés tout de suite…", "Really? But they didn't get married straight away…"],
        ["Inès", "Non, ils ont choisi de prendre leur temps. D'abord, ils ont déménagé ensemble à Nantes.", "No, they chose to take their time. First, they moved in together in Nantes."],
        ["Malik", "Et le petit Noé ?", "And little Noé?"],
        ["Inès", "Il est né l'année dernière. Et aujourd'hui, enfin, ils se marient !", "He was born last year. And today, at last, they're getting married!"],
        ["Malik", "Moi, je suis encore célibataire… Je n'ai jamais eu de coup de foudre !", "Me, I'm still single… I've never had love at first sight!"],
        ["Inès", "Attends, la soirée commence, tu vas peut-être rencontrer quelqu'un !", "Wait, the evening is starting, you might meet someone!"]
      ],
      glossary: [["faire connaissance", "to get to know each other, to meet"], ["un coup de foudre", "love at first sight"], ["prendre son temps", "to take one's time"], ["célibataire", "single"]]
    },
    {
      id: "d3", n: 3, title: "What did you do this weekend?", titleFr: "Le lundi au bureau · Nos activités du week-end",
      note: "Two colleagues compare their weekends. Listen to how they talk about their tastes, and to the negatives [[rien]], [[personne]], [[jamais]], [[plus]].",
      scene: "bureau", people: { "Christophe": "m4", "Lucie": "f3" },
      lines: [
        ["Christophe", "Alors, Lucie, ce week-end ?", "So, Lucie, how was the weekend?"],
        ["Lucie", "Super ! On est sortis avec les enfants : on a fait de l'accrobranche et du canoë. Nous nous sommes bien amusés !", "Great! We went out with the kids: we did tree-top adventure and canoeing. We had a great time!"],
        ["Christophe", "Ouah, quelle énergie ! Nous, on est restés à la maison. Il a plu tout le week-end.", "Wow, what energy! We stayed at home. It rained all weekend."],
        ["Lucie", "Et vous avez fait quoi ?", "And what did you do?"],
        ["Christophe", "Rien de spécial. Les enfants ne veulent plus jouer aux jeux de société, ils jouent aux jeux vidéo. Et ils ne voient personne !", "Nothing special. The kids don't want to play board games any more, they play video games. And they don't see anyone!"],
        ["Lucie", "Moi, je n'aime pas trop les jeux vidéo. Ce n'est pas du tout mon truc.", "I'm not very keen on video games. It's not my thing at all."],
        ["Christophe", "Moi non plus. Ma passion, c'est le jazz. Mais je ne vais jamais aux concerts : c'est trop cher !", "Me neither. My passion is jazz. But I never go to concerts: they're too expensive!"]
      ],
      glossary: [["s'amuser", "to have fun"], ["ne… rien / ne… personne", "nothing / nobody"], ["ne… plus / ne… jamais", "no longer / never"], ["Ce n'est pas mon truc.", "It's not my thing."]]
    },
    {
      id: "d4", n: 4, title: "Fancy a festival?", titleFr: "Au téléphone · Envie de sortir ?",
      note: "Julie suggests a music festival to Sarah. Listen to how they suggest, accept, refuse and fix a meeting.",
      scene: "appartement", people: { "Julie": "f7", "Sarah": "f8" }, phone: ["Julie", "Sarah"],
      lines: [
        ["Julie", "Salut Sarah ! Tu es libre samedi ? Ça te dit, un concert au festival ? Les places sont en vente depuis hier.", "Hi Sarah! Are you free on Saturday? Fancy a concert at the festival? Tickets have been on sale since yesterday."],
        ["Sarah", "Samedi, je suis désolée, je ne peux pas : je travaille.", "On Saturday, I'm sorry, I can't: I'm working."],
        ["Julie", "Et dimanche ? Il y a un groupe que j'adore à 20 heures.", "And Sunday? There's a band I love at 8 p.m."],
        ["Sarah", "Dimanche, avec plaisir ! Je ne suis jamais allée à ce festival.", "Sunday, with pleasure! I've never been to this festival."],
        ["Julie", "Génial ! On se retrouve chez moi à 18 heures ? Ça te va ?", "Great! Shall we meet at my place at 6 p.m.? Is that OK for you?"],
        ["Sarah", "Ça marche ! J'apporte à manger pour le pique-nique.", "Deal! I'll bring food for the picnic."],
        ["Julie", "Parfait. J'achète les places tout de suite !", "Perfect. I'll buy the tickets right away!"]
      ],
      glossary: [["Ça te dit ?", "Do you fancy it?"], ["Ça te va ? · C'est bon pour toi ?", "Does that suit you?"], ["Ça marche !", "Deal! (casual)"], ["depuis hier", "since yesterday"]]
    },
    {
      id: "d5", n: 5, title: "Heritage Days", titleFr: "Au château · Les Journées du patrimoine",
      note: "During Heritage Days, a guide welcomes visitors to a château. Listen to [[il y a]], [[pendant]] and [[depuis]].",
      scene: "ville", staff: "La guide", people: { "La guide": "f6", "Paul": "m6", "Zoé": "k1" },
      lines: [
        ["La guide", "Bienvenue au château ! Pendant les Journées du patrimoine, la visite est gratuite.", "Welcome to the château! During Heritage Days, the visit is free."],
        ["Paul", "Super ! Il est ouvert depuis quelle heure ?", "Great! Since what time has it been open?"],
        ["La guide", "Depuis neuf heures ce matin. Il y a déjà eu mille visiteurs !", "Since nine this morning. There have already been a thousand visitors!"],
        ["Zoé", "Le château est très vieux ?", "Is the château very old?"],
        ["La guide", "Oui, les rois y ont habité pendant plusieurs siècles. La dernière famille est partie il y a cent ans.", "Yes, kings lived here for several centuries. The last family left a hundred years ago."],
        ["Paul", "Et qu'est-ce qu'il y a au programme aujourd'hui ?", "And what's on the programme today?"],
        ["La guide", "Une visite guidée inédite des cuisines, et à 15 heures, vous pouvez apprendre le jeu de paume. C'est une expérience unique !", "A brand-new guided tour of the kitchens, and at 3 p.m. you can learn real tennis. It's a unique experience!"]
      ],
      glossary: [["les Journées du patrimoine", "Heritage Days (free visits, September)"], ["depuis + heure", "since…"], ["il y a + durée", "… ago"], ["inédit(e)", "new, never seen before"]]
    }
  ],

  vocab: [
    { t: "naître", en: "to be born", pic: "👶", cat: "Parcours de vie", note: "[[je suis né(e)]]" },
    { t: "grandir", en: "to grow up", pic: "🌱", cat: "Parcours de vie" },
    { t: "déménager", en: "to move house", pic: "📦", cat: "Parcours de vie" },
    { t: "s'installer", en: "to settle", pic: "🏠", cat: "Parcours de vie" },
    { t: "faire connaissance", en: "to get to know each other", pic: "🤝", cat: "Parcours de vie" },
    { t: "rencontrer quelqu'un, se rencontrer", en: "to meet someone, to meet", pic: "👋", cat: "Parcours de vie" },
    { t: "se faire des amis", en: "to make friends", pic: "🧑‍🤝‍🧑", cat: "Parcours de vie" },
    { t: "avoir un coup de foudre", en: "to fall in love at first sight", pic: "⚡", cat: "Parcours de vie" },
    { t: "tomber amoureux, amoureuse de", en: "to fall in love with", pic: "💘", cat: "Parcours de vie" },
    { t: "se marier avec", en: "to marry", pic: "💍", cat: "Parcours de vie" },
    { t: "se séparer de", en: "to split up with", pic: "💔", cat: "Parcours de vie" },
    { t: "avoir un enfant", en: "to have a child", pic: "🍼", cat: "Parcours de vie" },
    { t: "célibataire", en: "single", pic: "🙋", cat: "La vie personnelle" },
    { t: "être en couple", en: "to be in a relationship", pic: "👫", cat: "La vie personnelle" },
    { t: "le conjoint, la conjointe", en: "the spouse, partner", pic: "💑", cat: "La vie personnelle" },
    { t: "le mari", en: "the husband", pic: "🤵", cat: "La vie personnelle", g: "m" },
    { t: "la femme", en: "the wife, the woman", pic: "👰", cat: "La vie personnelle", g: "f" },
    { t: "la rencontre", en: "the meeting, encounter", pic: "✨", cat: "La vie personnelle", g: "f" },
    { t: "la vie de famille", en: "family life", pic: "👨‍👩‍👧", cat: "La vie personnelle", g: "f" },
    { t: "faire ses études", en: "to study", pic: "🎓", cat: "Études et travail" },
    { t: "partir en Erasmus", en: "to go on Erasmus", pic: "🇪🇺", cat: "Études et travail" },
    { t: "faire un stage", en: "to do an internship", pic: "💼", cat: "Études et travail" },
    { t: "obtenir un diplôme", en: "to get a degree", pic: "📜", cat: "Études et travail" },
    { t: "chercher du travail", en: "to look for work", pic: "🔎", cat: "Études et travail" },
    { t: "devenir", en: "to become", pic: "🦋", cat: "Études et travail", note: "[[Je suis devenue écrivaine.]]" },
    { t: "l'acteur, l'actrice", en: "the actor, actress", pic: "🎭", cat: "Les professions artistiques" },
    { t: "le chanteur, la chanteuse", en: "the singer", pic: "🎤", cat: "Les professions artistiques" },
    { t: "le compositeur, la compositrice", en: "the composer", pic: "🎼", cat: "Les professions artistiques" },
    { t: "l'écrivain(e)", en: "the writer", pic: "✍️", cat: "Les professions artistiques" },
    { t: "l'interprète", en: "the performer", pic: "🎻", cat: "Les professions artistiques", note: "plays, sings or acts a work by someone else" },
    { t: "le / la musicien(ne)", en: "the musician", pic: "🎸", cat: "Les professions artistiques" },
    { t: "le / la scénariste", en: "the screenwriter", pic: "🎬", cat: "Les professions artistiques" },
    { t: "le château", en: "the castle, château", pic: "🏰", cat: "Les lieux culturels", g: "m" },
    { t: "le monument", en: "the monument", pic: "🗿", cat: "Les lieux culturels", g: "m" },
    { t: "le musée", en: "the museum", pic: "🏛️", cat: "Les lieux culturels", g: "m" },
    { t: "le cirque", en: "the circus", pic: "🎪", cat: "Les lieux culturels", g: "m" },
    { t: "le théâtre", en: "the theatre", pic: "🎭", cat: "Les lieux culturels", g: "m" },
    { t: "faire une balade", en: "to go for a walk / ride", pic: "🚶", cat: "Sortir" },
    { t: "faire une visite guidée", en: "to go on a guided tour", pic: "🧑‍🏫", cat: "Sortir" },
    { t: "visiter une exposition", en: "to visit an exhibition", pic: "🖼️", cat: "Sortir" },
    { t: "voir une pièce de théâtre", en: "to see a play", pic: "🎟️", cat: "Sortir" },
    { t: "aller à un festival", en: "to go to a festival", pic: "🎶", cat: "Sortir" },
    { t: "l'accrobranche", en: "tree-top adventure course", pic: "🌳", cat: "En plein air", g: "f" },
    { t: "le canoë-kayak", en: "canoeing, kayaking", pic: "🛶", cat: "En plein air", g: "m" },
    { t: "le stand-up paddle", en: "stand-up paddleboarding", pic: "🏄", cat: "En plein air", g: "m" },
    { t: "la via ferrata", en: "via ferrata (protected climbing route)", pic: "🧗", cat: "En plein air", g: "f" },
    { t: "la randonnée", en: "hiking", pic: "🥾", cat: "En plein air", g: "f" },
    { t: "le jardinage", en: "gardening", pic: "🌷", cat: "En plein air", g: "m" },
    { t: "le bricolage", en: "DIY", pic: "🔨", cat: "À l'intérieur", g: "m" },
    { t: "les jeux de société", en: "board games", pic: "🎲", cat: "À l'intérieur", g: "pl" },
    { t: "les jeux vidéo", en: "video games", pic: "🎮", cat: "À l'intérieur", g: "pl" },
    { t: "la peinture", en: "painting", pic: "🎨", cat: "À l'intérieur", g: "f" },
    { t: "amateur, amatrice ≠ professionnel(le)", en: "amateur ≠ professional", pic: "🏅", cat: "À l'intérieur" }
  ],

  grammar: [
    {
      id: "g-pc",
      title: "The passé composé: [[avoir]] or [[être]], and agreement",
      body: [
        "Use: a <b>one-off, finished</b> action in the past. Form: [[avoir]] or [[être]] in the present + past participle.",
        "Most verbs take [[avoir]], and the participle <b>doesn't agree</b>: [[Elle a décidé de revenir en France.]] · [[Ils ont fait connaissance en 2018.]]",
        "17 verbs of <b>movement or change</b> take [[être]] (aller, arriver, descendre, devenir, entrer, monter, mourir, naître, partir, passer, rentrer, rester, retourner, revenir, sortir, tomber, venir), and the participle <b>agrees</b> with the subject: [[Elle est rentrée à Rome.]] · [[Ils sont tombés amoureux.]]",
        "<b>All</b> pronominal verbs take [[être]]: [[Je me suis installée à Lyon.]] · [[Nous nous sommes séparés.]]"
      ],
      info: [
        { type: "compare", title: "🔀 avoir or être?", cols: [
          { head: "avoir · no agreement", en: "most verbs", color: "#3a6fd8", lines: [["Elle a grandi en Italie.", "She grew up in Italy."], ["Ils ont choisi de prendre leur temps.", "They chose to take their time."], ["Nous avons fini nos études.", "We finished our studies."]] },
          { head: "être · agreement", en: "17 verbs + all pronominal verbs", color: "#e0474f", lines: [["Elle est partie en Erasmus.", "She went on Erasmus."], ["Ils se sont mariés en 2010.", "They got married in 2010."], ["Nous sommes restées à Lyon.", "We (f.) stayed in Lyon."]] }
        ] },
        { type: "card", style: "board", caption: "📋 Irregular past participles · tap a line", title: "PARTICIPES PASSÉS", sub: "-er → é · -ir → i · -re / -oir → u … and the irregulars", rows: [
          ["avoir → eu", "être → été", "J'ai eu dix-huit ans. J'ai été malade."], ["faire → fait", "dire → dit", "Elle a fait une fête. Il a dit oui."], ["prendre → pris", "mettre → mis", "J'ai pris le train. J'ai mis un manteau."],
          ["naître → né", "mourir → mort", "Il est né en 1982."], ["venir → venu", "devenir → devenu", "Elle est devenue célèbre."], ["vouloir → voulu", "devoir → dû", "Ils n'ont pas voulu dire son prénom."],
          ["vivre → vécu", "écrire → écrit", "Il a vécu au Burundi. Il a écrit un roman."], ["ouvrir → ouvert", "recevoir → reçu", "Le musée a ouvert. J'ai reçu un prix."]
        ], foot: "regular: jouer → joué · choisir → choisi · perdre → perdu" }
      ],
      widget: {
        type: "combo", label: "Build the passé composé · pick a subject and a verb",
        rows: [{ k: "je", label: "je (Chiara)" }, { k: "ils", label: "ils (Léa et Sami)" }, { k: "elles", label: "elles (mes sœurs)" }],
        cols: [{ k: "grandir", label: "🌱 grandir à Rome" }, { k: "partir", label: "✈️ partir en Erasmus" }, { k: "marier", label: "💍 se marier" }, { k: "faire", label: "🤝 faire connaissance" }],
        out: {
          "je|grandir": ["J'ai grandi à Rome.", "I grew up in Rome.", "avoir: no agreement"], "je|partir": ["Je suis partie en Erasmus.", "I went on Erasmus.", "être: partie (Chiara = f.)"], "je|marier": ["Je me suis mariée.", "I got married.", "pronominal → être + agreement"], "je|faire": ["J'ai fait connaissance avec Hugo.", "I got to know Hugo.", "faire → fait"],
          "ils|grandir": ["Ils ont grandi à Rome.", "They grew up in Rome."], "ils|partir": ["Ils sont partis en Erasmus.", "They went on Erasmus.", "être: partis (m. pl.)"], "ils|marier": ["Ils se sont mariés.", "They got married."], "ils|faire": ["Ils ont fait connaissance.", "They met."],
          "elles|grandir": ["Elles ont grandi à Rome.", "They (f.) grew up in Rome."], "elles|partir": ["Elles sont parties en Erasmus.", "They (f.) went on Erasmus.", "être: parties (f. pl.)"], "elles|marier": ["Elles se sont mariées.", "They (f.) got married."], "elles|faire": ["Elles ont fait connaissance.", "They (f.) met."]
        }
      }
    },
    {
      id: "g-parcours",
      title: "Talking about your life path and your intentions",
      body: [
        "Your path: [[Je suis né(e) à / en / au…]] · [[J'ai grandi à…]] · [[Je suis venu(e) ici en 2019.]] · [[J'ai fait mes études à…]] · [[Je suis devenu(e) architecte.]]",
        "Your intentions: [[Je compte chercher du travail.]] · [[J'ai l'intention de rester en France.]] · [[Je pense rentrer en Italie.]] · [[C'est décidé !]] (compter / penser + infinitive, avoir l'intention <b>de</b> + infinitive)"
      ],
      info: { type: "timeline", title: "🧭 Chiara's life path", ends: ["passé", "aujourd'hui", "futur"], items: [
        { x: 6, fr: "Elle est née en Italie.", en: "She was born in Italy.", pic: "👶" },
        { x: 18, fr: "Elle a grandi près de Rome.", en: "She grew up near Rome.", pic: "🇮🇹" },
        { x: 32, fr: "Elle est partie en Erasmus à Bordeaux.", en: "She went on Erasmus to Bordeaux.", pic: "🎓" },
        { x: 50, fr: "Elle s'est installée à Lyon il y a trois ans.", en: "She settled in Lyon three years ago.", pic: "🏠" },
        { x: 84, fr: "Elle compte demander la nationalité française.", en: "She plans to apply for French nationality.", pic: "🇫🇷" }
      ] },
      widget: {
        type: "combo", label: "Say your intention · pick an expression and a plan",
        rows: [{ k: "compte", label: "Je compte…" }, { k: "intention", label: "J'ai l'intention de / d'…" }, { k: "pense", label: "Je pense…" }],
        cols: [{ k: "travail", label: "🔎 chercher du travail" }, { k: "rester", label: "🇫🇷 rester en France" }, { k: "erasmus", label: "🇪🇺 faire un séjour Erasmus" }],
        out: {
          "compte|travail": ["Je compte chercher du travail.", "I'm planning to look for work."], "intention|travail": ["J'ai l'intention de chercher du travail.", "I intend to look for work."], "pense|travail": ["Je pense chercher du travail.", "I'm thinking of looking for work."],
          "compte|rester": ["Je compte rester en France.", "I'm planning to stay in France."], "intention|rester": ["J'ai l'intention de rester en France.", "I intend to stay in France."], "pense|rester": ["Je pense rester en France.", "I'm thinking of staying in France."],
          "compte|erasmus": ["Je compte faire un séjour Erasmus.", "I'm planning to do an Erasmus stay."], "intention|erasmus": ["J'ai l'intention de faire un séjour Erasmus.", "I intend to do an Erasmus stay."], "pense|erasmus": ["Je pense faire un séjour Erasmus.", "I'm thinking of doing an Erasmus stay."]
        }
      }
    },
    {
      id: "g-negation",
      title: "The negative: [[ne… rien]], [[ne… personne]], [[ne… jamais]], [[ne… plus]]",
      body: [
        "[[quelque chose]] ≠ [[ne… rien]] · [[quelqu'un, tout le monde]] ≠ [[ne… personne]] · [[toujours, souvent, déjà]] ≠ [[ne… jamais]] · [[toujours, encore]] (it continues) ≠ [[ne… plus]] (it has stopped).",
        "<b>Present</b>: around the verb: [[Je ne danse jamais.]] <b>Passé composé</b>: with pas, plus, rien, jamais, around the <b>auxiliary</b>: [[Il n'a rien mangé.]] · [[Je ne suis jamais allée à ce festival.]] But [[personne]] goes <b>after the participle</b>: [[Je n'ai rencontré personne.]]",
        "[[personne]] as subject comes first: [[Personne n'est venu.]] After a negative, [[un, une, du, de la, des]] → [[de / d']]: [[Je ne fais jamais de sport.]] · [[Il n'a plus d'argent.]]"
      ],
      info: [
        { type: "compare", title: "➕ / ➖ Affirmative and negative", cols: [
          { head: "Forme affirmative", en: "", color: "#2f9c8a", lines: [["Elle boit quelque chose.", "something"], ["Je connais tout le monde ici.", "everyone"], ["Nous allons souvent au théâtre.", "often"], ["Il fait toujours de la boxe.", "still"]] },
          { head: "Forme négative", en: "", color: "#e0474f", lines: [["Elle ne boit rien.", "nothing"], ["Je ne connais personne ici.", "nobody"], ["Nous n'allons jamais au théâtre.", "never"], ["Il ne fait plus de boxe.", "no longer"]] }
        ] },
        { type: "pattern", title: "🥪 The negative sandwich in the passé composé", rows: [
          ["Je", "n'", "ai", { opts: ["rien", "jamais", "plus", "pas"] }, "fait de sport."],
          ["Je", "n'", "ai", "vu", "personne."]
        ], note: "rien / jamais / plus / pas: before the participle. personne: after it." }
      ],
      widget: {
        type: "sort", label: "Which negative? Sort the answers",
        cols: [{ k: "rien", label: "ne… rien", color: "#3a6fd8" }, { k: "personne", label: "ne… personne", color: "#9b4fb0" }, { k: "jamais", label: "ne… jamais", color: "#e0a526" }, { k: "plus", label: "ne… plus", color: "#e0474f" }],
        items: [
          { t: "Tu fais quelque chose ce soir ? — Non, je…", k: "rien", say: "Non, je ne fais rien." }, { t: "Il y a quelqu'un au musée ? — Non, il…", k: "personne", say: "Non, il n'y a personne." },
          { t: "Tu vas souvent au cirque ? — Non, je…", k: "jamais", say: "Non, je ne vais jamais au cirque." }, { t: "Tu fais encore du judo ? — Non, je…", k: "plus", say: "Non, je ne fais plus de judo." },
          { t: "Vous avez vu quelqu'un ? — Non, nous…", k: "personne", say: "Non, nous n'avons vu personne." }, { t: "Elle a déjà fait de l'escalade ? — Non, elle…", k: "jamais", say: "Non, elle n'a jamais fait d'escalade." }
        ]
      }
    },
    {
      id: "g-gouts",
      title: "Talking about your tastes · suggesting an outing",
      body: [
        "Tastes: [[J'adore ce concert.]] · [[Je suis fan de jazz.]] / [[Je ne suis pas fan de…]] · [[J'aime bien sortir.]] · [[Je n'aime pas trop les sports aquatiques.]] · [[C'est pas du tout mon truc.]] (casual) · [[Ma passion, c'est les jeux vidéo.]]",
        "Suggesting: [[Ça te dit ?]] · [[Tu es libre ?]] · [[On se retrouve chez moi à 19 h ?]] · [[Ça te va ?]] / [[C'est bon pour toi ?]] Accepting: [[Avec plaisir !]] · [[D'accord !]] · [[Ça marche !]] · [[Ça me va !]] Refusing: [[Je suis désolé(e).]] · [[Je m'excuse, mais je ne peux pas.]] · [[Ce n'est pas possible.]]"
      ],
      info: { type: "scale", title: "❤️ How much do you like it?", colors: ["#e0474f", "#2f9c8a"], items: [
        { v: 6, fr: "Ce n'est pas du tout mon truc.", en: "not my thing at all", pic: "🙅" }, { v: 30, fr: "Je n'aime pas trop ça.", en: "I'm not very keen", pic: "😕" },
        { v: 62, fr: "J'aime bien.", en: "I quite like it", pic: "🙂" }, { v: 82, fr: "Je suis fan !", en: "I'm a fan!", pic: "🤩" }, { v: 96, fr: "C'est ma passion !", en: "it's my passion!", pic: "❤️" }
      ], ends: ["−", "+ + +"] },
      widget: {
        type: "combo", label: "Answer an invitation · pick an answer and an outing",
        rows: [{ k: "oui", label: "✅ accept" }, { k: "non", label: "❌ refuse" }],
        cols: [{ k: "concert", label: "🎶 un concert samedi" }, { k: "expo", label: "🖼️ une expo dimanche" }, { k: "kayak", label: "🛶 du kayak demain" }],
        out: {
          "oui|concert": ["Un concert samedi ? Avec plaisir ! On se retrouve où ?", "A concert on Saturday? With pleasure! Where shall we meet?"], "non|concert": ["Samedi ? Je suis désolée, je ne peux pas, je travaille.", "Saturday? I'm sorry, I can't, I'm working."],
          "oui|expo": ["Une expo dimanche ? Ça marche ! Ça me va très bien.", "An exhibition on Sunday? Deal! That suits me fine."], "non|expo": ["Je m'excuse, mais dimanche, ce n'est pas possible.", "Sorry, but Sunday isn't possible."],
          "oui|kayak": ["Du kayak demain ? D'accord, je suis fan !", "Kayaking tomorrow? OK, I'm a fan!"], "non|kayak": ["Le kayak ? Ce n'est pas du tout mon truc, désolé !", "Kayaking? It's not my thing at all, sorry!"]
        }
      }
    },
    {
      id: "g-temps",
      title: "Time words: [[il y a]], [[pendant]], [[depuis]]",
      body: [
        "[[il y a]] + duration: the time between a <b>finished</b> event and now (= ago): [[J'ai fait ma première compétition il y a onze ans.]]",
        "[[pendant]] + duration: how <b>long</b> an action lasted: [[Pendant deux semaines, j'ai rencontré beaucoup d'athlètes.]]",
        "[[depuis]] + starting point or duration: an action that <b>started in the past and continues now</b> (present tense): [[Les places sont en vente depuis hier.]] · [[J'habite à Lyon depuis trois ans.]]"
      ],
      info: { type: "timeline", title: "⏳ Three time words", ends: ["passé", "maintenant", "futur"], items: [
        { x: 10, fr: "J'ai fait du judo il y a dix ans.", en: "I did judo ten years ago.", pic: "🥋" },
        { x: 30, fr: "J'ai fait du judo pendant deux ans.", en: "I did judo for two years.", pic: "⏱️" },
        { x: 56, fr: "Je fais de l'escalade depuis 2021.", en: "I've been climbing since 2021.", pic: "🧗" }
      ] },
      widget: {
        type: "sort", label: "il y a, pendant or depuis?",
        cols: [{ k: "ilya", label: "il y a (= ago)", color: "#9b4fb0" }, { k: "pendant", label: "pendant (duration)", color: "#e0a526" }, { k: "depuis", label: "depuis (still going)", color: "#2f9c8a" }],
        items: [
          { t: "Mon frère est au festival … mardi.", k: "depuis", say: "Mon frère est au festival depuis mardi." }, { t: "Hier, nous avons fait du canoë … quatre heures.", k: "pendant", say: "Hier, nous avons fait du canoë pendant quatre heures." },
          { t: "J'ai fait cette randonnée … deux ans.", k: "ilya", say: "J'ai fait cette randonnée il y a deux ans." }, { t: "Elle est en couple … 2019.", k: "depuis", say: "Elle est en couple depuis 2019." },
          { t: "Ils se sont rencontrés … six ans.", k: "ilya", say: "Ils se sont rencontrés il y a six ans." }, { t: "J'ai vécu à Rome … dix ans.", k: "pendant", say: "J'ai vécu à Rome pendant dix ans." }
        ]
      }
    }
  ],

  expressions: [
    { fn: "Pour parler de son parcours", fnEn: "your life path", icon: "🧭", items: [
      ["Je suis né(e) à Lagos.", "I was born in Lagos.", "std", true],
      ["J'ai grandi au Sénégal.", "I grew up in Senegal.", "std", true],
      ["Je suis venu(e) ici en 2019.", "I came here in 2019.", "std"],
      ["J'ai fait mes études à Paris.", "I studied in Paris.", "std"],
      ["Je suis devenu(e) ingénieur(e).", "I became an engineer.", "std"]
    ] },
    { fn: "Pour exprimer son intention", fnEn: "intentions", icon: "🎯", items: [
      ["Je compte chercher du travail.", "I'm planning to look for work.", "std", true],
      ["J'ai l'intention de rester en France.", "I intend to stay in France.", "std", true],
      ["Je pense rentrer en Italie.", "I'm thinking of going back to Italy.", "std"],
      ["C'est décidé !", "It's decided!", "std"]
    ] },
    { fn: "Pour parler de ses goûts", fnEn: "tastes", icon: "❤️", items: [
      ["J'adore ce concert.", "I love this concert.", "std"],
      ["Je (ne) suis (pas) fan de jazz.", "I'm (not) a fan of jazz.", "std", true],
      ["J'aime bien sortir.", "I quite like going out.", "std"],
      ["Je n'aime pas trop les sports aquatiques.", "I'm not very keen on water sports.", "std"],
      ["C'est pas du tout mon truc.", "It's not my thing at all.", "fam", true],
      ["Ma passion, c'est les jeux vidéo.", "My passion is video games.", "fam"]
    ] },
    { fn: "Pour proposer, accepter, refuser une sortie", fnEn: "outings", icon: "🎶", items: [
      ["Ça te dit ? · Tu es libre ?", "Do you fancy it? · Are you free?", "fam", true],
      ["On se retrouve chez moi à 19 h ?", "Shall we meet at my place at 7?", "std"],
      ["Ça te va ? · C'est bon pour toi ?", "Does that suit you?", "fam"],
      ["Avec plaisir ! · D'accord ! · Ça marche !", "With pleasure! · OK! · Deal!", "std", true],
      ["Je suis désolé(e), je ne peux pas.", "I'm sorry, I can't.", "std", true],
      ["Ce n'est pas possible.", "It's not possible.", "std"]
    ] },
    { fn: "Pour proposer une activité (atelier)", fnEn: "presenting an outing", icon: "📣", items: [
      ["Nous vous proposons une balade en kayak.", "We're offering a kayak trip.", "poli"],
      ["C'est l'occasion de prendre l'air.", "It's a chance to get some fresh air.", "std"],
      ["C'est un bon plan pour…", "It's a great deal for…", "fam"],
      ["Le tarif est de 16,50 € par personne.", "The price is €16.50 per person.", "std"],
      ["Inscriptions à l'avance.", "Book in advance.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · suggesting an outing", lanes: ["Julie", "Sarah"], av: ["f7", "f8"], steps: [
    { s: 0, fr: "Tu es libre samedi ? Ça te dit, un concert ?", en: "Are you free on Saturday? Fancy a concert?" },
    { s: 1, fr: "Désolée, samedi, je ne peux pas.", en: "Sorry, on Saturday I can't." },
    { s: 0, fr: "Et dimanche ?", en: "And Sunday?" },
    { s: 1, fr: "Dimanche, avec plaisir !", en: "Sunday, with pleasure!" },
    { s: 0, fr: "On se retrouve chez moi à 18 heures ? Ça te va ?", en: "Shall we meet at my place at 6? Does that suit you?" },
    { s: 1, fr: "Ça marche !", en: "Deal!" }
  ] },

  sounds: {
    intro: "Phonie-graphie: [y] as in [[tu]] and [u] as in [[tout]]. Both have rounded lips; for [y], the tongue is at the front (say “ee” and round your lips), for [u] at the back.",
    letters: [
      { l: "u · û · eu (in avoir)", name: "[y] · tu", tip: "Say “ee”, then round your lips without moving your tongue: [[tu]], [[sûr]], [[j'ai eu]] (eu = [y] in the past participle of avoir!).", ex: ["tu as vu", "tu as bu", "j'ai eu", "sûr"] },
      { l: "ou · où · oû", name: "[u] · tout", tip: "Lips rounded and pushed forward, tongue back: [[nous]], [[où]], [[le mois d'août]].", ex: ["vous", "c'est fou", "où", "août"] }
    ],
    pairs: [
      { a: ["tu", "you"], b: ["tout", "all"], note: "[y] / [u]" },
      { a: ["vu", "seen"], b: ["vous", "you"], note: "[y] / [u]" },
      { a: ["le dessus", "the top"], b: ["le dessous", "the underneath"], note: "[y] / [u]" },
      { a: ["la rue", "the street"], b: ["la roue", "the wheel"], note: "[y] / [u]" },
      { a: ["Je n'ai rien fait.", "I did nothing."], b: ["Je n'ai vu personne.", "I saw nobody."], note: "rien / personne" },
      { a: ["il y a deux ans", "two years ago"], b: ["depuis deux ans", "for two years (still)"], note: "il y a / depuis" }
    ]
  },
  classify: {
    label: "👄 [y] ou [u] ?", q: "Listen: do you hear [y] (tu) or [u] (tout)?",
    options: ["[y] tu", "[u] tout"],
    items: [
      { say: "su", a: 0 }, { say: "sous", a: 1 }, { say: "lu", a: 0 }, { say: "loup", a: 1 },
      { say: "la rue", a: 0 }, { say: "la roue", a: 1 }, { say: "dû", a: 0 }, { say: "doux", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Chiara a grandi près de Rome.", ok: true },
    { type: "mcq", tag: "Dialogue 1", q: "Chiara s'est installée à Lyon…", options: ["il y a trois ans", "depuis trois mois", "pendant ses études"], answer: 0 },
    { type: "tf", tag: "Dialogue 1", s: "Chiara compte rentrer en Italie.", ok: false, explain: "She intends to stay and apply for French nationality." },
    { type: "tf", tag: "Dialogue 2", s: "Léa et Sami se sont mariés tout de suite.", ok: false, explain: "They took their time." },
    { type: "mcq", tag: "Dialogue 3", q: "Ce week-end, Lucie et sa famille…", options: ["sont sortis", "sont restés à la maison", "ont joué aux jeux vidéo"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Christophe va souvent aux concerts de jazz.", ok: false, explain: "« Je ne vais jamais aux concerts. »" },
    { type: "mcq", tag: "Dialogue 4", q: "Julie et Sarah vont au festival…", options: ["dimanche", "samedi", "vendredi"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Pendant les Journées du patrimoine, la visite est gratuite.", ok: true },
    { type: "fill", tag: "Passé composé", sentence: "Ma sœur ___ partie en Angleterre pour finir ses études.", options: ["est", "a", "s'est"], answer: 0 },
    { type: "fill", tag: "Passé composé", sentence: "Ils ___ fait connaissance en 2018.", options: ["ont", "sont", "se sont"], answer: 0 },
    { type: "fill", tag: "Passé composé", sentence: "Marine et Éric se sont ___ le week-end dernier.", options: ["mariés", "marié", "mariées"], answer: 0 },
    { type: "fill", tag: "Passé composé", sentence: "Tu as ___ le roman de Gaël Faye ?", options: ["lu", "lit", "lire"], answer: 0 },
    { type: "fill", tag: "Passé composé", sentence: "Elle est ___ en 1977.", options: ["née", "naît", "naquis"], answer: 0 },
    { type: "type", tag: "Passé composé", q: "Passé composé: « Elle devient célèbre. »", answers: ["Elle est devenue célèbre.", "Elle est devenue célèbre"] },
    { type: "fill", tag: "Négation", sentence: "Tu veux encore faire du vélo ? — Non, je ne veux ___ faire de vélo.", options: ["plus", "rien", "personne"], answer: 0 },
    { type: "fill", tag: "Négation", sentence: "Il y a quelqu'un dans la salle ? — Non, il n'y a ___.", options: ["personne", "rien", "jamais"], answer: 0 },
    { type: "fill", tag: "Négation", sentence: "Je n'ai ___ fait de spécial ce week-end.", options: ["rien", "personne", "plus"], answer: 0 },
    { type: "fill", tag: "Négation", sentence: "Je ne suis ___ allé à ce festival.", options: ["jamais", "personne", "rien"], answer: 0 },
    { type: "fill", tag: "Négation", sentence: "Je ne fais jamais ___ sport.", options: ["de", "du", "le"], answer: 0 },
    { type: "type", tag: "Négation", q: "Make it negative: « Ils ont invité tout le monde à leur mariage. »", answers: ["Ils n'ont invité personne à leur mariage.", "Ils n'ont invité personne à leur mariage"] },
    { type: "fill", tag: "Indicateurs de temps", sentence: "Les places sont en vente ___ hier.", options: ["depuis", "il y a", "pendant"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "J'ai fait ma première compétition ___ onze ans.", options: ["il y a", "depuis", "pendant"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "Hier, nous avons fait du canoë ___ quatre heures.", options: ["pendant", "il y a", "depuis"], answer: 0 },
    { type: "fill", tag: "Intention", sentence: "J'ai l'intention ___ rester en France.", options: ["de", "à", "—"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Ça te dit, une expo dimanche ?", options: ["Avec plaisir ! On se retrouve où ?", "Je n'ai rien fait.", "Je suis né à Lyon."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu aimes les jeux vidéo ?", options: ["Non, ce n'est pas du tout mon truc.", "Il y a deux ans.", "Ça marche !"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce que tu comptes faire après tes études ?", options: ["Je compte chercher du travail à Montréal.", "J'ai grandi à Rome.", "Je ne vois personne."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Une personne qui n'est pas en couple est…", options: ["célibataire", "mariée", "amoureuse"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la via ferrata", "le canoë-kayak", "le vélo", "le château"], answer: 3, explain: "le château is a place to visit; the others are outdoor activities." },
    { type: "mcq", tag: "Vocabulaire", q: "Un(e) scénariste…", options: ["écrit des films", "joue dans des films", "chante"], answer: 0 },
    { type: "mcq", tag: "Langue familière", q: "« le ciné » = …", options: ["le cinéma", "la cinéaste", "la cuisine"], answer: 0 },
    { type: "order", tag: "Construisez", en: "I've never been to this festival.", words: ["Je", "ne", "suis", "jamais", "allé", "à", "ce", "festival."] },
    { type: "listen", tag: "Écoute", q: "When did they meet?", say: "Ils ont fait connaissance il y a six ans, sur le tournage d'un film.", options: ["six years ago", "for six years", "six months ago"], answer: 0 }
  ],

  roleplays: [
    { title: "🧭 Raconte ton parcours", brief: "A new friend asks about your life. Tell your path and your plans.", memo: ["Je suis né(e)…", "J'ai grandi…", "Je me suis installé(e)…", "Je compte…"], partner: "m2", you: "f4",
      turns: [
        { them: "Tu viens d'où ?", themEn: "Where are you from?", hint: "Born in Nigeria, grew up in Lagos.", you: "Je suis née au Nigeria et j'ai grandi à Lagos.", youEn: "I was born in Nigeria and I grew up in Lagos." },
        { them: "Et tu es en France depuis quand ?", themEn: "And how long have you been in France?", hint: "You came two years ago for your master's.", you: "Je suis venue il y a deux ans pour faire un master.", youEn: "I came two years ago to do a master's." },
        { them: "Tu vas rester ici ?", themEn: "Will you stay here?", hint: "You intend to look for work in Lyon.", you: "Oui, j'ai l'intention de chercher du travail à Lyon.", youEn: "Yes, I intend to look for work in Lyon." }
      ] },
    { title: "🎶 Propose une sortie", brief: "Call a friend and suggest going out. Agree on a day, a time and a place.", memo: ["Ça te dit ?", "Tu es libre… ?", "On se retrouve… ?", "Ça marche !"], partner: "f8", you: "f7",
      turns: [
        { them: "Allô ?", themEn: "Hello?", hint: "Ask if she's free on Friday evening; suggest a play.", you: "Salut ! Tu es libre vendredi soir ? Ça te dit, une pièce de théâtre ?", youEn: "Hi! Are you free on Friday evening? Fancy a play?" },
        { them: "Vendredi, je ne peux pas, désolée. Samedi ?", themEn: "Friday I can't, sorry. Saturday?", hint: "Accept Saturday.", you: "Samedi, ça marche !", youEn: "Saturday, deal!" },
        { them: "On se retrouve où ?", themEn: "Where shall we meet?", hint: "In front of the theatre at 7.30. Ask if that suits her.", you: "Devant le théâtre à 19 h 30. Ça te va ?", youEn: "In front of the theatre at 7.30. Does that suit you?" },
        { them: "Parfait !", themEn: "Perfect!", hint: "Say you'll buy the tickets.", you: "Super, j'achète les places !", youEn: "Great, I'll buy the tickets!" }
      ] },
    { title: "😴 Un week-end tranquille", brief: "A colleague asks about your weekend. You did nothing special. Use the negative.", memo: ["ne… rien", "ne… personne", "ne… jamais", "ne… plus"], partner: "f3", you: "m4",
      turns: [
        { them: "Tu as fait quoi ce week-end ?", themEn: "What did you do this weekend?", hint: "Nothing special.", you: "Je n'ai rien fait de spécial.", youEn: "I didn't do anything special." },
        { them: "Tu as vu des amis ?", themEn: "Did you see friends?", hint: "No, nobody.", you: "Non, je n'ai vu personne.", youEn: "No, I didn't see anyone." },
        { them: "Tu ne fais plus de foot le dimanche ?", themEn: "Don't you play football on Sundays any more?", hint: "No, not any more. You never have time.", you: "Non, je ne fais plus de foot. Je n'ai jamais le temps !", youEn: "No, I don't play football any more. I never have time!" }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Organiser une activité de loisir", intro: "In groups, organise an outing for your class: find information, agree together, then present it with all the practical details.",
      steps: [["Préparation", ["Choose a field: cultural heritage, food, outdoors, shows, creative hobbies, sports and games…", "Look for activities in your town or region and agree on one outing and its organisation (date…)."]], ["Réalisation", ["Prepare your oral presentation: describe the activity and why it's fun or interesting.", "Note the practical details: date and times, meeting place, transport, price, how to book. Find pictures (photos, map)."]], ["Présentation", ["Present your outing to the class with your written support. Answer questions.", "At the end, vote for your favourite outing."]]],
      phrases: ["Nous vous proposons…", "Au programme : …", "C'est l'occasion de…", "Le tarif est de… par personne.", "Rendez-vous à…"],
      model: { type: "card", style: "board", caption: "🛶 Example · tap a line", title: "BALADE EN KAYAK SUR LA SAÔNE", sub: "Lyon · une expérience unique", rows: [["Quand ?", "jeudi 8 septembre, de 14 h à 16 h", "Jeudi huit septembre, de quatorze heures à seize heures."], ["Rendez-vous", "13 h 30, à l'arrêt de tram « Confluence » (T1)", "Rendez-vous à treize heures trente à l'arrêt de tram Confluence."], ["Tarif", "16,50 € par personne", "Le tarif est de seize euros cinquante par personne."], ["Inscriptions", "3 jours à l'avance", "Inscriptions trois jours à l'avance."], ["Pourquoi ?", "découvrir les monuments et les paysages de Lyon, prendre l'air", "C'est l'occasion de découvrir Lyon et de prendre l'air !"]], foot: "Kayaks à deux places" } }
  ],
  delf: {
    skill: "Compréhension de l'oral", title: "The DELF A2 listening paper: strategies",
    about: "The DELF A2 <b>compréhension de l'oral</b> lasts about 25 minutes and has 4 exercises: <b>1.</b> 6 public announcements (airport, station, shop…); <b>2.</b> the main information in 3 radio documents (news flash, weather, ad…); <b>3.</b> the key information in a recorded message (personal or professional); <b>4.</b> 4 informal dialogues where you identify what people are doing (suggesting, refusing, thanking…). You hear each document <b>twice</b>.",
    tips: ["Read the questions <b>before</b> listening: they tell you the topic.", "1st listening: spot the information. 2nd listening: complete, check, correct.", "Listen for figures, places, times, people.", "For exercise 4, recognise the function: [[Ça te dit ?]] = suggesting, [[Désolé, je ne peux pas]] = refusing."],
    items: [
      { type: "listen", q: "Exercise 1 · What must you do?", say: "Mesdames et messieurs, le spectacle va commencer. Merci d'éteindre vos téléphones portables.", options: ["switch off your phone", "switch on your phone", "put away your bag"], answer: 0 },
      { type: "listen", q: "Exercise 1 · What is forbidden near the pools?", say: "Pour votre sécurité, il est interdit de courir autour des bassins.", options: ["running", "jumping", "walking"], answer: 0 },
      { type: "listen", q: "Exercise 3 · When is the meeting?", say: "Bonjour, c'est Marc. Le rendez-vous de demain est déplacé à quinze heures, au café de la gare. Rappelle-moi !", options: ["tomorrow at 3 p.m.", "today at 5 p.m.", "tomorrow at 5 p.m."], answer: 0 },
      { type: "listen", q: "Exercise 4 · What is the person doing?", say: "Ça te dit, une balade au parc cet après-midi ?", options: ["suggesting an outing", "refusing", "thanking"], answer: 0 },
      { type: "listen", q: "Exercise 4 · What is the person doing?", say: "Je suis désolée, mais ce soir, je ne peux vraiment pas.", options: ["refusing", "accepting", "apologising for being late"], answer: 0 }
    ]
  },
  detente: {
    title: "Les mots coupés",
    intro: "In casual French, speakers cut words short. What are the full words?",
    items: [
      { type: "mcq", q: "« le foot »", options: ["le football", "le footing", "la fourchette"], answer: 0 },
      { type: "mcq", q: "« le ciné »", options: ["le cinéma", "la cinéaste", "le cirque"], answer: 0 },
      { type: "mcq", q: "« un(e) ado »", options: ["un(e) adolescent(e)", "un(e) adulte", "un(e) adorateur, adoratrice"], answer: 0 },
      { type: "mcq", q: "« une expo »", options: ["une exposition", "une expérience", "une explosion"], answer: 0 },
      { type: "mcq", q: "« le resto »", options: ["le restaurant", "le reste", "la restauration rapide"], answer: 0 },
      { type: "mcq", q: "« la fac »", options: ["la faculté (l'université)", "la facture", "la façade"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "card", style: "board", caption: "🏰 Les Journées du patrimoine · tap a line", title: "JOURNÉES DU PATRIMOINE", sub: "chaque année en septembre · le bon plan de la rentrée", rows: [["Quoi ?", "musées, monuments, théâtres, châteaux ouverts gratuitement", "Des musées, des monuments, des théâtres et des châteaux ouvrent leurs portes gratuitement."], ["Au programme", "visites guidées, animations, expositions", "Au programme : des visites guidées, des animations et des expositions."], ["Pour qui ?", "en famille, entre amis, en couple ou en solitaire", "En famille, entre amis, en couple ou en solitaire : tout le monde y trouve son bonheur !"], ["Exemple", "le jeu de paume au château de Fontainebleau", "Au château de Fontainebleau, on peut apprendre le jeu de paume."]], foot: "« Tout le monde y trouve son bonheur ! »" },
    { type: "pics", title: "🗼 Oh, le cliché ! « Les Français sont fiers de Paris » · the favourite monuments of the French (Odoxa poll quoted by the book)", items: [
      { t: "1. le mont Saint-Michel", pic: "🏝️", en: "in Normandy, not Paris" }, { t: "2. le château de Versailles", pic: "👑", en: "near Paris, not in it" }, { t: "3. la tour Eiffel", pic: "🗼", en: "only third!" }
    ] }
  ],
  culture: [
    { icon: "🗼", kind: "Oh, le cliché !", t: "« Les Français sont fiers de Paris. »", d: "The French are very proud of Paris's cultural heritage, but according to the Odoxa poll quoted by the book, their two favourite monuments, the <b>mont Saint-Michel</b> and the <b>château de Versailles</b>, aren't in the capital. The Eiffel Tower only comes third." },
    { icon: "🏰", kind: "Civilisation", t: "Les Journées du patrimoine", d: "Every September, museums, monuments, theatres and châteaux all over France open their doors <b>for free</b>, with guided tours, shows and exhibitions. In Paris you can visit the Panthéon or the backstage of the Cirque d'hiver Bouglione, described by the book as the oldest circus still in activity in the world." },
    { icon: "🎾", kind: "Au fait !", t: "Le jeu de paume", d: "<b>Real tennis</b>, played for centuries: you hit the ball back with the palm (<i>paume</i>) of your hand, like Basque pelota; today you can also use a racket. It's the ancestor of tennis." },
    { icon: "🏅", kind: "Francophonie", t: "Les Jeux de la Francophonie", d: "Every four years, in a different French-speaking city, young people from all over the world meet for sports and cultural competitions (song, dance, literature, photography, painting…). In 2017 in Abidjan (Côte d'Ivoire), Swiss athlete Pascale Stöcklin won gold in the women's pole vault." },
    { icon: "🎤", kind: "Francophonie", t: "Des artistes francophones", d: "Gaël Faye (singer, writer, born in Burundi, author of <i>Petit Pays</i>), Mohamed Mbougar Sarr (Senegalese writer), Aya Nakamura (singer of Malian origin), Virginie Efira (Belgian-French actress), Manu Katché (drummer)… French is a language of artists on every continent." },
    { icon: "✂️", kind: "Langue", t: "Des mots coupés", d: "French speakers shorten words in casual speech: <b>foot</b> (football), <b>ciné</b> (cinéma), <b>ado</b> (adolescent), <b>expo</b>, <b>resto</b>, <b>la fac</b>, <b>un apéro</b>…" }
  ],
  tips: [
    { icon: "🔀", t: "être or avoir?", d: "Movement / change verbs (the 17) and all pronominal verbs → être, with agreement. Everything else → avoir." },
    { icon: "🥪", t: "personne goes last", d: "[[Je n'ai rien vu.]] but [[Je n'ai vu personne.]]" },
    { icon: "⏳", t: "depuis = still true", d: "[[J'habite ici depuis trois ans]] (I still live here). [[J'ai habité ici pendant trois ans]] (finished)." }
  ],
  mistakes: [
    ["Elle a partie en Erasmus.", "Elle est partie en Erasmus.", "partir → être"],
    ["Ils se sont marié.", "Ils se sont mariés.", "être → agreement"],
    ["Elle a décidée de rester.", "Elle a décidé de rester.", "avoir → no agreement"],
    ["Je n'ai personne vu.", "Je n'ai vu personne.", "personne after the participle"],
    ["Je ne fais jamais du sport.", "Je ne fais jamais de sport.", "negative → de"],
    ["J'habite ici il y a trois ans.", "J'habite ici depuis trois ans.", "still true → depuis"],
    ["J'ai l'intention rester.", "J'ai l'intention de rester.", "avoir l'intention de"],
    ["Il a naît en 1990.", "Il est né en 1990.", "naître → être + né"]
  ]
});
