"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/format";

// Visuel de remplacement quand l'article n'a pas encore d'image : fond marine uni + monogramme.
export function NewsImagePlaceholder({ label, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 bg-navy ${className}`}>
      <Image src="/favicon.png" alt="" width={32} height={32} className="opacity-40" />
      <span className="text-xs text-on-navy-muted">{label}</span>
    </div>
  );
}

export default function NewsCard({ item, showExcerpt = true }) {
  const { t, locale } = useLanguage();
  const date = formatDate(item.date, locale) || t.news.dateSoon;
  const imageUrl = item.image ? urlFor(item.image)?.width(800).height(450).fit("crop").url() : null;

  return (
    <Link
      href={`/actualites/${item.slug}/`}
      className="card-link group flex flex-col overflow-hidden rounded-xl border border-line bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      {imageUrl ? (
        <div className="relative aspect-[16/9] w-full">
          <Image src={imageUrl} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
      ) : (
        <NewsImagePlaceholder label={t.news.photoSoon} className="aspect-[16/9] w-full" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          {item.tag && <span className="font-medium text-gold-dark">{item.tag}</span>}
          {item.tag && <span aria-hidden="true">·</span>}
          <span className="tabular-nums">{date}</span>
        </div>
        <h3 className="mt-2 text-base font-medium leading-snug text-ink group-hover:text-navy">{item.title}</h3>
        {showExcerpt && item.excerpt && <p className="mt-2 text-sm leading-relaxed text-muted">{item.excerpt}</p>}
        <span className="mt-auto pt-4 text-sm font-medium text-navy">
          {t.news.readMore}
          <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
