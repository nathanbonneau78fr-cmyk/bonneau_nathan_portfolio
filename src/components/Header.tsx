import Link from "next/link";
import Container from "./Container";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/competences", label: "Compétences" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tableau-synthese", label: "Tableau de synthèse" },
  { href: "/veille", label: "Veille" }, // /veille
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/70 bg-[#060b14]/85 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
  <Link
    href="/"
    className="group flex items-center gap-3 rounded-md"
    aria-label="Retour à l’accueil"
    title="Accueil"
  >
    {/* Logo Accueil */}
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-ink-700/70 bg-ink-900/30 shadow-soft">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-accent-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    </span>

    {/* Texte (Nom + indication Accueil) */}
    <span className="min-w-0">
      <span className="block truncate text-sm font-semibold text-ink-50">
        {profile.nom}
      </span>
      <span className="mt-0.5 inline-flex items-center gap-2 truncate text-xs text-ink-300">
        <span className="group-hover:underline">Portfolio</span>
        <span className="text-ink-600"></span>
        <span className="truncate"></span>
      </span>
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