// Pays où l'organisme est présent ou agit - source unique de la carte du monde.
//
// id : code ISO 3166-1 numérique du pays, tel qu'utilisé dans lib/worldShapes.js
//      (ex. "124" Canada, "180" RD Congo, "250" France, "768" Togo).
// activities : liste par langue ; laisser [] tant que les activités ne sont pas confirmées
//              (le pays reste coloré et listé, sans détail).
export const MAP_PRESENCE = [
  {
    id: "124",
    name: { fr: "Canada", en: "Canada" },
    activities: {
      fr: ["Siège social en Ontario"],
      en: ["Head office in Ontario"]
    }
  },
  {
    id: "180",
    name: { fr: "RD Congo", en: "DR Congo" },
    activities: { fr: [], en: [] }
  },
  {
    id: "250",
    name: { fr: "France", en: "France" },
    activities: { fr: [], en: [] }
  },
  {
    id: "768",
    name: { fr: "Togo", en: "Togo" },
    activities: { fr: [], en: [] }
  }
];
