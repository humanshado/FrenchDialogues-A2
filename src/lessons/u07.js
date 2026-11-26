// Unité 7 · À votre santé ! (Édito A2, 2e édition, book pp. 97–110)
// Situations: bien dormir · le bar à sieste · à la pharmacie · les plantes qui soignent · un accident · les gestes de premiers secours
// Grammar: les pronoms COD et COI · le superlatif · les pronoms interrogatifs lequel, laquelle, lesquels, lesquelles
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u07", rubrique: 4, num: 7,
  title: "To your health!",
  titleFr: "À votre santé !",
  pages: "Book pp. 97–110",
  opener: { fr: "Ça va vous faire le plus grand bien !", en: "It'll do you a world of good!" },
  hero: { scene: "pharmacie", staff: "La pharmacienne", people: { "La pharmacienne": "f5", "M. Rousseau": "m6" } },
  situations: [
    ["😴", "Bien dormir", "advice: [[Je vous recommande de dormir sur le côté.]] · [[Je vous déconseille de dormir sur le ventre.]]"],
    ["🛋️", "Le bar à sieste", "well-being: [[Je me sens léger, reposé, apaisé.]]"],
    ["💊", "À la pharmacie", "health problems: [[Je suis un peu patraque.]] · [[J'ai le nez bouché.]]"],
    ["🌿", "Les plantes qui soignent", "superlatives: [[C'est la plante la plus efficace contre le rhume.]]"],
    ["🚑", "Urgence !", "points of view and choices: [[À mon avis, il faut appeler les secours.]] · [[Lequel tu composes ?]]"]
  ],
  goals: [
    "Give health and well-being advice: [[Je vous recommande de…]], [[Il est conseillé de…]], [[Évitez de…]], [[Pensez à…]]",
    "Talk about health problems: [[Je suis patraque.]], [[J'ai mal à la gorge.]], [[Je tousse.]], [[J'ai de la fièvre.]]",
    "Use direct (COD) and indirect (COI) object pronouns: [[je le prends]], [[je lui conseille]], [[l'oreiller leur évite des tensions]]",
    "Use the superlative: [[le plus / le moins]] + adjective; [[le meilleur]], [[le mieux]]",
    "Give your point of view: [[Pour moi…]], [[Je trouve que…]], [[À mon avis…]]",
    "Ask which one: [[lequel]], [[laquelle]], [[lesquels]], [[lesquelles]]",
    "Know the emergency numbers: [[le 15]], [[le 17]], [[le 18]], [[le 112]], [[le 114]]"
  ],
  glance: [
    ["🗣️", "Communication", "advice · health problems · points of view · emergencies"],
    ["🧩", "Grammaire", "COD and COI pronouns · the superlative (incl. le meilleur, le mieux) · lequel, laquelle…"],
    ["🗂️", "Vocabulaire", "the body · sleep · feeling good · pain · positions · ailments · treatments · emergencies"],
    ["🔊", "Phonie-graphie", "plus: [ply], [plys] or [plyz]?"],
    ["⭐", "The phrase to learn first", "[[Je suis un peu patraque.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "How to sleep well", titleFr: "À la radio · Pour bien dormir…",
      note: "Nicolas, a well-being coach, gives a listener advice on sleeping positions. Listen to the object pronouns: [[vous]], [[le]], [[lui]], [[leur]].",
      scene: "bureau", staff: "Le coach", people: { "Le coach": "m5", "L'auditrice": "f3" },
      lines: [
        ["L'auditrice", "Bonjour, Nicolas. Le matin, je ne suis jamais en pleine forme et j'ai mal au dos. Qu'est-ce que vous me conseillez ?", "Hello, Nicolas. In the morning I'm never on top form and my back hurts. What do you advise?"],
        ["Le coach", "Vous dormez dans quelle position ?", "Which position do you sleep in?"],
        ["L'auditrice", "Sur le ventre, en général.", "On my front, usually."],
        ["Le coach", "Je vous déconseille de dormir sur le ventre : c'est mauvais pour le dos. Évitez les positions qui lui imposent des tensions.", "I advise you not to sleep on your front: it's bad for your back. Avoid positions that put tension on it."],
        ["L'auditrice", "Alors, sur le côté ?", "On my side, then?"],
        ["Le coach", "Oui, si vous avez mal au dos, je vous recommande de dormir sur le côté. Posez votre tête au milieu de l'oreiller et mettez un autre oreiller entre vos jambes.", "Yes, if your back hurts, I recommend sleeping on your side. Put your head in the middle of the pillow and another pillow between your legs."],
        ["L'auditrice", "Et sur le dos ?", "And on my back?"],
        ["Le coach", "Mettez un oreiller sous vos genoux : il leur évite des tensions inutiles. Et au réveil, restez allongée quelques minutes et étirez-vous !", "Put a pillow under your knees: it saves them unnecessary strain. And when you wake up, stay lying down for a few minutes and stretch!"]
      ],
      glossary: [["Je vous recommande / déconseille de…", "I recommend / advise against…"], ["être en pleine forme", "to be on top form"], ["l'oreiller", "the pillow"], ["s'étirer", "to stretch"]]
    },
    {
      id: "d2", n: 2, title: "The nap bar", titleFr: "Au bar à sieste · Faire le vide dans sa tête",
      note: "Victor sleeps badly and is exhausted at work. A colleague recommends a nap bar. Listen to how he feels afterwards.",
      scene: "cafe", staff: "L'hôtesse", people: { "L'hôtesse": "f2", "Victor": "m2" },
      lines: [
        ["L'hôtesse", "Bonjour ! C'est votre première sieste chez nous ?", "Hello! Is this your first nap with us?"],
        ["Victor", "Oui. Je manque de sommeil, je bâille toute la journée… Mon collègue m'a conseillé votre bar.", "Yes. I'm short of sleep, I yawn all day… My colleague recommended your bar to me."],
        ["L'hôtesse", "Vous avez bien fait ! Je vous propose une sieste de vingt minutes dans un fauteuil massant, avec une musique douce.", "You did the right thing! I suggest a twenty-minute nap in a massage chair, with soft music."],
        ["Victor", "Vingt minutes, ça suffit ?", "Is twenty minutes enough?"],
        ["L'hôtesse", "Oui. Respirez lentement, relâchez vos muscles et faites le vide dans votre tête.", "Yes. Breathe slowly, relax your muscles and empty your mind."],
        ["L'hôtesse", "Alors, comment vous sentez-vous ?", "So, how do you feel?"],
        ["Victor", "Incroyable ! Je me sens léger, reposé… J'ai du mal à redescendre sur terre !", "Incredible! I feel light, rested… I'm finding it hard to come back down to earth!"]
      ],
      glossary: [["manquer de sommeil", "to be short of sleep"], ["bâiller", "to yawn"], ["faire le vide dans sa tête", "to empty one's mind"], ["redescendre sur terre", "to come back to reality"]]
    },
    {
      id: "d3", n: 3, title: "At the pharmacy", titleFr: "Chez la pharmacienne · Je suis un peu patraque",
      note: "M. Rousseau doesn't feel well. The pharmacist asks about his symptoms and advises him. Listen to the health problems and the remedies.",
      scene: "pharmacie", staff: "La pharmacienne", people: { "La pharmacienne": "f5", "M. Rousseau": "m6" },
      lines: [
        ["La pharmacienne", "Bonjour, monsieur. Qu'est-ce qui ne va pas ?", "Hello. What's wrong?"],
        ["M. Rousseau", "Je suis un peu patraque en ce moment. Je me sens fatigué et j'ai le nez bouché.", "I'm a bit under the weather at the moment. I feel tired and my nose is blocked."],
        ["La pharmacienne", "Vous toussez ? Vous avez mal à la gorge ?", "Are you coughing? Do you have a sore throat?"],
        ["M. Rousseau", "Oui, je tousse beaucoup la nuit. Mais je n'ai pas de fièvre.", "Yes, I cough a lot at night. But I don't have a temperature."],
        ["La pharmacienne", "Vous avez consulté votre médecin ?", "Have you seen your doctor?"],
        ["M. Rousseau", "Non, pas encore. C'est juste un rhume, je pense.", "No, not yet. It's just a cold, I think."],
        ["La pharmacienne", "Alors je vous donne ce sirop pour la toux, et des gouttes pour le nez. Mettez-les trois fois par jour. Et buvez une tisane au thym : ça va vous faire le plus grand bien !", "Then I'll give you this cough syrup, and some nose drops. Put them in three times a day. And drink a thyme tea: it'll do you a world of good!"],
        ["M. Rousseau", "Merci. Et si ça ne va pas mieux ?", "Thank you. And if it doesn't get better?"],
        ["La pharmacienne", "Dans trois jours, s'il n'y a pas d'amélioration, il faudra consulter.", "In three days, if there's no improvement, you'll need to see a doctor."]
      ],
      glossary: [["être patraque", "to be under the weather"], ["avoir le nez bouché", "to have a blocked nose"], ["tousser, la toux", "to cough, the cough"], ["le sirop, les gouttes", "syrup, drops"]]
    },
    {
      id: "d4", n: 4, title: "Healing plants", titleFr: "À l'herboristerie · Les meilleures plantes",
      note: "Inès, a student before her exams, asks a herbalist for advice. Listen to the superlatives: [[le plus]], [[le moins]], [[la meilleure]], [[le mieux]].",
      scene: "epicerie", staff: "L'herboriste", people: { "L'herboriste": "m4", "Inès": "f2" },
      lines: [
        ["Inès", "Bonjour ! J'ai des examens la semaine prochaine. Je suis stressée et je dors mal. Quelles sont les meilleures plantes pour moi ?", "Hello! I've got exams next week. I'm stressed and I sleep badly. What are the best plants for me?"],
        ["L'herboriste", "Pour la mémoire et la concentration, c'est le romarin. Il donne du tonus et c'est lui qui soulage le mieux les migraines.", "For memory and concentration, it's rosemary. It gives you energy and it's the best for relieving migraines."],
        ["Inès", "Et pour dormir ?", "And for sleeping?"],
        ["L'herboriste", "La lavande aide à s'endormir. Et le millepertuis, c'est peut-être la plante la moins connue, mais c'est un excellent remède contre l'insomnie et l'anxiété.", "Lavender helps you fall asleep. And St John's wort is perhaps the least-known plant, but it's an excellent remedy for insomnia and anxiety."],
        ["Inès", "Et si j'attrape un rhume ?", "And if I catch a cold?"],
        ["L'herboriste", "L'eucalyptus, c'est la plus efficace des plantes contre les rhumes et la fièvre.", "Eucalyptus is the most effective plant against colds and fever."],
        ["Inès", "Lesquelles vous me conseillez de prendre maintenant ?", "Which ones do you recommend I take now?"],
        ["L'herboriste", "Le romarin le matin et la lavande le soir. Bonne chance pour vos examens !", "Rosemary in the morning and lavender in the evening. Good luck with your exams!"]
      ],
      glossary: [["le / la / les plus + adjectif", "the most…"], ["le / la / les moins + adjectif", "the least…"], ["la meilleure", "the best (adjective)"], ["le mieux", "the best (adverb)"]]
    },
    {
      id: "d5", n: 5, title: "An accident", titleFr: "Dans la rue · Appeler les secours",
      note: "Lucas sees a cyclist fall in the street. He calls the European emergency number. Listen to the emergency vocabulary and the order: protect, alert, help.",
      scene: "rue", people: { "Lucas": "m3", "L'opératrice": "f6" }, phone: ["Lucas", "L'opératrice"],
      lines: [
        ["L'opératrice", "Cent douze, j'écoute.", "112, I'm listening."],
        ["Lucas", "Bonjour, il y a eu un accident de vélo devant chez moi. Une femme est tombée, elle est blessée à la jambe.", "Hello, there's been a bike accident outside my house. A woman fell, her leg is injured."],
        ["L'opératrice", "Quelle est l'adresse exacte ?", "What's the exact address?"],
        ["Lucas", "Douze, rue des Lilas, à Nantes, devant la boulangerie.", "Twelve, rue des Lilas, in Nantes, in front of the bakery."],
        ["L'opératrice", "La victime est consciente ? Elle respire ?", "Is the victim conscious? Is she breathing?"],
        ["Lucas", "Oui, elle me parle. Mais elle a très mal et elle ne peut pas se lever.", "Yes, she's talking to me. But she's in a lot of pain and can't get up."],
        ["L'opératrice", "Ne la bougez pas. Une ambulance arrive. Si possible, envoyez quelqu'un à la rencontre des secours.", "Don't move her. An ambulance is on its way. If possible, send someone to meet the emergency services."],
        ["Lucas", "D'accord, mon voisin va les attendre au coin de la rue.", "OK, my neighbour will wait for them at the corner of the street."]
      ],
      glossary: [["les secours", "the emergency services"], ["le / la blessé(e), la victime", "the injured person, the victim"], ["consciente, respirer", "conscious, to breathe"], ["à la rencontre de", "to go and meet"]]
    },
    {
      id: "d6", n: 6, title: "First aid for everyone?", titleFr: "À la pause · Les gestes qui sauvent",
      note: "Two colleagues discuss first-aid training. Listen to how they give their point of view, and to [[lequel]] / [[laquelle]].",
      scene: "bureau", people: { "Sonia": "f4", "Paul": "m6" },
      lines: [
        ["Sonia", "Tu savais que seulement vingt pour cent des Français sont formés aux gestes de premiers secours ?", "Did you know only twenty per cent of French people are trained in first aid?"],
        ["Paul", "Seulement ? Pour moi, ce n'est pas suffisant !", "Only? For me, that's not enough!"],
        ["Sonia", "Je trouve que les formations gratuites ne sont pas assez nombreuses. À mon avis, il faut les enseigner à l'école.", "I find there aren't enough free courses. In my opinion, they should be taught at school."],
        ["Paul", "Je suis d'accord. Moi, je ne sais même pas quel numéro appeler. Il y en a trois ou quatre : lequel faut-il composer ?", "I agree. I don't even know which number to call. There are three or four: which one should you dial?"],
        ["Sonia", "Le 112 marche partout dans l'Union européenne. Sinon, le 15 pour le SAMU, le 18 pour les pompiers…", "112 works everywhere in the European Union. Otherwise 15 for the SAMU, 18 for the fire brigade…"],
        ["Paul", "Il y a une formation ce samedi à la mairie. Tu veux venir ?", "There's a course this Saturday at the town hall. Do you want to come?"],
        ["Sonia", "Laquelle ? Celle du matin ou celle de l'après-midi ?", "Which one? The morning one or the afternoon one?"],
        ["Paul", "Celle du matin. On s'inscrit ensemble ?", "The morning one. Shall we sign up together?"]
      ],
      glossary: [["Pour moi…", "For me…"], ["Je trouve que… · À mon avis…", "I find that… · In my opinion…"], ["lequel ? laquelle ?", "which one? (m. / f.)"], ["les gestes de premiers secours", "first-aid techniques"]]
    }
  ],

  vocab: [
    { t: "le cerveau", en: "the brain", pic: "🧠", cat: "Les parties du corps", g: "m" },
    { t: "le cou", en: "the neck", pic: "🦒", cat: "Les parties du corps", g: "m" },
    { t: "l'épaule", en: "the shoulder", pic: "💪", cat: "Les parties du corps", g: "f" },
    { t: "le dos, la colonne vertébrale", en: "the back, the spine", pic: "🦴", cat: "Les parties du corps", g: "m" },
    { t: "le ventre", en: "the stomach, belly", pic: "🫃", cat: "Les parties du corps", g: "m" },
    { t: "la cuisse", en: "the thigh", pic: "🦵", cat: "Les parties du corps", g: "f" },
    { t: "le genou", en: "the knee", pic: "🦵", cat: "Les parties du corps", g: "m", note: "pl. les genoux" },
    { t: "la cheville", en: "the ankle", pic: "🦶", cat: "Les parties du corps", g: "f" },
    { t: "le bâillement, bâiller", en: "the yawn, to yawn", pic: "🥱", cat: "Le sommeil", g: "m" },
    { t: "manquer de sommeil", en: "to be short of sleep", pic: "😪", cat: "Le sommeil" },
    { t: "le repos, le rêve", en: "rest, the dream", pic: "💤", cat: "Le sommeil", g: "m" },
    { t: "la respiration, respirer", en: "breathing, to breathe", pic: "🌬️", cat: "Le sommeil", g: "f" },
    { t: "s'endormir ≠ se réveiller, le réveil", en: "to fall asleep ≠ to wake up, waking", pic: "⏰", cat: "Le sommeil" },
    { t: "la sieste", en: "the nap", pic: "😴", cat: "Se sentir bien", g: "f" },
    { t: "être en pleine forme", en: "to be on top form", pic: "💯", cat: "Se sentir bien" },
    { t: "apaisé(e), relaxé(e), reposé(e)", en: "calm, relaxed, rested", pic: "😌", cat: "Se sentir bien" },
    { t: "se sentir léger, légère", en: "to feel light", pic: "🪶", cat: "Se sentir bien" },
    { t: "récupérer = se remettre", en: "to recover", pic: "🔋", cat: "Se sentir bien" },
    { t: "masser, relâcher ses muscles", en: "to massage, to relax one's muscles", pic: "💆", cat: "Se sentir bien" },
    { t: "adopter de bonnes habitudes", en: "to adopt good habits", pic: "✅", cat: "Se sentir bien" },
    { t: "avoir mal, souffrir", en: "to be in pain, to suffer", pic: "🤕", cat: "La douleur" },
    { t: "la courbature", en: "the ache, stiffness", pic: "😣", cat: "La douleur", g: "f" },
    { t: "la tension", en: "tension", pic: "😬", cat: "La douleur", g: "f" },
    { t: "soulager", en: "to relieve", pic: "🫶", cat: "La douleur" },
    { t: "allongé(e), assis(e), debout", en: "lying down, sitting, standing", pic: "🛌", cat: "Les positions" },
    { t: "s'étirer, se lever", en: "to stretch, to get up", pic: "🙆", cat: "Les positions" },
    { t: "le rhume, la toux, le nez bouché", en: "cold, cough, blocked nose", pic: "🤧", cat: "Les maux", g: "m" },
    { t: "le mal de gorge, la fièvre", en: "sore throat, temperature", pic: "🌡️", cat: "Les maux", g: "m" },
    { t: "la migraine", en: "the migraine", pic: "🤯", cat: "Les maux", g: "f" },
    { t: "l'allergie, l'asthme", en: "allergy, asthma", pic: "🌼", cat: "Les maux", g: "f" },
    { t: "l'infection, l'indigestion", en: "infection, indigestion", pic: "🦠", cat: "Les maux", g: "f" },
    { t: "l'insomnie, l'anxiété, le stress", en: "insomnia, anxiety, stress", pic: "😰", cat: "Les maux", g: "f" },
    { t: "consulter un(e) médecin", en: "to see a doctor", pic: "🩺", cat: "Se soigner" },
    { t: "le traitement, le remède", en: "the treatment, the remedy", pic: "💊", cat: "Se soigner", g: "m" },
    { t: "le sirop, les gouttes", en: "syrup, drops", pic: "🧴", cat: "Se soigner", g: "m" },
    { t: "l'antibiotique, l'antiseptique", en: "antibiotic, antiseptic", pic: "💉", cat: "Se soigner", g: "m" },
    { t: "calmer (une douleur)", en: "to ease (a pain)", pic: "🌿", cat: "Se soigner" },
    { t: "la tisane = l'infusion", en: "herbal tea", pic: "🍵", cat: "Se soigner", g: "f" },
    { t: "l'accident, la victime, le / la blessé(e)", en: "accident, victim, injured person", pic: "🚨", cat: "Les urgences", g: "m" },
    { t: "l'ambulance, l'ambulancier, l'ambulancière", en: "ambulance, paramedic", pic: "🚑", cat: "Les urgences", g: "f" },
    { t: "le pompier, la pompière", en: "the firefighter", pic: "🚒", cat: "Les urgences" },
    { t: "le policier, la policière", en: "the police officer", pic: "👮", cat: "Les urgences" },
    { t: "le SAMU", en: "the emergency medical service", pic: "🏥", cat: "Les urgences", g: "m" },
    { t: "le numéro d'urgence, l'appel", en: "emergency number, the call", pic: "☎️", cat: "Les urgences", g: "m" },
    { t: "être patraque", en: "to be under the weather", pic: "🤒", cat: "Expressions" },
    { t: "donner du tonus", en: "to give energy", pic: "⚡", cat: "Expressions" },
    { t: "faire le plus grand bien", en: "to do a world of good", pic: "🌞", cat: "Expressions" }
  ],

  grammar: [
    {
      id: "g-conseils",
      title: "Health advice · the body",
      body: [
        "Advice: [[Je vous recommande de dormir sur le côté.]] · [[Je vous déconseille de dormir sur le ventre.]] · [[Il est conseillé / déconseillé de…]] · [[Évitez de…]] · [[Attention à…]] · [[Pensez à…]] · [[Il est important de…]] · [[Le mieux, c'est de…]]",
        "Recommander / déconseiller <b>à</b> quelqu'un <b>de</b> faire quelque chose: [[Je lui conseille de faire la sieste.]]"
      ],
      info: { type: "body", note: "Tap a part of the body. Remember: <b>avoir mal au</b> dos / ventre / pied, <b>à la</b> tête / gorge / jambe, <b>à l'</b>épaule / oreille, <b>aux</b> dents / yeux." }
    },
    {
      id: "g-cod-coi",
      title: "Direct (COD) and indirect (COI) object pronouns",
      body: [
        "<b>COD</b> (answers <i>qui ? quoi ?</i>, no preposition): [[me, te, le / la / l', nous, vous, les]]: [[Tu as acheté l'oreiller parfait ? — Oui, je l'ai acheté.]]",
        "<b>COI</b> (answers <i>à qui ?</i>, verb + [[à]]): [[me, te, lui, nous, vous, leur]]: [[Tu donnes des conseils à Hamid ? — Oui, je lui conseille de dormir sur le côté.]]",
        "Verbs with a COI (quelque chose <b>à</b> quelqu'un): [[apporter, conseiller, demander, donner, écrire, expliquer, lire, offrir, prêter, emprunter, répondre, téléphoner]]. Only the 3rd person is different: [[le, la, les]] ≠ [[lui, leur]]."
      ],
      info: { type: "compare", title: "🎯 COD or COI?", cols: [
        { head: "COD · qui ? quoi ?", en: "le, la, l', les", color: "#3a6fd8", lines: [["J'aime la sieste. → Je l'aime.", "I love it."], ["Tu prends ton oreiller ? → Tu le prends ?", "Are you taking it?"], ["Elle met ses gouttes. → Elle les met.", "She puts them in."]] },
        { head: "COI · à qui ?", en: "lui, leur", color: "#9b4fb0", lines: [["J'écris au médecin. → Je lui écris.", "I write to him/her."], ["J'offre une sieste à mon frère. → Je lui offre une sieste.", "I give him a nap."], ["Elle téléphone à ses parents. → Elle leur téléphone.", "She phones them."]] }
      ] },
      widget: {
        type: "sort", label: "le / la / les or lui / leur?",
        cols: [{ k: "cod", label: "COD · le, la, les", color: "#3a6fd8" }, { k: "coi", label: "COI · lui, leur", color: "#9b4fb0" }],
        items: [
          { t: "J'aime beaucoup faire la sieste.", k: "cod", say: "Je l'aime beaucoup." }, { t: "Vous écrirez un courrier à ce spécialiste.", k: "coi", say: "Vous lui écrirez un courrier." },
          { t: "J'offre une séance au bar à sieste à mon frère.", k: "coi", say: "Je lui offre une séance au bar à sieste." }, { t: "Béatrice ne téléphone jamais à ses parents le soir.", k: "coi", say: "Béatrice ne leur téléphone jamais le soir." },
          { t: "Tu emportes ton réveil ?", k: "cod", say: "Tu l'emportes ?" }, { t: "Il prend ses gouttes trois fois par jour.", k: "cod", say: "Il les prend trois fois par jour." }
        ]
      }
    },
    {
      id: "g-sante",
      title: "Talking about health problems",
      body: [
        "The pharmacist / doctor: [[Qu'est-ce qui ne va pas ?]] · [[Vous avez consulté votre médecin ?]] · [[Vous toussez ?]] · [[Vous avez mal à la gorge ?]] · [[Vous avez de la fièvre ?]]",
        "The patient: [[Je suis un peu patraque.]] · [[Je me sens fatigué(e).]] · [[J'ai le nez bouché.]] · [[J'ai mal à la tête.]] · [[Je tousse beaucoup la nuit.]]"
      ],
      info: { type: "card", style: "receipt", caption: "🧾 The pharmacist's advice · tap a line", title: "PHARMACIE DU CENTRE", sub: "conseils pour M. Rousseau", rows: [
        ["Sirop pour la toux", "1 cuillère, matin et soir", "Un sirop pour la toux, une cuillère matin et soir."], ["Gouttes pour le nez", "3 fois par jour", "Des gouttes pour le nez, trois fois par jour."],
        ["Tisane au thym", "le soir, bien chaude", "Une tisane au thym le soir."], ["Si pas d'amélioration", "consulter dans 3 jours", "S'il n'y a pas d'amélioration dans trois jours, consultez votre médecin."]
      ], foot: "Bon rétablissement !" }
    },
    {
      id: "g-superlatif",
      title: "The superlative: [[le plus]], [[le moins]], [[le meilleur]], [[le mieux]]",
      body: [
        "Superiority: [[le / la / les plus]] + adjective (+ [[de]] + noun): [[L'eucalyptus est la plus efficace des plantes contre le rhume.]] · [[C'est l'infirmière la plus sympathique de l'hôpital.]]",
        "Inferiority: [[le / la / les moins]] + adjective: [[C'est la plante la moins connue de cette liste.]]",
        "[[bon]] → [[le meilleur, la meilleure, les meilleur(e)s]] (adjective, with a noun): [[Ce sont les meilleures plantes pour les tisanes.]] · [[bien]] → [[le mieux]] (adverb, with a verb): [[C'est le romarin qui soulage le mieux les migraines.]]"
      ],
      info: { type: "ladder", title: "🌿 Which plant for what? (the book's herbal-tea guide)", levels: [
        { name: "l'eucalyptus", en: "the most effective against colds and fever", color: "#2f9c8a", ex: ["C'est la plus efficace des plantes contre les rhumes."] },
        { name: "le romarin", en: "relieves migraines best; memory, concentration", color: "#3a6fd8", ex: ["C'est le romarin qui soulage le mieux les migraines."] },
        { name: "le thym", en: "sore throat, cough, colds, digestion", color: "#7d9a2e", ex: ["Le thym est un formidable remède."] },
        { name: "la lavande", en: "helps you fall asleep; skin, insect bites", color: "#9b4fb0", ex: ["La lavande aide à s'endormir."] },
        { name: "le millepertuis", en: "perhaps the least known: insomnia, anxiety", color: "#e0a526", ex: ["C'est peut-être la plante la moins connue."] },
        { name: "l'échinacée", en: "immune system, allergies", color: "#e86a2e", ex: ["Elle aide le système immunitaire."] }
      ] },
      widget: {
        type: "combo", label: "Make a superlative",
        rows: [{ k: "plus", label: "+ le plus / le meilleur" }, { k: "moins", label: "− le moins" }],
        cols: [{ k: "plante", label: "🌿 cette plante / efficace" }, { k: "livre", label: "📗 ce livre / intéressant" }, { k: "doc", label: "🎬 ce documentaire / bon" }, { k: "lit", label: "🛏️ ce lit / cher" }],
        out: {
          "plus|plante": ["C'est la plante la plus efficace contre le rhume.", "It's the most effective plant against colds."], "moins|plante": ["C'est la plante la moins efficace.", "It's the least effective plant."],
          "plus|livre": ["C'est le livre le plus intéressant sur les plantes.", "It's the most interesting book on plants."], "moins|livre": ["C'est le livre le moins intéressant.", "It's the least interesting book."],
          "plus|doc": ["C'est le meilleur documentaire sur le corps humain.", "It's the best documentary on the human body.", "bon → le meilleur (not le plus bon)"], "moins|doc": ["C'est le documentaire le moins bon.", "It's the worst documentary."],
          "plus|lit": ["C'est le lit le plus cher du magasin.", "It's the most expensive bed in the shop."], "moins|lit": ["C'est le lit le moins cher.", "It's the cheapest bed."]
        }
      }
    },
    {
      id: "g-avis",
      title: "Giving your point of view",
      body: [
        "[[Pour moi / Pour nous, ce n'est pas suffisant.]] · [[Je crois / pense / trouve que les formations ne sont pas assez nombreuses.]] · [[À mon avis, il faut appeler les secours.]] Agree / disagree: [[Je suis d'accord.]] · [[Je ne suis pas d'accord.]] · [[Tu as raison.]]"
      ]
    },
    {
      id: "g-lequel",
      title: "Which one? [[lequel]], [[laquelle]], [[lesquels]], [[lesquelles]]",
      body: [
        "[[lequel / laquelle / lesquels / lesquelles]] ask about a person or thing <b>already mentioned</b>, to choose among several. They agree with the noun: [[Voici trois numéros d'urgence : lequel composez-vous ?]] · [[Tu as vu ces tisanes ? Lesquelles choisis-tu ?]]",
        "Reminder: [[quel, quelle, quels, quelles]] are <b>adjectives</b>, followed by a noun or [[être]]: [[Quelles gouttes tu prends ?]] · [[Quel est le numéro du SAMU ?]]"
      ],
      info: { type: "card", style: "board", caption: "❓ quel + noun · lequel alone · tap a line", title: "QUEL… ? / LEQUEL ?", sub: "", rows: [["masc. sing.", "Quel sirop ? → Lequel ?", "Quel sirop ? Lequel ?"], ["fém. sing.", "Quelle tisane ? → Laquelle ?", "Quelle tisane ? Laquelle ?"], ["masc. pl.", "Quels médicaments ? → Lesquels ?", "Quels médicaments ? Lesquels ?"], ["fém. pl.", "Quelles gouttes ? → Lesquelles ?", "Quelles gouttes ? Lesquelles ?"]], foot: "Un de tes enfants est malade ? — Lequel ?" },
      widget: {
        type: "sort", label: "quel… or lequel…? Complete the question",
        cols: [{ k: "quel", label: "quel(s) / quelle(s) + noun", color: "#e0a526" }, { k: "lequel", label: "lequel / laquelle… alone", color: "#2f9c8a" }],
        items: [
          { t: "… conseils peux-tu me donner ?", k: "quel", say: "Quels conseils peux-tu me donner ?" }, { t: "Tu as vu ces tisanes ? … choisis-tu ?", k: "lequel", say: "Tu as vu ces tisanes ? Lesquelles choisis-tu ?" },
          { t: "Un de tes enfants est malade ? … ?", k: "lequel", say: "Un de tes enfants est malade ? Lequel ?" }, { t: "À … heure tu rentres ?", k: "quel", say: "À quelle heure tu rentres ?" },
          { t: "Il y a beaucoup de traitements. … sont les moins chers ?", k: "lequel", say: "Il y a beaucoup de traitements. Lesquels sont les moins chers ?" }, { t: "… études médicales sont intéressantes ?", k: "quel", say: "Quelles études médicales sont intéressantes ?" }
        ]
      }
    }
  ],

  expressions: [
    { fn: "Pour parler des problèmes de santé · le pharmacien", fnEn: "the pharmacist asks", icon: "💊", items: [
      ["Qu'est-ce qui ne va pas ?", "What's wrong?", "std", true],
      ["Vous avez consulté votre médecin ?", "Have you seen your doctor?", "poli"],
      ["Vous toussez ? Vous avez mal à la gorge ?", "Are you coughing? Do you have a sore throat?", "poli"],
      ["Vous avez de la fièvre ?", "Do you have a temperature?", "poli", true]
    ] },
    { fn: "… le / la malade", fnEn: "the patient says", icon: "🤒", items: [
      ["Je suis un peu patraque.", "I'm a bit under the weather.", "fam", true],
      ["Je me sens fatigué(e).", "I feel tired.", "std"],
      ["J'ai le nez bouché.", "My nose is blocked.", "std", true],
      ["J'ai mal à la tête.", "I've got a headache.", "std"]
    ] },
    { fn: "Pour donner un conseil, informer des risques", fnEn: "advice and warnings", icon: "🩺", items: [
      ["Je vous recommande de dormir sur le côté.", "I recommend sleeping on your side.", "poli", true],
      ["Je vous déconseille de dormir sur le ventre.", "I advise you not to sleep on your front.", "poli"],
      ["Il est (dé)conseillé de…", "It's (not) advisable to…", "std"],
      ["Évitez de… · Attention à… · Pensez à…", "Avoid… · Watch out for… · Remember to…", "std"],
      ["Le mieux, c'est de… · La meilleure manière de…, c'est…", "The best thing is to… · The best way to… is…", "std"]
    ] },
    { fn: "Pour exprimer son point de vue", fnEn: "points of view", icon: "💬", items: [
      ["Pour moi / nous, ce n'est pas suffisant.", "For me / us, it's not enough.", "std", true],
      ["Je crois / pense / trouve que…", "I believe / think / find that…", "std", true],
      ["À mon avis, il faut appeler les secours.", "In my opinion, you have to call the emergency services.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · at the pharmacy", lanes: ["La pharmacienne", "Le malade"], av: ["f5", "m6"], steps: [
    { s: 0, fr: "Qu'est-ce qui ne va pas ?", en: "What's wrong?" },
    { s: 1, fr: "Je suis un peu patraque. J'ai le nez bouché.", en: "I'm under the weather. My nose is blocked." },
    { s: 0, fr: "Vous toussez ? Vous avez de la fièvre ?", en: "Are you coughing? Any temperature?" },
    { s: 1, fr: "Je tousse la nuit, mais je n'ai pas de fièvre.", en: "I cough at night, but no temperature." },
    { s: 0, fr: "Je vous donne ce sirop. Prenez-le matin et soir.", en: "I'll give you this syrup. Take it morning and evening." },
    { s: 1, fr: "Merci. Et si ça ne va pas mieux ?", en: "Thanks. And if it doesn't get better?" },
    { s: 0, fr: "Alors, il faudra consulter votre médecin.", en: "Then you'll need to see your doctor." }
  ] },

  sounds: {
    intro: "Phonie-graphie: <b>plus</b> has three pronunciations. [ply] in the negative (ne… plus) and before a consonant in comparisons; [plyz] before a vowel (liaison); [plys] at the end of a sentence, in maths, or when it means <i>more</i> after a verb.",
    letters: [
      { l: "plus + consonne", name: "[ply]", tip: "Superlative or comparative before a consonant: [[le médecin le plus compétent]], [[le conseil le plus courageux]]. And always in the negative: [[les remèdes que les Français n'utilisent plus]].", ex: ["le plus compétent", "Je ne fume plus.", "le plus calme"] },
      { l: "plus + voyelle", name: "[plyz]", tip: "Liaison before a vowel or silent h: [[le conseil le plus utile]], [[la plante la plus efficace]].", ex: ["le plus utile", "la plus efficace", "le plus important"] },
      { l: "plus (fin / « davantage »)", name: "[plys]", tip: "At the end, meaning <i>more</i>: [[les médicaments que les Français achètent le plus]], [[Vous devez dormir plus.]] Also in maths: [[deux plus deux]].", ex: ["Dormez plus !", "C'est ce que j'aime le plus.", "deux plus trois"] }
    ],
    pairs: [
      { a: ["Je n'en veux plus.", "I don't want any more."], b: ["J'en veux plus.", "I want more (casual)."], note: "[ply] / [plys]" },
      { a: ["le plus calme", "the calmest"], b: ["le plus utile", "the most useful"], note: "[ply] / [plyz]" },
      { a: ["le meilleur", "the best (adj.)"], b: ["le mieux", "the best (adv.)"], note: "bon / bien" },
      { a: ["je le donne", "I give it"], b: ["je lui donne", "I give (to) him/her"], note: "COD / COI" },
      { a: ["lequel ?", "which one? (m.)"], b: ["laquelle ?", "which one? (f.)"], note: "m. / f." },
      { a: ["le 15", "SAMU"], b: ["le 18", "fire brigade"], note: "urgences" }
    ]
  },
  classify: {
    label: "➕ [ply], [plyz] ou [plys] ?", q: "Listen: how is plus pronounced?",
    options: ["[ply]", "[plyz]", "[plys]"],
    items: [
      { say: "le médecin le plus compétent", a: 0 }, { say: "le conseil le plus utile", a: 1 }, { say: "Vous devez dormir plus.", a: 2 }, { say: "Je ne fume plus.", a: 0 },
      { say: "la plante la plus efficace", a: 1 }, { say: "C'est ce que j'aime le plus.", a: 2 }, { say: "la position la plus confortable", a: 0 }, { say: "le remède le plus ancien", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Le coach conseille de dormir sur le ventre.", ok: false, explain: "« Je vous déconseille de dormir sur le ventre. »" },
    { type: "mcq", tag: "Dialogue 1", q: "Si on dort sur le dos, on met un oreiller…", options: ["sous les genoux", "sous le ventre", "sur la tête"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "Après la sieste, Victor se sent…", options: ["léger et reposé", "fatigué", "malade"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "M. Rousseau a de la fièvre.", ok: false, explain: "« Je n'ai pas de fièvre. »" },
    { type: "mcq", tag: "Dialogue 3", q: "La pharmacienne lui conseille une tisane…", options: ["au thym", "à la lavande", "à la menthe"], answer: 0 },
    { type: "mcq", tag: "Dialogue 4", q: "La plante la plus efficace contre le rhume, c'est…", options: ["l'eucalyptus", "le millepertuis", "le romarin"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Lucas appelle le 112.", ok: true },
    { type: "tf", tag: "Dialogue 6", s: "Sonia trouve que 20 % de Français formés, c'est suffisant.", ok: false, explain: "« Pour moi, ce n'est pas suffisant ! » (Paul) and she agrees." },
    { type: "fill", tag: "COD / COI", sentence: "Tu prends ton oreiller ? — Oui, je ___ prends.", options: ["le", "lui", "leur"], answer: 0 },
    { type: "fill", tag: "COD / COI", sentence: "Tu parles à ton médecin ? — Oui, je ___ parle demain.", options: ["lui", "le", "la"], answer: 0 },
    { type: "fill", tag: "COD / COI", sentence: "Tu donnes des conseils à tes enfants ? — Oui, je ___ donne des conseils.", options: ["leur", "les", "lui"], answer: 0 },
    { type: "fill", tag: "COD / COI", sentence: "Mes gouttes ? Je ___ mets trois fois par jour.", options: ["les", "leur", "lui"], answer: 0 },
    { type: "type", tag: "COD / COI", q: "Replace: « J'emprunte un livre sur le sommeil à Michèle. » (à Michèle)", answers: ["Je lui emprunte un livre sur le sommeil.", "Je lui emprunte un livre sur le sommeil"] },
    { type: "fill", tag: "Superlatif", sentence: "Après le déjeuner, c'est le ___ moment pour faire la sieste.", options: ["meilleur", "mieux", "plus bon"], answer: 0 },
    { type: "fill", tag: "Superlatif", sentence: "C'est dans mon canapé que je dors le ___ .", options: ["mieux", "meilleur", "plus bien"], answer: 0 },
    { type: "fill", tag: "Superlatif", sentence: "Les tisanes, c'est le remède le ___ économique.", options: ["plus", "mieux", "meilleur"], answer: 0 },
    { type: "fill", tag: "Superlatif", sentence: "Tu dors sur le ventre ? Ce n'est pas la ___ des positions.", options: ["meilleure", "mieux", "meilleur"], answer: 0 },
    { type: "type", tag: "Superlatif", q: "Superlative (+): « Ce médecin est célèbre. »", answers: ["C'est le médecin le plus célèbre.", "C'est le médecin le plus célèbre"] },
    { type: "fill", tag: "Interrogatifs", sentence: "Voici trois numéros d'urgence : ___ composez-vous ?", options: ["lequel", "laquelle", "quel"], answer: 0 },
    { type: "fill", tag: "Interrogatifs", sentence: "Tu as vu ces tisanes ? ___ choisis-tu ?", options: ["Lesquelles", "Lesquels", "Quelles"], answer: 0 },
    { type: "fill", tag: "Interrogatifs", sentence: "___ gouttes pour le nez tu prends ?", options: ["Quelles", "Lesquelles", "Laquelle"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce qui ne va pas ?", options: ["Je suis un peu patraque, j'ai mal à la gorge.", "C'est la plante la plus efficace.", "Lequel ?"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Je dors mal en ce moment.", options: ["Je te conseille une tisane à la lavande.", "Je te lis.", "C'est le 18."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Il faut enseigner les premiers secours à l'école ?", options: ["Oui, à mon avis, c'est très important.", "Oui, je lui enseigne.", "Oui, le moins."], answer: 0 },
    { type: "mcq", tag: "Urgences", q: "En France, le SAMU, c'est le…", options: ["15", "17", "18"], answer: 0 },
    { type: "mcq", tag: "Urgences", q: "Le numéro d'urgence européen, c'est le…", options: ["112", "911", "114"], answer: 0 },
    { type: "mcq", tag: "Urgences", q: "En cas d'accident, il faut d'abord…", options: ["protéger, alerter, secourir", "secourir, alerter, protéger", "alerter, protéger, secourir"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["le rhume", "la fièvre", "la toux", "l'accident"], answer: 3, explain: "l'accident is an emergency; the others are cold symptoms." },
    { type: "mcq", tag: "Vocabulaire", q: "Une petite période de repos dans la journée :", options: ["la sieste", "le réveil", "le rêve"], answer: 0 },
    { type: "order", tag: "Construisez", en: "I recommend you sleep on your side.", words: ["Je", "vous", "recommande", "de", "dormir", "sur", "le", "côté."] },
    { type: "listen", tag: "Écoute", q: "What are the symptoms?", say: "Je suis un peu patraque : j'ai mal à la gorge et je tousse, mais je n'ai pas de fièvre.", options: ["sore throat and cough, no temperature", "temperature and headache", "backache"], answer: 0 }
  ],

  roleplays: [
    { title: "💊 À la pharmacie (DELF)", brief: "You don't feel well and go to the pharmacy. The pharmacist asks questions; explain your symptoms.", memo: ["Je suis un peu patraque.", "J'ai mal à…", "Je tousse / j'ai le nez bouché", "Qu'est-ce que vous me conseillez ?"], partner: "f5", you: "m6",
      turns: [
        { them: "Bonjour ! Qu'est-ce qui ne va pas ?", themEn: "Hello! What's wrong?", hint: "You're under the weather, with a headache and a blocked nose.", you: "Bonjour, je suis un peu patraque. J'ai mal à la tête et le nez bouché.", youEn: "Hello, I'm a bit under the weather. I have a headache and a blocked nose." },
        { them: "Vous avez de la fièvre ?", themEn: "Do you have a temperature?", hint: "A little, since yesterday.", you: "Un peu, depuis hier.", youEn: "A little, since yesterday." },
        { them: "Vous avez consulté votre médecin ?", themEn: "Have you seen your doctor?", hint: "No; ask what she recommends.", you: "Non, pas encore. Qu'est-ce que vous me conseillez ?", youEn: "Not yet. What do you recommend?" }
      ] },
    { title: "🚑 Appeler les secours", brief: "You witness an accident. Call 112 and give the essential information.", memo: ["Il y a eu un accident…", "L'adresse : …", "Il y a … blessé(s)", "Il / Elle respire / parle"], partner: "f6", you: "m3",
      turns: [
        { them: "Cent douze, j'écoute.", themEn: "112, I'm listening.", hint: "Say there's been a car accident with one injured person.", you: "Bonjour, il y a eu un accident de voiture. Il y a un blessé.", youEn: "Hello, there's been a car accident. There's one injured person." },
        { them: "Où êtes-vous ?", themEn: "Where are you?", hint: "Give an address: 8, avenue de la Gare, Lyon.", you: "Huit, avenue de la Gare, à Lyon.", youEn: "Eight, avenue de la Gare, in Lyon." },
        { them: "La victime respire ?", themEn: "Is the victim breathing?", hint: "Yes, he's talking, but his arm hurts.", you: "Oui, il me parle, mais il a très mal au bras.", youEn: "Yes, he's talking to me, but his arm hurts a lot." }
      ] },
    { title: "💬 Ton avis sur la santé", brief: "A friend asks your opinion on health habits. Give your point of view with superlatives.", memo: ["À mon avis…", "Je trouve que…", "le meilleur / le mieux / le plus…"], partner: "f4", you: "m2",
      turns: [
        { them: "Quel est le meilleur sport pour le dos ?", themEn: "What's the best sport for your back?", hint: "In your opinion, swimming.", you: "À mon avis, la natation est le meilleur sport pour le dos.", youEn: "In my opinion, swimming is the best sport for your back." },
        { them: "Et la sieste, c'est bien ?", themEn: "And naps, are they good?", hint: "You find it does a world of good.", you: "Je trouve que ça fait le plus grand bien !", youEn: "I find it does a world of good!" },
        { them: "Qu'est-ce qui est le plus important pour être en forme ?", themEn: "What's most important to be fit?", hint: "The best thing is to sleep well.", you: "Le mieux, c'est de bien dormir.", youEn: "The best thing is to sleep well." }
      ] }
  ],

  ateliers: [
    { title: "Atelier médiation · Participer à une campagne de prévention", intro: "In groups, prepare a health prevention campaign for your school or workplace, and present it to the class.",
      steps: [["Préparation", ["Choose a health topic: food, pollution, road safety, hearing risks, a sedentary lifestyle…", "Research your topic: information, photos, infographics."]], ["Réalisation", ["Pool your information. Did anything surprise you?", "Select what to share. Think about your message and your audience.", "Write a presentation plan (in what order?) and share the speaking turns.", "Prepare a support: slideshow, poster, flyer or video."]], ["Présentation", ["Present your campaign to the class.", "Ask the others to react: what surprised them? What did they learn? Can they add information?"]]],
      phrases: ["Évitez de…", "Attention à…", "Il est déconseillé de…", "Il est important de…", "Pensez à…", "Le mieux, c'est de…"],
      model: { type: "card", style: "board", caption: "📣 Example flyer · tap a line", title: "BOUGEZ PLUS !", sub: "campagne contre la sédentarité", rows: [["Le problème", "on reste assis trop longtemps : au bureau, en voiture, devant les écrans", "On reste assis trop longtemps, au bureau ou devant les écrans."], ["Évitez de…", "rester assis plus d'une heure sans bouger", "Évitez de rester assis plus d'une heure sans bouger."], ["Pensez à…", "prendre les escaliers, marcher pendant la pause", "Pensez à prendre les escaliers et à marcher pendant la pause."], ["Le mieux, c'est de…", "faire 30 minutes d'activité physique par jour", "Le mieux, c'est de faire trente minutes d'activité physique par jour."]], foot: "Votre corps vous dira merci !" } }
  ],
  delf: {
    skill: "Compréhension des écrits", title: "DELF A2 reading training: exercise 2 (a message)",
    about: "In exercise 2 you read a <b>letter or e-mail</b> (personal or administrative) and find the key information. Here: you're a member of the association « Famille et Santé » and receive this e-mail: a family health day on <b>Sunday 2 February</b>. 9:00 meeting at the association · 9:30 two-hour fitness walk · 12:00 lunch (bring a picnic) · 14:00 wild-plant walk (Léa) · 15:00 herbal-tea workshop (Matteo) · 16:00 sports and games with prizes (Livia): cards, balls, marbles · 17:00 return. Confirm by e-mail. The association also needs volunteers to <b>help organise</b> its next events (family yoga, a weekend by the sea, a food evening): call Sophie.",
    tips: ["Read the subject line and the greeting: who writes, to whom, why?", "Programmes: underline times, names and places.", "Watch the verbs in the questions: <i>participer</i> (take part) ≠ <i>préparer, organiser</i> (organise)."],
    items: [
      { type: "mcq", q: "The first activity of the day is…", options: ["a fitness walk", "a herbal-tea workshop", "a picnic"], answer: 0 },
      { type: "mcq", q: "The event takes place on…", options: ["2 February", "8 February", "2 March"], answer: 0 },
      { type: "mcq", q: "The sports and games are led by…", options: ["Livia", "Matteo", "Léa"], answer: 0 },
      { type: "mcq", q: "What can you win?", options: ["cards, balls, marbles", "herbal teas", "a weekend by the sea"], answer: 0 },
      { type: "mcq", q: "To take part in the first event, you must…", options: ["send an e-mail", "phone Sophie", "go to the association"], answer: 0 },
      { type: "mcq", q: "The association is also looking for people to…", options: ["prepare the next events", "take part in the next events", "lead the yoga class"], answer: 0 }
    ]
  },
  detente: {
    title: "Quelle tisane ?",
    intro: "Which plant would you choose? (From the book's herbal-tea guide.)",
    items: [
      { type: "mcq", q: "Vous avez une migraine.", options: ["le romarin", "l'échinacée", "le thym"], answer: 0 },
      { type: "mcq", q: "Vous n'arrivez pas à vous endormir.", options: ["la lavande", "l'eucalyptus", "le romarin"], answer: 0 },
      { type: "mcq", q: "Vous avez un rhume et de la fièvre.", options: ["l'eucalyptus", "la lavande", "le millepertuis"], answer: 0 },
      { type: "mcq", q: "Vous avez mal à la gorge et vous toussez.", options: ["le thym", "la lavande", "le millepertuis"], answer: 0 },
      { type: "mcq", q: "Vous avez une allergie au printemps.", options: ["l'échinacée", "le romarin", "le thym"], answer: 0 },
      { type: "mcq", q: "Vous êtes étudiant(e) et vous révisez vos examens.", options: ["le romarin (mémoire, concentration)", "la lavande", "l'eucalyptus"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "pics", title: "🚨 Emergency numbers in France · tap to hear", items: [
      { t: "le 15 · le SAMU", pic: "🚑", en: "medical emergencies" }, { t: "le 17 · police secours", pic: "👮", en: "police" }, { t: "le 18 · les sapeurs-pompiers", pic: "🚒", en: "fire brigade" },
      { t: "le 112 · le numéro d'urgence européen", pic: "🇪🇺", en: "all emergencies, whole EU" }, { t: "le 114 · par SMS", pic: "💬", en: "for deaf and hard-of-hearing people" }
    ] },
    { type: "timeline", title: "🚑 Emergency transport in Québec (from the book's document)", ends: ["1950", "", "aujourd'hui"], items: [
      { x: 8, fr: "Années 50 : pas d'ambulances municipales à Montréal", en: "no municipal ambulances", pic: "🏙️" },
      { x: 28, fr: "1959 : 120 policiers conduisent les ambulances", en: "police drive ambulances", pic: "👮" },
      { x: 50, fr: "1972-1973 : première loi, ambulanciers diplômés", en: "first law, qualified paramedics", pic: "📜" },
      { x: 72, fr: "1977 : le 911 à Laval, premier numéro central", en: "911, first central number", pic: "☎️" }
    ] }
  ],
  culture: [
    { icon: "💊", kind: "Oh, le cliché !", t: "« Les Français consomment beaucoup d'antibiotiques. »", d: "True: according to the European Centre for Disease Prevention and Control figures quoted by the book, the French are among the biggest consumers of antibiotics in the world, and third in Europe. Health organisations have been warning about this overconsumption for years." },
    { icon: "🩹", kind: "Civilisation", t: "Les gestes qui sauvent", d: "According to the first-aid trainers quoted by the book, only <b>20 %</b> of French people are trained in first aid, and they say free courses are too few. The key rule: <b>protéger, alerter, secourir</b> (protect, alert, help)." },
    { icon: "🛋️", kind: "Au fait !", t: "Les bars à sieste", d: "In big cities, nap bars offer a 20-minute rest in a massage chair, with soft music, during the lunch break: perfect for people who are short of sleep." },
    { icon: "🌿", kind: "Francophonie", t: "La médecine traditionnelle à La Réunion", d: "On La Réunion, in the Indian Ocean, many people still use medicinal plants (<i>tisanes</i>) passed down from generation to generation, alongside modern medicine." },
    { icon: "🚑", kind: "Francophonie", t: "Le 911 au Québec", d: "In 1977, the inhabitants of Laval were the first in Québec to have a central emergency number, the 911: calls are sent on to firefighters, paramedics or the police." },
    { icon: "😴", kind: "Au fait !", t: "Les cycles du sommeil", d: "A night is made of several sleep cycles, each with several phases, from light sleep to deep sleep and dreaming (REM) sleep. Waking at the end of a cycle helps you feel rested." }
  ],
  tips: [
    { icon: "🎯", t: "Is there an à?", d: "Verb + à quelqu'un → [[lui / leur]]. No à → [[le / la / les]]. 1st and 2nd persons are the same: me, te, nous, vous." },
    { icon: "🏅", t: "meilleur or mieux?", d: "With a noun: [[le meilleur sirop]]. With a verb: [[ce sirop marche le mieux]]." },
    { icon: "🚨", t: "Protéger, alerter, secourir", d: "In that order. And in the EU, [[le 112]] works everywhere." }
  ],
  mistakes: [
    ["Je le téléphone.", "Je lui téléphone.", "téléphoner à → COI"],
    ["Je lui aime.", "Je l'aime.", "aimer quelqu'un → COD"],
    ["Je les donne des conseils.", "Je leur donne des conseils.", "donner à quelqu'un → leur"],
    ["C'est le plus bon remède.", "C'est le meilleur remède.", "bon → le meilleur"],
    ["C'est ce sirop qui marche le meilleur.", "C'est ce sirop qui marche le mieux.", "verb → le mieux"],
    ["la plante la plus efficace de toutes les plantes", "la plus efficace des plantes", "le plus + adj. + de"],
    ["Lequel tisane ?", "Quelle tisane ? / Laquelle ?", "quel + noun; lequel alone"],
    ["J'ai mal à le dos.", "J'ai mal au dos.", "à + le = au"]
  ]
});
