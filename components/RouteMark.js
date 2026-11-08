// Détail signature du site : la ligne d'or qui relie le siège (Ontario) aux pays où l'organisme agit.
// Même tracé que sur la carte de l'accueil, en petit. À n'utiliser qu'aux endroits prévus
// (en-têtes de pages intérieures, pied de page) pour qu'il garde son sens.
export default function RouteMark({ className = "", tone = "gold" }) {
  const stroke = tone === "gold" ? "stroke-gold" : "stroke-gold-dark";
  const fill = tone === "gold" ? "fill-gold" : "fill-gold-dark";
  return (
    <svg viewBox="0 0 120 24" width="120" height="24" aria-hidden="true" className={className}>
      <circle cx="4" cy="20" r="3" className={fill} />
      <path d="M4 20 C 34 -2, 82 -2, 114 14" fill="none" className={stroke} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0 0" />
      <circle cx="114" cy="14" r="3.5" fill="none" className={stroke} strokeWidth="1.5" />
    </svg>
  );
}
