import NewsContent from "./NewsContent";
import { getNews, getEvents } from "@/lib/sanity";

export const metadata = { title: "Actualités — Identité et Développement" };

export default async function NewsPage() {
  const [news, events] = await Promise.all([getNews(9), getEvents(6)]);
  return <NewsContent news={news} events={events} />;
}
