import Section from "@/components/Section";

export default function DevProPage() {
  return (
    <Section
      title="Développement professionnel"
      subtitle="Veille, autoformation, progression (placeholders à compléter)."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Veille technologique</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            PLACEHOLDER — Exemples : supervision, sécurité, réseaux, ITIL, outils ITSM…
          </p>
        </div>

        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Autoformation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            PLACEHOLDER — Liste tes cours, labs, certifications, et applications concrètes.
          </p>
        </div>
      </div>
    </Section>
  );
}
