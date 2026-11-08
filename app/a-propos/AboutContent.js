"use client";

import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import SectionHeading from "@/components/SectionHeading";
import CheckIcon from "@/components/icons/CheckIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const { vision, mission, objectifs, values } = t.siteData;
  const fondateurs = t.team.groups.find((g) => g.id === "fondateurs").members;

  return (
    <>
      <PageHeader crumbLabel={t.about.crumb} title={t.about.title} description={t.siteData.slogan} />

      {/* VISION / MISSION, à côté d'une image de la dimension spirituelle de l'accompagnement */}
      <section className="bg-cream px-6 pb-20 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Photo id="bible" imgClassName="aspect-[16/10] lg:aspect-[4/5]" sizes="(min-width: 1024px) 420px, 100vw" />
          <div className="flex flex-col justify-center">
            <span className="eyebrow">{t.about.raisonEyebrow}</span>
            <h2 className="section-title mt-2">{t.about.visionMissionTitle}</h2>
            <dl className="mt-10 flex flex-col gap-8">
              <div className="border-l-2 border-gold pl-6">
                <dt className="text-sm font-medium text-gold-dark">{t.about.visionLabel}</dt>
                <dd className="mt-2 font-display text-2xl leading-snug text-navy">{vision}</dd>
              </div>
              <div className="border-l-2 border-navy pl-6">
                <dt className="text-sm font-medium text-gold-dark">{t.about.missionLabel}</dt>
                <dd className="mt-2 text-lg leading-relaxed text-ink">{mission}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.about.objectifsEyebrow} title={t.about.objectifsTitle} />
          <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-16">
            {objectifs.map((o, i) => (
              <li key={i} className="flex items-start gap-3 border-b border-line py-4">
                <CheckIcon className="mt-1 flex-shrink-0 text-gold-dark" />
                <span className="leading-relaxed text-ink">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle} />
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

      {/* FONDATEURS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t.about.foundersEyebrow}
            title={t.about.foundersTitle}
            action={
              <Link href="/equipe/" className="text-sm font-medium text-navy transition-colors hover:text-gold-dark">
                {t.about.teamLink} <span aria-hidden="true">→</span>
              </Link>
            }
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
            {fondateurs.map((f) => (
              <MemberCard key={f.name} member={f} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
