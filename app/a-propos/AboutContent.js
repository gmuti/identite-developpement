"use client";

import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const { vision, mission, objectifs, values, fondateurs } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.about.crumb} title={t.about.title} />

      {/* VISION / MISSION */}
      <section className="bg-white px-6 py-20 text-center sm:px-12">
        <div className="mx-auto max-w-5xl">
          <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.about.raisonEyebrow}</span>
          <h2 className="mb-10 mt-3 font-display text-[34px] text-navy">{t.about.visionMissionTitle}</h2>
          <div className="grid gap-10 text-left sm:grid-cols-2">
            <div className="rounded-2xl border-t-4 border-gold bg-cream p-9">
              <h3 className="mb-3 text-xl text-navy">{t.about.visionLabel}</h3>
              <p className="leading-relaxed text-muted">{vision}</p>
            </div>
            <div className="rounded-2xl border-t-4 border-navy bg-cream p-9">
              <h3 className="mb-3 text-xl text-navy">{t.about.missionLabel}</h3>
              <p className="leading-relaxed text-muted">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.about.objectifsEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-navy">{t.about.objectifsTitle}</h2>
          </div>
          <div className="grid gap-x-10 gap-y-[18px] sm:grid-cols-2">
            {objectifs.map((o, i) => (
              <div key={i} className="stagger-card flex items-start gap-3.5">
                <svg width="22" height="22" viewBox="0 0 22 22" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <circle cx="11" cy="11" r="10" fill="none" stroke="#E7C645" strokeWidth="2" />
                  <path d="M6.5 11.5l3 3 6-6.5" fill="none" stroke="#051829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[15.5px] leading-relaxed text-ink">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.about.valuesEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-navy">{t.about.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-4">
            {values.map((v) => (
              <div key={v} className="card-hover stagger-card rounded-2xl border border-line bg-cream p-[26px] text-center">
                <svg width="30" height="30" viewBox="0 0 30 30" className="mx-auto mb-3" aria-hidden="true">
                  <circle cx="15" cy="15" r="13" fill="none" stroke="#E7C645" strokeWidth="2" />
                  <circle cx="15" cy="15" r="7" fill="none" stroke="#051829" strokeWidth="2" />
                </svg>
                <div className="text-[15px] font-bold text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONDATEURS */}
      <section className="bg-navy px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold">{t.about.foundersEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-white">{t.about.foundersTitle}</h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            {fondateurs.map((f) => (
              <div key={f.name} className="stagger-card flex items-center gap-5 rounded-2xl bg-white p-8">
                <div className="flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-display text-2xl font-bold text-navy-dark">
                  {f.initials}
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-ink">{f.name}</h3>
                  <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{f.role}</span>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
