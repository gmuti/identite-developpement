"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function LanguageToggle({ locale, onToggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Changer de langue / Switch language"
      className={`rounded-lg border border-line px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-navy/30 ${className}`}
    >
      <span className={locale === "fr" ? "text-navy" : ""}>FR</span>
      <span aria-hidden="true" className="mx-1 text-line">
        /
      </span>
      <span className={locale === "en" ? "text-navy" : ""}>EN</span>
    </button>
  );
}

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
  // alors que les href ci-dessus n'ont pas de slash final - on normalise avant de comparer.
  // Une sous-page (ex. /actualites/mon-article/) garde sa rubrique active.
  const withoutTrailingSlash = (p) => (p.length > 1 ? p.replace(/\/$/, "") : p);
  const isActive = (href) => {
    const current = withoutTrailingSlash(pathname);
    return href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-line/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-12">
        <Link href="/" className="flex items-center">
          <Image src="/logo-full.png" alt={t.nav.orgName} width={106} height={40} className="h-10 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`group relative py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-navy" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gold transition-transform duration-200 ease-out ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle locale={locale} onToggle={toggleLocale} />
          <Link href="/don/" className="btn btn-primary btn-sm">
            {t.nav.donate}
          </Link>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-line/70 py-3 text-base font-medium ${isActive(item.href) ? "text-navy" : "text-ink"}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <LanguageToggle locale={locale} onToggle={toggleLocale} />
              <Link href="/don/" onClick={() => setOpen(false)} className="btn btn-primary flex-1">
                {t.nav.donate}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
