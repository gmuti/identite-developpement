"use client";

import Link from "next/link";
import Image from "next/image";
import FingerprintMotif from "@/components/FingerprintMotif";
import NewsCard from "@/components/NewsCard";
import NewsletterBand from "@/components/NewsletterBand";
import SectionHeading from "@/components/SectionHeading";
import StatusDot from "@/components/StatusDot";
import WorldMap from "@/components/WorldMap";
import { PhotoCredit } from "@/components/Photo";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { MAP_PRESENCE } from "@/lib/mapPresence";
import { PHOTOS } from "@/lib/photos";

// Hauteurs croissantes des quatre colonnes « dimensions de croissance » (grand écran)
const PILLAR_STYLES = [
  "lg:h-[46%] bg-gold text-navy-dark",
  "lg:h-[62%] bg-gold-dark text-white",
  "lg:h-[80%] bg-navy-light text-white",
  "lg:h-full bg-navy text-white"
];

const amounts = ["25 $", "50 $", "100 $", "250 $"];

export default function HomeContent({ news }) {
  const { t, locale } = useLanguage();
  const h = t.homeSections;
  const { mission, vision, values, departments, donationTrust } = t.siteData;
  const heroPhoto = PHOTOS.ottawa;
  const [activeDept, ...otherDepts] = [...departments].sort((a, b) => (a.tone === "active" ? -1 : b.tone === "active" ? 1 : 0));

  return (
    <>
      {/* HERO : marine, motif empreinte, photo du siège découpée en « D » */}
      <section className="relative overflow-hidden bg-navy pb-16 pt-32 text-white sm:pb-24 sm:pt-40">
        <FingerprintMotif className="-right-48 -top-32 h-[36rem] w-[36rem] opacity-[0.14] sm:h-[48rem] sm:w-[48rem]" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="reveal eyebrow-on-dark">{h.heroEyebrow}</p>
            <h1 className="reveal h-hero mt-5" style={{ animationDelay: "0.05s" }}>
              {t.home.titleLine1} <span className="text-gold">{t.home.titleLine2}</span>
            </h1>
            <p className="reveal lead mt-6 max-w-xl text-on-navy" style={{ animationDelay: "0.1s" }}>
              {mission}
            </p>
            <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.15s" }}>
              <Link href="/don/" className="btn btn-primary">
                {t.home.ctaDonate}
              </Link>
              <Link href="/a-propos/" className="btn btn-outline-on-dark">
                {t.home.ctaMission} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <figure className="reveal relative lg:col-span-5" style={{ animationDelay: "0.2s" }}>
            <div className="shape-d relative aspect-[4/3] w-full overflow-hidden bg-navy-light sm:aspect-[16/11] lg:aspect-[4/5]">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt[locale]}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute bottom-6 left-3 rounded-2xl bg-cream px-4 py-3 text-navy shadow-[0_8px_24px_rgba(4,17,29,0.25)] sm:-left-5 sm:bottom-10">
              <span className="block text-base font-extrabold">{h.heroPhotoTitle}</span>
              <span className="block text-sm font-semibold text-gold-dark">{h.heroPhotoText}</span>
              <span className="mt-1 block text-[11px] text-muted">
                <PhotoCredit credit={heroPhoto.credit} />
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <span className="self-start rounded-full border-[1.5px] border-navy px-4 py-1.5 text-sm font-bold text-navy">{h.visionMissionChip}</span>
            <div className="shape-d relative hidden aspect-[4/3.6] w-full overflow-hidden bg-sand lg:block">
              <Image src={PHOTOS.bible.src} alt={PHOTOS.bible.alt[locale]} fill sizes="360px" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="h-statement text-navy">{vision}</p>
            <p className="lead mt-8 text-muted">
              <span className="font-bold text-navy">{h.missionPrefix}</span> {mission}
            </p>
            <Link href="/a-propos/" className="link-underline mt-8 inline-block">
              {t.about.title} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE : une carte photo + quatre colonnes de hauteur croissante */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow={h.approachEyebrow} title={h.approachTitle} accent={h.approachAccent} />
          <div className="grid gap-3 lg:h-[26rem] lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr] lg:items-end lg:gap-0">
            <article className="grid overflow-hidden rounded-3xl bg-sand sm:grid-cols-2 lg:h-full lg:rounded-r-none">
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-7">
                <div>
                  <p className="text-base font-extrabold text-navy">{h.approachCardTitle}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{h.approachCardText}</p>
                </div>
                <div>
                  <p className="text-5xl font-black leading-none tracking-tight text-navy">{h.approachCount}</p>
                  <p className="mt-1.5 text-sm font-semibold text-navy">{h.approachCountLabel}</p>
                </div>
              </div>
              <div className="relative min-h-[12rem]">
                <Image src={PHOTOS.ecole.src} alt={PHOTOS.ecole.alt[locale]} fill sizes="(min-width: 1024px) 260px, 100vw" className="object-cover" />
              </div>
            </article>
            {h.pillars.map((p, i) => (
              <div
                key={p.title}
                className={`flex min-h-[9rem] flex-col justify-between gap-6 rounded-3xl p-5 sm:p-6 lg:min-h-0 lg:rounded-none ${PILLAR_STYLES[i]} ${
                  i === h.pillars.length - 1 ? "lg:rounded-r-3xl" : ""
                }`}
              >
                <p className="text-xl font-black tracking-tight sm:text-2xl">{p.title}</p>
                <p className="text-sm font-semibold leading-snug">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OÙ NOUS AGISSONS */}
      <section className="bg-navy-dark py-20 text-white sm:py-28">
        <div className="container-site">
          <SectionHeading title={h.mapTitle} accent={h.mapAccent} onDark intro={h.mapIntro} />
          <WorldMap
            presence={MAP_PRESENCE}
            locale={locale}
            labels={{ mapAlt: t.home.mapAlt, soon: h.mapCountryNote }}
          />
          <p className="mt-6 text-xs text-on-navy-faint">
            <Link href="/mentions-legales/" className="underline underline-offset-2 hover:text-white">
              {h.mapCreditsNote}
            </Link>
          </p>
        </div>
      </section>

      {/* DÉPARTEMENTS + VALEURS */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">{h.deptEyebrow}</p>
            <h2 className="h-section mt-2 text-navy">{t.home.deptTitle}</h2>
            <p className="mt-6 text-sm font-bold text-gold-dark">{h.valuesLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {values.map((v) => (
                <li key={v} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-navy">
                  {v}
                </li>
              ))}
            </ul>
            <Link href="/departements/" className="link-underline mt-8 inline-block">
              {t.home.deptLink} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <li className="flex flex-col justify-between gap-4 rounded-3xl bg-navy p-6 text-white sm:col-span-2 sm:flex-row sm:items-center">
              <span className="text-xl font-extrabold">{activeDept.name}</span>
              <StatusDot tone={activeDept.tone} label={activeDept.status} />
            </li>
            {otherDepts.map((d, i) => (
              <li
                key={d.name}
                className={`flex flex-col items-start justify-between gap-3 rounded-3xl border border-line bg-white p-5 ${
                  i === otherDepts.length - 1 && otherDepts.length % 2 === 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="text-lg font-bold leading-snug text-navy">{d.name}</span>
                <StatusDot tone={d.tone} label={d.status} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GESTION TRANSPARENTE */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading title={h.trustTitle} accent={h.trustAccent} />
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="relative min-h-[22rem] overflow-hidden rounded-3xl md:row-span-2 lg:min-h-[28rem]">
              <Image src={PHOTOS.ottawa.src} alt={PHOTOS.ottawa.alt[locale]} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-navy-dark/90 p-6 text-white">
                <p className="text-xl font-extrabold">{h.foundedTitle}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-on-navy">{h.foundedText}</p>
                <Link href="/equipe/" className="mt-3 inline-block text-sm font-bold text-gold hover:text-white">
                  {h.teamLink} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
            {[donationTrust[0], donationTrust[2]].map((tr) => (
              <article key={tr.title} className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-6 sm:p-7">
                <p className="text-[15px] font-extrabold text-gold-dark">{tr.title}</p>
                <p className="text-lg leading-relaxed text-navy">{tr.text}</p>
              </article>
            ))}
            {[
              [h.signaturesCount, h.signaturesText],
              [h.valuesCount, h.valuesText]
            ].map(([n, text]) => (
              <article key={n} className="flex items-center gap-5 rounded-3xl bg-navy p-6 text-white sm:p-7">
                <p className="text-6xl font-black leading-none tracking-tight text-gold">{n}</p>
                <p className="text-[15px] font-semibold leading-snug">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITÉS */}
      {news.length > 0 && (
        <section className="bg-cream py-20 sm:py-28">
          <div className="container-site">
            <SectionHeading
              eyebrow={t.home.newsEyebrow}
              title={t.home.newsTitle}
              action={
                <Link href="/actualites/" className="link-underline">
                  {t.home.viewAll} <span aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((n) => (
                <NewsCard key={n._id} item={n} showExcerpt={false} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SOUTENIR LA MISSION */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
        <FingerprintMotif className="-bottom-64 -left-56 h-[40rem] w-[40rem] opacity-[0.12]" />
        <div className="container-site relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="h-page">
              {h.donateTitle} <span className="text-gold">{h.donateAccent}</span>
            </h2>
            <p className="lead mt-5 max-w-lg text-on-navy">{t.donate.subtitle}</p>
          </div>
          <div className="rounded-4xl bg-cream p-6 text-navy sm:p-8 lg:col-span-5">
            <p className="text-sm font-bold text-gold-dark">{h.donateOneTime}</p>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {amounts.map((a, i) => (
                <Link
                  key={a}
                  href="/don/"
                  className={`rounded-full border py-3 text-center text-base font-extrabold tabular-nums transition-colors ${
                    i === 1 ? "border-gold bg-gold text-navy-dark" : "border-line bg-white text-navy hover:border-navy"
                  }`}
                >
                  {a}
                </Link>
              ))}
            </div>
            <Link href="/don/" className="btn btn-navy mt-4 w-full">
              {t.nav.donate}
            </Link>
            <p className="mt-3 text-center text-[13px] leading-relaxed text-muted">{h.donateNote}</p>
          </div>
        </div>
      </section>

      <NewsletterBand
        id="newsletter-email"
        title={t.home.newsletterTitle}
        text={t.home.newsletterText}
        placeholder={t.home.emailPlaceholder}
        srLabel={t.home.emailSrLabel}
        buttonLabel={t.home.subscribe}
      />
    </>
  );
}
