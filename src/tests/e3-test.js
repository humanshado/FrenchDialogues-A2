// Étape 3 · Bilan « Demain, à table ! » (Unités 5–6, book pp. 69–96)
// Original test, DELF A2 style: one point per item, answers explained. Covers u05, u06.
window.TEST = {
  id: "e3-test",
  rubrique: 3,
  after: 6,
  title: "Étape 3 test · The future and food",
  titleFr: "Bilan · Demain, à table !",
  covers: ["u05", "u06"],
  pages: "Unités 5–6 · book pp. 69–96",
  intro: "Do the whole test without looking anything up, then check each section. Section 5 is a DELF A2-style listening task (announcements and short dialogues), section 6 a reading task on a restaurant's rules and menu. Your results list the units to revise before Étape 4.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose the best answer.",
      items: [
        { s: "You imagine life in the future.", o: ["Un jour, il y aura des voitures volantes.", "Un jour, il y a eu des voitures volantes.", "Un jour, il y avait des voitures volantes."], a: 0, lesson: "u05" },
        { s: "You explain what an object is for.", o: ["Il sert à recharger le téléphone.", "Il sert de recharger le téléphone.", "Il permet à recharger le téléphone."], a: 0, lesson: "u05" },
        { s: "Your friend says she's selling her car. You're surprised.", o: ["Sérieux ? C'est pas possible !", "J'espère que tu gagneras.", "Ça sert à rouler."], a: 0, lesson: "u05" },
        { s: "You hope your team will win.", o: ["J'espère que notre équipe gagnera.", "J'espère que notre équipe gagnerait hier.", "J'espère notre équipe de gagner."], a: 0, lesson: "u05" },
        { s: "You ask the waiter for advice.", o: ["Qu'est-ce que vous me conseillez ?", "Vous avez choisi ?", "Ça vous a plu ?"], a: 0, lesson: "u06" },
        { s: "You warn a child near the oven.", o: ["Attention ! C'est très chaud.", "Un régal !", "Il n'y a que du sucre."], a: 0, lesson: "u06" },
        { s: "The meal was wonderful.", o: ["Un régal ! Je suis ravi(e).", "C'est une honte !", "C'est scandaleux !"], a: 0, lesson: "u06" },
        { s: "The service was terribly slow.", o: ["C'est une honte, on a attendu une heure !", "J'ai eu un coup de cœur.", "Je ne peux en dire que du bien."], a: 0, lesson: "u06" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): futur simple, si / quand, on, en, obligation, ne… que…",
      items: [
        { p: "Dans le futur, les robots ___ le ménage. (faire)", a: "feront", lesson: "u05" },
        { p: "L'année prochaine, nous ___ au salon des innovations. (aller)", a: "irons", lesson: "u05" },
        { p: "Demain, il ___ toute la journée. (pleuvoir)", a: "pleuvra", lesson: "u05" },
        { p: "Si tu ___ ce smartphone, tu pourras installer des applis. (acheter, présent)", a: "achètes", lesson: "u05" },
        { p: "Quand tu ___ 18 ans, je t'achèterai un ordinateur. (avoir)", a: "auras", lesson: "u05" },
        { p: "Tu manges du fromage ? — Oui, j'___ mange tous les jours.", a: "en", lesson: "u06" },
        { p: "Tu as des œufs ? — Oui, j'en ai ___ . (6)", a: "six|6", lesson: "u06" },
        { p: "Il est interdit ___ fumer dans les restaurants.", a: "de", lesson: "u06" },
        { p: "Avant de cuisiner, lavez-___ les mains !", a: "vous", lesson: "u06" },
        { p: "Je ne mets ___ trois étoiles. (= only)", a: "que", lesson: "u06" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "À quoi sert cette application ?"], ["B", "___"]], o: ["Elle permet de trouver un restaurant près de chez vous.", "Elle sera demain.", "Elle sert de manger."], a: 0, lesson: "u05" },
        { lines: [["A", "Et si l'ordinateur tombe en panne ?"], ["B", "___"]], o: ["J'appellerai le réparateur.", "J'appellerais hier le réparateur.", "Je tomberai en panne."], a: 0, lesson: "u05" },
        { lines: [["A", "« On a volé mon vélo ! » Qui a volé le vélo ?"], ["B", "___"]], o: ["Quelqu'un, on ne sait pas qui.", "Nous.", "Tous les gens."], a: 0, lesson: "u05" },
        { lines: [["A", "Vous voulez votre steak comment ?"], ["B", "___"]], o: ["Saignant, s'il vous plaît.", "Sucré, s'il vous plaît.", "À emporter, s'il vous plaît, sur place."], a: 0, lesson: "u06" },
        { lines: [["A", "Il reste des desserts ?"], ["B", "___"]], o: ["Il ne m'en reste qu'un.", "Il ne m'y reste qu'un.", "Il ne reste pas que un."], a: 0, lesson: "u06" },
        { lines: [["A", "Vous mangez de la viande ?"], ["B", "___"]], o: ["Non, je n'en mange pas, je suis végétarienne.", "Non, je ne la mange que.", "Oui, je n'y mange."], a: 0, lesson: "u06" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "tomber en panne", b: "to break down", lesson: "u05" }, { a: "télécharger", b: "to download", lesson: "u05" }, { a: "l'imprimante", b: "the printer", lesson: "u05" },
        { a: "une pincée de sel", b: "a pinch of salt", lesson: "u06" }, { a: "à emporter", b: "takeaway", lesson: "u06" }, { a: "fade", b: "bland", lesson: "u06" }
      ]
    },
    {
      id: "s5", type: "listen", marks: 5,
      instr: "DELF A2 · Compréhension de l'oral. Écoutez et répondez.",
      instrEn: "Public announcements, a recorded message and short dialogues. Play each recording twice, then choose.",
      items: [
        { say: "Bienvenue au salon des innovations ! La démonstration de robots aura lieu à quinze heures, salle B. Les imprimantes 3D sont présentées au premier étage.", q: "La démonstration de robots aura lieu…", o: ["à 15 h, salle B", "à 15 h, au premier étage", "à 5 h, salle B"], a: 0, lesson: "u05" },
        { say: "Bienvenue au salon des innovations ! La démonstration de robots aura lieu à quinze heures, salle B. Les imprimantes 3D sont présentées au premier étage.", q: "Où sont les imprimantes 3D ?", o: ["au premier étage", "au rez-de-chaussée", "salle B"], a: 0, lesson: "u05" },
        { say: "Bonjour, ici le restaurant Le Bistrot du Port. Votre table pour quatre personnes est confirmée pour samedi à vingt heures. Attention : nous fermons la cuisine à vingt-deux heures.", q: "La réservation est pour…", o: ["4 personnes, samedi à 20 h", "2 personnes, samedi à 22 h", "4 personnes, dimanche à 20 h"], a: 0, lesson: "u06" },
        { say: "Si tu veux, quand tu auras ton nouveau téléphone, je t'aiderai à installer les applications.", q: "Dans ce dialogue, la personne…", o: ["propose de l'aide", "s'excuse", "invite quelqu'un à dîner"], a: 0, lesson: "u05" },
        { say: "Franchement, le service était trop lent et les plats étaient froids. C'est scandaleux !", q: "La personne exprime…", o: ["son insatisfaction", "sa satisfaction", "sa surprise"], a: 0, lesson: "u06" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 10,
      instr: "DELF A2 · Compréhension des écrits. Lisez le document et répondez.",
      instrEn: "Read the page of a vegetarian restaurant's website, then decide: true or false?",
      doc: { type: "card", style: "board", title: "LE JARDIN GOURMAND", sub: "restaurant végétarien · produits frais et de saison", rows: [
        ["Le menu du jour", "entrée + plat + dessert : 19 € · plat seul : 13 €"],
        ["La spécialité", "le gratin de courges au curcuma, avec des lentilles"],
        ["À emporter", "tous nos plats sont aussi à emporter, sauf les desserts glacés"],
        ["Les règles", "il est interdit de venir avec des animaux · les réservations sont obligatoires le week-end"],
        ["Allergies", "si vous êtes allergique, dites-le au serveur : nous adapterons votre plat"],
        ["Bientôt", "en janvier, nous ouvrirons une terrasse et nous proposerons des cours de cuisine"]
      ], foot: "Ouvert du mardi au samedi · fermé le dimanche et le lundi" },
      items: [
        { s: "Le restaurant sert de la viande.", ok: false, why: "C'est un restaurant végétarien.", lesson: "u06" },
        { s: "Le menu du jour coûte 19 €.", ok: true, lesson: "u06" },
        { s: "On ne peut pas emporter les desserts glacés.", ok: true, lesson: "u06" },
        { s: "Les animaux sont acceptés.", ok: false, why: "Il est interdit de venir avec des animaux.", lesson: "u06" },
        { s: "Il faut réserver le week-end.", ok: true, lesson: "u06" },
        { s: "Le restaurant ne peut pas adapter les plats pour les allergies.", ok: false, why: "nous adapterons votre plat", lesson: "u06" },
        { s: "La spécialité contient des lentilles.", ok: true, lesson: "u06" },
        { s: "La terrasse est déjà ouverte.", ok: false, why: "Elle ouvrira en janvier (futur).", lesson: "u05" },
        { s: "Le restaurant proposera des cours de cuisine.", ok: true, lesson: "u05" },
        { s: "Le restaurant est ouvert le dimanche.", ok: false, why: "fermé le dimanche et le lundi", lesson: "u06" }
      ]
    }
  ],
  selfCheck: [
    ["Imaginer l'avenir avec le futur simple", "imagine the future with the futur simple"],
    ["Décrire l'utilité d'un objet", "describe what an object is for"],
    ["Exprimer ma surprise et un espoir", "express surprise and hope"],
    ["Exprimer une condition avec si et quand", "express a condition with si and quand"],
    ["Comprendre une recette et parler des quantités", "understand a recipe and talk about quantities"],
    ["Exprimer une obligation, une interdiction, une mise en garde", "express obligation, prohibition, a warning"],
    ["Commander au restaurant et donner mon avis", "order in a restaurant and give my opinion"]
  ]
};
