// Pays où l'organisme est présent ou agit - source unique de la carte du monde.
//
// id : code ISO 3166-1 numérique du pays, tel qu'utilisé dans lib/worldShapes.js
//      (ex. "124" Canada, "180" RD Congo, "646" Rwanda, "108" Burundi, "250" France, "056" Belgique).
// Pour ajouter un pays : ajouter une entrée avec son nom et ses activités en FR et en EN.
export const MAP_PRESENCE = [
  {
    id: "124",
    name: { fr: "Canada", en: "Canada" },
    activities: {
      fr: ["Siège social en Ontario"],
      en: ["Head office in Ontario"]
    }
  }
];
