import Link from "next/link";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="">
      <div className="mx-auto max-w-2xl">
        <div className="glow-rgb-realisations rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Coordonnées</h2>

          <div className="mt-4 space-y-4 text-sm text-ink-200">
            <p>
              <span className="font-semibold text-ink-100">Nom :</span>{" "}
              {profile.nom}
            </p>

            <p>
              <span className="font-semibold text-ink-100">Email :</span>{" "}
              {profile.email}
            </p>

            <p>
              <span className="font-semibold text-ink-100">Localisation :</span>{" "}
              {profile.localisation}
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
              <div>
                <span className="font-semibold text-ink-100">Mon CV :</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/cv/cv-nathan-bts-sio-sisr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent-500/35 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-ink-50 transition hover:bg-accent-500/20"
                >
                  Consulter
                  <span aria-hidden>↗</span>
                </Link>

                <a
                  href="/cv/cv-nathan-bts-sio-sisr.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-ink-700/70 bg-ink-900/35 px-4 py-2 text-sm font-semibold text-ink-100 transition hover:border-accent-500/35 hover:bg-ink-900/50"
                >
                  Télécharger
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}