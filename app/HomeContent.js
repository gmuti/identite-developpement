"use client";

import Link from "next/link";
import NewsCard, { NewsListItem } from "@/components/NewsCard";
import NewsletterBand from "@/components/NewsletterBand";
import SectionHeading from "@/components/SectionHeading";
import StatusDot from "@/components/StatusDot";
import WorldMap from "@/components/WorldMap";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { MAP_PRESENCE } from "@/lib/mapPresence";

export default function HomeContent({ news }) {
  const { t, locale } = useLanguage();
  const { mission, values, departments } = t.siteData;
  const [lead, ...others] = news;

  return (
    <>
      {/* HERO : le slogan à gauche, la carte des liens entre l'Ontario et les pays d'action à droite */}
      <section className="bg-navy px-6 pb-16 pt-12 sm:px-12 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <span className="reveal eyebrow-on-dark">{t.home.badge}</span>
            <h1
              className="reveal mt-5 font-display text-[2.5rem] leading-[1.05] text-white sm:text-6xl lg:text-[4rem]"
              style={{ animationDelay: "0.05s" }}
            >
              {t.home.titleLine1}
              <br />
              <span className="text-gold">{t.home.titleLine2}</span>
            </h1>
            <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-on-navy" style={{ animationDelay: "0.1s" }}>
              {mission}
            </p>
            <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.15s" }}>
              <Link href="/don/" className="btn btn-primary btn-lg">
                {t.home.ctaDonate}
              </Link>
              <Link href="/a-propos/" className="btn btn-outline-on-dark btn-lg">
                {t.home.ctaMission}
              </Link>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <WorldMap presence={MAP_PRESENCE} locale={locale} labels={{ mapAlt: t.home.mapAlt, listTitle: t.home.mapListTitle }} />
          </div>
        </div>
      </section>

      {/* VISION / MISSION : la vision en grand, comme une citation */}
      <section className="bg-cream px-6 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow">{t.home.visionEyebrow}</span>
          <p className="mt-4 max-w-4xl font-display text-3xl leading-snug text-navy sm:text-[2.5rem] sm:leading-[1.2]">
            {t.home.visionTitle}
          </p>
          <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-16">
            <p className="leading-relaxed text-muted">{t.home.visionText}</p>
            <div>
              <span className="eyebrow">{t.home.missionEyebrow}</span>
              <h2 className="mb-3 mt-2 text-xl font-medium text-ink">{t.home.missionTitle}</h2>
              <p className="leading-relaxed text-muted">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.home.valuesEyebrow} title={t.home.valuesTitle} />
          <ul className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
            {values.map((v, i) => (
              <li key={v} className="flex items-baseline gap-3 border-b border-line py-5 pr-4">
                <span className="font-display text-sm tabular-nums text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base font-medium text-ink">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DEPARTEMENTS : liste éditoriale, le département actif en tête */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t.home.deptEyebrow}
            title={t.home.deptTitle}
            action={
              <Link href="/departements/" className="text-sm font-medium text-navy transition-colors hover:text-gold-dark">
                {t.home.deptLink} <span aria-hidden="true">→</span>
              </Link>
            }
          />
          <ul className="rule-list border-y border-line">
            {departments.map((d, i) => (
              <li key={d.name} className="grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.2fr)_10rem] sm:items-baseline sm:gap-6">
                <span className="hidden font-display text-sm tabular-nums text-gold-dark sm:block">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`text-lg leading-snug ${d.tone === "active" ? "font-medium text-navy" : "text-ink"}`}>{d.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.attributions[0]}</p>
                <div className="sm:justify-self-end">
                  <StatusDot tone={d.tone} label={d.status} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACTUALITES : une actualité principale, les suivantes en liste */}
      {lead && (
        <section className="bg-white px-6 py-20 sm:px-12">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow={t.home.newsEyebrow}
              title={t.home.newsTitle}
              action={
                <Link href="/actualites/" className="text-sm font-medium text-navy transition-colors hover:text-gold-dark">
                  {t.home.viewAll} <span aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
              <NewsCard item={lead} variant="lead" />
              {others.length > 0 && (
                <ul className="rule-list border-y border-line">
                  {others.map((n) => (
                    <li key={n._id}>
                      <NewsListItem item={n} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      <NewsletterBand
        id="newsletter-email"
        title={t.home.newsletterTitle}
        text={t.home.newsletterText}
        placeholder={t.home.emailPlaceholder}
        srLabel={t.home.emailSrLabel}
        buttonLabel={t.home.subscribe}
      />
    </>
  );
}
