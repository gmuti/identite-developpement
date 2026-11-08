"use client";

import LegalPageContent from "@/components/LegalPageContent";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { PHOTOS } from "@/lib/photos";

export default function MentionsLegalesContent() {
  const { t, locale } = useLanguage();

  return (
    <LegalPageContent crumb={t.legal.crumb} title={t.legal.title} updated={t.legal.updated} sections={t.legal.sections}>
      {/* Crédits exigés par les licences Creative Commons des photos d'illustration */}
      <div className="grid gap-3">
        <h2 className="font-display text-2xl text-navy">{t.legal.photoCreditsHeading}</h2>
        <p className="leading-relaxed text-ink">{t.legal.photoCreditsIntro}</p>
        <ul className="rule-list mt-2 border-y border-line">
          {Object.values(PHOTOS).map((p) => (
            <li key={p.src} className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:justify-between sm:gap-6">
              <span className="text-ink">{p.alt[locale]}</span>
              <span className="text-muted">
                {p.credit.author},{" "}
                <a href={p.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  {p.credit.license}
                </a>{" "}
                ·{" "}
                <a href={p.credit.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  Wikimedia Commons
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </LegalPageContent>
  );
}
