"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CheckIcon from "@/components/icons/CheckIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const { vision, mission, objectifs, values, fondateurs } = t.siteData;

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
          <SectionHeading eyebrow={t.about.foundersEyebrow} title={t.about.foundersTitle} onDark />
          <div className="grid gap-6 md:grid-cols-2">
            {fondateurs.map((f) => (
              <div key={f.name} className="flex items-start gap-5 rounded-xl bg-white p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cream font-display text-xl text-navy ring-1 ring-line"
                >
                  {f.initials}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-ink">{f.name}</h3>
                  <span className="mt-1 block text-sm font-medium text-gold-dark">{f.role}</span>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
