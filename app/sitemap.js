import { SITE_URL, SITE_ROUTES } from "@/lib/seo";
import { getAllNewsSlugs } from "@/lib/sanity";

export default async function sitemap() {
  const lastModified = new Date();
  const newsSlugs = await getAllNewsSlugs();

  const pages = SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));

  const articles = newsSlugs.map((slug) => ({
    url: `${SITE_URL}/actualites/${slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...pages, ...articles];
}
