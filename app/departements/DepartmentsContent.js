"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StatusDot from "@/components/StatusDot";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function Attributions({ items, onDark = false }) {
  return (
    <ul className="mt-4 flex flex-col gap-2">
      {items.map((a, j) => (
        <li key={j} className={`flex gap-3 text-[15px] leading-relaxed ${onDark ? "text-on-navy" : "text-muted"}`}>
          <span aria-hidden="true" className={`mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${onDark ? "bg-gold" : "bg-gold-dark"}`} />
          {a}
        </li>
      ))}
    </ul>
  );
}

export default function DepartmentsContent() {
  const { t } = useLanguage();
  const { departments } = t.siteData;
  const numbered = departments.map((d, i) => ({ ...d, n: String(i + 1).padStart(2, "0") }));
  const active = numbered.filter((d) => d.tone === "active");
  const others = numbered.filter((d) => d.tone !== "active");

  return (
    <>
      <PageHeader crumbLabel={t.departments.crumb} title={t.departments.title} description={t.departments.subtitle} />

      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site">
          <h2 className="sr-only">{t.departments.eyebrow}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {active.map((d) => (
              <article key={d.name} className="flex flex-col justify-between gap-10 rounded-4xl bg-navy p-7 text-white sm:p-9 md:row-span-2">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-5xl font-black tracking-tight text-gold">{d.n}</span>
                  <StatusDot tone={d.tone} label={d.status} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{d.name}</h3>
                  <Attributions items={d.attributions} onDark />
                  <Link href="/equipe/#technologies-medias-communication" className="link-underline-on-dark mt-6 inline-block text-sm">
                    {t.team.title} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
            {others.map((d) => (
              <article key={d.name} className="card flex flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl font-black tracking-tight text-gold-dark">{d.n}</span>
                  <StatusDot tone={d.tone} label={d.status} />
                </div>
                <h3 className="mt-6 text-xl font-extrabold leading-snug text-navy">{d.name}</h3>
                <Attributions items={d.attributions} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
