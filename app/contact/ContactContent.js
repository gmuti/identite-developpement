"use client";

import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();
  const { contactInfo } = t.siteData;

  // Les coordonnées pas encore communiquées (null) ne sont pas affichées.
  const infoRows = [
    { label: t.contact.fieldEmail, value: contactInfo.email },
    { label: t.contact.fieldPhone, value: contactInfo.phone },
    { label: t.contact.fieldAddress, value: contactInfo.address }
  ].filter((r) => r.value);

  return (
    <>
      <PageHeader crumbLabel={t.contact.crumb} title={t.contact.title} description={t.contact.subtitle} />

      <section className="bg-cream px-6 pb-24 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-16">
          {/* COORDONNEES */}
          <div>
            <span className="eyebrow">{t.contact.infoEyebrow}</span>
            <h2 className="mb-8 mt-2 font-display text-2xl text-navy">{t.contact.infoTitle}</h2>
            <dl className="flex flex-col border-t border-line">
              {infoRows.map((c) => (
                <div key={c.label} className="border-b border-line py-4">
                  <dt className="text-xs font-medium text-gold-dark">{c.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* FORMULAIRE */}
          <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
            <h2 className="mb-6 font-display text-xl text-navy">{t.contact.formTitle}</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">
                    {t.contact.labelName}
                  </label>
                  <input id="name" type="text" autoComplete="name" placeholder={t.contact.placeholderName} className="field" />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">
                    {t.contact.labelEmail}
                  </label>
                  <input id="email" type="email" autoComplete="email" placeholder={t.contact.placeholderEmail} className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="field-label">
                  {t.contact.labelSubject}
                </label>
                <input id="subject" type="text" placeholder={t.contact.placeholderSubject} className="field" />
              </div>
              <div>
                <label htmlFor="message" className="field-label">
                  {t.contact.labelMessage}
                </label>
                <textarea id="message" rows={5} placeholder={t.contact.placeholderMessage} className="field resize-none" />
              </div>
              <button type="submit" className="btn btn-navy btn-lg">
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
