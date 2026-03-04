import Section from "@/components/Section";
import { realisations } from "@/data/realisations";
import RealisationCard from "@/components/RealisationCard";

export default function RealisationsPage() {
  return (
    <Section
      title="Réalisations professionnelles & preuves"
      subtitle="Une présentation claire et visuelle de mes missions, avec accès direct aux fiches détaillées et aux preuves associées."
    >
      <div className="glow-rgb-realisations mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink-800/70 bg-ink-900/20 p-4 shadow-soft">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-300">
            Parcours de professionnalisation
          </p>
          <p className="mt-1 text-sm text-ink-100">
            Les fiches ci-dessous présentent mes réalisations en alternance.
          </p>
        </div>

        <span className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-500">
          {realisations.length} fiche{realisations.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* 1 colonne mobile / 2 colonnes tablette / 4 colonnes grand écran */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {realisations.map((r) => (
          <RealisationCard key={r.titre} r={r} />
        ))}
      </div>
    </Section>
  );
}