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

      {/* MONTANT */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="rounded-4xl border border-line bg-white p-6 sm:p-9 lg:col-span-7">
            <p className="eyebrow">{t.donate.oneTimeEyebrow}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{t.donate.chooseAmount}</h2>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  className="rounded-full border border-line bg-cream py-3.5 text-base font-extrabold tabular-nums text-navy transition-colors hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  {a}
                </button>
              ))}
            </div>

            <label htmlFor="custom-amount" className="field-label mt-6">
              {t.donate.customAmountLabel}
            </label>
            <div className="flex items-center gap-3">
              <input id="custom-amount" type="number" min="1" placeholder={t.donate.customAmountPlaceholder} className="field" />
              <span className="text-sm font-bold text-muted">{t.donate.currency}</span>
            </div>

            <button disabled className="btn btn-primary mt-8 w-full cursor-not-allowed opacity-60">
              {t.donate.payButton}
            </button>
            <p className="mt-4 text-center text-[13px] leading-relaxed text-muted">
              {t.donate.payNote1}
              <br />
              {t.donate.payNote2Prefix}
              <Link href="/contact/" className="font-bold text-navy underline underline-offset-2">
                {t.donate.payNote2Link}
              </Link>
              {t.donate.payNote2Suffix}
            </p>
          </div>

          <div className="lg:col-span-5">
            <Photo id="ecole" shape="d" imgClassName="aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 1024px) 440px, 100vw" />
          </div>
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow={t.donate.trustEyebrow} title={t.donate.trustTitle} />
          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {donationTrust.map((tr, i) => (
              <article key={tr.title} className={`flex flex-col gap-4 rounded-3xl p-6 sm:p-7 ${i === 1 ? "bg-navy text-white" : "bg-white"}`}>
                <h3 className={`text-lg font-extrabold ${i === 1 ? "text-gold" : "text-gold-dark"}`}>{tr.title}</h3>
                <p className={`leading-relaxed ${i === 1 ? "text-on-navy" : "text-navy"}`}>{tr.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVENIR MEMBRE */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{t.donate.memberEyebrow}</p>
            <h2 className="h-section mt-2 text-navy">{t.donate.memberTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted">{t.donate.memberText}</p>
          </div>
          <ul className="grid gap-3 lg:col-span-7">
            {membershipConditions.map((c, i) => (
              <li key={i} className="flex items-start gap-4 rounded-3xl border border-line bg-white p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-navy-dark">
                  <CheckIcon />
                </span>
                <span className="pt-1 font-semibold leading-relaxed text-navy">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
