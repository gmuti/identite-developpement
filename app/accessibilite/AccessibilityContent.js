"use client";

import LegalPageContent from "@/components/LegalPageContent";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AccessibilityContent() {
  const { t } = useLanguage();

  return (
    <LegalPageContent
      crumb={t.accessibility.crumb}
      title={t.accessibility.title}
      updated={t.accessibility.updated}
      sections={t.accessibility.sections}
    />
  );
}
