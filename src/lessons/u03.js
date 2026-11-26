// Unité 3 · Comme à la maison (Édito A2, 2e édition, book pp. 41–54)
// Situations: trouver un logement étudiant · appeler pour une annonce · visiter une colocation · vivre dans un bus · entre voisins
// Grammar: les pronoms relatifs qui, que, où · la comparaison (adjectif, adverbe, verbe, nom; meilleur, mieux, pire) · la condition (si + présent)
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
const U03_COLOC = {
  rooms: [
    { x: 10, y: 10, w: 200, h: 120, name: "le salon", m2: 25, c: "#fff8ec" },
    { x: 210, y: 10, w: 180, h: 70, name: "la cuisine", m2: 12, c: "#eef7ea" },
    { x: 210, y: 80, w: 180, h: 50, name: "la salle de bain", c: "#e8f5fb" },
    { x: 10, y: 130, w: 380, h: 30, name: "le couloir", c: "#f7f2ea" },
    { x: 10, y: 160, w: 125, h: 90, name: "la chambre 1", m2: 11, c: "#eef1fb" },
    { x: 135, y: 160, w: 125, h: 90, name: "la chambre 2", m2: 11, c: "#f6eefb" },
    { x: 260, y: 160, w: 130, h: 90, name: "la chambre 3", m2: 12, c: "#fbeef0" }
  ],
  doors: [[90, 126, 40, 8], [280, 126, 40, 8], [55, 156, 34, 8], [180, 156, 34, 8], [305, 156, 34, 8], [206, 40, 8, 30]],
  windows: [[6, 40, 8, 50], [250, 6, 60, 8], [40, 246, 50, 8], [165, 246, 50, 8], [300, 246, 50, 8]],
  items: [
    { id: "tele", x: 110, y: 26, pic: "📺", name: "la télé" },
    { id: "table", x: 110, y: 66, pic: "🟫", name: "la table basse" },
    { id: "canape", x: 110, y: 104, pic: "🛋️", name: "le canapé" },
    { id: "plante", x: 34, y: 104, pic: "🪴", name: "la plante" },
    { id: "frigo", x: 245, y: 44, pic: "🧊", name: "le frigo" },
    { id: "four", x: 300, y: 44, pic: "🔥", name: "le four" },
    { id: "evier", x: 355, y: 44, pic: "🚰", name: "l'évier" },
    { id: "lavelinge", x: 282, y: 112, pic: "🫧", name: "le lave-linge" },
    { id: "douche", x: 362, y: 112, pic: "🚿", name: "la douche" },
    { id: "lit1", x: 45, y: 205, pic: "🛏️", name: "le lit" },
    { id: "bureau1", x: 105, y: 220, pic: "🖥️", name: "le bureau" },
    { id: "lit2", x: 170, y: 205, pic: "🛏️", name: "le lit" },
    { id: "etagere", x: 232, y: 222, pic: "📚", name: "l'étagère" },
    { id: "lit3", x: 300, y: 205, pic: "🛏️", name: "le lit" },
    { id: "chevet", x: 358, y: 200, pic: "💡", name: "la table de chevet" }
  ]
};
LESSONS.push({
  id: "u03", rubrique: 2, num: 3,
  title: "At home",
  titleFr: "Comme à la maison",
  pages: "Book pp. 41–54",
  opener: { fr: "C'est très confortable !", en: "It's very comfortable!" },
  hero: { scene: "appartement", people: { "Phil": "m2", "Manu": "m3", "Aya": "f4" } },
  situations: [
    ["🎓", "Un toit pour étudier", "student housing: [[la colocation]], [[la résidence universitaire]], [[le foyer]], [[la cohabitation intergénérationnelle]]"],
    ["📞", "J'appelle pour l'annonce", "renting: [[Je suis intéressé par votre annonce.]] · [[Quel est le montant du loyer ?]]"],
    ["🛋️", "La visite", "linking with qui, que, où: [[C'est la chambre où je dors.]]"],
    ["🚌", "Un logement atypique", "comparing: [[On a autant de pièces qu'avant.]] · [[C'est mieux !]]"],
    ["🐈", "Entre voisins", "disappointment and comfort: [[Zut !]] · [[Ne t'inquiète pas, ça va aller.]] · [[Si tu es disponible, passe ce soir !]]"]
  ],
  goals: [
    "Describe a home: [[C'est un appartement deux pièces rénové dans un bel immeuble ancien.]]",
    "Ask about a home to rent: [[Quelle est la superficie ?]], [[Quel est le montant du loyer ?]], [[Ça inclut les charges ?]]",
    "Link sentences with [[qui]], [[que]], [[où]]: [[le studio qui est au 4e étage]], [[la maison que j'aime]], [[la ville où j'habite]]",
    "Compare: [[plus / moins / aussi]] + adjective, [[plus / moins / autant]] after a verb, [[plus de / moins de / autant de]] + noun; [[meilleur]], [[mieux]], [[pire]]",
    "Express disappointment: [[Zut !]], [[Mince !]], [[C'est dommage.]]",
    "Comfort someone: [[Ce n'est pas grave.]], [[Ça va aller.]], [[Courage !]], [[Ne t'inquiète pas.]]",
    "Set a condition: [[si]] + present → present, futur proche or imperative"
  ],
  glance: [
    ["🗣️", "Communication", "describing and renting a home · disappointment · comforting · conditions"],
    ["🧩", "Grammaire", "qui, que, où · comparisons (incl. meilleur, mieux, pire) · si + présent"],
    ["🗂️", "Vocabulaire", "types of housing · rooms · the building · the property ad · costs and services · furniture, appliances, decoration · the neighbourhood"],
    ["🔊", "Phonie-graphie", "[j] loyer · [ɥ] gratuit · [w] toit"],
    ["⭐", "The phrase to learn first", "[[Je suis intéressé(e) par votre annonce.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Finding a roof", titleFr: "Au service logement · Comment trouver un toit ?",
      note: "Aya, a foreign intern, asks the university housing service for advice. Listen to the types of student housing.",
      scene: "bureau", staff: "La conseillère", people: { "La conseillère": "f2", "Aya": "f4" },
      lines: [
        ["Aya", "Bonjour, je viens faire un stage de six mois et je cherche un logement pas trop cher.", "Hello, I'm here for a six-month internship and I'm looking for somewhere not too expensive."],
        ["La conseillère", "Vous pouvez chercher une colocation. On partage un appartement plus grand et moins cher.", "You can look for a flatshare. You share a bigger, cheaper flat."],
        ["Aya", "Avec des gens que je ne connais pas ?", "With people I don't know?"],
        ["La conseillère", "Oui, ou des amis. Il y a aussi les foyers de jeunes travailleurs : on y trouve beaucoup de stagiaires et d'étudiants étrangers. C'est bien pour se faire des amis.", "Yes, or friends. There are also young workers' hostels: you find lots of interns and foreign students there. It's good for making friends."],
        ["Aya", "Ça m'intéresse ! Et c'est vrai qu'on peut habiter chez une personne âgée ?", "That interests me! And is it true you can live with an elderly person?"],
        ["La conseillère", "Oui, c'est la cohabitation intergénérationnelle. Elle vous propose une chambre gratuite ou à petit loyer, et vous lui rendez des petits services.", "Yes, it's intergenerational living. She offers you a free or low-rent room, and you do small favours for her."],
        ["Aya", "Comme s'occuper du courrier ou des plantes ?", "Like dealing with the post or the plants?"],
        ["La conseillère", "Exactement. Regardez aussi la plateforme web de l'université : il y a souvent des offres intéressantes.", "Exactly. Look at the university's web platform too: there are often interesting offers."]
      ],
      glossary: [["la colocation, le / la colocataire", "flatshare, flatmate"], ["le foyer de jeunes travailleurs", "young workers' hostel"], ["la cohabitation intergénérationnelle", "intergenerational home-sharing"], ["rendre service", "to do a favour"]]
    },
    {
      id: "d2", n: 2, title: "Calling about an ad", titleFr: "Au téléphone · Je suis intéressé par votre annonce",
      note: "Thomas calls the owner of a renovated two-room flat. Listen to the questions you ask before renting.",
      scene: "appartement", people: { "Thomas": "m2", "La propriétaire": "f6" }, phone: ["Thomas", "La propriétaire"],
      lines: [
        ["Thomas", "Bonjour, madame. Je suis intéressé par votre annonce : le T2 rénové du centre-ville. Il est toujours disponible ?", "Hello. I'm interested in your ad: the renovated two-room flat in the town centre. Is it still available?"],
        ["La propriétaire", "Oui, monsieur. C'est un appartement deux pièces dans un bel immeuble ancien.", "Yes. It's a two-room flat in a lovely old building."],
        ["Thomas", "Quelle est la superficie du logement ?", "What's the floor area?"],
        ["La propriétaire", "Quarante-cinq mètres carrés : un séjour, une chambre avec un coin bureau, une cuisine équipée et une salle de bain. Et il y a un balcon.", "Forty-five square metres: a living room, a bedroom with a desk area, a fitted kitchen and a bathroom. And there's a balcony."],
        ["Thomas", "Quel est le montant du loyer ?", "How much is the rent?"],
        ["La propriétaire", "Huit cent quatre-vingt-quinze euros par mois.", "Eight hundred and ninety-five euros a month."],
        ["Thomas", "Ça inclut les charges ?", "Does that include the service charges?"],
        ["La propriétaire", "L'eau et le chauffage, oui. L'électricité, non. Il y a aussi une cave au sous-sol.", "Water and heating, yes. Electricity, no. There's also a cellar in the basement."],
        ["Thomas", "C'est à quel étage ? Il y a un ascenseur ?", "Which floor is it on? Is there a lift?"],
        ["La propriétaire", "Au troisième, sans ascenseur. Vous voulez le visiter samedi ?", "On the third floor, without a lift. Would you like to view it on Saturday?"]
      ],
      glossary: [["le T2 (le F2)", "a two-room flat (living room + bedroom)"], ["la superficie", "the floor area"], ["le montant du loyer", "the amount of the rent"], ["les charges", "service charges (water, heating, building)"]]
    },
    {
      id: "d3", n: 3, title: "Visiting a flatshare", titleFr: "La visite · Bienvenue dans notre coloc !",
      note: "Phil and Manu are looking for a third flatmate. They show Aya the flat. Listen to [[qui]], [[que]] and [[où]].",
      scene: "appartement", people: { "Phil": "m2", "Manu": "m3", "Aya": "f4" },
      lines: [
        ["Phil", "Entre ! Voilà l'appartement qui fait quatre-vingt-cinq mètres carrés. Ici, c'est le salon.", "Come in! Here's the flat, which is eighty-five square metres. This is the living room."],
        ["Aya", "Il est très clair ! Et confortable.", "It's very bright! And comfortable."],
        ["Manu", "C'est la pièce que nous préférons. C'est là qu'on regarde des films le soir.", "It's the room we like best. That's where we watch films in the evening."],
        ["Aya", "Et la chambre libre, c'est laquelle ?", "And the free bedroom, which is it?"],
        ["Phil", "C'est celle-ci, la chambre où dormait notre ancienne colocataire. Elle est meublée : un lit, un bureau et une étagère.", "It's this one, the room where our former flatmate slept. It's furnished: a bed, a desk and a shelf unit."],
        ["Aya", "Et le quartier, il est calme ?", "And the neighbourhood, is it quiet?"],
        ["Manu", "C'est un quartier qui est très sympa, avec beaucoup de bars… Donc c'est un peu bruyant, c'est le seul problème.", "It's a really nice area, with lots of bars… So it's a bit noisy, that's the only problem."],
        ["Phil", "Mais le loyer n'est pas cher : quatre cents euros par personne, charges comprises.", "But the rent isn't expensive: four hundred euros each, charges included."]
      ],
      glossary: [["qui + verbe", "which / who (subject)"], ["que + sujet + verbe", "which / that (object)"], ["où", "where (place)"], ["charges comprises", "charges included"]]
    },
    {
      id: "d4", n: 4, title: "Living in a bus", titleFr: "Un logement atypique · La vie dans un bus, c'est mieux !",
      note: "Nina and her husband live in a converted bus. She tells her friend Bruno. Listen to the comparisons, especially [[mieux]], [[meilleur]] and [[pire]].",
      scene: "campagne", people: { "Bruno": "m4", "Nina": "f3" },
      lines: [
        ["Bruno", "Alors, Nina, la vie dans un bus, c'est comment ?", "So, Nina, what's life in a bus like?"],
        ["Nina", "C'est génial ! On a autant de pièces que dans notre ancien appartement : une cuisine, une chambre, un salon et une salle d'eau.", "It's brilliant! We've got as many rooms as in our old flat: a kitchen, a bedroom, a living room and a shower room."],
        ["Bruno", "Mais c'est plus petit, non ?", "But it's smaller, isn't it?"],
        ["Nina", "Oui, la cuisine est moins grande qu'une cuisine classique, mais elle est aussi bien. Et on a décoré avec des tapis, des coussins et des rideaux.", "Yes, the kitchen is smaller than an ordinary kitchen, but it's just as good. And we decorated with rugs, cushions and curtains."],
        ["Bruno", "Et le désordre ?", "And the mess?"],
        ["Nina", "Ah ça, le désordre est pire dans un bus que dans un appartement ! Il faut tout ranger.", "Ah, the mess is worse in a bus than in a flat! You have to tidy everything away."],
        ["Bruno", "Tu ne regrettes pas la ville ?", "Don't you miss the city?"],
        ["Nina", "Pas du tout ! On sort plus qu'avant, on voyage, on a un meilleur cadre de vie. Pour nous, c'est mieux !", "Not at all! We go out more than before, we travel, we have a better quality of life. For us, it's better!"]
      ],
      glossary: [["autant de… que", "as many… as"], ["moins grand(e) que", "smaller than"], ["pire (que)", "worse (than)"], ["un meilleur cadre de vie", "a better living environment"]]
    },
    {
      id: "d5", n: 5, title: "Supportive neighbours", titleFr: "Dans l'escalier · Entre voisins",
      note: "Léonie has lost her cat; Khalid is giving away an armchair. Listen to disappointment ([[Zut !]], [[C'est dommage.]]), comfort ([[Ça va aller.]]) and conditions with [[si]].",
      scene: "rue", people: { "Léonie": "f8", "Khalid": "m1" },
      lines: [
        ["Léonie", "Khalid ! Tu n'as pas vu Minou ? Mon chat est parti hier soir…", "Khalid! Have you seen Minou? My cat left last night…"],
        ["Khalid", "Mince ! Non… Ne t'inquiète pas, il va revenir. Les chats reviennent toujours.", "Oh no! No… Don't worry, he'll come back. Cats always come back."],
        ["Léonie", "J'espère… Il ne sort jamais, il a peur de tout.", "I hope so… He never goes out, he's scared of everything."],
        ["Khalid", "Courage ! Si je vois un chat noir, je t'appelle tout de suite. Et si tu veux, on met une affiche dans le hall.", "Chin up! If I see a black cat, I'll call you straight away. And if you like, we'll put a poster up in the hall."],
        ["Léonie", "Merci, tu es adorable. Et toi, ça va ?", "Thanks, you're lovely. And you, how are you?"],
        ["Khalid", "Je déménage samedi ! Je donne un fauteuil gris. Ça t'intéresse ?", "I'm moving on Saturday! I'm giving away a grey armchair. Are you interested?"],
        ["Léonie", "Zut ! J'ai acheté deux fauteuils la semaine dernière… C'est dommage.", "Drat! I bought two armchairs last week… What a shame."],
        ["Khalid", "Ce n'est pas grave ! Si ta sœur en cherche un, dis-lui de passer ce week-end.", "No problem! If your sister's looking for one, tell her to come by this weekend."]
      ],
      glossary: [["Mince ! · Zut !", "Oh no! · Drat!"], ["C'est dommage.", "What a shame."], ["Ce n'est pas grave.", "It doesn't matter."], ["Si + présent, …", "If…, …"]]
    }
  ],

  vocab: [
    { t: "l'appartement", en: "the flat", pic: "🏢", cat: "Les types de logement", g: "m" },
    { t: "la maison", en: "the house", pic: "🏠", cat: "Les types de logement", g: "f" },
    { t: "le studio", en: "the studio flat", pic: "🛏️", cat: "Les types de logement", g: "m" },
    { t: "le T1 / T2, le F1 / F2", en: "one-room / two-room flat", pic: "🔢", cat: "Les types de logement", g: "m" },
    { t: "l'immeuble", en: "the apartment building", pic: "🏙️", cat: "Les types de logement", g: "m" },
    { t: "le foyer, la résidence (universitaire)", en: "the hostel, hall of residence", pic: "🏫", cat: "Les types de logement", g: "m" },
    { t: "le salon = le séjour", en: "the living room", pic: "🛋️", cat: "Les parties d'un logement", g: "m" },
    { t: "la salle à manger", en: "the dining room", pic: "🍽️", cat: "Les parties d'un logement", g: "f" },
    { t: "la cuisine (équipée, américaine)", en: "the (fitted, open-plan) kitchen", pic: "🍳", cat: "Les parties d'un logement", g: "f" },
    { t: "la chambre", en: "the bedroom", pic: "🛏️", cat: "Les parties d'un logement", g: "f" },
    { t: "la salle de bain = la salle d'eau", en: "the bathroom = shower room", pic: "🚿", cat: "Les parties d'un logement", g: "f" },
    { t: "le couloir", en: "the corridor", pic: "🚪", cat: "Les parties d'un logement", g: "m" },
    { t: "le bureau", en: "the study, office", pic: "🖥️", cat: "Les parties d'un logement", g: "m" },
    { t: "la buanderie", en: "the laundry room", pic: "🧺", cat: "Les parties d'un logement", g: "f" },
    { t: "le balcon", en: "the balcony", pic: "🌇", cat: "Les parties d'un logement", g: "m" },
    { t: "la véranda", en: "the conservatory", pic: "🪟", cat: "Les parties d'un logement", g: "f" },
    { t: "l'ascenseur", en: "the lift", pic: "🛗", cat: "L'immeuble ou la maison", g: "m" },
    { t: "l'étage", en: "the floor (storey)", pic: "🔼", cat: "L'immeuble ou la maison", g: "m" },
    { t: "le rez-de-chaussée", en: "the ground floor", pic: "🚪", cat: "L'immeuble ou la maison", g: "m" },
    { t: "la cave, le sous-sol", en: "the cellar, the basement", pic: "🍷", cat: "L'immeuble ou la maison", g: "f" },
    { t: "le grenier", en: "the attic", pic: "📦", cat: "L'immeuble ou la maison", g: "m" },
    { t: "le garage", en: "the garage", pic: "🚗", cat: "L'immeuble ou la maison", g: "m" },
    { t: "le local à vélos", en: "the bike store", pic: "🚲", cat: "L'immeuble ou la maison", g: "m" },
    { t: "ancien(ne) ≠ neuf, neuve", en: "old ≠ new", pic: "🏚️", cat: "L'annonce immobilière" },
    { t: "calme ≠ bruyant(e)", en: "quiet ≠ noisy", pic: "🔇", cat: "L'annonce immobilière" },
    { t: "clair(e) ≠ sombre", en: "bright ≠ dark", pic: "☀️", cat: "L'annonce immobilière" },
    { t: "meublé(e)", en: "furnished", pic: "🪑", cat: "L'annonce immobilière" },
    { t: "rénové(e)", en: "renovated", pic: "🧰", cat: "L'annonce immobilière" },
    { t: "équipé(e)", en: "equipped, fitted", pic: "🔌", cat: "L'annonce immobilière" },
    { t: "disponible", en: "available", pic: "✅", cat: "L'annonce immobilière" },
    { t: "la superficie, le mètre carré (m²)", en: "floor area, square metre", pic: "📐", cat: "L'annonce immobilière", g: "f" },
    { t: "le loyer", en: "the rent", pic: "💶", cat: "Les frais et les services", g: "m" },
    { t: "les charges", en: "service charges", pic: "🧾", cat: "Les frais et les services", g: "pl" },
    { t: "le chauffage", en: "heating", pic: "♨️", cat: "Les frais et les services", g: "m" },
    { t: "l'électricité, le gaz, l'eau", en: "electricity, gas, water", pic: "💡", cat: "Les frais et les services", g: "f" },
    { t: "l'assurance", en: "insurance", pic: "🛡️", cat: "Les frais et les services", g: "f" },
    { t: "l'abonnement à Internet", en: "the Internet subscription", pic: "🌐", cat: "Les frais et les services", g: "m" },
    { t: "le / la propriétaire", en: "the owner, landlord", pic: "🔑", cat: "Les habitants" },
    { t: "le / la locataire", en: "the tenant", pic: "🧳", cat: "Les habitants" },
    { t: "le / la colocataire", en: "the flatmate", pic: "🧑‍🤝‍🧑", cat: "Les habitants" },
    { t: "le canapé = le sofa = le divan", en: "the sofa", pic: "🛋️", cat: "Les meubles", g: "m", note: "sofa is the usual word in Québec" },
    { t: "le lit (une place, deux places)", en: "the (single, double) bed", pic: "🛏️", cat: "Les meubles", g: "m" },
    { t: "l'étagère", en: "the shelf unit", pic: "📚", cat: "Les meubles", g: "f" },
    { t: "le placard, les rangements", en: "the cupboard, storage", pic: "🗄️", cat: "Les meubles", g: "m" },
    { t: "la table basse, la table de chevet", en: "the coffee table, the bedside table", pic: "🟫", cat: "Les meubles", g: "f" },
    { t: "le tabouret", en: "the stool", pic: "🪑", cat: "Les meubles", g: "m" },
    { t: "le coussin, le rideau, le tapis", en: "cushion, curtain, rug", pic: "🪟", cat: "La décoration", g: "m" },
    { t: "le cadre (photo), l'horloge, la lampe", en: "photo frame, clock, lamp", pic: "🖼️", cat: "La décoration", g: "m" },
    { t: "le réfrigérateur = le frigo", en: "the fridge", pic: "🧊", cat: "L'équipement", g: "m" },
    { t: "le four", en: "the oven", pic: "🔥", cat: "L'équipement", g: "m" },
    { t: "le lave-linge = la machine à laver", en: "the washing machine", pic: "🫧", cat: "L'équipement", g: "m" },
    { t: "le lave-vaisselle", en: "the dishwasher", pic: "🍽️", cat: "L'équipement", g: "m" },
    { t: "l'évier, le lavabo", en: "the kitchen sink, the washbasin", pic: "🚰", cat: "L'équipement", g: "m" },
    { t: "la couette", en: "the duvet", pic: "🛌", cat: "L'équipement", g: "f" },
    { t: "animé(e) = vivant(e) ≠ tranquille", en: "lively ≠ quiet", pic: "🎉", cat: "Le quartier" },
    { t: "commerçant(e)", en: "with lots of shops", pic: "🛍️", cat: "Le quartier" },
    { t: "historique, populaire, chic", en: "historic, working-class, posh", pic: "🏛️", cat: "Le quartier" },
    { t: "les espaces verts", en: "green spaces", pic: "🌳", cat: "Le quartier", g: "pl" }
  ],

  grammar: [
    {
      id: "g-logement",
      title: "Describing and renting a home",
      body: [
        "Describing: [[La résidence est située dans un quartier calme.]] · [[C'est un appartement deux pièces rénové dans un bel immeuble ancien.]] · [[Le studio est au 4e étage sans ascenseur.]] · [[Cette maison neuve a un grand jardin.]]",
        "Renting: [[Je suis intéressé(e) par votre annonce.]] · [[Quelle est la superficie du logement ?]] · [[Quel est le montant du loyer ?]] · [[Ça inclut les charges ?]] A <b>T2 / F2</b> has two main rooms (living room + bedroom), not counting kitchen and bathroom."
      ],
      info: [
        { type: "floorplan", title: "🏠 The flatshare of Phil and Manu · 85 m², 3 chambres", plan: U03_COLOC,
          quiz: [
            { say: "C'est dans le salon, entre le canapé et la télé.", answer: "table", en: "In the living room, between the sofa and the TV." },
            { say: "C'est dans le salon, en face de la télé.", answer: "canape", en: "In the living room, opposite the TV." },
            { say: "C'est dans la cuisine, à gauche du four.", answer: "frigo", en: "In the kitchen, to the left of the oven." },
            { say: "C'est dans la salle de bain, à gauche de la douche.", answer: "lavelinge", en: "In the bathroom, to the left of the shower." },
            { say: "C'est dans la chambre 1, à droite du lit.", answer: "bureau1", en: "In bedroom 1, to the right of the bed." },
            { say: "C'est dans la chambre 2. On y met les livres.", answer: "etagere", en: "In bedroom 2. You put books on it." },
            { say: "C'est dans la chambre 3, à côté du lit. Il y a une lampe dessus.", answer: "chevet", en: "In bedroom 3, next to the bed. There's a lamp on it." }
          ] },
        { type: "card", style: "board", caption: "🏷️ Three ads · tap a line", title: "À LOUER", sub: "agence immobilière", rows: [
          ["Studio très clair · 33 m²", "4e étage sans ascenseur, cuisine américaine, salle d'eau · 580 € charges comprises", "Studio très clair de trente-trois mètres carrés, au quatrième étage sans ascenseur. Cinq cent quatre-vingts euros charges comprises."],
          ["T2 rénové · centre-ville", "bel immeuble ancien, séjour, chambre avec coin bureau, cuisine équipée, balcon, cave · 895 €/mois", "Magnifique T2 rénové dans un bel immeuble ancien, avec un balcon et une cave. Huit cent quatre-vingt-quinze euros par mois."],
          ["Coliving · près du port", "maison neuve, 18 chambres et 10 studios meublés, espaces communs, jardin · de 650 € à 1 090 €", "Coliving dans une maison neuve près du port : chambres et studios meublés, espaces communs et grand jardin."]
        ], foot: "charges comprises = cc" }
      ]
    },
    {
      id: "g-relatifs",
      title: "Relative pronouns: [[qui]], [[que]], [[où]]",
      body: [
        "Relative pronouns replace a noun and link two sentences, to avoid repeating it.",
        "[[qui]] = <b>subject</b>, followed by a verb: [[J'habite dans une maison qui est grande.]] · [[que]] (→ [[qu']] before a vowel) = <b>direct object</b>, followed by a subject + verb: [[Je vis dans une maison que j'aime beaucoup.]] · [[où]] = a <b>place</b> (and also a time): [[Je loue la maison où j'habite.]] · [[le jour où je suis arrivée]]"
      ],
      info: { type: "pattern", title: "🔗 One noun, three links", rows: [
        ["C'est un studio", "qui", { opts: ["est au 4e étage.", "coûte 580 €.", "a une cuisine américaine."] }],
        ["C'est un studio", "que", { opts: ["j'adore.", "mes parents ont acheté.", "je loue depuis un an."] }],
        ["C'est un studio", "où", { opts: ["je dors.", "il y a une seule pièce.", "on reçoit nos amis."] }]
      ], note: "Verb next → qui. Subject next → que. A place → où." },
      widget: {
        type: "sort", label: "qui, que or où?",
        cols: [{ k: "qui", label: "qui", color: "#2f9c8a" }, { k: "que", label: "que / qu'", color: "#9b4fb0" }, { k: "ou", label: "où", color: "#e0a526" }],
        items: [
          { t: "Je loue un studio … est dans une ferme.", k: "qui", say: "Je loue un studio qui est dans une ferme." }, { t: "Le salon est la pièce … je préfère.", k: "que", say: "Le salon est la pièce que je préfère." },
          { t: "Les résidences sont des lieux … on trouve beaucoup d'étudiants.", k: "ou", say: "Les résidences sont des lieux où on trouve beaucoup d'étudiants." }, { t: "Les colocataires sont des personnes … partagent un appartement.", k: "qui", say: "Les colocataires sont des personnes qui partagent un appartement." },
          { t: "Voici la chambre … je dors.", k: "ou", say: "Voici la chambre où je dors." }, { t: "Il vit dans un foyer … il aime beaucoup.", k: "que", say: "Il vit dans un foyer qu'il aime beaucoup." }
        ]
      }
    },
    {
      id: "g-comparaison",
      title: "Comparing: adjective, adverb, verb, noun",
      body: [
        "Adjective / adverb: [[plus / moins / aussi]] + adj. + [[que]]: [[La chambre de Tom est moins grande que la chambre d'Anna.]] · [[Nous habitons aussi loin que vous.]]",
        "Verb: verb + [[plus / moins / autant]] ([[que]]): [[Les jeunes déménagent plus que les personnes âgées.]] · Noun: [[plus de / moins de / autant de]] + noun ([[que]]): [[Il y a autant de chambres que dans notre maison.]]",
        "Irregular: [[bon]] → [[meilleur(e)]] (<s>plus bon</s>) · [[bien]] → [[mieux]] · [[mauvais]] → [[plus mauvais]] or [[pire]] · [[mal]] → [[plus mal]] or [[pire]]: [[On vit bien en ville, mais on vit mieux à la campagne.]]"
      ],
      info: [
        { type: "compare", title: "⚖️ Superiority · equality · inferiority", cols: [
          { head: "+ plus", en: "", color: "#2f9c8a", lines: [["plus grande que", "+ adjective"], ["Ils sortent plus.", "verb + plus"], ["plus de chambres que", "plus de + noun"]] },
          { head: "= aussi / autant", en: "", color: "#e0a526", lines: [["aussi grande que", "aussi + adjective"], ["Ils sortent autant.", "verb + autant"], ["autant de chambres que", "autant de + noun"]] },
          { head: "− moins", en: "", color: "#e0474f", lines: [["moins grande que", "+ adjective"], ["Ils sortent moins.", "verb + moins"], ["moins de chambres que", "moins de + noun"]] }
        ] },
        { type: "ladder", title: "🏅 bon, bien, mauvais, mal: the irregular ones", levels: [
          { name: "meilleur(e)", en: "bon → better (adjective)", color: "#2f9c8a", ex: ["Nous avons un meilleur cadre de vie."] },
          { name: "mieux", en: "bien → better (adverb)", color: "#3a6fd8", ex: ["Pour nous, la vie dans un bus, c'est mieux !"] },
          { name: "pire / plus mauvais(e)", en: "mauvais → worse", color: "#e86a2e", ex: ["Mon lave-vaisselle est pire que mon four."] },
          { name: "pire / plus mal", en: "mal → worse", color: "#e0474f", ex: ["Le désordre est pire dans un bus."] }
        ] }
      ],
      widget: {
        type: "combo", label: "Compare the bus and the old flat",
        rows: [{ k: "plus", label: "+" }, { k: "egal", label: "=" }, { k: "moins", label: "−" }],
        cols: [{ k: "grand", label: "📏 grand (adj.)" }, { k: "pieces", label: "🚪 des pièces (noun)" }, { k: "sortir", label: "🎉 sortir (verb)" }, { k: "bien", label: "👍 bien (adverb)" }],
        out: {
          "plus|grand": ["L'appartement est plus grand que le bus.", "The flat is bigger than the bus."], "egal|grand": ["Le bus est aussi grand que l'appartement.", "The bus is as big as the flat."], "moins|grand": ["Le bus est moins grand que l'appartement.", "The bus is smaller than the flat."],
          "plus|pieces": ["Le bus a plus de pièces que l'appartement.", "The bus has more rooms than the flat."], "egal|pieces": ["Le bus a autant de pièces que l'appartement.", "The bus has as many rooms as the flat.", "noun → autant de"], "moins|pieces": ["Le bus a moins de pièces que l'appartement.", "The bus has fewer rooms than the flat."],
          "plus|sortir": ["On sort plus qu'avant.", "We go out more than before."], "egal|sortir": ["On sort autant qu'avant.", "We go out as much as before.", "verb → autant"], "moins|sortir": ["On sort moins qu'avant.", "We go out less than before."],
          "plus|bien": ["On vit mieux dans le bus.", "We live better in the bus.", "plus bien → mieux"], "egal|bien": ["On vit aussi bien dans le bus.", "We live just as well in the bus."], "moins|bien": ["On vit moins bien dans le bus.", "We live less well in the bus."]
        }
      }
    },
    {
      id: "g-deception",
      title: "Disappointment and comfort",
      body: [
        "Disappointment: [[Zut !]] · [[Mince !]] · [[C'est dommage.]]",
        "Comforting, reassuring: [[C(e n)'est pas grave.]] · [[Ça va aller.]] · [[Courage !]] · [[(Ne) t'inquiète pas.]] / [[Ne vous inquiétez pas.]] · [[J'espère que tu vas le retrouver.]]"
      ],
      info: { type: "compare", title: "😞 → 🤗 What happened → what you say", cols: [
        { head: "Déception", en: "", color: "#e86a2e", lines: [["Zut ! J'ai raté la visite.", "Drat! I missed the viewing."], ["Mince ! L'appartement est déjà loué.", "Oh no! The flat's already let."], ["C'est dommage, j'ai déjà un fauteuil.", "What a shame, I already have an armchair."]] },
        { head: "Réconfort", en: "", color: "#2f9c8a", lines: [["Ce n'est pas grave.", "It doesn't matter."], ["Courage, tu vas trouver !", "Chin up, you'll find one!"], ["Ne t'inquiète pas, ça va aller.", "Don't worry, it'll be fine."]] }
      ] }
    },
    {
      id: "g-condition",
      title: "Conditions: [[si]] + present",
      body: [
        "[[si]] + present → present: [[Si je veux lire, je vais à la bibliothèque.]] · → futur proche: [[Si je vois un chat noir, je vais t'appeler.]] · → imperative: [[Si tu es malade, va à la pharmacie !]]",
        "The [[si]] clause can come second: [[Tu peux passer lundi si ça t'arrange.]] [[si]] → [[s']] before <b>il / ils</b> only: [[S'il pleut, on va au Centre de la BD.]]"
      ],
      widget: {
        type: "combo", label: "If…, then… · pick a condition and a result",
        rows: [{ k: "pres", label: "→ présent" }, { k: "fp", label: "→ futur proche" }, { k: "imp", label: "→ impératif" }],
        cols: [{ k: "bruit", label: "🔊 tes voisins sont bruyants" }, { k: "pb", label: "🆘 vous avez un problème" }, { k: "froid", label: "🥶 il fait froid" }],
        out: {
          "pres|bruit": ["Si tes voisins sont bruyants, tu peux leur parler.", "If your neighbours are noisy, you can talk to them."], "fp|bruit": ["Si tes voisins sont bruyants, tu vas mal dormir.", "If your neighbours are noisy, you'll sleep badly."], "imp|bruit": ["Si tes voisins sont bruyants, change d'appartement !", "If your neighbours are noisy, move flat!"],
          "pres|pb": ["Si vous avez un problème, vous pouvez m'appeler.", "If you have a problem, you can call me."], "fp|pb": ["Si vous avez un problème, je vais vous aider.", "If you have a problem, I'll help you."], "imp|pb": ["Si vous avez un problème, appelez-moi !", "If you have a problem, call me!"],
          "pres|froid": ["S'il fait froid, on met le chauffage.", "If it's cold, we put the heating on.", "si + il → s'il"], "fp|froid": ["S'il fait froid, on va rester au salon.", "If it's cold, we'll stay in the living room."], "imp|froid": ["S'il fait froid, prends la couette !", "If it's cold, take the duvet!"]
        }
      }
    }
  ],

  expressions: [
    { fn: "Pour décrire un logement", fnEn: "describing a home", icon: "🏠", items: [
      ["La résidence est située dans un quartier calme.", "The residence is in a quiet area.", "std", true],
      ["C'est un appartement deux pièces rénové.", "It's a renovated two-room flat.", "std"],
      ["Le studio est au 4e étage sans ascenseur.", "The studio is on the 4th floor, no lift.", "std", true],
      ["Cette maison neuve a un grand jardin.", "This new house has a big garden.", "std"]
    ] },
    { fn: "Pour louer un logement", fnEn: "renting", icon: "🔑", items: [
      ["Je suis intéressé(e) par votre annonce.", "I'm interested in your ad.", "poli", true],
      ["Quelle est la superficie du logement ?", "What's the floor area?", "poli", true],
      ["Quel est le montant du loyer ?", "How much is the rent?", "poli", true],
      ["Ça inclut les charges ?", "Does that include the charges?", "std"],
      ["Je peux le visiter quand ?", "When can I view it?", "std"]
    ] },
    { fn: "Pour exprimer sa déception", fnEn: "disappointment", icon: "😞", items: [
      ["Zut !", "Drat!", "fam", true],
      ["Mince !", "Oh no!", "fam"],
      ["C'est dommage.", "What a shame.", "std", true]
    ] },
    { fn: "Pour consoler, réconforter", fnEn: "comforting", icon: "🤗", items: [
      ["C(e n)'est pas grave.", "It doesn't matter.", "std", true],
      ["Ça va aller.", "It'll be OK.", "std", true],
      ["Courage !", "Chin up!", "std"],
      ["(Ne) t'inquiète pas.", "Don't worry.", "fam"]
    ] },
    { fn: "Pour choisir un logement ensemble (atelier)", fnEn: "choosing together", icon: "🤝", items: [
      ["Je préfère habiter en ville : c'est plus animé qu'à la campagne.", "I'd rather live in town: it's livelier.", "std"],
      ["Une maison, c'est mieux qu'un appartement parce que c'est plus grand.", "A house is better than a flat because it's bigger.", "std"],
      ["Si vous êtes d'accord, on peut prendre un logement meublé.", "If you agree, we can take a furnished place.", "std"],
      ["J'ai trouvé un appartement qui a trois chambres.", "I found a flat that has three bedrooms.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · calling about a flat", lanes: ["Le / la locataire", "La propriétaire"], av: ["m2", "f6"], steps: [
    { s: 0, fr: "Je suis intéressé par votre annonce. Il est toujours disponible ?", en: "I'm interested in your ad. Is it still available?" },
    { s: 1, fr: "Oui, c'est un T2 rénové dans un bel immeuble ancien.", en: "Yes, it's a renovated two-room flat in a lovely old building." },
    { s: 0, fr: "Quelle est la superficie ?", en: "What's the floor area?" },
    { s: 1, fr: "Quarante-cinq mètres carrés.", en: "Forty-five square metres." },
    { s: 0, fr: "Quel est le montant du loyer ? Ça inclut les charges ?", en: "How much is the rent? Does it include charges?" },
    { s: 1, fr: "895 euros, avec l'eau et le chauffage. Vous voulez le visiter ?", en: "€895, with water and heating. Would you like to view it?" }
  ] },

  sounds: {
    intro: "Phonie-graphie: three glides. [j] (lips stretched as for [i]): [[loyer]] · [ɥ] (lips rounded as for [y]): [[gratuit]] · [w] (lips rounded as for [u]): [[toit]].",
    letters: [
      { l: "i + voyelle · y · ill", name: "[j] · loyer", tip: "Lips stretched, as for [i]: [[la fille]], [[il y a]], [[la colocation]], [[le loyer]].", ex: ["le loyer", "la fille", "il y a", "la colocation"] },
      { l: "u + i", name: "[ɥ] · gratuit", tip: "Lips rounded as for [y] (tu), then glide to [i]: [[huit]], [[la cuisine]], [[le bruit]].", ex: ["gratuit", "huit", "la cuisine", "le bruit"] },
      { l: "oi · oin · ou + voyelle", name: "[w] · toit", tip: "Lips rounded as for [u] (tout): [[trois]], [[moins]], [[louer]], [[oui]].", ex: ["le toit", "trois", "moins", "louer"] }
    ],
    pairs: [
      { a: ["Louis", "Louis"], b: ["lui", "him"], note: "[w] / [ɥ]" },
      { a: ["mouette", "seagull"], b: ["muette", "silent (f.)"], note: "[w] / [ɥ]" },
      { a: ["un studio qui…", "a studio that… (subject)"], b: ["un studio que…", "a studio that… (object)"], note: "qui / que" },
      { a: ["meilleur", "better (adj.)"], b: ["mieux", "better (adv.)"], note: "bon / bien" },
      { a: ["plus de chambres", "more bedrooms"], b: ["autant de chambres", "as many bedrooms"], note: "+ / =" },
      { a: ["Zut !", "Drat!"], b: ["Courage !", "Chin up!"], note: "déception / réconfort" }
    ]
  },
  classify: {
    label: "🔊 [j], [ɥ] ou [w] ?", q: "Listen: which glide do you hear?",
    options: ["[j] loyer", "[ɥ] gratuit", "[w] toit"],
    items: [
      { say: "la fille", a: 0 }, { say: "la cuisine", a: 1 }, { say: "trois", a: 2 }, { say: "la colocation", a: 0 },
      { say: "le bruit", a: 1 }, { say: "louer", a: 2 }, { say: "huit", a: 1 }, { say: "moins", a: 2 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Dans un foyer de jeunes travailleurs, on trouve des stagiaires et des étudiants étrangers.", ok: true },
    { type: "mcq", tag: "Dialogue 1", q: "Avec la cohabitation intergénérationnelle, on habite…", options: ["chez une personne âgée", "dans une ferme", "seul dans un studio"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "Le loyer du T2 est de…", options: ["895 €", "580 €", "400 €"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "L'électricité est incluse dans les charges.", ok: false, explain: "Water and heating, yes; electricity, no." },
    { type: "tf", tag: "Dialogue 3", s: "Le quartier de la colocation est très calme.", ok: false, explain: "It's a bit noisy, with lots of bars." },
    { type: "mcq", tag: "Dialogue 4", q: "D'après Nina, le désordre est…", options: ["pire dans un bus", "meilleur dans un bus", "pareil"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Léonie veut le fauteuil de Khalid.", ok: false, explain: "She already bought two armchairs." },
    { type: "fill", tag: "Relatifs", sentence: "Regarde cette annonce ___ je viens de lire !", options: ["que", "qui", "où"], answer: 0 },
    { type: "fill", tag: "Relatifs", sentence: "C'est la chambre ___ coûte 650 euros ?", options: ["qui", "que", "où"], answer: 0 },
    { type: "fill", tag: "Relatifs", sentence: "Il y a un garage ___ vous pouvez garer votre voiture.", options: ["où", "que", "qui"], answer: 0 },
    { type: "fill", tag: "Relatifs", sentence: "Mon frère vit dans l'appartement ___ j'habitais avant.", options: ["où", "qui", "que"], answer: 0 },
    { type: "type", tag: "Relatifs", q: "Join with qui: « Nous louons un appartement. Cet appartement n'est pas cher. »", answers: ["Nous louons un appartement qui n'est pas cher.", "Nous louons un appartement qui n'est pas cher"] },
    { type: "type", tag: "Relatifs", q: "Join with que: « Mon propriétaire est sympathique. J'aime beaucoup mon propriétaire. »", answers: ["Mon propriétaire, que j'aime beaucoup, est sympathique.", "Mon propriétaire est un homme sympathique que j'aime beaucoup.", "Mon propriétaire est sympathique, je l'aime beaucoup."] },
    { type: "fill", tag: "Comparaison", sentence: "Je cherche un ___ logement.", options: ["meilleur", "meilleure", "mieux"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "Allons au salon, il y a ___ fauteuils pour s'asseoir.", options: ["plus de", "plus", "plus des"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "La salle de bain est ___ grande que la cuisine.", options: ["aussi", "autant", "autant de"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "J'aime ___ mon salon que ma chambre.", options: ["autant", "aussi", "autant de"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "On aime ___ vivre ici.", options: ["mieux", "meilleur", "plus bien"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "Les services sont ___ dans ce coliving.", options: ["meilleurs", "meilleur", "mieux"], answer: 0 },
    { type: "fill", tag: "Condition", sentence: "Si tu ___ disponible, tu peux passer ce soir.", options: ["es", "seras", "étais"], answer: 0 },
    { type: "fill", tag: "Condition", sentence: "___ il fait froid, on met le chauffage.", options: ["S'", "Si", "Se"], answer: 0 },
    { type: "fill", tag: "Condition", sentence: "Si tu es malade, ___ à la pharmacie !", options: ["va", "vas", "aller"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Zut ! L'appartement est déjà loué…", options: ["Ce n'est pas grave, tu vas trouver !", "C'est dommage, je suis intéressé.", "Quel est le montant du loyer ?"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Le loyer est de 600 euros par mois.", options: ["Ça inclut les charges ?", "C'est un studio qui est grand.", "Courage !"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Je donne un fauteuil. Ça t'intéresse ?", options: ["C'est dommage, j'en ai déjà acheté un.", "Je suis au 3e étage.", "Ça va aller."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "On fait la lessive dans…", options: ["la buanderie", "la véranda", "le grenier"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "La personne qui loue un logement à quelqu'un, c'est…", options: ["le propriétaire", "le locataire", "le colocataire"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Le contraire de « bruyant » :", options: ["calme", "clair", "sombre"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["le four", "le lave-vaisselle", "le frigo", "le tabouret"], answer: 3, explain: "le tabouret is furniture; the others are appliances." },
    { type: "order", tag: "Construisez", en: "I'm interested in your ad.", words: ["Je", "suis", "intéressé", "par", "votre", "annonce."] },
    { type: "listen", tag: "Écoute", q: "What does the speaker want?", say: "Bonjour, je cherche un studio meublé près de l'université, pas trop cher.", options: ["a furnished studio near the university", "a house with a garden", "a flatshare in the centre"], answer: 0 }
  ],

  roleplays: [
    { title: "📞 Une annonce intéressante", brief: "You call about a studio to rent. Ask about the size, rent, charges, floor and a viewing.", memo: ["Je suis intéressé(e)…", "Quelle est la superficie… ?", "Quel est le montant… ?", "Ça inclut… ?"], partner: "f6", you: "m2",
      turns: [
        { them: "Allô, oui ?", themEn: "Hello?", hint: "Say you're interested in her ad for the studio.", you: "Bonjour, madame. Je suis intéressé par votre annonce pour le studio.", youEn: "Hello. I'm interested in your ad for the studio." },
        { them: "Oui, il est toujours disponible.", themEn: "Yes, it's still available.", hint: "Ask the floor area.", you: "Quelle est la superficie du studio ?", youEn: "What's the floor area of the studio?" },
        { them: "Trente-trois mètres carrés.", themEn: "Thirty-three square metres.", hint: "Ask the rent and if it includes charges.", you: "Quel est le montant du loyer ? Ça inclut les charges ?", youEn: "How much is the rent? Does it include charges?" },
        { them: "580 euros, charges comprises.", themEn: "€580, charges included.", hint: "Ask if you can view it on Saturday.", you: "Parfait. Je peux le visiter samedi ?", youEn: "Perfect. Can I view it on Saturday?" }
      ] },
    { title: "🏙️ La ville ou la campagne ?", brief: "You want to live in the country; your friend prefers town. Defend your choice with comparisons.", memo: ["plus / moins / aussi… que", "plus de / moins de… que", "mieux, meilleur, pire"], partner: "f3", you: "m4",
      turns: [
        { them: "En ville, il y a plus de choses à faire !", themEn: "In town there's more to do!", hint: "The country is calmer than the town.", you: "Oui, mais la campagne est plus calme que la ville.", youEn: "Yes, but the country is calmer than the town." },
        { them: "Mais les loyers ?", themEn: "But the rents?", hint: "Houses are cheaper and bigger.", you: "Les maisons sont moins chères et plus grandes !", youEn: "Houses are cheaper and bigger!" },
        { them: "Tu vas t'ennuyer !", themEn: "You'll be bored!", hint: "You'll have a better quality of life; it's better for you.", you: "Non, je vais avoir un meilleur cadre de vie. Pour moi, c'est mieux !", youEn: "No, I'll have a better quality of life. For me, it's better!" }
      ] },
    { title: "🐈 Un voisin inquiet", brief: "Your neighbour has a problem. Express disappointment for them, comfort them and offer help with si.", memo: ["Mince !", "Ne t'inquiète pas.", "Si tu veux, …", "Courage !"], partner: "f8", you: "m1",
      turns: [
        { them: "J'ai perdu mes clés… Je ne peux pas rentrer chez moi !", themEn: "I've lost my keys… I can't get home!", hint: "React, then reassure her.", you: "Mince ! Ne t'inquiète pas, ça va aller.", youEn: "Oh no! Don't worry, it'll be OK." },
        { them: "Le propriétaire ne répond pas…", themEn: "The landlord isn't answering…", hint: "If she wants, she can wait at your place.", you: "Si tu veux, tu peux attendre chez moi.", youEn: "If you like, you can wait at my place." },
        { them: "Merci, tu es adorable !", themEn: "Thanks, you're lovely!", hint: "Say it's nothing; offer a coffee.", you: "Ce n'est rien ! Tu veux un café ?", youEn: "It's nothing! Would you like a coffee?" }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Organiser une colocation", intro: "In your group, set up a flatshare: agree on criteria, research homes, pool your findings and choose the best one.",
      steps: [["Préparation", ["Before looking, agree on the criteria: where? flat or house? how many bedrooms? furnished or not? extra spaces (garden, balcony, garage, bike store)?", "Each person researches online and chooses their favourite home for these criteria."]], ["Réalisation", ["Pool your research: each person presents their home with its pros and cons, using comparisons.", "Choose the best one together. Suggest shared activities (meals, film nights…).", "Make a poster: photos, a description and how the flatshare will be organised."]], ["Présentation", ["Present your flatshare project to the class and listen to the others."]]],
      phrases: ["Je préfère habiter en ville : c'est plus animé.", "Une maison, c'est mieux qu'un appartement parce que…", "Si vous êtes d'accord, on peut…", "J'ai trouvé un appartement qui a…", "Il est à 15 minutes à pied d'ici."],
      model: { type: "card", style: "board", caption: "🏠 Example poster · tap a line", title: "NOTRE COLOC'", sub: "4 colocataires · centre-ville", rows: [["Le logement", "appartement ancien, 4 chambres, grand salon, balcon", "C'est un appartement ancien qui a quatre chambres, un grand salon et un balcon."], ["Où ?", "dans une rue calme, à 15 minutes à pied de l'école", "Il est dans une rue calme, à quinze minutes à pied de l'école."], ["Le loyer", "1 600 € par mois, soit 400 € chacun, charges comprises", "Le loyer est de quatre cents euros par personne, charges comprises."], ["Organisation", "ménage le samedi, dîner ensemble le mercredi, soirée film le vendredi", "On fait le ménage le samedi et on dîne ensemble le mercredi."]], foot: "Bienvenue chez nous !" } }
  ],
  delf: {
    skill: "Compréhension de l'oral", title: "DELF A2 listening training: exercises 3 and 4",
    about: "Training for the second half of the listening paper. <b>Exercise 3</b>: a recorded message (personal or professional): identify the key information. <b>Exercise 4</b>: 4 short informal dialogues: identify the communication situation (ask for information, invite someone, introduce someone, offer help, tell a memory, apologise…). Careful: there are more situations than dialogues. You hear each document twice.",
    tips: ["Before listening, read the answer options: they tell you what to listen for.", "In a message, note who calls, what they want, when, and what you must do.", "For exercise 4, focus on the function, not every word: [[Je peux t'aider ?]] = offering help; [[Excuse-moi, je suis en retard]] = apologising."],
    items: [
      { type: "listen", q: "Exercise 3 · What does Manon want?", say: "Bonjour, c'est Manon Ladier. J'ai vu votre annonce pour l'appartement à louer rue Victor-Hugo. Je voudrais savoir quelle est la superficie. Je préfère visiter en fin d'après-midi. Rappelez-moi au zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", options: ["to rent a flat", "to buy a flat", "to rent a house"], answer: 0 },
      { type: "listen", q: "Exercise 3 · Her first question is about…", say: "Bonjour, c'est Manon Ladier. J'ai vu votre annonce pour l'appartement à louer rue Victor-Hugo. Je voudrais savoir quelle est la superficie. Je préfère visiter en fin d'après-midi. Rappelez-moi au zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", options: ["the floor area", "the price", "the floor"], answer: 0 },
      { type: "listen", q: "Exercise 3 · What must you do?", say: "Bonjour, c'est Manon Ladier. J'ai vu votre annonce pour l'appartement à louer rue Victor-Hugo. Je voudrais savoir quelle est la superficie. Je préfère visiter en fin d'après-midi. Rappelez-moi au zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", options: ["call her back", "wait for her call", "send her a message"], answer: 0 },
      { type: "listen", q: "Exercise 4 · Which situation?", say: "Tu as l'air fatigué avec tous ces cartons. Je peux t'aider à monter ?", options: ["offering help", "apologising", "inviting someone to dinner"], answer: 0 },
      { type: "listen", q: "Exercise 4 · Which situation?", say: "Ça te dit de venir dîner à la maison samedi soir ? On fête notre nouvel appartement !", options: ["inviting someone to dinner", "asking for information", "telling a memory"], answer: 0 },
      { type: "listen", q: "Exercise 4 · Which situation?", say: "Je te présente Aya, notre nouvelle colocataire. Elle vient du Maroc.", options: ["introducing someone", "offering help", "apologising"], answer: 0 }
    ]
  },
  detente: {
    title: "Devinettes du logement",
    intro: "Guess the word from the riddle (built with qui, que, où).",
    items: [
      { type: "mcq", q: "C'est un appartement qui est petit, où il y a seulement une pièce.", options: ["un studio", "un T3", "une maison"], answer: 0 },
      { type: "mcq", q: "C'est la pièce où on dort.", options: ["la chambre", "la cuisine", "la buanderie"], answer: 0 },
      { type: "mcq", q: "C'est une personne qui partage un appartement avec d'autres.", options: ["un(e) colocataire", "un(e) propriétaire", "un(e) voisin(e)"], answer: 0 },
      { type: "mcq", q: "C'est la somme qu'on paie chaque mois pour un logement.", options: ["le loyer", "le chauffage", "la superficie"], answer: 0 },
      { type: "mcq", q: "C'est une machine qu'on utilise pour laver les vêtements.", options: ["le lave-linge", "le lave-vaisselle", "le four"], answer: 0 },
      { type: "mcq", q: "C'est la partie de la maison où on garde des vieilles choses, sous le toit.", options: ["le grenier", "la cave", "le couloir"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🎓 Where French students live (figures quoted by the book; sources: letudiant.fr, senat.fr)", unit: " %", items: [
      { fr: "chez leurs parents", en: "with their parents", v: 33, pic: "👨‍👩‍👧" },
      { fr: "en location (seuls ou en couple)", en: "renting (alone or as a couple)", v: 33, pic: "🔑" },
      { fr: "en résidence universitaire", en: "in a hall of residence", v: 12, pic: "🏫" }
    ] }
  ],
  culture: [
    { icon: "🏛️", kind: "Francophonie", t: "L'Art nouveau à Bruxelles", d: "Art nouveau, inspired by nature (curves, flowers, light), flourished at the end of the 19th and start of the 20th century. In Brussels, architect <b>Victor Horta</b> built the <b>Hôtel Tassel</b>, considered the founding work of the style; the <b>Hôtel Solvay</b> (open to visitors since 2021); his own house and studio, now the <b>Musée Horta</b>; and the department store that became the <b>Centre belge de la bande dessinée</b>." },
    { icon: "🏘️", kind: "Au fait !", t: "Le coliving", d: "Shared housing with private rooms, common spaces and services included (Internet, cleaning, parking…). Popular with young workers in big cities." },
    { icon: "🚲", kind: "Au fait !", t: "La ville du quart d'heure", d: "The Franco-Colombian urban planner <b>Carlos Moreno</b> imagined the “15-minute city”: everything you need (work, shops, school, health, leisure) is 15 minutes away on foot or 5 minutes by bike, without a car." },
    { icon: "🤝", kind: "Civilisation", t: "Voisins solidaires", d: "In many buildings, neighbours help each other: shopping for an elderly neighbour, homework help, a shared vegetable garden, a bike store run by a volunteer. Neighbour groups on apps and noticeboards make it easier." },
    { icon: "🛋️", kind: "Langue", t: "Canapé, divan ou sofa ?", d: "In Québec people mostly say <b>sofa</b>; in French-speaking Europe <b>canapé</b> and <b>divan</b> are more common." },
    { icon: "📏", kind: "Langue", t: "T2, F2, m²…", d: "French property ads count the main rooms: a <b>T1 / F1</b> has one room (plus kitchen and bathroom), a <b>T2</b> two, etc. <b>cc</b> = charges comprises; <b>m²</b> = mètres carrés." }
  ],
  tips: [
    { icon: "🔗", t: "qui or que? Look right!", d: "A verb right after → qui. A subject (je, il, mes parents…) → que." },
    { icon: "🏅", t: "Never “plus bon” or “plus bien”", d: "[[meilleur]] (adjective) and [[mieux]] (adverb)." },
    { icon: "🧮", t: "Nouns need de", d: "[[plus de / moins de / autant de chambres]]. Adjectives don't: [[aussi grand]]." }
  ],
  mistakes: [
    ["la maison qui j'aime", "la maison que j'aime", "que + subject"],
    ["l'appartement que est grand", "l'appartement qui est grand", "qui + verb"],
    ["la ville que j'habite", "la ville où j'habite", "a place → où"],
    ["un plus bon logement", "un meilleur logement", "bon → meilleur"],
    ["On vit plus bien ici.", "On vit mieux ici.", "bien → mieux"],
    ["Il y a autant chambres que…", "Il y a autant de chambres que…", "noun → autant de"],
    ["Elle est autant grande que moi.", "Elle est aussi grande que moi.", "adjective → aussi"],
    ["Si il pleut…", "S'il pleut…", "si + il → s'il"]
  ]
});
