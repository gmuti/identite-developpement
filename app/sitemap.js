import { SITE_URL, SITE_ROUTES } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  return SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
