// Unité 9 · Consommer responsable (Édito A2, 2e édition, book pp. 125–138)
// Situations: le défi « Rien de neuf » · vendre en ligne · acheter d'occasion · le fait maison · emprunter des outils · la troc party
// Grammar: le conditionnel présent (politesse, souhait, conseil, proposition; hypothèse) · le gérondif
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u09", rubrique: 5, num: 9,
  title: "Responsible consumption",
  titleFr: "Consommer responsable",
  pages: "Book pp. 125–138",
  opener: { fr: "Dans un monde idéal, tout le monde ferait du troc !", en: "In an ideal world, everyone would swap!" },
  hero: { scene: "fete", people: { "Lina": "f7", "Renato": "m3", "Jo": "m5" } },
  situations: [
    ["🚫", "Le défi « Rien de neuf »", "wishes: [[J'aimerais arrêter d'acheter du matériel de sport.]] · [[Je souhaiterais économiser.]]"],
    ["📸", "Vendre en ligne", "advice: [[Tu devrais refaire tes photos.]] · [[Je te conseille de préciser la marque.]]"],
    ["🚲", "D'occasion", "polite requests: [[Pourriez-vous baisser un peu le prix ?]]"],
    ["🧶", "Le fait maison", "doing two things at once: [[Elle tricote en regardant la télé.]]"],
    ["🔧", "Entre voisins", "asking a favour: [[Tu pourrais me prêter ta perceuse ?]] · [[Ça te dérangerait de… ?]]"]
  ],
  goals: [
    "Express a wish or desire: [[Je voudrais…]], [[J'aimerais…]], [[Je souhaiterais…]], [[J'ai envie de…]], [[J'espère que…]]",
    "Give advice: [[Tu devrais…]], [[Tu pourrais…]], [[Je te conseille de…]], [[C'est mieux de…]], [[Il faut…]]",
    "Ask for a favour politely: [[Tu pourrais m'aider ?]], [[Ça te dérangerait de… ?]], [[Pourriez-vous m'expliquer… ?]]",
    "Form the conditionnel présent (infinitive + imparfait endings) and use it for politeness, wishes, advice and suggestions",
    "Use the conditionnel to imagine and make hypotheses: [[Dans un monde sans argent, il n'y aurait pas de banques.]]",
    "Use the gérondif for simultaneous actions and manner: [[en écoutant]], [[en mettant une annonce]]"
  ],
  glance: [
    ["🗣️", "Communication", "wishes · advice · asking for a service · imagining another world"],
    ["🧩", "Grammaire", "the conditionnel présent (two uses) · the gérondif"],
    ["🗂️", "Vocabulaire", "consuming · people · product categories · the product · manual work · materials · tools · repairs"],
    ["🔊", "Phonie-graphie", "[g] (gratuit) and [ʒ] (jardin)"],
    ["⭐", "The phrase to learn first", "[[Tu pourrais m'aider, s'il te plaît ?]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "The 'Nothing new' challenge", titleFr: "Au café · Le défi « Rien de neuf »",
      note: "Lina is trying to buy nothing new for a year. She tells Renato her wishes. Listen to the conditionnel for wishes and advice.",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Renato": "m3", "Lina": "f7" },
      lines: [
        ["Renato", "C'est quoi, ce défi « Rien de neuf » ?", "What's this 'Nothing new' challenge?"],
        ["Lina", "Pendant un an, j'essaie de réduire au maximum mes achats d'objets neufs : meubles, vêtements, électroménager… Pas l'alimentation, bien sûr !", "For a year, I try to cut down my purchases of new things as much as possible: furniture, clothes, appliances… Not food, of course!"],
        ["Renato", "Et ça marche ?", "And is it working?"],
        ["Lina", "Plus ou moins ! J'emprunte déjà mes livres à la bibliothèque. Mais j'aimerais arrêter d'acheter du matériel de sport : c'est cher.", "More or less! I already borrow my books from the library. But I'd like to stop buying sports equipment: it's expensive."],
        ["Renato", "Tu pourrais louer ton matériel. Beaucoup de magasins louent des vélos ou des tentes.", "You could rent your equipment. Lots of shops rent out bikes or tents."],
        ["Lina", "Bonne idée ! Et je souhaiterais économiser de l'argent, mais je suis toujours attirée par les soldes…", "Good idea! And I'd like to save money, but I'm always tempted by the sales…"],
        ["Renato", "Tu devrais te désabonner des newsletters des magasins !", "You should unsubscribe from the shops' newsletters!"],
        ["Lina", "Tu as raison. J'espère que je vais apprendre à résister ! Ça te dirait d'essayer avec moi ?", "You're right. I hope I'll learn to resist! Would you like to try with me?"]
      ],
      glossary: [["J'aimerais / Je souhaiterais…", "I'd like… (conditionnel)"], ["Tu pourrais… · Tu devrais…", "You could… · You should…"], ["Ça te dirait de… ?", "Would you like to…?"], ["emprunter ≠ prêter", "to borrow ≠ to lend"]]
    },
    {
      id: "d2", n: 2, title: "Selling clothes online", titleFr: "Sur le canapé · Comment vendre en ligne ?",
      note: "Lou can't sell her clothes on a second-hand website. Her friends Clem and Greg give advice. Listen to the different ways of giving advice.",
      scene: "appartement", people: { "Lou": "f8", "Clem": "f3", "Greg": "m2" },
      lines: [
        ["Lou", "Je n'arrive pas à vendre mes vêtements sur le site. Vous auriez des conseils à me donner ?", "I can't manage to sell my clothes on the site. Would you have any advice for me?"],
        ["Clem", "Fais voir tes annonces… Ah, il faut préciser la marque, la taille et la couleur !", "Let me see your ads… Ah, you have to give the brand, the size and the colour!"],
        ["Greg", "Et tu devrais refaire les photos : elles sont trop sombres.", "And you should redo the photos: they're too dark."],
        ["Clem", "Je te conseille de prendre tes photos vers midi, près d'une fenêtre. Et c'est mieux de porter les vêtements.", "I advise you to take your photos around midday, near a window. And it's better to wear the clothes."],
        ["Lou", "Et le prix ? Je ne sais jamais quoi mettre.", "And the price? I never know what to put."],
        ["Greg", "Regarde aussi les autres annonces ! Tu vois les prix des acheteurs pour le même article.", "Look at the other ads too! You'll see buyers' prices for the same item."],
        ["Lou", "Merci, vous êtes géniaux ! Je refais tout ce soir.", "Thanks, you're brilliant! I'll redo everything tonight."]
      ],
      glossary: [["il faut + infinitif", "you must"], ["tu devrais + infinitif", "you should"], ["je te conseille de + infinitif", "I advise you to"], ["c'est mieux de + infinitif", "it's better to"]]
    },
    {
      id: "d3", n: 3, title: "A second-hand bike", titleFr: "Chez un particulier · Vends vélo d'occasion",
      note: "Ana answers an ad for a second-hand bike. Listen to the product vocabulary and to polite requests in the conditionnel.",
      scene: "rue", people: { "Ana": "f4", "Le vendeur": "m6" },
      lines: [
        ["Ana", "Bonjour, je viens pour le vélo. Je pourrais le voir ?", "Hello, I've come about the bike. Could I see it?"],
        ["Le vendeur", "Bien sûr, le voilà. Je l'ai acheté neuf il y a six mois, taille adulte, couleur noire.", "Of course, here it is. I bought it new six months ago, adult size, black."],
        ["Ana", "Il est de quelle marque ?", "What make is it?"],
        ["Le vendeur", "C'est une marque française. Il est en très bon état, il n'est pas abîmé.", "It's a French make. It's in very good condition, it's not damaged."],
        ["Ana", "Il me plaît beaucoup. Mais deux cent cinquante euros, c'est un peu cher pour moi. Pourriez-vous baisser un peu le prix ?", "I really like it. But two hundred and fifty euros is a bit expensive for me. Could you lower the price a little?"],
        ["Le vendeur", "Je voudrais le vendre vite… Deux cent vingt, ça vous irait ?", "I'd like to sell it quickly… Would two hundred and twenty suit you?"],
        ["Ana", "Deux cents, et je le prends tout de suite ?", "Two hundred, and I'll take it right away?"],
        ["Le vendeur", "Bon, d'accord ! Vous payez comment ?", "OK, fine! How will you pay?"]
      ],
      glossary: [["d'occasion ≠ neuf", "second-hand ≠ new"], ["la marque, la taille", "the make/brand, the size"], ["abîmé(e)", "damaged"], ["négocier le prix", "to haggle over the price"]]
    },
    {
      id: "d4", n: 4, title: "A creative workshop", titleFr: "À la mercerie · L'atelier couture",
      note: "Inès signs up for a sewing workshop. The shop owner explains how it works. Listen to the gérondif: [[en écoutant]], [[en regardant]], [[en fabriquant]].",
      scene: "vetements", staff: "La mercière", people: { "La mercière": "f6", "Inès": "f2" },
      lines: [
        ["Inès", "Bonjour ! Je voudrais m'inscrire à l'atelier du samedi. Je n'ai jamais fait de couture…", "Hello! I'd like to sign up for the Saturday workshop. I've never done any sewing…"],
        ["La mercière", "Pas de problème ! On apprend en faisant. Ce samedi, on fabrique un sac en jean avec un vieux pantalon.", "No problem! You learn by doing. This Saturday we're making a denim bag from an old pair of trousers."],
        ["Inès", "Super ! J'adore le fait maison. Je cuisine en écoutant de la musique, mais la couture, c'est nouveau.", "Great! I love homemade things. I cook while listening to music, but sewing is new."],
        ["La mercière", "Vous verrez, c'est relaxant. Beaucoup de gens apprennent aussi en regardant des tutoriels.", "You'll see, it's relaxing. Lots of people also learn by watching tutorials."],
        ["Inès", "Et c'est vrai qu'on fait des économies ?", "And is it true you save money?"],
        ["La mercière", "Oui ! En réparant vos vêtements et en fabriquant vos accessoires, vous dépensez moins. Et c'est meilleur pour la planète.", "Yes! By repairing your clothes and making your accessories, you spend less. And it's better for the planet."],
        ["Inès", "Qu'est-ce que je dois apporter ?", "What should I bring?"],
        ["La mercière", "Juste un vieux jean. Le tissu, le fil et les machines sont ici. Il y a même du café : on discute en cousant !", "Just an old pair of jeans. The fabric, thread and machines are here. There's even coffee: we chat while we sew!"]
      ],
      glossary: [["en + participe présent", "while / by …ing (gérondif)"], ["la couture, coudre", "sewing, to sew"], ["en jean, en tissu", "made of denim, of fabric"], ["le tutoriel", "the tutorial"]]
    },
    {
      id: "d5", n: 5, title: "Borrowing a tool", titleFr: "Sur le palier · Tu pourrais me prêter… ?",
      note: "Paul needs a tool to put up a shelf. He asks his neighbour for a favour. Listen to how he asks politely, and to the repair vocabulary.",
      scene: "appartement", people: { "Paul": "m6", "Mme Diallo": "f6" },
      lines: [
        ["Paul", "Bonjour, madame Diallo. Excusez-moi de vous déranger… Je voudrais installer une étagère. Vous auriez une perceuse à me prêter ?", "Hello, Mrs Diallo. Sorry to bother you… I'd like to put up a shelf. Would you have a drill to lend me?"],
        ["Mme Diallo", "Je n'en ai pas, désolée. Mais vous connaissez la bricothèque du quartier ?", "I don't have one, sorry. But do you know the neighbourhood tool library?"],
        ["Paul", "Non. C'est quoi ?", "No. What's that?"],
        ["Mme Diallo", "C'est comme une bibliothèque, mais avec des outils : des scies, des échelles, des ponceuses… On prend un abonnement d'une dizaine d'euros par an.", "It's like a library, but with tools: saws, ladders, sanders… You take out a subscription of about ten euros a year."],
        ["Paul", "Génial ! Et vous pourriez me rendre un autre service ? Mon lave-linge est en panne…", "Great! And could you do me another favour? My washing machine has broken down…"],
        ["Mme Diallo", "Ça tombe bien, mon fils est technicien ! Il pourrait passer samedi. Souvent, il ne faut pas changer de pièce, il suffit de bien chercher la panne.", "That's lucky, my son is a technician! He could come round on Saturday. Often you don't need to change a part, you just have to find the fault."],
        ["Paul", "Ça ne le dérangerait pas ?", "Wouldn't he mind?"],
        ["Mme Diallo", "Pas du tout ! En échange, vous pourriez m'aider à monter mon nouveau meuble.", "Not at all! In exchange, you could help me assemble my new furniture."]
      ],
      glossary: [["Vous auriez… à me prêter ?", "Would you have… to lend me?"], ["la bricothèque", "the tool library"], ["être en panne, réparer", "to be broken down, to repair"], ["rendre service", "to do a favour"]]
    },
    {
      id: "d6", n: 6, title: "The swap party", titleFr: "À la troc party · Un monde sans argent ?",
      note: "At a swap party, a journalist interviews Jo. Listen to the conditionnel used to imagine an ideal world.",
      scene: "fete", staff: "La journaliste", people: { "La journaliste": "f5", "Jo": "m5" },
      lines: [
        ["La journaliste", "Bonsoir ! Qu'est-ce que vous avez apporté ?", "Good evening! What did you bring?"],
        ["Jo", "Une lampe et des livres. Je vide mes placards ! Et j'ai pris un jeu de société.", "A lamp and some books. I'm clearing out my cupboards! And I took a board game."],
        ["La journaliste", "Imaginez un monde où il n'y aurait pas d'argent, où tout serait gratuit… Comment serait votre monde idéal ?", "Imagine a world with no money, where everything was free… What would your ideal world be like?"],
        ["Jo", "Dans un monde idéal, tout le monde ferait du troc ! On échangerait nos vêtements, on partagerait nos outils…", "In an ideal world, everyone would swap! We'd exchange our clothes, we'd share our tools…"],
        ["La journaliste", "Et il n'y aurait plus de magasins ?", "And there'd be no more shops?"],
        ["Jo", "Si, mais on n'achèterait pas de choses inutiles. Les gens seraient des consommateurs responsables et la planète se porterait mieux.", "Yes, but we wouldn't buy useless things. People would be responsible consumers and the planet would be in better shape."],
        ["La journaliste", "Et vous, qu'est-ce que vous feriez avec plus de temps ?", "And you, what would you do with more time?"],
        ["Jo", "J'apprendrais à jardiner et je ferais tous mes meubles moi-même !", "I'd learn to garden and I'd make all my furniture myself!"]
      ],
      glossary: [["le troc, troquer", "swapping, to swap"], ["vider ses placards", "to clear out one's cupboards"], ["il n'y aurait pas…", "there wouldn't be… (conditionnel)"], ["se porter mieux", "to be in better shape"]]
    }
  ],

  vocab: [
    { t: "acheter, payer, dépenser", en: "to buy, to pay, to spend", pic: "💳", cat: "Consommer" },
    { t: "économiser", en: "to save (money)", pic: "🐷", cat: "Consommer" },
    { t: "emprunter ≠ prêter", en: "to borrow ≠ to lend", pic: "🔁", cat: "Consommer" },
    { t: "louer", en: "to rent", pic: "🏷️", cat: "Consommer" },
    { t: "négocier", en: "to negotiate, haggle", pic: "🤝", cat: "Consommer" },
    { t: "partager, donner", en: "to share, to give", pic: "🎁", cat: "Consommer" },
    { t: "vendre, jeter", en: "to sell, to throw away", pic: "🗑️", cat: "Consommer" },
    { t: "le troc, troquer", en: "swapping, to swap", pic: "🔄", cat: "Consommer", g: "m" },
    { t: "l'acheteur, l'acheteuse", en: "the buyer", pic: "🛍️", cat: "Les personnes" },
    { t: "le client, la cliente", en: "the customer", pic: "🧑", cat: "Les personnes" },
    { t: "le consommateur, la consommatrice", en: "the consumer", pic: "🛒", cat: "Les personnes" },
    { t: "le particulier", en: "the private individual", pic: "🏠", cat: "Les personnes", g: "m" },
    { t: "l'utilisateur, l'utilisatrice", en: "the user", pic: "📱", cat: "Les personnes" },
    { t: "le vendeur, la vendeuse", en: "the seller, shop assistant", pic: "🧑‍💼", cat: "Les personnes" },
    { t: "l'alimentation", en: "food", pic: "🥖", cat: "Les catégories de produits", g: "f" },
    { t: "l'électroménager", en: "household appliances", pic: "🧺", cat: "Les catégories de produits", g: "m" },
    { t: "le matériel de sport", en: "sports equipment", pic: "⚽", cat: "Les catégories de produits", g: "m" },
    { t: "le meuble", en: "the piece of furniture", pic: "🪑", cat: "Les catégories de produits", g: "m" },
    { t: "le multimédia", en: "electronics, media devices", pic: "💻", cat: "Les catégories de produits", g: "m" },
    { t: "le produit de beauté", en: "the beauty product", pic: "💄", cat: "Les catégories de produits", g: "m" },
    { t: "le vêtement", en: "the item of clothing", pic: "👕", cat: "Les catégories de produits", g: "m" },
    { t: "neuf, neuve ≠ d'occasion", en: "new ≠ second-hand", pic: "✨", cat: "Le produit" },
    { t: "la marque", en: "the brand, make", pic: "™️", cat: "Le produit", g: "f" },
    { t: "le prix, en promotion", en: "the price, on special offer", pic: "🏷️", cat: "Le produit", g: "m" },
    { t: "cher, chère ≠ gratuit(e)", en: "expensive ≠ free", pic: "💶", cat: "Le produit" },
    { t: "la taille, la couleur", en: "the size, the colour", pic: "📏", cat: "Le produit", g: "f" },
    { t: "l'atelier", en: "the workshop", pic: "🛠️", cat: "Les travaux manuels", g: "m" },
    { t: "la couture, le tricot", en: "sewing, knitting", pic: "🧵", cat: "Les travaux manuels", g: "f" },
    { t: "la décoration, la mécanique", en: "decorating, mechanics", pic: "🔩", cat: "Les travaux manuels", g: "f" },
    { t: "monter un meuble", en: "to assemble furniture", pic: "🪛", cat: "Les travaux manuels" },
    { t: "créer, le tutoriel", en: "to create, the tutorial", pic: "🎥", cat: "Les travaux manuels" },
    { t: "en bois, en carton, en papier", en: "made of wood, cardboard, paper", pic: "🪵", cat: "Les matières" },
    { t: "en coton, en laine, en tissu, en jean", en: "made of cotton, wool, fabric, denim", pic: "🧶", cat: "Les matières" },
    { t: "en cuir, en fer, en plastique, en verre", en: "made of leather, iron, plastic, glass", pic: "🥛", cat: "Les matières" },
    { t: "l'outil", en: "the tool", pic: "🧰", cat: "L'équipement", g: "m" },
    { t: "l'échelle", en: "the ladder", pic: "🪜", cat: "L'équipement", g: "f" },
    { t: "la scie, la ponceuse", en: "the saw, the sander", pic: "🪚", cat: "L'équipement", g: "f" },
    { t: "la tondeuse", en: "the lawnmower", pic: "🌱", cat: "L'équipement", g: "f" },
    { t: "abîmé(e), cassé(e)", en: "damaged, broken", pic: "💔", cat: "La réparation" },
    { t: "la panne, la pièce", en: "the breakdown, the spare part", pic: "⚙️", cat: "La réparation", g: "f" },
    { t: "réparer, changer une pièce", en: "to repair, to change a part", pic: "🔧", cat: "La réparation" },
    { t: "le technicien, la technicienne", en: "the technician", pic: "👷", cat: "La réparation" },
    { t: "poncer", en: "to sand", pic: "🪵", cat: "La réparation" }
  ],

  grammar: [
    {
      id: "g-souhait",
      title: "Wishes and advice",
      body: [
        "Wishes, desires: [[Je voudrais emprunter plus de livres.]] · [[J'aimerais arrêter d'acheter du matériel de sport.]] · [[Je souhaiterais économiser de l'argent.]] · [[J'ai envie d'essayer ce défi.]] · [[J'espère que je vais apprendre à résister !]]",
        "Advice: [[Il faut préciser la marque.]] · [[Tu devrais refaire les photos.]] · [[Tu pourrais lire ce livre.]] · [[Je te conseille de prendre tes photos vers midi.]] · [[C'est mieux de porter les vêtements.]] · [[Regarde aussi les autres annonces !]]"
      ],
      info: { type: "card", style: "board", caption: "📝 Lina's 'Nothing new' wish list · tap a line", title: "MA LISTE DE SOUHAITS", sub: "défi « Rien de neuf » · #consommationresponsable", rows: [
        ["✅ fait", "Je voudrais emprunter plus de livres à la bibliothèque.", "Je voudrais emprunter plus de livres à la bibliothèque."],
        ["🔄 presque", "J'aimerais arrêter d'acheter du matériel de sport.", "J'aimerais arrêter d'acheter du matériel de sport."],
        ["⏳ à faire", "Je souhaiterais économiser de l'argent… sans craquer pour les soldes !", "Je souhaiterais économiser de l'argent."]
      ], foot: "Utilisons les objets qui existent déjà !" },
      widget: {
        type: "combo", label: "Give advice · pick a structure and a problem",
        rows: [{ k: "devrais", label: "Tu devrais…" }, { k: "pourrais", label: "Tu pourrais…" }, { k: "conseille", label: "Je te conseille de…" }, { k: "mieux", label: "C'est mieux de…" }],
        cols: [{ k: "photos", label: "📸 my photos are dark" }, { k: "cher", label: "💸 I spend too much" }, { k: "sport", label: "🚲 I need a bike for a week" }],
        out: {
          "devrais|photos": ["Tu devrais refaire tes photos près d'une fenêtre.", "You should redo your photos near a window."], "pourrais|photos": ["Tu pourrais prendre les photos vers midi.", "You could take the photos around midday."], "conseille|photos": ["Je te conseille de prendre les photos à la lumière du jour.", "I advise you to take the photos in daylight."], "mieux|photos": ["C'est mieux de porter les vêtements sur la photo.", "It's better to wear the clothes in the photo."],
          "devrais|cher": ["Tu devrais faire le défi « Rien de neuf » !", "You should do the 'Nothing new' challenge!"], "pourrais|cher": ["Tu pourrais acheter d'occasion.", "You could buy second-hand."], "conseille|cher": ["Je te conseille de te désabonner des newsletters.", "I advise you to unsubscribe from the newsletters."], "mieux|cher": ["C'est mieux d'emprunter que d'acheter.", "It's better to borrow than to buy."],
          "devrais|sport": ["Tu devrais louer un vélo.", "You should rent a bike."], "pourrais|sport": ["Tu pourrais emprunter le vélo de ton voisin.", "You could borrow your neighbour's bike."], "conseille|sport": ["Je te conseille de regarder les magasins de location.", "I advise you to look at rental shops."], "mieux|sport": ["C'est mieux de louer pour une semaine.", "It's better to rent for a week."]
        }
      }
    },
    {
      id: "g-conditionnel",
      title: "The conditionnel présent (1): politeness, wish, advice, suggestion",
      body: [
        "Form: like the future, on the <b>infinitive</b> (or the irregular future stem), but with the <b>imparfait endings</b> [[-ais, -ais, -ait, -ions, -iez, -aient]]: [[aimer → j'aimerais]] · [[choisir → je choisirais]] · [[prendre → je prendrais]]. Irregular stems = future: [[j'irais, j'aurais, je devrais, je serais, je ferais, je pourrais, je saurais, je viendrais, je verrais, je voudrais, il faudrait]].",
        "Uses: a <b>polite request</b>: [[Tu pourrais me donner plus d'informations ?]] · a <b>wish</b>: [[J'aimerais arrêter…]] · <b>advice</b>: [[Tu devrais refaire tes photos !]] · a <b>suggestion</b>: [[Ça te dirait d'en discuter ?]] · [[On pourrait aller au cinéma !]]"
      ],
      info: [
        { type: "merge", title: "⚙️ Future stem + imparfait endings = conditionnel", rows: [
          { a: "aimer", b: "-ais", g: "x", r: "j'aimerais", ex: "J'aimerais essayer ce défi.", en: "a wish" },
          { a: "pouvoir → pourr-", b: "-ais", g: "x", r: "tu pourrais", ex: "Tu pourrais m'aider ?", en: "a request" },
          { a: "devoir → devr-", b: "-ait", g: "x", r: "il devrait", ex: "Il devrait négocier le prix.", en: "advice" },
          { a: "dire", b: "-ait", g: "x", r: "ça te dirait", ex: "Ça te dirait de venir ?", en: "a suggestion" },
          { a: "vouloir → voudr-", b: "-ions", g: "x", r: "nous voudrions", ex: "Nous voudrions louer une voiture.", en: "a polite wish" }
        ] },
        { type: "compare", title: "🔮 futur or conditionnel?", cols: [
          { head: "Futur simple", en: "-ai, -as, -a…", color: "#3a6fd8", lines: [["je pourrai", "I will be able to"], ["tu aimeras", "you will like"], ["nous ferons", "we will do"]] },
          { head: "Conditionnel présent", en: "-ais, -ais, -ait…", color: "#9b4fb0", lines: [["je pourrais", "I could"], ["tu aimerais", "you would like"], ["nous ferions", "we would do"]] }
        ] }
      ],
      widget: {
        type: "sort", label: "Request, wish, advice or suggestion?",
        cols: [{ k: "demande", label: "demande polie", color: "#3a6fd8" }, { k: "souhait", label: "souhait", color: "#e0a526" }, { k: "conseil", label: "conseil", color: "#2f9c8a" }, { k: "propo", label: "proposition", color: "#9b4fb0" }],
        items: [
          { t: "Pourriez-vous m'expliquer comment ça marche ?", k: "demande", say: "Pourriez-vous m'expliquer comment ça marche ?" }, { t: "Nous aimerions essayer le troc.", k: "souhait", say: "Nous aimerions essayer le troc." },
          { t: "Vous devriez négocier le prix.", k: "conseil", say: "Vous devriez négocier le prix." }, { t: "On pourrait louer des vélos ce week-end !", k: "propo", say: "On pourrait louer des vélos ce week-end !" },
          { t: "Je voudrais un café, s'il vous plaît.", k: "demande", say: "Je voudrais un café, s'il vous plaît." }, { t: "Je souhaiterais acheter un nouveau téléphone.", k: "souhait", say: "Je souhaiterais acheter un nouveau téléphone." },
          { t: "Ça te dirait d'aller à la troc party ?", k: "propo", say: "Ça te dirait d'aller à la troc party ?" }, { t: "Tu devrais refaire tes photos.", k: "conseil", say: "Tu devrais refaire tes photos." }
        ]
      }
    },
    {
      id: "g-service",
      title: "Asking someone for a favour",
      body: [
        "[[Tu pourrais m'aider à monter ce meuble, s'il te plaît ?]] · [[Vous auriez une perceuse à me prêter ?]] · [[Ça te dérangerait de… ?]] · [[Est-ce que je pourrais emprunter votre stylo ?]] · [[Excusez-moi de vous déranger…]] · [[Pourriez-vous m'expliquer comment faire ?]]",
        "Accept: [[Avec plaisir !]] · [[Pas de problème !]] · [[Pas du tout, ça ne me dérange pas.]] Refuse politely: [[Désolé(e), je n'en ai pas.]] · [[Je ne peux pas, mais…]]"
      ]
    },
    {
      id: "g-gerondif",
      title: "The gérondif: [[en]] + present participle",
      body: [
        "Use: two actions happening <b>at the same time</b>: [[Elles cuisinent en écoutant de la musique.]] · or the <b>manner</b> (how?): [[Les fans s'échangent des idées en mettant en ligne des tutoriels.]] · [[Elle est venue en courant.]]",
        "Form: [[en]] + the <b>nous</b> stem of the present + [[-ant]]: [[nous regardons → en regardant]] · [[nous faisons → en faisant]] · [[nous vendons → en vendant]]. Irregular: [[être → en étant]], [[avoir → en ayant]], [[savoir → en sachant]].",
        "Object pronouns go between [[en]] and the verb: [[Je fais du jardinage en lui parlant.]] The subject of both verbs is the <b>same</b>."
      ],
      info: { type: "pattern", title: "🎧 Two actions at once", rows: [
        ["Elle tricote", "en", { opts: ["regardant la télé.", "écoutant un podcast.", "discutant avec sa sœur."] }],
        ["On apprend", "en", { opts: ["faisant.", "regardant des tutoriels.", "participant à un atelier."] }],
        ["Il a vendu son vélo", "en", { opts: ["mettant une annonce en ligne.", "négociant le prix.", "prenant de belles photos."] }]
      ], note: "en + nous-stem + -ant: regard-ons → en regard-ant" },
      widget: {
        type: "combo", label: "Join with the gérondif",
        rows: [{ k: "g", label: "gérondif" }],
        cols: [{ k: "couture", label: "🧵 On fait de la couture. On écoute la radio." }, { k: "canape", label: "🛋️ Ils ont vendu leur canapé. Ils ont mis une annonce en ligne." }, { k: "tissu", label: "🧶 Nous avons trouvé du tissu. Nous sommes allés à la mercerie." }, { k: "voiture", label: "🚗 Elle a réparé sa voiture. Elle a fait de la mécanique." }],
        out: {
          "g|couture": ["On fait de la couture en écoutant la radio.", "We sew while listening to the radio."], "g|canape": ["Ils ont vendu leur canapé en mettant une annonce en ligne.", "They sold their sofa by putting an ad online.", "manner: how?"],
          "g|tissu": ["Nous avons trouvé du tissu en allant à la mercerie.", "We found fabric by going to the haberdashery."], "g|voiture": ["Elle a réparé sa voiture en faisant de la mécanique.", "She repaired her car by doing some mechanics."]
        }
      }
    },
    {
      id: "g-hypothese",
      title: "The conditionnel présent (2): imagining",
      body: [
        "The conditionnel also describes things that are <b>not real</b>: an imaginary world, a dream, a hypothesis: [[Imaginez un monde où il n'y aurait pas d'argent, où tout serait gratuit !]] · [[Dans un monde idéal, tout le monde ferait du troc.]] · [[Je rêve d'avoir des week-ends de quatre jours : j'aurais plus de temps, j'apprendrais à jardiner.]]"
      ],
      widget: {
        type: "combo", label: "In a world without money… · pick a subject and an idea",
        rows: [{ k: "on", label: "on" }, { k: "gens", label: "les gens" }, { k: "il", label: "il n'y…" }],
        cols: [{ k: "echanger", label: "🔄 échanger les vêtements" }, { k: "etre", label: "🌱 être plus responsables" }, { k: "avoir", label: "🏦 avoir des banques (≠)" }],
        out: {
          "on|echanger": ["On échangerait nos vêtements.", "We'd swap our clothes."], "gens|echanger": ["Les gens échangeraient leurs vêtements.", "People would swap their clothes."], "il|echanger": ["Il n'y aurait plus de magasins de vêtements.", "There'd be no more clothes shops."],
          "on|etre": ["On serait plus responsables.", "We'd be more responsible."], "gens|etre": ["Les gens seraient des consommateurs responsables.", "People would be responsible consumers.", "être → ser-"], "il|etre": ["Il n'y aurait pas de gaspillage.", "There'd be no waste."],
          "on|avoir": ["On n'aurait pas besoin de banques.", "We wouldn't need banks."], "gens|avoir": ["Les gens n'auraient pas de cartes bancaires.", "People wouldn't have bank cards."], "il|avoir": ["Il n'y aurait pas de banques.", "There'd be no banks.", "il y a → il y aurait"]
        }
      }
    }
  ],

  expressions: [
    { fn: "Pour exprimer un souhait, un désir", fnEn: "wishes", icon: "🌠", items: [
      ["Je voudrais emprunter plus de livres.", "I'd like to borrow more books.", "std", true],
      ["J'aimerais arrêter d'acheter du neuf.", "I'd like to stop buying new things.", "std", true],
      ["Je souhaiterais économiser de l'argent.", "I'd like to save money.", "poli"],
      ["J'ai envie d'essayer ce défi.", "I feel like trying this challenge.", "std"],
      ["J'espère que je vais apprendre à résister !", "I hope I'll learn to resist!", "std"]
    ] },
    { fn: "Pour donner un conseil", fnEn: "advice", icon: "💡", items: [
      ["Il faut préciser la marque.", "You must give the brand.", "std"],
      ["Tu devrais refaire les photos.", "You should redo the photos.", "std", true],
      ["Tu pourrais lire ce livre.", "You could read this book.", "std"],
      ["Je te conseille de prendre tes photos vers midi.", "I advise you to take your photos around midday.", "std", true],
      ["C'est mieux de porter les vêtements.", "It's better to wear the clothes.", "std"]
    ] },
    { fn: "Pour demander un service", fnEn: "asking a favour", icon: "🙏", items: [
      ["Tu pourrais m'aider à…, s'il te plaît ?", "Could you help me to…, please?", "std", true],
      ["Vous auriez une perceuse à me prêter ?", "Would you have a drill to lend me?", "poli", true],
      ["Ça te dérangerait de… ?", "Would you mind…?", "std"],
      ["Excusez-moi de vous déranger…", "Sorry to bother you…", "poli"],
      ["Ça te dirait de… ?", "Would you like to…?", "fam"]
    ] },
    { fn: "Pour écrire une annonce de troc (atelier)", fnEn: "swap ads", icon: "📌", items: [
      ["Je donne… · Je cherche…", "I'm giving away… · I'm looking for…", "std"],
      ["Je propose de… (+ infinitif)", "I offer to…", "std"],
      ["J'aimerais avoir des informations sur…", "I'd like some information about…", "poli"],
      ["Il est en quelle matière ? Elle est lourde ?", "What's it made of? Is it heavy?", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · asking a neighbour for a favour", lanes: ["Paul", "La voisine"], av: ["m6", "f6"], steps: [
    { s: 0, fr: "Excusez-moi de vous déranger… Vous auriez une perceuse à me prêter ?", en: "Sorry to bother you… Would you have a drill to lend me?" },
    { s: 1, fr: "Désolée, je n'en ai pas. Mais il y a une bricothèque dans le quartier.", en: "Sorry, I don't have one. But there's a tool library in the area." },
    { s: 0, fr: "Merci ! Et vous pourriez me rendre un autre service ?", en: "Thanks! And could you do me another favour?" },
    { s: 1, fr: "Bien sûr. Qu'est-ce que je peux faire pour vous ?", en: "Of course. What can I do for you?" },
    { s: 0, fr: "Votre fils pourrait regarder mon lave-linge ?", en: "Could your son look at my washing machine?" },
    { s: 1, fr: "Avec plaisir ! Et en échange, vous pourriez m'aider à monter un meuble.", en: "With pleasure! And in exchange, you could help me assemble some furniture." }
  ] },

  sounds: {
    intro: "Phonie-graphie: [g] (as in <i>go</i>) and [ʒ] (as in <i>pleasure</i>). The letter <b>g</b> is [g] before a, o, u or a consonant, and [ʒ] before e, i, y. To keep [g] before e/i, write <b>gu</b>; to keep [ʒ] before a/o, write <b>ge</b>.",
    letters: [
      { l: "ga · go · gu · gr · gl · gue · gui", name: "[g] · gratuit", tip: "[[gratuit]], [[un magasin]], [[un blog]], [[négocier]]. Keep [g] before e/i with gu: [[la guitare]], [[le dialogue]].", ex: ["gratuit", "un magasin", "un blog partagé", "contre le gaspillage"] },
      { l: "j · ge · gi · gy · gea · geo", name: "[ʒ] · jardin", tip: "[[un jardin]], [[le jeune]], [[le bricolage]], [[la gymnastique]], [[nous mangeons]] (ge before o keeps [ʒ]).", ex: ["un grand jardin", "le bricolage", "des règles écologiques", "un échange"] }
    ],
    pairs: [
      { a: ["la gare", "the station"], b: ["le jars", "the gander"], note: "[g] / [ʒ]" },
      { a: ["gai", "cheerful"], b: ["j'ai", "I have"], note: "[g] / [ʒ]" },
      { a: ["un magasin", "a shop"], b: ["le jardinage", "gardening"], note: "[g] / [ʒ]" },
      { a: ["je pourrai", "I will be able"], b: ["je pourrais", "I could"], note: "futur / conditionnel" },
      { a: ["en regardant", "while watching"], b: ["en faisant", "while doing"], note: "gérondif" },
      { a: ["neuf", "new"], b: ["d'occasion", "second-hand"], note: "le produit" }
    ]
  },
  classify: {
    label: "🔊 [g] ou [ʒ] ?", q: "Listen: do you hear [g] (gratuit) or [ʒ] (jardin)?",
    options: ["[g] gratuit", "[ʒ] jardin"],
    items: [
      { say: "gratuit", a: 0 }, { say: "le jardin", a: 1 }, { say: "un magasin", a: 0 }, { say: "le bricolage", a: 1 },
      { say: "un dialogue", a: 0 }, { say: "écologique", a: 1 }, { say: "négocier", a: 0 }, { say: "la gymnastique", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Le défi « Rien de neuf » concerne aussi l'alimentation.", ok: false, explain: "Not food or beauty products." },
    { type: "mcq", tag: "Dialogue 1", q: "Renato conseille à Lina de…", options: ["louer son matériel de sport", "acheter pendant les soldes", "jeter ses livres"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "Les photos de Lou sont…", options: ["trop sombres", "trop chères", "trop grandes"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Le vélo est neuf.", ok: false, explain: "It was bought new six months ago: now it's second-hand." },
    { type: "mcq", tag: "Dialogue 3", q: "Finalement, Ana paie…", options: ["200 €", "220 €", "250 €"], answer: 0 },
    { type: "tf", tag: "Dialogue 4", s: "À l'atelier, on va fabriquer un sac avec un vieux jean.", ok: true },
    { type: "mcq", tag: "Dialogue 5", q: "Une bricothèque, c'est un lieu où on…", options: ["emprunte des outils", "achète des livres", "répare des voitures"], answer: 0 },
    { type: "tf", tag: "Dialogue 6", s: "Jo a apporté une lampe et des livres.", ok: true },
    { type: "fill", tag: "Conditionnel", sentence: "Nous ___ participer à ce défi. (pouvoir)", options: ["pourrions", "pouvons", "pourrons"], answer: 0 },
    { type: "fill", tag: "Conditionnel", sentence: "Elle ___ acheter un pull d'occasion.", options: ["aimerait", "aimait", "aimera"], answer: 0 },
    { type: "fill", tag: "Conditionnel", sentence: "Vous ___ négocier le prix.", options: ["devriez", "devrez", "deviez"], answer: 0 },
    { type: "fill", tag: "Conditionnel", sentence: "Qu'est-ce que tu ___ faire ce week-end ?", options: ["souhaiterais", "souhaiteras", "souhaitais"], answer: 0 },
    { type: "fill", tag: "Conditionnel", sentence: "On ___ louer des vélos !", options: ["pourrait", "pourra", "pouvait"], answer: 0 },
    { type: "type", tag: "Conditionnel", q: "Conditionnel: « Je (vouloir) … un café, s'il vous plaît. »", answers: ["Je voudrais un café, s'il vous plaît.", "voudrais"] },
    { type: "fill", tag: "Hypothèse", sentence: "Dans un monde idéal, tout le monde ___ du troc.", options: ["ferait", "fera", "fait"], answer: 0 },
    { type: "fill", tag: "Hypothèse", sentence: "Il n'y ___ pas de problèmes écologiques.", options: ["aurait", "aura", "avait"], answer: 0 },
    { type: "type", tag: "Hypothèse", q: "Conditionnel: « Tous les gens (être) … des consommateurs responsables. »", answers: ["Tous les gens seraient des consommateurs responsables.", "seraient"] },
    { type: "fill", tag: "Gérondif", sentence: "Elle cuisine ___ de la musique.", options: ["en écoutant", "en écoute", "écoutant en"], answer: 0 },
    { type: "fill", tag: "Gérondif", sentence: "On apprend ___ .", options: ["en faisant", "en fait", "en faire"], answer: 0 },
    { type: "fill", tag: "Gérondif", sentence: "Il a vendu son vélo en ___ une annonce.", options: ["mettant", "mettre", "met"], answer: 0 },
    { type: "type", tag: "Gérondif", q: "Join: « Je regarde des blogs créatifs. Je bois un café. »", answers: ["Je regarde des blogs créatifs en buvant un café.", "Je bois un café en regardant des blogs créatifs."] },
    { type: "reply", tag: "Que répondre ?", prompt: "Je n'arrive pas à vendre mes vêtements…", options: ["Tu devrais refaire tes photos.", "Tu pourrais en vendant.", "Il n'y aurait pas de photos."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous auriez une échelle à me prêter ?", options: ["Bien sûr, je vous l'apporte.", "Je voudrais une échelle.", "En prêtant."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Ça te dirait d'aller à une troc party ?", options: ["Avec plaisir ! Qu'est-ce que j'apporte ?", "Je te conseille de troquer.", "C'est d'occasion."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Le contraire de « neuf » (pour un objet) :", options: ["d'occasion", "gratuit", "abîmé"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "On utilise une scie pour…", options: ["couper du bois", "couper l'herbe", "peindre un mur"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Une personne qui vend sur Internet sans être une entreprise, c'est…", options: ["un particulier", "un technicien", "un client"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["en bois", "en laine", "en cuir", "en panne"], answer: 3, explain: "en panne means broken down; the others are materials." },
    { type: "order", tag: "Construisez", en: "Could you lend me your ladder, please?", words: ["Tu", "pourrais", "me", "prêter", "ton", "échelle,", "s'il", "te", "plaît", "?"] },
    { type: "listen", tag: "Écoute", q: "What would the speaker like to do?", say: "J'aimerais acheter moins de vêtements neufs et échanger avec mes amies.", options: ["buy fewer new clothes and swap", "sell her clothes online", "open a shop"], answer: 0 }
  ],

  roleplays: [
    { title: "🔧 Demande un service à ton voisin (DELF)", brief: "You need to do some DIY in your flat. Ask a neighbour for help or a tool; agree on a time.", memo: ["Excuse-moi de te déranger…", "Tu pourrais… ?", "Tu aurais… à me prêter ?", "En échange, je…"], partner: "f6", you: "m6",
      turns: [
        { them: "Oui ? Bonjour !", themEn: "Yes? Hello!", hint: "Apologise for bothering her; you want to put up shelves.", you: "Bonjour, excusez-moi de vous déranger. Je voudrais installer des étagères.", youEn: "Hello, sorry to bother you. I'd like to put up some shelves." },
        { them: "Ah, et je peux vous aider ?", themEn: "Ah, can I help you?", hint: "Ask if she'd have a drill and a ladder to lend you.", you: "Vous auriez une perceuse et une échelle à me prêter ?", youEn: "Would you have a drill and a ladder to lend me?" },
        { them: "L'échelle, oui. La perceuse, non.", themEn: "The ladder, yes. The drill, no.", hint: "Thank her; offer to help her in exchange (garden).", you: "Merci beaucoup ! En échange, je pourrais vous aider dans le jardin.", youEn: "Thank you very much! In exchange I could help you in the garden." }
      ] },
    { title: "🚲 Négocier un objet d'occasion", brief: "You answer an ad for a second-hand item. Ask about it and negotiate the price politely.", memo: ["Il est de quelle marque ?", "Il est en bon état ?", "Pourriez-vous baisser le prix ?"], partner: "m6", you: "f4",
      turns: [
        { them: "Bonjour ! Vous venez pour l'ordinateur ?", themEn: "Hello! Are you here for the computer?", hint: "Yes; ask the brand and when it was bought.", you: "Oui. Il est de quelle marque ? Vous l'avez acheté quand ?", youEn: "Yes. What make is it? When did you buy it?" },
        { them: "Il y a un an. Il est en très bon état. Je le vends 300 €.", themEn: "A year ago. It's in very good condition. I'm selling it for €300.", hint: "Say it's a bit expensive; could he lower the price?", you: "C'est un peu cher pour moi. Pourriez-vous baisser un peu le prix ?", youEn: "It's a bit expensive for me. Could you lower the price a little?" },
        { them: "280 €, ça vous irait ?", themEn: "Would €280 suit you?", hint: "Propose 260 and take it right away.", you: "260 €, et je le prends tout de suite ?", youEn: "€260, and I'll take it right away?" }
      ] },
    { title: "🌍 Ton monde idéal", brief: "A friend asks you to imagine an ideal world for the planet. Use the conditionnel.", memo: ["Dans un monde idéal…", "il y aurait / il n'y aurait pas…", "on + conditionnel"], partner: "f5", you: "m5",
      turns: [
        { them: "Comment serait ton monde idéal ?", themEn: "What would your ideal world be like?", hint: "Everyone would share their tools.", you: "Dans mon monde idéal, tout le monde partagerait ses outils.", youEn: "In my ideal world, everyone would share their tools." },
        { them: "Et l'argent ?", themEn: "And money?", hint: "There would be no money; people would swap.", you: "Il n'y aurait pas d'argent : les gens feraient du troc.", youEn: "There'd be no money: people would swap." },
        { them: "Et toi, qu'est-ce que tu ferais ?", themEn: "And what would you do?", hint: "You'd repair objects and you'd never throw anything away.", you: "Je réparerais les objets et je ne jetterais jamais rien !", youEn: "I'd repair things and I'd never throw anything away!" }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Organiser un troc", intro: "Exchange objects and services in your class, with ads on the board.",
      steps: [["Préparation", ["The teacher draws four columns on the board: offer an object · look for an object · offer a service · look for a service.", "In groups, discuss the principle of swapping and which objects and services you could exchange.", "Each student writes at least two swap ads on sticky notes (one offer, one request), signs them and sticks them in the right column."]], ["Réalisation", ["As a class, read the other students' ads: can you offer something to someone? Does an object or service interest you?", "Talk to the authors of the ads that interest you to get more information and organise the swaps."]], ["Présentation", ["In groups, sum up the swaps that interested the class and present them."]]],
      phrases: ["Je donne… · Je cherche…", "Je propose de… · Je voudrais…", "J'aimerais avoir des informations sur…", "De quelle couleur elle est ? En quelle matière ?", "Tu pourrais m'aider à… ?", "Quand est-ce que tu es libre ?"],
      model: { type: "card", style: "board", caption: "📌 The swap board · tap an ad", title: "TABLEAU DES TROCS", sub: "objets · services", rows: [
        ["Je donne", "une lampe en bois, très légère (Malik)", "Je donne une lampe en bois, très légère."], ["Je cherche", "un sac à dos pour un voyage (Aya)", "Je cherche un sac à dos pour un voyage."],
        ["Je propose de", "réparer les vélos le samedi matin (Tom)", "Je propose de réparer les vélos le samedi matin."], ["Je voudrais", "pratiquer l'espagnol une heure par semaine (Lina)", "Je voudrais pratiquer l'espagnol une heure par semaine."]
      ], foot: "Signez vos annonces !" } }
  ],
  delf: {
    skill: "Production écrite", title: "The DELF A2 writing paper: strategies",
    about: "The DELF A2 <b>production écrite</b> lasts 45 minutes and has 2 exercises of <b>60 to 80 words</b> each. <b>Exercise 1</b> (creative writing): describe an event or tell a personal experience and give your impressions, with the imparfait (description), the passé composé (events), feeling verbs (détester, aimer, adorer…) and positive or negative adjectives. <b>Exercise 2</b> (reply): answer a message (postcard, invitation, e-mail, letter) to invite, thank, apologise, ask, inform or congratulate. Example from the book: <i>you did a house swap for your holidays; write a comment on the website about the equipment, decoration, neighbourhood, contact with the owner, and the pros and cons.</i>",
    tips: ["Read the instructions: what type of text (letter, postcard, e-mail…)? Formal or informal?", "Write short, simple sentences with words you know.", "Present your text properly: greeting, politeness formulas, sign-off.", "Reread for spelling and grammar, and write the number of words at the bottom (60–80)."],
    items: [
      { type: "mcq", q: "In exercise 1 (telling an experience), to describe the flat you use…", options: ["the imparfait: « L'appartement était grand et lumineux. »", "the futur: « L'appartement sera grand. »", "the conditionnel: « L'appartement serait grand. »"], answer: 0 },
      { type: "mcq", q: "To tell an event, you use…", options: ["the passé composé: « Le propriétaire nous a laissé un gâteau. »", "the imparfait: « Le propriétaire nous laissait un gâteau un jour. »", "the present: « Le propriétaire laisse un gâteau hier. »"], answer: 0 },
      { type: "mcq", q: "Which sentence gives an impression?", options: ["J'ai adoré le quartier : il était très animé !", "Le quartier est à Lyon.", "Il y a un quartier."], answer: 0 },
      { type: "mcq", q: "You reply to an invitation and must refuse. You…", options: ["thank, explain why you can't come and suggest something else", "just write « non »", "talk about the weather"], answer: 0 },
      { type: "mcq", q: "How many words must each text have?", options: ["60 to 80", "20 to 30", "150 to 200"], answer: 0 },
      { type: "mcq", q: "A good ending for an e-mail to a friend:", options: ["Je t'embrasse, à bientôt !", "Veuillez agréer mes salutations distinguées.", "Fin."], answer: 0 }
    ]
  },
  detente: {
    title: "Quelle « -thèque » ?",
    intro: "A bibliothèque lends books; a bricothèque lends tools… What do these places lend or keep?",
    items: [
      { type: "mcq", q: "une bricothèque", options: ["des outils", "des livres", "des disques"], answer: 0 },
      { type: "mcq", q: "une ludothèque", options: ["des jeux", "des outils", "des vêtements"], answer: 0 },
      { type: "mcq", q: "une médiathèque", options: ["des livres, des films, de la musique", "des médicaments", "des meubles"], answer: 0 },
      { type: "mcq", q: "une vêtothèque (imaginée dans le livre)", options: ["des vêtements", "des vélos", "des tisanes"], answer: 0 },
      { type: "mcq", q: "une discothèque, aujourd'hui, c'est surtout…", options: ["un lieu où on danse", "un lieu où on emprunte des outils", "une bibliothèque"], answer: 0 },
      { type: "mcq", q: "Une accorderie (née au Québec), c'est…", options: ["un système d'échange de services entre habitants", "un magasin de musique", "un atelier de couture"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "card", style: "board", caption: "🔧 La bricothèque · tap a line", title: "BRICOTHÈQUE DU QUARTIER", sub: "comme une bibliothèque… mais avec des outils !", rows: [
      ["Quoi ?", "scies, ponceuses, échelles, tondeuses…", "On peut emprunter des scies, des ponceuses, des échelles ou des tondeuses."], ["Combien ?", "un abonnement annuel (une dizaine d'euros) + une caution", "Il suffit de prendre un abonnement annuel d'une dizaine d'euros et de verser une caution."],
      ["Combien de temps ?", "en général 3 à 4 jours", "La durée de l'emprunt est en général de trois à quatre jours."], ["Et aussi…", "des ateliers gratuits animés par des bénévoles", "Certaines bricothèques proposent des ateliers gratuits."]
    ], foot: "Une façon simple d'éviter de grosses dépenses inutiles !" }
  ],
  culture: [
    { icon: "🏪", kind: "Oh, le cliché !", t: "« En France, les magasins sont fermés le dimanche. »", d: "Mostly true: outside tourist areas and big cities, few shops open on Sundays. But DIY and garden shops are open!" },
    { icon: "♻️", kind: "Civilisation", t: "Le défi « Rien de neuf »", d: "For a year, participants try to buy as few new objects as possible (furniture, clothes, appliances, but not food or beauty products) and to find alternatives: second-hand, gifts, sharing, renting. An ecological and economical challenge." },
    { icon: "🛍️", kind: "Au fait !", t: "L'occasion, ça marche !", d: "Second-hand selling between individuals on French websites is booming: people buy second-hand to get good deals and to consume better." },
    { icon: "🤝", kind: "Francophonie", t: "Les accorderies", d: "Born in <b>Québec</b>, an <i>accorderie</i> is a system where people living in the same place exchange services: gardening, car-sharing, help with a language, DIY… One hour given = one hour received." },
    { icon: "🧶", kind: "Civilisation", t: "Le fait maison, c'est tendance", d: "More and more French people cook, garden, do DIY, sew or knit: for pleasure, to save money and for the planet. They share thousands of tutorials online, and haberdasheries and creative workshops are booming." },
    { icon: "🔧", kind: "Au fait !", t: "Réparer plutôt que jeter", d: "Websites help you find the fault in your appliance and repair it with tutorials. According to the repairer interviewed in the book, half of all breakdowns don't even need a spare part." }
  ],
  tips: [
    { icon: "🔮", t: "Futur vs conditionnel", d: "Same stem, different endings: [[je pourrai]] (will) / [[je pourrais]] (could). The conditionnel ends like the imparfait." },
    { icon: "🎧", t: "Gérondif = same subject", d: "[[Elle cuisine en écoutant de la musique]]: she cooks and she listens." },
    { icon: "🙏", t: "Soften with the conditionnel", d: "[[Je voudrais…]] is more polite than [[Je veux…]]; [[Pourriez-vous…]] than [[Pouvez-vous…]]." }
  ],
  mistakes: [
    ["Je voudrai un café, s'il vous plaît.", "Je voudrais un café, s'il vous plaît.", "polite request → conditionnel (-ais)"],
    ["Tu devrais de refaire les photos.", "Tu devrais refaire les photos.", "devoir + infinitive, no de"],
    ["Je te conseille prendre…", "Je te conseille de prendre…", "conseiller de"],
    ["en faisons", "en faisant", "gérondif: -ant"],
    ["en êtant", "en étant", "irregular gérondif: être → étant"],
    ["Dans un monde idéal, tout le monde fera du troc.", "Dans un monde idéal, tout le monde ferait du troc.", "imaginary → conditionnel"],
    ["J'emprunte mon livre à toi. (= I lend)", "Je te prête mon livre.", "prêter (lend) ≠ emprunter (borrow)"],
    ["un sac de jean", "un sac en jean", "material → en"]
  ]
});
