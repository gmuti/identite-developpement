import DonationContent from "./DonationContent";

export const metadata = {
  title: "Faire un don",
  description:
    "Soutenez la mission d'Identité et Développement : chaque don aide à financer bourses scolaires, projets humanitaires et programmes de formation.",
  alternates: { canonical: "/don/" }
};

export default function DonationPage() {
  return <DonationContent />;
}
