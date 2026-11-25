// Unité 2 · Je me souviens (Édito A2, 2e édition, book pp. 27–40)
// Situations: souvenirs d'enfance · les vieilles photos · un souvenir de voyage · parler de la météo · les souvenirs de vacances
// Grammar: l'imparfait (formation, description, habitude) · les pronoms y et en (lieux) · la place de l'adjectif
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u02", rubrique: 1, num: 2,
  title: "I remember",
  titleFr: "Je me souviens",
  pages: "Book pp. 27–40",
  opener: { fr: "Ce sont des souvenirs inoubliables !", en: "These are unforgettable memories!" },
  hero: { scene: "maison", people: { "Mamie": "f6", "Lina": "f7", "Théo": "k2" } },
  situations: [
    ["🍓", "Mes souvenirs d'enfance", "tastes, smells, sounds: [[Je me souviens des confitures de ma grand-mère. Ça sentait bon !]]"],
    ["📸", "Les vieilles photos", "liking and not liking: [[Ça me plaît bien de revoir ces photos !]] · [[J'ai horreur de ça !]]"],
    ["🎭", "Avec mon grand-père", "describing the past: [[Il venait me chercher à l'école, ça me rendait heureux.]]"],
    ["🏝️", "Un voyage inoubliable", "asking about a memory: [[Quels souvenirs vous gardez de votre voyage ?]] · [[J'en reviens enchanté !]]"],
    ["🌦️", "Il fait quel temps ?", "weather and landscapes: [[Il fait un temps gris…]] · [[Au sommet, la vue est magnifique.]]"]
  ],
  goals: [
    "Tell a memory: [[Je me souviens de…]], [[Je me rappelle…]], [[Ça me rappelle…]], [[C'est gravé dans ma mémoire.]]",
    "Use the imparfait to describe a past scene and past habits: [[Le matin, je mangeais mes tartines.]]",
    "Say you like or dislike something: [[Ça me plaît bien.]], [[J'adore !]], [[Je n'aime pas du tout !]], [[J'ai horreur de ça !]]",
    "Ask about someone's memory: [[Quels souvenirs vous gardez de votre expérience ?]], [[Vous allez recommencer ?]]",
    "Replace a place with [[y]] (where you are / go) or [[en]] (where you come from): [[J'y vais.]] · [[J'en reviens.]]",
    "Put adjectives in the right place: [[un petit hôtel]], [[une affiche rétro]], [[de jolies affiches touristiques]]",
    "Describe landscapes and the weather: [[la plage]], [[le sommet]], [[la canicule]], [[un temps sec]]"
  ],
  glance: [
    ["🗣️", "Communication", "telling and asking about memories · likes and dislikes · landscapes · the weather"],
    ["🧩", "Grammaire", "the imparfait · y and en for places · the position of adjectives"],
    ["🗂️", "Vocabulaire", "memory · types of memories · the five senses · sea, countryside, mountains · the weather"],
    ["🔊", "Phonie-graphie", "compulsory liaisons: [z], [n], [t], [ʁ]"],
    ["⭐", "The phrase to learn first", "[[Je me souviens de…]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Grandma's jam", titleFr: "Chez Mamie · Saveurs d'enfance",
      note: "Lina visits her grandmother and remembers her childhood holidays in Corsica. Listen to the imparfait for <b>habits</b> and <b>descriptions</b>.",
      scene: "maison", people: { "Lina": "f7", "Mamie": "f6" },
      lines: [
        ["Lina", "Hum… Ça sent la confiture d'abricots ! Ça me rappelle la Corse.", "Mmm… It smells of apricot jam! It reminds me of Corsica."],
        ["Mamie", "Tu te souviens de notre maison là-bas ?", "Do you remember our house there?"],
        ["Lina", "Bien sûr ! Je me souviens des confitures que tu faisais. Le matin, je mangeais mes tartines et je te tenais la main.", "Of course! I remember the jams you used to make. In the morning I ate my bread and jam and held your hand."],
        ["Mamie", "Et tu me demandais toujours de tremper ton pain dans mon café !", "And you always asked me to dip your bread in my coffee!"],
        ["Lina", "Oui ! Et le soir, avec Papi, on regardait les étoiles, allongés dans l'herbe. C'est gravé dans ma mémoire.", "Yes! And in the evening, with Grandpa, we'd look at the stars, lying in the grass. It's etched in my memory."],
        ["Mamie", "Il adorait ça. Il te montrait la Grande Ourse…", "He loved that. He used to show you the Great Bear…"],
        ["Lina", "Cette confiture, c'est ma madeleine de Proust !", "This jam is my madeleine de Proust!"]
      ],
      glossary: [["Ça me rappelle…", "It reminds me of…"], ["Je me souviens de…", "I remember…"], ["la tartine", "bread with butter / jam"], ["une madeleine de Proust", "something that brings back a childhood memory"]]
    },
    {
      id: "d2", n: 2, title: "Old photos", titleFr: "Le dimanche · Revivre de beaux moments",
      note: "Mélina finds an old photo album. Her sister Aurore hates old photos; Nino loves them. Listen to how they say they like or dislike something.",
      scene: "appartement", people: { "Mélina": "f3", "Aurore": "f8", "Nino": "m3" },
      lines: [
        ["Mélina", "Regardez ce que j'ai trouvé : notre vieil album photos !", "Look what I found: our old photo album!"],
        ["Aurore", "Oh non… J'ai horreur de ça, les vieilles photos !", "Oh no… I hate that, old photos!"],
        ["Nino", "Moi, j'adore ! Montre-moi Mélina petite !", "I love it! Show me Mélina as a little girl!"],
        ["Mélina", "Là, c'est nous à la plage. On partait tous les étés en Bretagne. Ça me plaît bien de revoir ces photos !", "There, that's us at the beach. We went to Brittany every summer. I really like seeing these photos again!"],
        ["Aurore", "Et ça, c'est la photo de classe… J'avais des lunettes énormes. Je n'aime pas du tout cette photo !", "And that's the class photo… I had enormous glasses. I don't like this photo at all!"],
        ["Mélina", "Mais si, elle est mignonne ! Et là, le jour de ta compétition de natation : tu as gagné !", "Oh yes it is, it's cute! And there, the day of your swimming competition: you won!"],
        ["Aurore", "Pour toi c'est un bon souvenir ; moi, j'avais très peur ce jour-là !", "For you it's a good memory; I was really scared that day!"],
        ["Nino", "Les albums, c'est génial : avec le téléphone, on ne regarde jamais nos photos !", "Albums are great: with our phones, we never look at our photos!"]
      ],
      glossary: [["J'ai horreur de ça !", "I hate that!"], ["Ça me plaît bien.", "I really like it."], ["On partait tous les étés.", "We went every summer (habit)."], ["la photo de classe", "the school photo"]]
    },
    {
      id: "d3", n: 3, title: "Off to see Guignol", titleFr: "Au café · Souvenirs de famille",
      note: "Bastien tells a friend about his grandfather, who took him to the puppet show in Lyon. The imparfait describes the scene and the habits.",
      scene: "cafe", staff: "La serveuse", people: { "La serveuse": "f5", "Bastien": "m2", "Inès": "f2" },
      lines: [
        ["Inès", "Tu as l'air ému. Tu penses à quoi ?", "You look moved. What are you thinking about?"],
        ["Bastien", "À mon grand-père. Le mercredi, il venait me chercher à l'école. Ça me rendait heureux !", "My grandfather. On Wednesdays he'd come and pick me up from school. It made me happy!"],
        ["Inès", "Et vous faisiez quoi ?", "And what did you do?"],
        ["Bastien", "On allait voir Guignol. On prenait le bus, on traversait toute la ville : pour moi, c'était une expédition !", "We went to see Guignol. We took the bus, we crossed the whole city: for me, it was an expedition!"],
        ["Inès", "Tu étais un aventurier !", "You were an adventurer!"],
        ["Bastien", "Oui ! Et je demandais à chaque minute : « On arrive bientôt ? » Il regardait sa montre, il était toujours en retard. On courait pour ne pas rater le début !", "Yes! And I asked every minute: “Are we nearly there?” He'd look at his watch, he was always late. We ran so as not to miss the beginning!"],
        ["Inès", "Il était comment, ton grand-père ?", "What was your grandfather like?"],
        ["Bastien", "Il changeait de métier tout le temps. Il ressemblait plus à un acteur qu'à un homme ordinaire.", "He changed jobs all the time. He looked more like an actor than an ordinary man."]
      ],
      glossary: [["il venait me chercher", "he used to pick me up"], ["Guignol", "a Lyon puppet character (c. 1808)"], ["rater", "to miss"], ["ressembler à", "to look like"]]
    },
    {
      id: "d4", n: 4, title: "An unforgettable trip", titleFr: "À la radio · Quelle expérience !",
      note: "A radio host interviews Emmanuel about his trip to Mauritius. Listen to the questions about a memory, and to [[y]] (there) and [[en]] (from there).",
      scene: "plage", staff: "L'animatrice", people: { "L'animatrice": "f5", "Emmanuel": "m1" },
      lines: [
        ["L'animatrice", "Emmanuel, vous rentrez de l'île Maurice. Quels souvenirs vous gardez de votre voyage ?", "Emmanuel, you've just come back from Mauritius. What memories do you keep of your trip?"],
        ["Emmanuel", "Des souvenirs inoubliables ! C'est une île très touristique, mais on y trouve des endroits calmes et magiques.", "Unforgettable memories! It's a very touristy island, but you find calm, magical places there."],
        ["L'animatrice", "Quel est votre plus beau souvenir ?", "What's your best memory?"],
        ["Emmanuel", "Le Morne Brabant. On y monte en quelques heures, la randonnée est assez facile. Au sommet, la vue sur la barrière de corail est magnifique.", "The Morne Brabant. You climb it in a few hours, the hike is fairly easy. At the top, the view over the coral reef is magnificent."],
        ["L'animatrice", "Et le climat ?", "And the climate?"],
        ["Emmanuel", "Il y fait chaud, mais il y a du vent. On en revient enchanté !", "It's hot there, but there's wind. You come back from it enchanted!"],
        ["L'animatrice", "Vous allez recommencer l'expérience ?", "Will you do it again?"],
        ["Emmanuel", "Oui ! J'y retourne l'année prochaine, avec ma famille cette fois.", "Yes! I'm going back there next year, with my family this time."]
      ],
      glossary: [["on y trouve…", "you find… there"], ["on en revient…", "you come back from there…"], ["le sommet", "the summit"], ["la barrière de corail", "the coral reef"]]
    },
    {
      id: "d5", n: 5, title: "Weather talk", titleFr: "À l'arrêt de bus · Parlons météo !",
      note: "Two neighbours wait for the bus and talk about the weather: the classic French small talk!",
      scene: "arret", people: { "Mme Petit": "f6", "M. Diallo": "m4" },
      lines: [
        ["Mme Petit", "Tu as vu cette pluie ? On va avoir ce temps gris tout le week-end ?", "Have you seen this rain? Are we going to have this grey weather all weekend?"],
        ["M. Diallo", "D'après la météo, oui. Et des orages dimanche !", "According to the forecast, yes. And storms on Sunday!"],
        ["Mme Petit", "Quand j'étais petite, l'été, il faisait toujours beau…", "When I was little, it was always sunny in summer…"],
        ["M. Diallo", "Moi, je préfère la fraîcheur. Le mois dernier, avec la canicule, il faisait quarante degrés à Paris !", "I prefer it cool. Last month, with the heatwave, it was forty degrees in Paris!"],
        ["Mme Petit", "C'est vrai. Ma fille est partie dans le Cotentin : il y faisait quinze degrés de moins !", "True. My daughter went to the Cotentin: it was fifteen degrees cooler there!"],
        ["M. Diallo", "Ah, le bus arrive enfin ! Bon week-end, même sous la pluie !", "Ah, the bus is finally coming! Have a good weekend, even in the rain!"]
      ],
      glossary: [["un temps gris / humide / sec", "grey / humid / dry weather"], ["l'orage", "the storm"], ["la canicule", "the heatwave"], ["la fraîcheur ≠ la chaleur", "coolness ≠ heat"]]
    },
    {
      id: "d6", n: 6, title: "Holiday souvenirs", titleFr: "À Carcassonne · La boutique de souvenirs",
      note: "Clara and her dad shop for souvenirs in Carcassonne. Listen to where the adjectives go: before or after the noun?",
      scene: "grandmagasin", staff: "La vendeuse", people: { "La vendeuse": "f5", "Clara": "f7", "Le père": "m6" },
      lines: [
        ["Clara", "Papa, regarde ces affiches rétro ! Elles sont super jolies.", "Dad, look at these retro posters! They're really pretty."],
        ["La vendeuse", "Ce sont de vieilles affiches touristiques des années 1930. On les réimprime : elles ont beaucoup de succès !", "They're old tourist posters from the 1930s. We reprint them: they're very popular!"],
        ["Le père", "J'aime bien celle-là : la cité médiévale avec un grand ciel bleu.", "I like that one: the medieval city with a big blue sky."],
        ["Clara", "Et pour Mamie ? Un petit mug ou un magnet ?", "And for Grandma? A little mug or a magnet?"],
        ["Le père", "Non, plutôt une spécialité locale. Elle adore les bons produits.", "No, rather a local speciality. She loves good produce."],
        ["La vendeuse", "Nous avons d'excellentes confitures régionales et de délicieux biscuits.", "We have excellent regional jams and delicious biscuits."],
        ["Clara", "Parfait ! Et moi, je prends cette affiche : je vais l'accrocher dans ma propre chambre !", "Perfect! And I'll take this poster: I'm going to hang it in my own bedroom!"]
      ],
      glossary: [["une affiche rétro", "a retro poster"], ["de vieilles affiches", "old posters (de before a plural adjective)"], ["la cité médiévale", "the medieval citadel"], ["ma propre chambre", "my own bedroom"]]
    }
  ],

  vocab: [
    { t: "se souvenir de", en: "to remember", pic: "💭", cat: "La mémoire", note: "[[Je me souviens de mon enfance.]]" },
    { t: "se rappeler", en: "to remember, recall", pic: "🧠", cat: "La mémoire", note: "[[Je me rappelle ce jour.]] (no de)" },
    { t: "oublier", en: "to forget", pic: "❓", cat: "La mémoire" },
    { t: "raconter un souvenir", en: "to tell a memory", pic: "🗣️", cat: "La mémoire" },
    { t: "replonger dans son enfance", en: "to go back to one's childhood", pic: "🧸", cat: "La mémoire" },
    { t: "l'album photos", en: "the photo album", pic: "📔", cat: "La mémoire", g: "m" },
    { t: "un souvenir d'enfance", en: "a childhood memory", pic: "🧒", cat: "Les souvenirs", g: "m" },
    { t: "un souvenir d'école", en: "a school memory", pic: "🏫", cat: "Les souvenirs", g: "m" },
    { t: "un souvenir de vacances", en: "a holiday memory / souvenir", pic: "🏖️", cat: "Les souvenirs", g: "m" },
    { t: "un souvenir de famille", en: "a family memory", pic: "👨‍👩‍👧", cat: "Les souvenirs", g: "m" },
    { t: "un souvenir de jeunesse", en: "a memory from one's youth", pic: "🛼", cat: "Les souvenirs", g: "m" },
    { t: "inoubliable", en: "unforgettable", pic: "🌟", cat: "Qualifier un souvenir" },
    { t: "heureux, heureuse · joyeux, joyeuse", en: "happy · joyful", pic: "😊", cat: "Qualifier un souvenir" },
    { t: "agréable", en: "pleasant", pic: "🙂", cat: "Qualifier un souvenir" },
    { t: "triste", en: "sad", pic: "😢", cat: "Qualifier un souvenir" },
    { t: "difficile", en: "difficult", pic: "😣", cat: "Qualifier un souvenir" },
    { t: "mauvais", en: "bad", pic: "👎", cat: "Qualifier un souvenir" },
    { t: "la vue, voir, regarder", en: "sight, to see, to look", pic: "👀", cat: "Les sens", g: "f" },
    { t: "l'odeur, sentir bon ≠ sentir mauvais", en: "smell, to smell good ≠ bad", pic: "👃", cat: "Les sens", g: "f" },
    { t: "le parfum", en: "the scent, perfume", pic: "🌸", cat: "Les sens", g: "m" },
    { t: "le goût, goûter", en: "taste, to taste", pic: "👅", cat: "Les sens", g: "m" },
    { t: "la saveur", en: "the flavour", pic: "🍯", cat: "Les sens", g: "f" },
    { t: "le bruit", en: "the noise, sound", pic: "🔊", cat: "Les sens", g: "m" },
    { t: "le chant des oiseaux", en: "birdsong", pic: "🐦", cat: "Les sens", g: "m" },
    { t: "tenir la main", en: "to hold someone's hand", pic: "🤝", cat: "Les sens" },
    { t: "la plage", en: "the beach", pic: "🏖️", cat: "À la mer", g: "f" },
    { t: "le sable", en: "sand", pic: "⏳", cat: "À la mer", g: "m" },
    { t: "la côte", en: "the coast", pic: "🌊", cat: "À la mer", g: "f" },
    { t: "le port", en: "the harbour", pic: "⚓", cat: "À la mer", g: "m" },
    { t: "l'île", en: "the island", pic: "🏝️", cat: "À la mer", g: "f" },
    { t: "la dune", en: "the dune", pic: "🏜️", cat: "À la mer", g: "f" },
    { t: "la mouette", en: "the seagull", pic: "🕊️", cat: "À la mer", g: "f" },
    { t: "à marée basse ≠ à marée haute", en: "at low tide ≠ at high tide", pic: "🌊", cat: "À la mer" },
    { t: "la barrière de corail", en: "the coral reef", pic: "🪸", cat: "À la mer", g: "f" },
    { t: "le champ", en: "the field", pic: "🌾", cat: "À la campagne", g: "m" },
    { t: "la ferme", en: "the farm", pic: "🚜", cat: "À la campagne", g: "f" },
    { t: "la prairie", en: "the meadow", pic: "🌼", cat: "À la campagne", g: "f" },
    { t: "le chalet", en: "the chalet", pic: "🛖", cat: "À la montagne", g: "m" },
    { t: "le lac", en: "the lake", pic: "🏞️", cat: "À la montagne", g: "m" },
    { t: "le sommet", en: "the summit", pic: "🏔️", cat: "À la montagne", g: "m" },
    { t: "le climat", en: "the climate", pic: "🌍", cat: "La météo", g: "m" },
    { t: "la température, les degrés", en: "temperature, degrees", pic: "🌡️", cat: "La météo", g: "f" },
    { t: "la canicule", en: "the heatwave", pic: "🥵", cat: "La météo", g: "f" },
    { t: "la chaleur ≠ la fraîcheur", en: "heat ≠ coolness", pic: "☀️", cat: "La météo", g: "f" },
    { t: "l'orage", en: "the thunderstorm", pic: "⛈️", cat: "La météo", g: "m" },
    { t: "la pluie", en: "rain", pic: "🌧️", cat: "La météo", g: "f" },
    { t: "le vent", en: "wind", pic: "💨", cat: "La météo", g: "m" },
    { t: "le ciel bleu, gris", en: "blue, grey sky", pic: "🌤️", cat: "La météo", g: "m" },
    { t: "un temps humide ≠ un temps sec", en: "humid ≠ dry weather", pic: "💧", cat: "La météo", g: "m" }
  ],

  grammar: [
    {
      id: "g-souvenir",
      title: "Telling a memory · the five senses",
      body: [
        "[[Je me souviens de]] + noun: [[Je me souviens des confitures de ma grand-mère.]] · [[Je me rappelle]] + noun (no <i>de</i>): [[Je me rappelle ses mots.]] · [[Ça me rappelle la Corse.]] · [[C'est gravé dans ma mémoire.]] · [[Impossible d'oublier !]]",
        "Memories come through the senses: [[Ça sentait bon !]] (smell) · [[Quelles saveurs !]] (taste) · [[le chant des oiseaux]] (hearing) · [[la vue sur la mer]] (sight) · [[Je lui tenais la main.]] (touch)."
      ],
      info: { type: "pics", title: "🖐️ The five senses · tap to hear", items: [
        { t: "la vue · voir, regarder", pic: "👀", en: "sight" }, { t: "l'odorat · sentir, l'odeur", pic: "👃", en: "smell" }, { t: "le goût · goûter, la saveur", pic: "👅", en: "taste" },
        { t: "l'ouïe · entendre, le bruit", pic: "👂", en: "hearing" }, { t: "le toucher · tenir la main", pic: "✋", en: "touch" }
      ] }
    },
    {
      id: "g-imparfait",
      title: "The imparfait: describing the past and past habits",
      body: [
        "Use: to <b>describe a past scene</b> ([[Il était excité.]] · [[Ça sentait bon.]]) or a <b>past habit</b> ([[Le matin, je mangeais mes tartines.]]).",
        "Form: the <b>nous</b> stem of the present + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>: nous <b>chang</b>eons → je changeais; nous <b>fais</b>ons → je faisais. Only exception: [[être]] → [[j'étais]].",
        "Habit words: [[à cette époque]], [[souvent]], [[chaque jour]], [[tous les jours]], [[toutes les semaines]], [[de temps en temps]], [[parfois]], [[toujours]], [[tout le temps]]."
      ],
      info: [
        { type: "conj", title: "🔁 The imparfait", verbs: [
          { inf: "avoir", en: "to have", forms: ["j'avais", "tu avais", "il / elle / on avait", "nous avions", "vous aviez", "ils / elles avaient"] },
          { inf: "être", en: "to be (irregular stem ét-)", forms: ["j'étais", "tu étais", "il / elle / on était", "nous étions", "vous étiez", "ils / elles étaient"] },
          { inf: "se déplacer", en: "to get around (ç before a)", forms: ["je me déplaçais", "tu te déplaçais", "il / elle / on se déplaçait", "nous nous déplacions", "vous vous déplaciez", "ils / elles se déplaçaient"] }
        ] },
        { type: "merge", title: "⚙️ From the nous form to the imparfait", rows: [
          { a: "nous aimons", b: "-ais", g: "x", r: "j'aimais", ex: "J'aimais les confitures.", en: "aim-" },
          { a: "nous faisons", b: "-ait", g: "x", r: "il faisait", ex: "Il faisait toujours beau.", en: "fais-" },
          { a: "nous allons", b: "-ions", g: "x", r: "nous allions", ex: "Nous allions voir Guignol.", en: "all-" },
          { a: "nous prenons", b: "-aient", g: "x", r: "ils prenaient", ex: "Ils prenaient le bus.", en: "pren-" },
          { a: "nous sommes", b: "→ ét-", g: "x", r: "j'étais", ex: "J'étais un aventurier.", en: "the only exception", no: true }
        ] }
      ],
      widget: {
        type: "combo", label: "Past habits · pick a subject and a habit",
        rows: [{ k: "je", label: "je / j'" }, { k: "nous", label: "nous" }, { k: "ils", label: "mes grands-parents" }],
        cols: [{ k: "partir", label: "🏖️ partir en Bretagne tous les étés" }, { k: "manger", label: "🍓 manger des confitures le matin" }, { k: "aller", label: "🎭 aller voir Guignol le mercredi" }],
        out: {
          "je|partir": ["Je partais en Bretagne tous les étés.", "I went to Brittany every summer."], "je|manger": ["Je mangeais des confitures le matin.", "I ate jam in the morning.", "mangeons → je mangeais (keep the e)"], "je|aller": ["J'allais voir Guignol le mercredi.", "I went to see Guignol on Wednesdays."],
          "nous|partir": ["Nous partions en Bretagne tous les étés.", "We went to Brittany every summer."], "nous|manger": ["Nous mangions des confitures le matin.", "We ate jam in the morning.", "nous: no e before -ions"], "nous|aller": ["Nous allions voir Guignol le mercredi.", "We went to see Guignol on Wednesdays."],
          "ils|partir": ["Mes grands-parents partaient en Bretagne tous les étés.", "My grandparents went to Brittany every summer."], "ils|manger": ["Mes grands-parents mangeaient des confitures le matin.", "My grandparents ate jam in the morning."], "ils|aller": ["Mes grands-parents allaient voir Guignol le mercredi.", "My grandparents went to see Guignol on Wednesdays."]
        }
      }
    },
    {
      id: "g-aimer",
      title: "Liking and not liking · asking about a memory",
      body: [
        "Liking: [[Ça me plaît (bien).]] · [[J'aime bien.]] · [[J'adore !]] Not liking: [[Ça ne me plaît pas.]] · [[Je n'aime pas beaucoup.]] · [[Je n'aime pas du tout !]] · [[J'ai horreur de ça !]]",
        "Asking about a memory: [[Quels souvenirs vous gardez de votre expérience ?]] · [[Vous êtes content(e) de votre expérience ?]] · [[Vous allez recommencer l'expérience ?]]"
      ],
      info: { type: "scale", title: "📸 Old photos: love them or hate them?", colors: ["#e0474f", "#2f9c8a"], items: [
        { v: 4, fr: "J'ai horreur de ça !", en: "I hate it!", pic: "😖" }, { v: 22, fr: "Je n'aime pas du tout !", en: "I don't like it at all!", pic: "🙅" }, { v: 40, fr: "Ça ne me plaît pas.", en: "I don't like it.", pic: "😕" },
        { v: 66, fr: "Ça me plaît bien.", en: "I really like it.", pic: "🙂" }, { v: 94, fr: "J'adore !", en: "I love it!", pic: "😍" }
      ], ends: ["−", "+"] }
    },
    {
      id: "g-y-en",
      title: "[[y]] and [[en]] for places: there / from there",
      body: [
        "[[y]] replaces a place introduced by [[à, en, dans, sur, sous, chez]]…: where you <b>are</b> or <b>go</b>: [[Le climat est agréable sur cette île ? — Oui, il y est très agréable.]] · [[Tu te promènes au bord de l'eau ? — Oui, je m'y promène souvent.]]",
        "[[en]] replaces a place introduced by [[de]]: where you <b>come from</b>: [[Tu reviens de la plage ? — Oui, j'en reviens à l'instant.]] · [[Il est parti du chalet à 6 h ? — Il en est parti à 6 h.]]",
        "Adverbs: [[ici]] (close), [[là]], [[là-bas]] (far): [[Tu vas à l'île Maurice ? — Oui, je vais là-bas tous les étés.]] = [[J'y vais tous les étés.]]"
      ],
      info: { type: "compare", title: "📍 y = there · en = from there", cols: [
        { head: "y · à, en, dans, sur…", en: "you're there / you go there", color: "#2f9c8a", lines: [["On y trouve des endroits calmes.", "You find calm places there."], ["J'y retourne l'année prochaine.", "I'm going back there next year."], ["Il y fait chaud.", "It's hot there."]] },
        { head: "en · de", en: "you come from there", color: "#9b4fb0", lines: [["On en revient enchanté !", "You come back from there enchanted!"], ["J'en reviens à l'instant.", "I've just come back from there."], ["Il en est parti à 6 h.", "He left (from) there at 6."]] }
      ] },
      widget: {
        type: "sort", label: "y or en? Replace the place",
        cols: [{ k: "y", label: "y (there)", color: "#2f9c8a" }, { k: "en", label: "en (from there)", color: "#9b4fb0" }],
        items: [
          { t: "Il part en Australie avec sa sœur.", k: "y", say: "Il y part avec sa sœur." }, { t: "Elle rentre de Bruxelles très contente.", k: "en", say: "Elle en rentre très contente." },
          { t: "Nous nous baladons au bord de la mer.", k: "y", say: "Nous nous y baladons." }, { t: "L'avion repart de Bordeaux dans une heure.", k: "en", say: "L'avion en repart dans une heure." },
          { t: "Elle s'installe à Québec.", k: "y", say: "Elle s'y installe." }, { t: "Tu sors de l'eau ?", k: "en", say: "Tu en sors ?" }
        ]
      }
    },
    {
      id: "g-adjectif",
      title: "Where does the adjective go?",
      body: [
        "In general, <b>after</b> the noun: [[une affiche rétro]], [[des endroits calmes]]. Always after: <b>nationality, colour, shape</b>: [[un plat marocain]], [[un ciel bleu]], [[une table ronde]].",
        "Some short, common adjectives go <b>before</b>: [[beau, bon, gros, grand, petit, jeune, vieux, joli, nouveau]]: [[un petit hôtel]], [[une jolie paire d'espadrilles]]. Before a noun for emphasis: [[les incroyables boutiques]].",
        "⚠️ Plural adjective <b>before</b> a noun: [[des]] → [[de / d']]: [[de jolies affiches]], [[d'excellentes épices]]. Meaning can change: [[mon propre mug]] (my own) ≠ [[un mug propre]] (clean)."
      ],
      info: { type: "pattern", title: "🧩 Adjective before + noun + adjective after", rows: [
        ["de", { opts: ["jolies", "vieilles", "belles"] }, "affiches", { opts: ["touristiques.", "rétro.", "colorées."] }],
        ["un", { opts: ["petit", "grand", "bon"] }, "restaurant", { opts: ["toulousain.", "italien.", "familial."] }]
      ], note: "The “BAGS” adjectives (Beauty, Age, Goodness, Size) usually go before the noun." },
      widget: {
        type: "sort", label: "Before or after the noun?",
        cols: [{ k: "avant", label: "avant le nom", color: "#e0a526" }, { k: "apres", label: "après le nom", color: "#3a6fd8" }],
        items: [
          { t: "petit (un … hôtel)", k: "avant", say: "un petit hôtel" }, { t: "espagnol (une île …)", k: "apres", say: "une île espagnole" }, { t: "bleu (un ciel …)", k: "apres", say: "un ciel bleu" },
          { t: "vieux (de … photos)", k: "avant", say: "de vieilles photos" }, { t: "touristique (une affiche …)", k: "apres", say: "une affiche touristique" }, { t: "excellent (d'… épices)", k: "avant", say: "d'excellentes épices" },
          { t: "rond (une table …)", k: "apres", say: "une table ronde" }, { t: "beau (une … chemise)", k: "avant", say: "une belle chemise" }
        ]
      }
    }
  ],

  expressions: [
    { fn: "Pour raconter un souvenir", fnEn: "telling a memory", icon: "💭", items: [
      ["Je me souviens des confitures de ma grand-mère.", "I remember my grandmother's jams.", "std", true],
      ["Je me rappelle ses mots.", "I remember his words.", "std"],
      ["Ça me rappelle mon enfance.", "It reminds me of my childhood.", "std", true],
      ["C'est gravé dans ma mémoire.", "It's etched in my memory.", "std"],
      ["C'est ma madeleine de Proust !", "It's my madeleine de Proust!", "std"]
    ] },
    { fn: "Pour exprimer le fait d'aimer", fnEn: "liking", icon: "😍", items: [
      ["Ça me plaît (bien).", "I (really) like it.", "std", true],
      ["J'aime bien.", "I quite like it.", "std"],
      ["J'adore !", "I love it!", "std"]
    ] },
    { fn: "… et de ne pas aimer", fnEn: "disliking", icon: "😖", items: [
      ["Ça ne me plaît pas.", "I don't like it.", "std"],
      ["Je n'aime pas beaucoup.", "I don't like it much.", "std"],
      ["Je n'aime pas du tout !", "I don't like it at all!", "std", true],
      ["J'ai horreur de ça !", "I hate that!", "std", true]
    ] },
    { fn: "Pour interroger sur un souvenir", fnEn: "asking about a memory", icon: "🎙️", items: [
      ["Quels souvenirs vous gardez de votre expérience ?", "What memories do you keep of your experience?", "poli", true],
      ["Vous êtes content(e) de votre expérience ?", "Are you happy with your experience?", "poli"],
      ["Vous allez recommencer l'expérience ?", "Will you do it again?", "poli", true]
    ] },
    { fn: "Pour parler de la météo", fnEn: "the weather", icon: "🌦️", items: [
      ["Tu as vu cette pluie ?", "Have you seen this rain?", "fam"],
      ["Il fait un temps gris / humide / sec.", "The weather is grey / humid / dry.", "std"],
      ["C'est la canicule !", "It's a heatwave!", "std"],
      ["La météo annonce des orages.", "The forecast says storms.", "std", true]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · interviewing someone about a memory", lanes: ["L'animatrice", "Le voyageur"], av: ["f5", "m1"], steps: [
    { s: 0, fr: "Quels souvenirs vous gardez de votre voyage ?", en: "What memories do you keep of your trip?" },
    { s: 1, fr: "Des souvenirs inoubliables ! On y trouve des endroits magiques.", en: "Unforgettable memories! You find magical places there." },
    { s: 0, fr: "Vous êtes content de votre expérience ?", en: "Are you happy with your experience?" },
    { s: 1, fr: "Très content. On en revient enchanté !", en: "Very happy. You come back enchanted!" },
    { s: 0, fr: "Vous allez recommencer ?", en: "Will you do it again?" },
    { s: 1, fr: "Oui, j'y retourne l'année prochaine !", en: "Yes, I'm going back there next year!" }
  ] },

  sounds: {
    intro: "Phonie-graphie: <b>compulsory liaisons</b>. A silent final consonant is pronounced before a vowel in fixed places: after un, deux, les, des…; after an adjective before its noun; after nous, vous, ils, elles, on; after dans, en, chez; after an object pronoun.",
    letters: [
      { l: "s · x · z", name: "liaison [z]", tip: "[[deux_îles]], [[nous_avons]], [[les_enfants]], [[chez_elle]], [[ils_aiment]].", ex: ["deux îles touristiques", "Nous avons regardé.", "Chez elle.", "Ils aiment la mer."] },
      { l: "n", name: "liaison [n]", tip: "[[un_album]], [[en_automne]], [[on_est]], [[Elle en_est partie.]]", ex: ["un album", "En automne.", "Elle en est partie.", "on arrive"] },
      { l: "t · d", name: "liaison [t]", tip: "[[un petit_album]], [[un grand_appartement]] (d → [t]!), [[c'est_un souvenir]].", ex: ["un petit album", "un grand appartement", "c'est inoubliable", "quand il pleut"] },
      { l: "r", name: "liaison [ʁ]", tip: "[[le premier_avril]], [[un dernier_été]].", ex: ["le premier avril", "un dernier été"] }
    ],
    pairs: [
      { a: ["les îles", "the islands"], b: ["les plages", "the beaches"], note: "[z] liaison / none" },
      { a: ["un petit album", "a small album"], b: ["un petit lac", "a small lake"], note: "[t] liaison / none" },
      { a: ["j'y vais", "I go there"], b: ["j'en viens", "I come from there"], note: "y / en" },
      { a: ["je mangeais", "I used to eat"], b: ["j'ai mangé", "I ate"], note: "imparfait / passé composé" },
      { a: ["mon propre mug", "my own mug"], b: ["un mug propre", "a clean mug"], note: "adjective position" },
      { a: ["la chaleur", "heat"], b: ["la fraîcheur", "coolness"], note: "météo" }
    ]
  },
  classify: {
    label: "🔗 Liaison ?", q: "Listen: which liaison sound do you hear?",
    options: ["[z]", "[n]", "[t]"],
    items: [
      { say: "deux îles", a: 0 }, { say: "un album", a: 1 }, { say: "un petit album", a: 2 }, { say: "nous avons", a: 0 },
      { say: "en automne", a: 1 }, { say: "un grand appartement", a: 2 }, { say: "chez elle", a: 0 }, { say: "on arrive", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "La confiture rappelle la Corse à Lina.", ok: true },
    { type: "mcq", tag: "Dialogue 1", q: "Le soir, avec son grand-père, Lina…", options: ["regardait les étoiles", "regardait la télévision", "faisait de la confiture"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Aurore adore regarder les vieilles photos.", ok: false, explain: "« J'ai horreur de ça ! »" },
    { type: "mcq", tag: "Dialogue 2", q: "Quel souvenir est positif pour Mélina et négatif pour Aurore ?", options: ["la compétition de natation", "la photo de classe", "les vacances en Bretagne"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Le grand-père de Bastien était souvent en retard.", ok: true },
    { type: "mcq", tag: "Dialogue 4", q: "Pour monter au Morne Brabant, la randonnée est…", options: ["assez facile", "très difficile", "impossible"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Pendant la canicule, il faisait quarante degrés à Paris.", ok: true },
    { type: "tf", tag: "Dialogue 6", s: "Le père veut acheter un mug pour Mamie.", ok: false, explain: "He prefers a local speciality." },
    { type: "fill", tag: "Imparfait", sentence: "Quand j'___ petit, je jouais au foot tous les week-ends.", options: ["étais", "été", "avais"], answer: 0 },
    { type: "fill", tag: "Imparfait", sentence: "Avant, elle ___ tous les jours dans son journal.", options: ["écrivait", "écrit", "a écrit"], answer: 0 },
    { type: "fill", tag: "Imparfait", sentence: "Nous ___ souvent en Bretagne.", options: ["allions", "allons", "allaient"], answer: 0 },
    { type: "fill", tag: "Imparfait", sentence: "Ils ___ des matchs le week-end.", options: ["avaient", "avions", "ont"], answer: 0 },
    { type: "fill", tag: "Imparfait", sentence: "À cette époque, on se ___ beaucoup à vélo.", options: ["déplaçait", "déplacait", "déplaçions"], answer: 0 },
    { type: "type", tag: "Imparfait", q: "Imparfait: « Gabriel chante souvent devant sa famille. »", answers: ["Gabriel chantait souvent devant sa famille.", "Gabriel chantait souvent devant sa famille"] },
    { type: "fill", tag: "Souvenir", sentence: "Je me souviens ___ vacances chez ma tante.", options: ["des", "les", "aux"], answer: 0 },
    { type: "fill", tag: "y / en", sentence: "J'adore cette île : il ___ fait toujours beau.", options: ["y", "en", "le"], answer: 0 },
    { type: "fill", tag: "y / en", sentence: "Elle rentre de Bruxelles et elle ___ revient très contente.", options: ["en", "y", "là"], answer: 0 },
    { type: "fill", tag: "y / en", sentence: "Tu vas souvent à la montagne ? — Oui, j'___ vais souvent.", options: ["y", "en", "le"], answer: 0 },
    { type: "fill", tag: "y / en", sentence: "Il est revenu tôt de la fête : il ___ est parti à 21 heures.", options: ["en", "y", "lui"], answer: 0 },
    { type: "type", tag: "y / en", q: "Replace with y or en: « Je suis restée une semaine à l'île Maurice. »", answers: ["J'y suis restée une semaine.", "J'y suis restée une semaine"] },
    { type: "fill", tag: "Adjectif", sentence: "Nous avons dormi dans un ___ hôtel.", options: ["petit", "petits", "petite"], answer: 0 },
    { type: "fill", tag: "Adjectif", sentence: "Elle a acheté ___ jolies espadrilles.", options: ["de", "des", "les"], answer: 0 },
    { type: "fill", tag: "Adjectif", sentence: "Ils sont partis sur une île ___ .", options: ["espagnole", "espagnol", "Espagne"], answer: 0 },
    { type: "type", tag: "Adjectif", q: "Place the adjectives: « J'ai vu des bateaux. » (gros / blanc)", answers: ["J'ai vu de gros bateaux blancs.", "J'ai vu de gros bateaux blancs"] },
    { type: "reply", tag: "Que répondre ?", prompt: "Quels souvenirs vous gardez de votre voyage ?", options: ["Des souvenirs inoubliables !", "J'y vais demain.", "Il fait gris."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu aimes les vieilles photos ?", options: ["Non, j'ai horreur de ça !", "Non, je me souviens.", "Non, j'en reviens."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous allez recommencer l'expérience ?", options: ["Oui, j'y retourne l'année prochaine !", "Oui, j'étais content.", "Oui, il fait chaud."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "La canicule, c'est…", options: ["une période de très grande chaleur", "un orage", "une pluie fine"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Une maison en bois, typique de la montagne :", options: ["un chalet", "une ferme", "un port"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["oublier", "se souvenir", "se rappeler", "goûter"], answer: 3, explain: "goûter is a sense (taste); the others are about memory." },
    { type: "mcq", tag: "Vocabulaire", q: "« Gravé dans ma mémoire » signifie…", options: ["que je ne vais jamais l'oublier", "que je vais vite l'oublier", "que c'est écrit sur un mur"], answer: 0 },
    { type: "order", tag: "Construisez", en: "I remember my grandmother's jams.", words: ["Je", "me", "souviens", "des", "confitures", "de", "ma", "grand-mère."] },
    { type: "listen", tag: "Écoute", q: "What did the speaker do every summer?", say: "Quand j'étais petite, nous partions en Bretagne tous les étés.", options: ["went to Brittany", "went to Corsica", "stayed at home"], answer: 0 }
  ],

  roleplays: [
    { title: "💭 Un souvenir d'enfance", brief: "A friend asks you about a childhood memory linked to a smell or a taste. Use the imparfait.", memo: ["Je me souviens de…", "Quand j'étais petit(e)…", "Ça sentait…", "Ça me rappelle…"], partner: "f3", you: "m2",
      turns: [
        { them: "Tu as un souvenir d'enfance lié à une odeur ?", themEn: "Do you have a childhood memory linked to a smell?", hint: "Your mother's bread on Sundays.", you: "Oui, je me souviens du pain de ma mère, le dimanche.", youEn: "Yes, I remember my mother's bread on Sundays." },
        { them: "Raconte !", themEn: "Tell me!", hint: "When you were small, she made bread every Sunday; it smelt good.", you: "Quand j'étais petit, elle faisait du pain tous les dimanches. Ça sentait bon dans toute la maison !", youEn: "When I was little she made bread every Sunday. It smelt good all through the house!" },
        { them: "Et aujourd'hui ?", themEn: "And today?", hint: "The smell of a bakery reminds you of your childhood.", you: "Aujourd'hui, l'odeur d'une boulangerie me rappelle mon enfance.", youEn: "Today the smell of a bakery reminds me of my childhood." }
      ] },
    { title: "🎙️ Interview : un voyage inoubliable", brief: "You're a radio host. Interview a traveller about a trip (they answer with y and en).", memo: ["Quels souvenirs… ?", "Vous êtes content(e)… ?", "Vous allez recommencer… ?"], partner: "m1", you: "f5",
      turns: [
        { them: "Bonjour !", themEn: "Hello!", hint: "Ask what memories they keep of their trip to Québec.", you: "Bonjour ! Quels souvenirs vous gardez de votre voyage au Québec ?", youEn: "Hello! What memories do you keep of your trip to Québec?" },
        { them: "Des souvenirs inoubliables ! On y trouve des lacs magnifiques.", themEn: "Unforgettable memories! You find magnificent lakes there.", hint: "Ask if they're happy with the experience.", you: "Vous êtes content de votre expérience ?", youEn: "Are you happy with your experience?" },
        { them: "Très ! J'en suis revenu enchanté.", themEn: "Very! I came back enchanted.", hint: "Ask if they will do it again.", you: "Vous allez recommencer l'expérience ?", youEn: "Will you do it again?" }
      ] },
    { title: "📸 Je n'aime pas les photos !", brief: "You love photographing your family; your sibling hates being photographed. Discuss and find an agreement.", memo: ["J'adore…", "J'ai horreur de ça !", "Ça ne me plaît pas.", "D'accord, mais…"], partner: "f8", you: "f3",
      turns: [
        { them: "Encore une photo ? J'ai horreur de ça !", themEn: "Another photo? I hate that!", hint: "Say you love photographing the family; it makes good memories.", you: "Mais j'adore prendre la famille en photo ! Ce sont de beaux souvenirs.", youEn: "But I love photographing the family! They're lovely memories." },
        { them: "Je n'aime pas du tout mes photos.", themEn: "I don't like my photos at all.", hint: "Suggest a deal: one photo, and she chooses it.", you: "D'accord : une seule photo, et c'est toi qui choisis !", youEn: "OK: just one photo, and you choose it!" },
        { them: "Bon… ça marche.", themEn: "Well… deal.", hint: "Thank her.", you: "Merci ! Tu vas voir, elle va te plaire.", youEn: "Thanks! You'll see, you'll like it." }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Réaliser une exposition photo", intro: "In groups, create a photo exhibition on “Souvenirs d'une époque”: the 1970s, 80s or 90s.",
      steps: [["Préparation", ["Each group chooses a different decade.", "Each person reads about that decade and notes the objects, activities and habits of the time; then pool your notes."]], ["Réalisation", ["Find photos linked to your notes (you can research more).", "Write a caption under each photo in the imparfait: [[À cette époque, on téléphonait depuis une cabine.]]", "Lay out the exhibition (slideshow or wall) and decide who presents which photo."]], ["Présentation", ["Each group gives a tour of its exhibition.", "Discuss as a class: which decade do you prefer? Why?"]]],
      phrases: ["Dans les années 80, on…", "À cette époque, c'était…", "Tout le monde portait…", "On adorait…"],
      model: { type: "card", style: "board", caption: "📼 Example · tap a decade", title: "SOUVENIRS D'UNE ÉPOQUE", sub: "les inoubliables", rows: [["Années 70", "le disco, les pantalons « pattes d'éléphant », la Renault 5", "Dans les années soixante-dix, on dansait sur du disco et on portait des pantalons pattes d'éléphant."], ["Années 80", "les patins à roulettes, les cabines téléphoniques, les pin's", "Dans les années quatre-vingt, on téléphonait depuis une cabine et on collectionnait les pin's."], ["Années 90", "le vidéoclub, les clips à la télé, le premier portable", "Dans les années quatre-vingt-dix, on louait des films au vidéoclub."]], foot: "À cette époque…" } }
  ],
  delf: {
    skill: "Production orale", title: "Asking someone about a holiday memory",
    about: "A DELF A2-style speaking exchange from this unit: with a partner, ask about one of their holiday memories, then swap roles. You must <b>ask questions</b> (where, when, with whom, what it was like) and <b>react</b>. Use the imparfait to describe and the passé composé for events.",
    tips: ["Open with a question: [[Quels souvenirs tu gardes de… ?]]", "Ask for details: [[C'était où ? Avec qui ? Il faisait quel temps ?]]", "React: [[Ça a l'air génial !]] · [[Quelle expérience !]]", "Describe with the imparfait: [[Il faisait chaud, la mer était bleue.]]"],
    items: [
      { type: "mcq", q: "Which question asks about a memory?", options: ["Quels souvenirs tu gardes de tes vacances ?", "Tu pars quand ?", "Tu as quel âge ?"], answer: 0 },
      { type: "mcq", q: "To describe the scene, you say:", options: ["Il faisait très chaud et la mer était bleue.", "Il a fait très chaud et la mer a été bleue.", "Il fait très chaud et la mer est bleue."], answer: 0 },
      { type: "mcq", q: "Your partner says « On a nagé avec des tortues ! ». You react:", options: ["Quelle expérience ! C'était génial ?", "Je n'aime pas du tout.", "J'y vais."], answer: 0 },
      { type: "mcq", q: "To ask if they'll go back:", options: ["Tu vas y retourner ?", "Tu en reviens ?", "Tu y étais ?"], answer: 0 },
      { type: "mcq", q: "« Je suis allée en Corse. » Replace « en Corse »:", options: ["J'y suis allée.", "J'en suis allée.", "Je la suis allée."], answer: 0 }
    ]
  },
  detente: {
    title: "La météo en francophonie",
    intro: "French-speaking regions have their own weather expressions (quoted by the book). Guess the meaning!",
    items: [
      { type: "mcq", q: "En Belgique, « il bise ! » veut dire…", options: ["il fait froid (vent du nord)", "il fait chaud", "il pleut"], answer: 0 },
      { type: "mcq", q: "En Suisse et au Canada, « il neigeote » veut dire…", options: ["il neige un peu", "il neige beaucoup", "il ne neige plus"], answer: 0 },
      { type: "mcq", q: "À La Réunion, « il farine ! » veut dire…", options: ["il pleut un peu", "il fait du soleil", "il y a de l'orage"], answer: 0 },
      { type: "mcq", q: "À Saint-Pierre-et-Miquelon, « il tombe des plumes d'oies ! » veut dire…", options: ["il neige beaucoup", "il pleut des cordes", "il y a du vent"], answer: 0 },
      { type: "mcq", q: "« Parler de la pluie et du beau temps », c'est…", options: ["parler de choses pas très importantes", "présenter la météo", "se disputer"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🧳 What the French bring back from holidays (Opinium poll, 2019, quoted by the book)", unit: " %", items: [
      { fr: "un mug, un porte-clés, un magnet…", en: "a mug, key ring, magnet…", v: 53, pic: "☕" },
      { fr: "un vêtement typique : marinière, sombrero, paréo…", en: "a typical piece of clothing", v: 40, pic: "👕" },
      { fr: "une spécialité gastronomique : foie gras, épices…", en: "a food speciality", v: 34, pic: "🌶️" }
    ] },
    { type: "timeline", title: "🌦️ Les Français et la météo (facts quoted by the book)", ends: ["1920", "", "aujourd'hui"], items: [
      { x: 6, fr: "1922 : le bulletin météo à la radio", en: "weather forecast on the radio", pic: "📻" },
      { x: 30, fr: "1946 : le bulletin météo à la télévision", en: "on TV", pic: "📺" },
      { x: 62, fr: "1995 : La Chaîne Météo", en: "a weather TV channel", pic: "📡" },
      { x: 90, fr: "aujourd'hui : les applis", en: "apps", pic: "📱" }
    ] }
  ],
  culture: [
    { icon: "🌧️", kind: "Oh, le cliché !", t: "« Il pleut dans le Nord de la France, il fait beau dans le Sud. »", d: "Partly true: according to Météo France (quoted by the book), it rains most in the <b>North-West</b>, but the <b>South-West</b> comes second! The sunniest cities are Ajaccio (Corsica), then Nice and Montpellier (South-East)." },
    { icon: "☁️", kind: "Civilisation", t: "Parlons météo !", d: "The weather is the French small-talk topic par excellence: in a study quoted by the book, <b>86 %</b> of French people say it's their favourite topic at work breaks. It's a universal subject that helps you talk to strangers." },
    { icon: "🧁", kind: "Au fait !", t: "La madeleine de Proust", d: "The writer Marcel Proust tells how, as a child, his aunt gave him madeleines dipped in tea. Today, <i>une madeleine de Proust</i> is anything (an object, a sound, a colour, a smell) that brings back a childhood memory." },
    { icon: "🎭", kind: "Au fait !", t: "Guignol", d: "Created in <b>Lyon</b> around 1808, Guignol is the hero of a comic puppet show. It's for children… and for adults too!" },
    { icon: "🏝️", kind: "Francophonie", t: "Le Morne Brabant, île Maurice", d: "A mountain on the French-speaking island of Mauritius, on the UNESCO World Heritage list. A few hours' hike takes you to the summit for a view over the beaches, the coral reef and the island." },
    { icon: "🏰", kind: "Civilisation", t: "Carcassonne et les affiches rétro", d: "Retro tourist posters of French towns are popular souvenirs. Carcassonne, a fortified medieval city in the South, uses them to attract visitors." }
  ],
  tips: [
    { icon: "🧠", t: "se souvenir DE, se rappeler (no de)", d: "[[Je me souviens de ce jour.]] · [[Je me rappelle ce jour.]]" },
    { icon: "🔁", t: "Imparfait = nous stem", d: "nous finissons → je finissais. Just one exception: être → j'étais." },
    { icon: "📍", t: "y = going/being there, en = coming from there", d: "[[J'y vais.]] · [[J'en reviens.]]" }
  ],
  mistakes: [
    ["Je me souviens mon enfance.", "Je me souviens de mon enfance.", "se souvenir de"],
    ["Je me rappelle de ce jour.", "Je me rappelle ce jour.", "se rappeler + noun (standard)"],
    ["Quand j'ai été petit, je jouais…", "Quand j'étais petit, je jouais…", "description → imparfait"],
    ["Nous mangeions → je mangais", "je mangeais", "keep the e before a / o"],
    ["Tu reviens de la plage ? — Oui, j'y reviens.", "Oui, j'en reviens.", "coming from → en"],
    ["un hôtel petit", "un petit hôtel", "petit goes before"],
    ["des jolies affiches", "de jolies affiches", "plural adjective before the noun → de"],
    ["une rouge robe", "une robe rouge", "colours go after"]
  ]
});
