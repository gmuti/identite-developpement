"use client";

import NewsCard, { NewsListItem } from "@/components/NewsCard";
import NewsletterBand from "@/components/NewsletterBand";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { formatDate } from "@/lib/format";

export default function NewsContent({ news, events }) {
  const { t, locale } = useLanguage();
  const [lead, ...rest] = news;
  const aside = rest.slice(0, 3);
  const others = rest.slice(3);

  return (
    <>
      <PageHeader crumbLabel={t.news.crumb} title={t.news.title} description={t.news.subtitle} />

      {/* ARTICLES : la plus récente en grand, les autres en grille */}
      <section className="bg-cream px-6 pb-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">{t.news.articlesTitle}</h2>
          {lead && (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
              <NewsCard item={lead} variant="lead" />
              {aside.length > 0 && (
                <ul className="rule-list self-start border-y border-line">
                  {aside.map((n) => (
                    <li key={n._id}>
                      <NewsListItem item={n} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {others.length > 0 && (
            <div className="mt-16 grid gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((n) => (
                <NewsCard key={n._id} item={n} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* EVENEMENTS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.news.eventsEyebrow} title={t.news.eventsTitle} />

          {events.length > 0 ? (
            <ul className="rule-list border-y border-line">
              {events.map((e) => (
                <li key={e._id} className="grid gap-2 py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8">
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="font-medium tabular-nums text-gold-dark">{formatDate(e.date, locale) || t.news.dateSoon}</span>
                    {e.location && <span className="text-muted">{e.location}</span>}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ink">{e.title}</h3>
                    {e.description && <p className="mt-2 leading-relaxed text-muted">{e.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-xl border-t border-line pt-6 leading-relaxed text-muted">{t.news.noEvents}</p>
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
