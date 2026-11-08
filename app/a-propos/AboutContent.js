"use client";

import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const { vision, mission, objectifs, values } = t.siteData;
  const fondateurs = t.team.groups.find((g) => g.id === "fondateurs").members;

  return (
    <>
      <PageHeader crumbLabel={t.about.crumb} title={t.about.title} description={t.siteData.slogan} />

      {/* VISION / MISSION */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Photo id="bible" shape="d" imgClassName="aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 1024px) 360px, 100vw" />
          </div>
          <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
            <p className="eyebrow">{t.about.raisonEyebrow}</p>
            <h2 className="h-section mt-2 text-navy">{t.about.visionMissionTitle}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-navy p-6 text-white sm:p-7">
                <p className="text-sm font-bold text-gold">{t.about.visionLabel}</p>
                <p className="mt-3 text-lg font-bold leading-snug">{vision}</p>
              </div>
              <div className="rounded-3xl border border-line bg-white p-6 sm:p-7">
                <p className="text-sm font-bold text-gold-dark">{t.about.missionLabel}</p>
                <p className="mt-3 leading-relaxed text-ink">{mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow={t.about.objectifsEyebrow} title={t.about.objectifsTitle} />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {objectifs.map((o, i) => (
              <li key={i} className="flex flex-col gap-6 rounded-3xl bg-cream p-6">
                <span className="text-3xl font-black tabular-nums tracking-tight text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-semibold leading-snug text-navy">{o}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle} onDark />
          <ul className="flex flex-wrap gap-3">
            {values.map((v) => (
              <li key={v} className="rounded-full border border-white/20 px-5 py-3 text-lg font-bold sm:text-xl">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FONDATEURS */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow={t.about.foundersEyebrow}
            title={t.about.foundersTitle}
            action={
              <Link href="/equipe/" className="link-underline">
                {t.about.teamLink} <span aria-hidden="true">→</span>
              </Link>
            }
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {fondateurs.map((f, i) => (
              <MemberCard key={f.name} member={f} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
