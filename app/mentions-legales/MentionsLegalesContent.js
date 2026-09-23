"use client";

import LegalPageContent from "@/components/LegalPageContent";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MentionsLegalesContent() {
  const { t } = useLanguage();

  return (
    <LegalPageContent crumb={t.legal.crumb} title={t.legal.title} updated={t.legal.updated} sections={t.legal.sections} />
  );
}
