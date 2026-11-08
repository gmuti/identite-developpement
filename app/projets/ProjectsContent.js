"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectsContent() {
  const { t } = useLanguage();
  const { axes } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.projects.crumb} title={t.projects.title} description={t.projects.subtitle} />

      <section className="bg-cream px-6 pb-24 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          {/* L'image reste visible pendant la lecture des axes sur grand écran */}
          <div>
            <Photo id="ecole" className="lg:sticky lg:top-24" imgClassName="aspect-[16/10] lg:aspect-[4/5]" sizes="(min-width: 1024px) 360px, 100vw" />
          </div>

          <div>
            <h2 className="sr-only">{t.projects.eyebrow}</h2>
            <ol className="rule-list border-y border-line">
              {axes.map((ax, i) => (
                <li key={ax.title} className="grid gap-3 py-8 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6">
                  <span className="font-display text-2xl tabular-nums text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl leading-snug text-navy">{ax.title}</h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {ax.items.map((it, j) => (
                        <li key={j} className="flex gap-3 leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-dark" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col gap-6 rounded-xl bg-navy p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-2xl text-white">{t.projects.ctaTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-on-navy">{t.projects.ctaText}</p>
              </div>
              <Link href="/don/" className="btn btn-primary flex-shrink-0 self-start sm:self-auto">
                {t.projects.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
