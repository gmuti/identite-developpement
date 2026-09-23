import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// TODO : une fois ton projet Sanity créé (`npx sanity init` dans /sanity),
// renseigne ces variables dans un fichier .env.local :
//   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxx
//   NEXT_PUBLIC_SANITY_DATASET=production
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const isSanityConfigured = Boolean(projectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true
    })
  : null;

const builder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;
export function urlFor(source) {
  return builder ? builder.image(source) : null;
}

// Données de secours affichées tant que Sanity n'est pas connecté,
// pour que le site reste fonctionnel et présentable dès le premier déploiement.
const FALLBACK_NEWS = [
  { _id: "1", tag: "Conférence", date: "[Date à venir]", title: "Première conférence Identité et Développement", excerpt: "Lancement officiel - détails à confirmer.", image: null },
  { _id: "2", tag: "Formation", date: "[Date à venir]", title: "Séminaire de croissance personnelle", excerpt: "Un temps de formation ouvert à la communauté.", image: null },
  { _id: "3", tag: "Communauté", date: "[Date à venir]", title: "Lancement du programme de bourses", excerpt: "Premières bourses scolaires attribuées.", image: null }
];

export async function getNews(limit = 6) {
  if (!isSanityConfigured) return FALLBACK_NEWS.slice(0, limit);
  try {
    const query = `*[_type == "article"] | order(date desc)[0...$limit]{ _id, tag, "date": coalesce(date, "À venir"), title, excerpt, image }`;
    const results = await sanityClient.fetch(query, { limit });
    return results?.length ? results : FALLBACK_NEWS.slice(0, limit);
  } catch (err) {
    console.error("Sanity fetch (news) failed, using fallback:", err.message);
    return FALLBACK_NEWS.slice(0, limit);
  }
}

export async function getGallery(limit = 8) {
  if (!isSanityConfigured) return [];
  try {
    const query = `*[_type == "photo"] | order(_createdAt desc)[0...$limit]{ _id, caption, image }`;
    return await sanityClient.fetch(query, { limit });
  } catch (err) {
    console.error("Sanity fetch (gallery) failed:", err.message);
    return [];
  }
}

export async function getEvents(limit = 6) {
  if (!isSanityConfigured) return [];
  try {
    const query = `*[_type == "event"] | order(date asc)[0...$limit]{ _id, title, date, location, description }`;
    return await sanityClient.fetch(query, { limit });
  } catch (err) {
    console.error("Sanity fetch (events) failed:", err.message);
    return [];
  }
}
