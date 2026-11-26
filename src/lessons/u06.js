// Unité 6 · En cuisine (Édito A2, 2e édition, book pp. 83–96)
// Situations: les légumes du jardin · une recette de clafoutis · la charte d'une appli de cuisine · on mange où ? · au restaurant antillais · les avis
// Grammar: les quantités et le pronom en · l'obligation et l'interdiction · la restriction ne… que
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u06", rubrique: 3, num: 6,
  title: "In the kitchen",
  titleFr: "En cuisine",
  pages: "Book pp. 83–96",
  opener: { fr: "C'est la spécialité de la maison.", en: "It's the house speciality." },
  hero: { scene: "restaurant", staff: "La serveuse", people: { "La serveuse": "f5", "Mathis": "m2", "Nadia": "f4" } },
  situations: [
    ["🥕", "Les légumes du jardin", "quantities and en: [[Des tomates ? J'en consomme beaucoup.]]"],
    ["🍒", "Le clafoutis", "following a recipe: [[Mélangez le lait avec la crème.]] · [[Faites cuire 35 minutes.]]"],
    ["⚠️", "Les règles en cuisine", "obligation and prohibition: [[Il faut se laver les mains.]] · [[Il est interdit de…]] · [[Attention !]]"],
    ["🍽️", "Au restaurant", "ordering: [[Quel est le plat du jour ?]] · [[Qu'est-ce que vous me conseillez ?]]"],
    ["⭐", "Ça vous a plu ?", "satisfaction: [[Un régal !]] · [[C'est scandaleux !]] · [[Je ne mets qu'une étoile.]]"]
  ],
  goals: [
    "Understand and give cooking instructions: [[Lavez…]], [[Coupez…]], [[Mélangez…]], [[Versez…]], [[Faites cuire…]]",
    "Talk about quantities: [[une barquette de]], [[une botte de]], [[une pincée de]], [[beaucoup de]], and replace them with [[en]]",
    "Warn someone: [[Faites attention à…]], [[Attention ! C'est dangereux.]]",
    "Express obligation and prohibition: [[Il faut…]], [[Il est indispensable de…]], [[Il est interdit de…]], [[Ne… pas]] + imperative",
    "Order in a restaurant and ask for advice: [[En entrée, je voudrais…]], [[Qu'est-ce que vous me conseillez ?]]",
    "Express satisfaction and dissatisfaction: [[Un régal !]], [[Je suis ravi(e).]] ≠ [[C'est une honte !]], [[C'est scandaleux !]]",
    "Express restriction with [[ne… que]] (= seulement): [[Je ne mets que quatre étoiles.]]"
  ],
  glance: [
    ["🗣️", "Communication", "recipes · warnings · rules · at the restaurant · satisfaction and dissatisfaction"],
    ["🧩", "Grammaire", "quantities and the pronoun en · obligation and prohibition · ne… que"],
    ["🗂️", "Vocabulaire", "vegetables, fruit, pulses, fish, meat, herbs and spices · quantities · cooking verbs · restaurants, dishes, tastes · how you like your meat"],
    ["🔊", "Phonie-graphie", "intonation: surprise, joy, anger, disappointment"],
    ["⭐", "The phrase to learn first", "[[Qu'est-ce que vous me conseillez ?]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Vegetables from the garden", titleFr: "Au potager · Manger les légumes du jardin",
      note: "Annie shows her neighbour Karim her vegetable garden. Listen to the pronoun [[en]] with quantities.",
      scene: "jardin", staff: "Annie", people: { "Annie": "f6", "Karim": "m1" },
      lines: [
        ["Karim", "Quel beau potager ! Tu produis tous tes légumes ?", "What a lovely vegetable garden! Do you grow all your vegetables?"],
        ["Annie", "Non, pas tous. J'achète encore les pommes de terre et les bottes d'oignons. Mais la salade, j'ai arrêté d'en acheter : j'en ai mis dans le jardin.", "No, not all. I still buy potatoes and bunches of onions. But lettuce, I've stopped buying it: I've planted some in the garden."],
        ["Karim", "Et des tomates ?", "And tomatoes?"],
        ["Annie", "J'en cultive beaucoup, parce que j'en consomme beaucoup ! Des courges et des haricots aussi.", "I grow lots, because I eat lots! Squash and beans too."],
        ["Karim", "Et en hiver ?", "And in winter?"],
        ["Annie", "De juillet à septembre, je plante des poireaux, des choux, des carottes, des betteraves… Ils restent dans la terre jusqu'en mars.", "From July to September, I plant leeks, cabbages, carrots, beetroot… They stay in the ground until March."],
        ["Karim", "Moi, j'habite en ville, je n'ai pas de jardin…", "I live in town, I don't have a garden…"],
        ["Annie", "Alors, achète des produits de saison et cuisine toi-même. Tiens, des courgettes : tu en veux deux ?", "Then buy seasonal produce and cook for yourself. Here, courgettes: do you want two?"]
      ],
      glossary: [["en = de + noun (quantity)", "some, of it / of them"], ["j'en consomme beaucoup", "I eat a lot of them"], ["une botte d'oignons", "a bunch of onions"], ["les produits de saison", "seasonal produce"]]
    },
    {
      id: "d2", n: 2, title: "Making a clafoutis", titleFr: "Dans la cuisine · Une recette sucrée",
      note: "Lucie and her son Léo make a red-fruit clafoutis. Listen to the recipe instructions (imperative) and the quantities.",
      scene: "maison", people: { "Lucie": "f3", "Léo": "k2" },
      lines: [
        ["Lucie", "Bon, d'abord, préchauffe le four à deux cents degrés. Ensuite, lave et sèche les fruits rouges.", "Right, first, preheat the oven to two hundred degrees. Then wash and dry the red fruit."],
        ["Léo", "Il y a combien de framboises ?", "How many raspberries are there?"],
        ["Lucie", "Une barquette de cent cinquante grammes. Et une barquette de mûres et une de myrtilles.", "A 150-gram punnet. And a punnet of blackberries and one of blueberries."],
        ["Léo", "Je mélange quoi dans le saladier ?", "What do I mix in the bowl?"],
        ["Lucie", "Le lait avec la crème, la farine, le sucre en poudre et une pincée de sel. Mets les fruits dans un plat beurré et verse la pâte dessus.", "The milk with the cream, the flour, the caster sugar and a pinch of salt. Put the fruit in a buttered dish and pour the batter over it."],
        ["Léo", "Et le beurre ?", "And the butter?"],
        ["Lucie", "Coupe-le en petits morceaux et pose-les sur la pâte. Puis on enfourne : trente-cinq à quarante minutes. Attention, le four est très chaud !", "Cut it into small pieces and put them on the batter. Then into the oven: thirty-five to forty minutes. Careful, the oven is very hot!"],
        ["Léo", "On le mange avec de la glace à la vanille ?", "Shall we eat it with vanilla ice cream?"],
        ["Lucie", "Oui, servi tiède avec une boule de glace. Et quelques feuilles de menthe pour décorer !", "Yes, served warm with a scoop of ice cream. And a few mint leaves to decorate!"]
      ],
      glossary: [["préchauffer le four", "to preheat the oven"], ["une barquette, une pincée", "a punnet, a pinch"], ["verser la pâte", "to pour the batter"], ["enfourner", "to put in the oven"]]
    },
    {
      id: "d3", n: 3, title: "The home-cooks' charter", titleFr: "Sur l'appli · Les règles à respecter",
      note: "Sofia wants to sell homemade dishes on a neighbourhood app. Her flatmate reads her the rules. Listen to obligation, prohibition and warnings.",
      scene: "appartement", people: { "Sofia": "f8", "Tom": "m3" },
      lines: [
        ["Sofia", "Je vais vendre mes plats sur l'application ! Il y a des règles ?", "I'm going to sell my dishes on the app! Are there rules?"],
        ["Tom", "Oui, une charte. D'abord, tu ne dois pas être cuisinière de métier. Et tu as l'obligation de préparer uniquement des plats faits maison.", "Yes, a charter. First, you mustn't be a professional cook. And you're required to prepare only homemade dishes."],
        ["Sofia", "Pas de problème. Je peux vendre tous les jours ?", "No problem. Can I sell every day?"],
        ["Tom", "Non, il est interdit de vendre de manière régulière. La vente doit rester occasionnelle.", "No, it's forbidden to sell regularly. Sales must stay occasional."],
        ["Sofia", "Et pour l'hygiène ?", "And hygiene?"],
        ["Tom", "Il est indispensable de cuisiner des produits frais. Porte un tablier propre, attache-toi les cheveux et lave-toi souvent les mains.", "It's essential to cook fresh produce. Wear a clean apron, tie your hair back and wash your hands often."],
        ["Sofia", "Et le chat ? Il adore la cuisine…", "And the cat? He loves the kitchen…"],
        ["Tom", "Attention ! Ne laisse pas entrer d'animal dans la cuisine, c'est dangereux. Il est défendu de cuisiner dans des conditions non hygiéniques !", "Careful! Don't let any animal into the kitchen, it's dangerous. Cooking in unhygienic conditions is forbidden!"]
      ],
      glossary: [["avoir l'obligation de", "to be required to"], ["il est interdit / défendu de", "it is forbidden to"], ["il est indispensable de", "it is essential to"], ["lave-toi les mains", "wash your hands (pronominal imperative)"]]
    },
    {
      id: "d4", n: 4, title: "Where shall we eat?", titleFr: "Dans la rue · On mange où ?",
      note: "Mathis, Nadia and Hugo can't agree where to eat. Listen to the types of restaurant and to Mathis, who is a gourmet… or just difficult?",
      scene: "rue", people: { "Nadia": "f4", "Mathis": "m2", "Hugo": "m3" },
      lines: [
        ["Hugo", "J'ai faim ! On va au fast-food ?", "I'm hungry! Shall we go to the fast-food place?"],
        ["Mathis", "Ah non, c'est trop gras et c'est fade.", "Oh no, it's too greasy and it's bland."],
        ["Nadia", "Il y a un traiteur libanais au coin de la rue : on peut prendre des plats à emporter et faire un pique-nique au parc.", "There's a Lebanese deli on the corner: we can get takeaway dishes and have a picnic in the park."],
        ["Mathis", "Pas de pique-nique, il fait trop froid ! Je préfère manger sur place.", "No picnic, it's too cold! I'd rather eat in."],
        ["Hugo", "Tu es vraiment difficile !", "You're so fussy!"],
        ["Mathis", "Je ne suis pas difficile, je suis un gourmet ! Allons au restaurant antillais : c'est épicé, c'est goûteux, et le service est rapide.", "I'm not fussy, I'm a gourmet! Let's go to the West Indian restaurant: it's spicy, it's tasty, and the service is fast."],
        ["Nadia", "D'accord, mais attention : moi, je suis allergique aux crevettes !", "OK, but careful: I'm allergic to prawns!"]
      ],
      glossary: [["à emporter ≠ sur place", "takeaway ≠ eat in"], ["le traiteur", "the deli, caterer"], ["gras · fade · épicé · goûteux", "greasy · bland · spicy · tasty"], ["difficile ≠ gourmet", "fussy ≠ food lover"]]
    },
    {
      id: "d5", n: 5, title: "At the West Indian restaurant", titleFr: "Au restaurant antillais · Vous avez choisi ?",
      note: "The three friends order. Listen to the restaurant phrases: the dish of the day, advice, the house speciality, the dessert.",
      scene: "restaurant", staff: "La serveuse", people: { "La serveuse": "f5", "Nadia": "f4", "Mathis": "m2" },
      lines: [
        ["La serveuse", "Bonsoir ! Vous avez choisi ?", "Good evening! Have you chosen?"],
        ["Nadia", "Quel est le plat du jour ?", "What's the dish of the day?"],
        ["La serveuse", "Le plat du jour, c'est un poisson grillé avec du riz et des légumes.", "The dish of the day is grilled fish with rice and vegetables."],
        ["Mathis", "Qu'est-ce que vous me conseillez ?", "What do you recommend?"],
        ["La serveuse", "Le colombo de poulet, c'est la spécialité de la maison. Il est un peu épicé.", "The chicken colombo, it's the house speciality. It's a bit spicy."],
        ["Mathis", "Parfait. En entrée, je voudrais des accras de morue, et ensuite le colombo.", "Perfect. As a starter I'd like salt-cod fritters, and then the colombo."],
        ["Nadia", "Pour moi, le plat du jour, sans entrée. Il n'y a pas de crevettes dedans ?", "For me, the dish of the day, no starter. There are no prawns in it?"],
        ["La serveuse", "Non, il n'y a que du poisson. Vous prendrez des desserts ?", "No, there's only fish. Will you have desserts?"],
        ["Mathis", "C'est quoi, le tourment d'amour ?", "What's the tourment d'amour?"],
        ["La serveuse", "Une petite tarte à la noix de coco, typique des Saintes, en Guadeloupe. Mais attention, il ne m'en reste qu'une !", "A little coconut tart, typical of Les Saintes in Guadeloupe. But careful, I've only got one left!"]
      ],
      glossary: [["le plat du jour", "the dish of the day"], ["la spécialité de la maison", "the house speciality"], ["Qu'est-ce que vous me conseillez ?", "What do you recommend?"], ["il ne m'en reste qu'une", "I've only got one left"]]
    },
    {
      id: "d6", n: 6, title: "Did you enjoy it?", titleFr: "À la sortie · Ça vous a plu ?",
      note: "Leaving the restaurant, the friends give their opinion. Listen to satisfaction, dissatisfaction and [[ne… que]].",
      scene: "rue", people: { "Hugo": "m3", "Nadia": "f4", "Mathis": "m2" },
      lines: [
        ["Hugo", "Alors, ça vous a plu ?", "So, did you enjoy it?"],
        ["Mathis", "Un régal, de l'entrée jusqu'au dessert ! J'ai eu un coup de cœur pour ce restaurant.", "A treat, from the starter to the dessert! I fell in love with this restaurant."],
        ["Nadia", "Moi, je suis ravie : le poisson était délicieux et les prix sont très corrects.", "I'm delighted: the fish was delicious and the prices are very reasonable."],
        ["Hugo", "Moi, j'ai trouvé le colombo un peu trop épicé… Et il a fallu attendre une demi-heure entre chaque plat !", "I found the colombo a bit too spicy… And we had to wait half an hour between each course!"],
        ["Mathis", "C'est vrai, le service était lent. Mais ce n'est pas scandaleux !", "True, the service was slow. But it's not outrageous!"],
        ["Hugo", "Bon. Sur l'appli, je ne mets que quatre étoiles sur cinq.", "Well. On the app, I'm only giving four stars out of five."],
        ["Nadia", "Et moi, je ne peux en dire que du bien. Cinq étoiles !", "And I can only say good things about it. Five stars!"]
      ],
      glossary: [["Un régal !", "A real treat!"], ["un coup de cœur", "love at first sight (for a place, a thing)"], ["Je suis ravi(e).", "I'm delighted."], ["ne… que = seulement", "only"]]
    }
  ],

  vocab: [
    { t: "l'aubergine", en: "the aubergine", pic: "🍆", cat: "Les légumes", g: "f" },
    { t: "l'avocat", en: "the avocado", pic: "🥑", cat: "Les légumes", g: "m" },
    { t: "la betterave", en: "the beetroot", pic: "🟣", cat: "Les légumes", g: "f" },
    { t: "la carotte", en: "the carrot", pic: "🥕", cat: "Les légumes", g: "f" },
    { t: "la courge", en: "the squash", pic: "🎃", cat: "Les légumes", g: "f" },
    { t: "l'endive", en: "the chicory", pic: "🥬", cat: "Les légumes", g: "f" },
    { t: "le poireau", en: "the leek", pic: "🥬", cat: "Les légumes", g: "m" },
    { t: "le radis", en: "the radish", pic: "🔴", cat: "Les légumes", g: "m" },
    { t: "l'oignon", en: "the onion", pic: "🧅", cat: "Les légumes", g: "m" },
    { t: "la farine", en: "flour", pic: "🌾", cat: "Les légumes secs et les céréales", g: "f" },
    { t: "le riz, la semoule", en: "rice, semolina", pic: "🍚", cat: "Les légumes secs et les céréales", g: "m" },
    { t: "les lentilles, les pois chiches", en: "lentils, chickpeas", pic: "🫘", cat: "Les légumes secs et les céréales", g: "pl" },
    { t: "la framboise", en: "the raspberry", pic: "🍓", cat: "Les fruits", g: "f" },
    { t: "la mûre, la myrtille", en: "the blackberry, the blueberry", pic: "🫐", cat: "Les fruits", g: "f" },
    { t: "la groseille", en: "the redcurrant", pic: "🍒", cat: "Les fruits", g: "f" },
    { t: "la poire, la prune", en: "the pear, the plum", pic: "🍐", cat: "Les fruits", g: "f" },
    { t: "l'amande, les raisins secs", en: "almond, raisins", pic: "🌰", cat: "Les fruits", g: "f" },
    { t: "le saumon, le colin", en: "salmon, hake", pic: "🐟", cat: "Poissons, fruits de mer, viandes", g: "m" },
    { t: "les crevettes", en: "prawns", pic: "🦐", cat: "Poissons, fruits de mer, viandes", g: "pl" },
    { t: "le bœuf, le mouton, le poulet", en: "beef, mutton, chicken", pic: "🍗", cat: "Poissons, fruits de mer, viandes", g: "m" },
    { t: "la cannelle, la muscade", en: "cinnamon, nutmeg", pic: "🟤", cat: "Les herbes et les épices", g: "f" },
    { t: "le cumin, le curcuma, le safran", en: "cumin, turmeric, saffron", pic: "🌶️", cat: "Les herbes et les épices", g: "m" },
    { t: "le gingembre", en: "ginger", pic: "🫚", cat: "Les herbes et les épices", g: "m" },
    { t: "la coriandre, la menthe", en: "coriander, mint", pic: "🌿", cat: "Les herbes et les épices", g: "f" },
    { t: "une barquette de framboises", en: "a punnet of raspberries", pic: "🧺", cat: "Les quantités" },
    { t: "une botte d'oignons", en: "a bunch of onions", pic: "🧅", cat: "Les quantités" },
    { t: "une boule de glace", en: "a scoop of ice cream", pic: "🍨", cat: "Les quantités" },
    { t: "un bouquet, une feuille de menthe", en: "a bunch, a leaf of mint", pic: "🌿", cat: "Les quantités" },
    { t: "une pincée de sel", en: "a pinch of salt", pic: "🧂", cat: "Les quantités" },
    { t: "une tablette de chocolat", en: "a bar of chocolate", pic: "🍫", cat: "Les quantités" },
    { t: "laver, couper (en morceaux)", en: "to wash, to cut (into pieces)", pic: "🔪", cat: "Les actions" },
    { t: "mélanger, ajouter, verser", en: "to mix, to add, to pour", pic: "🥣", cat: "Les actions" },
    { t: "préchauffer le four", en: "to preheat the oven", pic: "🌡️", cat: "Les actions" },
    { t: "mettre au four = enfourner", en: "to put in the oven", pic: "🔥", cat: "Les actions" },
    { t: "(faire) cuire, (laisser) refroidir", en: "to cook, to (leave to) cool", pic: "⏲️", cat: "Les actions" },
    { t: "sortir du four, servir", en: "to take out of the oven, to serve", pic: "🍽️", cat: "Les actions" },
    { t: "le bistrot = la brasserie", en: "the bistro, brasserie", pic: "🍷", cat: "Les lieux", g: "m" },
    { t: "le fast-food", en: "the fast-food restaurant", pic: "🍔", cat: "Les lieux", g: "m" },
    { t: "le restaurant étoilé, gastronomique", en: "the Michelin-starred, gourmet restaurant", pic: "⭐", cat: "Les lieux", g: "m" },
    { t: "le restaurant végétarien, végan", en: "the vegetarian, vegan restaurant", pic: "🥗", cat: "Les lieux", g: "m" },
    { t: "le traiteur", en: "the deli, caterer", pic: "🥡", cat: "Les lieux", g: "m" },
    { t: "à emporter ≠ sur place", en: "takeaway ≠ eat in", pic: "🛍️", cat: "La restauration" },
    { t: "fait maison", en: "homemade", pic: "🏠", cat: "La restauration" },
    { t: "le pourboire", en: "the tip", pic: "🪙", cat: "La restauration", g: "m" },
    { t: "la nappe, le tablier", en: "the tablecloth, the apron", pic: "🧑‍🍳", cat: "La restauration", g: "f" },
    { t: "l'ambiance, le service", en: "atmosphere, service", pic: "🎶", cat: "La restauration", g: "f" },
    { t: "acide, amer, amère", en: "sour, bitter", pic: "🍋", cat: "Les goûts" },
    { t: "épicé(e) = pimenté(e)", en: "spicy, hot", pic: "🌶️", cat: "Les goûts" },
    { t: "fade ≠ goûteux, goûteuse", en: "bland ≠ tasty", pic: "😐", cat: "Les goûts" },
    { t: "gras, grasse · salé(e) · sucré(e)", en: "greasy · salty · sweet", pic: "🍟", cat: "Les goûts" },
    { t: "déguster, goûter, grignoter", en: "to savour, to taste, to nibble", pic: "😋", cat: "Manger" },
    { t: "se régaler", en: "to really enjoy one's food", pic: "🤤", cat: "Manger" },
    { t: "allergique (à)", en: "allergic (to)", pic: "⚠️", cat: "Les personnes" },
    { t: "difficile ≠ gourmand(e), gourmet", en: "fussy ≠ greedy, food lover", pic: "🧐", cat: "Les personnes" },
    { t: "végétarien(ne), végan(e)", en: "vegetarian, vegan", pic: "🌱", cat: "Les personnes" },
    { t: "saignant · à point · bien cuit", en: "rare · medium · well done", pic: "🥩", cat: "La cuisson de la viande" },
    { t: "le bœuf bourguignon, le pot-au-feu", en: "beef stew, boiled beef with vegetables", pic: "🍲", cat: "Les plats" },
    { t: "la choucroute, la tartiflette", en: "sauerkraut with meats, potato-cheese bake", pic: "🥘", cat: "Les plats" },
    { t: "le couscous, la ratatouille", en: "couscous, ratatouille", pic: "🍛", cat: "Les plats" },
    { t: "le clafoutis, le fondant au chocolat", en: "clafoutis, chocolate fondant", pic: "🍰", cat: "Les plats" }
  ],

  grammar: [
    {
      id: "g-recette",
      title: "Cooking instructions · warnings",
      body: [
        "Recipes use the <b>imperative</b> (vous) or the <b>infinitive</b>: [[Mélangez le lait avec la crème.]] · [[Coupez le beurre en petits morceaux.]] · [[Versez la pâte sur les fruits.]] · [[Faites cuire pendant 35-40 minutes.]] · [[Ajoutez des feuilles de menthe.]]",
        "Warnings: [[Faites attention aux températures de conservation.]] · [[Attention ! C'est dangereux.]] · [[Attention, le four est très chaud !]]"
      ],
      info: { type: "card", style: "menu", caption: "🍒 Clafoutis aux fruits rouges · tap a step", title: "CLAFOUTIS AUX FRUITS ROUGES", sub: "pour 4 personnes · 35-40 min", rows: [
        ["1. Préchauffez le four à 200 °C.", "🌡️", "Préchauffez le four à deux cents degrés."], ["2. Lavez et séchez les fruits rouges.", "🫐", "Lavez et séchez les fruits rouges."],
        ["3. Mélangez le lait, la crème, la farine, le sucre et une pincée de sel.", "🥣", "Dans un saladier, mélangez le lait avec la crème, la farine, le sucre et une pincée de sel."], ["4. Mettez les fruits dans un plat beurré.", "🍓", "Mettez les framboises, les mûres et les myrtilles dans un plat beurré."],
        ["5. Versez la pâte sur les fruits.", "🫗", "Versez la pâte sur les fruits."], ["6. Coupez le beurre en morceaux et posez-les dessus.", "🧈", "Coupez le beurre en petits morceaux et posez-les dessus."],
        ["7. Enfournez et faites cuire 35 à 40 minutes.", "🔥", "Enfournez le clafoutis et faites-le cuire pendant trente-cinq à quarante minutes."], ["8. Laissez refroidir, servez tiède.", "🍨", "Laissez refroidir et servez tiède avec une boule de glace."]
      ], foot: "Variantes : poires, prunes, kiwis ou bananes" },
      widget: {
        type: "sort", label: "Put the recipe in order: before or after the oven?",
        cols: [{ k: "avant", label: "avant le four", color: "#3a6fd8" }, { k: "apres", label: "après le four", color: "#e86a2e" }],
        items: [
          { t: "Préchauffez le four.", k: "avant", say: "Préchauffez le four." }, { t: "Mélangez la farine et le sucre.", k: "avant", say: "Mélangez la farine et le sucre." }, { t: "Laissez refroidir.", k: "apres", say: "Laissez refroidir." },
          { t: "Versez la pâte sur les fruits.", k: "avant", say: "Versez la pâte sur les fruits." }, { t: "Ajoutez des feuilles de menthe pour décorer.", k: "apres", say: "Ajoutez des feuilles de menthe pour décorer." }, { t: "Servez avec une boule de glace.", k: "apres", say: "Servez avec une boule de glace." }
        ]
      }
    },
    {
      id: "g-en",
      title: "Quantities and the pronoun [[en]]",
      body: [
        "[[en]] replaces a noun introduced by: a <b>partitive</b> ([[du, de la, de l', des]]): [[Tu manges de la viande ? — Non, je n'en mange pas.]] · an <b>indefinite article</b> ([[un, une, des]]): [[Tu as une grande poêle ? — Oui, j'en ai une.]] · a <b>precise quantity</b>: [[Vous proposez trois plats ? — Non, j'en propose quatre.]] · an <b>imprecise quantity</b>: [[Vous consommez beaucoup de fruits ? — Oui, j'en consomme beaucoup.]]",
        "Note: with un, une or a number, you repeat it at the end: [[j'en ai une]], [[j'en veux deux]].",
        "Position: before the verb (or the auxiliary): [[J'en mange.]] · [[J'en ai mangé.]] Negative: [[Je n'en mange pas.]] · [[Je n'en ai pas mangé.]] (In speech, people often say <i>j'en ai pas</i>.)"
      ],
      info: { type: "pattern", title: "🥕 Replace the food with en", rows: [
        ["Des tomates ?", "J'", "en", { opts: ["cultive beaucoup.", "achète un kilo.", "mange tous les jours."] }],
        ["De la salade ?", "Je n'", "en", { opts: ["achète plus.", "mange pas.", "ai pas mis."] }],
        ["Des courgettes ?", "Tu", "en", { opts: ["veux deux ?", "as une ?", "prends trois ?"] }]
      ], note: "With a number or un / une, repeat it after the verb: j'en veux deux." },
      widget: {
        type: "combo", label: "Answer with en · pick an answer and a food",
        rows: [{ k: "oui", label: "✅ oui" }, { k: "non", label: "❌ non" }, { k: "nb", label: "🔢 a number" }],
        cols: [{ k: "viande", label: "🥩 Tu manges de la viande ?" }, { k: "oeufs", label: "🥚 Tu as des œufs ?" }, { k: "fruits", label: "🍎 Tu manges beaucoup de fruits ?" }],
        out: {
          "oui|viande": ["Oui, j'en mange.", "Yes, I eat it."], "non|viande": ["Non, je n'en mange pas. Je suis végétarien.", "No, I don't eat it. I'm vegetarian."], "nb|viande": ["J'en mange deux fois par semaine.", "I eat it twice a week."],
          "oui|oeufs": ["Oui, j'en ai.", "Yes, I have some."], "non|oeufs": ["Non, je n'en ai plus.", "No, I haven't got any left."], "nb|oeufs": ["Oui, j'en ai six.", "Yes, I have six.", "repeat the number"],
          "oui|fruits": ["Oui, j'en mange beaucoup.", "Yes, I eat a lot.", "repeat beaucoup"], "non|fruits": ["Non, je n'en mange pas beaucoup.", "No, I don't eat many."], "nb|fruits": ["J'en mange trois par jour.", "I eat three a day."]
        }
      }
    },
    {
      id: "g-obligation",
      title: "Obligation and prohibition",
      body: [
        "Obligation: [[Il faut]] / [[Il est nécessaire de]] / [[Il est indispensable de]] / [[Vous avez l'obligation de]] + infinitive · or the affirmative imperative: [[Faites attention !]] With pronominal verbs, the pronoun goes <b>after</b> the verb: [[se laver les mains]] → [[Lavez-vous les mains !]] / [[Lave-toi les mains !]]",
        "Prohibition: [[Il ne faut pas]] / [[Il est interdit de]] / [[Il est défendu de]] / [[Vous ne devez pas]] + infinitive · or the negative imperative: [[Ne faites pas entrer d'animal.]]"
      ],
      info: [
        { type: "compare", title: "✅ / ⛔ In the kitchen", cols: [
          { head: "Obligation", en: "you must", color: "#2f9c8a", lines: [["Il faut avoir une bonne hygiène.", "You must have good hygiene."], ["Il est indispensable de cuisiner des produits frais.", "It's essential to cook fresh produce."], ["Lavez-vous souvent les mains.", "Wash your hands often."]] },
          { head: "Interdiction", en: "you mustn't", color: "#e0474f", lines: [["Il est interdit de vendre vos plats tous les jours.", "It's forbidden to sell every day."], ["Il est défendu de cuisiner sans hygiène.", "Cooking without hygiene is forbidden."], ["Ne laissez pas entrer d'animal.", "Don't let animals in."]] }
        ] },
        { type: "signs", title: "🚸 Restaurant signs · red = forbidden, blue = compulsory", items: [
          { type: "no", pic: "🚭", fr: "Il est interdit de fumer.", en: "No smoking." }, { type: "no", pic: "🐕", fr: "Les animaux ne sont pas acceptés.", en: "No animals." },
          { type: "yes", pic: "🧼", fr: "Lavez-vous les mains.", en: "Wash your hands." }, { type: "no", pic: "📱", fr: "Il ne faut pas téléphoner à table.", en: "No phones at the table." }
        ] }
      ],
      widget: {
        type: "sort", label: "Obligation or prohibition?",
        cols: [{ k: "oblig", label: "obligation ✅", color: "#2f9c8a" }, { k: "interdit", label: "interdiction ⛔", color: "#e0474f" }],
        items: [
          { t: "Il est défendu de cuisiner dans des conditions non hygiéniques.", k: "interdit", say: "Il est défendu de cuisiner dans des conditions non hygiéniques." }, { t: "Vous avez l'obligation de préparer des plats faits maison.", k: "oblig", say: "Vous avez l'obligation de préparer des plats faits maison." },
          { t: "Il est indispensable de cuisiner des produits frais.", k: "oblig", say: "Il est indispensable de cuisiner des produits frais." }, { t: "Vous ne devez pas être cuisinier de métier.", k: "interdit", say: "Vous ne devez pas être cuisinier de métier." },
          { t: "Attachez-vous les cheveux.", k: "oblig", say: "Attachez-vous les cheveux." }, { t: "Ne laissez pas entrer d'animal.", k: "interdit", say: "Ne laissez pas entrer d'animal." }
        ]
      }
    },
    {
      id: "g-restaurant",
      title: "At the restaurant · satisfied or not?",
      body: [
        "The waiter: [[Vous avez choisi ?]] · [[Vous prendrez des desserts ?]] · [[Ça vous a plu ?]] You: [[En entrée, je voudrais…]] · [[Quel est le plat du jour ?]] · [[Qu'est-ce que vous me conseillez ?]] · [[C'est quoi, le tourment d'amour ?]] · Meat: [[saignant]], [[à point]], [[bien cuit]].",
        "Satisfied: [[Un régal !]] · [[C'est délicieux !]] · [[J'ai eu un coup de cœur.]] · [[Je suis ravi(e).]] Not satisfied: [[C'est une honte !]] · [[C'est scandaleux !]] · [[Les plats étaient un peu trop épicés.]] · [[Le service est trop lent.]]"
      ],
      info: { type: "scale", title: "⭐ How many stars?", colors: ["#e0474f", "#2f9c8a"], items: [
        { v: 4, fr: "C'est une honte ! C'est scandaleux !", en: "★ disgraceful!", pic: "😡" }, { v: 30, fr: "C'était mauvais et le service était lent.", en: "★★ bad, slow", pic: "😒" },
        { v: 56, fr: "C'était correct, sans plus.", en: "★★★ OK, nothing special", pic: "😐" }, { v: 78, fr: "C'était très bon, un peu trop épicé.", en: "★★★★ very good", pic: "🙂" }, { v: 96, fr: "Un régal ! Je suis ravie !", en: "★★★★★ a treat!", pic: "🤩" }
      ], ends: ["★", "★★★★★"] }
    },
    {
      id: "g-neque",
      title: "Restriction: [[ne… que]] (= seulement)",
      body: [
        "[[ne… que]] = <b>seulement, uniquement, juste</b>. [[ne / n']] goes before the verb and [[que / qu']] before the word it limits: [[Je ne mets que quatre étoiles sur cinq.]] · [[Il ne m'en reste qu'un.]] · [[Je ne peux en dire que du bien.]]",
        "It's <b>not</b> a negative: the article stays ([[Il ne mange que du poulet]], not <s>de poulet</s>). Careful: [[Elle n'achète pas que des produits sains]] = she doesn't buy only healthy food. [[Il ne mange plus que du poulet]] = now he only eats chicken."
      ],
      widget: {
        type: "combo", label: "Say it with ne… que",
        rows: [{ k: "nq", label: "ne… que" }],
        cols: [{ k: "riz", label: "🍚 Ce restaurant propose uniquement des plats à base de riz." }, { k: "potager", label: "🥬 Elle mange seulement les légumes de son potager." }, { k: "oeufs", label: "🥚 Je suis juste allergique aux œufs." }, { k: "chef", label: "👨‍🍳 Ce chef a eu seulement de bonnes critiques." }],
        out: {
          "nq|riz": ["Ce restaurant ne propose que des plats à base de riz.", "This restaurant only offers rice-based dishes."], "nq|potager": ["Elle ne mange que les légumes de son potager.", "She only eats vegetables from her garden."],
          "nq|oeufs": ["Je ne suis allergique qu'aux œufs.", "I'm only allergic to eggs.", "que before the limited word"], "nq|chef": ["Ce chef n'a eu que de bonnes critiques.", "This chef has had only good reviews.", "passé composé: ne + auxiliary… que"]
        }
      }
    }
  ],

  expressions: [
    { fn: "Pour comprendre des instructions de cuisine", fnEn: "recipes", icon: "🍳", items: [
      ["Mélangez le lait avec la crème.", "Mix the milk with the cream.", "std", true],
      ["Coupez le beurre en petits morceaux.", "Cut the butter into small pieces.", "std"],
      ["Versez la pâte sur les fruits.", "Pour the batter over the fruit.", "std"],
      ["Faites cuire pendant 35-40 minutes.", "Cook for 35–40 minutes.", "std", true],
      ["Ajoutez des feuilles de menthe.", "Add some mint leaves.", "std"]
    ] },
    { fn: "Pour mettre en garde", fnEn: "warnings", icon: "⚠️", items: [
      ["Faites attention aux températures de conservation.", "Be careful with storage temperatures.", "std"],
      ["Attention ! C'est dangereux.", "Careful! It's dangerous.", "std", true]
    ] },
    { fn: "Pour communiquer au restaurant", fnEn: "at the restaurant", icon: "🍽️", items: [
      ["— Vous avez choisi ? — En entrée, je voudrais…", "— Have you chosen? — As a starter I'd like…", "poli", true],
      ["Quel est le plat du jour ?", "What's the dish of the day?", "poli", true],
      ["Qu'est-ce que vous me conseillez ?", "What do you recommend?", "poli", true],
      ["Le colombo, c'est la spécialité de la maison.", "The colombo is the house speciality.", "std"],
      ["— Vous prendrez des desserts ? — C'est quoi, le tourment d'amour ?", "— Will you have dessert? — What's the tourment d'amour?", "std"],
      ["— Ça vous a plu ? — Oui, c'était très bon !", "— Did you enjoy it? — Yes, it was very good!", "std"]
    ] },
    { fn: "Pour exprimer sa satisfaction", fnEn: "satisfaction", icon: "😋", items: [
      ["Un régal !", "A treat!", "std", true],
      ["J'ai eu un coup de cœur pour ce restaurant.", "I fell in love with this restaurant.", "std"],
      ["Je suis ravi(e) de cette expérience.", "I'm delighted with this experience.", "std", true],
      ["Je ne peux en dire que du bien.", "I can only say good things about it.", "std"]
    ] },
    { fn: "… et son insatisfaction", fnEn: "dissatisfaction", icon: "😡", items: [
      ["C'est une honte !", "It's a disgrace!", "std", true],
      ["C'est scandaleux de payer aussi cher !", "It's outrageous to pay so much!", "std", true],
      ["Le service est trop lent.", "The service is too slow.", "std"],
      ["Les plats étaient un peu trop épicés.", "The dishes were a bit too spicy.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · ordering", lanes: ["La serveuse", "Le client"], av: ["f5", "m2"], steps: [
    { s: 0, fr: "Bonsoir ! Vous avez choisi ?", en: "Good evening! Have you chosen?" },
    { s: 1, fr: "Qu'est-ce que vous me conseillez ?", en: "What do you recommend?" },
    { s: 0, fr: "Le colombo, c'est la spécialité de la maison.", en: "The colombo is the house speciality." },
    { s: 1, fr: "Parfait. En entrée, je voudrais des accras, et ensuite le colombo.", en: "Perfect. As a starter, fritters, then the colombo." },
    { s: 0, fr: "Vous prendrez un dessert ?", en: "Will you have dessert?" },
    { s: 1, fr: "Oui. C'est quoi, le tourment d'amour ?", en: "Yes. What's the tourment d'amour?" },
    { s: 0, fr: "Ça vous a plu ?", en: "Did you enjoy it?" },
    { s: 1, fr: "Un régal !", en: "A treat!" }
  ] },

  sounds: {
    intro: "Phonie-graphie: <b>intonation and emotions</b>. In French, the melody of the sentence carries the emotion: surprise rises at the end, joy is lively and high, anger is strong and falls hard, disappointment is low and slow. Listen and repeat with the same melody.",
    letters: [
      { l: "😲", name: "la surprise", tip: "The voice rises at the end: [[C'est étonnant de découvrir tous ces plats épicés !]] · [[Les plats ont des saveurs très particulières, c'est incroyable !]]", ex: ["C'est incroyable !", "Ah bon ? Il n'y a que du poisson ?"] },
      { l: "🤩", name: "la joie", tip: "Lively, high and quick: [[Un régal, de l'apéritif jusqu'au dessert !]] · [[Il y a une très bonne ambiance, c'est génial !]]", ex: ["Un régal !", "C'est génial !"] },
      { l: "😡", name: "la colère", tip: "Strong, stressed syllables, falling hard: [[Il faut patienter plus d'une demi-heure entre chaque plat. C'est une honte !]]", ex: ["C'est une honte !", "C'est scandaleux de payer aussi cher !"] },
      { l: "😞", name: "la déception", tip: "Low, slow and falling: [[Je n'ai pas pu goûter certains plats, c'est dommage.]]", ex: ["C'est dommage.", "J'ai trouvé que les plats étaient mauvais."] }
    ],
    pairs: [
      { a: ["Je n'en mange pas.", "I don't eat any."], b: ["Je ne mange que ça.", "I only eat that."], note: "négation / restriction" },
      { a: ["J'en ai un.", "I have one."], b: ["J'en ai.", "I have some."], note: "en + number / en" },
      { a: ["saignant", "rare"], b: ["bien cuit", "well done"], note: "la cuisson" },
      { a: ["à emporter", "takeaway"], b: ["sur place", "eat in"], note: "restauration" },
      { a: ["Il faut…", "You must…"], b: ["Il ne faut pas…", "You mustn't…"], note: "obligation / interdiction" },
      { a: ["Lavez-vous les mains !", "Wash your hands!"], b: ["Ne vous lavez pas…", "Don't wash…"], note: "pronominal imperative" }
    ]
  },
  classify: {
    label: "🎭 Quelle émotion ?", q: "Listen to the sentence: which emotion does it express?",
    options: ["la joie", "la colère", "la déception", "la surprise"],
    items: [
      { say: "Un régal, de l'apéritif jusqu'au dessert !", a: 0 }, { say: "C'est une honte ! Le service est beaucoup trop lent !", a: 1 }, { say: "Je n'ai pas pu goûter le dessert, c'est dommage.", a: 2 },
      { say: "Ah bon ? Ce restaurant est végan ?", a: 3 }, { say: "Il y a une très bonne ambiance, c'est génial !", a: 0 }, { say: "C'est scandaleux de payer aussi cher !", a: 1 },
      { say: "Les plats étaient un peu fades, je suis déçue.", a: 2 }, { say: "C'est incroyable, toutes ces saveurs !", a: 3 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Annie produit tous ses légumes.", ok: false, explain: "She still buys potatoes and onions." },
    { type: "mcq", tag: "Dialogue 1", q: "Annie cultive beaucoup de tomates parce qu'elle…", options: ["en consomme beaucoup", "en vend au marché", "n'aime pas la salade"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "On préchauffe le four à…", options: ["200 °C", "100 °C", "350 °C"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Sur l'appli, on peut vendre ses plats tous les jours.", ok: false, explain: "Sales must stay occasional." },
    { type: "tf", tag: "Dialogue 4", s: "Nadia est allergique aux crevettes.", ok: true },
    { type: "mcq", tag: "Dialogue 5", q: "La spécialité de la maison, c'est…", options: ["le colombo de poulet", "le poisson grillé", "le tourment d'amour"], answer: 0 },
    { type: "tf", tag: "Dialogue 6", s: "Hugo met cinq étoiles au restaurant.", ok: false, explain: "« Je ne mets que quatre étoiles. »" },
    { type: "fill", tag: "Recette", sentence: "___ le four à 200 °C.", options: ["Préchauffez", "Préchauffer à", "Préchauffé"], answer: 0 },
    { type: "fill", tag: "Recette", sentence: "Coupez le beurre ___ petits morceaux.", options: ["en", "à", "dans"], answer: 0 },
    { type: "fill", tag: "Quantités", sentence: "Une ___ de sel.", options: ["pincée", "botte", "barquette"], answer: 0 },
    { type: "fill", tag: "Quantités", sentence: "Une ___ de framboises.", options: ["barquette", "pincée", "tablette"], answer: 0 },
    { type: "fill", tag: "Quantités", sentence: "Une ___ de glace à la vanille.", options: ["boule", "botte", "feuille"], answer: 0 },
    { type: "fill", tag: "Le pronom en", sentence: "Tu manges de la viande ? — Non, je n'___ mange pas.", options: ["en", "y", "la"], answer: 0 },
    { type: "fill", tag: "Le pronom en", sentence: "Tu as une grande poêle ? — Oui, j'en ai ___.", options: ["une", "la", "—"], answer: 0 },
    { type: "fill", tag: "Le pronom en", sentence: "Vous n'avez pas acheté de beurre ? — Non, nous n'___ avons pas acheté.", options: ["en", "y", "le"], answer: 0 },
    { type: "type", tag: "Le pronom en", q: "Replace with en: « Je ne consomme pas beaucoup de légumes. »", answers: ["Je n'en consomme pas beaucoup.", "Je n'en consomme pas beaucoup"] },
    { type: "fill", tag: "Obligation / interdiction", sentence: "Il est interdit ___ fumer dans les restaurants.", options: ["de", "à", "—"], answer: 0 },
    { type: "fill", tag: "Obligation / interdiction", sentence: "Avant de cuisiner, ___ les mains !", options: ["lavez-vous", "vous lavez", "lavez-les vous"], answer: 0 },
    { type: "fill", tag: "Obligation / interdiction", sentence: "Il ___ pas laisser entrer les animaux.", options: ["ne faut", "faut", "n'est"], answer: 0 },
    { type: "type", tag: "Obligation / interdiction", q: "Make it a prohibition: « On peut fumer dans les restaurants. »", answers: ["Il est interdit de fumer dans les restaurants.", "On ne doit pas fumer dans les restaurants.", "Il ne faut pas fumer dans les restaurants.", "Il est défendu de fumer dans les restaurants."] },
    { type: "fill", tag: "Ne… que", sentence: "Je ___ consomme que des fruits de saison.", options: ["ne", "n'en", "—"], answer: 0 },
    { type: "fill", tag: "Ne… que", sentence: "Il ne m'en reste ___ un.", options: ["qu'", "que", "pas"], answer: 0 },
    { type: "type", tag: "Ne… que", q: "With ne… que: « Elle mange seulement les légumes de son potager. »", answers: ["Elle ne mange que les légumes de son potager.", "Elle ne mange que les légumes de son potager"] },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous avez choisi ?", options: ["Oui. En entrée, je voudrais une salade.", "Un régal !", "Il est interdit de choisir."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous voulez votre steak comment ?", options: ["À point, s'il vous plaît.", "Sucré, merci.", "À emporter."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Ça vous a plu ?", options: ["Oui, c'était délicieux ! Un régal !", "Je n'en mange pas.", "Préchauffez le four."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Le contraire de « fade » :", options: ["goûteux", "gras", "acide"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Un restaurant où on peut acheter de bons plats à emporter :", options: ["un traiteur", "un fast-food", "un bistrot"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la cannelle", "la muscade", "le safran", "le clafoutis"], answer: 3, explain: "le clafoutis is a dessert; the others are spices." },
    { type: "mcq", tag: "Vocabulaire", q: "« Grignoter », c'est…", options: ["manger un peu entre les repas", "faire la cuisine", "boire beaucoup"], answer: 0 },
    { type: "order", tag: "Construisez", en: "What do you recommend?", words: ["Qu'est-ce", "que", "vous", "me", "conseillez", "?"] },
    { type: "listen", tag: "Écoute", q: "What does the customer order?", say: "En entrée, je voudrais une soupe de légumes, et comme plat, le poulet avec des frites.", options: ["vegetable soup, then chicken and chips", "a salad, then fish", "only a dessert"], answer: 0 }
  ],

  roleplays: [
    { title: "🍽️ Au restaurant (DELF)", brief: "You're at a restaurant. Ask about the dishes, order a starter and a main course, then a dessert.", memo: ["Quel est le plat du jour ?", "Qu'est-ce que vous me conseillez ?", "En entrée, je voudrais…", "C'est quoi… ?"], partner: "f5", you: "m2",
      turns: [
        { them: "Bonsoir ! Vous avez choisi ?", themEn: "Good evening! Have you chosen?", hint: "Ask what the dish of the day is.", you: "Bonsoir. Quel est le plat du jour ?", youEn: "Good evening. What's the dish of the day?" },
        { them: "C'est un bœuf bourguignon avec de la purée.", themEn: "It's beef bourguignon with mashed potatoes.", hint: "Take it, with a leek vinaigrette starter.", you: "Je vais prendre ça. Et en entrée, je voudrais des poireaux-vinaigrette.", youEn: "I'll have that. And as a starter I'd like leeks vinaigrette." },
        { them: "Vous prendrez un dessert ?", themEn: "Will you have dessert?", hint: "Ask what she recommends.", you: "Oui. Qu'est-ce que vous me conseillez ?", youEn: "Yes. What do you recommend?" },
        { them: "Le fondant au chocolat, c'est la spécialité de la maison.", themEn: "The chocolate fondant is the house speciality.", hint: "Accept it.", you: "Parfait, je prends le fondant !", youEn: "Perfect, I'll have the fondant!" }
      ] },
    { title: "🍒 Donne ta recette", brief: "A friend asks how to make your favourite dish. Give the steps with the imperative and the quantities.", memo: ["D'abord…", "Coupez / Mélangez / Versez…", "Faites cuire…", "Attention !"], partner: "m3", you: "f3",
      turns: [
        { them: "Comment tu fais ta ratatouille ?", themEn: "How do you make your ratatouille?", hint: "First, wash and cut the vegetables into pieces.", you: "D'abord, lave et coupe les légumes en morceaux.", youEn: "First, wash the vegetables and cut them into pieces." },
        { them: "Quels légumes ?", themEn: "Which vegetables?", hint: "Aubergines, courgettes, tomatoes, peppers and an onion.", you: "Des aubergines, des courgettes, des tomates, des poivrons et un oignon.", youEn: "Aubergines, courgettes, tomatoes, peppers and an onion." },
        { them: "Et après ?", themEn: "And then?", hint: "Cook for one hour; careful, stir often.", you: "Fais cuire pendant une heure. Attention, mélange souvent !", youEn: "Cook for an hour. Careful, stir often!" }
      ] },
    { title: "⭐ Ton avis sur le restaurant", brief: "A friend asks what you thought of a restaurant. You weren't satisfied with everything. Use ne… que.", memo: ["Un régal ! / C'est une honte !", "trop lent / trop épicé", "Je ne mets que…"], partner: "f4", you: "m3",
      turns: [
        { them: "Alors, ce nouveau restaurant, ça t'a plu ?", themEn: "So, did you like this new restaurant?", hint: "The food was delicious, but the service was too slow.", you: "La cuisine était délicieuse, mais le service était trop lent.", youEn: "The food was delicious, but the service was too slow." },
        { them: "Ah bon ?", themEn: "Really?", hint: "You had to wait half an hour between each course.", you: "Oui, il a fallu attendre une demi-heure entre chaque plat !", youEn: "Yes, we had to wait half an hour between each course!" },
        { them: "Tu mets combien d'étoiles ?", themEn: "How many stars are you giving?", hint: "Only three.", you: "Je ne mets que trois étoiles.", youEn: "I'm only giving three stars." }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Réaliser un sondage", intro: "Read an infographic about French eating habits, then carry out the same survey in your class and present the results as a chart.",
      steps: [["Préparation", ["Look at an infographic on eating habits (theme, date, who carried out the study, how many people, which generation).", "Strategy: to interpret a chart, first understand its context: the main theme, the publication date and the organisation behind it.", "Find which chart is about: meat and fish, homemade or ready meals, sharing food photos online, where recipes come from."]], ["Réalisation", ["In groups, choose one theme and write 2 questions about it.", "Ask the rest of the class, gather and analyse the answers.", "Make a chart of your results."]], ["Présentation", ["Each group presents its chart and results. Are you surprised?"]]],
      phrases: ["Manger de la viande ≠ être végétarien(ne)", "Manger des plats préparés ≠ faits maison", "Partager des photos de plats en ligne", "Suivre une recette de cuisine", "La majorité de la classe…"],
      model: { type: "bars", title: "📊 Example: our class survey (invented results)", unit: " élèves", items: [
        { fr: "cuisinent des plats faits maison", en: "cook homemade meals", v: 11, pic: "🏠" }, { fr: "mangent souvent des plats préparés", en: "often eat ready meals", v: 6, pic: "📦" },
        { fr: "postent des photos de plats", en: "post food photos", v: 8, pic: "📸" }, { fr: "sont végétariens", en: "are vegetarian", v: 3, pic: "🌱" }
      ] } }
  ],
  delf: {
    skill: "Production orale", title: "Part 3 · Dialogue simulé: at the restaurant",
    about: "In the DELF A2 speaking test, the third part is a role-play with the examiner (about 3–4 minutes). Example: <i>you are in a restaurant; ask the waiter about the dishes, order, and react to the meal.</i> You must greet, ask questions, make choices, react politely (and perhaps complain), then pay and say goodbye.",
    tips: ["Ask for information: [[Quel est le plat du jour ?]] · [[C'est quoi, … ?]] · [[Il y a des crevettes dedans ?]]", "Ask for advice: [[Qu'est-ce que vous me conseillez ?]]", "Order clearly: [[En entrée, je voudrais… Comme plat… En dessert…]]", "React: [[C'était délicieux !]] or politely complain: [[Excusez-moi, mon plat est froid.]] Then: [[L'addition, s'il vous plaît.]]"],
    items: [
      { type: "mcq", q: "You want to know what's in a dish. You say:", options: ["C'est quoi, le colombo ?", "Le colombo, c'est scandaleux.", "Je ne mange que le colombo."], answer: 0 },
      { type: "mcq", q: "You're allergic to nuts. You say:", options: ["Attention, je suis allergique aux noix. Il y en a dans ce dessert ?", "J'adore les noix !", "Il est interdit de manger."], answer: 0 },
      { type: "mcq", q: "Your meat is too cooked. You complain politely:", options: ["Excusez-moi, j'ai demandé ma viande saignante, elle est bien cuite.", "C'est une honte, je pars !", "Un régal !"], answer: 0 },
      { type: "mcq", q: "At the end of the meal, you ask:", options: ["L'addition, s'il vous plaît.", "Le pourboire, s'il vous plaît.", "La nappe, s'il vous plaît."], answer: 0 },
      { type: "mcq", q: "The waiter asks « Ça vous a plu ? ». You were happy:", options: ["Oui, c'était un régal, merci !", "Non, c'est une honte.", "Je n'en mange pas."], answer: 0 }
    ]
  },
  detente: {
    title: "Le tour de France des plats",
    intro: "Each region has its speciality (as the book's bistro page says). Where does each dish come from?",
    items: [
      { type: "mcq", q: "Les crêpes sont une spécialité de…", options: ["la Bretagne", "l'Alsace", "la montagne"], answer: 0 },
      { type: "mcq", q: "La tartiflette (pommes de terre, fromage, lardons) se mange à…", options: ["la montagne (Savoie)", "la mer", "Paris"], answer: 0 },
      { type: "mcq", q: "La choucroute et les saucisses sont des spécialités de…", options: ["l'Alsace", "la Bretagne", "la Corse"], answer: 0 },
      { type: "mcq", q: "Le confit de canard est une spécialité du…", options: ["Sud-Ouest", "Nord", "Québec"], answer: 0 },
      { type: "mcq", q: "Le colombo et le tourment d'amour viennent…", options: ["des Antilles (Guadeloupe, Martinique)", "de Normandie", "de Belgique"], answer: 0 },
      { type: "mcq", q: "Le couscous vient…", options: ["d'Afrique du Nord", "de Bretagne", "d'Alsace"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "card", style: "menu", caption: "🍷 Au bistrot · tap a dish", title: "BISTROT · MENU DU JOUR", sub: "nappes à carreaux, service rapide, ambiance populaire", rows: [
      ["Entrée : poireaux-vinaigrette", "6 €", "En entrée, des poireaux-vinaigrette."], ["Entrée : pâté de campagne", "7 €", "Ou un pâté de campagne."],
      ["Plat : poulet rôti, frites ou purée", "15 €", "Comme plat, un poulet rôti avec des frites ou de la purée."], ["Plat : bœuf bourguignon", "17 €", "Ou un bœuf bourguignon."],
      ["Dessert : fondant au chocolat", "7 €", "En dessert, un fondant au chocolat."]
    ], foot: "Service compris · pourboire apprécié" }
  ],
  culture: [
    { icon: "🍽️", kind: "Oh, le cliché !", t: "« Les Français vont beaucoup au restaurant. »", d: "According to the RTBF / AFP figures quoted by the book, the French eat out on average <b>twice a week</b>." },
    { icon: "🍷", kind: "Civilisation", t: "Le bistrot parisien", d: "Café, bar and restaurant at once (also called a <i>brasserie</i>): red-and-white checked tablecloths, fast service, a friendly atmosphere and simple, tasty dishes: pâté, croque-monsieur, roast chicken and chips, bœuf bourguignon, pot-au-feu, choucroute, leeks vinaigrette." },
    { icon: "🍲", kind: "Au fait !", t: "Le couscous", d: "A North African dish inscribed on UNESCO's list of the intangible cultural heritage of humanity, and one of the French people's favourite dishes. There are many recipes for it." },
    { icon: "🌱", kind: "Au fait !", t: "Les étoiles Michelin", d: "Michelin stars reward high-quality restaurants. Since 2020, eco-responsible restaurants can also receive a <b>green star</b>. The book presents chef Claire Vallée and her vegan restaurant ONA, which received a Michelin star." },
    { icon: "🚚", kind: "Francophonie", t: "Les roulottes de Tahiti", d: "In Tahiti, <i>roulottes</i> (food trucks) are a tradition: in the evening, people of all kinds gather around them to eat simple, fresh dishes, like raw fish or the poké (raw fish in cubes, from Hawaiian tradition)." },
    { icon: "🥘", kind: "Civilisation", t: "Les spécialités régionales", d: "Crêpes in Brittany, tartiflette in the mountains, sausages and choucroute in Alsace, confit de canard in the South-West, colombo in the West Indies… French cuisine is a mosaic of regions." }
  ],
  tips: [
    { icon: "🔢", t: "en + number: say the number again", d: "[[Tu as des œufs ? — J'en ai six.]] [[Tu as une poêle ? — J'en ai une.]]" },
    { icon: "🧼", t: "Pronominal imperative", d: "se laver → [[Lavez-vous les mains !]] (pronoun after, with a hyphen). Negative: [[Ne vous lavez pas…]]" },
    { icon: "☝️", t: "ne… que isn't a negative", d: "Keep the article: [[Je ne mange que des légumes.]] (not <s>de légumes</s>)." }
  ],
  mistakes: [
    ["Je mange en pas.", "Je n'en mange pas.", "ne + en + verb + pas"],
    ["J'ai une poêle ? — Oui, j'en ai.", "Oui, j'en ai une.", "repeat une"],
    ["Il est interdit fumer.", "Il est interdit de fumer.", "interdit de"],
    ["Vous lavez les mains !", "Lavez-vous les mains !", "pronominal imperative"],
    ["Je ne mange que de légumes.", "Je ne mange que des légumes.", "ne… que keeps the article"],
    ["Je ne mets qu'étoile quatre.", "Je ne mets que quatre étoiles.", "que before the limited word"],
    ["Je voudrais mon steak cuit bien.", "Je voudrais mon steak bien cuit.", "bien cuit"],
    ["Qu'est-ce que vous me conseiller ?", "Qu'est-ce que vous me conseillez ?", "vous → -ez"]
  ]
});
