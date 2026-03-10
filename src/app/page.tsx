import Link from "next/link";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <Section
      title="Bienvenue sur mon portfolio"
      subtitle="Étudiant en BTS SIO SISR à H3 campus de Poissy, je développe mes compétences en administration système, sécurité réseau et infrastructure informatique."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glow-rgb-about flex min-h-[285px] flex-col rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <div className="flex-1">
            <p className="text-sm text-ink-300">Identité</p>

            <h2 className="mt-2 text-xl font-semibold text-ink-50">
              {profile.nom}
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-ink-200">
              <span className="font-semibold text-ink-100">Objectif :</span>{" "}
              {profile.objectif}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="rounded bg-accent-500 px-4 py-2 text-sm font-semibold text-black hover:bg-accent-600"
              href="/realisations"
            >
              Voir mes réalisations
            </Link>
            <Link
              className="rounded border border-ink-700/70 px-4 py-2 text-sm font-semibold text-ink-100 hover:bg-ink-900/40"
              href="/tableau-synthese"
            >
              Tableau de synthèse
            </Link>
          </div>
        </div>

        <div className="glow-rgb-about flex min-h-[285px] flex-col rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <div className="flex-1">
            <p className="text-sm text-ink-300">Contexte</p>
            <h2 className="mt-2 text-xl font-semibold text-ink-50">
              Alternance chez RTE
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              {profile.alternance}
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            <Link className="text-ink-100 hover:underline" href="/a-propos">
              → À propos
            </Link>
            <Link className="text-ink-100 hover:underline" href="/competences">
              → Compétences
            </Link>
            <Link className="text-ink-100 hover:underline" href="/veille">
              → Veille technologique
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}