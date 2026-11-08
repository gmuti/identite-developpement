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

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-site grid gap-6 lg:grid-cols-12">
          {/* COORDONNÉES */}
          <div className="rounded-4xl bg-navy p-7 text-white sm:p-9 lg:col-span-4">
            <p className="eyebrow-on-dark">{t.contact.infoEyebrow}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{t.contact.infoTitle}</h2>
            <dl className="mt-8 flex flex-col gap-5">
              {infoRows.map((c) => (
                <div key={c.label}>
                  <dt className="text-sm font-bold text-gold">{c.label}</dt>
                  <dd className="mt-1 text-lg font-semibold">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* FORMULAIRE */}
          <div className="rounded-4xl border border-line bg-white p-6 sm:p-9 lg:col-span-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">{t.contact.formTitle}</h2>
            <form className="mt-6 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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
                <textarea id="message" rows={5} placeholder={t.contact.placeholderMessage} className="field-area resize-none" />
              </div>
              <button type="submit" className="btn btn-navy self-start">
                {t.contact.sendButton}
              </button>
              <p className="text-[13px] leading-relaxed text-muted">{t.contact.formNote(contactInfo.email)}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
