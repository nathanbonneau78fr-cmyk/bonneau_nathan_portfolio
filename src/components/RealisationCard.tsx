import Link from "next/link";
import Image from "next/image";
import type { Realisation } from "@/data/realisations";
import { toSlug } from "@/lib/toSlug";
import CompetencePictBadge from "@/components/CompetencePictBadge";

export default function RealisationCard({ r }: { r: Realisation }) {
  const slug = toSlug(r.titre);

  return (
    <article className="glow-rgb-contact group flex h-full flex-col rounded-2xl border border-ink-800/70 bg-ink-900/20 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-ink-900/30">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl">
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          {r.image ? (
            <Image
              src={r.image}
              alt={r.imageAlt ?? r.titre}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-contain object-center scale-100 transition-transform duration-300 group-hover:scale-105"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-900/30 via-ink-900/60 to-black/40" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/90 via-[#050a12]/35 to-transparent" />
        </div>

        {/* Contenu */}
        <div className="flex flex-1 flex-col p-5">
          <h2 className="text-lg font-semibold leading-snug text-ink-50">
            <Link className="hover:underline" href={`/realisations/${slug}`}>
              {r.titre}
            </Link>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            {r.contexte}
          </p>

          <div className="mt-auto pt-4">
            <div className="flex min-h-[34px] flex-wrap gap-2">
              {r.competences.map((c) => (
                <CompetencePictBadge key={c} code={c} size="sm" />
              ))}
            </div>

            <div className="mt-4">
              <Link
                className="inline-flex items-center gap-2 rounded-xl border border-ink-700/70 bg-ink-900/35 px-4 py-2 text-sm font-semibold text-ink-100 transition hover:border-accent-500/35 hover:bg-ink-900/50"
                href={`/realisations/${slug}`}
              >
                Voir la fiche <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}