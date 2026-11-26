// Unité 12 · Soif de nature (Édito A2, 2e édition, book pp. 167–180)
// Situations: un défi de nettoyage · une fête de l'environnement · les bons gestes pour la biodiversité · des animaux surprenants · protester pour les arbres · le co-jardinage
// Grammar: l'impératif et les pronoms · l'expression du but (pour / pour que) · la forme passive
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u12", rubrique: 6, num: 12,
  title: "Thirsty for nature",
  titleFr: "Soif de nature",
  pages: "Book pp. 167–180",
  opener: { fr: "Ce sont les petits gestes qui comptent : multiplions-les !", en: "It's the small actions that count: let's multiply them!" },
  hero: { scene: "campagne", people: { "Zoé": "f2", "Malik": "m3" } },
  situations: [
    ["🗑️", "Un défi de nettoyage", "fear and worry: [[Cela nous fait peur.]] · [[Nous sommes inquiets.]]"],
    ["🌿", "Agir pour la biodiversité", "capacity: [[Nous sommes capables d'agir.]] · [[Chacun a un rôle à jouer.]]"],
    ["🐝", "Des animaux surprenants", "purpose: [[Les abeilles dansent pour que les autres comprennent.]]"],
    ["🐅", "De bonnes nouvelles", "approval: [[Bravo !]] · [[Nous approuvons cette décision.]]"],
    ["🌳", "Sauver les arbres", "protest: [[Nous ne sommes pas d'accord !]] · [[Nous disons non !]]"]
  ],
  goals: [
    "Express fear and worry: [[Ça me fait peur.]], [[Je suis inquiet / inquiète.]], [[J'ai peur pour…]], [[Je m'inquiète de…]]",
    "Express the ability to do something: [[Nous sommes capables de…]], [[Chacun peut aider à…]] · Say what you can do: [[Je sais…]], [[Je suis bon(ne) en…]], [[Je connais bien…]]",
    "Approve and protest: [[Bravo !]], [[Nous sommes pour…]] · [[Nous protestons contre…]], [[Nous disons non à…]]",
    "Use pronouns with the imperative: [[Multiplions-les !]], [[Mobilise-toi !]], [[Ne leur faites pas peur.]]",
    "Express purpose: [[pour + infinitif]] (same subject) · [[pour que + subjonctif]] (different subjects)",
    "Use the passive: [[Le site a été créé par…]] · [[Les photos seront publiées.]]"
  ],
  glance: [
    ["🗣️", "Communication", "fear · ability · approval · protest · saying what you can do"],
    ["🧩", "Grammaire", "imperative + pronouns · pour / pour que · the passive voice"],
    ["🗂️", "Vocabulaire", "natural spaces · environment · acting · pollution · animals"],
    ["🔊", "Phonie-graphie", "the 'e' [ə]: pronounced or silent?"],
    ["⭐", "The phrase to learn first", "[[Chacun a un rôle à jouer.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "The clean-up challenge", titleFr: "Au bureau · Le défi « Nettoyons ! »",
      note: "Zoé suggests her team join a challenge: clean a dirty place and post before/after photos. Listen to the expressions of fear and to the imperative with pronouns.",
      scene: "bureau", people: { "Zoé": "f2", "Malik": "m3", "Inès": "f5" },
      lines: [
        ["Zoé", "Vous avez vu toutes les bouteilles en plastique au bord de la rivière ? Ça me fait peur.", "Have you seen all the plastic bottles by the river? It frightens me."],
        ["Malik", "Moi aussi, je suis inquiet. Des milliers d'animaux meurent à cause des déchets.", "I'm worried too. Thousands of animals die because of the rubbish."],
        ["Zoé", "Alors mobilisons-nous ! Notre entreprise participe à un défi : on nettoie un endroit sale et on poste des photos avant/après.", "So let's get moving! Our company is taking part in a challenge: we clean a dirty place and post before/after photos."],
        ["Inès", "Bonne idée ! Les sacs poubelles, on les apporte ?", "Good idea! Shall we bring the bin bags?"],
        ["Zoé", "Oui, apportez-les ! Et des gants. Mais ne prenez pas de bouteilles d'eau en plastique : prenez des gourdes.", "Yes, bring them! And gloves. But don't take plastic water bottles: take reusable flasks."],
        ["Malik", "Et les photos, on les publie où ?", "And where do we post the photos?"],
        ["Zoé", "Publiez-les sur nos réseaux. Un jury choisira les meilleures !", "Post them on our networks. A jury will choose the best ones!"],
        ["Inès", "Ce sont les petits gestes qui comptent. Et le meilleur déchet, c'est celui qu'on ne produit pas !", "It's the small actions that count. And the best rubbish is the rubbish you don't produce!"]
      ],
      glossary: [["Ça me fait peur. Je suis inquiet.", "It frightens me. I'm worried."], ["Mobilisons-nous !", "Let's get moving!"], ["apportez-les ! publiez-les !", "bring them! post them!"], ["le déchet, la gourde", "the waste, the reusable bottle"]]
    },
    {
      id: "d2", n: 2, title: "The environment festival", titleFr: "Au téléphone · La fête de l'environnement",
      note: "Malik phones a friend in New Caledonia, who is volunteering for an environment festival. Listen to the vocabulary of natural spaces.",
      scene: "plage", staff: "Léa", phone: ["Malik", "Léa"], people: { "Malik": "m3", "Léa": "f8" },
      lines: [
        ["Malik", "Alors, ta fête de l'environnement, c'est quand ?", "So, your environment festival, when is it?"],
        ["Léa", "Samedi ! Ici, en Nouvelle-Calédonie, on vit sur un territoire exceptionnel : le lagon, la forêt tropicale, des espèces qu'on ne trouve nulle part ailleurs…", "Saturday! Here in New Caledonia we live in an exceptional place: the lagoon, the tropical forest, species you don't find anywhere else…"],
        ["Malik", "Et pourquoi une fête ?", "And why a festival?"],
        ["Léa", "Pour que les gens découvrent la nature et apprennent à la protéger. Le matin, on nettoie les plages.", "So that people discover nature and learn to protect it. In the morning we clean the beaches."],
        ["Malik", "Et l'après-midi ?", "And in the afternoon?"],
        ["Léa", "Des balades dans la nature avec des guides, et des ateliers pour apprendre à économiser l'eau.", "Walks in nature with guides, and workshops to learn how to save water."],
        ["Malik", "Bravo ! J'aimerais bien être avec vous.", "Well done! I'd love to be with you."],
        ["Léa", "Viens l'année prochaine ! Chacun a un rôle à jouer.", "Come next year! Everyone has a role to play."]
      ],
      glossary: [["le lagon, l'archipel", "the lagoon, the archipelago"], ["la forêt tropicale", "the rainforest"], ["l'espèce (f.)", "the species"], ["pour que + subjonctif", "so that"]]
    },
    {
      id: "d3", n: 3, title: "The right actions", titleFr: "À la maison · Les bons gestes",
      note: "Zoé's flatmate isn't very eco-friendly. Zoé gives him advice with the imperative and pronouns. Listen to the place of the pronouns.",
      scene: "appartement", people: { "Zoé": "f2", "Hugo": "m4" },
      lines: [
        ["Hugo", "Mon téléphone ne marche plus. Je le jette et j'en achète un nouveau.", "My phone doesn't work any more. I'll throw it away and buy a new one."],
        ["Zoé", "Non, ne le jette pas ! Répare-le, ou donne-le à un réparateur.", "No, don't throw it away! Repair it, or give it to a repairer."],
        ["Hugo", "Bon… Et ces produits ménagers, ils sont bien ?", "OK… And these cleaning products, are they good?"],
        ["Zoé", "Ils sont pleins de produits chimiques : n'en achète plus ! Fabriques-en toi-même avec du vinaigre et du citron.", "They're full of chemicals: don't buy any more! Make some yourself with vinegar and lemon."],
        ["Hugo", "Et mes déchets ? Je mets tout dans la même poubelle…", "And my rubbish? I put everything in the same bin…"],
        ["Zoé", "Trie-les ! Le plastique et le papier, mets-les dans la poubelle jaune.", "Sort it! Plastic and paper, put them in the yellow bin."],
        ["Hugo", "D'accord, d'accord… Je suis capable de changer, tu sais !", "OK, OK… I'm capable of changing, you know!"],
        ["Zoé", "J'en suis sûre. Pense-y chaque jour !", "I'm sure of it. Think about it every day!"]
      ],
      glossary: [["répare-le, ne le jette pas", "repair it, don't throw it away"], ["n'en achète plus, fabriques-en", "don't buy any more, make some"], ["trier, la poubelle jaune", "to sort, the yellow (recycling) bin"], ["être capable de", "to be able to"]]
    },
    {
      id: "d4", n: 4, title: "Strange animal behaviour", titleFr: "Au parc · Pourquoi le chat fait ça ?",
      note: "Malik and his niece Lila talk about strange animal behaviour from a book Lila is reading. Listen to [[pour]] + infinitive and [[pour que]] + subjunctive.",
      scene: "jardin", people: { "Lila": "k1", "Malik": "m3" },
      lines: [
        ["Lila", "Tonton, tu sais pourquoi mon chat boit l'eau du robinet et pas l'eau de son bol ?", "Uncle, do you know why my cat drinks tap water and not the water in his bowl?"],
        ["Malik", "Non, pourquoi ?", "No, why?"],
        ["Lila", "Dans mon livre, ils disent que ses ancêtres ne buvaient pas d'eau qui ne bouge pas, pour ne pas s'empoisonner !", "In my book they say his ancestors didn't drink still water, so as not to poison themselves!"],
        ["Malik", "Intéressant ! Et les abeilles, elles dansent, c'est vrai ?", "Interesting! And bees dance, is that true?"],
        ["Lila", "Oui, elles dansent pour que les autres abeilles sachent où sont les fleurs.", "Yes, they dance so that the other bees know where the flowers are."],
        ["Malik", "Et le coq ? Il chante juste pour nous réveiller ?", "And the rooster? Does it crow just to wake us up?"],
        ["Lila", "Non ! Il change son chant pour informer les autres en cas de danger.", "No! It changes its crow to warn the others in case of danger."],
        ["Malik", "Alors, pour que ton chat soit content, mets son bol d'eau loin de sa gamelle !", "So, for your cat to be happy, put his water bowl far from his food dish!"]
      ],
      glossary: [["pour + infinitif", "(in order) to"], ["pour que + subjonctif", "so that"], ["s'empoisonner", "to poison oneself"], ["la gamelle", "the (pet) food bowl"]]
    },
    {
      id: "d5", n: 5, title: "No to cutting down the trees!", titleFr: "Sur la place · Sauvons les arbres !",
      note: "The town wants to cut down trees to build a car park. Residents protest. A journalist interviews Zoé. Listen to how she protests and approves, and to the passive voice.",
      scene: "ville", staff: "Le journaliste", people: { "Le journaliste": "m6", "Zoé": "f2" },
      lines: [
        ["Le journaliste", "Pourquoi êtes-vous ici ce matin ?", "Why are you here this morning?"],
        ["Zoé", "Nous protestons contre la destruction des arbres de la place. Ils vont être coupés pour construire un parking !", "We're protesting against the destruction of the trees in the square. They're going to be cut down to build a car park!"],
        ["Le journaliste", "La décision a été prise par la mairie ?", "Was the decision made by the town hall?"],
        ["Zoé", "Oui, et nous ne sommes pas d'accord avec cela. Un arbre est un être vivant, il doit être respecté !", "Yes, and we don't agree with it. A tree is a living being, it must be respected!"],
        ["Le journaliste", "Qu'est-ce que vous proposez ?", "What do you suggest?"],
        ["Zoé", "Une mini-forêt ! Trois cents arbres peuvent être plantés sur l'équivalent de six places de parking.", "A mini-forest! Three hundred trees can be planted on the equivalent of six parking spaces."],
        ["Le journaliste", "Et vous êtes nombreux ?", "And are there many of you?"],
        ["Zoé", "Notre pétition a été signée par deux mille habitants. Nous disons non à la violence contre la nature !", "Our petition has been signed by two thousand residents. We say no to violence against nature!"]
      ],
      glossary: [["protester contre", "to protest against"], ["ne pas être d'accord avec", "to disagree with"], ["a été prise / signée par", "was taken / signed by (passive)"], ["un être vivant", "a living being"]]
    },
    {
      id: "d6", n: 6, title: "Gardening together", titleFr: "Au jardin · Le co-jardinage",
      note: "Malik has a garden but no time. Through a co-gardening website, he meets Nadia, who has no garden but knows plants very well. Listen to how they say what they can do.",
      scene: "jardin", people: { "Malik": "m3", "Nadia": "f6" },
      lines: [
        ["Malik", "Bonjour, vous êtes Nadia ? Merci d'avoir répondu à mon annonce !", "Hello, are you Nadia? Thanks for answering my ad!"],
        ["Nadia", "Avec plaisir ! J'habite en appartement, je n'ai pas de jardin. Mais je connais très bien les plantes.", "With pleasure! I live in a flat, I don't have a garden. But I know plants very well."],
        ["Malik", "Moi, je ne sais pas jardiner du tout. Je suis bon en informatique, c'est tout !", "Me, I can't garden at all. I'm good at computers, that's all!"],
        ["Nadia", "Pas de problème. Je sais faire un potager, et je n'utilise pas de pesticides.", "No problem. I know how to make a vegetable patch, and I don't use pesticides."],
        ["Malik", "Parfait ! Et les légumes ?", "Perfect! And the vegetables?"],
        ["Nadia", "On les partage ! Moitié pour vous, moitié pour moi. C'est le principe du site.", "We share them! Half for you, half for me. That's how the website works."],
        ["Malik", "J'approuve ! Et en échange, je peux vous aider avec votre ordinateur.", "I approve! And in exchange, I can help you with your computer."],
        ["Nadia", "Marché conclu ! Mon ordinateur a été réparé l'an dernier, mais il est encore lent…", "Deal! My computer was repaired last year, but it's still slow…"]
      ],
      glossary: [["Je sais + infinitif", "I can, I know how to"], ["Je suis bon(ne) en…", "I'm good at…"], ["Je connais bien…", "I know … well"], ["le potager, les pesticides", "the vegetable patch, pesticides"]]
    }
  ],

  vocab: [
    { t: "l'archipel, l'île", en: "the archipelago, the island", pic: "🏝️", cat: "Les milieux naturels", g: "m" },
    { t: "le désert", en: "the desert", pic: "🏜️", cat: "Les milieux naturels", g: "m" },
    { t: "la forêt (tropicale)", en: "the (tropical) forest", pic: "🌴", cat: "Les milieux naturels", g: "f" },
    { t: "le lagon", en: "the lagoon", pic: "🌊", cat: "Les milieux naturels", g: "m" },
    { t: "l'océan, la rivière", en: "the ocean, the river", pic: "🌊", cat: "Les milieux naturels", g: "m" },
    { t: "le parc naturel, le site naturel", en: "the nature park, natural site", pic: "🏞️", cat: "Les milieux naturels", g: "m" },
    { t: "la planète", en: "the planet", pic: "🌍", cat: "Les milieux naturels", g: "f" },
    { t: "la biodiversité", en: "biodiversity", pic: "🦋", cat: "L'environnement", g: "f" },
    { t: "l'écologie, écologique", en: "ecology, ecological", pic: "♻️", cat: "L'environnement", g: "f" },
    { t: "l'espèce protégée", en: "the protected species", pic: "🛡️", cat: "L'environnement", g: "f" },
    { t: "la faune et la flore", en: "wildlife and plants", pic: "🌺", cat: "L'environnement", g: "f" },
    { t: "se mobiliser, agir", en: "to mobilise, to act", pic: "✊", cat: "Agir pour l'environnement" },
    { t: "préserver, protéger", en: "to preserve, to protect", pic: "🤲", cat: "Agir pour l'environnement" },
    { t: "recycler, trier", en: "to recycle, to sort", pic: "♻️", cat: "Agir pour l'environnement" },
    { t: "sauver la planète", en: "to save the planet", pic: "🌏", cat: "Agir pour l'environnement" },
    { t: "le changement climatique", en: "climate change", pic: "🌡️", cat: "La pollution", g: "m" },
    { t: "le déchet, la poubelle", en: "the waste, the bin", pic: "🗑️", cat: "La pollution", g: "m" },
    { t: "la destruction, disparaître", en: "destruction, to disappear", pic: "🪓", cat: "La pollution", g: "f" },
    { t: "être en danger", en: "to be in danger", pic: "⚠️", cat: "La pollution" },
    { t: "le gaspillage", en: "waste (wastefulness)", pic: "🚰", cat: "La pollution", g: "m" },
    { t: "les pesticides, polluant(e)", en: "pesticides, polluting", pic: "☠️", cat: "La pollution", g: "m" },
    { t: "le plastique", en: "plastic", pic: "🧴", cat: "La pollution", g: "m" },
    { t: "le chat, le chien", en: "the cat, the dog", pic: "🐈", cat: "Les animaux domestiques", g: "m" },
    { t: "le cheval (les chevaux)", en: "the horse", pic: "🐎", cat: "Les animaux domestiques", g: "m" },
    { t: "la chèvre, le mouton, la vache", en: "the goat, the sheep, the cow", pic: "🐐", cat: "Les animaux domestiques", g: "f" },
    { t: "le lapin, le poisson", en: "the rabbit, the fish", pic: "🐇", cat: "Les animaux domestiques", g: "m" },
    { t: "l'abeille", en: "the bee", pic: "🐝", cat: "Les animaux du jardin", g: "f" },
    { t: "l'araignée", en: "the spider", pic: "🕷️", cat: "Les animaux du jardin", g: "f" },
    { t: "l'escargot, la libellule", en: "the snail, the dragonfly", pic: "🐌", cat: "Les animaux du jardin", g: "m" },
    { t: "le serpent, la tortue", en: "the snake, the tortoise", pic: "🐍", cat: "Les animaux du jardin", g: "m" },
    { t: "le caméléon", en: "the chameleon", pic: "🦎", cat: "Les animaux du jardin", g: "m" },
    { t: "le dauphin", en: "the dolphin", pic: "🐬", cat: "Les mammifères sauvages", g: "m" },
    { t: "l'hippopotame", en: "the hippopotamus", pic: "🦛", cat: "Les mammifères sauvages", g: "m" },
    { t: "le singe, le tigre, la panthère", en: "the monkey, the tiger, the panther", pic: "🐒", cat: "Les mammifères sauvages", g: "m" },
    { t: "le rat", en: "the rat", pic: "🐀", cat: "Les mammifères sauvages", g: "m" },
    { t: "l'aigle, la chouette", en: "the eagle, the owl", pic: "🦅", cat: "Les oiseaux", g: "m" },
    { t: "le canard, le canari", en: "the duck, the canary", pic: "🦆", cat: "Les oiseaux", g: "m" },
    { t: "le coq, la poule", en: "the rooster, the hen", pic: "🐓", cat: "Les oiseaux", g: "m" }
  ],

  grammar: [
    {
      id: "g-peur",
      title: "Fear, worry and ability",
      body: [
        "Fear and worry: [[Cela / Ça me fait peur.]] · [[Je suis inquiet / inquiète.]] · [[J'ai peur pour notre faune et notre flore.]] · [[Je m'inquiète de l'avenir de la Terre.]]",
        "Ability: [[Nous sommes capables d'agir.]] · [[Chacun(e) a un rôle à jouer.]] · [[Chacun(e) peut aider à préserver la biodiversité.]]",
        "What you can do: [[Je sais faire beaucoup de choses.]] · [[Je sais animer un réseau.]] · [[Je suis bon(ne) en informatique.]] · [[Je connais très bien les plantes.]]"
      ],
      info: { type: "compare", title: "😟 Worried or 💪 capable?", cols: [
        { head: "La peur, l'inquiétude", en: "fear, worry", color: "#e0474f", lines: [["Ça me fait peur.", "It frightens me."], ["Je suis inquiète.", "I'm worried."], ["J'ai peur pour les animaux.", "I'm afraid for the animals."]] },
        { head: "La capacité", en: "ability", color: "#2f9c8a", lines: [["Nous sommes capables d'agir.", "We're able to act."], ["Chacun peut aider.", "Everyone can help."], ["Je sais trier mes déchets.", "I know how to sort my rubbish."]] }
      ] }
    },
    {
      id: "g-imperatif",
      title: "The imperative and pronouns",
      body: [
        "<b>Affirmative</b> imperative: the pronoun goes <b>after</b> the verb, with a hyphen: [[Multiplions-les !]] · [[Répare-le !]] · [[Donne-leur de l'argent !]] · [[me]] and [[te]] become [[moi]] and [[toi]]: [[Mobilise-toi !]] · [[Dis-moi !]]",
        "With [[en]] and [[y]], -er verbs keep the <b>-s</b> in the tu form, for the sound: [[Fabriques-en toi-même.]] · [[Penses-y !]]",
        "<b>Negative</b> imperative: the pronoun stays <b>before</b> the verb, nothing changes: [[Ne le jette pas !]] · [[Ne leur faites pas peur.]] · [[N'en achète pas.]]"
      ],
      info: { type: "compare", title: "📢 Affirmative or negative?", cols: [
        { head: "Affirmatif · verbe-pronom", en: "pronoun after, hyphen", color: "#2f9c8a", lines: [["Répare-le !", "Repair it!"], ["Trie-les !", "Sort them!"], ["Mobilisons-nous !", "Let's mobilise!"], ["Fabriques-en !", "Make some!"]] },
        { head: "Négatif · ne + pronom + verbe + pas", en: "pronoun before", color: "#e0474f", lines: [["Ne le jette pas !", "Don't throw it away!"], ["Ne les mélange pas !", "Don't mix them!"], ["Ne nous décourageons pas !", "Let's not get discouraged!"], ["N'en achète pas !", "Don't buy any!"]] }
      ] },
      widget: {
        type: "combo", label: "Give an eco-tip · pick a form and an object",
        rows: [{ k: "aff", label: "✅ affirmatif" }, { k: "neg", label: "❌ négatif" }],
        cols: [{ k: "tel", label: "📱 ton vieux téléphone (le)" }, { k: "dechets", label: "🗑️ tes déchets (les)" }, { k: "plastique", label: "🧴 du plastique (en)" }, { k: "animaux", label: "🦌 aux animaux (leur)" }],
        out: {
          "aff|tel": ["Répare-le !", "Repair it!"], "neg|tel": ["Ne le jette pas !", "Don't throw it away!"],
          "aff|dechets": ["Trie-les !", "Sort them!"], "neg|dechets": ["Ne les laisse pas dans la nature !", "Don't leave them in nature!"],
          "aff|plastique": ["Recycles-en le plus possible !", "Recycle as much of it as possible!", "-s before en"], "neg|plastique": ["N'en achète plus !", "Don't buy any more!"],
          "aff|animaux": ["Laisse-leur de l'espace !", "Leave them some space!"], "neg|animaux": ["Ne leur fais pas peur !", "Don't frighten them!"]
        }
      }
    },
    {
      id: "g-but",
      title: "Expressing purpose: [[pour]] / [[pour que]]",
      body: [
        "Same subject in both parts → [[pour + infinitif]] (negative: [[pour ne pas + infinitif]]): [[Le coq chante pour informer en cas d'urgence.]] · [[Ils ne buvaient pas d'eau stagnante pour ne pas s'empoisonner.]]",
        "Different subjects → [[pour que + subjonctif]]: [[La poule crie pour que ses camarades sachent qu'il y a un danger.]] · [[Pour que votre chat se sente bien, éloignez la gamelle du bol d'eau !]]"
      ],
      info: { type: "merge", title: "🎯 One subject or two?", rows: [
        { a: "Elle lit un livre.", b: "pour", g: "x", r: "pour comprendre les abeilles", ex: "Elle lit un livre pour comprendre les abeilles.", en: "same subject → infinitive" },
        { a: "Les abeilles dansent.", b: "pour que", g: "x", r: "pour que les autres comprennent", ex: "Les abeilles dansent pour que les autres comprennent.", en: "different subjects → subjunctive" },
        { a: "Je travaille chez moi.", b: "pour ne pas", g: "x", r: "pour ne pas laisser mon chien seul", ex: "Je travaille chez moi pour ne pas laisser mon chien seul.", en: "negative infinitive" },
        { a: "Il faut protéger la nature.", b: "pour que", g: "x", r: "pour que les espèces ne disparaissent pas", ex: "Il faut protéger la nature pour que les espèces ne disparaissent pas.", en: "negative subjunctive" }
      ] },
      widget: {
        type: "sort", label: "pour or pour que?",
        cols: [{ k: "pour", label: "pour + infinitif", color: "#3a6fd8" }, { k: "que", label: "pour que + subjonctif", color: "#9b4fb0" }],
        items: [
          { t: "On célèbre la journée des animaux ___ améliorer leur vie.", k: "pour", say: "On célèbre la journée des animaux pour améliorer leur vie." }, { t: "Elle laisse sortir son chat ___ il rencontre d'autres chats.", k: "que", say: "Elle laisse sortir son chat pour qu'il rencontre d'autres chats." },
          { t: "Je ne fais pas de bruit ___ ne pas déranger les oiseaux.", k: "pour", say: "Je ne fais pas de bruit pour ne pas déranger les oiseaux." }, { t: "___ ton rat s'amuse, offre-lui une petite voiture !", k: "que", say: "Pour que ton rat s'amuse, offre-lui une petite voiture !" },
          { t: "Vous pouvez adopter une poule ___ avoir des œufs.", k: "pour", say: "Vous pouvez adopter une poule pour avoir des œufs." }, { t: "Promenez votre chien ___ il soit en forme.", k: "que", say: "Promenez votre chien pour qu'il soit en forme." }
        ]
      }
    },
    {
      id: "g-approbation",
      title: "Approving and protesting",
      body: [
        "Approval: [[Bravo !]] · [[Heureusement !]] · [[Nous sommes pour les bonnes nouvelles !]] · [[Ils sont d'accord pour le protéger.]] · [[Nous approuvons cette décision.]] · [[J'approuve !]]",
        "Protest: [[Nous ne sommes pas d'accord avec cela.]] · [[Nous protestons contre la destruction des arbres.]] · [[Nous disons non à la violence contre la nature.]] · [[Je suis contre !]]"
      ],
      info: { type: "scale", title: "👍 From protest to approval", colors: ["#e0474f", "#2f9c8a"], items: [
        { v: 6, fr: "Nous disons non !", en: "we say no!", pic: "✋" }, { v: 24, fr: "Nous protestons contre ce projet.", en: "we protest against this", pic: "📢" },
        { v: 42, fr: "Nous ne sommes pas d'accord.", en: "we disagree", pic: "🙅" }, { v: 72, fr: "Nous sommes pour !", en: "we're for it!", pic: "🙌" },
        { v: 94, fr: "Bravo ! Nous approuvons cette décision.", en: "well done! we approve", pic: "👏" }
      ], ends: ["contre", "pour"] }
    },
    {
      id: "g-passif",
      title: "The passive voice",
      body: [
        "The passive insists on the <b>result</b> or on <b>who</b> did the action. Active: [[Un botaniste développe la méthode.]] → Passive: [[La méthode est développée par un botaniste.]]",
        "Form: <b>être</b> (at the right tense) + <b>past participle</b>, which agrees with the subject; the agent comes after [[par]]. Present: [[Mon jardin est cultivé par Nadia.]] · Passé composé: [[Le site a été créé par une jardinière.]] · Futur: [[Les photos seront publiées par le jury.]]"
      ],
      info: { type: "pattern", title: "🌳 être + participe passé (+ par…)", rows: [
        ["Les arbres", "sont", { opts: ["coupés par la mairie.", "protégés par l'association.", "plantés par les habitants."] }],
        ["La pétition", "a été", { opts: ["signée par 2 000 habitants.", "écrite par des étudiants.", "envoyée au maire."] }],
        ["Les meilleures photos", "seront", { opts: ["publiées sur nos réseaux.", "choisies par un jury.", "exposées à la mairie."] }]
      ], note: "agreement: la pétition → signée · les arbres → coupés" },
      widget: {
        type: "combo", label: "Make it passive · pick a tense and an action",
        rows: [{ k: "pres", label: "présent" }, { k: "pc", label: "passé composé" }, { k: "fut", label: "futur" }],
        cols: [{ k: "dechets", label: "🗑️ Les bénévoles ramassent les déchets." }, { k: "espece", label: "🦎 Un biologiste découvre une espèce." }, { k: "campagne", label: "📣 Le collectif réalise une campagne." }],
        out: {
          "pres|dechets": ["Les déchets sont ramassés par les bénévoles.", "The rubbish is collected by the volunteers."], "pc|dechets": ["Les déchets ont été ramassés par les bénévoles.", "The rubbish was collected by the volunteers."], "fut|dechets": ["Les déchets seront ramassés par les bénévoles.", "The rubbish will be collected by the volunteers."],
          "pres|espece": ["Une espèce est découverte par un biologiste.", "A species is discovered by a biologist."], "pc|espece": ["Une nouvelle espèce a été découverte par un biologiste.", "A new species was discovered by a biologist.", "feminine → découverte"], "fut|espece": ["Une espèce sera découverte par un biologiste.", "A species will be discovered by a biologist."],
          "pres|campagne": ["Une campagne est réalisée par le collectif.", "A campaign is carried out by the group."], "pc|campagne": ["Une campagne a été réalisée par le collectif.", "A campaign was carried out by the group."], "fut|campagne": ["Une campagne sera réalisée par le collectif.", "A campaign will be carried out by the group."]
        }
      }
    }
  ],

  expressions: [
    { fn: "Pour exprimer la peur, l'inquiétude", fnEn: "fear, worry", icon: "😟", items: [
      ["Cela nous fait peur.", "It frightens us.", "std", true],
      ["Nous sommes inquiets.", "We're worried.", "std", true],
      ["J'ai peur pour notre faune et notre flore.", "I'm afraid for our wildlife and plants.", "std"],
      ["Vous vous inquiétez de l'avenir de la Terre ?", "Are you worried about the future of the Earth?", "std"]
    ] },
    { fn: "Pour exprimer sa capacité / ce qu'on sait faire", fnEn: "ability · skills", icon: "💪", items: [
      ["Nous sommes capables d'agir.", "We're able to act.", "std", true],
      ["Chacun a un rôle à jouer.", "Everyone has a role to play.", "std", true],
      ["Je sais faire beaucoup de choses.", "I can do lots of things.", "std"],
      ["Je suis bon(ne) en informatique.", "I'm good at IT.", "std"],
      ["Je connais très bien les plantes.", "I know plants very well.", "std"]
    ] },
    { fn: "Pour exprimer son approbation", fnEn: "approval", icon: "👏", items: [
      ["Bravo !", "Well done!", "std", true],
      ["Nous sommes pour les bonnes nouvelles !", "We're all for good news!", "std"],
      ["Nous approuvons cette décision.", "We approve of this decision.", "poli", true],
      ["Ils sont d'accord pour le protéger.", "They agree to protect it.", "std"]
    ] },
    { fn: "Pour protester", fnEn: "protesting", icon: "📢", items: [
      ["Nous ne sommes pas d'accord avec cela.", "We don't agree with that.", "std", true],
      ["Nous protestons contre la destruction des arbres.", "We protest against the destruction of the trees.", "std", true],
      ["Nous disons non à la violence contre la nature.", "We say no to violence against nature.", "std"],
      ["Je vote contre !", "I vote against!", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · convincing a friend to join an action", lanes: ["Toi", "Ton ami(e)"], av: ["f2", "m4"], steps: [
    { s: 0, fr: "Tu as vu les déchets sur la plage ? Ça me fait peur.", en: "Have you seen the rubbish on the beach? It frightens me." },
    { s: 1, fr: "Oui, je suis inquiet aussi. Mais qu'est-ce qu'on peut faire ?", en: "Yes, I'm worried too. But what can we do?" },
    { s: 0, fr: "On est capables d'agir ! Samedi, on nettoie la plage. Viens avec nous !", en: "We're able to act! On Saturday we're cleaning the beach. Come with us!" },
    { s: 1, fr: "Pourquoi pas. Qu'est-ce que j'apporte ?", en: "Why not. What shall I bring?" },
    { s: 0, fr: "Des gants et une gourde. Ne prends pas de bouteille en plastique !", en: "Gloves and a reusable bottle. Don't take a plastic bottle!" },
    { s: 1, fr: "D'accord. Bravo pour l'idée !", en: "OK. Well done for the idea!" }
  ] },

  sounds: {
    intro: "Phonie-graphie: the letter <b>e</b> without an accent [ə] is sometimes pronounced, sometimes silent. Silent: at the end of a word ([[la Terre]]) and often between two consonant sounds ([[sam(e)di]], [[maint(e)nant]]). Pronounced: at the start of a word ([[demain]], [[le]]) and when it's needed to avoid three consonant sounds together ([[notr(e) planète]] → [[notre planète]]).",
    letters: [
      { l: "e muet (silent)", name: "[ə] → ∅", tip: "End of a word: [[la Terre]], [[une poule]]. Between two consonant sounds: [[sam(e)di]], [[la bouch(e)rie]], [[ach(e)ter]].", ex: ["la Terre", "samedi", "acheter"] },
      { l: "e prononcé", name: "[ə] · le", tip: "Start of a word: [[demain]], [[le]], [[recycler]]. With three consonant sounds: [[des entreprises]] [ʁəp], [[notre planète]].", ex: ["demain", "recycler", "une entreprise"] }
    ],
    pairs: [
      { a: ["tu protégeras", "you will protect"], b: ["tu trieras", "you will sort"], note: "silent e in the future" },
      { a: ["répare-le !", "repair it!"], b: ["ne le jette pas !", "don't throw it away!"], note: "impératif" },
      { a: ["pour comprendre", "to understand"], b: ["pour qu'il comprenne", "so that he understands"], note: "but" },
      { a: ["il protège", "he protects"], b: ["il est protégé", "he is protected"], note: "actif / passif" },
      { a: ["le coq", "the rooster"], b: ["la poule", "the hen"], note: "les oiseaux" },
      { a: ["le lagon", "the lagoon"], b: ["l'archipel", "the archipelago"], note: "milieux naturels" }
    ]
  },
  classify: {
    label: "🔊 Do you hear the [ə]?", q: "Listen to the bold e: do you hear [ə], or is it silent?",
    options: ["[ə] I hear it", "∅ silent"],
    items: [
      { say: "demain", a: 0 }, { say: "samedi", a: 1 }, { say: "le recyclage", a: 0 }, { say: "la Terre", a: 1 },
      { say: "acheter", a: 1 }, { say: "responsable", a: 1 }, { say: "le coq", a: 0 }, { say: "maintenant", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Malik n'est pas inquiet pour les animaux.", ok: false, explain: "« Moi aussi, je suis inquiet. »" },
    { type: "mcq", tag: "Dialogue 1", q: "Pour le défi, il faut…", options: ["nettoyer un endroit et poster des photos avant/après", "photographier des animaux", "acheter des bouteilles d'eau"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "Léa vit…", options: ["en Nouvelle-Calédonie", "au Québec", "en Bretagne"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Le matin de la fête, on nettoie les plages.", ok: true },
    { type: "mcq", tag: "Dialogue 3", q: "Zoé conseille à Hugo de…", options: ["réparer son téléphone", "acheter un nouveau téléphone", "jeter ses produits dans la rivière"], answer: 0 },
    { type: "mcq", tag: "Dialogue 4", q: "Pourquoi les abeilles dansent-elles ?", options: ["pour que les autres sachent où sont les fleurs", "pour s'amuser", "pour faire peur aux oiseaux"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "La pétition a été signée par deux mille habitants.", ok: true },
    { type: "mcq", tag: "Dialogue 6", q: "Nadia…", options: ["n'a pas de jardin mais connaît bien les plantes", "a un grand jardin", "est bonne en informatique"], answer: 0 },
    { type: "fill", tag: "Impératif", sentence: "Tes déchets ? Trie-___ !", options: ["les", "leur", "en"], answer: 0 },
    { type: "fill", tag: "Impératif", sentence: "Ton téléphone ? Ne ___ jette pas !", options: ["le", "lui", "y"], answer: 0 },
    { type: "fill", tag: "Impératif", sentence: "Il faut agir : mobilise-___ !", options: ["toi", "te", "tu"], answer: 0 },
    { type: "fill", tag: "Impératif", sentence: "Les produits naturels ? Fabrique___ -en toi-même !", options: ["s", "z", "∅"], answer: 0, explain: "Fabriques-en: -s before en." },
    { type: "type", tag: "Impératif", q: "Replace with a pronoun: « Ne donne pas à manger aux animaux sauvages ! »", answers: ["Ne leur donne pas à manger !"] },
    { type: "fill", tag: "But", sentence: "Le coq chante ___ informer les autres.", options: ["pour", "pour que", "parce que"], answer: 0 },
    { type: "fill", tag: "But", sentence: "Promenez votre chien pour qu'il ___ en forme.", options: ["soit", "est", "être"], answer: 0 },
    { type: "fill", tag: "But", sentence: "Il faut protéger la biodiversité pour que les espèces ne ___ pas.", options: ["disparaissent", "disparaissent pas", "disparaître"], answer: 0 },
    { type: "type", tag: "But", q: "Conjugate if necessary: « Salma lit un livre pour (comprendre) … les abeilles. »", answers: ["Salma lit un livre pour comprendre les abeilles.", "comprendre"] },
    { type: "fill", tag: "Passif", sentence: "Le site ___ créé par une jardinière.", options: ["a été", "a", "était être"], answer: 0 },
    { type: "fill", tag: "Passif", sentence: "Les meilleures photos seront ___ par le jury.", options: ["publiées", "publié", "publier"], answer: 0 },
    { type: "fill", tag: "Passif", sentence: "La biodiversité ___ menacée par la pollution.", options: ["est", "a", "sera été"], answer: 0 },
    { type: "type", tag: "Passif", q: "Passive: « Un biologiste a découvert une nouvelle espèce. »", answers: ["Une nouvelle espèce a été découverte par un biologiste."] },
    { type: "reply", tag: "Que répondre ?", prompt: "L'Inde a 30 % de tigres en plus en cinq ans !", options: ["Bravo ! C'est une bonne nouvelle.", "Nous protestons contre les tigres.", "Ça me fait rire."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "La mairie veut couper tous les arbres du parc.", options: ["Nous ne sommes pas d'accord avec cela !", "Bravo, j'approuve !", "Pour que coupe."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce que vous savez faire ?", options: ["Je sais jardiner et je connais bien les plantes.", "Je suis inquiète.", "Elle a été créée."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "L'ensemble des animaux d'une région, c'est…", options: ["la faune", "la flore", "le lagon"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Un oiseau qui vit la nuit :", options: ["la chouette", "le canari", "la poule"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "« Poser un lapin » veut dire…", options: ["ne pas aller à un rendez-vous", "dormir tôt", "être très lent"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["trier", "recycler", "valoriser", "disparaître"], answer: 3, explain: "disparaître = to disappear; the others are positive actions." },
    { type: "order", tag: "Construisez", en: "The trees were planted by the residents.", words: ["Les", "arbres", "ont", "été", "plantés", "par", "les", "habitants."] },
    { type: "listen", tag: "Écoute", q: "Why is the speaker worried?", say: "Je suis inquiète : il y a du plastique partout dans l'océan, et beaucoup d'animaux meurent.", options: ["plastic in the ocean is killing animals", "her cat is ill", "the trees are being planted"], answer: 0 }
  ],

  roleplays: [
    { title: "🌿 Présente une action pour la nature (DELF)", brief: "You're a member of an environmental centre. A friend wants to help: present the environment festival and explain why to take part.", memo: ["C'est une fête pour que…", "Le matin… L'après-midi…", "Chacun a un rôle à jouer."], partner: "m4", you: "f2",
      turns: [
        { them: "J'aimerais faire quelque chose pour la nature. Tu as une idée ?", themEn: "I'd like to do something for nature. Any ideas?", hint: "Present the environment festival on Saturday.", you: "Oui ! Samedi, il y a la fête de l'environnement. Viens !", youEn: "Yes! On Saturday there's the environment festival. Come!" },
        { them: "Qu'est-ce qu'on y fait ?", themEn: "What do people do there?", hint: "In the morning you clean the beach; in the afternoon there are walks with guides.", you: "Le matin, on nettoie la plage. L'après-midi, on fait des balades avec des guides.", youEn: "In the morning we clean the beach. In the afternoon there are walks with guides." },
        { them: "Et pourquoi c'est important ?", themEn: "And why is it important?", hint: "So that people learn to protect nature: everyone has a role to play.", you: "Pour que les gens apprennent à protéger la nature. Chacun a un rôle à jouer !", youEn: "So that people learn to protect nature. Everyone has a role to play!" }
      ] },
    { title: "📢 Proteste contre un projet", brief: "A journalist interviews you at a protest against a project that destroys a natural space.", memo: ["Nous protestons contre…", "Nous ne sommes pas d'accord…", "La décision a été prise par…"], partner: "m6", you: "m3",
      turns: [
        { them: "Pourquoi manifestez-vous ?", themEn: "Why are you protesting?", hint: "You protest against the destruction of the forest for a shopping centre.", you: "Nous protestons contre la destruction de la forêt pour un centre commercial.", youEn: "We're protesting against the destruction of the forest for a shopping centre." },
        { them: "Qui a pris cette décision ?", themEn: "Who made this decision?", hint: "Passive: the decision was taken by the region.", you: "La décision a été prise par la région, et nous ne sommes pas d'accord.", youEn: "The decision was taken by the region, and we don't agree." },
        { them: "Qu'est-ce que vous demandez ?", themEn: "What are you asking for?", hint: "Say no to the project; protect the forest so that the animals don't disappear.", you: "Nous disons non à ce projet ! Protégeons la forêt pour que les animaux ne disparaissent pas.", youEn: "We say no to this project! Let's protect the forest so that the animals don't disappear." }
      ] },
    { title: "🌱 Propose tes compétences (co-jardinage)", brief: "You answer an ad on a co-gardening website. Say what you can do.", memo: ["Je sais…", "Je suis bon(ne) en…", "Je connais bien…"], partner: "f6", you: "m2",
      turns: [
        { them: "Bonjour ! Vous avez de l'expérience en jardinage ?", themEn: "Hello! Do you have any gardening experience?", hint: "You know how to grow vegetables and know plants well.", you: "Oui, je sais faire pousser des légumes et je connais bien les plantes.", youEn: "Yes, I know how to grow vegetables and I know plants well." },
        { them: "Vous utilisez des pesticides ?", themEn: "Do you use pesticides?", hint: "Never; you use natural products.", you: "Jamais ! J'utilise seulement des produits naturels.", youEn: "Never! I only use natural products." },
        { them: "Parfait. Et pour les légumes ?", themEn: "Perfect. And the vegetables?", hint: "Suggest sharing them half and half.", you: "On les partage : moitié pour vous, moitié pour moi !", youEn: "We share them: half for you, half for me!" }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Présenter des œuvres pour un festival", intro: "For a 'Literature and Ecology' festival, each group presents a text about nature and the class chooses the five works for the programme.",
      steps: [["Préparation", ["In three groups, choose a text about nature (the book offers a 19th-century poem, an essay about dinosaurs and a swimmer's account of plastic pollution).", "Discuss: who's the author? What's it about? Do you like it? Why?"]], ["Réalisation", ["Prepare an oral presentation of the work (author, theme, your opinion).", "Look for other works or press titles, francophone or not, for the festival programme."]], ["Présentation", ["Each group presents its suggestions.", "As a class, discuss and vote for the five works of the festival."]]],
      phrases: ["Ce texte est extrait de…", "Il a été écrit par… en…", "Il parle de…", "J'aime bien ce texte parce que…", "Ce texte me fait rire, réfléchir, rêver…", "Je vote pour / contre !", "Nous nous sommes mis(es) d'accord."],
      model: { type: "card", style: "board", caption: "🗳️ The class vote · tap a line", title: "FESTIVAL LITTÉRATURE ET ÉCOLOGIE", sub: "notre sélection · 5 œuvres", rows: [
        ["Poème", "Il a été écrit au XIXe siècle. Il me fait rêver.", "Ce poème a été écrit au dix-neuvième siècle. Il me fait rêver."],
        ["Essai", "Il parle des dinosaures. Il nous fait réfléchir.", "Cet essai parle des dinosaures. Il nous fait réfléchir."],
        ["Récit", "Un nageur traverse une zone de plastique pour alerter le public.", "Un nageur traverse une zone de plastique pour alerter le public."],
        ["Vote", "Un grand oui pour ces trois textes !", "Un grand oui pour ces trois textes !"]
      ], foot: "Nous nous sommes mis d'accord !" } }
  ],
  delf: {
    skill: "Épreuve blanche", title: "The four DELF A2 papers: are you ready?",
    about: "After Unit 12, the book offers a full mock DELF A2 exam (p. 181). The four papers: <b>1. Compréhension de l'oral</b> (about 25 min, /25): questions on short everyday recordings (announcements, radio, phone messages, dialogues), heard twice. <b>2. Compréhension des écrits</b> (30 min, /25): questions on short everyday texts (reviews, e-mails, notices, articles). <b>3. Production écrite</b> (45 min, /25): describe an event or experience, and write a message to invite, thank, apologise, ask, inform… <b>4. Production orale</b> (6–8 min + 10 min preparation, /25): entretien dirigé, monologue suivi, exercice en interaction. You need 50/100 in total, with at least 5/25 in each paper.",
    tips: ["Do the mock exam in real conditions: timed, without a dictionary.", "Read every question before you listen or read.", "In writing, respect the word count and the type of text.", "In speaking, use what you've learnt: linking words, the past tenses, the conditionnel for polite requests."],
    items: [
      { type: "mcq", q: "How many papers are there in the DELF A2?", options: ["4", "2", "6"], answer: 0 },
      { type: "mcq", q: "Each paper is marked out of…", options: ["25", "10", "100"], answer: 0 },
      { type: "mcq", q: "In the listening paper, you hear each document…", options: ["twice", "once", "three times"], answer: 0 },
      { type: "mcq", q: "The writing paper lasts…", options: ["45 minutes", "10 minutes", "2 hours"], answer: 0 },
      { type: "listen", q: "Mock listening: what must you do?", say: "Attention, mesdames et messieurs : le tramway est en panne. Merci de descendre et de prendre le bus.", options: ["get off the tram and take the bus", "stay in the tram", "buy a ticket"], answer: 0 },
      { type: "mcq", q: "Mock reading: « Le Potager de Magali : produits bio, tous les plats sont végétariens. » Who will like it?", options: ["a friend who doesn't eat meat", "a friend who loves seafood", "a family looking for a games room"], answer: 0 }
    ]
  },
  detente: {
    title: "Expressions animales",
    intro: "French loves animal idioms. What do these mean?",
    items: [
      { type: "mcq", q: "Se coucher avec les poules", options: ["aller dormir très tôt", "dormir dehors", "ne pas dormir"], answer: 0 },
      { type: "mcq", q: "Poser un lapin à quelqu'un", options: ["ne pas venir à un rendez-vous", "offrir un cadeau", "faire un gâteau"], answer: 0 },
      { type: "mcq", q: "Avancer comme une tortue", options: ["être très lent", "être très rapide", "nager"], answer: 0 },
      { type: "mcq", q: "Devinette : elle a huit pattes mais pas d'ailes.", options: ["l'araignée", "l'abeille", "la libellule"], answer: 0 },
      { type: "mcq", q: "Devinette : c'est un reptile qui peut changer de couleur.", options: ["le caméléon", "le serpent", "la tortue"], answer: 0 },
      { type: "mcq", q: "Devinette : elle fait du miel.", options: ["l'abeille", "la poule", "la vache"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🐾 Oh, le cliché ! « Les Français, fous de leurs animaux » · pets in France, 2020 (FACCO, quoted by the book)", unit: " M", items: [
      { fr: "les poissons", en: "fish", v: 26, pic: "🐟" },
      { fr: "les chats", en: "cats", v: 15, pic: "🐈" },
      { fr: "les chiens", en: "dogs", v: 7.5, pic: "🐕" }
    ] }
  ],
  culture: [
    { icon: "🐈", kind: "Oh, le cliché !", t: "« Les Français, fous de leurs animaux de compagnie. »", d: "True! In 2020 there were about 75 million pets in France for about 67 million inhabitants, according to FACCO figures quoted by the book: including 15 million cats, 7.5 million dogs and 26 million fish." },
    { icon: "🦎", kind: "Au fait !", t: "De bonnes nouvelles", d: "Scientists discovered in Madagascar the world's smallest known reptile, <i>Brookesia nana</i>, a chameleon: the male measures 13.5 mm. India now has about 3,000 wild tigers, 30 % more in five years. And fourteen countries agreed to reduce fishing so that fish stocks can renew." },
    { icon: "🌳", kind: "Civilisation", t: "Les mini-forêts", d: "Japanese botanist <b>Akira Miyawaki</b> developed a method to grow dense micro-forests: about 300 trees on the space of six parking places, growing faster, thirty times denser and with a hundred times more biodiversity than a traditional forest, according to the article in the book. Nantes has adopted it." },
    { icon: "📜", kind: "Civilisation", t: "Les droits de l'arbre", d: "In France, trees are still legally considered objects. The association A.R.B.R.E.S wrote a 'declaration of the rights of the tree': a tree is a living being and must be respected, and some trees should be 'natural monuments'." },
    { icon: "🏝️", kind: "Francophonie", t: "La Nouvelle-Calédonie", d: "This French archipelago in the Pacific has one of the largest lagoons in the world and many species found nowhere else. An environment festival there invites residents to clean beaches and discover nature." },
    { icon: "🌱", kind: "Francophonie", t: "Reboiser la Côte d'Ivoire", d: "The book presents a reforestation campaign in Côte d'Ivoire: with 500 CFA francs, you plant five forest trees." }
  ],
  tips: [
    { icon: "📢", t: "Imperative: look at the sign", d: "Affirmative → pronoun after with a hyphen ([[fais-le]]). Negative → pronoun before ([[ne le fais pas]])." },
    { icon: "🎯", t: "pour or pour que?", d: "Count the subjects: one → [[pour + infinitif]]; two → [[pour que + subjonctif]]." },
    { icon: "🔄", t: "Passive = être + participle", d: "The tense is carried by [[être]]: [[est créé]], [[a été créé]], [[sera créé]]. The participle agrees like an adjective." }
  ],
  mistakes: [
    ["Le jette pas !", "Ne le jette pas !", "negative imperative: ne… pas, pronoun before"],
    ["Mobilise-te !", "Mobilise-toi !", "te → toi after the verb"],
    ["Fabrique-en !", "Fabriques-en !", "-s before en / y"],
    ["Elle danse pour que les autres comprendre.", "Elle danse pour que les autres comprennent.", "pour que + subjonctif"],
    ["Je travaille pour que je gagne de l'argent.", "Je travaille pour gagner de l'argent.", "same subject → pour + infinitif"],
    ["La pétition a été signé.", "La pétition a été signée.", "passive: agreement with the subject"],
    ["Le site a créé par Nadia.", "Le site a été créé par Nadia.", "passive needs être"],
    ["Je suis bon en jardiner.", "Je sais jardiner. / Je suis bon en jardinage.", "bon en + noun; savoir + verb"]
  ]
});
