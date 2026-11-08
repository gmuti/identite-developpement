"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InstagramIcon, TiktokIcon, XIcon } from "@/components/icons/SocialIcons";
import { ACTIVE_SOCIAL_PROFILES } from "@/lib/social";

const SOCIAL_ICONS = { x: XIcon, tiktok: TiktokIcon, instagram: InstagramIcon };

// Pied de page : grand bloc marine arrondi posé sur le fond papier.
export default function Footer() {
  const { t } = useLanguage();
  const { contactInfo } = t.siteData;

  const navLinks = [
    { href: "/a-propos", label: t.nav.about },
    { href: "/equipe", label: t.nav.team },
    { href: "/departements", label: t.nav.departments },
    { href: "/projets", label: t.nav.projects },
    { href: "/actualites", label: t.nav.news },
    { href: "/don", label: t.nav.donate },
    { href: "/contact", label: t.nav.contact }
  ];

  const legalLinks = [
    { href: "/mentions-legales", label: t.legal.crumb },
    { href: "/politique-de-confidentialite", label: t.privacy.crumb },
    { href: "/accessibilite", label: t.accessibility.crumb }
  ];

  return (
    <div className="bg-cream px-3 pb-3 sm:px-5 sm:pb-5">
      <footer className="mx-auto max-w-[84rem] rounded-4xl bg-navy px-6 pb-8 pt-12 text-on-navy sm:rounded-5xl sm:px-12 sm:pt-16 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image src="/logo-dark-crop.png" alt={t.nav.orgName} width={900} height={332} className="h-11 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-xl font-extrabold leading-snug text-white sm:text-2xl">
              {t.home.titleLine1} <span className="text-gold">{t.home.titleLine2}</span>
            </p>
            <p className="mt-4 text-sm text-on-navy-faint">{t.footer.nonprofitBadge}</p>

            {ACTIVE_SOCIAL_PROFILES.length > 0 && (
              <ul className="mt-6 flex items-center gap-2" aria-label={t.footer.followHeading}>
                {ACTIVE_SOCIAL_PROFILES.map(({ id, name, url }) => {
                  const Icon = SOCIAL_ICONS[id];
                  return (
                    <li key={id}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} (${t.footer.newTab})`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-on-navy transition-colors hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-gold">{t.footer.navHeading}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-gold">{t.footer.legalHeading}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-bold text-gold">{t.footer.contactHeading}</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[15px]">
              {[contactInfo.email, contactInfo.phone, contactInfo.address].filter(Boolean).map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-on-navy-faint">{t.footer.rights(new Date().getFullYear())}</p>
      </footer>
    </div>
  );
}
