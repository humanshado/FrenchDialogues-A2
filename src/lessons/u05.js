// Unité 5 · En route vers le futur ! (Édito A2, 2e édition, book pp. 69–82)
// Situations: imaginer la vie en 2050 · au salon des innovations · une semaine sans écrans · « Si j'ai un portable… » · la RoboCup
// Grammar: le futur simple · la condition (si + présent → présent / impératif / futur) et quand + futur · le pronom on
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u05", rubrique: 3, num: 5,
  title: "On the road to the future!",
  titleFr: "En route vers le futur !",
  pages: "Book pp. 69–82",
  opener: { fr: "Un jour, les robots feront tout à notre place !", en: "One day, robots will do everything for us!" },
  hero: { scene: "classe", staff: "La maîtresse", people: { "La maîtresse": "f2", "Jules": "k2", "Léa": "k1" } },
  situations: [
    ["🚀", "La vie en 2050", "imagining the future: [[Bientôt, il y aura des maisons volantes.]] · [[Dans un avenir proche, des robots nous serviront.]]"],
    ["🖨️", "Au salon des innovations", "what an object is for: [[Elle sert à créer des plats.]] · [[C'est très pratique !]]"],
    ["📵", "Une semaine sans écrans", "surprise: [[Sérieux ?]] · [[C'est pas possible !]] · [[Ça alors !]]"],
    ["📱", "Si j'ai un portable…", "conditions and certainty: [[Si tu as de bonnes notes, je t'achèterai un téléphone.]] · [[Quand tu auras 15 ans…]]"],
    ["🤖", "La RoboCup", "hope and the pronoun on: [[J'espère que la France gagnera.]] · [[On rêve de battre les champions.]]"]
  ],
  goals: [
    "Imagine the future: [[Bientôt…]], [[Un jour…]], [[Dans le futur…]], [[Dans un avenir proche…]]",
    "Form and use the futur simple, including irregular verbs: [[il y aura]], [[je ferai]], [[on pourra]], [[ils verront]]",
    "Explain what an object is for: [[Ça sert à…]], [[Ça permet de…]], [[On l'utilise pour…]], [[C'est très pratique / utile.]]",
    "Express surprise: [[Ah bon ?]], [[C'est pas possible !]], [[Ça alors !]], [[Sérieux ?]]",
    "Express hope: [[J'espère que…]] + future, [[On rêve de…]]",
    "Express a condition: [[si]] + present → present / imperative / futur simple; certainty: [[quand]] + future → future",
    "Understand the three meanings of [[on]]: quelqu'un, les gens, nous"
  ],
  glance: [
    ["🗣️", "Communication", "imagining the future · describing an object's use · surprise · hope"],
    ["🧩", "Grammaire", "futur simple · si + présent / futur · quand + futur · the pronoun on"],
    ["🗂️", "Vocabulaire", "science and progress · machines · technological innovations · how objects work · phones, computers, the Internet"],
    ["🔊", "Phonie-graphie", "consonant + [ʁ]: br, cr, dr, gr, pr, tr · the future endings"],
    ["⭐", "The phrase to learn first", "[[Un jour, il y aura…]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Life in 2050", titleFr: "En classe · Comment seront nos vies en 2050 ?",
      note: "A primary-school teacher asks her pupils how they imagine the future. Listen to the futur simple, especially [[il y aura]], [[on pourra]], [[ils feront]].",
      scene: "classe", staff: "La maîtresse", people: { "La maîtresse": "f2", "Jules": "k2", "Léa": "k1" },
      lines: [
        ["La maîtresse", "Les enfants, comment vous imaginez la vie en 2050 ?", "Children, how do you imagine life in 2050?"],
        ["Jules", "Bientôt, il y aura des maisons qui pourront se téléporter jusqu'à la plage ! Elles flotteront dans les airs.", "Soon there'll be houses that can teleport themselves to the beach! They'll float in the air."],
        ["La maîtresse", "Et à l'intérieur ?", "And inside?"],
        ["Jules", "Il y aura des robots : un qui fera le ménage, un qui fera la cuisine et un qui nous servira des frites !", "There'll be robots: one that does the housework, one that cooks and one that serves us chips!"],
        ["Léa", "Moi, je pense qu'un jour, on n'aura plus besoin de conduire. Il y aura de petites navettes individuelles, sous terre, et le GPS conduira tout seul.", "I think one day we won't need to drive any more. There'll be little individual shuttles, underground, and the GPS will drive by itself."],
        ["La maîtresse", "Et pour manger ?", "And for food?"],
        ["Léa", "Dans le futur, on mangera peut-être un comprimé quatre fois par jour… Mais j'espère qu'on pourra encore manger du chocolat !", "In the future, we might eat a pill four times a day… But I hope we'll still be able to eat chocolate!"],
        ["La maîtresse", "Ça paraît loin, la vie dans trente ans… mais vous verrez !", "Life in thirty years seems far away… but you'll see!"]
      ],
      glossary: [["il y aura", "there will be (avoir)"], ["une navette", "a shuttle"], ["un comprimé", "a pill, tablet"], ["vous verrez", "you'll see (voir)"]]
    },
    {
      id: "d2", n: 2, title: "At the innovation fair", titleFr: "Au salon des innovations · C'est une invention très utile !",
      note: "Claire visits a technology fair. A salesman presents two inventions. Listen to how he explains what they're for.",
      scene: "grandmagasin", staff: "Le vendeur", people: { "Le vendeur": "m3", "Claire": "f3" },
      lines: [
        ["Le vendeur", "Madame, venez voir notre imprimante 3D alimentaire ! Elle sert à créer différents types de plats.", "Madam, come and see our 3D food printer! It's used to create different kinds of dishes."],
        ["Claire", "Ah bon ? Comment ça fonctionne ?", "Really? How does it work?"],
        ["Le vendeur", "Vous mettez une purée de légumes, et elle permet de faire des formes originales : des étoiles, des animaux…", "You put in a vegetable purée, and it lets you make original shapes: stars, animals…"],
        ["Claire", "C'est très pratique ! Quand j'aurai cette imprimante, mes enfants mangeront enfin des légumes !", "That's very handy! When I have this printer, my children will finally eat vegetables!"],
        ["Le vendeur", "Et voici notre bateau intelligent. Il est autonome et fonctionne à l'énergie solaire. Les chercheurs l'utilisent pour étudier les océans.", "And here's our smart boat. It's autonomous and runs on solar power. Researchers use it to study the oceans."],
        ["Claire", "Et s'il tombe en panne au milieu de la mer ?", "And if it breaks down in the middle of the sea?"],
        ["Le vendeur", "Pas de problème : il rentrera tout seul au port. C'est une invention très utile pour la planète !", "No problem: it'll come back to port by itself. It's a very useful invention for the planet!"]
      ],
      glossary: [["servir à + infinitif", "to be used for"], ["permettre de + infinitif", "to make it possible to"], ["fonctionner = marcher", "to work (machine)"], ["tomber en panne", "to break down"]]
    },
    {
      id: "d3", n: 3, title: "A week without screens", titleFr: "Au café · Accro aux écrans ?",
      note: "Eva tells Marine she's going to spend a week without her smartphone. Listen to Marine's surprise and to Eva's conditions with [[si]].",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Marine": "f8", "Eva": "f4" },
      lines: [
        ["Eva", "À partir de lundi, je ne vais plus utiliser mon smartphone ni mon ordinateur pendant sept jours.", "From Monday, I'm not going to use my smartphone or my computer for seven days."],
        ["Marine", "Quoi ? Sérieux ? C'est pas possible !", "What? Seriously? That's impossible!"],
        ["Eva", "Si ! J'y passais cinq heures par jour, tu te rends compte ? Si je n'ai plus de batterie, je panique !", "Yes! I spent five hours a day on it, can you imagine? If my battery runs out, I panic!"],
        ["Marine", "Ça alors ! Et si tu te perds dans la rue ?", "Well I never! And if you get lost in the street?"],
        ["Eva", "Si je me perds, je demanderai mon chemin à quelqu'un ! Et je regarderai l'itinéraire sur un plan avant de partir.", "If I get lost, I'll ask someone the way! And I'll check the route on a map before I leave."],
        ["Marine", "Et si ton travail a besoin de toi ?", "And if your work needs you?"],
        ["Eva", "Si c'est vraiment nécessaire, j'utiliserai l'ordinateur. Tu devrais essayer aussi !", "If it's really necessary, I'll use the computer. You should try too!"],
        ["Marine", "Moi ? Sans mon portable ? Ah non, pas cette semaine !", "Me? Without my phone? Oh no, not this week!"]
      ],
      glossary: [["Sérieux ? · Ça alors !", "Seriously? · Well I never! (casual)"], ["tu te rends compte ?", "can you imagine?"], ["accro à", "hooked on (casual)"], ["si + présent → futur", "if… will…"]]
    },
    {
      id: "d4", n: 4, title: "If I get a phone…", titleFr: "À la maison · Je veux un portable !",
      note: "Théo, 12, wants a phone. His mother sets conditions. Listen to [[si]] (possible) and [[quand]] (certain) with the future.",
      scene: "maison", people: { "Théo": "k2", "La mère": "f3" },
      lines: [
        ["Théo", "Maman, tous mes copains ont un portable ! Si j'en ai un, je pourrai t'appeler après l'école.", "Mum, all my friends have a phone! If I have one, I'll be able to call you after school."],
        ["La mère", "Tu peux m'appeler avec le téléphone fixe de la maison.", "You can call me on the home landline."],
        ["Théo", "Mais si je suis en retard, tu t'inquiéteras !", "But if I'm late, you'll worry!"],
        ["La mère", "C'est vrai… Bon, si tu as de bonnes notes ce trimestre, on en reparlera.", "True… Well, if you get good marks this term, we'll talk about it again."],
        ["Théo", "Et si j'ai de bonnes notes, tu m'achèteras un smartphone ?", "And if I get good marks, will you buy me a smartphone?"],
        ["La mère", "Non : un portable simple, sans Internet. Quand tu auras quinze ans, tu auras un smartphone.", "No: a simple phone, without the Internet. When you're fifteen, you'll have a smartphone."],
        ["Théo", "Quinze ans ? C'est dans trois ans ! Bon… d'accord.", "Fifteen? That's in three years! Oh well… OK."]
      ],
      glossary: [["si + présent", "if (possible condition)"], ["quand + futur → futur", "when (certain future)"], ["le téléphone fixe", "the landline"], ["on en reparlera", "we'll talk about it again"]]
    },
    {
      id: "d5", n: 5, title: "The RoboCup", titleFr: "À la radio · Rendez-vous à la RoboCup !",
      note: "A radio host interviews an engineer who builds football-playing robots. Listen to [[on]] (= nous, les gens, quelqu'un) and to how he expresses hope.",
      scene: "amphi", staff: "L'animateur", people: { "L'animateur": "m4", "L'ingénieure": "f5" },
      lines: [
        ["L'animateur", "C'est vrai ce qu'on raconte ? Vos robots jouent au foot ?", "Is it true what people say? Your robots play football?"],
        ["L'ingénieure", "Oui ! La RoboCup est une compétition mondiale de robots footballeurs. Avec mon équipe, on y participe depuis dix ans.", "Yes! The RoboCup is a world competition for football-playing robots. My team and I have been taking part for ten years."],
        ["L'animateur", "Et vous avez gagné ?", "And have you won?"],
        ["L'ingénieure", "On a gagné quatre compétitions. Cette année, j'espère que nos robots seront encore plus rapides.", "We've won four competitions. This year, I hope our robots will be even faster."],
        ["L'animateur", "Un jour, ils pourront battre une vraie équipe de foot ?", "One day, will they be able to beat a real football team?"],
        ["L'ingénieure", "C'est notre rêve : on rêve de battre l'équipe humaine championne du monde en 2050 !", "That's our dream: we dream of beating the human world champion team in 2050!"],
        ["L'animateur", "Et en France, on aime ce genre de compétition ?", "And in France, do people like this kind of competition?"],
        ["L'ingénieure", "Beaucoup ! Si vous venez, vous verrez : les gens crient comme dans un vrai stade.", "A lot! If you come, you'll see: people shout like in a real stadium."]
      ],
      glossary: [["on = nous / les gens / quelqu'un", "we / people / someone"], ["J'espère que + futur", "I hope that… will…"], ["rêver de + infinitif", "to dream of"], ["battre", "to beat"]]
    }
  ],

  vocab: [
    { t: "le chercheur, la chercheuse", en: "the researcher", pic: "🔬", cat: "Le progrès" },
    { t: "la découverte", en: "the discovery", pic: "💡", cat: "Le progrès", g: "f" },
    { t: "l'invention, inventer", en: "invention, to invent", pic: "⚙️", cat: "Le progrès", g: "f" },
    { t: "l'inventeur, l'inventrice", en: "the inventor", pic: "🧑‍🔬", cat: "Le progrès" },
    { t: "l'innovation", en: "innovation", pic: "🚀", cat: "Le progrès", g: "f" },
    { t: "la nouveauté", en: "the novelty, new product", pic: "🆕", cat: "Le progrès", g: "f" },
    { t: "la technologie", en: "technology", pic: "🖥️", cat: "Le progrès", g: "f" },
    { t: "l'évolution", en: "evolution", pic: "📈", cat: "Le progrès", g: "f" },
    { t: "fabriquer", en: "to make, manufacture", pic: "🏭", cat: "Le progrès" },
    { t: "l'énergie solaire", en: "solar energy", pic: "☀️", cat: "Le progrès", g: "f" },
    { t: "l'appareil", en: "the device", pic: "📟", cat: "Les machines", g: "m" },
    { t: "le moteur", en: "the engine, motor", pic: "🔧", cat: "Les machines", g: "m" },
    { t: "la navette", en: "the shuttle", pic: "🚀", cat: "Les machines", g: "f" },
    { t: "le robot", en: "the robot", pic: "🤖", cat: "Les machines", g: "m" },
    { t: "l'imprimante 3D", en: "the 3D printer", pic: "🖨️", cat: "Les innovations", g: "f" },
    { t: "l'intelligence artificielle", en: "artificial intelligence", pic: "🧠", cat: "Les innovations", g: "f" },
    { t: "l'hologramme", en: "the hologram", pic: "👻", cat: "Les innovations", g: "m" },
    { t: "la reconnaissance faciale", en: "facial recognition", pic: "🙂", cat: "Les innovations", g: "f" },
    { t: "le logiciel", en: "the software", pic: "💾", cat: "Les innovations", g: "m" },
    { t: "le GPS", en: "the GPS, satnav", pic: "🧭", cat: "Les innovations", g: "m" },
    { t: "la tablette", en: "the tablet", pic: "📱", cat: "Les innovations", g: "f" },
    { t: "la soucoupe volante", en: "the flying saucer", pic: "🛸", cat: "Les innovations", g: "f" },
    { t: "la téléportation", en: "teleportation", pic: "✨", cat: "Les innovations", g: "f" },
    { t: "fonctionner = marcher (bien, mal)", en: "to work (well, badly)", pic: "✅", cat: "Le fonctionnement" },
    { t: "être / tomber en panne", en: "to be broken / break down", pic: "❌", cat: "Le fonctionnement" },
    { t: "automatique", en: "automatic", pic: "🔁", cat: "Les caractéristiques" },
    { t: "autonome", en: "autonomous, self-driving", pic: "🚗", cat: "Les caractéristiques" },
    { t: "électrique", en: "electric", pic: "🔌", cat: "Les caractéristiques" },
    { t: "futuriste", en: "futuristic", pic: "🌌", cat: "Les caractéristiques" },
    { t: "indispensable", en: "essential", pic: "❗", cat: "Les caractéristiques" },
    { t: "pratique", en: "handy, practical", pic: "👌", cat: "Les caractéristiques" },
    { t: "robotisé(e)", en: "robotised", pic: "🦾", cat: "Les caractéristiques" },
    { t: "utile ≠ inutile", en: "useful ≠ useless", pic: "🛠️", cat: "Les caractéristiques" },
    { t: "le téléphone portable", en: "the mobile phone", pic: "📱", cat: "Le téléphone", g: "m", note: "natel (Suisse), gsm (Belgique), cellulaire (Québec)" },
    { t: "le téléphone fixe", en: "the landline", pic: "☎️", cat: "Le téléphone", g: "m" },
    { t: "le SMS = le texto", en: "the text message", pic: "💬", cat: "Le téléphone", g: "m" },
    { t: "l'appel", en: "the call", pic: "📞", cat: "Le téléphone", g: "m" },
    { t: "la batterie", en: "the battery", pic: "🔋", cat: "Le téléphone", g: "f" },
    { t: "le selfie", en: "the selfie", pic: "🤳", cat: "Le téléphone", g: "m" },
    { t: "décrocher ≠ raccrocher", en: "to pick up ≠ hang up", pic: "📴", cat: "Le téléphone" },
    { t: "allumer ≠ éteindre", en: "to switch on ≠ off", pic: "🔘", cat: "Le téléphone" },
    { t: "être joignable", en: "to be reachable", pic: "📶", cat: "Le téléphone" },
    { t: "l'ordinateur = le PC", en: "the computer", pic: "💻", cat: "L'informatique", g: "m" },
    { t: "l'écran, le clavier, la souris", en: "screen, keyboard, mouse", pic: "🖱️", cat: "L'informatique", g: "m" },
    { t: "la clé USB", en: "the USB stick", pic: "🔑", cat: "L'informatique", g: "f" },
    { t: "imprimer", en: "to print", pic: "🖨️", cat: "L'informatique" },
    { t: "le courriel = le mail = l'e-mail", en: "the e-mail", pic: "📧", cat: "Internet", g: "m" },
    { t: "l'appli(cation)", en: "the app", pic: "📲", cat: "Internet", g: "f" },
    { t: "se connecter, en ligne", en: "to log on, online", pic: "🌐", cat: "Internet" },
    { t: "télécharger", en: "to download", pic: "⬇️", cat: "Internet" },
    { t: "se désabonner", en: "to unsubscribe", pic: "🚫", cat: "Internet" },
    { t: "faire une visio(conférence)", en: "to have a video call", pic: "🎥", cat: "Internet" },
    { t: "le réseau social", en: "the social network", pic: "👥", cat: "Internet", g: "m" }
  ],

  grammar: [
    {
      id: "g-futur",
      title: "The futur simple",
      body: [
        "Use: a <b>prediction</b> or a <b>plan</b> in the future: [[Un jour, les voitures seront autonomes.]] · [[L'année prochaine, j'achèterai une imprimante 3D.]]",
        "Form: <b>infinitive</b> + [[-ai, -as, -a, -ons, -ez, -ont]] (the endings of <i>avoir</i>!). Infinitives in <b>-re</b> lose the e: [[prendre]] → [[je prendrai]]. [[manger]] → [[je mangerai]].",
        "Irregular stems (same endings): [[avoir → j'aurai]] · [[être → je serai]] · [[faire → je ferai]] · [[aller → j'irai]] · [[voir → je verrai]] · [[savoir → je saurai]] · [[devoir → je devrai]] · [[pouvoir → je pourrai]] · [[vouloir → je voudrai]] · [[(de)venir → je (de)viendrai]] · [[il faut → il faudra]] · [[il pleut → il pleuvra]]"
      ],
      info: [
        { type: "conj", title: "🔮 The futur simple", verbs: [
          { inf: "manger", en: "regular -er", forms: ["je mangerai", "tu mangeras", "il / elle / on mangera", "nous mangerons", "vous mangerez", "ils / elles mangeront"] },
          { inf: "prendre", en: "-re: drop the e", forms: ["je prendrai", "tu prendras", "il / elle / on prendra", "nous prendrons", "vous prendrez", "ils / elles prendront"] },
          { inf: "avoir", en: "irregular stem aur-", forms: ["j'aurai", "tu auras", "il / elle / on aura", "nous aurons", "vous aurez", "ils / elles auront"] },
          { inf: "être", en: "irregular stem ser-", forms: ["je serai", "tu seras", "il / elle / on sera", "nous serons", "vous serez", "ils / elles seront"] }
        ] },
        { type: "card", style: "board", caption: "🧩 Irregular stems · tap a line", title: "FUTUR : LES RADICAUX IRRÉGULIERS", sub: "same endings: -ai, -as, -a, -ons, -ez, -ont", rows: [
          ["faire → fer-", "aller → ir-", "Je ferai le ménage. J'irai au salon."], ["voir → verr-", "savoir → saur-", "Vous verrez ! Elles sauront leur chemin."], ["pouvoir → pourr-", "vouloir → voudr-", "On pourra se téléporter. Tu voudras venir ?"],
          ["devoir → devr-", "venir → viendr-", "Ils devront travailler. Tu viendras avec nous ?"], ["il faut → il faudra", "il pleut → il pleuvra", "Il faudra recharger la batterie. Demain, il pleuvra."]
        ], foot: "il y a → il y aura" }
      ],
      widget: {
        type: "combo", label: "Predict the future · pick a subject and a verb",
        rows: [{ k: "on", label: "on" }, { k: "nous", label: "nous" }, { k: "robots", label: "les robots" }],
        cols: [{ k: "faire", label: "🧹 faire le ménage" }, { k: "pouvoir", label: "✨ pouvoir se téléporter" }, { k: "aller", label: "🏫 aller à l'école en navette" }, { k: "avoir", label: "🛸 avoir une soucoupe volante" }],
        out: {
          "on|faire": ["On fera le ménage avec un robot.", "We'll do the housework with a robot."], "on|pouvoir": ["On pourra se téléporter.", "We'll be able to teleport."], "on|aller": ["On ira à l'école en navette.", "We'll go to school by shuttle."], "on|avoir": ["On aura une soucoupe volante.", "We'll have a flying saucer."],
          "nous|faire": ["Nous ne ferons plus le ménage.", "We won't do the housework any more."], "nous|pouvoir": ["Nous pourrons nous téléporter.", "We'll be able to teleport."], "nous|aller": ["Nous irons à l'école en navette.", "We'll go to school by shuttle.", "aller → ir-"], "nous|avoir": ["Nous aurons une soucoupe volante.", "We'll have a flying saucer.", "avoir → aur-"],
          "robots|faire": ["Les robots feront le ménage.", "Robots will do the housework.", "faire → fer-"], "robots|pouvoir": ["Les robots pourront se téléporter.", "Robots will be able to teleport."], "robots|aller": ["Les robots iront à l'école en navette.", "Robots will go to school by shuttle."], "robots|avoir": ["Les robots auront une soucoupe volante.", "Robots will have a flying saucer."]
        }
      }
    },
    {
      id: "g-avenir",
      title: "Imagining the future · what an object is for",
      body: [
        "The future: [[Bientôt, il y aura des maisons qui pourront se téléporter.]] · [[Un jour, il y aura de petites navettes.]] · [[Dans le futur, on mangera un comprimé.]] · [[Dans un avenir proche, des robots nous serviront.]] · [[Ça paraît loin, la vie dans trente ans !]]",
        "Usefulness: [[Elle sert à créer différents types de plats.]] (servir <b>à</b> + infinitive) · [[Elle permet de faire des formes originales.]] (permettre <b>de</b>) · [[Les chercheurs l'utilisent pour étudier les océans.]] · [[C'est très pratique !]] · [[C'est une invention très utile pour la planète.]]"
      ],
      info: { type: "timeline", title: "🚀 From today to 2050 (the children's ideas)", ends: ["aujourd'hui", "", "2050"], items: [
        { x: 10, fr: "Bientôt, les voitures seront autonomes.", en: "Soon cars will drive themselves.", pic: "🚗" },
        { x: 32, fr: "Dans un avenir proche, des robots nous serviront.", en: "In the near future, robots will serve us.", pic: "🤖" },
        { x: 58, fr: "Un jour, il y aura des navettes sous terre.", en: "One day there'll be underground shuttles.", pic: "🚇" },
        { x: 86, fr: "Dans le futur, les maisons flotteront dans les airs.", en: "In the future houses will float in the air.", pic: "🏠" }
      ] },
      widget: {
        type: "combo", label: "What is it for? · pick an object and an expression",
        rows: [{ k: "sert", label: "Ça sert à…" }, { k: "permet", label: "Ça permet de…" }, { k: "utilise", label: "On l'utilise pour…" }],
        cols: [{ k: "gps", label: "🧭 le GPS" }, { k: "imprimante", label: "🖨️ l'imprimante 3D" }, { k: "robot", label: "🤖 le robot-aspirateur" }],
        out: {
          "sert|gps": ["Le GPS sert à trouver son chemin.", "The GPS is for finding your way."], "permet|gps": ["Le GPS permet de s'orienter sans carte.", "The GPS lets you find your way without a map."], "utilise|gps": ["On l'utilise pour aller dans un endroit inconnu.", "You use it to go somewhere new."],
          "sert|imprimante": ["L'imprimante 3D sert à fabriquer de petits objets.", "The 3D printer is for making small objects."], "permet|imprimante": ["Elle permet de créer des formes originales.", "It lets you create original shapes."], "utilise|imprimante": ["On l'utilise pour réparer des objets cassés.", "You use it to repair broken objects."],
          "sert|robot": ["Le robot-aspirateur sert à nettoyer la maison.", "The robot vacuum is for cleaning the house."], "permet|robot": ["Il permet de gagner du temps.", "It lets you save time."], "utilise|robot": ["On l'utilise pour ne plus faire le ménage !", "You use it so you never clean again!"]
        }
      }
    },
    {
      id: "g-surprise",
      title: "Surprise and hope",
      body: [
        "Surprise: [[Ah bon ?]] · [[C'est pas possible !]] · and casual: [[Ça alors !]] · [[C'est pas vrai !]] · [[Quoi ?]] · [[Sérieux ?]] (in casual speech, the <i>ne</i> of the negative disappears: <i>C'est pas…</i>).",
        "Hope: [[J'espère que la France gagnera.]] ([[espérer que]] + future or present) · [[On rêve de battre l'équipe championne du monde.]] · [[Pourvu que ça marche !]]"
      ],
      info: { type: "scale", title: "😮 How surprised are you?", colors: ["#e0a526", "#e0474f"], items: [
        { v: 10, fr: "Ah bon ?", en: "Really?", pic: "🤨" }, { v: 34, fr: "C'est pas vrai !", en: "No way!", pic: "😯" }, { v: 58, fr: "Sérieux ?", en: "Seriously?", pic: "😳" },
        { v: 78, fr: "Ça alors !", en: "Well I never!", pic: "😲" }, { v: 96, fr: "C'est pas possible !", en: "That's impossible!", pic: "🤯" }
      ], ends: ["un peu", "très"] }
    },
    {
      id: "g-si-quand",
      title: "Conditions with [[si]] · certainty with [[quand]]",
      body: [
        "[[si]] + present → present (general truth): [[Si quelqu'un m'appelle, je réponds.]] · → imperative (advice): [[Si vous voulez passer moins de temps sur votre téléphone, lisez un livre !]] · → futur simple (a future result): [[Si tu passes une semaine sans écran, tu perdras l'habitude.]]",
        "⚠️ Never the future right after [[si]]: <s>si tu passeras</s>.",
        "[[quand]] + <b>future</b> → <b>future</b> for something <b>certain</b>: [[Quand tu auras 18 ans, je t'achèterai un ordinateur.]] (English uses the present after <i>when</i>; French uses the future.)"
      ],
      info: { type: "compare", title: "🤔 si (maybe) vs quand (sure)", cols: [
        { head: "si + présent", en: "maybe it will happen", color: "#9b4fb0", lines: [["Si tu as de bonnes notes, tu auras un portable.", "If you get good marks…"], ["S'il tombe en panne, il rentrera au port.", "If it breaks down…"], ["Si tu te perds, demande ton chemin !", "If you get lost, ask the way!"]] },
        { head: "quand + futur", en: "it will happen", color: "#2f9c8a", lines: [["Quand tu auras quinze ans, tu auras un smartphone.", "When you're fifteen…"], ["Quand je serai grand, je serai ingénieur.", "When I grow up…"], ["Quand tu seras disponible, on s'appellera en visio.", "When you're free…"]] }
      ] },
      widget: {
        type: "combo", label: "Build the sentence · pick a condition and a result",
        rows: [{ k: "si", label: "Si + présent" }, { k: "quand", label: "Quand + futur" }],
        cols: [{ k: "bac", label: "🎓 Thomas / avoir son bac → faire des études d'ingénieur" }, { k: "panne", label: "💻 l'ordinateur / tomber en panne → appeler le réparateur" }, { k: "grand", label: "🧒 je / être grand → devenir inventeur" }],
        out: {
          "si|bac": ["Si Thomas a son bac, il fera des études d'ingénieur.", "If Thomas passes his bac, he'll study engineering."], "quand|bac": ["Quand Thomas aura son bac, il fera des études d'ingénieur.", "When Thomas passes his bac, he'll study engineering."],
          "si|panne": ["Si l'ordinateur tombe en panne, j'appellerai le réparateur.", "If the computer breaks down, I'll call the repairer."], "quand|panne": ["Quand l'ordinateur tombera en panne, j'appellerai le réparateur.", "When the computer breaks down, I'll call the repairer.", "certain: it will break one day!"],
          "si|grand": ["Si je suis grand, je deviendrai inventeur.", "If I'm tall, I'll become an inventor.", "odd! For growing up, use quand"], "quand|grand": ["Quand je serai grand, je deviendrai inventeur.", "When I grow up, I'll become an inventor."]
        }
      }
    },
    {
      id: "g-on",
      title: "The pronoun [[on]]: three meanings",
      body: [
        "[[on]] always takes a <b>3rd person singular</b> verb, but it can mean: <b>quelqu'un</b> (someone): [[On a volé mon téléphone.]] · <b>les gens</b> (people in general): [[Dans ce pays, on aime beaucoup les nouvelles technologies.]] · <b>nous</b> (casual): [[On va au salon des innovations.]]",
        "When [[on]] = nous, the participle can agree: [[On est allés à la RoboCup.]]"
      ],
      widget: {
        type: "sort", label: "on = quelqu'un, les gens or nous?",
        cols: [{ k: "qq", label: "quelqu'un", color: "#e0474f" }, { k: "gens", label: "les gens", color: "#3a6fd8" }, { k: "nous", label: "nous", color: "#2f9c8a" }],
        items: [
          { t: "On est entré chez moi pour voler mon ordinateur.", k: "qq", say: "Quelqu'un est entré chez moi pour voler mon ordinateur." }, { t: "Dans les grandes entreprises, on utilise des technologies performantes.", k: "gens", say: "Dans les grandes entreprises, les gens utilisent des technologies performantes." },
          { t: "On va acheter une imprimante pour Noël.", k: "nous", say: "Nous allons acheter une imprimante pour Noël." }, { t: "L'année dernière, on est allés à la RoboCup.", k: "nous", say: "L'année dernière, nous sommes allés à la RoboCup." },
          { t: "Quand on vit sans téléphone, on est plus libre.", k: "gens", say: "Quand les gens vivent sans téléphone, ils sont plus libres." }, { t: "On frappe à la porte !", k: "qq", say: "Quelqu'un frappe à la porte !" }
        ]
      }
    }
  ],

  expressions: [
    { fn: "Pour parler du futur, imaginer l'avenir", fnEn: "imagining the future", icon: "🚀", items: [
      ["Bientôt, il y aura des maisons qui pourront se téléporter.", "Soon there'll be houses that can teleport.", "std", true],
      ["Un jour, il y aura de petites navettes.", "One day there'll be little shuttles.", "std"],
      ["Dans le futur, on mangera un comprimé.", "In the future we'll eat a pill.", "std"],
      ["Dans un avenir proche, des robots nous serviront.", "In the near future robots will serve us.", "std", true],
      ["Ça paraît loin, la vie dans trente ans !", "Life in thirty years seems so far away!", "std"]
    ] },
    { fn: "Pour décrire l'utilité d'un objet", fnEn: "what it's for", icon: "🛠️", items: [
      ["Elle sert à créer différents types de plats.", "It's used to create different dishes.", "std", true],
      ["Elle permet de faire des formes originales.", "It lets you make original shapes.", "std", true],
      ["C'est très pratique !", "It's very handy!", "std"],
      ["Les chercheurs l'utilisent pour étudier les océans.", "Researchers use it to study the oceans.", "std"],
      ["C'est une invention très utile pour la planète.", "It's a very useful invention for the planet.", "std"]
    ] },
    { fn: "Pour exprimer sa surprise", fnEn: "surprise", icon: "😲", items: [
      ["Ah bon ?", "Really?", "std", true],
      ["C'est pas possible !", "That's impossible!", "fam", true],
      ["Ça alors !", "Well I never!", "fam"],
      ["C'est pas vrai ! · Quoi ? · Sérieux ?", "No way! · What? · Seriously?", "fam"]
    ] },
    { fn: "Pour exprimer un espoir", fnEn: "hope", icon: "🤞", items: [
      ["J'espère que la France gagnera.", "I hope France will win.", "std", true],
      ["On rêve de battre l'équipe championne du monde.", "We dream of beating the world champions.", "std"]
    ] },
    { fn: "Pour présenter une invention (atelier)", fnEn: "presenting an invention", icon: "🎤", items: [
      ["Cette invention sert à…", "This invention is used for…", "std"],
      ["Cette découverte est révolutionnaire parce que…", "This discovery is revolutionary because…", "std"],
      ["Dans le futur, cette invention permettra de…", "In the future this invention will make it possible to…", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · negotiating with si and quand", lanes: ["Théo", "Sa mère"], av: ["k2", "f3"], steps: [
    { s: 0, fr: "Si j'ai un portable, je pourrai t'appeler !", en: "If I have a phone, I'll be able to call you!" },
    { s: 1, fr: "Si tu as de bonnes notes, on en reparlera.", en: "If you get good marks, we'll talk about it." },
    { s: 0, fr: "Et si j'ai de bonnes notes, tu m'achèteras un smartphone ?", en: "And if I get good marks, will you buy me a smartphone?" },
    { s: 1, fr: "Non. Quand tu auras quinze ans, tu auras un smartphone.", en: "No. When you're fifteen, you'll have a smartphone." },
    { s: 0, fr: "Bon… d'accord !", en: "Oh well… OK!" }
  ] },

  sounds: {
    intro: "Phonie-graphie: <b>consonant + [ʁ]</b>. Say the two consonants together, with no vowel between them: [[bras]], [[cri]], [[droit]], [[gris]], [[pris]], [[tri]]. You hear these groups in many future forms: [[je vivrai]], [[tu vendras]], [[il viendra]].",
    letters: [
      { l: "br · pr", name: "[bʁ] · [pʁ]", tip: "Lips closed, then the throaty [ʁ] straight away: [[libre]], [[bravo]], [[pris]], [[appris]].", ex: ["libre", "bravo", "appris", "le prix"] },
      { l: "tr · dr", name: "[tʁ] · [dʁ]", tip: "Tongue behind the teeth, then [ʁ]: [[trois]], [[autre]], [[à droite]], [[entendre]], [[il viendra]].", ex: ["trois", "à droite", "il viendra", "tu vendras"] },
      { l: "cr · gr", name: "[kʁ] · [gʁ]", tip: "Both at the back of the mouth, like [ʁ]: [[le sucre]], [[le cri]], [[gris]], [[le degré]].", ex: ["le sucre", "gris", "le degré", "écrire"] },
      { l: "-rai · -ras · -ra", name: "the future endings", tip: "[[je vivrai]] [ʁe] · [[tu vendras]] · [[il viendra]] [ʁa] · [[nous travaillerons]] [ʁɔ̃] · [[vous répondrez]] [ʁe] · [[elles offriront]] [ʁɔ̃].", ex: ["Je vivrai à Rio.", "Tu vendras un robot.", "Nous travaillerons.", "Elles offriront un ordinateur."] }
    ],
    pairs: [
      { a: ["je mangerai", "I will eat"], b: ["je mangerais", "I would eat"], note: "futur / conditionnel (same sound in many accents)" },
      { a: ["il fera", "he will do"], b: ["il fait", "he does"], note: "futur / présent" },
      { a: ["tu iras", "you will go"], b: ["tu vas", "you go"], note: "futur / présent" },
      { a: ["si tu viens", "if you come"], b: ["quand tu viendras", "when you come"], note: "si / quand" },
      { a: ["le prix", "the price"], b: ["le pli", "the fold"], note: "[pʁ] / [pl]" },
      { a: ["trois", "three"], b: ["droit", "right, straight"], note: "[tʁ] / [dʁ]" }
    ]
  },
  classify: {
    label: "⏩ Futur ou présent ?", q: "Listen: is the verb in the future or the present?",
    options: ["futur", "présent"],
    items: [
      { say: "Il fera beau.", a: 0 }, { say: "Il fait beau.", a: 1 }, { say: "Tu iras au salon.", a: 0 }, { say: "Tu vas au salon.", a: 1 },
      { say: "Nous aurons un robot.", a: 0 }, { say: "Nous avons un robot.", a: 1 }, { say: "Elles seront là.", a: 0 }, { say: "Elles sont là.", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "D'après Jules, les maisons flotteront dans les airs.", ok: true },
    { type: "mcq", tag: "Dialogue 1", q: "Léa imagine que les navettes seront…", options: ["autonomes, sous terre", "collectives, dans le ciel", "gratuites"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "L'imprimante 3D alimentaire sert à…", options: ["créer des plats", "imprimer des livres", "étudier les océans"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Le bateau intelligent fonctionne à l'énergie solaire.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Marine va aussi arrêter son smartphone.", ok: false, explain: "« Ah non, pas cette semaine ! »" },
    { type: "mcq", tag: "Dialogue 4", q: "Théo aura un smartphone…", options: ["quand il aura quinze ans", "s'il a de bonnes notes", "à Noël"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "L'équipe a gagné quatre compétitions.", ok: true },
    { type: "fill", tag: "Futur simple", sentence: "Demain, je ___ ma voiture pour aller au travail.", options: ["prendrai", "prendra", "prendre"], answer: 0 },
    { type: "fill", tag: "Futur simple", sentence: "Quand nous ___ au salon, tu viendras avec nous ?", options: ["irons", "iront", "allons"], answer: 0 },
    { type: "fill", tag: "Futur simple", sentence: "Les robots ___ toutes les tâches ménagères.", options: ["feront", "ferons", "fera"], answer: 0 },
    { type: "fill", tag: "Futur simple", sentence: "Dans le futur, il y ___ des robots partout.", options: ["aura", "sera", "a"], answer: 0 },
    { type: "fill", tag: "Futur simple", sentence: "Un jour, nous nous ___ en voiture autonome.", options: ["déplacerons", "déplaçons", "déplacerez"], answer: 0 },
    { type: "type", tag: "Futur simple", q: "Futur simple: « Les gens peuvent se téléporter. » (Un jour…)", answers: ["Un jour, les gens pourront se téléporter.", "Un jour les gens pourront se téléporter.", "Les gens pourront se téléporter."] },
    { type: "fill", tag: "Utilité", sentence: "Ce robot sert ___ faire le ménage.", options: ["à", "de", "pour le"], answer: 0 },
    { type: "fill", tag: "Utilité", sentence: "Cette appli permet ___ trouver un restaurant.", options: ["de", "à", "pour"], answer: 0 },
    { type: "fill", tag: "si / quand", sentence: "Si tu ___ ce smartphone, tu pourras installer des applis.", options: ["achètes", "achèteras", "achetais"], answer: 0 },
    { type: "fill", tag: "si / quand", sentence: "Quand tu ___ 18 ans, je t'achèterai un ordinateur.", options: ["auras", "as", "aurais"], answer: 0 },
    { type: "fill", tag: "si / quand", sentence: "Si tu veux écouter de la musique, ___ cette application !", options: ["télécharge", "téléchargeras", "télécharges"], answer: 0 },
    { type: "fill", tag: "si / quand", sentence: "En général, si je dois aller dans un endroit inconnu, je ___ mon GPS.", options: ["mets", "mettrai", "mettrais"], answer: 0 },
    { type: "type", tag: "si / quand", q: "Complete with the future: « Si l'ordinateur tombe en panne, j'(appeler) … le réparateur. »", answers: ["Si l'ordinateur tombe en panne, j'appellerai le réparateur.", "j'appellerai", "appellerai"] },
    { type: "mcq", tag: "Le pronom on", q: "« On a volé mon téléphone ! » Ici, on =", options: ["quelqu'un", "nous", "les gens"], answer: 0 },
    { type: "mcq", tag: "Le pronom on", q: "« On va au cinéma ce soir ? » Ici, on =", options: ["nous", "quelqu'un", "les gens"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Je vais vivre une semaine sans téléphone !", options: ["Sérieux ? C'est pas possible !", "Il sert à téléphoner.", "J'espère que tu as faim."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "À quoi sert cet appareil ?", options: ["Il permet de recharger le téléphone avec le soleil.", "Il y aura des robots.", "Ah bon ?"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Notre équipe joue la finale demain.", options: ["J'espère que vous gagnerez !", "Ça sert à jouer.", "On a volé."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "« Tomber en panne », c'est…", options: ["arrêter de fonctionner", "tomber par terre", "être très pratique"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Le contraire de « allumer » :", options: ["éteindre", "décrocher", "télécharger"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "En Belgique, un téléphone portable s'appelle…", options: ["un gsm", "un natel", "un cellulaire"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["le clavier", "la souris", "l'écran", "la navette"], answer: 3, explain: "la navette is a vehicle; the others are computer parts." },
    { type: "order", tag: "Construisez", en: "One day, robots will do the housework.", words: ["Un", "jour,", "les", "robots", "feront", "le", "ménage."] },
    { type: "listen", tag: "Écoute", q: "When will the speaker buy a 3D printer?", say: "L'année prochaine, j'achèterai une imprimante 3D pour fabriquer des jouets.", options: ["next year", "this year", "when it's cheaper"], answer: 0 }
  ],

  roleplays: [
    { title: "🚀 Ma ville en 2050", brief: "A friend asks how you imagine your city in 2050. Use the futur simple.", memo: ["Bientôt…", "Un jour…", "Dans le futur…", "il y aura…"], partner: "f8", you: "m2",
      turns: [
        { them: "Comment tu imagines notre ville en 2050 ?", themEn: "How do you imagine our city in 2050?", hint: "There will be no more cars; we'll take autonomous shuttles.", you: "Il n'y aura plus de voitures : on prendra des navettes autonomes.", youEn: "There'll be no more cars: we'll take autonomous shuttles." },
        { them: "Et les maisons ?", themEn: "And the houses?", hint: "They'll work on solar energy.", you: "Elles fonctionneront à l'énergie solaire.", youEn: "They'll run on solar energy." },
        { them: "Et le travail ?", themEn: "And work?", hint: "Robots will do the boring tasks; we'll have more free time.", you: "Les robots feront les tâches ennuyeuses et nous aurons plus de temps libre.", youEn: "Robots will do the boring tasks and we'll have more free time." }
      ] },
    { title: "🖨️ Présente ton invention", brief: "At an innovation fair, you present an invention to a curious visitor.", memo: ["Ça sert à…", "Ça permet de…", "C'est très pratique !", "Si…, il…"], partner: "f3", you: "m3",
      turns: [
        { them: "Bonjour ! Qu'est-ce que c'est ?", themEn: "Hello! What's this?", hint: "A solar charger; it's used to charge your phone during walks.", you: "C'est un chargeur solaire. Il sert à recharger votre téléphone pendant vos balades.", youEn: "It's a solar charger. It's used to charge your phone on your walks." },
        { them: "Ah bon ? Et s'il n'y a pas de soleil ?", themEn: "Really? And if there's no sun?", hint: "If there's no sun, it will use its battery.", you: "S'il n'y a pas de soleil, il utilisera sa batterie.", youEn: "If there's no sun, it'll use its battery." },
        { them: "C'est pratique !", themEn: "That's handy!", hint: "Say it's very useful for the planet too.", you: "Oui, et c'est une invention très utile pour la planète !", youEn: "Yes, and it's a very useful invention for the planet!" }
      ] },
    { title: "📱 Je voudrais un portable", brief: "You're a teenager negotiating a phone with your parent. Use si and quand.", memo: ["Si j'ai…, je pourrai…", "Quand j'aurai…", "Si tu…, tu…"], partner: "f3", you: "k2",
      turns: [
        { them: "Pourquoi tu veux un portable ?", themEn: "Why do you want a phone?", hint: "If you have one, you'll be able to call when you're late.", you: "Si j'ai un portable, je pourrai t'appeler quand je serai en retard.", youEn: "If I have a phone, I'll be able to call you when I'm late." },
        { them: "Tu vas passer ta vie sur les jeux…", themEn: "You'll spend your life on games…", hint: "Promise: if you play too much, she can take it.", you: "Si je joue trop, tu pourras le reprendre !", youEn: "If I play too much, you can take it back!" },
        { them: "Bon. Quand tu auras ton brevet, on verra.", themEn: "OK. When you get your school certificate, we'll see.", hint: "Thank her and say you'll work hard.", you: "Merci ! Je travaillerai beaucoup, promis !", youEn: "Thanks! I'll work hard, I promise!" }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Faire l'interview d'un(e) scientifique", intro: "In groups, read about a scientist and their invention or discovery, then act out a TV interview in front of the class.",
      steps: [["Préparation", ["Choose a scientist (for example: Arthur Zang, Marie Curie, the Montgolfier brothers) and read the key facts.", "You can look for more information and pictures of the invention or discovery."]], ["Réalisation", ["Write the journalists' questions and the scientist's answers from the facts.", "Share the roles: journalist 1 asks about the key moments (how did you get the idea?), journalist 2 about the invention (what's it for? what are its features?), the scientist answers."]], ["Présentation", ["Act out the interview in front of the class, with pictures if you like.", "Then the other groups can ask new questions.", "Strategy: explain clearly and simply, avoid technical words, and speak naturally without reading your notes."]]],
      phrases: ["Comment avez-vous eu cette idée ?", "Cette invention sert à…", "Elle est révolutionnaire parce que…", "Dans le futur, elle permettra de…"],
      model: { type: "card", style: "board", caption: "🔬 Three scientists · tap a line", title: "INTERVIEW D'UN(E) SCIENTIFIQUE", sub: "les informations clés", rows: [["Arthur Zang", "ingénieur et informaticien camerounais · le CardioPad, une tablette pour examiner le cœur à distance · aujourd'hui vendue en Afrique et en Asie", "Arthur Zang est un ingénieur camerounais. Il a inventé le CardioPad, une tablette qui sert à examiner le cœur à distance."], ["Marie Curie", "physicienne polonaise, naturalisée française · découverte du radium et du polonium · prix Nobel de physique (1903) et de chimie (1911)", "Marie Curie est la seule femme avec deux prix Nobel dans deux domaines scientifiques."], ["Les frères Montgolfier", "inventeurs français · la montgolfière, un ballon à air chaud · 1783 : premier vol avec deux hommes à bord, à Paris", "En mille sept cent quatre-vingt-trois, la montgolfière a fait son premier vol avec deux hommes à bord."]], foot: "Préparez des explications claires et simples !" } }
  ],
  delf: {
    skill: "Compréhension des écrits", title: "The DELF A2 reading paper: strategies",
    about: "The DELF A2 <b>compréhension des écrits</b> lasts 30 minutes and has 4 exercises on everyday documents: <b>1.</b> precise information in a short public document (ad, advert, menu, sign…); <b>2.</b> the key information in a letter or message (personal or administrative); <b>3.</b> instructions in a practical document (safety rules, user guide…); <b>4.</b> an informative document (newspaper article, tourist guide…). Here: exercise 1 · you want to give your French friends a tech present.",
    tips: ["Read each instruction carefully before you start.", "Identify the type of document and ask: <b>Who</b> is writing? To <b>whom</b>? <b>When</b>? <b>Why</b>?", "The questions follow the order of the documents.", "In matching tasks, there are more people than documents: cross out each document once used."],
    items: [
      { type: "mcq", q: "« Restez connecté(e) pendant vos activités sportives ! Cette montre indique les kilomètres parcourus. » C'est pour…", options: ["Amalia, très sportive", "Charles, qui n'aime pas le ménage", "Oscar, très gourmand"], answer: 0 },
      { type: "mcq", q: "« Vous détestez nettoyer ? Ce robot-aspirateur le fait à votre place ! » C'est pour…", options: ["Charles, qui n'aime pas faire le ménage", "Nadia, stressée par son travail", "Vincent, qui apprend à conduire"], answer: 0 },
      { type: "mcq", q: "« Ce chargeur solaire, pratique et écologique, sera votre meilleur ami pendant vos promenades. » C'est pour…", options: ["Jérémy, qui aime la nature et déteste gaspiller", "Sophie, qui passe du temps sur les écrans", "Oscar, très gourmand"], answer: 0 },
      { type: "mcq", q: "« En 30 minutes, ce coussin de massage vous offrira une détente complète. » C'est pour…", options: ["Nadia, stressée par son travail", "Amalia, très sportive", "François, qui adore les animaux"], answer: 0 },
      { type: "mcq", q: "« Cet assistant d'aide à la conduite vous indiquera les meilleurs chemins. » C'est pour…", options: ["Vincent, qui apprend à conduire", "Jérémy, qui aime la nature", "Charles, qui n'aime pas le ménage"], answer: 0 },
      { type: "mcq", q: "In a DELF A2 reading paper, the questions are…", options: ["in the order of the documents", "in random order", "always about the last document"], answer: 0 }
    ]
  },
  detente: {
    title: "Des inventions et des découvertes",
    intro: "Who invented or discovered what? (Facts from the book's atelier, plus two famous French inventions.)",
    items: [
      { type: "mcq", q: "La montgolfière (ballon à air chaud, premier vol habité en 1783) a été inventée par…", options: ["les frères Montgolfier", "Marie Curie", "Arthur Zang"], answer: 0 },
      { type: "mcq", q: "Le radium et le polonium ont été découverts par…", options: ["Marie Curie (et Pierre Curie)", "les frères Montgolfier", "Louis Braille"], answer: 0 },
      { type: "mcq", q: "Le CardioPad, une tablette pour examiner le cœur à distance, a été inventé par…", options: ["Arthur Zang, ingénieur camerounais", "Marie Curie", "un robot"], answer: 0 },
      { type: "mcq", q: "L'alphabet en relief pour les personnes aveugles a été inventé par…", options: ["Louis Braille", "Arthur Zang", "les frères Lumière"], answer: 0 },
      { type: "mcq", q: "Le cinématographe (1895) a été inventé par…", options: ["les frères Lumière", "les frères Montgolfier", "Marie Curie"], answer: 0 },
      { type: "mcq", q: "Le concours Lépine récompense…", options: ["des inventeurs", "des cuisiniers", "des footballeurs"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "pics", title: "📱 « Portable » in the French-speaking world · tap to hear", items: [
      { t: "le portable", pic: "🇫🇷", en: "France" }, { t: "le natel", pic: "🇨🇭", en: "Switzerland" }, { t: "le gsm", pic: "🇧🇪", en: "Belgium" }, { t: "le cellulaire, le cell", pic: "🇨🇦", en: "Québec" }
    ] }
  ],
  culture: [
    { icon: "🗣️", kind: "Oh, le cliché !", t: "« Les Français sont mauvais en langues étrangères. »", d: "According to the Education First English-proficiency ranking quoted by the book (source: actu.fr), France only comes 28th. Yet French pupils learn at least <b>two</b> foreign languages at school." },
    { icon: "🧑‍🚀", kind: "Civilisation", t: "Un Français dans l'espace", d: "<b>Thomas Pesquet</b> is a French astronaut of the European Space Agency (ESA) who has stayed on the International Space Station (ISS). From space he shared selfies and views of the Earth on social media: he chooses the messages, and his communication team on the ground posts them. The documentary <i>16 levers de soleil</i> refers to the 16 sunrises astronauts see every day." },
    { icon: "⚽", kind: "Au fait !", t: "La RoboCup", d: "A world competition where teams of engineers make robots play football. The organisers' dream: a robot team able to beat the human world champions by 2050." },
    { icon: "💡", kind: "Au fait !", t: "Le concours Lépine", d: "A famous French competition for inventors, created in 1901 and held every year in Paris. The book mentions it: <i>Si tu gagnes le concours Lépine, ton invention deviendra célèbre !</i>" },
    { icon: "🫀", kind: "Francophonie", t: "Arthur Zang et le CardioPad", d: "A Cameroonian engineer and computer scientist who created the CardioPad, a tablet to examine the heart remotely, so patients far from cardiologists can be diagnosed. His company now sells it in several countries in Africa and Asia." },
    { icon: "📵", kind: "Civilisation", t: "La « détox digitale »", d: "More and more people try to use their phones less: planning routes in advance, reading during breaks, leaving the phone at home for short errands, telling contacts they'll answer more slowly." }
  ],
  tips: [
    { icon: "🔮", t: "Future = infinitive + avoir endings", d: "parler + ai = [[je parlerai]]. Learn the 12 irregular stems by heart: aur-, ser-, fer-, ir-, verr-…" },
    { icon: "🚫", t: "No future after si", d: "[[Si tu viens, je serai content.]] Never <s>si tu viendras</s>." },
    { icon: "⏳", t: "quand + future", d: "English: <i>when you are 18</i>. French: [[quand tu auras 18 ans]]." }
  ],
  mistakes: [
    ["Si tu viendras, on ira au salon.", "Si tu viens, on ira au salon.", "si + présent"],
    ["Quand tu as 18 ans, tu auras une voiture.", "Quand tu auras 18 ans, tu auras une voiture.", "quand + futur"],
    ["Je prendreai le train.", "Je prendrai le train.", "-re: drop the e"],
    ["Nous allerons au salon.", "Nous irons au salon.", "aller → ir-"],
    ["Il y sera des robots.", "Il y aura des robots.", "il y a → il y aura"],
    ["Ça sert de créer des plats.", "Ça sert à créer des plats.", "servir à"],
    ["Ça permet à faire des formes.", "Ça permet de faire des formes.", "permettre de"],
    ["On sont allés au cinéma.", "On est allés au cinéma.", "on + 3rd person singular"]
  ]
});
