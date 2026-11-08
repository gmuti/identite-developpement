// Statut d'un département, en pastille : « Actif » en or, « En préparation » en contour discret.
export default function StatusDot({ tone, label, onDark = false }) {
  if (tone === "active") {
    return <span className="inline-flex flex-shrink-0 items-center rounded-full bg-gold px-3.5 py-1.5 text-[13px] font-bold text-navy-dark">{label}</span>;
  }
  return (
    <span
      className={`inline-flex flex-shrink-0 items-center rounded-full border px-3.5 py-1.5 text-[13px] font-semibold ${
        onDark ? "border-white/25 text-on-navy" : "border-line text-muted"
      }`}
    >
      {label}
    </span>
  );
}
