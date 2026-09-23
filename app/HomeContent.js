"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { urlFor } from "@/lib/sanity";

export default function HomeContent({ news }) {
  const { t } = useLanguage();
  const { mission, values, departments } = t.siteData;
  const loopedValues = [...values, ...values];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy px-6 py-28 sm:px-12 sm:py-36">
        <svg
          className="ring-spin pointer-events-none absolute -right-20 -top-24 opacity-[0.09]"
          width="520" height="520" viewBox="0 0 520 520" aria-hidden="true"
        >
          <circle cx="260" cy="260" r="240" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="260" cy="260" r="180" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="14 10" />
          <circle cx="260" cy="260" r="120" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
        <div
          className="ring-float pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full blur-[2px]"
          style={{ background: "radial-gradient(circle, rgba(231,198,69,0.18), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="reveal mb-7 inline-block rounded-full bg-gold/15 px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-wide text-gold" style={{ animationDelay: "0.05s" }}>
            {t.home.badge}
          </span>
          <h1 className="reveal mb-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl" style={{ animationDelay: "0.15s" }}>
            {t.home.titleLine1}
            <br />
            <span className="shimmer-text animate-shimmer">{t.home.titleLine2}</span>
          </h1>
          <p className="reveal mb-10 max-w-xl text-lg leading-relaxed text-[#CBD9E1]" style={{ animationDelay: "0.28s" }}>
            {mission}
          </p>
          <div className="reveal flex gap-4" style={{ animationDelay: "0.4s" }}>
            <Link href="/don">
              <button className="btn-pulse rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold text-navy-dark transition-transform hover:-translate-y-0.5 hover:scale-[1.02]">
                {t.home.ctaDonate}
              </button>
            </Link>
            <Link href="/a-propos">
              <button className="rounded-lg border border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">
                {t.home.ctaMission}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 sm:grid-cols-2">
          <div>
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.home.visionEyebrow}</span>
            <h2 className="mb-4 mt-3 font-display text-3xl leading-snug text-navy">{t.home.visionTitle}</h2>
            <p className="leading-relaxed text-muted">{t.home.visionText}</p>
          </div>
          <div>
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.home.missionEyebrow}</span>
            <h2 className="mb-4 mt-3 font-display text-3xl leading-snug text-navy">{t.home.missionTitle}</h2>
            <p className="leading-relaxed text-muted">{mission}</p>
          </div>
        </div>
      </section>

      {/* VALEURS - marquee */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.home.valuesEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-navy">{t.home.valuesTitle}</h2>
          </div>
          <div className="marquee-wrap w-full overflow-hidden">
            <div className="marquee-track flex w-max gap-5">
              {loopedValues.map((v, i) => (
                <div
                  key={i}
                  className="card-hover flex flex-shrink-0 items-center gap-3 rounded-full border border-line bg-white px-6 py-4"
                >
                  <svg width="26" height="26" viewBox="0 0 30 30" aria-hidden="true">
                    <circle cx="15" cy="15" r="13" fill="none" stroke="#E7C645" strokeWidth="2" />
                    <circle cx="15" cy="15" r="7" fill="none" stroke="#051829" strokeWidth="2" />
                  </svg>
                  <span className="whitespace-nowrap text-base font-bold text-ink">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTEMENTS */}
      <section className="bg-navy px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold">{t.home.deptEyebrow}</span>
            <h2 className="mt-3 font-display text-[34px] text-white">{t.home.deptTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d, i) => (
              <div key={d.name} className="card-hover stagger-card flex flex-col gap-3.5 rounded-2xl bg-white p-7">
                <div className="flex items-center justify-between">
                  <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
                    <circle cx="17" cy="17" r="15" fill="none" stroke="#051829" strokeWidth="2" />
                    <circle cx="17" cy="17" r="8" fill="none" stroke="#E7C645" strokeWidth="2" />
                  </svg>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      d.tone === "active" ? "bg-[#E7F5EA] text-[#1E7A3D]" : "bg-[#FDF1D8] text-[#A6790C]"
                    }`}
                  >
                    {d.status}
                  </span>
                </div>
                <h3 className="text-lg leading-snug text-ink">{d.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.attributions[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITES */}
      <section className="bg-cream px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.home.newsEyebrow}</span>
              <h2 className="mt-3 font-display text-[34px] text-navy">{t.home.newsTitle}</h2>
            </div>
            <Link href="/actualites" className="group relative pb-1 text-[15px] font-bold text-navy">
              {t.home.viewAll}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <div key={n._id} className="card-hover overflow-hidden rounded-2xl border border-line bg-white">
                {n.image ? (
                  <div className="relative h-40 w-full">
                    <Image
                      src={urlFor(n.image).width(800).height(400).fit("crop").url()}
                      alt={n.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy to-navy-dark">
                    <span className="text-[13px] text-white/60">{t.home.photoSoon}</span>
                  </div>
                )}
                <div className="p-[22px]">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">{n.tag}</span>
                  <h3 className="mt-2.5 text-[17px] leading-snug text-ink">{n.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gold px-6 py-14 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10">
          <div className="max-w-md">
            <h2 className="font-display text-2xl text-navy-dark">{t.home.newsletterTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4A3E10]">{t.home.newsletterText}</p>
          </div>
          <form className="flex flex-wrap gap-3">
            <label htmlFor="newsletter-email" className="sr-only">{t.home.emailSrLabel}</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={t.home.emailPlaceholder}
              className="w-72 rounded-lg border-0 px-[18px] py-3.5 text-sm focus:outline focus:outline-2 focus:outline-navy"
            />
            <button className="rounded-lg bg-navy px-[26px] py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              {t.home.subscribe}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
