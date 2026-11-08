"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InstagramIcon, TiktokIcon, XIcon } from "@/components/icons/SocialIcons";
import { ACTIVE_SOCIAL_PROFILES } from "@/lib/social";

const SOCIAL_ICONS = { x: XIcon, tiktok: TiktokIcon, instagram: InstagramIcon };

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
    <footer className="w-full bg-navy-dark px-6 pb-6 pt-10 sm:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.png" alt={t.nav.orgName} width={28} height={28} />
            <span className="font-display text-base text-white">{t.nav.orgName}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-on-navy-muted">{t.siteData.slogan}</p>
          <span className="mt-3 block text-xs text-on-navy-faint">
            {t.footer.nonprofitBadge}
          </span>

          {/* Seuls les profils dont l'URL est renseignée dans lib/social.js sont affichés */}
          {ACTIVE_SOCIAL_PROFILES.length > 0 && (
            <ul className="mt-4 flex items-center gap-2" aria-label={t.footer.followHeading}>
              {ACTIVE_SOCIAL_PROFILES.map(({ id, name, url }) => {
                const Icon = SOCIAL_ICONS[id];
                return (
                  <li key={id}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} (${t.footer.newTab})`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-on-navy-muted transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <span className="text-sm font-medium text-gold">{t.footer.navHeading}</span>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-on-navy-muted transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-sm font-medium text-gold">{t.footer.legalHeading}</span>
          <ul className="mt-4 flex flex-col gap-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-on-navy-muted transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-sm font-medium text-gold">{t.footer.contactHeading}</span>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="text-sm leading-relaxed text-on-navy-muted">{contactInfo.email}</li>
            <li className="text-sm leading-relaxed text-on-navy-muted">{contactInfo.phone}</li>
            <li className="text-sm leading-relaxed text-on-navy-muted">{contactInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-5">
        <span className="text-xs text-on-navy-faint">{t.footer.rights(new Date().getFullYear())}</span>
      </div>
    </footer>
  );
}
