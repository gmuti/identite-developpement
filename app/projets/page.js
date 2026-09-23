import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Nos projets",
  description:
    "Les six axes d'intervention d'Identité et Développement : éducation, aide humanitaire, développement communautaire et plus encore.",
  alternates: { canonical: "/projets/" }
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
