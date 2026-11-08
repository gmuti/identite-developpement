import Image from "next/image";

// Teintes des portraits sans photo, en rotation : marine, or, sable.
const TONES = [
  "bg-navy text-gold",
  "bg-gold text-navy",
  "bg-sand text-navy"
];

// Carte d'un membre : portrait aux coins arrondis, ou initiales en attendant la photo.
// Aucune biographie n'est inventée : la description n'apparaît que si elle est fournie.
export default function MemberCard({ member, index = 0 }) {
  return (
    <article className="flex flex-col">
      <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-4xl ${member.photo ? "bg-sand" : TONES[index % TONES.length]}`}>
        {member.photo ? (
          <Image src={member.photo} alt={member.name} fill sizes="(min-width: 1024px) 260px, 50vw" className="object-cover" style={{ objectPosition: member.photoPosition, transform: member.photoZoom ? `scale(${member.photoZoom})` : undefined, transformOrigin: member.photoPosition }} />
        ) : (
          <div aria-hidden="true" className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">{member.initials}</span>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-base font-bold leading-snug text-ink sm:text-lg">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold leading-relaxed text-gold-dark">{member.role}</p>
      {member.description && <p className="mt-2 text-sm leading-relaxed text-muted">{member.description}</p>}
    </article>
  );
}
