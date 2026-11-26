// Unité 4 · Tous pareils, tous différents (Édito A2, 2e édition, book pp. 55–68)
// Situations: un casting de mannequins atypiques · les compliments · le sosie · qualités et défauts · la photo de profil · la photo de classe
// Grammar: l'équivalence (aussi, autant, le même, pareil) · les adjectifs indéfinis (chaque, tout, toute, tous, toutes) · les pronoms possessifs
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
const U04_POSS = [
  ["je", "le mien", "la mienne", "les miens", "les miennes"], ["tu", "le tien", "la tienne", "les tiens", "les tiennes"], ["il / elle / on", "le sien", "la sienne", "les siens", "les siennes"],
  ["nous", "le nôtre", "la nôtre", "les nôtres", "les nôtres"], ["vous", "le vôtre", "la vôtre", "les vôtres", "les vôtres"], ["ils / elles", "le leur", "la leur", "les leurs", "les leurs"]
];
LESSONS.push({
  id: "u04", rubrique: 2, num: 4,
  title: "All the same, all different",
  titleFr: "Tous pareils, tous différents",
  pages: "Book pp. 55–68",
  opener: { fr: "Vous avez bonne mine !", en: "You look well!" },
  hero: { scene: "spectacle", staff: "La photographe", people: { "La photographe": "f5", "Mehdi": "m4", "Rose": "f6" } },
  situations: [
    ["📸", "Le casting", "physical description: [[Il mesure 1,55 m.]] · [[Elle a les cheveux gris et longs.]] · [[Elle fait du 44.]]"],
    ["💐", "Les compliments", "[[Cette couleur vous donne bonne mine !]] · [[Tu es trop forte !]]"],
    ["👑", "Le sosie", "[[Il est aussi grand que l'empereur.]] · [[Il a le même visage rond.]]"],
    ["🧠", "Qualités et défauts", "personality: [[Elle est du genre extravertie.]] · [[C'est quelqu'un de discret.]]"],
    ["🖼️", "Ma photo de profil", "possessive pronouns: [[Voici la mienne !]] · [[Il a changé la sienne.]]"]
  ],
  goals: [
    "Describe someone's appearance: height, build, hair, face: [[Il est costaud.]], [[Elle mesure 1,60 m.]], [[Il est barbu et dégarni.]]",
    "Pay a compliment: [[Cette couleur te donne bonne mine.]], [[Tu es trop fort(e) !]], [[Vous êtes une fée !]]",
    "Say people or things are alike: [[aussi grand que]], [[autant que]], [[autant de… que]], [[le même nez que]], [[pareil(le)]]",
    "Talk about personality: [[Il est du genre extraverti.]], [[Elle est d'un naturel timide.]], [[C'est quelqu'un de discret.]]",
    "Express totality: [[chaque qualité]], [[tout le monde]], [[tous les défauts]], [[toutes les choses]]",
    "Replace a possessive + noun with [[le mien]], [[la tienne]], [[les leurs]]…"
  ],
  glance: [
    ["🗣️", "Communication", "physical portraits · compliments · personality · resemblance"],
    ["🧩", "Grammaire", "equivalence: aussi, autant, le même, pareil · chaque, tout, tous · possessive pronouns"],
    ["🗂️", "Vocabulaire", "body and build · head and face · appearance · resemblance · fashion · qualities and faults · animal expressions"],
    ["🔊", "Phonie-graphie", "the nasal vowels: [o]/[ɔ̃] · [a]/[ɑ̃] · [ɛ]/[ɛ̃]"],
    ["⭐", "The phrase to learn first", "[[Cette couleur te donne bonne mine !]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "The casting", titleFr: "Au studio photo · Des mannequins atypiques",
      note: "A photographer describes the models of her new campaign to her assistant. Listen to the physical portraits.",
      scene: "spectacle", staff: "La photographe", people: { "La photographe": "f5", "L'assistant": "m3" },
      lines: [
        ["L'assistant", "Alors, qui sont les mannequins de la nouvelle campagne ?", "So, who are the models for the new campaign?"],
        ["La photographe", "Des mannequins atypiques ! D'abord, Rose : elle a soixante et un ans, elle a de longs cheveux gris et elle fait du 44.", "Atypical models! First, Rose: she's sixty-one, she has long grey hair and she's a size 44."],
        ["L'assistant", "Super. Et l'homme sur cette photo, il est costaud, non ?", "Great. And the man in this photo, he's well-built, isn't he?"],
        ["La photographe", "Oui, c'est Mehdi. Il se décrit comme « gros » et il n'a pas de problème avec le mot. Pour lui, chaque corps est unique.", "Yes, that's Mehdi. He describes himself as “fat” and he has no problem with the word. For him, every body is unique."],
        ["L'assistant", "Et le jeune homme brun, là ?", "And the dark-haired young man there?"],
        ["La photographe", "C'est Jérémie. Il mesure un mètre cinquante-cinq. On dit qu'un mannequin homme doit être grand, musclé et sec… Il ne remplit aucun de ces critères !", "That's Jérémie. He's one metre fifty-five. People say a male model must be tall, muscular and lean… He meets none of these criteria!"],
        ["L'assistant", "Tant mieux ! Les gens vont se sentir bien dans leur peau en les voyant.", "So much the better! People will feel good about themselves seeing them."],
        ["La photographe", "Exactement. Ce sont eux qui portent les vêtements, pas les canons de beauté !", "Exactly. They're the ones who wear the clothes, not the beauty standards!"]
      ],
      glossary: [["faire du 44", "to be a size 44"], ["costaud(e) · sec, sèche · musclé(e)", "well-built · lean · muscular"], ["mesurer 1,55 m", "to be 1.55 m tall"], ["se sentir bien dans sa peau", "to feel good about oneself"]]
    },
    {
      id: "d2", n: 2, title: "Little kind words", titleFr: "Dans le train · Faites des compliments !",
      note: "Mia has decided to pay a compliment to everyone she meets today. Listen to the compliments and the reactions.",
      scene: "train", staff: "Le contrôleur", people: { "Le contrôleur": "m7", "Mia": "f7", "La voisine": "f6" },
      lines: [
        ["La voisine", "Bonjour, Mia ! Tu vas au travail ?", "Hello, Mia! Off to work?"],
        ["Mia", "Oui ! Oh, votre écharpe est magnifique. Cette couleur vous donne bonne mine !", "Yes! Oh, your scarf is gorgeous. That colour makes you look really well!"],
        ["La voisine", "Merci, c'est gentil ! Ça me fait très plaisir.", "Thank you, that's kind! That makes me very happy."],
        ["Le contrôleur", "Vos billets, s'il vous plaît.", "Your tickets, please."],
        ["Mia", "Voilà. Vous êtes toujours souriant le matin : vous êtes la chance de ma journée !", "Here you are. You're always smiling in the morning: you're the lucky charm of my day!"],
        ["Le contrôleur", "Ha ha ! On ne me dit pas ça souvent. Bonne journée, mademoiselle !", "Ha ha! People don't say that to me often. Have a good day!"],
        ["La voisine", "Tu fais des compliments à tout le monde ?", "Are you paying compliments to everyone?"],
        ["Mia", "Oui, j'ai entendu ça à la radio : des petits mots gentils, sans rien demander en retour. Ça fait du bien à tout le monde !", "Yes, I heard about it on the radio: little kind words, asking for nothing in return. It does everyone good!"]
      ],
      glossary: [["avoir bonne mine", "to look well"], ["Ça me fait plaisir.", "That makes me happy."], ["Tu es trop fort(e) !", "You're amazing! (casual)"], ["Vous êtes une fée !", "You're a fairy! (= magic, so kind)"]]
    },
    {
      id: "d3", n: 3, title: "The emperor's double", titleFr: "Au festival d'histoire · Le sosie de Napoléon",
      note: "A journalist meets Gilles, who played Napoleon at historical festivals for ten years. Listen to the equivalence: [[aussi… que]], [[le même]], [[autant que]].",
      scene: "ville", staff: "La journaliste", people: { "La journaliste": "f2", "Gilles": "m6" },
      lines: [
        ["La journaliste", "Gilles, vous avez été le sosie de Napoléon pendant dix ans. Pourquoi vous ?", "Gilles, you were Napoleon's double for ten years. Why you?"],
        ["Gilles", "J'avais le physique de l'emploi ! Je suis aussi grand que l'empereur, à deux centimètres près.", "I had the right look for the job! I'm as tall as the emperor, give or take two centimetres."],
        ["La journaliste", "Et le visage ?", "And the face?"],
        ["Gilles", "J'avais la même physionomie, le même visage rond et la même fossette au menton.", "I had the same features, the same round face and the same dimple in my chin."],
        ["La journaliste", "Mais aujourd'hui, vous ne lui ressemblez plus autant qu'avant…", "But today you don't look as much like him as before…"],
        ["Gilles", "C'est vrai : je suis barbu et un peu dégarni ! Je n'ai plus du tout la tête de l'emploi.", "True: I've got a beard and I'm going a bit bald! I don't look the part at all any more."],
        ["La journaliste", "Il suffit d'être petit pour être Napoléon ?", "Is being short enough to be Napoleon?"],
        ["Gilles", "Non ! J'ai appris à monter à cheval et à imiter tous ses gestes : il tirait sa manche tout le temps.", "No! I learned to ride a horse and to imitate all his gestures: he pulled at his sleeve all the time."]
      ],
      glossary: [["le sosie", "the lookalike"], ["avoir la tête de l'emploi", "to look the part"], ["barbu · dégarni, chauve", "bearded · balding, bald"], ["la fossette", "the dimple"]]
    },
    {
      id: "d4", n: 4, title: "The qualities of your faults", titleFr: "À la pause · Quel est ton caractère ?",
      note: "Two colleagues do a magazine personality test. Listen to how they describe character, and to [[chaque]], [[tout]], [[tous]].",
      scene: "bureau", people: { "Clara": "f3", "Hugo": "m2" },
      lines: [
        ["Clara", "Écoute ce test : « Chaque défaut peut être vu comme une qualité. » Toi, tu es du genre bavard…", "Listen to this test: “Every fault can be seen as a quality.” You're the chatty type…"],
        ["Hugo", "Merci, c'est gentil !", "Thanks, that's nice!"],
        ["Clara", "Attends ! Ça veut dire que tu es sociable, chaleureux et spontané. Tu es doué pour la communication !", "Wait! It means you're sociable, warm and spontaneous. You're gifted at communication!"],
        ["Hugo", "Ah, je préfère. Et toi, tu es d'un naturel timide.", "Ah, I prefer that. And you're shy by nature."],
        ["Clara", "Oui, mais d'après le test, je suis quelqu'un de discret et réfléchi. Je ne dérange jamais personne !", "Yes, but according to the test I'm someone discreet and thoughtful. I never disturb anyone!"],
        ["Hugo", "Et tu es un peu maniaque : tu ranges ton bureau tous les jours !", "And you're a bit obsessive: you tidy your desk every day!"],
        ["Clara", "Donc je suis ordonnée et rigoureuse. Je trouve vite toutes les choses que je cherche.", "So I'm orderly and rigorous. I quickly find everything I'm looking for."],
        ["Hugo", "Tout le monde a des défauts… et chaque faiblesse est aussi une force !", "Everyone has faults… and every weakness is also a strength!"]
      ],
      glossary: [["être du genre + adjectif", "to be the… type"], ["être d'un naturel + adjectif", "to be … by nature"], ["quelqu'un de + adjectif (m.)", "someone…"], ["chaque + nom singulier", "each, every"]]
    },
    {
      id: "d5", n: 5, title: "Which profile photo?", titleFr: "Sur le canapé · Quelle photo de profil ?",
      note: "Sami and Inès choose profile photos for different networks. Listen to the possessive pronouns: [[la mienne]], [[la tienne]], [[la sienne]], [[les leurs]].",
      scene: "appartement", people: { "Sami": "m1", "Inès": "f2" },
      lines: [
        ["Sami", "Je cherche un emploi de vendeur. Tu peux regarder ma photo de profil sur mon réseau professionnel ?", "I'm looking for a sales job. Can you look at my profile photo on my professional network?"],
        ["Inès", "Fais voir… Non ! Tu es à la plage avec tes amis. L'employeur veut voir ta tête, pas les leurs !", "Let me see… No! You're at the beach with your friends. The employer wants to see your face, not theirs!"],
        ["Sami", "Et la tienne, elle est comment ?", "And yours, what's it like?"],
        ["Inès", "La mienne ? Je souris, mais pas trop, avec une veste. Il faut paraître sérieux et sûr de soi.", "Mine? I'm smiling, but not too much, wearing a jacket. You have to look serious and self-confident."],
        ["Sami", "Mon frère a changé la sienne la semaine dernière, et il a trouvé un emploi !", "My brother changed his last week, and he found a job!"],
        ["Inès", "Tu vois ! Mais sur ton réseau personnel, tu peux garder la photo de la plage : elle montre ta passion pour le surf.", "You see! But on your personal network you can keep the beach photo: it shows your passion for surfing."],
        ["Sami", "D'accord. Et nos photos de vacances ? Les nôtres sont super.", "OK. And our holiday photos? Ours are great."],
        ["Inès", "Les nôtres, on les garde pour nous !", "Ours, we keep to ourselves!"]
      ],
      glossary: [["la mienne, la tienne, la sienne", "mine, yours, his/hers"], ["les nôtres, les leurs", "ours, theirs"], ["paraître sûr(e) de soi", "to look self-confident"], ["le réseau social", "the social network"]]
    },
    {
      id: "d6", n: 6, title: "Say cheese!", titleFr: "À l'école · La photo de classe",
      note: "Class photo day! The photographer gets every child to smile. Listen to [[tous]], [[toutes]], [[chaque]].",
      scene: "classe", staff: "Le photographe", people: { "Le photographe": "m4", "Léo": "k2", "Zoé": "k1" },
      lines: [
        ["Le photographe", "Tous les enfants au premier rang, s'il vous plaît ! Les grands derrière.", "All the children in the front row, please! The tall ones at the back."],
        ["Léo", "Monsieur, Zoé et moi, on est aussi grands !", "Sir, Zoé and I are the same height!"],
        ["Le photographe", "C'est vrai, vous êtes pareils ! Mettez-vous l'un à côté de l'autre. Attention… on dit « ouistiti » !", "That's true, you're the same! Stand next to each other. Ready… say “cheese”!"],
        ["Zoé", "Ouistiti !", "Cheese!"],
        ["Le photographe", "Parfait ! Et maintenant, chaque enfant fait une grimace : c'est la photo pour les parents !", "Perfect! And now, every child pulls a face: that's the photo for the parents!"],
        ["Léo", "Super ! On veut toutes les photos !", "Great! We want all the photos!"]
      ],
      glossary: [["« Ouistiti ! »", "“Cheese!” (a ouistiti is a marmoset)"], ["faire une grimace", "to pull a face"], ["tous les enfants", "all the children"], ["chaque enfant", "each child"]]
    }
  ],

  vocab: [
    { t: "être de grande / petite taille", en: "to be tall / short", pic: "📏", cat: "Le corps, la silhouette" },
    { t: "mesurer 1,60 m", en: "to be 1.60 m tall", pic: "📐", cat: "Le corps, la silhouette", note: "[[un mètre soixante]]" },
    { t: "faire du 44 = faire une taille 44", en: "to be a size 44", pic: "👗", cat: "Le corps, la silhouette" },
    { t: "costaud(e) = corpulent(e) = rond(e)", en: "well-built, stocky", pic: "🧔", cat: "Le corps, la silhouette" },
    { t: "sec, sèche = mince", en: "lean, slim", pic: "🧍", cat: "Le corps, la silhouette" },
    { t: "musclé(e)", en: "muscular", pic: "💪", cat: "Le corps, la silhouette" },
    { t: "fort(e)", en: "strong; stout", pic: "🏋️", cat: "Le corps, la silhouette" },
    { t: "âgé(e) ≠ jeune", en: "elderly ≠ young", pic: "👵", cat: "Le corps, la silhouette" },
    { t: "les cheveux blonds, bruns, châtains, gris", en: "blond, dark, chestnut, grey hair", pic: "💇", cat: "La tête et le visage", g: "pl" },
    { t: "barbu", en: "bearded", pic: "🧔", cat: "La tête et le visage" },
    { t: "chauve, dégarni", en: "bald, balding", pic: "👨‍🦲", cat: "La tête et le visage" },
    { t: "la fossette", en: "the dimple", pic: "😊", cat: "La tête et le visage", g: "f" },
    { t: "le menton", en: "the chin", pic: "🗿", cat: "La tête et le visage", g: "m" },
    { t: "le sourire", en: "the smile", pic: "😁", cat: "La tête et le visage", g: "m" },
    { t: "avoir bonne / mauvaise mine", en: "to look well / unwell", pic: "🌞", cat: "L'apparence" },
    { t: "les canons de beauté, les critères de beauté", en: "beauty standards", pic: "📏", cat: "L'apparence", g: "pl" },
    { t: "être / se sentir bien dans sa peau", en: "to feel good about oneself", pic: "🫶", cat: "L'apparence" },
    { t: "rendre beau, belle", en: "to make beautiful", pic: "✨", cat: "L'apparence" },
    { t: "ressembler à", en: "to look like", pic: "👯", cat: "La ressemblance" },
    { t: "être le sosie de", en: "to be the double of", pic: "🪞", cat: "La ressemblance" },
    { t: "avoir la tête de l'emploi", en: "to look the part", pic: "🎭", cat: "La ressemblance" },
    { t: "pareil(le) ≠ différent(e)", en: "the same ≠ different", pic: "🟰", cat: "La ressemblance" },
    { t: "le / la mannequin", en: "the model", pic: "🧍‍♀️", cat: "La mode" },
    { t: "le créateur, la créatrice", en: "the designer", pic: "✂️", cat: "La mode" },
    { t: "défiler", en: "to walk the catwalk", pic: "🚶", cat: "La mode" },
    { t: "poser", en: "to pose", pic: "📸", cat: "La mode" },
    { t: "chaleureux, chaleureuse", en: "warm", pic: "🤗", cat: "Les qualités" },
    { t: "curieux, curieuse", en: "curious", pic: "🔍", cat: "Les qualités" },
    { t: "discret, discrète", en: "discreet", pic: "🤫", cat: "Les qualités" },
    { t: "doux, douce", en: "gentle", pic: "🐑", cat: "Les qualités" },
    { t: "extraverti(e)", en: "outgoing", pic: "🥳", cat: "Les qualités" },
    { t: "fidèle", en: "loyal", pic: "🐕", cat: "Les qualités" },
    { t: "honnête", en: "honest", pic: "🤝", cat: "Les qualités" },
    { t: "optimiste", en: "optimistic", pic: "🌈", cat: "Les qualités" },
    { t: "ordonné(e)", en: "tidy, orderly", pic: "🗂️", cat: "Les qualités" },
    { t: "prudent(e)", en: "careful", pic: "🦺", cat: "Les qualités" },
    { t: "réfléchi(e)", en: "thoughtful", pic: "🤔", cat: "Les qualités" },
    { t: "spontané(e)", en: "spontaneous", pic: "⚡", cat: "Les qualités" },
    { t: "travailleur, travailleuse", en: "hard-working", pic: "🐜", cat: "Les qualités" },
    { t: "autoritaire", en: "bossy, authoritarian", pic: "👮", cat: "Les défauts" },
    { t: "bavard(e)", en: "chatty", pic: "🗣️", cat: "Les défauts" },
    { t: "envieux, envieuse", en: "envious", pic: "😒", cat: "Les défauts" },
    { t: "inquiet, inquiète", en: "anxious", pic: "😟", cat: "Les défauts" },
    { t: "maniaque", en: "obsessive (about tidiness)", pic: "🧽", cat: "Les défauts" },
    { t: "menteur, menteuse", en: "liar, lying", pic: "🤥", cat: "Les défauts" },
    { t: "paresseux, paresseuse", en: "lazy", pic: "🦥", cat: "Les défauts" },
    { t: "pessimiste", en: "pessimistic", pic: "🌧️", cat: "Les défauts" },
    { t: "prétentieux, prétentieuse", en: "pretentious", pic: "🦚", cat: "Les défauts" },
    { t: "sans gêne", en: "inconsiderate, cheeky", pic: "😛", cat: "Les défauts" },
    { t: "têtu(e)", en: "stubborn", pic: "🫏", cat: "Les défauts" },
    { t: "superficiel(le)", en: "superficial", pic: "🪞", cat: "Les défauts" },
    { t: "avoir des yeux de lynx", en: "to have eagle eyes", pic: "🐆", cat: "Expressions" },
    { t: "avoir une mémoire d'éléphant", en: "to have a memory like an elephant", pic: "🐘", cat: "Expressions" },
    { t: "être têtu(e) comme une mule", en: "to be as stubborn as a mule", pic: "🫏", cat: "Expressions" }
  ],

  grammar: [
    {
      id: "g-portrait",
      title: "A physical portrait · paying a compliment",
      body: [
        "Portrait: [[Il / Elle a les cheveux blancs, blonds, bruns, châtains, gris, courts, longs.]] · [[Elle fait une taille 44.]] · [[Il est grand / petit.]] · [[Il mesure 1,55 m.]] · [[Il est costaud = corpulent.]] · [[Elle est sèche = mince.]] · [[Il est musclé.]] · [[Elle porte des vêtements…]] · [[Il ressemble à…]]",
        "Compliments: [[Vous êtes une fée !]] · [[Tu es trop fort(e) !]] · [[Vous êtes la chance de ma journée.]] · [[Cette couleur te / vous donne bonne mine.]] Reactions: [[Merci, c'est gentil !]] · [[Ça me fait plaisir !]]"
      ],
      info: { type: "compare", title: "🧍 Three models, three portraits", cols: [
        { head: "Rose · 61 ans", en: "", color: "#9b4fb0", lines: [["Elle a de longs cheveux gris.", "long grey hair"], ["Elle fait du 44.", "size 44"], ["Elle pose et défile.", "she poses and walks the catwalk"]] },
        { head: "Mehdi · 46 ans", en: "", color: "#e86a2e", lines: [["Il est costaud.", "well-built"], ["Il est barbu.", "bearded"], ["Il se sent bien dans sa peau.", "he feels good about himself"]] },
        { head: "Jérémie · 26 ans", en: "", color: "#2f9c8a", lines: [["Il est brun et de petite taille.", "dark-haired, short"], ["Il mesure 1,55 m.", "1.55 m"], ["Il n'est pas très musclé.", "not very muscular"]] }
      ] },
      widget: {
        type: "combo", label: "Pay a compliment · pick a person and a compliment",
        rows: [{ k: "enfant", label: "🧒 to a child (tu)" }, { k: "voisine", label: "👵 to a neighbour (vous)" }, { k: "infirmiere", label: "🩺 to a nurse (vous)" }],
        cols: [{ k: "fort", label: "💪 strong / amazing" }, { k: "mine", label: "🌞 this colour suits" }, { k: "fee", label: "🧚 a fairy" }],
        out: {
          "enfant|fort": ["Tu es trop fort !", "You're amazing!", "casual: trop = very"], "enfant|mine": ["Ce pull rouge te donne bonne mine !", "That red jumper makes you look really well!"], "enfant|fee": ["Tu es une vraie petite fée !", "You're a real little fairy!"],
          "voisine|fort": ["Vous êtes vraiment très forte !", "You're really amazing!"], "voisine|mine": ["Cette couleur vous donne bonne mine !", "That colour makes you look really well!"], "voisine|fee": ["Votre jardin est magnifique, vous êtes une fée !", "Your garden is gorgeous, you're a fairy!"],
          "infirmiere|fort": ["Vous êtes formidable, merci !", "You're wonderful, thank you!"], "infirmiere|mine": ["Vous avez bonne mine aujourd'hui !", "You look really well today!"], "infirmiere|fee": ["Vous êtes une fée, merci pour tout !", "You're a fairy, thanks for everything!"]
        }
      }
    },
    {
      id: "g-equivalence",
      title: "Equivalence: [[aussi]], [[autant]], [[le même]], [[pareil]]",
      body: [
        "Adjective or adverb: [[aussi]] (+ [[que]]): [[Il est aussi blond que son père.]] · [[Il parle anglais aussi bien que sa mère.]] Verb: [[autant]] (+ [[que]]): [[Il s'intéresse autant à la mode qu'au sport.]] Equal quantity: [[autant de]] + noun: [[Il achète autant de vêtements que moi.]]",
        "Resemblance: [[le / la / les même(s)]] + noun (+ [[que]]): [[Il a le même nez que son père.]] · [[Elle a les mêmes yeux que sa sœur.]] [[pareil(le)]] = identical; it agrees: [[Ces deux robes sont pareilles.]] (≠ [[différentes]])"
      ],
      info: { type: "pattern", title: "🪞 Like father, like son", rows: [
        ["Il est", "aussi", { opts: ["grand", "blond", "drôle"] }, "que son père."],
        ["Il a", { opts: ["le même nez", "la même fossette", "les mêmes yeux"] }, "que son père."],
        ["Il", { opts: ["parle", "travaille", "rit"] }, "autant que son père."]
      ], note: "aussi + adjective · le / la / les même(s) + noun · verb + autant" },
      widget: {
        type: "sort", label: "aussi, autant or autant de?",
        cols: [{ k: "aussi", label: "aussi", color: "#2f9c8a" }, { k: "autant", label: "autant", color: "#e0a526" }, { k: "autantde", label: "autant de", color: "#9b4fb0" }],
        items: [
          { t: "Mathieu n'est pas … grand que son père.", k: "aussi", say: "Mathieu n'est pas aussi grand que son père." }, { t: "Ils parlent … l'un que l'autre.", k: "autant", say: "Ils parlent autant l'un que l'autre." },
          { t: "J'ai les cheveux … longs que l'année dernière.", k: "aussi", say: "J'ai les cheveux aussi longs que l'année dernière." }, { t: "Mon fils me ressemble … que ma fille.", k: "autant", say: "Mon fils me ressemble autant que ma fille." },
          { t: "Je ne fais pas … sport que ma sœur.", k: "autantde", say: "Je ne fais pas autant de sport que ma sœur." }, { t: "Avant, il n'y avait pas … mannequins atypiques.", k: "autantde", say: "Avant, il n'y avait pas autant de mannequins atypiques." }
        ]
      }
    },
    {
      id: "g-caractere",
      title: "Talking about personality",
      body: [
        "[[Il / Elle est du genre extraverti.]] · [[Il / Elle est d'un naturel timide.]] · [[Il / Elle est doué(e) pour la communication.]] · [[C'est quelqu'un de discret.]] (always masculine after <i>quelqu'un de</i>) · [[C'est une personne sociable.]]",
        "Every fault has a quality, and every quality a trap: [[bavard]] → [[sociable]] · [[timide]] → [[discret, réfléchi]] · [[maniaque]] → [[ordonné, rigoureux]] · [[déterminé]] → [[têtu]] (too much!)."
      ],
      info: { type: "compare", title: "🔄 The qualities of your faults", cols: [
        { head: "« Défaut »", en: "how you see it", color: "#e0474f", lines: [["bavard(e), bruyant(e)", "chatty, noisy"], ["timide", "shy"], ["maniaque", "obsessive"], ["têtu(e)", "stubborn"]] },
        { head: "Qualité", en: "how it can help", color: "#2f9c8a", lines: [["sociable, chaleureux, spontané", "sociable, warm, spontaneous"], ["discret, réfléchi, prudent", "discreet, thoughtful, careful"], ["ordonné, rigoureux", "tidy, rigorous"], ["déterminé(e)", "determined"]] }
      ] }
    },
    {
      id: "g-indefinis",
      title: "Totality: [[chaque]], [[tout]], [[toute]], [[tous]], [[toutes]]",
      body: [
        "[[chaque]] is invariable and always followed by a <b>singular</b> noun: [[Chaque qualité peut cacher un défaut.]] · [[Chaque corps est unique.]]",
        "[[tout, toute, tous, toutes]] + article/determiner agree with the noun: [[tout le monde]] · [[toute l'heure]] · [[tous les traits de caractère]] · [[toutes les choses]]. As a neutral pronoun, [[tout]] = everything, invariable: [[Tout va bien.]]",
        "[[chaque jour]] = [[tous les jours]] (same idea, different focus: each one / all of them)."
      ],
      info: { type: "card", style: "board", caption: "🔢 tout · toute · tous · toutes · tap a line", title: "TOUT + LE / LA / LES", sub: "agreement with the noun", rows: [["tout (m. sing.)", "tout le monde, tout le temps", "Tout le monde a des défauts."], ["toute (f. sing.)", "toute la journée, toute l'heure", "Nous avons parlé toute l'heure."], ["tous (m. pl.)", "tous les jours, tous les défauts", "Tous les défauts sont aussi des qualités."], ["toutes (f. pl.)", "toutes les choses, toutes les semaines", "Je trouve toutes les choses que je cherche."], ["chaque (invariable)", "chaque jour, chaque qualité", "Chaque qualité a un opposé positif."]], foot: "tout = everything (pronoun): Tout va bien !" },
      widget: {
        type: "sort", label: "tout, toute, tous or toutes?",
        cols: [{ k: "tout", label: "tout", color: "#3a6fd8" }, { k: "toute", label: "toute", color: "#e0474f" }, { k: "tous", label: "tous", color: "#2f9c8a" }, { k: "toutes", label: "toutes", color: "#9b4fb0" }],
        items: [
          { t: "… le monde a des défauts.", k: "tout", say: "Tout le monde a des défauts." }, { t: "Le coach donne … ces conseils sur son site.", k: "tous", say: "Le coach donne tous ces conseils sur son site." },
          { t: "… les qualités ont un opposé positif.", k: "toutes", say: "Toutes les qualités ont un opposé positif." }, { t: "Nous avons passé … l'heure à parler.", k: "toute", say: "Nous avons passé toute l'heure à parler." },
          { t: "… va bien !", k: "tout", say: "Tout va bien !" }, { t: "Je vais chez le coiffeur … les mois.", k: "tous", say: "Je vais chez le coiffeur tous les mois." }
        ]
      }
    },
    {
      id: "g-possessifs",
      title: "Possessive pronouns: [[le mien]], [[la tienne]], [[les leurs]]…",
      body: [
        "A possessive pronoun replaces a possessive adjective + noun ([[mon, ton, son, notre, votre, leur…]]). It always has [[le, la, les]]: [[C'est ma photo de profil.]] → [[C'est la mienne.]]",
        "It agrees with the <b>thing owned</b>, not the owner: [[sa photo]] (f. sing.) → [[la sienne]] · [[notre profil]] → [[le nôtre]] · [[leurs passions]] → [[les leurs]]. Note the circumflex: [[le nôtre, le vôtre]] (but [[notre, votre]] without)."
      ],
      info: { type: "card", style: "board", caption: "👜 The possessive pronouns · tap a row", title: "LE MIEN, LA MIENNE…", sub: "masc. sing. · fém. sing. · masc. pl. · fém. pl.", rows: U04_POSS.map(([p, a, b, c, d]) => [p, `${a} · ${b} · ${c} · ${d}`, `${a}, ${b}, ${c}, ${d}`]), foot: "C'est mon téléphone ? — Non, c'est le mien !" },
      widget: {
        type: "combo", label: "Replace with a possessive pronoun",
        rows: [{ k: "ma", label: "ma photo (f.)" }, { k: "mes", label: "mes chats (m. pl.)" }, { k: "votre", label: "votre texte (m.)" }, { k: "leur", label: "leur projet (m.)" }],
        cols: [{ k: "c", label: "C'est / Ce sont…" }],
        out: {
          "ma|c": ["C'est la mienne.", "It's mine."], "mes|c": ["Ce sont les miens.", "They're mine."], "votre|c": ["C'est le vôtre.", "It's yours.", "vôtre with ^"], "leur|c": ["C'est le leur.", "It's theirs."]
        }
      }
    }
  ],

  expressions: [
    { fn: "Pour faire le portrait physique de quelqu'un", fnEn: "physical description", icon: "🧍", items: [
      ["Il / Elle a les cheveux gris, longs.", "He / She has long grey hair.", "std", true],
      ["Elle fait une taille 44.", "She's a size 44.", "std"],
      ["Il mesure 1,55 m.", "He's 1.55 m tall.", "std", true],
      ["Il est costaud. Elle est sèche, mince.", "He's well-built. She's slim.", "std"],
      ["Elle ressemble à sa mère.", "She looks like her mother.", "std", true]
    ] },
    { fn: "Pour faire un compliment", fnEn: "compliments", icon: "💐", items: [
      ["Vous êtes une fée !", "You're a fairy!", "std"],
      ["Tu es trop fort(e) !", "You're amazing!", "fam", true],
      ["Vous êtes la chance de ma journée.", "You're the lucky charm of my day.", "std"],
      ["Cette couleur te / vous donne bonne mine.", "That colour makes you look well.", "std", true],
      ["Merci, c'est gentil ! Ça me fait plaisir.", "Thanks, that's kind! That makes me happy.", "std"]
    ] },
    { fn: "Pour parler du caractère de quelqu'un", fnEn: "personality", icon: "🧠", items: [
      ["Il / Elle est du genre extraverti.", "He / She is the outgoing type.", "std", true],
      ["Il / Elle est d'un naturel timide.", "He / She is shy by nature.", "std"],
      ["Il / Elle est doué(e) pour la communication.", "He / She is gifted at communication.", "std"],
      ["C'est quelqu'un de discret.", "He / She is a discreet person.", "std", true],
      ["C'est une personne sociable.", "He / She is a sociable person.", "std"]
    ] },
    { fn: "Pour décrire une œuvre d'art (atelier)", fnEn: "describing a work of art", icon: "🖼️", items: [
      ["C'est un tableau / une photographie. Cette œuvre date de…", "It's a painting / a photo. This work dates from…", "std"],
      ["On voit… · Elle représente…", "You see… · It shows…", "std"],
      ["Au premier plan, à gauche, au centre…", "In the foreground, on the left, in the centre…", "std"],
      ["Les couleurs sont chaudes / froides, claires / sombres.", "The colours are warm / cold, light / dark.", "std"],
      ["Cette œuvre inspire la joie / la tristesse / la tendresse.", "This work inspires joy / sadness / tenderness.", "sout"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · a compliment and its answer", lanes: ["Mia", "La voisine"], av: ["f7", "f6"], steps: [
    { s: 0, fr: "Votre écharpe est magnifique !", en: "Your scarf is gorgeous!" },
    { s: 1, fr: "Merci, c'est gentil !", en: "Thank you, that's kind!" },
    { s: 0, fr: "Cette couleur vous donne bonne mine.", en: "That colour makes you look well." },
    { s: 1, fr: "Ça me fait très plaisir. Et toi, tu as l'air en forme !", en: "That makes me very happy. And you look on great form!" },
    { s: 0, fr: "Oui, tout va bien !", en: "Yes, everything's fine!" }
  ] },

  sounds: {
    intro: "Phonie-graphie: the <b>nasal vowels</b>. Air goes through the nose and the mouth; you never pronounce the n or m. Compare: [o] mot / [ɔ̃] on · [a] la / [ɑ̃] an · [ɛ] vrai / [ɛ̃] vingt.",
    letters: [
      { l: "on · om", name: "[ɔ̃] · on", tip: "Rounded lips, nasal: [[le garçon]], [[mignon]], [[le prénom]], [[bon]]. Compare [o]: [[beau]], [[mot]].", ex: ["bon", "le garçon", "mignon", "le prénom"] },
      { l: "an · am · en · em", name: "[ɑ̃] · an", tip: "Open mouth, nasal: [[les temps changent]], [[différent]], [[grande]], [[la jambe]]. Compare [a]: [[la mode]].", ex: ["grand", "différent", "la jambe", "les temps changent"] },
      { l: "in · im · ain · aim · ein · un · (é)en · yn · ym", name: "[ɛ̃] · vingt", tip: "Stretched lips, nasal. Many spellings: [[vingt]], [[un mannequin]], [[maintenant]], [[européen]], [[le parfum]], [[plein]], [[sympa]].", ex: ["vingt", "un mannequin", "maintenant", "européen"] }
    ],
    pairs: [
      { a: ["beau", "beautiful"], b: ["bon", "good"], note: "[o] / [ɔ̃]" },
      { a: ["la mode", "fashion"], b: ["le monde", "the world"], note: "[o] / [ɔ̃]" },
      { a: ["la", "the"], b: ["lent", "slow"], note: "[a] / [ɑ̃]" },
      { a: ["la chance", "luck"], b: ["la chasse", "hunting"], note: "[ɑ̃] / [a]" },
      { a: ["mais", "but"], b: ["main", "hand"], note: "[ɛ] / [ɛ̃]" },
      { a: ["la mienne", "mine (f.)"], b: ["le mien", "mine (m.)"], note: "[ɛn] / [ɛ̃]" }
    ]
  },
  classify: {
    label: "👃 Quelle voyelle nasale ?", q: "Listen: which nasal vowel do you hear?",
    options: ["[ɔ̃] on", "[ɑ̃] an", "[ɛ̃] vingt"],
    items: [
      { say: "bon", a: 0 }, { say: "grand", a: 1 }, { say: "vingt", a: 2 }, { say: "le prénom", a: 0 },
      { say: "la jambe", a: 1 }, { say: "maintenant", a: 2 }, { say: "le menton", a: 0 }, { say: "le parfum", a: 2 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Rose a de longs cheveux gris.", ok: true },
    { type: "mcq", tag: "Dialogue 1", q: "Jérémie mesure…", options: ["1,55 m", "1,95 m", "1,65 m"], answer: 0 },
    { type: "tf", tag: "Dialogue 1", s: "Mehdi n'aime pas le mot « gros ».", ok: false, explain: "He has no problem with the word." },
    { type: "mcq", tag: "Dialogue 2", q: "Mia dit à sa voisine…", options: ["Cette couleur vous donne bonne mine.", "Vous êtes trop forte.", "Vous êtes la chance de ma journée."], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Aujourd'hui, Gilles ressemble autant qu'avant à Napoléon.", ok: false, explain: "He has a beard and is balding: he doesn't look the part any more." },
    { type: "mcq", tag: "Dialogue 4", q: "D'après le test, une personne bavarde est…", options: ["sociable et chaleureuse", "discrète et réfléchie", "ordonnée"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Pour un réseau professionnel, Inès conseille une photo avec des amis.", ok: false, explain: "The employer wants to see your face, not theirs." },
    { type: "tf", tag: "Dialogue 6", s: "Léo et Zoé sont aussi grands.", ok: true },
    { type: "fill", tag: "Portrait", sentence: "Il ___ 1,80 m.", options: ["mesure", "fait", "a"], answer: 0 },
    { type: "fill", tag: "Portrait", sentence: "Elle ___ du 38.", options: ["fait", "mesure", "porte"], answer: 0 },
    { type: "fill", tag: "Portrait", sentence: "Il n'a plus de cheveux : il est ___.", options: ["chauve", "barbu", "costaud"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "Franck est ___ grand que Napoléon.", options: ["aussi", "autant", "le même"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "Vous avez ___ nez.", options: ["le même", "la même", "aussi"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "J'ai acheté ___ robe que toi.", options: ["la même", "le même", "pareille"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "J'ai travaillé ___ que toi sur ce défilé.", options: ["autant", "aussi", "autant de"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "Ces deux chemises sont ___ .", options: ["pareilles", "pareil", "pareils"], answer: 0 },
    { type: "fill", tag: "Indéfinis", sentence: "___ corps est unique.", options: ["Chaque", "Tous", "Toutes"], answer: 0 },
    { type: "fill", tag: "Indéfinis", sentence: "___ les élèves vont avoir une photo.", options: ["Tous", "Chaque", "Toute"], answer: 0 },
    { type: "fill", tag: "Indéfinis", sentence: "___ les personnes présentes auront une photo.", options: ["Toutes", "Tous", "Chaque"], answer: 0 },
    { type: "type", tag: "Indéfinis", q: "Use chaque: « Je vais regarder tous les profils. »", answers: ["Je vais regarder chaque profil.", "Je vais regarder chaque profil"] },
    { type: "fill", tag: "Possessifs", sentence: "C'est ma photo de classe. C'est ___ .", options: ["la mienne", "le mien", "les miennes"], answer: 0 },
    { type: "fill", tag: "Possessifs", sentence: "Ce sont mes chats. Ce sont ___ .", options: ["les miens", "les miennes", "le mien"], answer: 0 },
    { type: "fill", tag: "Possessifs", sentence: "C'est leur projet. C'est ___ .", options: ["le leur", "la leur", "les leurs"], answer: 0 },
    { type: "type", tag: "Possessifs", q: "Replace: « C'est ton idée. »", answers: ["C'est la tienne.", "C'est la tienne"] },
    { type: "reply", tag: "Que répondre ?", prompt: "Cette couleur te donne bonne mine !", options: ["Merci, c'est gentil !", "C'est la mienne.", "Il mesure 1,55 m."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Il est comment, ton frère ?", options: ["Il est grand et brun, il a les mêmes yeux que moi.", "Tous les jours.", "Le sien."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Et ta sœur, elle a quel caractère ?", options: ["Elle est d'un naturel timide, mais très chaleureuse.", "Elle fait du 40.", "C'est la sienne."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Une personne qui ne dit pas la vérité est…", options: ["menteuse", "discrète", "prudente"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Le contraire de « paresseux » :", options: ["travailleur", "têtu", "bavard"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "« Avoir une mémoire d'éléphant », c'est…", options: ["se souvenir de tout", "être très grand", "être têtu"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["fidèle", "honnête", "chaleureux", "prétentieux"], answer: 3, explain: "prétentieux is a fault; the others are qualities." },
    { type: "order", tag: "Construisez", en: "He has the same nose as his father.", words: ["Il", "a", "le", "même", "nez", "que", "son", "père."] },
    { type: "listen", tag: "Écoute", q: "What does the speaker say about her sister?", say: "Ma sœur est aussi grande que moi, mais elle n'a pas les mêmes yeux.", options: ["same height, different eyes", "taller, same eyes", "shorter, same eyes"], answer: 0 }
  ],

  roleplays: [
    { title: "🕵️ Décris cette personne", brief: "A friend is meeting your cousin at the station but has never seen him. Describe him.", memo: ["Il mesure…", "Il a les cheveux…", "Il est…", "Il porte…", "Il ressemble à…"], partner: "f3", you: "m2",
      turns: [
        { them: "Il est comment, ton cousin ?", themEn: "What's your cousin like?", hint: "Tall (1.90 m), well-built.", you: "Il est grand, il mesure un mètre quatre-vingt-dix, et il est costaud.", youEn: "He's tall, 1.90 m, and well-built." },
        { them: "Et le visage ?", themEn: "And his face?", hint: "Short dark hair, a beard, a big smile.", you: "Il a les cheveux bruns et courts, il est barbu et il a un grand sourire.", youEn: "He has short dark hair, a beard and a big smile." },
        { them: "Il te ressemble ?", themEn: "Does he look like you?", hint: "Yes, the same eyes as you.", you: "Oui, il a les mêmes yeux que moi !", youEn: "Yes, he has the same eyes as me!" }
      ] },
    { title: "💐 Trois compliments", brief: "Pay compliments to three people today and react to their thanks.", memo: ["Tu es trop fort(e) !", "Cette couleur te donne bonne mine.", "Vous êtes une fée !"], partner: "f6", you: "f7",
      turns: [
        { them: "Bonjour ! J'ai fait un gâteau pour tout l'immeuble.", themEn: "Hello! I've made a cake for the whole building.", hint: "Tell your neighbour she's a fairy.", you: "Merci ! Vous êtes une fée !", youEn: "Thank you! You're a fairy!" },
        { them: "Oh, c'est gentil ! Ça me fait plaisir.", themEn: "Oh, how kind! That makes me happy.", hint: "Say her new scarf colour suits her.", you: "Et cette couleur vous donne bonne mine !", youEn: "And that colour makes you look really well!" },
        { them: "Merci beaucoup ! Bonne journée !", themEn: "Thank you very much! Have a nice day!", hint: "Wish her a good day too.", you: "Bonne journée à vous aussi !", youEn: "Have a nice day too!" }
      ] },
    { title: "🧠 Qualité ou défaut ?", brief: "A friend complains about a fault. Show them it's also a quality.", memo: ["Tu es du genre…", "C'est quelqu'un de…", "Chaque défaut…"], partner: "m3", you: "f3",
      turns: [
        { them: "Je suis trop bavard, tout le monde me le dit !", themEn: "I'm too chatty, everyone tells me!", hint: "Say he's sociable and warm.", you: "Mais non, tu es sociable et chaleureux !", youEn: "No, you're sociable and warm!" },
        { them: "Et je suis têtu…", themEn: "And I'm stubborn…", hint: "Say he's determined.", you: "Tu es déterminé, c'est une qualité !", youEn: "You're determined, that's a quality!" },
        { them: "Tu crois ?", themEn: "You think so?", hint: "Every fault is also a strength.", you: "Oui, chaque défaut est aussi une force !", youEn: "Yes, every fault is also a strength!" }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Participer à un café artistique", intro: "In groups, observe works of art on a shared theme, exchange your impressions, then present three works of your choice in a mini-exhibition.",
      steps: [["Préparation", ["Observe three works on the theme of the self-portrait and the mirror (for example: Élisabeth Vigée Le Brun's portrait of her daughter Julie looking in a mirror, 1787; René Magritte's <i>La Reproduction interdite</i>, 1937; Sabine Weiss's <i>Autoportrait</i>, 1954).", "What do they show? Describe the people, the setting, the colours, the light. When were they made? What do you learn about the artists?", "Share your impressions: what's the common theme? Which do you prefer, and why?"]], ["Réalisation", ["Choose another theme and look for visual works (photos, paintings, drawings).", "Discuss the emotions they inspire, choose 3 works and prepare a short presentation of each."]], ["Présentation", ["Present the three works in a little exhibition, each person presenting a part.", "Explain why you chose this theme and these works."]]],
      phrases: ["C'est un tableau / une photographie qui date de…", "Au premier plan, on voit…", "La couleur dominante est…", "Cette œuvre inspire la tendresse.", "Je préfère… parce que…"],
      model: { type: "card", style: "board", caption: "🖼️ Three works · tap a line", title: "CAFÉ ARTISTIQUE : LE MIROIR", sub: "portraits et autoportraits", rows: [["Vigée Le Brun · 1787", "une peintre française, spécialiste du portrait : sa fille Julie, 7 ans, se regarde dans un miroir… ou regarde sa mère qui la peint", "Élisabeth Vigée Le Brun est une grande peintre française. Elle a peint sa fille Julie devant un miroir."], ["Magritte · 1937", "un peintre surréaliste belge : un homme brun, de dos, devant un miroir qui reflète… son dos !", "René Magritte est un peintre belge surréaliste. Dans ce tableau, le miroir reflète le dos de l'homme."], ["Sabine Weiss · 1954", "une photographe suisse et française : un autoportrait en noir et blanc avec son appareil photo", "Sabine Weiss est une photographe suisse et française. C'est un autoportrait en noir et blanc."]], foot: "Quelle œuvre préférez-vous ? Pourquoi ?" } }
  ],
  delf: {
    skill: "Production écrite", title: "Describing a person's character (DELF A2)",
    about: "A typical DELF A2 writing task (about 60–80 words): describe the character of a friend, a family member or a fictional character. Give <b>qualities and faults</b>, an <b>example</b> for each, and say why you like this person. Use [[du genre…]], [[d'un naturel…]], [[quelqu'un de…]] and link your ideas.",
    tips: ["Start with who the person is: [[Ma meilleure amie s'appelle…]]", "Give 2–3 traits with an example: [[Elle est très généreuse : elle aide tout le monde.]]", "Mention a fault, kindly: [[Elle est un peu têtue, mais…]]", "Link: [[et]], [[mais]], [[parce que]], [[aussi]], [[par exemple]]. Finish with your feelings."],
    items: [
      { type: "mcq", q: "Which sentence gives a quality with an example?", options: ["Il est très chaleureux : il dit bonjour à tout le monde avec un grand sourire.", "Il est chaleureux.", "Il a les cheveux bruns."], answer: 0 },
      { type: "mcq", q: "Which sentence talks about character, not appearance?", options: ["C'est quelqu'un de discret.", "Il est de petite taille.", "Elle fait du 40."], answer: 0 },
      { type: "mcq", q: "« Elle est d'un naturel… »", options: ["optimiste", "blonde", "grande"], answer: 0 },
      { type: "mcq", q: "The best way to mention a fault kindly:", options: ["Il est un peu têtu, mais il est toujours honnête.", "Il est horrible et menteur.", "Il est têtu têtu têtu."], answer: 0 },
      { type: "mcq", q: "« C'est quelqu'un de… » (about a woman)", options: ["généreux", "généreuse", "générosité"], answer: 0, explain: "After quelqu'un de, the adjective stays masculine." }
    ]
  },
  detente: {
    title: "Les animaux de La Fontaine",
    intro: "In Jean de La Fontaine's fables (17th century), each animal represents a human character trait. Which trait?",
    items: [
      { type: "mcq", q: "Le renard est…", options: ["intelligent et menteur", "doux et honnête", "autoritaire et cruel"], answer: 0 },
      { type: "mcq", q: "Le chien est…", options: ["fidèle à son maître", "paresseux", "prétentieux"], answer: 0 },
      { type: "mcq", q: "L'agneau est…", options: ["doux et honnête", "intelligent et menteur", "envieux"], answer: 0 },
      { type: "mcq", q: "Le lion est…", options: ["autoritaire et cruel", "timide", "fidèle"], answer: 0 },
      { type: "mcq", q: "La fourmi est inquiète et travailleuse ; la cigale est…", options: ["optimiste et paresseuse", "pessimiste et travailleuse", "cruelle"], answer: 0 },
      { type: "mcq", q: "La grenouille veut être plus grosse que le bœuf : elle est…", options: ["envieuse et prétentieuse", "discrète", "réfléchie"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "pics", title: "🐾 Animal expressions · tap to hear", items: [
      { t: "avoir des yeux de lynx", pic: "🐆", en: "to see everything" }, { t: "avoir une mémoire d'éléphant", pic: "🐘", en: "to forget nothing" },
      { t: "être têtu comme une mule", pic: "🫏", en: "very stubborn" }, { t: "être fidèle comme un chien", pic: "🐕", en: "very loyal" },
      { t: "être rusé comme un renard", pic: "🦊", en: "very cunning" }, { t: "Ouistiti !", pic: "🐒", en: "Say cheese!" }
    ] }
  ],
  culture: [
    { icon: "🙄", kind: "Oh, le cliché !", t: "« Les Français sont prétentieux et sans gêne. »", d: "According to a study of the questions Europeans most often ask about each other online (reported by Ouest-France and quoted by the book), the French have a reputation for being pretentious and inconsiderate. And what's your country's reputation?" },
    { icon: "🦊", kind: "Civilisation", t: "Jean de La Fontaine, roi des animaux", d: "A 17th-century writer famous for his <b>fables</b>: short stories with a moral, where animals represent the people of Louis XIV's time. Famous morals: « La raison du plus fort est toujours la meilleure » (<i>Le Loup et l'Agneau</i>), « On a toujours besoin d'un plus petit que soi » (<i>Le Lion et le Rat</i>)." },
    { icon: "🫏", kind: "Francophonie", t: "Tête de mule, tête de cochon", d: "To call someone stubborn, French speakers in Europe say <b>avoir / être une (vraie) tête de mule</b>; in Québec, people mostly say <b>avoir une tête de cochon</b>." },
    { icon: "🧍", kind: "Civilisation", t: "Les mannequins atypiques", d: "More and more fashion brands work with models who don't fit the old beauty standards: older, bigger, shorter… Their message: every body is unique, and seeing people who look like you builds confidence." },
    { icon: "💐", kind: "Au fait !", t: "Le pouvoir des compliments", d: "Little kind words, said in passing without asking for anything in return, do good to the person who receives them… and to the person who gives them." },
    { icon: "🎨", kind: "Civilisation", t: "Trois artistes et un miroir", d: "Élisabeth Vigée Le Brun (1755–1842), French portrait painter of Queen Marie-Antoinette; René Magritte (1898–1967), Belgian surrealist painter; Sabine Weiss (1924–2021), Swiss and French photographer who always put people at the centre of her work." }
  ],
  tips: [
    { icon: "🪞", t: "aussi or autant?", d: "aussi + adjective/adverb ([[aussi grand]]); verb + autant ([[il travaille autant]]); autant de + noun." },
    { icon: "👜", t: "The pronoun matches the object", d: "[[sa photo]] → [[la sienne]], whoever owns it. His photo and her photo are both [[la sienne]]." },
    { icon: "1️⃣", t: "chaque + singular", d: "[[chaque jour]] but [[tous les jours]]." }
  ],
  mistakes: [
    ["Il est autant grand que moi.", "Il est aussi grand que moi.", "adjective → aussi"],
    ["Elle a le même yeux.", "Elle a les mêmes yeux.", "plural → les mêmes"],
    ["Chaque enfants sourient.", "Chaque enfant sourit.", "chaque + singular"],
    ["Tous le monde est là.", "Tout le monde est là.", "le monde → tout"],
    ["C'est ma photo, c'est mienne.", "C'est la mienne.", "pronoun with la"],
    ["C'est le nôtre (votre).", "C'est le vôtre.", "vôtre with ^ (pronoun)"],
    ["C'est quelqu'un de discrète.", "C'est quelqu'un de discret.", "quelqu'un de + masculine"],
    ["Il est 1,80 m.", "Il mesure 1,80 m.", "height → mesurer"]
  ]
});
