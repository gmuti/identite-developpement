"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { WORLD_SHAPES, WORLD_VIEWBOX } from "@/lib/worldShapes";
import { PHOTOS } from "@/lib/photos";

// Courbe d'un point à l'autre, bombée vers le haut (comme une route aérienne).
function arcPath([x1, y1], [x2, y2]) {
  const dist = Math.hypot(x2 - x1, y2 - y1);
  const cx = (x1 + x2) / 2;
  const cy = Math.min(y1, y2) - dist * 0.28;
  return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`;
}

// Carte du monde statique (aucune bibliothèque) + une carte photo par pays.
// Les cartes pays sont des boutons : en choisir une met son pays et sa route en avant sur la carte.
export default function WorldMap({ presence, locale, labels }) {
  const shapesById = useMemo(() => Object.fromEntries(WORLD_SHAPES.map((s) => [s.id, s])), []);
  const places = presence
    .filter((p) => shapesById[p.id])
    .map((p) => ({ ...p, at: p.point || shapesById[p.id].c }));
  const origin = places.find((p) => p.origin) || places[0];
  const activeIds = new Set(places.map((p) => p.id));
  const [selectedId, setSelectedId] = useState(origin?.id ?? null);

  const summary = `${labels.mapAlt} ${places.map((p) => p.name[locale]).join(", ")}`;

  return (
    <div>
      <svg viewBox={WORLD_VIEWBOX} role="img" aria-label={summary} className="h-auto w-full">
        <g>
          {WORLD_SHAPES.map((s) => (
            <path
              key={s.id}
              d={s.d}
              className={`stroke-navy-dark [stroke-width:0.6] transition-colors duration-150 ${
                activeIds.has(s.id) ? (s.id === selectedId ? "fill-gold" : "fill-gold/55") : "fill-land"
              }`}
            />
          ))}
        </g>
        <g aria-hidden="true" className="pointer-events-none">
          {places
            .filter((p) => p !== origin)
            .map((p) => (
              <path
                key={p.id}
                d={arcPath(origin.at, p.at)}
                fill="none"
                className={`transition-colors duration-150 ${p.id === selectedId ? "stroke-gold" : "stroke-gold/45"}`}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}
          {places.map((p) => (
            <g key={p.id} transform={`translate(${p.at[0]} ${p.at[1]})`}>
              <circle r={p.id === selectedId ? 7.5 : 6} className="fill-none stroke-gold [stroke-width:1.6]" />
              <circle r="2.8" className="fill-white" />
            </g>
          ))}
        </g>
      </svg>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {places.map((p) => {
          const photo = p.photo ? PHOTOS[p.photo] : null;
          const isSelected = p.id === selectedId;
          const detail = p.place?.[locale] || p.activities[locale][0] || labels.soon;
          return (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setSelectedId(p.id)}
                aria-pressed={isSelected}
                className={`group flex h-full w-full flex-col overflow-hidden rounded-3xl border bg-navy text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  isSelected ? "border-gold/70" : "border-white/10 hover:border-white/30"
                }`}
              >
                {photo && (
                  <span className="relative block aspect-[16/10] w-full overflow-hidden bg-white/5">
                    <Image src={photo.src} alt={photo.alt[locale]} fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover" />
                  </span>
                )}
                <span className="block p-4 sm:p-5">
                  <span className="block text-lg font-extrabold text-white sm:text-xl">{p.name[locale]}</span>
                  <span className={`mt-1 block text-sm ${isSelected || p.origin ? "text-gold" : "text-on-navy-muted"}`}>{detail}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
