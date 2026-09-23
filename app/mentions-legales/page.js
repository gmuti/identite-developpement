import MentionsLegalesContent from "./MentionsLegalesContent";

export const metadata = {
  title: "Mentions légales",
  description: "Informations légales concernant l'éditeur, l'hébergement et la propriété intellectuelle du site Identité et Développement.",
  alternates: { canonical: "/mentions-legales/" }
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}
