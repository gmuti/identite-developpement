"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/format";

function NewsMeta({ item }) {
  const { t, locale } = useLanguage();
  const date = formatDate(item.date, locale) || t.news.dateSoon;
  return (
    <p className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
      {item.tag && <span className="font-bold text-gold-dark">{item.tag}</span>}
      {item.tag && <span aria-hidden="true">·</span>}
      <span className="tabular-nums">{date}</span>
    </p>
  );
}

function imageFor(item, w, h) {
  return item.image ? urlFor(item.image)?.width(w).height(h).fit("crop").url() : null;
}

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy";

// Carte d'actualité arrondie. variant="lead" : plus grande, pour l'actualité principale.
// Sans image, la carte reste un bloc de texte (aucun visuel de remplacement).
export default function NewsCard({ item, variant = "default", showExcerpt = true }) {
  const { t } = useLanguage();
  const isLead = variant === "lead";
  const imageUrl = isLead ? imageFor(item, 1200, 720) : imageFor(item, 800, 500);

  return (
    <Link href={`/actualites/${item.slug}/`} className={`card card-link group flex h-full flex-col overflow-hidden ${focusRing}`}>
      {imageUrl && (
        <div className={`relative w-full overflow-hidden bg-sand ${isLead ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover transition-opacity duration-150 group-hover:opacity-90"
            sizes={isLead ? "(min-width: 1024px) 720px, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${isLead ? "p-6 sm:p-8" : "p-6"}`}>
        <NewsMeta item={item} />
        <h3
          className={`mt-3 font-extrabold leading-snug tracking-tight text-navy ${isLead ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}
        >
          {item.title}
        </h3>
        {showExcerpt && item.excerpt && <p className="mt-3 leading-relaxed text-muted">{item.excerpt}</p>}
        <span className="mt-auto pt-5 text-sm font-bold text-navy">
          {t.news.readMore}
          <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-150 ease-out group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

// Ligne compacte : vignette en « D » + date + titre.
export function NewsListItem({ item }) {
  const imageUrl = imageFor(item, 240, 240);
  return (
    <Link href={`/actualites/${item.slug}/`} className={`group flex items-center gap-4 py-5 ${focusRing}`}>
      {imageUrl && (
        <div className="relative aspect-square w-20 rounded-2xl flex-shrink-0 overflow-hidden bg-sand sm:w-24">
          <Image src={imageUrl} alt="" fill sizes="96px" className="object-cover" />
        </div>
      )}
      <div className="min-w-0">
        <NewsMeta item={item} />
        <h3 className="mt-1.5 text-base font-bold leading-snug text-navy group-hover:text-gold-dark sm:text-lg">{item.title}</h3>
      </div>
    </Link>
  );
}
