// Motif décoratif tiré de l'empreinte digitale du logo : anneaux concentriques interrompus.
// Purement décoratif (aria-hidden) ; à poser en position absolue dans une section marine.
const RINGS = [
  [40, "180 40"],
  [70, "300 60 40 40"],
  [100, "420 70"],
  [130, "520 50 120 60"],
  [160, "700 90"],
  [190, "820 60 200 80"],
  [220, "1000 120"],
  [250, "1200 80 180 100"],
  [280, "1500 260"]
];

export default function FingerprintMotif({ className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 600 600" className={`pointer-events-none absolute ${className}`}>
      <g fill="none" className="stroke-gold" strokeWidth="3" strokeLinecap="round">
        {RINGS.map(([r, dash]) => (
          <circle key={r} cx="300" cy="300" r={r} strokeDasharray={dash} />
        ))}
      </g>
    </svg>
  );
}
