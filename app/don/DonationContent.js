"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
          <div className="rounded-2xl border border-line bg-cream p-9">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.donate.oneTimeEyebrow}</span>
            <h2 className="mb-6 mt-3 font-display text-2xl text-navy">{t.donate.chooseAmount}</h2>

            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  className="card-hover rounded-lg border border-line bg-white py-3 text-sm font-bold text-navy hover:border-gold"
                >
                  {a}
                </button>
              ))}
            </div>

            <label htmlFor="custom-amount" className="mb-1.5 block text-[13px] font-semibold text-ink">
              {t.donate.customAmountLabel}
            </label>
            <div className="mb-7 flex items-center gap-3">
              <input
                id="custom-amount"
                type="number"
                min="1"
                placeholder={t.donate.customAmountPlaceholder}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:outline focus:outline-2 focus:outline-navy"
              />
              <span className="text-sm font-semibold text-muted">{t.donate.currency}</span>
            </div>

            <button
              disabled
              className="w-full cursor-not-allowed rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold text-navy-dark opacity-60"
            >
              {t.donate.payButton}
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-muted">
              {t.donate.payNote1}
              <br />
              {t.donate.payNote2Prefix}
              <Link href="/contact" className="font-semibold text-navy underline">
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
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.donate.trustEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-navy">{t.donate.trustTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {donationTrust.map((tr) => (
              <div key={tr.title} className="card-hover stagger-card rounded-2xl border border-line bg-white p-7">
                <svg width="30" height="30" viewBox="0 0 30 30" className="mb-3.5" aria-hidden="true">
                  <circle cx="15" cy="15" r="13" fill="none" stroke="#E7C645" strokeWidth="2" />
                  <circle cx="15" cy="15" r="7" fill="none" stroke="#051829" strokeWidth="2" />
                </svg>
                <h3 className="mb-2 text-base leading-snug text-ink">{tr.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{tr.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVENIR MEMBRE */}
      <section className="bg-navy px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold">{t.donate.memberEyebrow}</span>
            <h2 className="mt-3 font-display text-[32px] text-white">{t.donate.memberTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#CBD9E1]">{t.donate.memberText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {membershipConditions.map((c, i) => (
              <div key={i} className="stagger-card flex items-start gap-3 rounded-2xl bg-white p-6">
                <svg width="20" height="20" viewBox="0 0 22 22" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <circle cx="11" cy="11" r="10" fill="none" stroke="#E7C645" strokeWidth="2" />
                  <path d="M6.5 11.5l3 3 6-6.5" fill="none" stroke="#051829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm leading-relaxed text-ink">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
