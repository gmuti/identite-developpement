"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-navy-dark px-6 py-12 sm:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image src="/favicon.png" alt="Logo" width={30} height={30} />
          <span className="text-[13px] text-[#9FB3BF]">{t.footer.rights(new Date().getFullYear())}</span>
        </div>
        <span className="text-[13px] text-[#7C93A0]">{t.siteData.slogan}</span>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/5 pt-6">
        <Link href="/mentions-legales" className="text-xs text-[#7C93A0] transition-colors hover:text-white">
          {t.legal.crumb}
        </Link>
        <Link href="/politique-de-confidentialite" className="text-xs text-[#7C93A0] transition-colors hover:text-white">
          {t.privacy.crumb}
        </Link>
      </div>
    </footer>
  );
}
