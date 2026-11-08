"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PageHeader({ crumbLabel, title, description }) {
  const { t } = useLanguage();

  return (
    <section className="bg-navy px-6 py-10 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div>
          <nav aria-label={t.common.breadcrumb} className="reveal mb-2 flex items-center gap-2 text-xs text-on-navy-muted">
            <Link href="/" className="transition-colors hover:text-white">
              {t.common.home}
            </Link>
            <span aria-hidden="true" className="text-gold">
              ›
            </span>
            <span className="text-on-navy">{crumbLabel}</span>
          </nav>
          <h1 className="reveal font-display text-3xl leading-tight text-white" style={{ animationDelay: "0.05s" }}>
            {title}
          </h1>
        </div>
        {description && (
          <p className="reveal max-w-sm text-sm leading-relaxed text-on-navy sm:text-right" style={{ animationDelay: "0.1s" }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
