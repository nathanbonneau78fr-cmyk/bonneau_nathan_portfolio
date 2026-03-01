import Link from "next/link";
import Container from "./Container";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/competences", label: "Compétences" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tableau-synthese", label: "Tableau de synthèse" },
  { href: "/developpement-professionnel", label: "Dév. professionnel" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/70 bg-[#060b14]/85 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <Link href="/" className="block">
              <span className="block truncate text-sm font-semibold text-ink-50">
                {profile.nom}
              </span>
              <span className="block truncate text-xs text-ink-300">
                Portfolio E4 — BTS SIO SISR
              </span>
            </Link>
          </div>

          <nav className="hidden md:block" aria-label="Navigation principale">
            <ul className="flex flex-wrap items-center gap-3 text-sm text-ink-200">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    className="rounded px-2 py-1 hover:text-ink-50 hover:underline"
                    href={l.href}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <details className="group">
              <summary className="cursor-pointer list-none rounded border border-ink-700/70 bg-ink-900/30 px-3 py-2 text-sm text-ink-100">
                Menu
              </summary>
              <nav aria-label="Navigation mobile" className="mt-2">
                <ul className="grid gap-1 rounded border border-ink-800/70 bg-[#0a1324] p-2 shadow-soft">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        className="block rounded px-3 py-2 text-sm text-ink-200 hover:bg-ink-900/40 hover:text-ink-50"
                        href={l.href}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
