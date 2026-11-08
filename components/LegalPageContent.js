"use client";

import PageHeader from "@/components/PageHeader";

export default function LegalPageContent({ crumb, title, updated, sections, children = null }) {
  return (
    <>
      <PageHeader crumbLabel={crumb} title={title} description={updated} />

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-site">
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {sections.map((s) => (
              <div key={s.heading} className="rounded-3xl border border-line bg-white p-6 sm:p-8">
                <h2 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-ink">{s.body}</p>
              </div>
            ))}
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
