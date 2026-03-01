import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <Section
      title="À propos"
      subtitle="Profil, parcours et contexte d’alternance (placeholders à personnaliser)."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Profil</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            PLACEHOLDER — Décris ton rôle, tes missions principales, tes centres d’intérêt
            (réseau, systèmes, sécurité, supervision…).
          </p>

          <div className="mt-5 text-sm text-ink-200">
            <p>
              <span className="font-semibold text-ink-100">Localisation :</span>{" "}
              {profile.localisation}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-ink-100">Contact :</span>{" "}
              {profile.email}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">
            BTS SIO (SISR) & alternance
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            PLACEHOLDER — Présente ton parcours BTS, ce que tu apprends, et comment tu l’appliques en alternance.
          </p>

          <h3 className="mt-5 text-sm font-semibold text-ink-100">
            Contexte entreprise (RTE)
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-200">
            PLACEHOLDER — Décris ton service/équipe, le périmètre, et l’environnement SI
            sans divulguer d’informations sensibles.
          </p>
        </div>
      </div>
    </Section>
  );
}
