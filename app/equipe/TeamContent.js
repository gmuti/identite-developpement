"use client";

import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TeamContent() {
  const { t } = useLanguage();
  const { groups } = t.team;

  return (
    <>
      <PageHeader crumbLabel={t.team.crumb} title={t.team.title} description={t.team.subtitle} />

      {groups.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-title`}
          className={`scroll-mt-20 px-6 sm:px-12 ${i === 0 ? "bg-cream pb-20" : i % 2 === 1 ? "bg-white py-20" : "bg-cream py-20"}`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
            <div>
              <span className="eyebrow">{group.eyebrow}</span>
              <h2 id={`${group.id}-title`} className="section-title mt-2">
                {group.title}
              </h2>
              {group.motto && (
                <p className="mt-6 border-l-2 border-gold pl-4 font-display text-xl leading-snug text-navy">{group.motto}</p>
              )}
              {group.intro && <p className="mt-4 leading-relaxed text-muted">{group.intro}</p>}
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 md:grid-cols-3">
              {group.members.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white px-6 pb-20 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-line pt-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-navy">{t.team.joinTitle}</h2>
            <p className="mt-2 leading-relaxed text-muted">{t.team.joinText}</p>
          </div>
          <Link href="/departements/" className="btn btn-outline flex-shrink-0 self-start md:self-auto">
            {t.team.joinLink}
          </Link>
        </div>
      </section>
    </>
  );
}
