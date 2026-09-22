"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PageHeader({ crumbLabel, title, description }) {
  const { t } = useLanguage();

  return (
    <section className="border-b border-white/5 bg-navy px-6 py-9 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div>
          <nav aria-label="Fil d'Ariane" className="reveal mb-2 flex items-center gap-1.5 text-[12.5px] text-[#9FB3BF]">
            <Link href="/" className="hover:text-white">
              {t.common.home}
            </Link>
            <span aria-hidden="true" className="text-gold">
              ›
            </span>
            <span className="text-white/70">{crumbLabel}</span>
          </nav>
          <h1
            className="reveal font-display text-[26px] leading-tight text-white sm:text-[30px]"
            style={{ animationDelay: "0.05s" }}
          >
            {title}
          </h1>
        </div>
        {description && (
          <p
            className="reveal max-w-sm text-sm leading-relaxed text-[#CBD9E1] sm:text-right"
            style={{ animationDelay: "0.12s" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
