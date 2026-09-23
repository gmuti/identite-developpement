import DepartmentsContent from "./DepartmentsContent";

export const metadata = {
  title: "Départements",
  description:
    "La structure organisationnelle d'Identité et Développement : rôles et attributions de nos six départements au service de la mission.",
  alternates: { canonical: "/departements/" }
};

export default function DepartmentsPage() {
  return <DepartmentsContent />;
}
