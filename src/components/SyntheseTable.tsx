import type { Realisation } from "@/data/realisations";
import type { Competence } from "@/data/competences";
import Link from "next/link";
import { toSlug } from "@/lib/toSlug";

export default function SyntheseTable({
  realisations,
  competences
}: {
  realisations: Realisation[];
  competences: Competence[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-ink-800/70 bg-ink-900/20 shadow-soft">
      <table className="min-w-[820px] w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          Tableau de synthèse : réalisations et compétences mobilisées
        </caption>
        <thead className="bg-ink-900/35 text-ink-100">
          <tr>
            <th className="px-4 py-3">Réalisation</th>
            {competences.map((c) => (
              <th key={c.code} className="px-4 py-3">
                {c.code}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {realisations.map((r) => {
            const slug = toSlug(r.titre);
            return (
              <tr key={r.titre} className="border-t border-ink-800/60">
                <td className="px-4 py-3">
                  <Link
                    className="font-semibold text-ink-50 hover:underline"
                    href={`/realisations/${slug}`}
                  >
                    {r.titre}
                  </Link>
                </td>
                {competences.map((c) => {
                  const ok = r.competencesMobilisees.includes(c.code);
                  return (
                    <td key={c.code} className="px-4 py-3">
                      <span
                        className={ok ? "text-accent-500 font-bold" : "text-ink-600"}
                        aria-label={ok ? "Compétence mobilisée" : "Non mobilisée"}
                      >
                        {ok ? "✔" : "—"}
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
