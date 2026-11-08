"use client";

import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CheckIcon from "@/components/icons/CheckIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const { vision, mission, objectifs, values } = t.siteData;
  const fondateurs = t.team.groups.find((g) => g.id === "fondateurs").members;

  return (
    <>
      <PageHeader crumbLabel={t.about.crumb} title={t.about.title} />

      {/* VISION / MISSION */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow={t.about.raisonEyebrow} title={t.about.visionMissionTitle} />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-line border-t-gold bg-cream p-8 [border-top-width:2px]">
              <h3 className="mb-3 text-lg font-medium text-navy">{t.about.visionLabel}</h3>
              <p className="leading-relaxed text-muted">{vision}</p>
            </div>
            <div className="rounded-xl border border-line border-t-navy bg-cream p-8 [border-top-width:2px]">
              <h3 className="mb-3 text-lg font-medium text-navy">{t.about.missionLabel}</h3>
              <p className="leading-relaxed text-muted">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow={t.about.objectifsEyebrow} title={t.about.objectifsTitle} />
          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {objectifs.map((o, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon className="mt-1 flex-shrink-0 text-gold-dark" />
                <span className="leading-relaxed text-ink">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
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
      <section className="bg-navy px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow={t.about.foundersEyebrow}
            title={t.about.foundersTitle}
            onDark
            action={
              <Link href="/equipe/" className="text-sm font-medium text-white transition-colors hover:text-gold">
                {t.about.teamLink} <span aria-hidden="true">→</span>
              </Link>
            }
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
            {fondateurs.map((f) => (
              <MemberCard key={f.name} member={f} onDark />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
