import Section from "@/components/Section";
import { competences } from "@/data/competences";
import Badge from "@/components/Badge";

export default function CompetencesPage() {
  return (
    <Section
      title="Compétences — Bloc E4"
      subtitle="Les 6 compétences du bloc « Support et mise à disposition de services informatiques »."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {competences.map((c) => (
          <article
            key={c.code}
            className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <Badge className="border-accent-500/40">{c.code}</Badge>
              <h2 className="text-lg font-semibold text-ink-50">{c.titre}</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              {c.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
