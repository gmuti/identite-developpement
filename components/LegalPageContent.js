"use client";

import PageHeader from "@/components/PageHeader";

export default function LegalPageContent({ crumb, title, updated, sections }) {
  return (
    <>
      <PageHeader crumbLabel={crumb} title={title} />

      <section className="bg-white px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-xs font-semibold uppercase tracking-wide text-muted">{updated}</p>
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 font-display text-xl text-navy">{s.heading}</h2>
                <p className="text-sm leading-relaxed text-ink">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
