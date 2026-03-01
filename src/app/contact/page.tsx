import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <Section
      title="Contact & conclusion"
      subtitle="Synthèse finale et coordonnées (placeholders à compléter)."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Conclusion</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            PLACEHOLDER — Résume tes points forts, tes réalisations clés, et le lien avec le bloc E4.
          </p>
        </div>

        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Coordonnées</h2>
          <p className="mt-3 text-sm text-ink-200">
            <span className="font-semibold text-ink-100">Nom :</span> {profile.nom}
          </p>
          <p className="mt-2 text-sm text-ink-200">
            <span className="font-semibold text-ink-100">Email :</span> {profile.email}
          </p>
          <p className="mt-2 text-sm text-ink-200">
            <span className="font-semibold text-ink-100">Localisation :</span> {profile.localisation}
          </p>
        </div>
      </div>
    </Section>
  );
}
