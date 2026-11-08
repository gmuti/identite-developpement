"use client";

import Link from "next/link";
import FingerprintMotif from "@/components/FingerprintMotif";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectsContent() {
  const { t } = useLanguage();
  const { axes } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.projects.crumb} title={t.projects.title} description={t.projects.subtitle} />

      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Photo id="ecole" shape="d" className="lg:sticky lg:top-28" imgClassName="aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 1024px) 360px, 100vw" />
          </div>
          <div className="lg:col-span-8">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {axes.map((ax, i) => (
                <li key={ax.title} className="card flex flex-col p-6 sm:p-7">
                  <span className="text-3xl font-black tabular-nums tracking-tight text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-5 text-xl font-extrabold leading-snug text-navy">{ax.title}</h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    {ax.items.map((it, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-dark" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-6">
        <div className="container-site">
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-4xl bg-navy p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
            <FingerprintMotif className="-right-32 -top-40 h-[28rem] w-[28rem] opacity-[0.12]" />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t.projects.ctaTitle}</h2>
              <p className="mt-2 leading-relaxed text-on-navy">{t.projects.ctaText}</p>
            </div>
            <Link href="/don/" className="btn btn-primary relative flex-shrink-0 self-start md:self-auto">
              {t.projects.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
