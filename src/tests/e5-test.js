// Étape 5 · Bilan « Consommer, voyager » (Unités 9–10, book pp. 125–152)
// Original test, DELF A2 style: one point per item, answers explained. Covers u09, u10.
window.TEST = {
  id: "e5-test",
  rubrique: 5,
  after: 10,
  title: "Étape 5 test · Consuming and travelling",
  titleFr: "Bilan · Consommer, voyager",
  covers: ["u09", "u10"],
  pages: "Unités 9–10 · book pp. 125–152",
  intro: "Do the whole test without looking anything up, then check each section. Section 5 is a DELF A2-style listening task (announcements and messages), section 6 a reading task on a holiday offer. Your results list the units to revise before Étape 6.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose the best answer.",
      items: [
        { s: "You ask a neighbour for a favour.", o: ["Vous auriez une échelle à me prêter ?", "Vous avez prêté une échelle hier.", "Je vous emprunte votre échelle !"], a: 0, lesson: "u09" },
        { s: "You give a friend some advice.", o: ["Tu devrais acheter d'occasion.", "Tu devrais d'acheter d'occasion.", "Tu devras acheté d'occasion."], a: 0, lesson: "u09" },
        { s: "You express a wish.", o: ["J'aimerais consommer moins.", "J'aimerai consommé moins.", "J'aime que consommer moins."], a: 0, lesson: "u09" },
        { s: "You imagine an ideal world.", o: ["Dans un monde idéal, tout serait gratuit.", "Dans un monde idéal, tout sera gratuit hier.", "Dans un monde idéal, tout était gratuit demain."], a: 0, lesson: "u09" },
        { s: "You phone a travel agency.", o: ["Je voudrais avoir des renseignements sur un circuit.", "Je voudrais vous renseigner un circuit.", "Je renseigne un circuit."], a: 0, lesson: "u10" },
        { s: "You loved a visit.", o: ["C'était à couper le souffle !", "Quelle déception !", "Ça ne valait pas le coup."], a: 0, lesson: "u10" },
        { s: "Your friend is panicking about a delay.", o: ["Du calme, ce n'est pas grave.", "Ça m'énerve, tu as raison !", "Celui-ci, c'est grave."], a: 0, lesson: "u10" },
        { s: "You start the description of your circuit.", o: ["D'abord, nous visitons la capitale.", "Enfin, nous visitons d'abord.", "Ensuite, d'abord la capitale."], a: 0, lesson: "u10" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): conditionnel, gérondif, passé composé / imparfait, past participle, demonstrative pronoun…",
      items: [
        { p: "Tu ___ m'aider à monter ce meuble ? (pouvoir, conditionnel)", a: "pourrais", lesson: "u09" },
        { p: "Nous ___ louer des vélos. (vouloir, conditionnel)", a: "voudrions", lesson: "u09" },
        { p: "Sans argent, les gens ___ du troc. (faire, conditionnel)", a: "feraient", lesson: "u09" },
        { p: "Elle tricote en ___ la radio. (écouter)", a: "écoutant", lesson: "u09" },
        { p: "On apprend en ___ . (faire)", a: "faisant", lesson: "u09" },
        { p: "Il ___ beau quand nous sommes arrivés. (faire)", a: "faisait", lesson: "u10" },
        { p: "Nous marchions quand, soudain, il ___ à pleuvoir. (commencer)", a: "a commencé", lesson: "u10" },
        { p: "Les photos ? Je les ai ___ hier. (prendre)", a: "prises", lesson: "u10" },
        { p: "Ma valise est bleue, ___ de Hugo est rouge.", a: "celle|Celle", lesson: "u10" },
        { p: "Les vols du soir sont moins chers que ___ du matin.", a: "ceux", lesson: "u10" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Je n'arrive pas à vendre mon vélo."], ["B", "___"]], o: ["Je te conseille de refaire les photos.", "Je te conseille refaire les photos.", "Je te conseille que tu refaisais."], a: 0, lesson: "u09" },
        { lines: [["A", "Ça te dirait d'aller à une troc party ?"], ["B", "___"]], o: ["Avec plaisir ! J'apporte des livres.", "Oui, c'était magique.", "Non, je les ai prises."], a: 0, lesson: "u09" },
        { lines: [["A", "Pourriez-vous baisser un peu le prix ?"], ["B", "___"]], o: ["D'accord, deux cents euros, ça vous irait ?", "Oui, en baissant.", "Oui, j'aimerais le prix."], a: 0, lesson: "u09" },
        { lines: [["A", "Le petit-déjeuner est compris ?"], ["B", "___"]], o: ["Oui, et le dîner est en option.", "Oui, il a compris.", "Oui, celui-ci."], a: 0, lesson: "u10" },
        { lines: [["A", "Alors, ce voyage en Corse ?"], ["B", "___"]], o: ["Super ! Il faisait beau et on a fait de la plongée.", "Super ! Il a fait beau et on faisait soudain de la plongée.", "Super ! Il fera beau."], a: 0, lesson: "u10" },
        { lines: [["A", "Quel hôtel tu préfères ?"], ["B", "___"]], o: ["Celui qui est près de la plage.", "Celle qui est près de la plage.", "Ceux qui est près de la plage."], a: 0, lesson: "u10" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "d'occasion", b: "second-hand", lesson: "u09" }, { a: "emprunter", b: "to borrow", lesson: "u09" }, { a: "en panne", b: "broken down", lesson: "u09" },
        { a: "la demi-pension", b: "half board", lesson: "u10" }, { a: "la grotte", b: "the cave", lesson: "u10" }, { a: "la porte d'embarquement", b: "the boarding gate", lesson: "u10" }
      ]
    },
    {
      id: "s5", type: "listen", marks: 5,
      instr: "DELF A2 · Compréhension de l'oral. Écoutez et répondez.",
      instrEn: "An airport announcement, a phone message and short dialogues. Play each recording twice, then choose.",
      items: [
        { say: "Les passagers du vol à destination de Montréal sont priés de se présenter porte trente-quatre. En raison du mauvais temps, le vol a une heure de retard.", q: "Le vol part de la porte…", o: ["34", "24", "43"], a: 0, lesson: "u10" },
        { say: "Les passagers du vol à destination de Montréal sont priés de se présenter porte trente-quatre. En raison du mauvais temps, le vol a une heure de retard.", q: "Pourquoi le vol est-il en retard ?", o: ["à cause du mauvais temps", "à cause d'une grève", "il n'est pas en retard"], a: 0, lesson: "u10" },
        { say: "Bonjour, c'est la bricothèque. La ponceuse que vous avez réservée est disponible. Vous pouvez la garder quatre jours. N'oubliez pas la caution de cinquante euros.", q: "La personne peut garder la ponceuse…", o: ["quatre jours", "une semaine", "un mois"], a: 0, lesson: "u09" },
        { say: "Moi, je fais mes vêtements moi-même : je couds le soir en regardant des séries. C'est relaxant et je fais des économies.", q: "La personne coud…", o: ["en regardant des séries", "en écoutant la radio", "le matin"], a: 0, lesson: "u09" },
        { say: "La visite de la grotte ? Franchement, quelle déception : il y avait trop de monde et on ne voyait rien.", q: "La personne…", o: ["est déçue", "a adoré", "recommande la visite"], a: 0, lesson: "u10" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 10,
      instr: "DELF A2 · Compréhension des écrits. Lisez l'offre et répondez.",
      instrEn: "Read the travel agency's offer, then decide: true or false?",
      doc: { type: "card", style: "board", title: "AGENCE ÉVASION · Séjour « slow » en Bretagne", sub: "7 jours · à pied et à vélo · petits groupes", rows: [
        ["Hébergement", "en chambres d'hôtes et en gîtes, petit-déjeuner compris"],
        ["Repas", "demi-pension (le dîner est inclus, pas le déjeuner)"],
        ["Programme", "jour 1 : arrivée à Rennes ; puis randonnée sur les falaises, visite d'une grotte et de ruines médiévales ; enfin, deux jours de vélo au bord de la mer"],
        ["Transport", "le train jusqu'à Rennes n'est pas inclus ; la location de vélo est comprise"],
        ["En option", "une excursion en bateau (35 €)"],
        ["Prix", "690 € par personne · groupe de 8 personnes maximum"],
        ["Meilleure période", "de mai à septembre"]
      ], foot: "Renseignements et réservations : 02 99 00 00 00" },
      items: [
        { s: "Le séjour dure une semaine.", ok: true, lesson: "u10" },
        { s: "On dort à l'hôtel.", ok: false, why: "en chambres d'hôtes et en gîtes", lesson: "u10" },
        { s: "Le petit-déjeuner est compris.", ok: true, lesson: "u10" },
        { s: "Le déjeuner est inclus.", ok: false, why: "demi-pension : seulement le dîner", lesson: "u10" },
        { s: "Le premier jour, on arrive à Rennes.", ok: true, lesson: "u10" },
        { s: "Le train jusqu'à Rennes est compris dans le prix.", ok: false, why: "il n'est pas inclus", lesson: "u10" },
        { s: "Il n'est pas nécessaire de louer un vélo soi-même.", ok: true, why: "la location de vélo est comprise", lesson: "u10" },
        { s: "L'excursion en bateau coûte 35 € en plus.", ok: true, lesson: "u10" },
        { s: "Les groupes peuvent avoir vingt personnes.", ok: false, why: "8 personnes maximum", lesson: "u10" },
        { s: "C'est un séjour de tourisme lent.", ok: true, why: "« slow », à pied et à vélo", lesson: "u10" }
      ]
    }
  ],
  selfCheck: [
    ["Exprimer un souhait et donner un conseil", "express a wish and give advice"],
    ["Demander un service poliment", "ask for a favour politely"],
    ["Imaginer un monde différent avec le conditionnel", "imagine a different world with the conditionnel"],
    ["Dire comment je fais quelque chose avec le gérondif", "say how I do something with the gérondif"],
    ["Demander des renseignements sur un voyage", "ask for information about a trip"],
    ["Raconter un voyage avec le passé composé et l'imparfait", "tell a trip story with the passé composé and imparfait"],
    ["Donner mon avis sur une visite et exprimer mon agacement", "review a visit and express irritation"]
  ]
};
