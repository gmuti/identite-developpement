"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { WORLD_SHAPES, WORLD_VIEWBOX } from "@/lib/worldShapes";
import { PHOTOS } from "@/lib/photos";
import { PhotoCredit } from "@/components/Photo";

// Courbe d'un point à l'autre, bombée vers le haut (comme une route aérienne).
function arcPath([x1, y1], [x2, y2]) {
  const dist = Math.hypot(x2 - x1, y2 - y1);
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - dist * 0.28;
  return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`;
}

// Carte du monde statique (aucune bibliothèque) : les pays où l'organisme agit sont en or,
// reliés au siège en Ontario par une ligne d'or - le détail signature du site.
// Sélection : boutons sous la carte (clavier) ou clic sur un repère.
export default function WorldMap({ presence, locale, labels }) {
  const shapesById = useMemo(() => Object.fromEntries(WORLD_SHAPES.map((s) => [s.id, s])), []);
  const places = presence
    .filter((p) => shapesById[p.id])
    .map((p) => ({ ...p, at: p.point || shapesById[p.id].c }));
  const origin = places.find((p) => p.origin) || places[0];
  const activeIds = new Set(places.map((p) => p.id));

  const [selectedId, setSelectedId] = useState(origin?.id ?? null);
  const selected = places.find((p) => p.id === selectedId) || null;
  const photo = selected?.photo ? PHOTOS[selected.photo] : null;

  const summary = `${labels.mapAlt} ${places.map((p) => p.name[locale]).join(", ")}`;

  return (
    <div>
      <div className="relative">
        <svg viewBox={WORLD_VIEWBOX} role="img" aria-label={summary} className="h-auto w-full">
          <g>
            {WORLD_SHAPES.map((s) => (
              <path
                key={s.id}
                d={s.d}
                className={`stroke-navy [stroke-width:0.6] ${
                  activeIds.has(s.id) ? (s.id === selectedId ? "fill-gold" : "fill-gold/55") : "fill-white/[0.07]"
                } transition-colors duration-150`}
              />
            ))}
          </g>

          {/* Routes depuis le siège */}
          <g aria-hidden="true" className="pointer-events-none">
            {places
              .filter((p) => p !== origin)
              .map((p) => (
                <path
                  key={p.id}
                  d={arcPath(origin.at, p.at)}
                  fill="none"
                  className={`transition-colors duration-150 ${p.id === selectedId ? "stroke-gold" : "stroke-gold/45"}`}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              ))}
          </g>

          {/* Repères cliquables */}
          <g>
            {places.map((p) => {
              const isSelected = p.id === selectedId;
              return (
                <g
                  key={p.id}
                  transform={`translate(${p.at[0]} ${p.at[1]})`}
                  onClick={() => setSelectedId(p.id)}
                  className="cursor-pointer"
                  aria-hidden="true"
                >
                  <circle r="14" fill="transparent" />
                  <circle r={isSelected ? 7 : 5.5} className="fill-none stroke-gold [stroke-width:1.5]" />
                  <circle r="2.5" className="fill-white" />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Fiche du pays sélectionné */}
        {selected && (
          <div
            aria-live="polite"
            className="mt-6 flex items-center gap-4 rounded-xl border border-white/10 bg-navy-dark p-3"
          >
            {photo && (
              <div className="relative aspect-[4/3] w-24 flex-shrink-0 overflow-hidden rounded-lg bg-white/5 sm:w-32">
                <Image src={photo.src} alt={photo.alt[locale]} fill sizes="128px" className="object-cover" />
              </div>
            )}
            <div className="min-w-0 pr-2">
              <p className="font-display text-lg leading-tight text-white">{selected.name[locale]}</p>
              {selected.place && <p className="mt-1 text-xs text-gold">{selected.place[locale]}</p>}
              {selected.activities[locale].length > 0 && !selected.place && (
                <ul className="mt-2 flex flex-col gap-1 text-sm text-on-navy">
                  {selected.activities[locale].map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
              {photo && (
                <p className="mt-2 truncate text-[11px] text-on-navy-faint">
                  <PhotoCredit credit={photo.credit} />
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="text-xs text-on-navy-muted">{labels.listTitle}</span>
        <ul className="flex flex-wrap gap-2">
          {places.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setSelectedId(p.id)}
                aria-pressed={p.id === selectedId}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                  p.id === selectedId ? "border-gold/60 bg-gold/10 text-gold" : "border-white/15 text-on-navy hover:border-white/40"
                }`}
              >
                {p.name[locale]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
