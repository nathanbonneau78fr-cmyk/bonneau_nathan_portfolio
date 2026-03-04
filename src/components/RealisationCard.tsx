import Link from "next/link";
import Image from "next/image";
import type { Realisation } from "@/data/realisations";
import { toSlug } from "@/lib/toSlug";

export default function RealisationCard({ r }: { r: Realisation }) {
  const slug = toSlug(r.titre);

  return (
    <article className="glow-rgb-realisations group rounded-2xl border border-ink-800/70 bg-ink-900/20 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-ink-900/30">
      <div className="overflow-hidden rounded-2xl">
        {/* Image */}
        <div className="relative h-44 w-full">
          {r.image ? (
            <Image
              src={r.image}
              alt={r.imageAlt ?? r.titre}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-900/30 via-ink-900/60 to-black/40" />
          )}

          {/* Dégradé pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/90 via-[#050a12]/35 to-transparent" />

          {/* Picto en haut à droite */}
          <div className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-700/70 bg-ink-900/50">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-ink-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16" />
              <path d="M7 4h10" />
              <rect x="5" y="7" width="14" height="14" rx="2" />
            </svg>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-5">
          <h2 className="text-lg font-semibold leading-snug text-ink-50">
            <Link className="hover:underline" href={`/realisations/${slug}`}>
              {r.titre}
            </Link>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            {r.contexte}
          </p>

          <div className="mt-5">
            <Link
              className="inline-flex items-center gap-2 rounded-xl border border-ink-700/70 bg-ink-900/35 px-4 py-2 text-sm font-semibold text-ink-100 transition hover:border-accent-500/35 hover:bg-ink-900/50"
              href={`/realisations/${slug}`}
            >
              Voir la fiche <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}