"use client";

import Link from "next/link";
import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TeamContent() {
  const { t } = useLanguage();
  const { groups } = t.team;
  let memberIndex = 0;

  return (
    <>
      <PageHeader crumbLabel={t.team.crumb} title={t.team.title} description={t.team.subtitle} />

      {groups.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-title`}
          className={`py-20 sm:py-24 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="container-site grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">{group.eyebrow}</p>
              <h2 id={`${group.id}-title`} className="h-section mt-2 text-navy">
                {group.title}
              </h2>
              {group.motto && (
                <p className="mt-6 rounded-3xl bg-navy p-5 text-lg font-bold leading-snug text-white">
                  <span className="text-gold">« </span>
                  {group.motto.replace(/\.$/, "")}
                  <span className="text-gold"> »</span>
                </p>
              )}
              {group.intro && <p className="mt-4 leading-relaxed text-muted">{group.intro}</p>}
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:col-span-8">
              {group.members.map((m) => (
                <MemberCard key={m.name} member={m} index={memberIndex++} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-cream pb-6 pt-4">
        <div className="container-site">
          <div className="flex flex-col gap-6 rounded-4xl bg-sand p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy">{t.team.joinTitle}</h2>
              <p className="mt-2 leading-relaxed text-muted">{t.team.joinText}</p>
            </div>
            <Link href="/departements/" className="btn btn-navy flex-shrink-0 self-start md:self-auto">
              {t.team.joinLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
