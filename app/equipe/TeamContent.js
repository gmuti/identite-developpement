"use client";

import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
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
          className={`px-6 py-20 sm:px-12 ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow">{group.eyebrow}</span>
              <h2 id={`${group.id}-title`} className="section-title mt-2">
                {group.title}
              </h2>
              {group.motto && (
                <p className="mt-4 border-l-2 border-gold pl-4 font-display text-lg leading-relaxed text-navy">{group.motto}</p>
              )}
              {group.intro && <p className="mt-4 leading-relaxed text-muted">{group.intro}</p>}
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
              {group.members.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy px-6 py-16 sm:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-white">{t.team.joinTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-on-navy">{t.team.joinText}</p>
          </div>
          <Link href="/departements/" className="btn btn-outline-on-dark self-start md:self-auto">
            {t.team.joinLink}
          </Link>
        </div>
      </section>
    </>
  );
}
