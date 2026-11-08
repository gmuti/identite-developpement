"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectsContent() {
  const { t } = useLanguage();
  const { axes } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.projects.crumb} title={t.projects.title} />

      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.subtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {axes.map((ax, i) => (
              <div key={ax.title} className="rounded-xl border border-line bg-cream p-6">
                <span className="font-display text-sm tabular-nums text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-3 mt-2 text-lg font-medium leading-snug text-ink">{ax.title}</h3>
                <ul className="flex flex-col gap-2 pl-5">
                  {ax.items.map((it, j) => (
                    <li key={j} className="list-disc text-sm leading-relaxed text-muted marker:text-gold-dark">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold px-6 py-12 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl text-navy-dark">{t.projects.ctaTitle}</h2>
            <p className="mt-2 text-sm text-on-gold">{t.projects.ctaText}</p>
          </div>
          <Link href="/don/" className="btn btn-navy self-start md:self-auto">
            {t.projects.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
