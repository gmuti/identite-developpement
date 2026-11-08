"use client";

// Inscription à l'infolettre (pas encore branchée à un service d'envoi).
// Bloc sobre sur fond papier, juste avant le pied de page.
export default function NewsletterBand({ id, title, text, placeholder, srLabel, buttonLabel }) {
  return (
    <section className="bg-cream px-6 py-16 sm:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-line pt-12 md:grid-cols-2 md:items-end md:gap-16">
        <div className="max-w-md">
          <h2 className="font-display text-3xl leading-tight text-navy">{title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{text}</p>
        </div>
        <form className="flex w-full flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor={id} className="sr-only">
            {srLabel}
          </label>
          <input id={id} type="email" autoComplete="email" placeholder={placeholder} className="field flex-1" />
          <button type="submit" className="btn btn-navy">
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
