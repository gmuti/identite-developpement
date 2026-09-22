"use client";

import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();
  const { contactInfo } = t.siteData;

  const infoCards = [
    { label: t.contact.fieldEmail, value: contactInfo.email },
    { label: t.contact.fieldPhone, value: contactInfo.phone },
    { label: t.contact.fieldAddress, value: contactInfo.address }
  ];

  return (
    <>
      <PageHeader crumbLabel={t.contact.crumb} title={t.contact.title} description={t.contact.subtitle} />

      <section className="bg-white px-6 py-20 sm:px-12">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[1fr_1.3fr]">
          {/* COORDONNEES */}
          <div>
            <span className="text-[13px] font-bold uppercase tracking-wide text-gold-dark">{t.contact.infoEyebrow}</span>
            <h2 className="mb-8 mt-3 font-display text-2xl text-navy">{t.contact.infoTitle}</h2>
            <div className="flex flex-col gap-5">
              {infoCards.map((c) => (
                <div key={c.label} className="stagger-card rounded-2xl border border-line bg-cream p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-gold-dark">{c.label}</span>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="rounded-2xl border border-line bg-cream p-9">
            <h2 className="mb-6 font-display text-xl text-navy">{t.contact.formTitle}</h2>
            <form className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold text-ink">
                    {t.contact.labelName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t.contact.placeholderName}
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:outline focus:outline-2 focus:outline-navy"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-ink">
                    {t.contact.labelEmail}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t.contact.placeholderEmail}
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:outline focus:outline-2 focus:outline-navy"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-[13px] font-semibold text-ink">
                  {t.contact.labelSubject}
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder={t.contact.placeholderSubject}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:outline focus:outline-2 focus:outline-navy"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-[13px] font-semibold text-ink">
                  {t.contact.labelMessage}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t.contact.placeholderMessage}
                  className="w-full resize-none rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink focus:outline focus:outline-2 focus:outline-navy"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-gold px-7 py-3.5 text-[15px] font-bold text-navy-dark transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                {t.contact.sendButton}
              </button>
              <p className="text-xs leading-relaxed text-muted">{t.contact.formNote(contactInfo.email)}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
