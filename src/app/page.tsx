import Link from "next/link";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <Section
      title="Portfolio E4 — BTS SIO (SISR)"
      subtitle="Présentation structurée et professionnelle de mes réalisations en alternance, alignée sur le bloc « Support et mise à disposition de services informatiques »."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <p className="text-sm text-ink-300">Identité</p>
          <h2 className="mt-2 text-xl font-semibold text-ink-50">
            {profile.nom}
          </h2>
          <p className="mt-2 text-sm text-ink-200">{profile.titre}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-200">
            <span className="font-semibold text-ink-100">Objectif :</span>{" "}
            {profile.objectif}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Support</Badge>
            <Badge>Infrastructure</Badge>
            <Badge>Réseau</Badge>
            <Badge>Services aux utilisateurs</Badge>
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

        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <p className="text-sm text-ink-300">Contexte</p>
          <h2 className="mt-2 text-xl font-semibold text-ink-50">
            Alternance — RTE
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            {profile.alternance}
          </p>

          <div className="mt-6 grid gap-3">
            <Link className="hover:underline text-ink-100" href="/a-propos">
              → À propos
            </Link>
            <Link className="hover:underline text-ink-100" href="/competences">
              → Compétences
            </Link>
            <Link
              className="hover:underline text-ink-100"
              href="/developpement-professionnel"
            >
              → Développement professionnel
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
