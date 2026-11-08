// En-tête de section : petit titre + titre, aligné à gauche par défaut.
export default function SectionHeading({ eyebrow, title, onDark = false, action = null, className = "mb-10" }) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && <span className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</span>}
        <h2 className={`mt-2 ${onDark ? "section-title-on-dark" : "section-title"}`}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
