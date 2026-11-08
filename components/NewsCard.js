"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/format";

function NewsMeta({ item, className = "" }) {
  const { t, locale } = useLanguage();
  const date = formatDate(item.date, locale) || t.news.dateSoon;
  return (
    <div className={`flex flex-wrap items-center gap-2 text-xs text-muted ${className}`}>
      {item.tag && <span className="font-medium text-gold-dark">{item.tag}</span>}
      {item.tag && <span aria-hidden="true">·</span>}
      <span className="tabular-nums">{date}</span>
    </div>
  );
}

function imageFor(item, w, h) {
  return item.image ? urlFor(item.image)?.width(w).height(h).fit("crop").url() : null;
}

const linkFocus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy";

// Carte d'actualité. variant="lead" : grande image et titre en Fraunces, pour l'actualité principale.
// Sans image, la carte reste un bloc de texte (aucun visuel de remplacement).
export default function NewsCard({ item, variant = "default", showExcerpt = true }) {
  const { t } = useLanguage();
  const isLead = variant === "lead";
  const imageUrl = isLead ? imageFor(item, 1200, 750) : imageFor(item, 800, 500);

  return (
    <Link href={`/actualites/${item.slug}/`} className={`group flex flex-col rounded-xl ${linkFocus}`}>
      {imageUrl && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-line">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover transition-opacity duration-150 group-hover:opacity-90"
            sizes={isLead ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          />
        </div>
      )}
      <div className={imageUrl ? "pt-5" : "rounded-xl border border-line bg-cream p-6"}>
        <NewsMeta item={item} />
        <h3
          className={
            isLead
              ? "mt-3 font-display text-2xl leading-snug text-navy group-hover:text-gold-dark sm:text-3xl"
              : "mt-2 text-lg font-medium leading-snug text-ink group-hover:text-navy"
          }
        >
          {item.title}
        </h3>
        {showExcerpt && item.excerpt && <p className="mt-3 leading-relaxed text-muted">{item.excerpt}</p>}
        <span className="mt-4 inline-block text-sm font-medium text-navy">
          {t.news.readMore}
          <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

// Ligne compacte : vignette + date + titre, pour les listes d'actualités secondaires.
export function NewsListItem({ item }) {
  const imageUrl = imageFor(item, 240, 240);
  return (
    <Link href={`/actualites/${item.slug}/`} className={`group flex items-start gap-4 py-5 ${linkFocus}`}>
      {imageUrl && (
        <div className="relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg bg-line sm:w-24">
          <Image src={imageUrl} alt="" fill sizes="96px" className="object-cover" />
        </div>
      )}
      <div className="min-w-0">
        <NewsMeta item={item} />
        <h3 className="mt-2 text-base font-medium leading-snug text-ink group-hover:text-navy">{item.title}</h3>
      </div>
    </Link>
  );
}
