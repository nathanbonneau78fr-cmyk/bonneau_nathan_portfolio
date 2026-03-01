import Section from "@/components/Section";
import PdfLinks from "@/components/PdfLinks";
import { realisations } from "@/data/realisations";
import { toSlug } from "@/lib/toSlug";
import Badge from "@/components/Badge";
import Link from "next/link";

export default function RealisationDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const r = realisations.find((x) => toSlug(x.titre) === params.slug);

  if (!r) {
    return (
      <Section title="Réalisation introuvable" subtitle="Vérifie l’URL ou reviens à la liste.">
        <Link className="text-ink-100 hover:underline" href="/realisations">
          ← Retour aux réalisations
        </Link>
      </Section>
    );
  }

  return (
    <Section
      title="Fiche réalisation"
      subtitle="Titre, contexte, tâches, compétences mobilisées, preuves PDF."
    >
      <div className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-ink-50">{r.titre}</h2>

        <h3 className="mt-6 text-sm font-semibold text-ink-100">Contexte</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-200">{r.contexte}</p>

        <h3 className="mt-6 text-sm font-semibold text-ink-100">Tâches réalisées</h3>
        <ul className="mt-2 grid gap-2 text-sm text-ink-200">
          {r.tachesRealisees.map((t) => (
            <li key={t} className="rounded border border-ink-800/60 bg-ink-900/25 px-4 py-2">
              {t}
            </li>
          ))}
        </ul>

        <h3 className="mt-6 text-sm font-semibold text-ink-100">Compétences mobilisées</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {r.competencesMobilisees.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>

        <h3 className="mt-6 text-sm font-semibold text-ink-100">Preuves associées (PDF)</h3>
        <div className="mt-2">
          <PdfLinks preuves={r.preuvesPdfAssociees} />
        </div>

        <div className="mt-6">
          <Link className="text-ink-100 hover:underline" href="/realisations">
            ← Retour aux réalisations
          </Link>
        </div>
      </div>
    </Section>
  );
}
