import type { PreuvePdf } from "@/data/realisations";

export default function PdfLinks({ preuves }: { preuves: PreuvePdf[] }) {
  if (!preuves || preuves.length === 0) {
    return (
      <p className="text-sm text-ink-300">
        Aucune preuve PDF ajoutée pour cette réalisation.
      </p>
    );
  }

  return (
    <ul className="grid gap-3">
      {preuves.map((p, index) => (
        <li
          key={`${p.href}-${index}`}
          className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink-800/70 bg-ink-900/25 px-4 py-3"
        >
          <span className="text-sm text-ink-100">{p.label}</span>

          <div className="flex items-center gap-2">
            <a
              className="rounded-lg bg-accent-500 px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-accent-600"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              Consulter
            </a>

            <a
              className="rounded-lg border border-ink-700/70 px-3 py-1.5 text-xs font-semibold text-ink-100 transition hover:bg-ink-900/40"
              href={p.href}
              download
            >
              Télécharger
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}