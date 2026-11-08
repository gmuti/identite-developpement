"use client";

import Image from "next/image";
import { PHOTOS } from "@/lib/photos";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Photo d'illustration libre de droits, avec le crédit exigé par sa licence.
export default function Photo({ id, className = "", imgClassName = "", sizes = "100vw", priority = false, onDark = false }) {
  const { locale } = useLanguage();
  const photo = PHOTOS[id];
  if (!photo) return null;

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-xl bg-line ${imgClassName}`}>
        <Image src={photo.src} alt={photo.alt[locale]} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <figcaption className={`mt-2 text-xs ${onDark ? "text-on-navy-faint" : "text-muted"}`}>
        <PhotoCredit credit={photo.credit} />
      </figcaption>
    </figure>
  );
}

export function PhotoCredit({ credit }) {
  const { locale } = useLanguage();
  return (
    <>
      {locale === "en" ? "Photo: " : "Photo : "}
      {credit.author},{" "}
      <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:no-underline">
        {credit.license}
      </a>
    </>
  );
}
