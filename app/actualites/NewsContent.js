"use client";

import NewsCard from "@/components/NewsCard";
import NewsletterBand from "@/components/NewsletterBand";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { formatDate } from "@/lib/format";

export default function NewsContent({ news, events }) {
  const { t, locale } = useLanguage();
  const [lead, ...others] = news;

  return (
    <>
      <PageHeader crumbLabel={t.news.crumb} title={t.news.title} description={t.news.subtitle} />

      {/* ARTICLES : la plus récente en grand, les autres en grille */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site">
          <h2 className="sr-only">{t.news.articlesTitle}</h2>
          <div className="grid gap-5 lg:grid-cols-12">
            {lead && (
              <div className="lg:col-span-8">
                <NewsCard item={lead} variant="lead" />
              </div>
            )}
            {others.slice(0, 2).length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                {others.slice(0, 2).map((n) => (
                  <NewsCard key={n._id} item={n} showExcerpt={false} />
                ))}
              </div>
            )}
          </div>
          {others.length > 2 && (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.slice(2).map((n) => (
                <NewsCard key={n._id} item={n} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ÉVÉNEMENTS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow={t.news.eventsEyebrow} title={t.news.eventsTitle} />
          {events.length > 0 ? (
            <ul className="grid gap-3">
              {events.map((e) => (
                <li key={e._id} className="grid gap-3 rounded-3xl bg-cream p-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8 sm:p-7">
                  <div className="flex flex-col gap-1">
                    <span className="font-extrabold tabular-nums text-gold-dark">{formatDate(e.date, locale) || t.news.dateSoon}</span>
                    {e.location && <span className="text-sm text-muted">{e.location}</span>}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy">{e.title}</h3>
                    {e.description && <p className="mt-2 leading-relaxed text-muted">{e.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-2xl rounded-3xl bg-cream p-6 leading-relaxed text-muted sm:p-7">{t.news.noEvents}</p>
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
