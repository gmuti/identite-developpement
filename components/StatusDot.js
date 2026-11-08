// Statut d'un département : pastille + texte discret, sans badge coloré.
export default function StatusDot({ tone, label, onDark = false }) {
  const dot = tone === "active" ? (onDark ? "bg-success-on-dark" : "bg-success") : "bg-gold";
  return (
    <span className={`inline-flex flex-shrink-0 items-center gap-2 text-xs font-medium ${onDark ? "text-on-navy" : "text-muted"}`}>
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
