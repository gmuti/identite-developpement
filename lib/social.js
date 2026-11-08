// Profils officiels de l'organisme sur les réseaux sociaux - source unique
// pour le footer et les données structurées (JSON-LD "sameAs").
//
// À REMPLIR : renseigner l'URL complète de chaque profil (ex. "https://www.instagram.com/...").
// Tant qu'une URL vaut null, l'icône correspondante n'est pas affichée sur le site.
export const SOCIAL_PROFILES = [
  { id: "x", name: "X", url: null },
  { id: "tiktok", name: "TikTok", url: null },
  { id: "instagram", name: "Instagram", url: null }
];

export const ACTIVE_SOCIAL_PROFILES = SOCIAL_PROFILES.filter((p) => Boolean(p.url));
