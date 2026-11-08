// Pays où l'organisme est présent ou agit - source unique de la carte du monde.
//
// id     : code ISO 3166-1 numérique du pays, tel qu'utilisé dans lib/worldShapes.js
//          (ex. "124" Canada, "180" RD Congo, "250" France, "768" Togo).
// point  : (facultatif) repère [x, y] dans le repère de la carte (viewBox 1000 x 440) ;
//          par défaut, le centre du pays. Pour le Canada, le repère est placé en Ontario (siège).
// origin : le pays d'où partent les lignes vers les autres (le siège).
// photo  : clé dans lib/photos.js, affichée quand le pays est sélectionné.
// activities : liste par langue ; laisser [] tant que les activités ne sont pas confirmées.
export const MAP_PRESENCE = [
  {
    id: "124",
    origin: true,
    point: [306, 81],
    name: { fr: "Canada", en: "Canada" },
    place: { fr: "Ontario · siège social", en: "Ontario · head office" },
    photo: "ottawa",
    activities: {
      fr: ["Siège social en Ontario"],
      en: ["Head office in Ontario"]
    }
  },
  {
    id: "180",
    name: { fr: "RD Congo", en: "DR Congo" },
    photo: "kinshasa",
    activities: { fr: [], en: [] }
  },
  {
    id: "250",
    name: { fr: "France", en: "France" },
    photo: "paris",
    activities: { fr: [], en: [] }
  },
  {
    id: "768",
    name: { fr: "Togo", en: "Togo" },
    photo: "lome",
    activities: { fr: [], en: [] }
  }
];
