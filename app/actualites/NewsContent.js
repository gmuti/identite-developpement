"use client";

import NewsCard from "@/components/NewsCard";
import NewsletterBand from "@/components/NewsletterBand";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { formatDate } from "@/lib/format";

export default function NewsContent({ news, events }) {
  const { t, locale } = useLanguage();

  return (
    <>
      <PageHeader crumbLabel={t.news.crumb} title={t.news.title} description={t.news.subtitle} />

      {/* ARTICLES */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.news.articlesEyebrow} title={t.news.articlesTitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <NewsCard key={n._id} item={n} />
            ))}
          </div>
        </div>
      </section>

      {/* EVENEMENTS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow={t.news.eventsEyebrow} title={t.news.eventsTitle} />

          {events.length > 0 ? (
            <ul className="flex flex-col border-t border-line">
              {events.map((e) => (
                <li key={e._id} className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div>
                    <h3 className="text-base font-medium text-ink">{e.title}</h3>
                    {e.description && <p className="mt-2 text-sm leading-relaxed text-muted">{e.description}</p>}
                  </div>
                  <div className="flex flex-shrink-0 flex-col gap-1 text-sm sm:items-end sm:text-right">
                    <span className="font-medium tabular-nums text-gold-dark">{formatDate(e.date, locale) || t.news.dateSoon}</span>
                    {e.location && <span className="text-muted">{e.location}</span>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-line bg-cream p-8">
              <p className="text-sm leading-relaxed text-muted">{t.news.noEvents}</p>
            </div>
          )}
        </div>
      </section>

      <NewsletterBand
        id="news-email"
        title={t.news.newsletterTitle}
        text={t.news.newsletterText}
        placeholder={t.news.emailPlaceholder}
        srLabel={t.news.emailPlaceholder}
        buttonLabel={t.news.subscribe}
      />
    </>
  );
}
