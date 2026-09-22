"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectsContent() {
  const { t } = useLanguage();
  const { axes } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.projects.crumb} title={t.projects.title} />

      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.projects.eyebrow}</span>
            <h2 className="mt-3 font-display text-[32px] text-navy">{t.projects.subtitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {axes.map((ax) => (
              <div key={ax.title} className="card-hover stagger-card rounded-2xl border border-line bg-cream p-[30px]">
                <svg width="34" height="34" viewBox="0 0 34 34" className="mb-4" aria-hidden="true">
                  <circle cx="17" cy="17" r="15" fill="none" stroke="#051829" strokeWidth="2" />
                  <circle cx="17" cy="17" r="8" fill="none" stroke="#E7C645" strokeWidth="2" />
                </svg>
                <h3 className="mb-3 text-lg leading-snug text-ink">{ax.title}</h3>
                <ul className="flex flex-col gap-1.5 pl-[18px]">
                  {ax.items.map((it, i) => (
                    <li key={i} className="list-disc text-sm leading-relaxed text-muted marker:text-gold">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold px-6 py-14 text-center sm:px-12">
        <h2 className="mb-3.5 font-display text-2xl text-navy-dark">{t.projects.ctaTitle}</h2>
        <p className="mb-[26px] text-[15px] text-[#4A3E10]">{t.projects.ctaText}</p>
        <Link href="/don">
          <button className="rounded-lg bg-navy px-8 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5">
            {t.projects.ctaButton}
          </button>
        </Link>
      </section>
    </>
  );
}
