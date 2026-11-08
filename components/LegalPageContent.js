"use client";

import PageHeader from "@/components/PageHeader";

export default function LegalPageContent({ crumb, title, updated, sections, children = null }) {
  return (
    <>
      <PageHeader crumbLabel={crumb} title={title} description={updated} />

      <section className="bg-cream px-6 pb-24 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex max-w-3xl flex-col gap-12">
            {sections.map((s) => (
              <div key={s.heading} className="grid gap-3">
                <h2 className="font-display text-2xl text-navy">{s.heading}</h2>
                <p className="leading-relaxed text-ink">{s.body}</p>
              </div>
            ))}
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
