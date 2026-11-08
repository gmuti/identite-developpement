"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function LanguageToggle({ locale, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Changer de langue / Switch language"
      className="rounded-full bg-cream px-4 py-2.5 text-[13px] font-bold text-muted transition-colors hover:bg-sand"
    >
      <span className={locale === "fr" ? "text-navy" : ""}>FR</span>
      <span aria-hidden="true" className="mx-1">
        /
      </span>
      <span className={locale === "en" ? "text-navy" : ""}>EN</span>
    </button>
  );
}

// Barre de navigation flottante : une pilule blanche posée au-dessus du contenu.
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => setOpen(false), [pathname]);

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/a-propos", label: t.nav.about },
    { href: "/equipe", label: t.nav.team },
    { href: "/departements", label: t.nav.departments },
    { href: "/projets", label: t.nav.projects },
    { href: "/actualites", label: t.nav.news },
    { href: "/contact", label: t.nav.contact }
  ];

  // trailingSlash:true → usePathname() renvoie "/a-propos/" ; une sous-page garde sa rubrique active.
  const withoutTrailingSlash = (p) => (p.length > 1 ? p.replace(/\/$/, "") : p);
  const isActive = (href) => {
    const current = withoutTrailingSlash(pathname);
    return href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-white shadow-[0_8px_24px_rgba(4,17,29,0.10)] ring-1 ring-black/5">
        <div className="flex items-center justify-between gap-4 py-2 pl-5 pr-2 sm:pl-6">
          <Link href="/" className="flex flex-shrink-0 items-center" aria-label={t.nav.orgName}>
            <Image src="/logo-full.png" alt={t.nav.orgName} width={106} height={40} className="h-9 w-auto sm:h-10" priority />
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                  isActive(item.href) ? "bg-cream text-navy" : "text-muted hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageToggle locale={locale} onToggle={toggleLocale} />
            </div>
            <Link href="/don/" className="btn btn-primary btn-sm">
              {t.nav.donate}
            </Link>
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-navy transition-colors hover:bg-sand xl:hidden"
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-line px-3 pb-4 pt-2 xl:hidden">
            <nav aria-label="Navigation mobile" className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold ${isActive(item.href) ? "bg-cream text-navy" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2 px-1 sm:hidden">
              <LanguageToggle locale={locale} onToggle={toggleLocale} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
