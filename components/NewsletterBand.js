"use client";

// Inscription à l'infolettre (pas encore branchée à un service d'envoi) : carte blanche arrondie.
export default function NewsletterBand({ id, title, text, placeholder, srLabel, buttonLabel }) {
  return (
    <section className="bg-cream px-3 pb-3 pt-16 sm:px-5 sm:pb-5 sm:pt-24">
      <div className="mx-auto grid max-w-[84rem] gap-6 rounded-4xl border border-line bg-white px-6 py-10 sm:rounded-5xl sm:px-12 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-16">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">{title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{text}</p>
        </div>
        <form className="flex w-full flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor={id} className="sr-only">
            {srLabel}
          </label>
          <input id={id} type="email" autoComplete="email" placeholder={placeholder} className="field flex-1 bg-cream" />
          <button type="submit" className="btn btn-navy">
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
