import Section from "@/components/Section";
import { competences } from "@/data/competences";
import CompetencePictBadge, {
  type CompetenceCode
} from "@/components/CompetencePictBadge";

export default function CompetencesPage() {
  return (
    <Section
      title="Compétences"
      subtitle="Compétences développées et mises en œuvre tout au long de mon BTS, à travers les enseignements, les projets et les situations professionnelles rencontrées."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {competences.map((c) => (
          <article
            key={c.code}
            className="glow-rgb-competences rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft"
          >
            <div className="flex items-start gap-3">
              {/* ✅ pictogramme + C1/C2/C3... */}
              <CompetencePictBadge code={c.code as CompetenceCode} />

              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-ink-50">{c.titre}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">
                  {c.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}