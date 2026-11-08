import TeamContent from "./TeamContent";

export const metadata = {
  title: "Notre équipe",
  description:
    "Les fondateurs, le conseil d'administration et les responsables de département d'Identité et Développement Global, organisme à but non lucratif en Ontario, Canada.",
  alternates: { canonical: "/equipe/" }
};

export default function TeamPage() {
  return <TeamContent />;
}
