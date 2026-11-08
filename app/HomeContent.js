"use client";

import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import NewsletterBand from "@/components/NewsletterBand";
import SectionHeading from "@/components/SectionHeading";
import StatusDot from "@/components/StatusDot";
import WorldMap from "@/components/WorldMap";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { MAP_PRESENCE } from "@/lib/mapPresence";

export default function HomeContent({ news }) {
  const { t, locale } = useLanguage();
  const { mission, values, departments } = t.siteData;

  return (
    <>
      {/* HERO */}
      <section className="bg-navy px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <span className="reveal eyebrow-on-dark">{t.home.badge}</span>
            <h1 className="reveal mt-4 font-display text-4xl leading-tight text-white sm:text-5xl" style={{ animationDelay: "0.05s" }}>
              {t.home.titleLine1}
              <br />
              <span className="text-gold">{t.home.titleLine2}</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-on-navy" style={{ animationDelay: "0.1s" }}>
              {mission}
            </p>
            <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.15s" }}>
              <Link href="/don/" className="btn btn-primary">
                {t.home.ctaDonate}
              </Link>
              <Link href="/a-propos/" className="btn btn-outline-on-dark">
                {t.home.ctaMission}
              </Link>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <WorldMap
              presence={MAP_PRESENCE}
              locale={locale}
              labels={{ mapAlt: t.home.mapAlt, listTitle: t.home.mapListTitle }}
            />
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="eyebrow">{t.home.visionEyebrow}</span>
            <h2 className="mb-4 mt-2 font-display text-3xl leading-snug text-navy">{t.home.visionTitle}</h2>
            <p className="leading-relaxed text-muted">{t.home.visionText}</p>
          </div>
          <div>
            <span className="eyebrow">{t.home.missionEyebrow}</span>
            <h2 className="mb-4 mt-2 font-display text-3xl leading-snug text-navy">{t.home.missionTitle}</h2>
            <p className="leading-relaxed text-muted">{mission}</p>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-cream px-6 py-20 sm:px-12">
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

      {/* DEPARTEMENTS */}
      <section className="bg-navy px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t.home.deptEyebrow}
            title={t.home.deptTitle}
            onDark
            action={
              <Link href="/departements/" className="text-sm font-medium text-white transition-colors hover:text-gold">
                {t.home.deptLink} <span aria-hidden="true">→</span>
              </Link>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <div key={d.name} className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <StatusDot tone={d.tone} label={d.status} onDark />
                <h3 className="text-lg font-medium leading-snug text-white">{d.name}</h3>
                <p className="text-sm leading-relaxed text-on-navy-muted">{d.attributions[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITES */}
      <section className="bg-cream px-6 py-20 sm:px-12">
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <NewsCard key={n._id} item={n} showExcerpt={false} />
            ))}
          </div>
        </div>
      </section>

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
