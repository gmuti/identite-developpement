"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import StatusDot from "@/components/StatusDot";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DepartmentsContent() {
  const { t } = useLanguage();
  const { departments } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.departments.crumb} title={t.departments.title} />

      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.departments.eyebrow} title={t.departments.subtitle} />
          <div className="grid gap-6 md:grid-cols-2">
            {departments.map((d) => (
              <div key={d.name} className="rounded-xl border border-line bg-white p-6 sm:p-8">
                <StatusDot tone={d.tone} label={d.status} />
                <h3 className="mt-3 text-lg font-medium leading-snug text-ink">{d.name}</h3>
                <ul className="mt-4 flex flex-col gap-2 pl-5">
                  {d.attributions.map((a, i) => (
                    <li key={i} className="list-disc text-sm leading-relaxed text-muted marker:text-gold-dark">
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
