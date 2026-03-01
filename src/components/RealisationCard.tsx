import Link from "next/link";
import type { Realisation } from "@/data/realisations";
import { toSlug } from "@/lib/toSlug";
import Badge from "./Badge";

export default function RealisationCard({ r }: { r: Realisation }) {
  const slug = toSlug(r.titre);

  return (
    <article className="rounded-xl border border-ink-800/70 bg-ink-900/20 p-5 shadow-soft">
      <h2 className="text-lg font-semibold text-ink-50">
        <Link className="hover:underline" href={`/realisations/${slug}`}>
          {r.titre}
        </Link>
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-200">
        {r.contexte}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {r.competencesMobilisees.map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
      </div>

      <div className="mt-5">
        <Link
          className="inline-flex items-center gap-2 rounded border border-ink-700/70 bg-ink-900/30 px-4 py-2 text-sm font-semibold text-ink-100 hover:bg-ink-900/45"
          href={`/realisations/${slug}`}
        >
          Voir la fiche <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
