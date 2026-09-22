"use client";

import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DepartmentsContent() {
  const { t } = useLanguage();
  const { departments } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.departments.crumb} title={t.departments.title} />

      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.departments.eyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-navy">{t.departments.subtitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {departments.map((d) => (
              <div key={d.name} className="card-hover stagger-card rounded-2xl border border-line bg-white p-[30px]">
                <div className="mb-2.5 flex items-start justify-between gap-4">
                  <h3 className="max-w-xs text-[19px] leading-snug text-ink">{d.name}</h3>
                  <span
                    className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      d.tone === "active" ? "bg-[#E7F5EA] text-[#1E7A3D]" : "bg-[#FDF1D8] text-[#A6790C]"
                    }`}
                  >
                    {d.status}
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-1.5 pl-[18px]">
                  {d.attributions.map((a, i) => (
                    <li key={i} className="list-disc text-sm leading-relaxed text-muted marker:text-gold">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
