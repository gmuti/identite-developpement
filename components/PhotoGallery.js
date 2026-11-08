"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { urlFor } from "@/lib/sanity";

// Grille de photos + visionneuse plein écran (clavier : Échap, flèches gauche/droite).
export default function PhotoGallery({ photos, labels }) {
  const [openIndex, setOpenIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRefs = useRef([]);
  const lastOpenedRef = useRef(null);
  const valid = (photos || []).filter((p) => p?.asset);
  const count = valid.length;

  const open = (i) => {
    lastOpenedRef.current = i;
    setOpenIndex(i);
  };
  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRefs.current[lastOpenedRef.current]?.focus();
  }, []);
  const step = useCallback((delta) => setOpenIndex((i) => (i === null ? i : (i + delta + count) % count)), [count]);

  useEffect(() => {
    if (openIndex === null) return undefined;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // openIndex !== null suffit : on ne réinstalle pas l'écouteur à chaque photo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex === null, close, step]);

  if (count === 0) return null;
  const current = openIndex !== null ? valid[openIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {valid.map((photo, i) => (
          <li key={photo._key || i}>
            <button
              type="button"
              ref={(el) => (triggerRefs.current[i] = el)}
              onClick={() => open(i)}
              aria-label={photo.caption ? `${labels.open} : ${photo.caption}` : `${labels.open} ${i + 1}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-lg bg-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              <Image
                src={urlFor(photo).width(600).height(600).fit("crop").url()}
                alt={photo.caption || ""}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-opacity duration-150 group-hover:opacity-90"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={labels.viewer} className="fixed inset-0 z-50 flex flex-col bg-navy-dark/95">
          <div className="flex items-center justify-between px-4 py-3 text-sm text-on-navy-muted sm:px-6">
            <span className="tabular-nums">
              {openIndex + 1} / {count}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {labels.close}
            </button>
          </div>

          <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
            <Image
              src={urlFor(current).width(1800).fit("max").url()}
              alt={current.caption || ""}
              fill
              sizes="100vw"
              className="pointer-events-none object-contain px-4 sm:px-20"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={labels.previous}
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy/80 text-lg text-white transition-colors hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={labels.next}
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy/80 text-lg text-white transition-colors hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </>
            )}
          </div>

          <p className="min-h-12 px-4 py-4 text-center text-sm text-on-navy sm:px-6">{current.caption}</p>
        </div>
      )}
    </>
  );
}
