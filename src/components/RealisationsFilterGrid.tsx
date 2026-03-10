"use client";

import { useMemo, useState } from "react";
import type { Realisation } from "@/data/realisations";
import RealisationCard from "@/components/RealisationCard";

type Filter = "all" | "formation" | "professionnel";

export default function RealisationsFilterGrid({
  realisations
}: {
  realisations: Realisation[];
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    let formation = 0;
    let professionnel = 0;

    for (const r of realisations) {
      if (r.categorie === "formation") formation++;
      if (r.categorie === "professionnel") professionnel++;
    }

    return { all: realisations.length, formation, professionnel };
  }, [realisations]);

  const filtered = useMemo(() => {
    if (filter === "all") return realisations;
    return realisations.filter((r) => r.categorie === filter);
  }, [realisations, filter]);

  const btn = (active: boolean) =>
    [
      "rounded-lg px-3 py-2 text-sm font-semibold transition",
      "border border-ink-800/70",
      active
        ? "bg-accent-500 text-black"
        : "bg-ink-900/25 text-ink-100 hover:bg-ink-900/40"
    ].join(" ");

  // Mets la classe glow que tu utilises pour la page Réalisations
  // (si tu as échangé Réalisations/Contact, remplace par "glow-rgb-contact")
  const glowClass = "glow-rgb-realisations";

  return (
    <>
      {/* Bannière + filtre fusionnés */}
      <div
        className={`${glowClass} mb-6 rounded-2xl border border-ink-800/70 bg-ink-900/20 p-4 shadow-soft`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-300">
              Parcours de professionnalisation
            </p>
            <p className="mt-1 text-sm text-ink-100">
              Les fiches ci-dessous présentent mes réalisations en alternance.
            </p>
          </div>

          <span className="rounded-full border border-ink-700/70 bg-ink-900/35 px-3 py-1 text-xs font-semibold text-ink-100">
            {counts.all} fiches
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-ink-800/60 pt-4">
          <button
            type="button"
            className={btn(filter === "all")}
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
          >
            Vue d’ensemble ({counts.all})
          </button>

          <button
            type="button"
            className={btn(filter === "formation")}
            onClick={() => setFilter("formation")}
            aria-pressed={filter === "formation"}
          >
            Contexte de formation ({counts.formation})
          </button>

          <button
            type="button"
            className={btn(filter === "professionnel")}
            onClick={() => setFilter("professionnel")}
            aria-pressed={filter === "professionnel"}
          >
            Contexte professionnel ({counts.professionnel})
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((r) => (
          <RealisationCard key={r.titre} r={r} />
        ))}
      </div>
    </>
  );
}