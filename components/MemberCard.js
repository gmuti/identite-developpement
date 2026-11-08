import Image from "next/image";

// Carte d'un membre : portrait (ou initiales en attendant la photo), nom, rôle officiel.
// Aucune biographie n'est inventée : la description n'apparaît que si elle est fournie.
export default function MemberCard({ member, onDark = false }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-cream ring-1 ring-line">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 280px, 50vw"
            className="object-cover"
          />
        ) : (
          <div aria-hidden="true" className="flex h-full w-full items-center justify-center">
            <span className="font-display text-4xl text-navy/70 sm:text-5xl">{member.initials}</span>
          </div>
        )}
      </div>
      <h3 className={`mt-4 text-base font-medium leading-snug sm:text-lg ${onDark ? "text-white" : "text-ink"}`}>{member.name}</h3>
      <p className={`mt-1 text-sm font-medium leading-relaxed ${onDark ? "text-gold" : "text-gold-dark"}`}>{member.role}</p>
      {member.description && (
        <p className={`mt-2 text-sm leading-relaxed ${onDark ? "text-on-navy-muted" : "text-muted"}`}>{member.description}</p>
      )}
    </article>
  );
}
