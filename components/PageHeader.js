"use client";

import Link from "next/link";
import RouteMark from "@/components/RouteMark";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// En-tête des pages intérieures : fond papier, grand titre à gauche, introduction à droite,
// et la ligne d'or signature en guise de filet.
export default function PageHeader({ crumbLabel, title, description, crumbs = null }) {
  const { t } = useLanguage();
  const trail = crumbs || [{ label: crumbLabel }];

  return (
    <section className="bg-cream px-6 pb-12 pt-10 sm:px-12 sm:pb-16 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        <nav aria-label={t.common.breadcrumb} className="reveal flex flex-wrap items-center gap-2 text-xs text-muted">
          <Link href="/" className="transition-colors hover:text-navy">
            {t.common.home}
          </Link>
          {trail.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-gold-dark">
                ›
              </span>
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-navy">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-12">
          <h1 className="reveal page-title" style={{ animationDelay: "0.05s" }}>
            {title}
          </h1>
          {description && (
            <p className="reveal max-w-md text-base leading-relaxed text-muted md:pb-2" style={{ animationDelay: "0.1s" }}>
              {description}
            </p>
          )}
        </div>

        <div className="mt-10 flex items-center gap-4" aria-hidden="true">
          <RouteMark tone="dark" className="flex-shrink-0" />
          <span className="h-px flex-1 bg-line" />
        </div>
      </div>
    </section>
  );
}
