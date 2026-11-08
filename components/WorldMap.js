"use client";

import { useMemo, useState } from "react";
import { WORLD_SHAPES, WORLD_VIEWBOX } from "@/lib/worldShapes";

// Carte du monde statique (aucune bibliothèque) : les pays où l'organisme agit sont en or.
// L'interaction passe par la liste de pays sous la carte (boutons, accessibles au clavier) ;
// survoler un pays actif sur la carte le sélectionne aussi.
export default function WorldMap({ presence, locale, labels }) {
  const activeIds = useMemo(() => new Set(presence.map((p) => p.id)), [presence]);
  const [selectedId, setSelectedId] = useState(presence[0]?.id ?? null);
  const selected = presence.find((p) => p.id === selectedId) || null;

  const activeShapes = WORLD_SHAPES.filter((s) => activeIds.has(s.id));
  const summary = `${labels.mapAlt} ${presence.map((p) => p.name[locale]).join(", ")}`;

  return (
    <figure className="w-full">
      <svg viewBox={WORLD_VIEWBOX} role="img" aria-label={summary} className="h-auto w-full">
        <g>
          {WORLD_SHAPES.map((s) =>
            activeIds.has(s.id) ? null : (
              <path key={s.id} d={s.d} className="fill-white/[0.08] stroke-navy [stroke-width:0.6]" />
            )
          )}
        </g>
        <g>
          {activeShapes.map((s) => (
            <path
              key={s.id}
              d={s.d}
              onMouseEnter={() => setSelectedId(s.id)}
              onClick={() => setSelectedId(s.id)}
              className={`cursor-pointer stroke-navy transition-colors duration-150 [stroke-width:0.6] ${
                s.id === selectedId ? "fill-gold" : "fill-gold/70 hover:fill-gold"
              }`}
            />
          ))}
        </g>
        {/* Repère : rend visibles les petits pays et marque le pays sélectionné */}
        <g aria-hidden="true" className="pointer-events-none">
          {activeShapes.map((s) => (
            <g key={s.id} transform={`translate(${s.c[0]} ${s.c[1]})`}>
              <circle r={s.id === selectedId ? 9 : 7} className="fill-none stroke-gold/50 [stroke-width:1.5]" />
              <circle r="3.5" className="fill-white" />
            </g>
          ))}
        </g>
      </svg>

      <figcaption className="mt-6 border-t border-white/10 pt-5">
        <span className="text-xs font-medium text-on-navy-muted">{labels.listTitle}</span>
        <ul className="mt-3 flex flex-wrap gap-2">
          {presence.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setSelectedId(p.id)}
                aria-pressed={p.id === selectedId}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                  p.id === selectedId
                    ? "border-gold/60 bg-gold/10 text-gold"
                    : "border-white/15 text-on-navy hover:border-white/40"
                }`}
              >
                {p.name[locale]}
              </button>
            </li>
          ))}
        </ul>
        {selected && selected.activities[locale].length > 0 && (
          <div aria-live="polite" className="mt-4">
            <ul className="flex flex-col gap-1 text-sm leading-relaxed text-on-navy">
              {selected.activities[locale].map((a) => (
                <li key={a} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
