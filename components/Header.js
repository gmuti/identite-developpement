"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/a-propos", label: t.nav.about },
    { href: "/departements", label: t.nav.departments },
    { href: "/projets", label: t.nav.projects },
    { href: "/actualites", label: t.nav.news },
    { href: "/contact", label: t.nav.contact }
  ];

  // next.config.mjs a trailingSlash:true, donc usePathname() renvoie "/a-propos/"
  // alors que les href ci-dessus n'ont pas de slash final — on normalise avant de comparer.
  const withoutTrailingSlash = (p) => (p.length > 1 ? p.replace(/\/$/, "") : p);
  const isActive = (href) => withoutTrailingSlash(pathname) === withoutTrailingSlash(href);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-line/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-12">
        <Link href="/" className="flex items-center">
          <Image src="/logo-full.png" alt={t.nav.orgName} width={106} height={40} className="h-10 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative pb-1.5 text-[13.5px] font-medium transition-colors ${
                isActive(item.href) ? "text-navy" : "text-ink hover:text-ink"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-200 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Changer de langue / Switch language"
            className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted"
          >
            <span className={locale === "fr" ? "text-navy" : ""}>FR</span>
            <span className="mx-1 text-line">/</span>
            <span className={locale === "en" ? "text-navy" : ""}>EN</span>
          </button>
          <Link href="/don">
            <button className="btn-pulse rounded-full bg-gold px-[18px] py-2 text-[13px] font-bold text-navy-dark transition-transform hover:-translate-y-0.5 hover:scale-[1.02]">
              {t.nav.donate}
            </button>
          </Link>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-medium ${isActive(item.href) ? "text-navy" : "text-ink"}`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleLocale}
              aria-label="Changer de langue / Switch language"
              className="self-start rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted"
            >
              <span className={locale === "fr" ? "text-navy" : ""}>FR</span>
              <span className="mx-1 text-line">/</span>
              <span className={locale === "en" ? "text-navy" : ""}>EN</span>
            </button>
            <Link href="/don" onClick={() => setOpen(false)}>
              <button className="mt-1 w-full rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy-dark">
                {t.nav.donate}
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
