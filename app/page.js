import HomeContent from "./HomeContent";
import { getNews } from "@/lib/sanity";

export default async function HomePage() {
  const news = await getNews(3);
  return <HomeContent news={news} />;
}
