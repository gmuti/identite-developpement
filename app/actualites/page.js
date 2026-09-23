import NewsContent from "./NewsContent";
import { getNews, getEvents } from "@/lib/sanity";

export const metadata = {
  title: "Actualités & événements",
  description:
    "Suivez les dernières nouvelles, conférences et formations d'Identité et Développement, organisme à but non lucratif en Ontario, Canada.",
  alternates: { canonical: "/actualites/" }
};

export default async function NewsPage() {
  const [news, events] = await Promise.all([getNews(9), getEvents(6)]);
  return <NewsContent news={news} events={events} />;
}
