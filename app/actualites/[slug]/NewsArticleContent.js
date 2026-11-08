"use client";

import Link from "next/link";
import Image from "next/image";
import PortableText from "@/components/PortableText";
import PhotoGallery from "@/components/PhotoGallery";
import NewsCard from "@/components/NewsCard";
import RouteMark from "@/components/RouteMark";
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
      {/* EN-TÊTE */}
      <section className="bg-cream px-6 pb-10 pt-10 sm:px-12 sm:pt-14">
        <div className="mx-auto max-w-3xl">
          <nav aria-label={t.common.breadcrumb} className="reveal flex flex-wrap items-center gap-2 text-xs text-muted">
            <Link href="/" className="transition-colors hover:text-navy">
              {t.common.home}
            </Link>
            <span aria-hidden="true" className="text-gold-dark">
              ›
            </span>
            <Link href="/actualites/" className="transition-colors hover:text-navy">
              {t.news.crumb}
            </Link>
          </nav>
          <div className="reveal mt-10 flex flex-wrap items-center gap-2 text-sm text-muted">
            {article.tag && <span className="font-medium text-gold-dark">{article.tag}</span>}
            {article.tag && <span aria-hidden="true">·</span>}
            <time dateTime={article.date || undefined} className="tabular-nums">
              {date}
            </time>
          </div>
          <h1 className="reveal page-title mt-4" style={{ animationDelay: "0.05s" }}>
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="reveal mt-6 text-xl leading-relaxed text-muted" style={{ animationDelay: "0.1s" }}>
              {article.excerpt}
            </p>
          )}
          <RouteMark tone="dark" className="mt-10" />
        </div>
      </section>

      {/* CORPS */}
      <article className="bg-cream px-6 pb-20 sm:px-12">
        {heroUrl && (
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-line">
              <Image src={heroUrl} alt="" fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
            </div>
          </div>
        )}

        <div className="mx-auto mt-6 max-w-3xl text-lg">
          {hasBody ? <PortableText value={article.body} /> : <p className="mt-6 leading-relaxed text-muted">{t.news.bodySoon}</p>}

          {article.gallery?.length > 0 && (
            <section className="mt-16" aria-labelledby="gallery-title">
              <h2 id="gallery-title" className="mb-6 font-display text-2xl text-navy">
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

          <div className="mt-16 border-t border-line pt-6">
            <Link href="/actualites/" className="text-sm font-medium text-navy transition-colors hover:text-gold-dark">
              <span aria-hidden="true">← </span>
              {t.news.backToNews}
            </Link>
          </div>
        </div>
      </article>

      {/* AUTRES ACTUALITÉS */}
      {related.length > 0 && (
        <section className="bg-white px-6 py-20 sm:px-12">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title={t.news.relatedTitle} />
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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
