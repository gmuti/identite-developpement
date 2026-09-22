"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-navy-dark px-6 py-12 sm:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Logo" width={34} height={34} className="rounded-lg" />
          <span className="text-[13px] text-[#9FB3BF]">{t.footer.rights(new Date().getFullYear())}</span>
        </div>
        <span className="text-[13px] text-[#7C93A0]">{t.siteData.slogan}</span>
      </div>
    </footer>
  );
}
