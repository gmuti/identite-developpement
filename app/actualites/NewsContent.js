"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { urlFor } from "@/lib/sanity";

export default function NewsContent({ news, events }) {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader crumbLabel={t.news.crumb} title={t.news.title} description={t.news.subtitle} />

      {/* ARTICLES */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.news.articlesEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-navy">{t.news.articlesTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <div key={n._id} className="card-hover stagger-card overflow-hidden rounded-2xl border border-line bg-white">
                {n.image ? (
                  <div className="relative h-40 w-full">
                    <Image
                      src={urlFor(n.image).width(800).height(400).fit("crop").url()}
                      alt={n.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy to-navy-dark">
                    <span className="text-[13px] text-white/60">{t.news.photoSoon}</span>
                  </div>
                )}
                <div className="p-[22px]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">{n.tag}</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-muted">{n.date}</span>
                  </div>
                  <h3 className="mt-2.5 text-[17px] leading-snug text-ink">{n.title}</h3>
                  {n.excerpt && <p className="mt-2 text-sm leading-relaxed text-muted">{n.excerpt}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENEMENTS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.news.eventsEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-navy">{t.news.eventsTitle}</h2>
          </div>

          {events.length > 0 ? (
            <div className="flex flex-col gap-4">
              {events.map((e) => (
                <div
                  key={e._id}
                  className="card-hover stagger-card flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-cream p-6"
                >
                  <div>
                    <h3 className="text-base text-ink">{e.title}</h3>
                    {e.description && <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.description}</p>}
                  </div>
                  <div className="flex flex-shrink-0 flex-col items-end gap-1 text-right">
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-dark">
                      {e.date || t.news.dateSoon}
                    </span>
                    {e.location && <span className="text-xs text-muted">{e.location}</span>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-cream p-10 text-center">
              <p className="text-sm leading-relaxed text-muted">{t.news.noEvents}</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gold px-6 py-14 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10">
          <div className="max-w-md">
            <h2 className="font-display text-2xl text-navy-dark">{t.news.newsletterTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4A3E10]">{t.news.newsletterText}</p>
          </div>
          <form className="flex flex-wrap gap-3">
            <label htmlFor="news-email" className="sr-only">
              {t.news.emailPlaceholder}
            </label>
            <input
              id="news-email"
              type="email"
              placeholder={t.news.emailPlaceholder}
              className="w-72 rounded-lg border-0 px-[18px] py-3.5 text-sm focus:outline focus:outline-2 focus:outline-navy"
            />
            <button className="rounded-lg bg-navy px-[26px] py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              {t.news.subscribe}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
