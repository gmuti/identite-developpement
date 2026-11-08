import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { ACTIVE_SOCIAL_PROFILES } from "@/lib/social";
import { SITE_URL, ORG_NAME, ORG_ACRONYM, SITE_DESCRIPTION } from "@/lib/seo";

// Polices auto-hébergées (public/fonts) - évite une dépendance réseau vers
// fonts.googleapis.com au moment du build, qui s'est révélée intermittente sur CI.
const figtree = localFont({
  src: "../public/fonts/Figtree-Variable.woff2",
  weight: "300 900",
  variable: "--font-figtree",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${ORG_NAME} - Découvrir son identité, bâtir son avenir`,
    template: `%s - ${ORG_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Identité et Développement Global",
    "IDG",
    "organisme à but non lucratif",
    "Ontario",
    "Canada",
    "développement communautaire",
    "accompagnement spirituel",
    "éducation",
    "aide humanitaire"
  ],
  applicationName: ORG_NAME,
  authors: [{ name: ORG_NAME }],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: ORG_NAME,
    title: `${ORG_NAME} - Découvrir son identité, bâtir son avenir`,
    description: SITE_DESCRIPTION,
    locale: "fr_CA",
    alternateLocale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: ORG_NAME }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORG_NAME} - Découvrir son identité, bâtir son avenir`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"]
  }
};

export const viewport = {
  themeColor: "#051829"
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: ORG_NAME,
  alternateName: ORG_ACRONYM,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-full.png`,
  description: SITE_DESCRIPTION,
  slogan: "Découvrir son identité, bâtir son avenir.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ottawa",
    addressRegion: "Ontario",
    addressCountry: "CA"
  },
  ...(ACTIVE_SOCIAL_PROFILES.length > 0 ? { sameAs: ACTIVE_SOCIAL_PROFILES.map((p) => p.url) } : {})
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={figtree.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu principal
        </a>
        <LanguageProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
