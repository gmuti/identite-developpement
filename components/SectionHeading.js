// En-tête de section : petit titre + titre, avec une action facultative à droite.
// accent : fin du titre mise en valeur (or foncé sur fond clair, or sur fond marine).
export default function SectionHeading({ eyebrow, title, accent = null, onDark = false, action = null, intro = null, className = "mb-10 sm:mb-12" }) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-x-10 gap-y-5 ${className}`}>
      <div className="max-w-3xl">
        {eyebrow && <p className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>}
        <h2 className={`h-section mt-2 ${onDark ? "text-white" : "text-navy"}`}>
          {title}
          {accent && <span className={onDark ? "text-gold" : "text-gold-dark"}> {accent}</span>}
        </h2>
        {intro && <p className={`mt-4 max-w-2xl leading-relaxed ${onDark ? "text-on-navy-muted" : "text-muted"}`}>{intro}</p>}
      </div>
      {action}
    </div>
  );
}
