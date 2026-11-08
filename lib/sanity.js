import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Variables d'environnement (en local : .env.local ; en CI : secrets GitHub Actions) :
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
  {
    _id: "1",
    slug: "premiere-conference",
    tag: "Conférence",
    date: null,
    title: "Première conférence Identité et Développement Global",
    excerpt: "Lancement officiel - détails à confirmer.",
    image: null,
    body: null,
    gallery: []
  },
  {
    _id: "2",
    slug: "seminaire-croissance-personnelle",
    tag: "Formation",
    date: null,
    title: "Séminaire de croissance personnelle",
    excerpt: "Un temps de formation ouvert à la communauté.",
    image: null,
    body: null,
    gallery: []
  },
  {
    _id: "3",
    slug: "programme-de-bourses",
    tag: "Communauté",
    date: null,
    title: "Lancement du programme de bourses",
    excerpt: "Premières bourses scolaires attribuées.",
    image: null,
    body: null,
    gallery: []
  }
];

// Les articles créés avant l'ajout du champ slug n'en ont pas : on retombe sur l'_id
// pour que leur page de détail existe quand même.
const NEWS_CARD_FIELDS = `_id, "slug": coalesce(slug.current, _id), tag, date, title, excerpt, image`;
const NEWS_DETAIL_FIELDS = `${NEWS_CARD_FIELDS}, body, gallery[]{ _key, caption, asset }`;

export async function getNews(limit = 6) {
  if (!isSanityConfigured) return FALLBACK_NEWS.slice(0, limit);
  try {
    const query = `*[_type == "article"] | order(date desc)[0...$limit]{ ${NEWS_CARD_FIELDS} }`;
    const results = await sanityClient.fetch(query, { limit });
    return results?.length ? results : FALLBACK_NEWS.slice(0, limit);
  } catch (err) {
    console.error("Sanity fetch (news) failed, using fallback:", err.message);
    return FALLBACK_NEWS.slice(0, limit);
  }
}

export async function getAllNewsSlugs() {
  if (!isSanityConfigured) return FALLBACK_NEWS.map((n) => n.slug);
  try {
    const slugs = await sanityClient.fetch(`*[_type == "article"]{ "slug": coalesce(slug.current, _id) }.slug`);
    return slugs?.length ? slugs : FALLBACK_NEWS.map((n) => n.slug);
  } catch (err) {
    console.error("Sanity fetch (news slugs) failed, using fallback:", err.message);
    return FALLBACK_NEWS.map((n) => n.slug);
  }
}

export async function getNewsBySlug(slug) {
  const fallback = FALLBACK_NEWS.find((n) => n.slug === slug) || null;
  if (!isSanityConfigured) return fallback;
  try {
    const query = `*[_type == "article" && (slug.current == $slug || _id == $slug)][0]{ ${NEWS_DETAIL_FIELDS} }`;
    return (await sanityClient.fetch(query, { slug })) || fallback;
  } catch (err) {
    console.error("Sanity fetch (news detail) failed, using fallback:", err.message);
    return fallback;
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
