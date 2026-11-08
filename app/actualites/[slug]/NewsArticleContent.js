"use client";

import Link from "next/link";
import Image from "next/image";
import PortableText from "@/components/PortableText";
import PhotoGallery from "@/components/PhotoGallery";
import NewsCard, { NewsImagePlaceholder } from "@/components/NewsCard";
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
      <section className="bg-navy px-6 pb-12 pt-8 sm:px-12">
        <div className="mx-auto max-w-3xl">
          <nav aria-label={t.common.breadcrumb} className="reveal flex flex-wrap items-center gap-2 text-xs text-on-navy-muted">
            <Link href="/" className="hover:text-white">
              {t.common.home}
            </Link>
            <span aria-hidden="true" className="text-gold">
              ›
            </span>
            <Link href="/actualites/" className="hover:text-white">
              {t.news.crumb}
            </Link>
          </nav>
          <div className="reveal mt-8 flex flex-wrap items-center gap-2 text-sm text-on-navy-muted">
            {article.tag && <span className="font-medium text-gold">{article.tag}</span>}
            {article.tag && <span aria-hidden="true">·</span>}
            <time dateTime={article.date || undefined} className="tabular-nums">
              {date}
            </time>
          </div>
          <h1 className="reveal mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">{article.title}</h1>
          {article.excerpt && <p className="reveal mt-4 text-lg leading-relaxed text-on-navy">{article.excerpt}</p>}
        </div>
      </section>

      {/* CORPS */}
      <article className="bg-white px-6 pb-20 pt-10 sm:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            {heroUrl ? (
              <Image src={heroUrl} alt="" fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
            ) : (
              <NewsImagePlaceholder label={t.news.photoSoon} className="h-full w-full" />
            )}
          </div>

          <div className="mt-4 text-base">
            {hasBody ? <PortableText value={article.body} /> : <p className="mt-6 leading-relaxed text-muted">{t.news.bodySoon}</p>}
          </div>

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
        <section className="bg-cream px-6 py-16 sm:px-12">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title={t.news.relatedTitle} className="mb-8" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
