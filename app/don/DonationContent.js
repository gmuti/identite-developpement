"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
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

      {/* MONTANT, à côté de ce que le don finance */}
      <section className="bg-cream px-6 pb-20 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
          <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
            <span className="eyebrow">{t.donate.oneTimeEyebrow}</span>
            <h2 className="mb-6 mt-2 font-display text-2xl text-navy">{t.donate.chooseAmount}</h2>

            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  className="rounded-lg border border-line bg-cream py-3 text-base font-medium tabular-nums text-navy transition-colors hover:border-gold-dark/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
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

            <button disabled className="btn btn-primary btn-lg w-full cursor-not-allowed opacity-60">
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

          <Photo id="ecole" imgClassName="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[28rem]" className="flex flex-col [&>div]:flex-1" sizes="(min-width: 1024px) 560px, 100vw" />
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.donate.trustEyebrow} title={t.donate.trustTitle} />
          <div className="grid gap-8 md:grid-cols-3">
            {donationTrust.map((tr) => (
              <div key={tr.title} className="border-t-2 border-gold pt-5">
                <h3 className="mb-2 text-lg font-medium leading-snug text-ink">{tr.title}</h3>
                <p className="leading-relaxed text-muted">{tr.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVENIR MEMBRE */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <span className="eyebrow">{t.donate.memberEyebrow}</span>
            <h2 className="section-title mt-2">{t.donate.memberTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted">{t.donate.memberText}</p>
          </div>
          <ul className="rule-list self-end border-y border-line">
            {membershipConditions.map((c, i) => (
              <li key={i} className="flex items-start gap-3 py-4">
                <CheckIcon className="mt-1 flex-shrink-0 text-gold-dark" />
                <span className="leading-relaxed text-ink">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
