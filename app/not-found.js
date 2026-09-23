"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center sm:px-12">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">{t.notFound.eyebrow}</span>
      <h1 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{t.notFound.text}</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold px-6 py-2.5 text-[13px] font-bold text-navy-dark transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
      >
        {t.notFound.cta}
      </Link>
    </section>
  );
}
