"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 pb-24 pt-36 text-center sm:px-12">
      <span className="eyebrow">{t.notFound.eyebrow}</span>
      <h1 className="h-page mt-3 text-navy">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{t.notFound.text}</p>
      <Link href="/" className="btn btn-primary mt-8">
        {t.notFound.cta}
      </Link>
    </section>
  );
}
