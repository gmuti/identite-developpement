import { ORG_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export default function manifest() {
  return {
    name: ORG_NAME,
    short_name: "Identité Dev",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#051829",
    icons: [
      {
        src: "/icon.png",
        sizes: "200x200",
        type: "image/png"
      }
    ]
  };
}
