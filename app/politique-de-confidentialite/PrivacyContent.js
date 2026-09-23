"use client";

import LegalPageContent from "@/components/LegalPageContent";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <LegalPageContent crumb={t.privacy.crumb} title={t.privacy.title} updated={t.privacy.updated} sections={t.privacy.sections} />
  );
}
