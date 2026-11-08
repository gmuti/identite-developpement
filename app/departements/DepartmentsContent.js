"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StatusDot from "@/components/StatusDot";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DepartmentsContent() {
  const { t } = useLanguage();
  const { departments } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.departments.crumb} title={t.departments.title} description={t.departments.subtitle} />

      <section className="bg-cream px-6 pb-24 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">{t.departments.eyebrow}</h2>
          <ol className="rule-list border-y border-line">
            {departments.map((d, i) => (
              <li key={d.name} className="grid gap-4 py-8 md:grid-cols-[4rem_minmax(0,5fr)_minmax(0,6fr)] md:gap-8">
                <span className="font-display text-2xl tabular-nums text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={`font-display text-2xl leading-snug ${d.tone === "active" ? "text-navy" : "text-ink"}`}>{d.name}</h3>
                  <div className="mt-3">
                    <StatusDot tone={d.tone} label={d.status} />
                  </div>
                  {d.tone === "active" && (
                    <Link href="/equipe/#technologies-medias-communication" className="mt-4 inline-block text-sm font-medium text-navy transition-colors hover:text-gold-dark">
                      {t.team.title} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
                <ul className="flex flex-col gap-2 md:pt-2">
                  {d.attributions.map((a, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-dark" />
                      {a}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
