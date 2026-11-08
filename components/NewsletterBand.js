"use client";

// Bandeau d'inscription à l'infolettre (pas encore branché à un service d'envoi).
export default function NewsletterBand({ id, title, text, placeholder, srLabel, buttonLabel }) {
  return (
    <section className="bg-gold px-6 py-12 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <h2 className="font-display text-2xl text-navy-dark">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-on-gold">{text}</p>
        </div>
        <form className="flex w-full flex-col gap-3 sm:flex-row md:w-auto" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor={id} className="sr-only">
            {srLabel}
          </label>
          <input
            id={id}
            type="email"
            placeholder={placeholder}
            className="w-full rounded-lg border border-transparent bg-white px-4 py-3 text-sm text-ink focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 sm:w-72"
          />
          <button type="submit" className="btn btn-navy">
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
