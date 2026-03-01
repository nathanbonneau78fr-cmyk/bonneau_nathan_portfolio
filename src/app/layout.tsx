import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio E4 — BTS SIO SISR (RTE)",
  description:
    "Portfolio E4 — Support et mise à disposition de services informatiques — BTS SIO SISR (alternance RTE)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded bg-accent-500 px-4 py-2 font-medium text-black"
        >
          Aller au contenu principal
        </a>

        <Header />
        <main id="contenu" className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
