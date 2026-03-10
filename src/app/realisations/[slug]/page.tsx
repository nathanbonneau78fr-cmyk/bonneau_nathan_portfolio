import Section from "@/components/Section";
import PdfLinks from "@/components/PdfLinks";
import { realisations } from "@/data/realisations";
import { toSlug } from "@/lib/toSlug";
import Link from "next/link";
import Image from "next/image";
import CompetencePictBadge from "@/components/CompetencePictBadge";

export default async function RealisationDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = realisations.find((x) => toSlug(x.titre) === slug);

  if (!r) {
    return (
      <Section title="Réalisation introuvable" subtitle="Reviens à la liste.">
        <Link className="text-ink-100 hover:underline" href="/realisations">
          ← Retour aux réalisations
        </Link>
      </Section>
    );
  }

  return (
    <Section title="Fiche réalisation" subtitle="Contexte + documents associés.">
      <div className="glow-rgb-contact rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
        {r.image ? (
          <div className="mb-6 flex justify-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-xl border border-ink-800/70 bg-black/20 sm:h-64 sm:w-64 md:h-72 md:w-72">
              <Image
                src={r.image}
                alt={r.imageAlt ?? r.titre}
                fill
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                className="object-contain object-center p-6"
                priority={false}
              />
            </div>
          </div>
        ) : null}

        <h2 className="text-xl font-semibold text-ink-50">{r.titre}</h2>

        <div className="mt-4 flex flex-wrap gap-2">
         {r.competences.map((c) => (
  <CompetencePictBadge key={c} code={c} size="sm" />
))}
        </div>

        <h3 className="mt-6 text-sm font-semibold text-ink-100">Description</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-200">{r.contexte}</p>

        <h3 className="mt-6 text-sm font-semibold text-ink-100">Documents (PDF)</h3>
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