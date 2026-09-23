import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact",
  description: "Une question, un projet, une envie de vous impliquer ? Contactez l'équipe d'Identité et Développement.",
  alternates: { canonical: "/contact/" }
};

export default function ContactPage() {
  return <ContactContent />;
}
