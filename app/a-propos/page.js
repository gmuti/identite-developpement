import AboutContent from "./AboutContent";

export const metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez la vision, la mission, les valeurs et les fondateurs d'Identité et Développement, organisme à but non lucratif en Ontario, Canada.",
  alternates: { canonical: "/a-propos/" }
};

export default function AboutPage() {
  return <AboutContent />;
}
