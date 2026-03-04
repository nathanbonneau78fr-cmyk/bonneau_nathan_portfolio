import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="">
      <div className="mx-auto max-w-2xl">
        <div className="glow-rgb-contact rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Coordonnées</h2>

          <div className="mt-4 space-y-2 text-sm text-ink-200">
            <p>
              <span className="font-semibold text-ink-100">Nom :</span>{" "}
              {profile.nom}
            </p>
            <p>
              <span className="font-semibold text-ink-100">Email :</span>{" "}
              {profile.email}
            </p>
            <p>
              <span className="font-semibold text-ink-100">
                Localisation :
              </span>{" "}
              {profile.localisation}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}