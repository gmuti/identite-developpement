"use client";

import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PortableText from "@/components/PortableText";
import PhotoGallery from "@/components/PhotoGallery";
import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/format";

export default function NewsArticleContent({ article, related }) {
  const { t, locale } = useLanguage();
  const date = formatDate(article.date, locale) || t.news.dateSoon;
  const heroUrl = article.image ? urlFor(article.image)?.width(1600).height(900).fit("crop").url() : null;
  const hasBody = Array.isArray(article.body) && article.body.length > 0;

  return (
    <>
      <PageHeader title={article.title} description={article.excerpt} crumbs={[{ label: t.news.crumb, href: "/actualites/" }]}>
        <p className="reveal mt-6 flex flex-wrap items-center gap-2 text-sm text-on-navy-muted" style={{ animationDelay: "0.12s" }}>
          {article.tag && <span className="rounded-full bg-gold px-3 py-1 font-bold text-navy-dark">{article.tag}</span>}
          <time dateTime={article.date || undefined} className="tabular-nums">
            {date}
          </time>
        </p>
      </PageHeader>

      <article className="bg-cream pb-20 pt-10 sm:pb-28 sm:pt-14">
        {heroUrl && (
          <div className="container-site">
            <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-4xl bg-sand">
              <Image src={heroUrl} alt="" fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
            </div>
          </div>
        )}

        <div className="container-site">
          <div className="mx-auto max-w-3xl text-lg">
            {hasBody ? <PortableText value={article.body} /> : <p className="mt-6 leading-relaxed text-muted">{t.news.bodySoon}</p>}

            {article.gallery?.length > 0 && (
              <section className="mt-16" aria-labelledby="gallery-title">
                <h2 id="gallery-title" className="mb-6 text-2xl font-extrabold tracking-tight text-navy">
                  {t.news.galleryTitle}
                </h2>
                <PhotoGallery
                  photos={article.gallery}
                  labels={{
                    open: t.news.galleryOpen,
                    viewer: t.news.galleryTitle,
                    close: t.news.galleryClose,
                    previous: t.news.galleryPrevious,
                    next: t.news.galleryNext
                  }}
                />
              </section>
            )}

            <div className="mt-14">
              <Link href="/actualites/" className="btn btn-outline btn-sm">
                <span aria-hidden="true">←</span> {t.news.backToNews}
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <div className="container-site">
            <SectionHeading title={t.news.relatedTitle} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((n) => (
                <NewsCard key={n._id} item={n} showExcerpt={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
