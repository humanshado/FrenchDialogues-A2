// Unité 10 · Envies d'ailleurs ? (Édito A2, 2e édition, book pp. 139–152)
// Situations: s'informer dans une agence de voyages · organiser un circuit · raconter un road-trip · visiter en bus amphibie · un compagnon de voyage agaçant · voyager autrement
// Grammar: passé composé et imparfait dans le récit · l'accord du participe passé · les pronoms démonstratifs
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u10", rubrique: 5, num: 10,
  title: "Itching to travel?",
  titleFr: "Envies d'ailleurs ?",
  pages: "Book pp. 139–152",
  opener: { fr: "Nous roulions tranquillement quand, soudain, un orage a éclaté !", en: "We were driving along quietly when suddenly a storm broke!" },
  hero: { scene: "plage", people: { "Maya": "f3", "Hugo": "m4" } },
  situations: [
    ["📞", "À l'agence de voyages", "information: [[Je voudrais avoir des renseignements sur un circuit.]]"],
    ["🗺️", "Organiser un circuit", "structure: [[D'abord… Ensuite… Enfin…]]"],
    ["🚐", "Raconter un voyage", "a story: [[Il faisait beau quand, tout à coup, le van est tombé en panne.]]"],
    ["🚌", "Une visite insolite", "reviews: [[C'était à couper le souffle !]] · [[Je suis déçu(e).]]"],
    ["😤", "Un compagnon agaçant", "irritation: [[Ça m'énerve !]] · calming down: [[Du calme !]]"]
  ],
  goals: [
    "Ask for information about a trip: [[Je voudrais avoir des renseignements…]], [[Les vols sont inclus ?]], [[Quelle est la meilleure période ?]]",
    "Organise a text or a circuit: [[D'abord, ensuite, puis, après, enfin]]",
    "Tell a travel story with the passé composé (events) and the imparfait (setting): [[soudain]], [[tout à coup]], [[quand]]",
    "Give a positive or negative opinion about a visit: [[C'était magique !]] · [[Quelle déception !]]",
    "Express irritation and calm someone down: [[Ça m'énerve !]], [[J'en ai marre !]] · [[Du calme !]], [[Ce n'est pas grave.]]",
    "Agree the past participle (être, and avoir with a COD before) and use [[celui, celle, ceux, celles]]"
  ],
  glance: [
    ["🗣️", "Communication", "asking for information · organising · telling a story · reviewing a visit · irritation"],
    ["🧩", "Grammaire", "passé composé or imparfait · past participle agreement · demonstrative pronouns"],
    ["🗂️", "Vocabulaire", "accommodation · stays · the plane · services · tourism · sites · kinds of tourism"],
    ["🔊", "Phonie-graphie", "[ə] (le), [e] (les) and [ɛ] (lait)"],
    ["⭐", "The phrase to learn first", "[[Je voudrais avoir des renseignements, s'il vous plaît.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "A tailor-made trip", titleFr: "Au téléphone · L'agence de voyages",
      note: "Maya phones a travel agency about a tailor-made circuit in Guadeloupe. Listen to how she asks for information, and to the service vocabulary.",
      scene: "bureau", staff: "L'agent", phone: ["Maya", "L'agent"], people: { "L'agent": "m7", "Maya": "f3" },
      lines: [
        ["L'agent", "Agence Horizons, bonjour !", "Horizons agency, hello!"],
        ["Maya", "Bonjour, monsieur. Je voudrais avoir des renseignements sur un circuit sur mesure en Guadeloupe.", "Hello, sir. I'd like some information about a tailor-made circuit in Guadeloupe."],
        ["L'agent", "Bien sûr. Vous partiriez combien de temps ?", "Of course. How long would you go for?"],
        ["Maya", "Dix jours, avec mon compagnon. Est-ce que les vols sont inclus ?", "Ten days, with my partner. Are the flights included?"],
        ["L'agent", "Oui, le vol aller-retour et la location de voiture. Pour l'hébergement, on propose des gîtes ou un hôtel en demi-pension.", "Yes, the return flight and the car hire. For accommodation, we offer gîtes or a hotel on half board."],
        ["Maya", "Le petit-déjeuner est compris dans les gîtes ?", "Is breakfast included in the gîtes?"],
        ["L'agent", "Oui. Et les excursions sont en option : la plongée, la randonnée au volcan…", "Yes. And excursions are optional: diving, the volcano hike…"],
        ["Maya", "Quelle est la meilleure période pour partir ?", "What's the best time to go?"],
        ["L'agent", "Entre décembre et avril, c'est la saison sèche. Je vous envoie un programme par mail ?", "Between December and April, it's the dry season. Shall I send you a programme by email?"]
      ],
      glossary: [["Je voudrais avoir des renseignements", "I'd like some information"], ["inclus(e), compris(e)", "included"], ["la demi-pension", "half board"], ["en option", "optional, extra"]]
    },
    {
      id: "d2", n: 2, title: "Planning the circuit", titleFr: "À la maison · D'abord, ensuite, enfin",
      note: "Maya and Hugo read the agency's programme and organise their days. Listen to the words that structure the circuit.",
      scene: "maison", people: { "Maya": "f3", "Hugo": "m4" },
      lines: [
        ["Hugo", "Alors, qu'est-ce qu'ils proposent ?", "So, what do they suggest?"],
        ["Maya", "D'abord, deux jours à Pointe-à-Pitre pour visiter le marché et le musée.", "First, two days in Pointe-à-Pitre to visit the market and the museum."],
        ["Hugo", "Et ensuite ?", "And then?"],
        ["Maya", "Ensuite, on part en Basse-Terre : la randonnée au volcan de la Soufrière et les cascades.", "Then we go to Basse-Terre: the hike up the Soufrière volcano and the waterfalls."],
        ["Hugo", "Super ! Puis on pourrait faire de la plongée ?", "Great! Then we could go diving?"],
        ["Maya", "Oui, après les cascades, deux jours au bord de la mer. Enfin, on termine par une île plus calme.", "Yes, after the waterfalls, two days by the sea. Finally, we finish with a quieter island."],
        ["Hugo", "Tu sais pourquoi on dit que la Guadeloupe ressemble à un papillon ?", "Do you know why they say Guadeloupe looks like a butterfly?"],
        ["Maya", "Oui, à cause de sa forme : deux îles, comme deux ailes !", "Yes, because of its shape: two islands, like two wings!"]
      ],
      glossary: [["d'abord, ensuite, puis, après, enfin", "first, then, next, after, finally"], ["la cascade", "the waterfall"], ["le volcan", "the volcano"], ["au bord de la mer", "by the sea"]]
    },
    {
      id: "d3", n: 3, title: "A van road trip", titleFr: "Au café · Notre road-trip en van",
      note: "Hugo tells a friend about a road trip. Listen for the imparfait (the setting) and the passé composé (what happened).",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Hugo": "m4", "Sacha": "m2" },
      lines: [
        ["Sacha", "Alors, ce road-trip en Bretagne, c'était comment ?", "So, that road trip in Brittany, what was it like?"],
        ["Hugo", "Génial ! Le premier jour, il faisait beau, on roulait au bord de la mer…", "Brilliant! On the first day the weather was nice, we were driving along the coast…"],
        ["Sacha", "Et vous dormiez où ?", "And where did you sleep?"],
        ["Hugo", "Dans le van, sur des parkings près des plages. Mais le troisième jour, soudain, le van est tombé en panne !", "In the van, in car parks near the beaches. But on the third day, suddenly, the van broke down!"],
        ["Sacha", "Oh non ! Qu'est-ce que vous avez fait ?", "Oh no! What did you do?"],
        ["Hugo", "On était perdus au milieu de la campagne. Tout à coup, un agriculteur est arrivé avec son tracteur et il nous a aidés.", "We were lost in the middle of the countryside. All of a sudden, a farmer arrived with his tractor and helped us."],
        ["Sacha", "Quelle chance !", "What luck!"],
        ["Hugo", "Et il nous a invités à dîner ! C'est le meilleur souvenir du voyage.", "And he invited us to dinner! It's the best memory of the trip."]
      ],
      glossary: [["imparfait = le décor", "imperfect = the setting"], ["passé composé = l'événement", "perfect = the event"], ["soudain, tout à coup", "suddenly"], ["tomber en panne", "to break down"]]
    },
    {
      id: "d4", n: 4, title: "An amphibious bus", titleFr: "Au retour d'une visite · Le bus amphibie",
      note: "Two tourists have just visited a city by amphibious bus, on the road and then on the river. They don't agree! Listen to the positive and negative opinions.",
      scene: "ville", people: { "Lucie": "f1", "Marc": "m1" },
      lines: [
        ["Lucie", "Alors, qu'est-ce que tu as pensé de la visite ?", "So, what did you think of the tour?"],
        ["Marc", "J'ai adoré ! Quand le bus est entré dans l'eau, c'était magique.", "I loved it! When the bus went into the water, it was magical."],
        ["Lucie", "Moi, je suis déçue. La guide parlait trop vite et on ne voyait rien par les fenêtres.", "Me, I'm disappointed. The guide spoke too fast and we couldn't see anything through the windows."],
        ["Marc", "Tu exagères ! La vue sur le pont et les vieilles maisons était superbe.", "You're exaggerating! The view of the bridge and the old houses was superb."],
        ["Lucie", "C'est vrai, le pont, c'était à couper le souffle. Mais la visite était trop courte pour le prix.", "True, the bridge was breathtaking. But the tour was too short for the price."],
        ["Marc", "Les photos que j'ai prises sont très belles. Regarde celle-ci !", "The photos I took are really nice. Look at this one!"],
        ["Lucie", "Oh, elle est réussie ! Bon, je recommande… mais seulement avec une autre guide !", "Oh, that's a good one! OK, I recommend it… but only with a different guide!"]
      ],
      glossary: [["C'était magique / à couper le souffle", "It was magical / breathtaking"], ["Je suis déçu(e).", "I'm disappointed."], ["les photos que j'ai prises", "the photos I took (agreement!)"], ["celle-ci", "this one (feminine)"]]
    },
    {
      id: "d5", n: 5, title: "An irritating travel companion", titleFr: "À l'aéroport · Ça m'énerve !",
      note: "Maya and Hugo are waiting at the airport. Hugo is stressed and checks his app all the time. Listen to how Maya expresses irritation and how Hugo calms down.",
      scene: "aeroport", people: { "Hugo": "m4", "Maya": "f3" },
      lines: [
        ["Hugo", "L'application dit que le vol a vingt minutes de retard ! Et la porte d'embarquement a changé !", "The app says the flight is twenty minutes late! And the boarding gate has changed!"],
        ["Maya", "Du calme ! Ce n'est pas grave, on a le temps.", "Calm down! It's not serious, we have time."],
        ["Hugo", "Et si on rate la correspondance ? Et ma valise ? Elle est où, celle-ci ?", "And what if we miss the connection? And my suitcase? Where is it, that one?"],
        ["Maya", "Arrête de regarder ton téléphone toutes les deux minutes, ça m'énerve !", "Stop looking at your phone every two minutes, it's getting on my nerves!"],
        ["Hugo", "Excuse-moi… Je suis toujours stressé quand je prends l'avion.", "Sorry… I'm always stressed when I fly."],
        ["Maya", "Je sais. Respire ! On a fait l'enregistrement, nos bagages sont en soute. Tout va bien.", "I know. Breathe! We've checked in, our bags are in the hold. Everything's fine."],
        ["Hugo", "Tu as raison. Bon, je range mon portable. On va prendre un café ?", "You're right. OK, I'm putting my phone away. Shall we get a coffee?"],
        ["Maya", "Ah, enfin une bonne idée !", "Ah, at last a good idea!"]
      ],
      glossary: [["Ça m'énerve ! J'en ai marre !", "It's annoying me! I'm fed up!"], ["Du calme ! Ce n'est pas grave.", "Calm down! It's not serious."], ["la porte d'embarquement, la correspondance", "the boarding gate, the connection"], ["l'enregistrement, en soute", "check-in, in the hold"]]
    },
    {
      id: "d6", n: 6, title: "Travelling differently", titleFr: "À la radio · Voyager autrement",
      note: "A radio presenter interviews Inès, who travels slowly and alone. Listen to the vocabulary of kinds of tourism and to demonstrative pronouns.",
      scene: "bureau", staff: "L'animateur", people: { "L'animateur": "m6", "Inès": "f2" },
      lines: [
        ["L'animateur", "Inès, vous voyagez seule et lentement. Pourquoi ?", "Inès, you travel alone and slowly. Why?"],
        ["Inès", "Parce que j'aime prendre mon temps ! Je préfère le train à l'avion et la marche au bus.", "Because I like to take my time! I prefer the train to the plane, and walking to the bus."],
        ["L'animateur", "C'est ce qu'on appelle le tourisme lent ?", "Is that what's called slow tourism?"],
        ["Inès", "Exactement. On visite moins de lieux, mais on rencontre les habitants. Je dors souvent chez l'habitant ou dans des gîtes.", "Exactly. You visit fewer places, but you meet the locals. I often stay with local people or in gîtes."],
        ["L'animateur", "Et quel voyage vous a le plus marquée ?", "And which trip made the biggest impression on you?"],
        ["Inès", "Celui que j'ai fait au Québec à vélo. Les paysages étaient incroyables : les lacs, les forêts…", "The one I did in Quebec by bike. The landscapes were incredible: the lakes, the forests…"],
        ["L'animateur", "Vous n'avez jamais peur, seule ?", "Are you never afraid, alone?"],
        ["Inès", "Non, et puis on n'est jamais vraiment seule : les gens sont plus faciles à rencontrer quand on voyage sans compagnon !", "No, and anyway you're never really alone: people are easier to meet when you travel without a companion!"]
      ],
      glossary: [["le tourisme lent (slow tourism)", "slow tourism"], ["chez l'habitant, le gîte", "with locals, the holiday cottage"], ["celui que j'ai fait", "the one I did"], ["marquer quelqu'un", "to make an impression on someone"]]
    }
  ],

  vocab: [
    { t: "l'auberge de jeunesse", en: "the youth hostel", pic: "🛏️", cat: "L'hébergement", g: "f" },
    { t: "le camping", en: "the campsite", pic: "⛺", cat: "L'hébergement", g: "m" },
    { t: "la chambre d'hôtes", en: "the B&B", pic: "🏡", cat: "L'hébergement", g: "f" },
    { t: "le gîte", en: "the holiday cottage", pic: "🏠", cat: "L'hébergement", g: "m" },
    { t: "chez l'habitant", en: "with local people", pic: "🤝", cat: "L'hébergement" },
    { t: "l'hôtel, réserver une chambre", en: "the hotel, to book a room", pic: "🏨", cat: "L'hébergement", g: "m" },
    { t: "le séjour", en: "the stay", pic: "🗓️", cat: "Le séjour", g: "m" },
    { t: "le circuit, l'itinéraire", en: "the tour, the route", pic: "🗺️", cat: "Le séjour", g: "m" },
    { t: "l'agence de voyages", en: "the travel agency", pic: "🧳", cat: "Le séjour", g: "f" },
    { t: "partir en vacances, faire ses valises", en: "to go on holiday, to pack", pic: "🧳", cat: "Le séjour" },
    { t: "un voyage sur mesure", en: "a tailor-made trip", pic: "✂️", cat: "Le séjour", g: "m" },
    { t: "le vol (aller simple, aller-retour)", en: "the flight (one-way, return)", pic: "✈️", cat: "L'avion", g: "m" },
    { t: "l'enregistrement, le bagage", en: "check-in, the bag", pic: "🛄", cat: "L'avion", g: "m" },
    { t: "la porte d'embarquement", en: "the boarding gate", pic: "🚪", cat: "L'avion", g: "f" },
    { t: "la correspondance, l'escale", en: "the connection, the stopover", pic: "🔀", cat: "L'avion", g: "f" },
    { t: "le retard, être annulé", en: "the delay, to be cancelled", pic: "⏰", cat: "L'avion", g: "m" },
    { t: "la demi-pension", en: "half board", pic: "🍽️", cat: "Les prestations", g: "f" },
    { t: "la pension complète", en: "full board", pic: "🍲", cat: "Les prestations", g: "f" },
    { t: "le petit-déjeuner compris", en: "breakfast included", pic: "🥐", cat: "Les prestations", g: "m" },
    { t: "inclus(e), en option", en: "included, optional", pic: "✅", cat: "Les prestations" },
    { t: "la location de voiture", en: "car hire", pic: "🚗", cat: "Les prestations", g: "f" },
    { t: "l'excursion, la visite guidée", en: "the excursion, the guided tour", pic: "🚌", cat: "Le tourisme", g: "f" },
    { t: "le guide, la guide", en: "the guide", pic: "🧑‍🏫", cat: "Le tourisme" },
    { t: "le, la touriste", en: "the tourist", pic: "📸", cat: "Le tourisme" },
    { t: "l'office de tourisme", en: "the tourist office", pic: "ℹ️", cat: "Le tourisme", g: "m" },
    { t: "le souvenir", en: "the souvenir, the memory", pic: "🎁", cat: "Le tourisme", g: "m" },
    { t: "la cascade", en: "the waterfall", pic: "💦", cat: "Les sites", g: "f" },
    { t: "la falaise", en: "the cliff", pic: "🪨", cat: "Les sites", g: "f" },
    { t: "la grotte", en: "the cave", pic: "🕳️", cat: "Les sites", g: "f" },
    { t: "le volcan", en: "the volcano", pic: "🌋", cat: "Les sites", g: "m" },
    { t: "les ruines", en: "the ruins", pic: "🏛️", cat: "Les sites", g: "f" },
    { t: "le pont, la fontaine", en: "the bridge, the fountain", pic: "🌉", cat: "Les sites", g: "m" },
    { t: "le lac, la forêt", en: "the lake, the forest", pic: "🌲", cat: "Les sites", g: "m" },
    { t: "le tourisme vert, rural", en: "green, rural tourism", pic: "🌿", cat: "Les types de tourisme", g: "m" },
    { t: "le tourisme lent", en: "slow tourism", pic: "🐌", cat: "Les types de tourisme", g: "m" },
    { t: "le tourisme culturel", en: "cultural tourism", pic: "🎭", cat: "Les types de tourisme", g: "m" },
    { t: "le tourisme de masse", en: "mass tourism", pic: "👥", cat: "Les types de tourisme", g: "m" },
    { t: "le road-trip, le sac à dos", en: "the road trip, backpacking", pic: "🎒", cat: "Les types de tourisme", g: "m" }
  ],

  grammar: [
    {
      id: "g-renseignements",
      title: "Asking for information about a trip",
      body: [
        "[[Je voudrais avoir des renseignements sur…]] · [[Pourriez-vous me donner des informations sur… ?]] · [[Est-ce que les vols sont inclus ?]] · [[Le petit-déjeuner est compris ?]] · [[Quelle est la meilleure période pour partir ?]] · [[Combien coûte le séjour ?]] · [[Qu'est-ce qui est en option ?]]"
      ],
      info: { type: "card", style: "receipt", caption: "🧾 The agency's quote · tap a line", title: "AGENCE HORIZONS", sub: "Circuit sur mesure · Guadeloupe · 10 jours", rows: [
        ["Vol aller-retour", "inclus", "Le vol aller-retour est inclus."], ["Location de voiture", "incluse", "La location de voiture est incluse."],
        ["Gîtes", "petit-déjeuner compris", "Le petit-déjeuner est compris dans les gîtes."], ["Hôtel", "demi-pension", "À l'hôtel, vous êtes en demi-pension."],
        ["Plongée, randonnée", "en option", "La plongée et la randonnée sont en option."]
      ], foot: "Meilleure période : de décembre à avril" }
    },
    {
      id: "g-organiser",
      title: "Organising a text or a circuit",
      body: [
        "To order the steps: [[D'abord]] (first) → [[ensuite]] / [[puis]] / [[après]] (then) → [[enfin]] (finally). [[D'abord, vous visitez Pointe-à-Pitre. Ensuite, vous partez en Basse-Terre. Puis vous faites de la plongée. Enfin, vous vous reposez sur une île.]]"
      ],
      info: { type: "timeline", title: "🗺️ Maya and Hugo's circuit", ends: ["jour 1", "", "jour 10"], items: [
        { x: 10, fr: "D'abord, Pointe-à-Pitre.", en: "First, Pointe-à-Pitre.", pic: "🏙️" },
        { x: 32, fr: "Ensuite, le volcan de la Soufrière.", en: "Then the Soufrière volcano.", pic: "🌋" },
        { x: 50, fr: "Puis les cascades.", en: "Next, the waterfalls.", pic: "💦" },
        { x: 68, fr: "Après, deux jours de plongée.", en: "After that, two days of diving.", pic: "🤿" },
        { x: 88, fr: "Enfin, une île calme.", en: "Finally, a quiet little island.", pic: "🏝️" }
      ] }
    },
    {
      id: "g-recit",
      title: "Passé composé or imparfait in a story",
      body: [
        "In a story, the <b>imparfait</b> sets the scene: the weather, the place, the feelings, what was going on: [[Il faisait beau, on roulait au bord de la mer.]] The <b>passé composé</b> tells the events, the actions that happen: [[Le van est tombé en panne.]]",
        "An event often <b>interrupts</b> a situation: [[On roulait tranquillement quand, soudain, un orage a éclaté.]] Words for a sudden event: [[soudain]], [[tout à coup]], [[à ce moment-là]], [[quand]] + passé composé."
      ],
      info: { type: "compare", title: "🎬 The setting and the action", cols: [
        { head: "Imparfait · le décor", en: "description, situation, feelings", color: "#3a6fd8", lines: [["Il faisait beau.", "The weather was nice."], ["On était perdus.", "We were lost."], ["Nous dormions dans le van.", "We were sleeping in the van."]] },
        { head: "Passé composé · l'action", en: "events, what happened", color: "#e86a2e", lines: [["Le van est tombé en panne.", "The van broke down."], ["Un agriculteur est arrivé.", "A farmer arrived."], ["Il nous a invités à dîner.", "He invited us to dinner."]] }
      ] },
      widget: {
        type: "sort", label: "Setting (imparfait) or event (passé composé)?",
        cols: [{ k: "imp", label: "le décor · imparfait", color: "#3a6fd8" }, { k: "pc", label: "l'événement · passé composé", color: "#e86a2e" }],
        items: [
          { t: "Il pleuvait depuis le matin.", k: "imp", say: "Il pleuvait depuis le matin." }, { t: "Tout à coup, le guide a crié.", k: "pc", say: "Tout à coup, le guide a crié." },
          { t: "La plage était presque vide.", k: "imp", say: "La plage était presque vide." }, { t: "Nous avons raté le train.", k: "pc", say: "Nous avons raté le train." },
          { t: "J'étais très fatigué.", k: "imp", say: "J'étais très fatigué." }, { t: "Soudain, un dauphin est apparu.", k: "pc", say: "Soudain, un dauphin est apparu." },
          { t: "Les enfants jouaient dans l'eau.", k: "imp", say: "Les enfants jouaient dans l'eau." }, { t: "Elle a perdu son passeport.", k: "pc", say: "Elle a perdu son passeport." }
        ]
      }
    },
    {
      id: "g-avis",
      title: "A positive or negative opinion about a visit",
      body: [
        "Positive: [[J'ai adoré !]] · [[C'était magique !]] · [[C'était à couper le souffle !]] · [[La vue était superbe.]] · [[Je recommande !]] · [[Ça vaut le coup !]]",
        "Negative: [[Je suis déçu(e).]] · [[Quelle déception !]] · [[Ça ne valait pas le coup.]] · [[C'était trop court / trop cher.]] · [[Je ne recommande pas.]]"
      ],
      info: { type: "scale", title: "⭐ From 'what a letdown' to 'breathtaking'", colors: ["#e0474f", "#2f9c8a"], items: [
        { v: 6, fr: "Quelle déception ! Ça ne valait pas le coup.", en: "what a letdown", pic: "😞" }, { v: 28, fr: "Je suis un peu déçu.", en: "a bit disappointed", pic: "😕" },
        { v: 50, fr: "C'était sympa, sans plus.", en: "nice, nothing more", pic: "😐" }, { v: 76, fr: "J'ai adoré, je recommande !", en: "loved it", pic: "😃" },
        { v: 96, fr: "C'était à couper le souffle !", en: "breathtaking", pic: "😍" }
      ], ends: ["−", "+ + +"] }
    },
    {
      id: "g-accord",
      title: "Agreeing the past participle",
      body: [
        "With <b>être</b>, the participle agrees with the <b>subject</b>: [[Elle est partie.]] · [[Nous sommes arrivés.]] · [[Elles se sont promenées.]]",
        "With <b>avoir</b>, normally <b>no</b> agreement: [[Lucie a pris des photos.]] But if the <b>COD comes before</b> the verb (a pronoun [[la, les]] or [[que]]), the participle agrees with it: [[Les photos ? Je les ai prises hier.]] · [[Les photos que j'ai prises sont belles.]] · [[Il nous a aidés.]]"
      ],
      info: { type: "pattern", title: "📸 COD before avoir → agreement", rows: [
        ["Les photos ?", "Je les ai", { opts: ["prises.", "regardées.", "envoyées."] }],
        ["La ville ?", "Nous l'avons", { opts: ["visitée.", "adorée.", "quittée."] }],
        ["Les cascades", "que nous avons", { opts: ["vues", "photographiées", "admirées"] }]
      ], note: "feminine +e · plural +s: prise → prises" },
      widget: {
        type: "sort", label: "Agreement or not?",
        cols: [{ k: "oui", label: "accord", color: "#2f9c8a" }, { k: "non", label: "pas d'accord", color: "#e0474f" }],
        items: [
          { t: "Les valises ? Je les ai faites.", k: "oui", say: "Les valises ? Je les ai faites." }, { t: "Elle a visité la grotte.", k: "non", say: "Elle a visité la grotte." },
          { t: "Nous sommes partis tôt.", k: "oui", say: "Nous sommes partis tôt." }, { t: "Ils ont pris l'avion.", k: "non", say: "Ils ont pris l'avion." },
          { t: "La chambre que j'ai réservée est grande.", k: "oui", say: "La chambre que j'ai réservée est grande." }, { t: "Maya a acheté des souvenirs.", k: "non", say: "Maya a acheté des souvenirs." }
        ]
      }
    },
    {
      id: "g-demonstratifs",
      title: "Demonstrative pronouns: [[celui, celle, ceux, celles]]",
      body: [
        "They replace a noun already mentioned, to avoid repeating it: [[celui]] (m. sing.), [[celle]] (f. sing.), [[ceux]] (m. pl.), [[celles]] (f. pl.).",
        "With [[-ci]] (here, the nearer one) and [[-là]] (there): [[Quel guide tu préfères ? Celui-ci ou celui-là ?]] · With [[qui]], [[que]], [[de]]: [[Le voyage qui m'a marquée ? Celui que j'ai fait au Québec.]] · [[Je prends ma valise et celle de Hugo.]]"
      ],
      info: { type: "pics", title: "👉 Which one? · tap to hear", items: [
        { t: "Ce circuit ? Je préfère celui-ci.", pic: "🗺️", en: "celui · masculine singular" }, { t: "Regarde celle-ci, c'est ma plus belle photo !", pic: "📸", en: "celle · feminine singular" },
        { t: "Les vols ? Ceux du matin sont moins chers.", pic: "✈️", en: "ceux · masculine plural" }, { t: "Les plages ? Celles du sud sont plus calmes.", pic: "🏖️", en: "celles · feminine plural" }
      ] },
      widget: {
        type: "combo", label: "Replace the noun · pick a noun and a structure",
        rows: [{ k: "ci", label: "…-ci" }, { k: "qui", label: "… qui / que" }, { k: "de", label: "… de" }],
        cols: [{ k: "hotel", label: "🏨 l'hôtel" }, { k: "valise", label: "🧳 la valise" }, { k: "billets", label: "🎟️ les billets" }, { k: "plages", label: "🏖️ les plages" }],
        out: {
          "ci|hotel": ["Je préfère celui-ci.", "I prefer this one."], "qui|hotel": ["L'hôtel ? Celui qui est près de la plage.", "The hotel? The one near the beach."], "de|hotel": ["C'est celui de la photo.", "It's the one in the photo."],
          "ci|valise": ["Ma valise, c'est celle-ci.", "My suitcase is this one."], "qui|valise": ["Celle que j'ai achetée est rouge.", "The one I bought is red.", "COD que before avoir → achetée"], "de|valise": ["C'est celle de Hugo.", "It's Hugo's."],
          "ci|billets": ["Prends ceux-ci, ils sont moins chers.", "Take these ones, they're cheaper."], "qui|billets": ["Ceux que j'ai réservés sont pour lundi.", "The ones I booked are for Monday."], "de|billets": ["Ce sont ceux de mes parents.", "They're my parents' ones."],
          "ci|plages": ["On va à celles-ci ?", "Shall we go to these ones?"], "qui|plages": ["Celles qui sont au sud sont plus calmes.", "The ones in the south are quieter."], "de|plages": ["Je préfère celles de Bretagne.", "I prefer the Brittany ones."]
        }
      }
    },
    {
      id: "g-agacement",
      title: "Irritation and calming down",
      body: [
        "Irritation: [[Ça m'énerve !]] · [[J'en ai marre !]] · [[Ça m'agace !]] · [[Arrête de… !]] · [[Tu exagères !]] · [[Ce n'est pas possible !]]",
        "Calming someone down: [[Du calme !]] · [[Calme-toi !]] · [[Ce n'est pas grave.]] · [[Ne t'inquiète pas.]] · [[Respire !]] · [[Tout va bien.]]"
      ]
    }
  ],

  expressions: [
    { fn: "Pour demander des informations", fnEn: "asking for information", icon: "❓", items: [
      ["Je voudrais avoir des renseignements sur…", "I'd like some information about…", "poli", true],
      ["Est-ce que les vols sont inclus ?", "Are the flights included?", "std", true],
      ["Le petit-déjeuner est compris ?", "Is breakfast included?", "std"],
      ["Quelle est la meilleure période pour partir ?", "What's the best time to go?", "std"],
      ["Qu'est-ce qui est en option ?", "What's optional?", "std"]
    ] },
    { fn: "Pour organiser un texte", fnEn: "ordering", icon: "🔢", items: [
      ["D'abord…", "First…", "std", true],
      ["Ensuite… · Puis… · Après…", "Then… · Next… · After that…", "std", true],
      ["Enfin…", "Finally…", "std"]
    ] },
    { fn: "Pour parler d'une visite", fnEn: "reviewing a visit", icon: "⭐", items: [
      ["C'était magique ! · J'ai adoré !", "It was magical! · I loved it!", "std", true],
      ["C'était à couper le souffle !", "It was breathtaking!", "std"],
      ["Ça vaut le coup ! Je recommande.", "It's worth it! I recommend it.", "std"],
      ["Je suis déçu(e). · Quelle déception !", "I'm disappointed. · What a letdown!", "std", true],
      ["Ça ne valait pas le coup.", "It wasn't worth it.", "std"]
    ] },
    { fn: "Pour exprimer l'agacement / calmer", fnEn: "irritation · calming", icon: "😤", items: [
      ["Ça m'énerve ! · Ça m'agace !", "It annoys me!", "std", true],
      ["J'en ai marre !", "I'm fed up!", "fam"],
      ["Tu exagères !", "You're exaggerating! / That's too much!", "fam"],
      ["Du calme ! · Calme-toi !", "Calm down!", "fam", true],
      ["Ce n'est pas grave. Ne t'inquiète pas.", "It's not serious. Don't worry.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · phoning a travel agency", lanes: ["Le client", "L'agent"], av: ["f3", "m7"], steps: [
    { s: 1, fr: "Agence Horizons, bonjour !", en: "Horizons agency, hello!" },
    { s: 0, fr: "Bonjour, je voudrais avoir des renseignements sur un circuit.", en: "Hello, I'd like some information about a tour." },
    { s: 1, fr: "Vous partiriez quand, et combien de temps ?", en: "When would you go, and for how long?" },
    { s: 0, fr: "En février, dix jours. Les vols sont inclus ?", en: "In February, ten days. Are the flights included?" },
    { s: 1, fr: "Oui, et la location de voiture aussi. Les excursions sont en option.", en: "Yes, and car hire too. The excursions are optional." },
    { s: 0, fr: "Parfait. Vous pourriez m'envoyer le programme par mail ?", en: "Perfect. Could you email me the programme?" }
  ] },

  sounds: {
    intro: "Phonie-graphie: three vowels that learners mix up. [ə] is short and relaxed (le, je, petit). [e] is closed, lips stretched (les, été, aller, chez). [ɛ] is open (lait, mer, très, fête). The difference changes the meaning: [[le]] (singular) / [[les]] (plural).",
    letters: [
      { l: "e (end of syllable)", name: "[ə] · le", tip: "[[le]], [[je]], [[petit]], [[demain]], [[premier]]. Often silent: [[sam(e)di]].", ex: ["le voyage", "je pars demain", "un petit village"] },
      { l: "é · er · ez · es (les, des)", name: "[e] · les", tip: "[[été]], [[réserver]], [[chez]], [[les]], [[des]], [[j'ai]].", ex: ["les vacances", "réserver un gîte", "chez l'habitant"] },
      { l: "è · ê · ai · ei · e + 2 consonnes", name: "[ɛ] · lait", tip: "[[la mer]], [[très]], [[une fête]], [[la neige]], [[une falaise]], [[elle]], [[il était]].", ex: ["au bord de la mer", "une falaise", "c'était très beau"] }
    ],
    pairs: [
      { a: ["le guide", "the guide"], b: ["les guides", "the guides"], note: "[ə] / [e]" },
      { a: ["je fais", "I do"], b: ["j'ai fait", "I did"], note: "[ə] / [e]" },
      { a: ["j'ai visité", "I visited"], b: ["je visitais", "I was visiting"], note: "passé composé / imparfait" },
      { a: ["l'été", "summer"], b: ["la fête", "the party"], note: "[e] / [ɛ]" },
      { a: ["celui-ci", "this one (m)"], b: ["celle-ci", "this one (f)"], note: "démonstratifs" },
      { a: ["le gîte", "the cottage"], b: ["la grotte", "the cave"], note: "les sites" }
    ]
  },
  classify: {
    label: "🔊 [ə], [e] ou [ɛ] ?", q: "Listen to the bold vowel sound: [ə] (le), [e] (les) or [ɛ] (lait)?",
    options: ["[ə] le", "[e] les", "[ɛ] lait"],
    items: [
      { say: "le", a: 0 }, { say: "les", a: 1 }, { say: "la mer", a: 2 }, { say: "demain", a: 0 },
      { say: "réserver", a: 1 }, { say: "très", a: 2 }, { say: "je", a: 0 }, { say: "chez", a: 1 }, { say: "la fête", a: 2 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Dans le circuit, les vols sont inclus.", ok: true },
    { type: "mcq", tag: "Dialogue 1", q: "Les excursions sont…", options: ["en option", "comprises", "annulées"], answer: 0 },
    { type: "mcq", tag: "Dialogue 1", q: "La meilleure période pour partir en Guadeloupe, d'après l'agent :", options: ["de décembre à avril", "en juillet", "en septembre"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "On dit que la Guadeloupe ressemble à un papillon à cause de…", options: ["sa forme", "ses fleurs", "ses couleurs"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Le van est tombé en panne le premier jour.", ok: false, explain: "On the third day; on the first day it was sunny." },
    { type: "mcq", tag: "Dialogue 3", q: "Qui a aidé Hugo et ses amis ?", options: ["un agriculteur", "un garagiste", "un policier"], answer: 0 },
    { type: "tf", tag: "Dialogue 4", s: "Lucie a adoré la guide.", ok: false, explain: "She found that the guide spoke too fast." },
    { type: "mcq", tag: "Dialogue 5", q: "Qu'est-ce qui énerve Maya ?", options: ["Hugo regarde son téléphone tout le temps", "le vol est annulé", "Hugo a perdu sa valise"], answer: 0 },
    { type: "tf", tag: "Dialogue 6", s: "Inès préfère le train à l'avion.", ok: true },
    { type: "fill", tag: "Récit", sentence: "Il ___ beau quand nous sommes partis.", options: ["faisait", "a fait", "fera"], answer: 0 },
    { type: "fill", tag: "Récit", sentence: "Nous dormions quand, soudain, l'orage ___ .", options: ["a éclaté", "éclatait", "éclatera"], answer: 0 },
    { type: "fill", tag: "Récit", sentence: "Tout à coup, un dauphin ___ .", options: ["est apparu", "apparaissait", "apparaît hier"], answer: 0 },
    { type: "fill", tag: "Récit", sentence: "Quand je suis arrivée, la plage ___ vide.", options: ["était", "a été", "est été"], answer: 0 },
    { type: "type", tag: "Récit", q: "Imparfait or passé composé: « Je (marcher) … sur la falaise quand j'(voir) … un phoque. »", answers: ["Je marchais sur la falaise quand j'ai vu un phoque.", "marchais / ai vu", "marchais, ai vu"] },
    { type: "fill", tag: "Accord", sentence: "Les photos ? Je les ai ___ .", options: ["prises", "pris", "prise"], answer: 0 },
    { type: "fill", tag: "Accord", sentence: "Elles sont ___ en Bretagne.", options: ["allées", "allé", "allés"], answer: 0 },
    { type: "fill", tag: "Accord", sentence: "Maya a ___ des souvenirs.", options: ["acheté", "achetés", "achetées"], answer: 0 },
    { type: "fill", tag: "Accord", sentence: "La grotte que nous avons ___ était immense.", options: ["visitée", "visité", "visités"], answer: 0 },
    { type: "fill", tag: "Démonstratifs", sentence: "Tu préfères quelle valise ? ___ -ci ou ___ -là ?", options: ["Celle / celle", "Celui / celui", "Ceux / ceux"], answer: 0 },
    { type: "fill", tag: "Démonstratifs", sentence: "Les vols du matin sont chers, ___ du soir sont moins chers.", options: ["ceux", "celles", "celui"], answer: 0 },
    { type: "fill", tag: "Démonstratifs", sentence: "Le voyage qui m'a marquée ? ___ que j'ai fait au Québec.", options: ["Celui", "Celle", "Ceux"], answer: 0 },
    { type: "type", tag: "Démonstratifs", q: "Replace the noun: « Je prends ma valise et la valise de Hugo. »", answers: ["Je prends ma valise et celle de Hugo.", "celle de Hugo"] },
    { type: "reply", tag: "Que répondre ?", prompt: "Le vol a une heure de retard ! Ça m'énerve !", options: ["Du calme, ce n'est pas grave.", "J'ai adoré !", "D'abord, ensuite, enfin."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Alors, cette visite en bus amphibie ?", options: ["C'était magique, je recommande !", "Je voudrais avoir des renseignements.", "Celui-ci."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Agence Horizons, bonjour !", options: ["Bonjour, je voudrais avoir des renseignements sur un circuit.", "Du calme !", "Il faisait beau."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Le petit-déjeuner et le dîner sont compris : c'est…", options: ["la demi-pension", "la pension complète", "chez l'habitant"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Une chute d'eau naturelle, c'est…", options: ["une cascade", "une grotte", "une falaise"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["le gîte", "le camping", "l'auberge de jeunesse", "la correspondance"], answer: 3, explain: "la correspondance is a connecting flight; the others are places to stay." },
    { type: "order", tag: "Construisez", en: "We were driving along when suddenly the van broke down.", words: ["On", "roulait", "quand,", "soudain,", "le", "van", "est", "tombé", "en", "panne."] },
    { type: "listen", tag: "Écoute", q: "What did the speaker think of the visit?", say: "Je suis déçue : la visite était trop courte et trop chère.", options: ["disappointed: too short and too expensive", "she loved it", "she didn't go"], answer: 0 }
  ],

  roleplays: [
    { title: "📞 Appelle une agence de voyages (DELF)", brief: "You want to organise a trip. Phone a travel agency: ask what is included, the best period and the price.", memo: ["Je voudrais avoir des renseignements…", "… est inclus ?", "Quelle est la meilleure période ?", "Combien ça coûte ?"], partner: "m7", you: "f3",
      turns: [
        { them: "Agence Évasion, bonjour !", themEn: "Évasion agency, hello!", hint: "Ask for information about a week in Corsica.", you: "Bonjour, je voudrais avoir des renseignements sur un séjour d'une semaine en Corse.", youEn: "Hello, I'd like some information about a week's stay in Corsica." },
        { them: "Bien sûr. Nous avons un séjour à l'hôtel en demi-pension.", themEn: "Of course. We have a hotel stay on half board.", hint: "Ask if the flight is included and what's optional.", you: "Est-ce que le vol est inclus ? Et qu'est-ce qui est en option ?", youEn: "Is the flight included? And what's optional?" },
        { them: "Le vol est inclus. Les excursions en bateau sont en option.", themEn: "The flight is included. Boat trips are optional.", hint: "Ask the best period and the price.", you: "Quelle est la meilleure période pour partir, et combien coûte le séjour ?", youEn: "What's the best time to go, and how much does the stay cost?" }
      ] },
    { title: "🚐 Raconte un souvenir de voyage", brief: "A friend asks about your last trip. Set the scene with the imparfait, then tell an unexpected event with the passé composé.", memo: ["Il faisait… · On était…", "Soudain… · Tout à coup…", "C'était…"], partner: "m2", you: "m4",
      turns: [
        { them: "Alors, ce voyage dans les Alpes ?", themEn: "So, that trip to the Alps?", hint: "Describe: the weather was nice, you were walking in the mountains.", you: "C'était super ! Il faisait beau, on marchait dans la montagne.", youEn: "It was great! The weather was nice, we were walking in the mountains." },
        { them: "Et il s'est passé quelque chose ?", themEn: "And did something happen?", hint: "Suddenly, a storm broke and you got lost.", you: "Oui ! Soudain, un orage a éclaté et nous nous sommes perdus.", youEn: "Yes! Suddenly a storm broke and we got lost." },
        { them: "Oh là là ! Et après ?", themEn: "Oh dear! And then?", hint: "A shepherd found you and invited you to his house.", you: "Un berger nous a trouvés et il nous a invités chez lui !", youEn: "A shepherd found us and invited us to his home!" }
      ] },
    { title: "😤 Un compagnon de voyage énervant", brief: "Your travel companion complains about everything. Express your irritation, then calm him down.", memo: ["Ça m'énerve !", "Tu exagères !", "Du calme !", "Ce n'est pas grave."], partner: "m4", you: "f3",
      turns: [
        { them: "L'hôtel est nul, la chambre est petite, il fait trop chaud…", themEn: "The hotel's rubbish, the room's small, it's too hot…", hint: "Tell him he's exaggerating; it annoys you.", you: "Tu exagères ! Ça m'énerve quand tu te plains tout le temps.", youEn: "You're exaggerating! It annoys me when you complain all the time." },
        { them: "Mais regarde, il n'y a même pas de vue sur la mer !", themEn: "But look, there's not even a sea view!", hint: "Calm him down: it's not serious, the beach is two minutes away.", you: "Du calme ! Ce n'est pas grave, la plage est à deux minutes.", youEn: "Calm down! It's not serious, the beach is two minutes away." },
        { them: "Bon… tu as raison.", themEn: "OK… you're right.", hint: "Suggest going for a swim.", you: "Allez, on va se baigner !", youEn: "Come on, let's go for a swim!" }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Écrire un article de blog de voyage", intro: "In groups, write a travel blog post that tells a trip with anecdotes, and present it to the class.",
      steps: [["Préparation", ["In groups, choose a real or imaginary trip: destination, dates, transport, accommodation.", "List the places you visited and two or three anecdotes (a surprise, a problem, a meeting)."]], ["Réalisation", ["Write the article: set the scene with the imparfait, tell the events with the passé composé.", "Organise the text with d'abord, ensuite, puis, enfin, and give your opinion of the visits.", "Add a title, photos or drawings, and some advice for readers."]], ["Présentation", ["Each group reads its article to the class. The class votes for the trip they'd most like to do."]]],
      phrases: ["D'abord, nous sommes arrivés à…", "Il faisait… · L'hôtel était…", "Soudain… · Tout à coup…", "C'était à couper le souffle !", "Je vous conseille de…", "Celui / celle que nous avons préféré(e)…"],
      model: { type: "card", style: "board", caption: "✍️ A model travel post · tap a line", title: "CARNET DE ROUTE · LA BRETAGNE EN VAN", sub: "par Hugo · 5 jours · tourisme lent", rows: [
        ["Jour 1", "D'abord, nous avons longé la côte. Il faisait beau et la mer était turquoise.", "D'abord, nous avons longé la côte. Il faisait beau et la mer était turquoise."],
        ["Jour 3", "Soudain, le van est tombé en panne au milieu de la campagne !", "Soudain, le van est tombé en panne au milieu de la campagne !"],
        ["Jour 3, le soir", "Un agriculteur nous a aidés et il nous a invités à dîner.", "Un agriculteur nous a aidés et il nous a invités à dîner."],
        ["Notre avis", "Les falaises ? C'était à couper le souffle. Je recommande !", "Les falaises ? C'était à couper le souffle. Je recommande !"]
      ], foot: "Mon conseil : prenez votre temps !" } }
  ],
  delf: {
    skill: "Compréhension de l'oral", title: "Listen for the key information",
    about: "In the DELF A2 listening paper you hear short recordings (announcements, messages, conversations) twice. In the travel topic, listen for <b>numbers</b> (times, prices, platforms, gates), <b>places</b> and <b>what is included or changed</b>. Read the questions before listening, note key words during the first listening, then check during the second.",
    tips: ["Read the questions before the recording: they tell you what to listen for.", "Write numbers as figures straight away.", "Listen for changes: « retard », « annulé », « nouvelle porte ».", "Don't panic if you miss a word: you'll hear it a second time."],
    items: [
      { type: "listen", q: "Which gate?", say: "Mesdames et messieurs, le vol pour Pointe-à-Pitre partira de la porte vingt-deux.", options: ["gate 22", "gate 12", "gate 2"], answer: 0 },
      { type: "listen", q: "What's the problem with the flight?", say: "Le vol AF 412 a quarante-cinq minutes de retard.", options: ["it's 45 minutes late", "it's cancelled", "it leaves early"], answer: 0 },
      { type: "listen", q: "What's included?", say: "Le séjour comprend l'hôtel en pension complète et une excursion au volcan.", options: ["full board and a volcano trip", "only the hotel", "the flight and car hire"], answer: 0 },
      { type: "listen", q: "How much is the guided tour?", say: "La visite guidée dure une heure et coûte quinze euros par personne.", options: ["€15 per person", "€50 per person", "free"], answer: 0 },
      { type: "listen", q: "What does the friend say about her holiday?", say: "On a passé une semaine dans un gîte, c'était magique, mais il a plu tous les jours !", options: ["magical but it rained every day", "awful, she wants to go home", "she stayed in a hotel"], answer: 0 }
    ]
  },
  detente: {
    title: "Le tour des sites",
    intro: "Which site is it?",
    items: [
      { type: "mcq", q: "On y entre avec une lampe : c'est sombre et il y fait frais.", options: ["une grotte", "une plage", "un pont"], answer: 0 },
      { type: "mcq", q: "Une montagne qui peut cracher de la lave :", options: ["un volcan", "une falaise", "une cascade"], answer: 0 },
      { type: "mcq", q: "Un mur de roche très haut au bord de la mer :", options: ["une falaise", "une fontaine", "un lac"], answer: 0 },
      { type: "mcq", q: "Ce qui reste d'un vieux château :", options: ["des ruines", "un gîte", "une escale"], answer: 0 },
      { type: "mcq", q: "Le nom amérindien de la Guadeloupe, selon le livre :", options: ["Karukera", "Kanata", "Tahiti"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🌍 Oh, le cliché ! « Les Français partent en vacances en France » (figures quoted by the book)", unit: " %", items: [
      { fr: "passent leurs vacances en France", en: "holiday in France", v: 56, pic: "🇫🇷" }, { fr: "veulent des vacances au contact de la nature", en: "want holidays close to nature", v: 82, pic: "🌿" }
    ] }
  ],
  culture: [
    { icon: "🇫🇷", kind: "Oh, le cliché !", t: "« Les Français partent en vacances en France. »", d: "Largely true: according to the survey quoted by the book, more than half of the French (56 %) spend their holidays in France, and a large majority want holidays close to nature." },
    { icon: "🐌", kind: "Civilisation", t: "Le tourisme lent", d: "Slow tourism means taking your time: fewer places, more meetings with local people, gentle transport (train, bike, walking) and local accommodation like gîtes or stays with local people." },
    { icon: "🚌", kind: "Francophonie", t: "Les bus amphibies", d: "In some francophone cities you can visit by amphibious bus: it drives through the streets, then goes into the water. The book mentions <b>Lady Dive</b> in Canada and the <b>Crocodile rouge</b> in Belgium." },
    { icon: "🦋", kind: "Francophonie", t: "La Guadeloupe, « l'île papillon »", d: "Guadeloupe, a French overseas department in the Caribbean, has the shape of a butterfly: two main islands, Grande-Terre and Basse-Terre. Its Amerindian name, <b>Karukera</b>, is said to mean 'island of beautiful waters'." },
    { icon: "🎒", kind: "Au fait !", t: "Voyager seul(e)", d: "Solo travel is increasingly popular: travellers say it's easier to meet people and to go at your own pace." }
  ],
  tips: [
    { icon: "🎬", t: "Décor vs action", d: "Imagine a film: the imparfait is the background ([[il pleuvait]]), the passé composé is what happens in front ([[un homme est entré]])." },
    { icon: "📸", t: "Agreement with avoir: look left!", d: "If the COD is <b>before</b> avoir ([[les]], [[la]], [[que]]), agree: [[les photos que j'ai prises]]." },
    { icon: "👉", t: "celui-ci / celui-là", d: "[[-ci]] = this one (here), [[-là]] = that one (there). In everyday French, [[celui-là]] is often used for both." }
  ],
  mistakes: [
    ["Il a fait beau quand nous sommes partis.", "Il faisait beau quand nous sommes partis.", "weather as a setting → imparfait"],
    ["Soudain, l'orage éclatait.", "Soudain, l'orage a éclaté.", "sudden event → passé composé"],
    ["Les photos que j'ai pris…", "Les photos que j'ai prises…", "COD before avoir → agreement"],
    ["Elle a acheté des souvenirs → achetés", "Elle a acheté des souvenirs.", "COD after avoir → no agreement"],
    ["Elle est parti.", "Elle est partie.", "être → agree with the subject"],
    ["Je prends ma valise et la de Hugo.", "Je prends ma valise et celle de Hugo.", "demonstrative pronoun"],
    ["Celui-ci photo", "Cette photo · celle-ci", "celui/celle replaces the noun"],
    ["Le petit-déjeuner est inclu.", "Le petit-déjeuner est inclus.", "inclus ends in -s"]
  ]
});
