"use client";

import Link from "next/link";
import FingerprintMotif from "@/components/FingerprintMotif";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// En-tête des pages intérieures : bloc marine avec le motif empreinte, titre et introduction.
// Le haut est rembourré pour passer sous la barre de navigation flottante.
export default function PageHeader({ crumbLabel, title, description, crumbs = null, children = null }) {
  const { t } = useLanguage();
  const trail = crumbs || [{ label: crumbLabel }];

  return (
    <section className="relative overflow-hidden bg-navy pb-14 pt-32 text-white sm:pb-20 sm:pt-40">
      <FingerprintMotif className="-right-40 -top-24 h-[34rem] w-[34rem] opacity-[0.14] sm:-right-24 sm:h-[44rem] sm:w-[44rem]" />
      <div className="container-site relative">
        <nav aria-label={t.common.breadcrumb} className="reveal flex flex-wrap items-center gap-2 text-sm text-on-navy-muted">
          <Link href="/" className="transition-colors hover:text-white">
            {t.common.home}
          </Link>
          {trail.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-gold">
                ›
              </span>
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-on-navy">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="reveal h-page mt-6 max-w-4xl" style={{ animationDelay: "0.05s" }}>
          {title}
        </h1>
        {description && (
          <p className="reveal lead mt-5 max-w-2xl text-on-navy" style={{ animationDelay: "0.1s" }}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
