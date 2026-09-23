"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons/SocialIcons";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", Icon: FacebookIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { name: "YouTube", href: "#", Icon: YoutubeIcon }
];

export default function Footer() {
  const { t } = useLanguage();
  const { contactInfo } = t.siteData;

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/a-propos", label: t.nav.about },
    { href: "/departements", label: t.nav.departments },
    { href: "/projets", label: t.nav.projects },
    { href: "/actualites", label: t.nav.news },
    { href: "/don", label: t.nav.donate },
    { href: "/contact", label: t.nav.contact }
  ];

  const legalLinks = [
    { href: "/mentions-legales", label: t.legal.crumb },
    { href: "/politique-de-confidentialite", label: t.privacy.crumb }
  ];

  return (
    <footer className="w-full bg-navy-dark px-6 pb-8 pt-16 sm:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/favicon.png" alt={t.nav.orgName} width={32} height={32} />
            <span className="font-display text-[15px] text-white">{t.nav.orgName}</span>
          </Link>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[#9FB3BF]">{t.siteData.slogan}</p>
          <span className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-gold">
            {t.footer.nonprofitBadge}
          </span>

          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#9FB3BF] transition-colors hover:border-gold/40 hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wide text-gold">{t.footer.navHeading}</span>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[13px] text-[#9FB3BF] transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wide text-gold">{t.footer.legalHeading}</span>
          <ul className="mt-4 flex flex-col gap-3">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[13px] text-[#9FB3BF] transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wide text-gold">{t.footer.contactHeading}</span>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li className="text-[13px] leading-relaxed text-[#9FB3BF]">{contactInfo.email}</li>
            <li className="text-[13px] leading-relaxed text-[#9FB3BF]">{contactInfo.phone}</li>
            <li className="text-[13px] leading-relaxed text-[#9FB3BF]">{contactInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 pt-6">
        <span className="text-xs text-[#7C93A0]">{t.footer.rights(new Date().getFullYear())}</span>
      </div>
    </footer>
  );
}
