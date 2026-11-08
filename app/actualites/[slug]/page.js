import { notFound } from "next/navigation";
import NewsArticleContent from "./NewsArticleContent";
import { getAllNewsSlugs, getNewsBySlug, getNews, urlFor } from "@/lib/sanity";

// Export statique : toutes les pages d'articles sont générées au build.
// Une publication dans Sanity déclenche un redéploiement (webhook), donc les nouveaux articles apparaissent.
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const article = await getNewsBySlug(params.slug);
  if (!article) return {};
  const image = article.image ? urlFor(article.image)?.width(1200).height(630).fit("crop").url() : null;
  const description = article.excerpt || undefined;
  return {
    title: article.title,
    description,
    alternates: { canonical: `/actualites/${params.slug}/` },
    openGraph: {
      type: "article",
      title: article.title,
      description,
      ...(article.date ? { publishedTime: article.date } : {}),
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {})
    },
    twitter: {
      title: article.title,
      description,
      ...(image ? { images: [image] } : {})
    }
  };
}

export default async function NewsArticlePage({ params }) {
  const [article, latest] = await Promise.all([getNewsBySlug(params.slug), getNews(4)]);
  if (!article) notFound();
  const related = latest.filter((n) => n.slug !== article.slug).slice(0, 3);
  return <NewsArticleContent article={article} related={related} />;
}
