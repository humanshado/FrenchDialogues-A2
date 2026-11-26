// Unité 8 · Dans les médias (Édito A2, 2e édition, book pp. 111–124)
// Situations: l'actualité en BD · comment s'informent les jeunes · une chaîne de streaming · les séniors sur les réseaux · la critique d'un film
// Grammar: la cause et la conséquence · le subjonctif (nécessité, opinion) · la place des pronoms COD et COI
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u08", rubrique: 4, num: 8,
  title: "In the media",
  titleFr: "Dans les médias",
  pages: "Book pp. 111–124",
  opener: { fr: "C'est passionnant !", en: "It's fascinating!" },
  hero: { scene: "kiosque", staff: "Le vendeur", people: { "Le vendeur": "m5", "Alix": "f7", "Abel": "m3" } },
  situations: [
    ["📰", "L'actualité en BD", "a news magazine in comics: [[une information critique et engagée]]"],
    ["📱", "Comment tu t'informes ?", "preference: [[J'aime mieux lire la presse en ligne.]] · [[Je préfère les réseaux sociaux aux médias traditionnels.]]"],
    ["🎮", "Ma chaîne en direct", "cause and consequence: [[grâce à]], [[à cause de]], [[c'est pourquoi]], [[alors]]"],
    ["👵", "Mamie sur les réseaux", "interest and opinion: [[Ça me passionne !]] · [[C'est bien que tu sois connectée !]]"],
    ["🎬", "La critique du film", "a review: [[Je l'ai adoré, je vous le conseille !]] · [[Je me suis ennuyé.]]"]
  ],
  goals: [
    "Express a preference: [[J'aime mieux…]], [[Je préfère A à B.]], [[C'est mieux (que…).]]",
    "Express interest: [[Ça m'intéresse !]], [[Ça me passionne.]], [[C'est fascinant !]], [[Je suis curieux, curieuse de savoir…]]",
    "Give a cause: [[parce que]], [[car]], [[grâce à]] (positive), [[à cause de]] (negative); a consequence: [[donc]], [[alors]], [[c'est pourquoi]], [[c'est pour ça que]]",
    "Use the subjunctive after necessity and opinion: [[Il faut que tu regardes…]], [[C'est bien que tu sois…]]",
    "Place object pronouns correctly in the present, the passé composé and with an infinitive: [[je l'ai vu]], [[je vais le revoir]]",
    "Write or give a positive or negative review of a film or a medium"
  ],
  glance: [
    ["🗣️", "Communication", "preferences · interest · positive and negative reviews · how we get the news"],
    ["🧩", "Grammaire", "cause and consequence · the present subjunctive (necessity, opinion) · the position of object pronouns"],
    ["🗂️", "Vocabulaire", "news and journalism · the press · TV · news sections · radio and podcasts · social networks · communication"],
    ["🔊", "Phonie-graphie", "final consonants: silent in the masculine, pronounced in the feminine"],
    ["⭐", "The phrase to learn first", "[[J'aime mieux…]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "The news in comics", titleFr: "Au kiosque · L'actualité en bande dessinée",
      note: "Abel shows Alix a quarterly magazine where journalists and cartoonists tell the news in comics. Listen to why he likes it.",
      scene: "kiosque", staff: "Le vendeur", people: { "Le vendeur": "m5", "Abel": "m3", "Alix": "f7" },
      lines: [
        ["Abel", "Regarde, le nouveau numéro de ma revue préférée : toute l'actualité est en BD !", "Look, the new issue of my favourite magazine: all the news is in comics!"],
        ["Alix", "En BD ? Mais c'est sérieux ?", "In comics? But is it serious?"],
        ["Abel", "Très sérieux ! Chaque enquête est réalisée par un journaliste et un dessinateur. Ils prennent le temps de chercher, c'est pourquoi la revue sort tous les trois mois.", "Very serious! Each investigation is done by a journalist and a cartoonist. They take time to research, which is why the magazine comes out every three months."],
        ["Alix", "Et ça parle de quoi ?", "And what's it about?"],
        ["Abel", "De tout : politique, écologie, société, sport… C'est une information critique et engagée.", "Everything: politics, ecology, society, sport… It's critical, committed journalism."],
        ["Alix", "C'est mieux que les photos ?", "Is it better than photos?"],
        ["Abel", "Pour moi, oui. Les dessins expliquent les sujets compliqués plus simplement. Grâce à cette revue, j'ai enfin compris l'économie !", "For me, yes. The drawings explain complicated topics more simply. Thanks to this magazine, I finally understood economics!"],
        ["Le vendeur", "Il vous la faut ? C'est le dernier exemplaire !", "Do you want it? It's the last copy!"]
      ],
      glossary: [["la BD = la bande dessinée", "comics"], ["l'enquête", "the investigation"], ["le dessinateur, la dessinatrice", "the cartoonist"], ["engagé(e)", "committed, taking a stand"]]
    },
    {
      id: "d2", n: 2, title: "How do young people get the news?", titleFr: "Micro-trottoir · Comment vous vous informez ?",
      note: "A radio journalist asks three young people how they keep up with the news. Listen to how they express preferences.",
      scene: "ville", staff: "Le journaliste", people: { "Le journaliste": "m4", "Alix": "f7", "Floriane": "f8", "Abel": "m3" },
      lines: [
        ["Le journaliste", "Bonjour ! Comment vous vous informez ?", "Hello! How do you get the news?"],
        ["Alix", "Moi, j'aime mieux lire la presse en ligne. Je ne regarde pas le journal télé, à cause des images, qui sont souvent horribles.", "I prefer reading the news online. I don't watch the TV news because of the images, which are often horrible."],
        ["Floriane", "Je n'ai pas le temps de tout lire, alors je ne lis que les titres sur mon téléphone. Les articles sont trop longs !", "I don't have time to read everything, so I only read the headlines on my phone. The articles are too long!"],
        ["Abel", "Moi, je préfère les réseaux sociaux aux médias traditionnels. Je reçois les nouvelles sur mon téléphone, alors je n'ai pas besoin de les chercher.", "I prefer social networks to traditional media. I get the news on my phone, so I don't need to look for it."],
        ["Le journaliste", "Et les fausses nouvelles, les infox ?", "And fake news?"],
        ["Abel", "C'est vrai, il faut faire attention. Je vérifie toujours la source.", "True, you have to be careful. I always check the source."],
        ["Le journaliste", "Vous êtes au courant de l'actualité internationale ?", "Do you keep up with international news?"],
        ["Floriane", "Pas assez… Je devrais m'abonner à un journal. C'est mieux que de lire seulement les titres !", "Not enough… I should subscribe to a newspaper. It's better than just reading the headlines!"]
      ],
      glossary: [["J'aime mieux… · Je préfère A à B", "I prefer… · I prefer A to B"], ["être au courant (de)", "to be informed (about)"], ["les infox = les fausses nouvelles", "fake news"], ["s'abonner à", "to subscribe to"]]
    },
    {
      id: "d3", n: 3, title: "My live channel", titleFr: "Chez Léo · Une chaîne de streaming",
      note: "Léo has started a live-streaming channel about cooking. Listen to the cause words ([[grâce à]], [[à cause de]], [[car]]) and the consequence words ([[donc]], [[alors]], [[c'est pour ça que]]).",
      scene: "appartement", people: { "Léo": "m5", "Clara": "f3" },
      lines: [
        ["Clara", "Tu fais quoi avec cette caméra ?", "What are you doing with that camera?"],
        ["Léo", "J'ai créé ma chaîne sur une plateforme de diffusion en direct. Je cuisine et les gens me posent des questions dans le tchat.", "I've created my channel on a live-streaming platform. I cook and people ask me questions in the chat."],
        ["Clara", "Je croyais que c'était seulement pour les jeux vidéo !", "I thought it was only for video games!"],
        ["Léo", "Au début, oui. Mais aujourd'hui, tout le monde peut parler de cuisine, de musique, d'actualité… Même les médias classiques y vont, car ils veulent toucher un public plus jeune.", "At the start, yes. But now anyone can talk about cooking, music, the news… Even traditional media go there, because they want to reach a younger audience."],
        ["Clara", "Et ça marche ?", "And is it working?"],
        ["Léo", "Grâce au tchat, je réponds en direct. Les gens adorent l'interaction, c'est pour ça que j'ai déjà trois cents abonnés !", "Thanks to the chat, I answer live. People love the interaction, that's why I already have three hundred followers!"],
        ["Clara", "Bravo ! Et hier soir ?", "Well done! And last night?"],
        ["Léo", "Hier, à cause d'un problème de connexion, l'émission s'est arrêtée. Donc je recommence ce soir !", "Yesterday, because of a connection problem, the show stopped. So I'm starting again tonight!"]
      ],
      glossary: [["la diffusion en direct / en streaming", "live streaming"], ["grâce à + nom", "thanks to (positive)"], ["à cause de + nom", "because of (negative)"], ["c'est pour ça que", "that's why (oral)"]]
    },
    {
      id: "d4", n: 4, title: "Grandma on social media", titleFr: "Chez Christine · Ça m'intéresse !",
      note: "Christine, 72, has just opened a social-media account. Her grandson helps her. Listen to interest ([[Ça me passionne !]]) and to the subjunctive after [[il faut que]] and [[c'est bien que]].",
      scene: "maison", people: { "Christine": "f6", "Noah": "m3" },
      lines: [
        ["Noah", "Alors, Mamie, tu as ouvert ton compte ?", "So, Grandma, have you opened your account?"],
        ["Christine", "Oui ! Je regarde les vidéos de mes petits-enfants. Je m'intéresse à leur vie, ça me passionne !", "Yes! I watch my grandchildren's videos. I'm interested in their lives, it fascinates me!"],
        ["Noah", "C'est très bien que tu sois plus connectée !", "It's great that you're more connected!"],
        ["Christine", "Mais je suis curieuse de comprendre comment ça fonctionne. Comment on poste une photo ?", "But I'm curious to understand how it works. How do you post a photo?"],
        ["Noah", "Il faut que tu choisisses la photo, et après, tu écris un petit message.", "You have to choose the photo, then you write a little message."],
        ["Christine", "C'est fascinant ! Mes amies du club aussi, elles sont sur les réseaux.", "It's fascinating! My friends at the club are on social media too."],
        ["Noah", "C'est normal qu'on soit sur les réseaux à tout âge. Mais attention aux infox : il est important que tu vérifies les informations.", "It's normal to be on social media at any age. But watch out for fake news: it's important that you check information."],
        ["Christine", "Promis ! Et il faut que tu m'aides à commenter les photos de ta cousine !", "Promise! And you have to help me comment on your cousin's photos!"]
      ],
      glossary: [["Ça me passionne.", "It fascinates me."], ["Je suis curieux, curieuse de…", "I'm curious to…"], ["il faut que + subjonctif", "it's necessary that…"], ["c'est bien que + subjonctif", "it's good that…"]]
    },
    {
      id: "d5", n: 5, title: "Leaving the cinema", titleFr: "À la sortie du cinéma · Alors, ce film ?",
      note: "Two friends give their opinion on a new historical film. Listen to the positive and negative criticism, and to where the pronouns go: [[je l'ai trouvé]], [[je vais le revoir]].",
      scene: "spectacle", people: { "Samia": "f4", "Hugo": "m2" },
      lines: [
        ["Samia", "Alors, ce film, tu l'as aimé ?", "So, this film, did you like it?"],
        ["Hugo", "Je l'ai adoré ! L'acteur principal joue merveilleusement bien. Le rôle lui va très bien.", "I loved it! The lead actor plays wonderfully. The role suits him perfectly."],
        ["Samia", "Moi, j'ai trouvé les premières scènes un peu longues. Je les ai trouvées ennuyeuses.", "I found the first scenes a bit long. I found them boring."],
        ["Hugo", "C'est vrai, le début est lent. Mais après, l'histoire est passionnante, et la musique est magnifique.", "True, the beginning is slow. But afterwards the story is fascinating, and the music is magnificent."],
        ["Samia", "Les décors sont superbes, je suis d'accord. Mais l'histoire d'amour, je ne l'ai pas crue du tout.", "The sets are superb, I agree. But the love story, I didn't believe it at all."],
        ["Hugo", "Moi, je vais le revoir avec mes parents. Je suis sûr qu'il va leur plaire.", "I'm going to see it again with my parents. I'm sure they'll like it."],
        ["Samia", "Bon… je ne le conseille pas à tout le monde, mais pour les fans d'histoire, c'est un bon film.", "Well… I wouldn't recommend it to everyone, but for history fans, it's a good film."]
      ],
      glossary: [["je l'ai adoré", "I loved it (pronoun before avoir)"], ["je vais le revoir", "I'm going to see it again (pronoun before the infinitive)"], ["ennuyeux, ennuyeuse ≠ passionnant(e)", "boring ≠ fascinating"], ["les décors", "the sets"]]
    }
  ],

  vocab: [
    { t: "les médias", en: "the media", pic: "📡", cat: "L'information", g: "pl" },
    { t: "le / la journaliste", en: "the journalist", pic: "🎙️", cat: "L'information" },
    { t: "le journalisme numérique", en: "digital journalism", pic: "💻", cat: "L'information", g: "m" },
    { t: "l'enquête = le reportage", en: "the investigation = the report", pic: "🔍", cat: "L'information", g: "f" },
    { t: "le documentaire", en: "the documentary", pic: "🎞️", cat: "L'information", g: "m" },
    { t: "la revue de presse", en: "the press review", pic: "🗞️", cat: "L'information", g: "f" },
    { t: "publier un article", en: "to publish an article", pic: "✍️", cat: "L'information" },
    { t: "le point de vue", en: "the point of view", pic: "👁️", cat: "L'information", g: "m" },
    { t: "la plateforme", en: "the platform", pic: "🖥️", cat: "L'information", g: "f" },
    { t: "la diffusion en direct, en streaming", en: "live broadcast, streaming", pic: "🔴", cat: "L'information", g: "f" },
    { t: "s'informer, être au courant (de)", en: "to keep informed, to know about", pic: "ℹ️", cat: "S'informer" },
    { t: "suivre l'actualité", en: "to follow the news", pic: "🌍", cat: "S'informer" },
    { t: "regarder les nouvelles, les informations", en: "to watch the news", pic: "📺", cat: "S'informer" },
    { t: "s'abonner (à), l'abonnement", en: "to subscribe (to), subscription", pic: "🔔", cat: "S'informer" },
    { t: "le journal, la revue = le magazine", en: "the newspaper, the magazine", pic: "📰", cat: "La presse écrite", g: "m" },
    { t: "l'article, le titre, le numéro", en: "the article, the headline, the issue", pic: "📄", cat: "La presse écrite", g: "m" },
    { t: "la presse en ligne ≠ la presse papier", en: "online ≠ print press", pic: "🌐", cat: "La presse écrite", g: "f" },
    { t: "le dessinateur, la dessinatrice", en: "the cartoonist", pic: "✏️", cat: "La presse écrite" },
    { t: "la chaîne", en: "the channel", pic: "📺", cat: "La télévision", g: "f" },
    { t: "l'émission", en: "the programme, show", pic: "🎬", cat: "La télévision", g: "f" },
    { t: "le journal télé(visé) = le JT", en: "the TV news", pic: "🗣️", cat: "La télévision", g: "m" },
    { t: "le direct", en: "live (broadcast)", pic: "🔴", cat: "La télévision", g: "m" },
    { t: "l'actualité internationale, nationale, régionale", en: "international, national, regional news", pic: "🌐", cat: "Les rubriques", g: "f" },
    { t: "la politique, l'économie, la société", en: "politics, the economy, society", pic: "🏛️", cat: "Les rubriques", g: "f" },
    { t: "l'écologie, la culture, le sport, la météo", en: "ecology, culture, sport, weather", pic: "🌱", cat: "Les rubriques", g: "f" },
    { t: "l'auditeur, l'auditrice", en: "the listener", pic: "🎧", cat: "La radio, les podcasts" },
    { t: "l'émission de radio, le programme", en: "the radio show, the programme", pic: "📻", cat: "La radio, les podcasts", g: "f" },
    { t: "écouter des podcasts, l'épisode", en: "to listen to podcasts, the episode", pic: "🎙️", cat: "La radio, les podcasts" },
    { t: "les contenus sonores, la voix", en: "audio content, the voice", pic: "🔊", cat: "La radio, les podcasts", g: "pl" },
    { t: "l'internaute", en: "the Internet user", pic: "🧑‍💻", cat: "Les réseaux sociaux" },
    { t: "ouvrir un compte, s'inscrire sur un réseau", en: "to open an account, to join a network", pic: "➕", cat: "Les réseaux sociaux" },
    { t: "fermer son compte, quitter un réseau", en: "to close one's account, to leave a network", pic: "🚪", cat: "Les réseaux sociaux" },
    { t: "poster des photos, commenter", en: "to post photos, to comment", pic: "📸", cat: "Les réseaux sociaux" },
    { t: "suivre quelqu'un, être en contact avec", en: "to follow someone, to be in touch with", pic: "👥", cat: "Les réseaux sociaux" },
    { t: "être connecté(e)", en: "to be online, connected", pic: "📶", cat: "Les réseaux sociaux" },
    { t: "les fausses nouvelles = les infox", en: "fake news", pic: "🚫", cat: "Les réseaux sociaux", g: "pl" },
    { t: "diffuser une information", en: "to spread information", pic: "📢", cat: "La communication" },
    { t: "un outil, un moyen de communication", en: "a means of communication", pic: "🔧", cat: "La communication", g: "m" },
    { t: "sensibiliser un public", en: "to raise awareness", pic: "💡", cat: "La communication" },
    { t: "transmettre des connaissances", en: "to pass on knowledge", pic: "🎓", cat: "La communication" },
    { t: "passionnant(e) ≠ ennuyeux, ennuyeuse", en: "fascinating ≠ boring", pic: "🤩", cat: "La critique" },
    { t: "un chef-d'œuvre ≠ un navet", en: "a masterpiece ≠ a flop (casual)", pic: "🏆", cat: "La critique", g: "m" },
    { t: "les décors, les effets spéciaux", en: "the sets, special effects", pic: "🎥", cat: "La critique", g: "pl" },
    { t: "le rôle, l'acteur principal", en: "the role, the lead actor", pic: "🎭", cat: "La critique", g: "m" }
  ],

  grammar: [
    {
      id: "g-preference",
      title: "Preference and interest",
      body: [
        "Preference: [[J'aime mieux lire la presse en ligne.]] · [[Je préfère les réseaux sociaux aux médias traditionnels.]] (préférer A <b>à</b> B) · [[C'est mieux (que…).]]",
        "Interest: [[Ça m'intéresse !]] / [[Ça nous intéresse !]] · [[Ça me passionne.]] · [[Je m'intéresse à leur vie !]] · [[C'est fascinant ! C'est passionnant !]] · [[Je suis curieux / curieuse de savoir comment ça fonctionne.]]"
      ],
      info: { type: "bars", title: "📻 How the French listen to audio content (figures quoted by the book)", unit: " %", items: [
        { fr: "la radio (en direct ou en podcast)", en: "radio (live or podcast)", v: 91, pic: "📻" }, { fr: "leur musique personnelle", en: "their own music", v: 58, pic: "🎵" },
        { fr: "la musique en vidéo", en: "music videos", v: 46, pic: "🎬" }, { fr: "la musique en streaming", en: "music streaming", v: 41, pic: "🎧" },
        { fr: "des podcasts natifs (pas de la radio)", en: "native podcasts", v: 10, pic: "🎙️" }, { fr: "des livres audio", en: "audiobooks", v: 4, pic: "📚" }
      ] },
      widget: {
        type: "combo", label: "Say what you prefer · pick a structure and two media",
        rows: [{ k: "mieux", label: "J'aime mieux…" }, { k: "prefere", label: "Je préfère… à…" }, { k: "cest", label: "… c'est mieux que…" }],
        cols: [{ k: "presse", label: "📰 la presse en ligne / la télé" }, { k: "radio", label: "📻 la radio / les podcasts" }, { k: "bd", label: "✏️ la BD / les photos" }],
        out: {
          "mieux|presse": ["J'aime mieux lire la presse en ligne que regarder la télé.", "I'd rather read the news online than watch TV."], "prefere|presse": ["Je préfère la presse en ligne à la télé.", "I prefer the online press to TV.", "préférer A à B"], "cest|presse": ["La presse en ligne, c'est mieux que la télé.", "The online press is better than TV."],
          "mieux|radio": ["J'aime mieux écouter la radio en direct.", "I prefer listening to live radio."], "prefere|radio": ["Je préfère les podcasts à la radio.", "I prefer podcasts to the radio.", "à + la radio"], "cest|radio": ["Les podcasts, c'est mieux que la radio : on les écoute quand on veut.", "Podcasts are better than radio: you listen when you want."],
          "mieux|bd": ["J'aime mieux l'actualité en BD.", "I prefer the news in comics."], "prefere|bd": ["Je préfère la BD aux photos.", "I prefer comics to photos.", "à + les = aux"], "cest|bd": ["Pour expliquer, la BD, c'est mieux que les photos.", "To explain things, comics are better than photos."]
        }
      }
    },
    {
      id: "g-cause",
      title: "Cause and consequence",
      body: [
        "<b>Cause</b>: [[parce que]] (spoken and written) / [[car]] (mostly written) + clause: [[Des journalistes utilisent Twitch parce que c'est interactif.]] · [[grâce à]] + noun = a <b>positive</b> cause: [[Je suis toujours informée grâce aux réseaux sociaux.]] · [[à cause de]] + noun = a <b>negative</b> cause: [[À cause d'Internet, la presse papier a des difficultés.]]",
        "<b>Consequence</b>: [[donc]] (mostly written) · [[alors]] (mostly spoken): [[J'adore l'actualité et la BD, alors je me suis abonné.]] · [[c'est pourquoi]] / [[c'est pour cela que]] (written) / [[c'est pour ça que]] (spoken): [[Les articles sont trop longs, c'est pourquoi je ne lis que les titres.]]",
        "Contractions: [[grâce au / aux]], [[à cause du / des]]."
      ],
      info: { type: "compare", title: "➡️ Cause → consequence", cols: [
        { head: "La cause", en: "why?", color: "#3a6fd8", lines: [["parce que / car + phrase", "because"], ["grâce à + nom (😀)", "thanks to"], ["à cause de + nom (😞)", "because of"]] },
        { head: "La conséquence", en: "so what?", color: "#e86a2e", lines: [["donc (écrit) · alors (oral)", "so"], ["c'est pourquoi · c'est pour cela que", "that's why (written)"], ["c'est pour ça que", "that's why (spoken)"]] }
      ] },
      widget: {
        type: "sort", label: "grâce à or à cause de?",
        cols: [{ k: "grace", label: "grâce à 😀", color: "#2f9c8a" }, { k: "cause", label: "à cause de 😞", color: "#e0474f" }],
        items: [
          { t: "J'ai appris beaucoup de choses … mon émission préférée.", k: "grace", say: "J'ai appris beaucoup de choses grâce à mon émission préférée." }, { t: "La presse papier va mal … la presse en ligne.", k: "cause", say: "La presse papier va mal à cause de la presse en ligne." },
          { t: "Cette journaliste est devenue célèbre … ses articles engagés.", k: "grace", say: "Cette journaliste est devenue célèbre grâce à ses articles engagés." }, { t: "Ils ne peuvent pas faire leur reportage … mauvais temps.", k: "cause", say: "Ils ne peuvent pas faire leur reportage à cause du mauvais temps." },
          { t: "La série est un succès … l'acteur principal.", k: "grace", say: "La série est un succès grâce à l'acteur principal." }, { t: "… réseaux sociaux, il ne sort plus de chez lui.", k: "cause", say: "À cause des réseaux sociaux, il ne sort plus de chez lui." }
        ]
      }
    },
    {
      id: "g-subjonctif",
      title: "The present subjunctive: necessity and opinion",
      body: [
        "After expressions of <b>necessity</b> ([[il faut que]], [[il est important que]], [[il ne faut pas que]]) and impersonal <b>opinions</b> ([[c'est bien / normal / important que]]), use the subjunctive: [[Il faut que tu regardes cette vidéo !]] · [[C'est bien qu'elle te montre comment ça marche.]]",
        "Form: <b>je, tu, il, ils</b>: the stem of <b>ils</b> in the present (ils inform<b>ent</b>) + [[-e, -es, -e, -ent]]. So for -er verbs these forms look like the present! <b>nous, vous</b>: like the imparfait: [[que nous informions]], [[que vous informiez]].",
        "Irregular: [[être]] → [[que je sois]] · [[avoir]] → [[que j'aie]] · [[aller]] → [[que j'aille]] · [[faire]] → [[que je fasse]] · [[pouvoir]] → [[que je puisse]] · [[savoir]] → [[que je sache]]"
      ],
      info: [
        { type: "conj", title: "🧩 The present subjunctive", verbs: [
          { inf: "informer", en: "regular -er", forms: ["que j'informe", "que tu informes", "qu'il / elle / on informe", "que nous informions", "que vous informiez", "qu'ils / elles informent"] },
          { inf: "choisir", en: "stem of ils choisissent", forms: ["que je choisisse", "que tu choisisses", "qu'il / elle / on choisisse", "que nous choisissions", "que vous choisissiez", "qu'ils / elles choisissent"] },
          { inf: "être", en: "irregular", forms: ["que je sois", "que tu sois", "qu'il / elle / on soit", "que nous soyons", "que vous soyez", "qu'ils / elles soient"] },
          { inf: "avoir", en: "irregular", forms: ["que j'aie", "que tu aies", "qu'il / elle / on ait", "que nous ayons", "que vous ayez", "qu'ils / elles aient"] },
          { inf: "aller", en: "irregular", forms: ["que j'aille", "que tu ailles", "qu'il / elle / on aille", "que nous allions", "que vous alliez", "qu'ils / elles aillent"] }
        ] }
      ],
      widget: {
        type: "combo", label: "Necessity or opinion + subjunctive",
        rows: [{ k: "faut", label: "Il faut que…" }, { k: "bien", label: "C'est bien que…" }, { k: "important", label: "Il est important que…" }],
        cols: [{ k: "verifier", label: "✅ tu / vérifier les infos" }, { k: "etre", label: "📶 les séniors / être connectés" }, { k: "aller", label: "🎬 nous / aller voir ce film" }, { k: "avoir", label: "🎓 vous / avoir l'esprit critique" }],
        out: {
          "faut|verifier": ["Il faut que tu vérifies les informations.", "You must check the information."], "bien|verifier": ["C'est bien que tu vérifies les informations.", "It's good that you check the information."], "important|verifier": ["Il est important que tu vérifies les informations.", "It's important that you check the information."],
          "faut|etre": ["Il faut que les séniors soient connectés.", "Older people need to be connected.", "être → soient"], "bien|etre": ["C'est bien que les séniors soient connectés.", "It's good that older people are connected."], "important|etre": ["Il est important que les séniors soient connectés.", "It's important that older people are connected."],
          "faut|aller": ["Il faut que nous allions voir ce film !", "We must go and see this film!", "aller → allions"], "bien|aller": ["C'est bien que nous allions voir ce film.", "It's good that we're going to see this film."], "important|aller": ["Il est important que nous allions voir ce film.", "It's important that we go and see this film."],
          "faut|avoir": ["Il faut que vous ayez l'esprit critique.", "You must have a critical mind.", "avoir → ayez"], "bien|avoir": ["C'est bien que vous ayez l'esprit critique.", "It's good that you have a critical mind."], "important|avoir": ["Il est important que vous ayez l'esprit critique.", "It's important that you have a critical mind."]
        }
      }
    },
    {
      id: "g-place",
      title: "Where do object pronouns go?",
      body: [
        "<b>Present</b> (and other simple tenses): before the verb: [[Vous la connaissez.]] · [[Vous ne la connaissez pas.]]",
        "<b>Passé composé</b> (and other compound tenses): before the auxiliary [[avoir]] / [[être]]: [[Je les ai aimés.]] · [[Je ne les ai pas aimés.]] With [[avoir]], the participle agrees with a COD placed before it: [[les premières scènes, je les ai trouvées nulles]].",
        "<b>Futur proche</b>, passé récent, present continuous: after the conjugated verb, <b>before the infinitive</b>: [[Je vais le regarder.]] · [[Je ne vais pas le regarder.]] · [[Je viens de le voir.]]"
      ],
      info: { type: "pattern", title: "📍 Pronoun position: three cases", rows: [
        ["Ce film, je", "le", { opts: ["conseille.", "regarde ce soir.", "trouve génial."] }],
        ["Ce film, je", "l'", "ai", { opts: ["adoré.", "vu hier.", "trouvé long."] }],
        ["Ce film, je vais", "le", { opts: ["revoir.", "conseiller.", "télécharger."] }]
      ], note: "Present: before the verb · passé composé: before avoir/être · with an infinitive: before the infinitive." },
      widget: {
        type: "combo", label: "Replace « ce film » in three tenses",
        rows: [{ k: "pr", label: "présent" }, { k: "pc", label: "passé composé" }, { k: "fp", label: "futur proche" }],
        cols: [{ k: "aff", label: "✅ affirmative" }, { k: "neg", label: "❌ negative" }],
        out: {
          "pr|aff": ["Je le regarde.", "I'm watching it."], "pr|neg": ["Je ne le regarde pas.", "I'm not watching it."],
          "pc|aff": ["Je l'ai regardé.", "I watched it.", "before avoir"], "pc|neg": ["Je ne l'ai pas regardé.", "I didn't watch it."],
          "fp|aff": ["Je vais le regarder.", "I'm going to watch it.", "before the infinitive"], "fp|neg": ["Je ne vais pas le regarder.", "I'm not going to watch it."]
        }
      }
    },
    {
      id: "g-critique",
      title: "A positive or negative review",
      body: [
        "Positive: [[J'ai adoré !]] · [[C'est un chef-d'œuvre.]] · [[L'histoire est passionnante.]] · [[L'acteur joue très bien.]] · [[Je vous le conseille !]] · [[Grâce à ce média, on apprend beaucoup.]]",
        "Negative: [[Je me suis ennuyé(e).]] · [[C'est nul !]] (casual) · [[C'est décevant.]] · [[Il y a trop d'effets spéciaux.]] · [[L'histoire est difficile à suivre.]] · [[Je ne le conseille pas.]] · [[À cause de ce média…]]"
      ],
      info: { type: "scale", title: "🎬 From flop to masterpiece", colors: ["#e0474f", "#2f9c8a"], items: [
        { v: 4, fr: "C'est nul ! Un vrai navet.", en: "rubbish! a real flop", pic: "🍅" }, { v: 26, fr: "Je me suis ennuyé.", en: "I was bored", pic: "😴" },
        { v: 50, fr: "C'est pas mal, sans plus.", en: "not bad, nothing more", pic: "😐" }, { v: 76, fr: "C'est passionnant, je vous le conseille.", en: "fascinating, I recommend it", pic: "👍" },
        { v: 96, fr: "C'est un chef-d'œuvre !", en: "a masterpiece!", pic: "🏆" }
      ], ends: ["−", "+"] }
    }
  ],

  expressions: [
    { fn: "Pour exprimer sa préférence", fnEn: "preference", icon: "⚖️", items: [
      ["J'aime mieux lire la presse en ligne.", "I prefer reading the news online.", "std", true],
      ["Je préfère les réseaux sociaux aux médias traditionnels.", "I prefer social networks to traditional media.", "std", true],
      ["C'est mieux (que…).", "It's better (than…).", "std"]
    ] },
    { fn: "Pour exprimer son intérêt", fnEn: "interest", icon: "🤩", items: [
      ["Ça m'intéresse ! · Ça nous intéresse !", "That interests me / us!", "std", true],
      ["Ça me passionne.", "It fascinates me.", "std"],
      ["Je m'intéresse à leur vie !", "I'm interested in their lives!", "std"],
      ["C'est fascinant ! C'est passionnant !", "It's fascinating!", "std", true],
      ["Je suis curieux / curieuse de savoir comment ça fonctionne.", "I'm curious to know how it works.", "std"]
    ] },
    { fn: "Pour faire la critique d'un média, d'un film", fnEn: "reviews", icon: "🎬", items: [
      ["C'est intéressant d'écouter des podcasts, parce que…", "Listening to podcasts is interesting because…", "std"],
      ["Nous trouvons les journaux très intéressants, car…", "We find newspapers very interesting, because…", "std"],
      ["C'est pour ça que le cinéma est un art passionnant.", "That's why cinema is a fascinating art.", "std"],
      ["Regarder la télévision, ce n'est pas très intéressant pour nous.", "Watching TV isn't very interesting for us.", "std"],
      ["Les réseaux sociaux, c'est nul, parce que…", "Social networks are rubbish, because…", "fam"],
      ["Je l'ai adoré, je vous le conseille !", "I loved it, I recommend it to you!", "std", true]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · reviewing a film", lanes: ["Samia", "Hugo"], av: ["f4", "m2"], steps: [
    { s: 0, fr: "Alors, ce film, tu l'as aimé ?", en: "So, did you like the film?" },
    { s: 1, fr: "Je l'ai adoré ! L'acteur joue très bien.", en: "I loved it! The actor is very good." },
    { s: 0, fr: "Moi, j'ai trouvé le début un peu long.", en: "I found the beginning a bit long." },
    { s: 1, fr: "C'est vrai, mais après, c'est passionnant.", en: "True, but afterwards it's fascinating." },
    { s: 0, fr: "Tu vas le conseiller à tes amis ?", en: "Will you recommend it to your friends?" },
    { s: 1, fr: "Oui, je vais le revoir avec eux !", en: "Yes, I'm going to see it again with them!" }
  ] },

  sounds: {
    intro: "Phonie-graphie: <b>final consonants</b>. Most final consonants are silent: [[français]], [[premier]], [[grand]]. In the feminine, an <b>e</b> is added and the consonant before it is pronounced: [[française]], [[première]], [[grande]].",
    letters: [
      { l: "-s / -se", name: "[z] in the feminine", tip: "[[français]] / [[française]] · [[curieux]] / [[curieuse]] · [[heureux]] / [[heureuse]]: silent s/x → [z].", ex: ["Il est français. Elle est française.", "Je suis curieux. Je suis curieuse."] },
      { l: "-d / -de · -t / -te", name: "[d] · [t]", tip: "[[grand]] / [[grande]] · [[rond]] / [[ronde]] · [[indépendant]] / [[indépendante]] · [[étudiant]] / [[étudiante]].", ex: ["un grand succès, une grande nouvelle", "un micro rond, la maison ronde"] },
      { l: "-er / -ère", name: "[e] → [ɛʁ]", tip: "[[premier]] (r silent) / [[première]] (r pronounced).", ex: ["le premier film", "la première série"] },
      { l: "-en / -enne", name: "[ɛ̃] → [ɛn]", tip: "The nasal opens: [[européen]] / [[européenne]].", ex: ["l'étudiant européen", "l'étudiante européenne"] }
    ],
    pairs: [
      { a: ["français", "French (m.)"], b: ["française", "French (f.)"], note: "silent / [z]" },
      { a: ["grand", "big (m.)"], b: ["grande", "big (f.)"], note: "silent / [d]" },
      { a: ["premier", "first (m.)"], b: ["première", "first (f.)"], note: "[e] / [ɛʁ]" },
      { a: ["je le vois", "I see him/it"], b: ["je l'ai vu", "I saw him/it"], note: "pronoun position" },
      { a: ["grâce à", "thanks to"], b: ["à cause de", "because of"], note: "😀 / 😞" },
      { a: ["que tu sois", "that you be"], b: ["que tu aies", "that you have"], note: "être / avoir" }
    ]
  },
  classify: {
    label: "🔚 Masculin ou féminin ?", q: "Listen: is the final consonant pronounced (feminine) or silent (masculine)?",
    options: ["masculin (muette)", "féminin (prononcée)"],
    items: [
      { say: "français", a: 0 }, { say: "française", a: 1 }, { say: "important", a: 0 }, { say: "importante", a: 1 },
      { say: "curieux", a: 0 }, { say: "curieuse", a: 1 }, { say: "premier", a: 0 }, { say: "première", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "La revue d'Abel sort tous les mois.", ok: false, explain: "Every three months." },
    { type: "mcq", tag: "Dialogue 1", q: "Chaque enquête est réalisée par…", options: ["un journaliste et un dessinateur", "un photographe", "des lecteurs"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "Alix ne regarde pas le journal télé…", options: ["à cause des images", "grâce aux images", "parce qu'elle n'a pas de télé"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Floriane ne lit que les titres.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Sur la plateforme de Léo, on ne parle que de jeux vidéo.", ok: false, explain: "Anyone can talk about cooking, music, the news…" },
    { type: "mcq", tag: "Dialogue 4", q: "Christine utilise les réseaux sociaux pour…", options: ["regarder les vidéos de ses petits-enfants", "vendre des objets", "chercher du travail"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Samia a trouvé les premières scènes ennuyeuses.", ok: true },
    { type: "fill", tag: "Préférence", sentence: "Je préfère les réseaux sociaux ___ médias traditionnels.", options: ["aux", "que les", "des"], answer: 0 },
    { type: "fill", tag: "Préférence", sentence: "J'aime ___ lire la presse en ligne.", options: ["mieux", "meilleur", "plus bien"], answer: 0 },
    { type: "fill", tag: "Cause / conséquence", sentence: "___ Internet, la presse papier a des difficultés.", options: ["À cause d'", "Grâce à", "Parce qu'"], answer: 0 },
    { type: "fill", tag: "Cause / conséquence", sentence: "Je suis toujours informée ___ réseaux sociaux.", options: ["grâce aux", "à cause des", "car les"], answer: 0 },
    { type: "fill", tag: "Cause / conséquence", sentence: "Les articles sont trop longs, ___ je ne lis que les titres.", options: ["c'est pourquoi", "parce que", "grâce à"], answer: 0 },
    { type: "fill", tag: "Cause / conséquence", sentence: "Il faut se méfier des réseaux sociaux ___ on y trouve de fausses nouvelles.", options: ["car", "donc", "grâce à"], answer: 0 },
    { type: "type", tag: "Cause / conséquence", q: "Join with c'est pourquoi: « Beaucoup de gens préfèrent la presse en ligne. Ils n'achètent plus le journal. »", answers: ["Beaucoup de gens préfèrent la presse en ligne, c'est pourquoi ils n'achètent plus le journal.", "Beaucoup de gens préfèrent la presse en ligne c'est pourquoi ils n'achètent plus le journal."] },
    { type: "fill", tag: "Subjonctif", sentence: "Il faut que tu ___ cette vidéo !", options: ["regardes", "regarderas", "regarder"], answer: 0 },
    { type: "fill", tag: "Subjonctif", sentence: "C'est bien que les personnes âgées ___ plus connectées.", options: ["soient", "sont", "seront"], answer: 0 },
    { type: "fill", tag: "Subjonctif", sentence: "Il est important que vous ___ l'esprit critique.", options: ["ayez", "avez", "aurez"], answer: 0 },
    { type: "fill", tag: "Subjonctif", sentence: "Il faut que nous ___ au cinéma ce soir.", options: ["allions", "allons", "irons"], answer: 0 },
    { type: "type", tag: "Subjonctif", q: "Complete: « Il ne faut pas que tu (utiliser) … ton téléphone en classe. »", answers: ["Il ne faut pas que tu utilises ton téléphone en classe.", "utilises"] },
    { type: "fill", tag: "Place des pronoms", sentence: "La télé ? Elle ne ___ regarde jamais.", options: ["la", "lui", "les"], answer: 0 },
    { type: "fill", tag: "Place des pronoms", sentence: "Les journaux, elle préfère ___ lire en ligne.", options: ["les", "leur", "la"], answer: 0 },
    { type: "type", tag: "Place des pronoms", q: "Replace « ce film »: « Nous allons voir ce film au cinéma. »", answers: ["Nous allons le voir au cinéma.", "Nous allons le voir au cinéma"] },
    { type: "type", tag: "Place des pronoms", q: "Replace « le dernier épisode »: « Je n'ai pas vu le dernier épisode. »", answers: ["Je ne l'ai pas vu.", "Je ne l'ai pas vu"] },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu t'intéresses à l'actualité ?", options: ["Oui, ça me passionne !", "Oui, à cause de.", "Oui, que je sois."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Alors, ce film, tu l'as aimé ?", options: ["Non, je me suis ennuyé, c'est décevant.", "Non, je le préfère aux podcasts.", "Non, grâce à lui."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu préfères la radio ou la télé ?", options: ["J'aime mieux la radio : je l'écoute en cuisinant.", "Je la regarde demain.", "Il faut que tu préfères."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Une personne qui écoute la radio :", options: ["un auditeur", "un internaute", "un dessinateur"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "« Être au courant » signifie…", options: ["être informé(e)", "être en retard", "être connecté(e) à l'électricité"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["l'article", "le numéro", "le journal", "le téléviseur"], answer: 3, explain: "le téléviseur is a TV set; the others are about the written press." },
    { type: "order", tag: "Construisez", en: "I prefer social networks to traditional media.", words: ["Je", "préfère", "les", "réseaux", "sociaux", "aux", "médias", "traditionnels."] },
    { type: "listen", tag: "Écoute", q: "Why doesn't the speaker watch the TV news?", say: "Je ne regarde pas le journal télé à cause des images, je préfère écouter la radio.", options: ["because of the images", "because it's too long", "because she has no TV"], answer: 0 }
  ],

  roleplays: [
    { title: "📱 Tes habitudes médias (DELF)", brief: "A friend asks how you get the news. Express your preferences and interests, and give reasons.", memo: ["J'aime mieux…", "Je préfère… à…", "parce que / à cause de / grâce à", "Ça m'intéresse…"], partner: "f8", you: "m3",
      turns: [
        { them: "Comment tu t'informes ?", themEn: "How do you get the news?", hint: "You prefer the online press to TV.", you: "Je préfère la presse en ligne à la télé.", youEn: "I prefer the online press to TV." },
        { them: "Pourquoi ?", themEn: "Why?", hint: "Because you choose the articles that interest you.", you: "Parce que je choisis les articles qui m'intéressent.", youEn: "Because I choose the articles that interest me." },
        { them: "Et quelles rubriques ?", themEn: "And which sections?", hint: "Ecology fascinates you; you're not very interested in sport.", you: "L'écologie, ça me passionne. Le sport, ça ne m'intéresse pas beaucoup.", youEn: "Ecology fascinates me. Sport doesn't interest me much." }
      ] },
    { title: "👵 Aide ta grand-mère", brief: "Your grandmother wants to join a social network. Give her advice with il faut que and c'est bien que.", memo: ["Il faut que tu…", "C'est bien que tu…", "Il est important que…"], partner: "f6", you: "m3",
      turns: [
        { them: "Je voudrais voir les photos de la famille sur Internet.", themEn: "I'd like to see the family photos online.", hint: "Say it's great that she wants to be connected.", you: "C'est super que tu veuilles être connectée !", youEn: "It's great that you want to be connected!" },
        { them: "Qu'est-ce que je dois faire ?", themEn: "What do I have to do?", hint: "She must open an account.", you: "Il faut que tu ouvres un compte.", youEn: "You need to open an account." },
        { them: "Et c'est dangereux ?", themEn: "And is it dangerous?", hint: "It's important that she checks information (infox).", you: "Il est important que tu vérifies les informations : il y a des infox.", youEn: "It's important that you check information: there's fake news." }
      ] },
    { title: "🎬 La critique d'un film", brief: "You've just seen a film with a friend. Give a review (positive or negative) and use pronouns.", memo: ["Je l'ai adoré / trouvé…", "Je vais le revoir.", "Je ne le conseille pas…"], partner: "f4", you: "m2",
      turns: [
        { them: "Alors, tu l'as aimé ?", themEn: "So, did you like it?", hint: "You loved it; the actress plays very well.", you: "Je l'ai adoré ! L'actrice joue très bien.", youEn: "I loved it! The actress is very good." },
        { them: "Et l'histoire ?", themEn: "And the story?", hint: "Fascinating, but too many special effects.", you: "Elle est passionnante, mais il y a trop d'effets spéciaux.", youEn: "It's fascinating, but there are too many special effects." },
        { them: "Tu vas le conseiller ?", themEn: "Will you recommend it?", hint: "Yes, you'll recommend it to your parents.", you: "Oui, je vais le conseiller à mes parents.", youEn: "Yes, I'm going to recommend it to my parents." }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Faire la critique d'un média", intro: "In groups, listen to opinions about a medium, take notes, then record a podcast (or give a talk) with your own positive and/or negative review of a medium.",
      steps: [["Préparation", ["Each group takes a document (about podcasts, social networks or television) and answers: is the medium presented positively or negatively? Why? With what arguments?", "Pool your answers. Do you agree with the reasons given?", "Note-taking strategy: listen several times; first find the topic; use the title for key words; don't write everything, just key words and main ideas; the speaker's intonation shows key words and where an idea ends."]], ["Réalisation", ["Choose a medium (from the documents or another: celebrity press, science magazines, cinema…).", "Fill in a table: positive points / negative points. Are you for or against?", "Prepare a positive and/or negative review and share out the parts.", "Record a podcast or prepare a slideshow."]], ["Présentation", ["Play or present your review to the class.", "Ask the others to react: do they agree?"]]],
      phrases: ["Grâce à ce média…", "C'est intéressant d'écouter des podcasts parce que…", "À cause de ce média…", "Les réseaux sociaux, c'est nul, parce que…", "C'est pour ça que…"],
      model: { type: "card", style: "board", caption: "🎙️ Example review · tap a line", title: "NOTRE CRITIQUE : LES PODCASTS", sub: "points positifs · points négatifs", rows: [["👍 On les écoute partout", "dans les transports, en cuisinant, en faisant du sport", "Grâce aux podcasts, on peut apprendre partout : dans les transports ou en cuisinant."], ["👍 Des sujets variés", "histoire, sciences, langues, faits divers…", "Il y a des podcasts sur tous les sujets, c'est pour ça qu'on les adore."], ["👎 Trop de choix", "difficile de trouver les bons podcasts", "Le problème, c'est qu'il y a trop de choix."], ["👎 Pas d'images", "pour certains sujets, c'est moins clair", "À cause de l'absence d'images, certains sujets sont moins clairs."]], foot: "Notre avis : on recommande !" } }
  ],
  delf: {
    skill: "Production orale", title: "Talking about your media habits and preferences",
    about: "A DELF A2-style speaking exchange from this unit (book activity B6): with a partner, talk about how you get information and express your preferences. You must say <b>what</b> you use, <b>how often</b>, <b>why</b> (cause), and <b>what you prefer</b>, and react to your partner.",
    tips: ["Preference: [[J'aime mieux…]] · [[Je préfère A à B.]]", "Reasons: [[parce que]] + clause, [[grâce à]] / [[à cause de]] + noun.", "Frequency: [[tous les jours]], [[souvent]], [[de temps en temps]], [[jamais]].", "React: [[Ah bon ? Pourquoi ?]] · [[Moi aussi !]] · [[Moi non plus.]] · [[Je ne suis pas d'accord.]]"],
    items: [
      { type: "mcq", q: "Which sentence expresses a preference?", options: ["J'aime mieux écouter la radio que regarder la télé.", "J'écoute la radio.", "La radio est un média."], answer: 0 },
      { type: "mcq", q: "Which sentence gives a positive cause?", options: ["Grâce aux podcasts, j'apprends beaucoup.", "À cause des podcasts, je dors mal.", "Les podcasts sont longs."], answer: 0 },
      { type: "mcq", q: "Your partner says « Je ne regarde jamais la télé. » You agree:", options: ["Moi non plus !", "Moi aussi !", "Moi si !"], answer: 0 },
      { type: "mcq", q: "You want to know why:", options: ["Ah bon ? Pourquoi ?", "Grâce à quoi ?", "C'est pourquoi."], answer: 0 },
      { type: "mcq", q: "Which sentence shows interest?", options: ["Les documentaires scientifiques, ça me passionne !", "Les documentaires, je les regarde.", "Il faut que je regarde."], answer: 0 }
    ]
  },
  detente: {
    title: "Info ou infox ?",
    intro: "Facts from the book's culture pages. True information or fake news?",
    items: [
      { type: "mcq", q: "« La tour Eiffel a été le plus haut monument du monde pendant 40 ans, jusqu'au Chrysler Building en 1930. »", options: ["info ✅", "infox ❌"], answer: 0 },
      { type: "mcq", q: "« La Maison de la Radio, à Paris, est appelée « la maison carrée ». »", options: ["infox ❌ (c'est « la maison ronde »)", "info ✅"], answer: 0 },
      { type: "mcq", q: "« Les Français font plus confiance à la radio qu'à Internet pour s'informer. »", options: ["info ✅ (52 % contre 28 %)", "infox ❌"], answer: 0 },
      { type: "mcq", q: "« Au début, la plateforme Twitch était surtout utilisée par les joueurs de jeux vidéo. »", options: ["info ✅", "infox ❌"], answer: 0 },
      { type: "mcq", q: "« Les podcasts natifs sont plus écoutés que la radio en France. »", options: ["infox ❌ (10 % contre 91 %)", "info ✅"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "📊 Oh, le cliché ! « Les Français ne font pas confiance aux médias. » · Share of French people who trust the news on… (figures quoted by the book)", unit: " %", items: [
      { fr: "la radio", en: "radio", v: 52, pic: "📻" }, { fr: "les journaux", en: "newspapers", v: 48, pic: "📰" }, { fr: "la télévision", en: "television", v: 42, pic: "📺" }, { fr: "Internet", en: "the Internet", v: 28, pic: "🌐" }
    ] }
  ],
  culture: [
    { icon: "📻", kind: "Oh, le cliché !", t: "« Les Français ne font pas confiance aux médias. »", d: "Partly: according to the figures quoted by the book, 52 % of French people trust radio news, 48 % newspapers and 42 % TV news, but only 28 % think information on the Internet is credible." },
    { icon: "⭕", kind: "Civilisation", t: "La Maison de la Radio", d: "In Paris, the round building of Radio France is nicknamed <b>« la maison ronde »</b>. Around 4,000 professionals work there, for several radio stations each with its own colour. A comic-book reporter even told its story in a BD." },
    { icon: "🗼", kind: "Au fait !", t: "La tour Eiffel grandit !", d: "The Eiffel Tower was the tallest monument in the world for 40 years, until the Chrysler Building was built in 1930. New antennas installed at the top for radio and TV have made it a few metres taller over time." },
    { icon: "✏️", kind: "Civilisation", t: "L'actualité en BD", d: "Some French magazines tell the news in comics: each long investigation is made by a journalist and a cartoonist, and the magazine comes out only a few times a year to take the time to research." },
    { icon: "🎙️", kind: "Au fait !", t: "Le succès des podcasts", d: "Podcasts are more and more popular in France: you can listen anywhere, while cooking or on public transport, on every topic. But according to the figures quoted by the book, live radio is still far ahead." },
    { icon: "🔎", kind: "Langue", t: "Infox", d: "<b>Infox</b> (from <i>information</i> + <i>intox</i>, intoxication) is the official French word for <i>fake news</i>. You also hear <i>fausses nouvelles</i>." }
  ],
  tips: [
    { icon: "😀", t: "grâce à vs à cause de", d: "Both + noun. grâce à = good result, à cause de = bad result." },
    { icon: "🧩", t: "Subjunctive shortcut", d: "For -er verbs, je/tu/il/ils = present: [[que je regarde]]. nous/vous = imparfait: [[que nous regardions]]." },
    { icon: "📍", t: "Pronoun + infinitive", d: "When there's an infinitive, the pronoun goes right before it: [[Je vais le voir.]] [[Je veux la lire.]]" }
  ],
  mistakes: [
    ["Je préfère la radio que la télé.", "Je préfère la radio à la télé.", "préférer A à B"],
    ["Grâce à la pluie, le match est annulé.", "À cause de la pluie, le match est annulé.", "negative cause → à cause de"],
    ["à cause le mauvais temps", "à cause du mauvais temps", "de + le = du"],
    ["Il faut que tu es là.", "Il faut que tu sois là.", "subjunctive of être"],
    ["Il faut que nous allons au cinéma.", "Il faut que nous allions au cinéma.", "subjunctive of aller"],
    ["Je vais voir le.", "Je vais le voir.", "pronoun before the infinitive"],
    ["J'ai le vu.", "Je l'ai vu.", "pronoun before the auxiliary"],
    ["Je les ai trouvé nulles. (les scènes)", "Je les ai trouvées nulles.", "COD before avoir → agreement"]
  ]
});
