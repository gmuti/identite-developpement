// Configuration SEO centrale - une seule source pour l'URL du site, utilisée par
// layout.js (metadataBase), sitemap.js, robots.js, manifest.js et opengraph-image.js.
//
// À METTRE À JOUR dès que le domaine final remplace le sous-domaine de staging.
export const SITE_URL = "https://identitedev.cfcottawa.ca";

export const ORG_NAME = "Identité et Développement";

export const SITE_DESCRIPTION =
  "Découvrir son identité, bâtir son avenir. Organisme à but non lucratif basé en Ontario, Canada, engagé dans l'accompagnement spirituel, éducatif et communautaire.";

export const SITE_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/a-propos/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/departements/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/projets/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/actualites/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/don/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/mentions-legales/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politique-de-confidentialite/", priority: 0.3, changeFrequency: "yearly" }
];
