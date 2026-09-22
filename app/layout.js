import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

// Polices auto-hébergées (public/fonts) — évite une dépendance réseau vers
// fonts.googleapis.com au moment du build, qui s'est révélée intermittente sur CI.
const fraunces = localFont({
  src: "../public/fonts/Fraunces-Variable.woff2",
  weight: "400 700",
  variable: "--font-fraunces"
});

const publicSans = localFont({
  src: "../public/fonts/PublicSans-Variable.woff2",
  weight: "400 700",
  variable: "--font-public-sans"
});

export const metadata = {
  title: "Identité et Développement",
  description: "Découvrir son identité, bâtir son avenir. Organisme à but non lucratif — Ontario, Canada."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
