"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CheckIcon from "@/components/icons/CheckIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const amounts = ["25 $", "50 $", "100 $", "250 $"];

export default function DonationContent() {
  const { t } = useLanguage();
  const { donationTrust, membershipConditions } = t.siteData;

  return (
    <>
      <PageHeader crumbLabel={t.donate.crumb} title={t.donate.title} description={t.donate.subtitle} />

      {/* MONTANT */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-line bg-cream p-6 sm:p-8">
            <span className="eyebrow">{t.donate.oneTimeEyebrow}</span>
            <h2 className="mb-6 mt-2 font-display text-2xl text-navy">{t.donate.chooseAmount}</h2>

            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  className="rounded-lg border border-line bg-white py-3 text-sm font-semibold tabular-nums text-navy transition-colors hover:border-gold-dark/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  {a}
                </button>
              ))}
            </div>

            <label htmlFor="custom-amount" className="field-label">
              {t.donate.customAmountLabel}
            </label>
            <div className="mb-8 flex items-center gap-3">
              <input id="custom-amount" type="number" min="1" placeholder={t.donate.customAmountPlaceholder} className="field" />
              <span className="text-sm font-medium text-muted">{t.donate.currency}</span>
            </div>

            <button disabled className="btn btn-primary w-full cursor-not-allowed opacity-60">
              {t.donate.payButton}
            </button>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted">
              {t.donate.payNote1}
              <br />
              {t.donate.payNote2Prefix}
              <Link href="/contact/" className="font-medium text-navy underline underline-offset-2">
                {t.donate.payNote2Link}
              </Link>
              {t.donate.payNote2Suffix}
            </p>
          </div>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow={t.donate.trustEyebrow} title={t.donate.trustTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {donationTrust.map((tr) => (
              <div key={tr.title} className="border-t-2 border-gold pt-5">
                <h3 className="mb-2 text-base font-medium leading-snug text-ink">{tr.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{tr.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVENIR MEMBRE */}
      <section className="bg-navy px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow={t.donate.memberEyebrow} title={t.donate.memberTitle} onDark className="mb-4" />
          <p className="mb-10 max-w-xl leading-relaxed text-on-navy">{t.donate.memberText}</p>
          <ul className="grid gap-4 md:grid-cols-3">
            {membershipConditions.map((c, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <CheckIcon className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-white">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
