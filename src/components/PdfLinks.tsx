import type { PreuvePdf } from "@/data/realisations";

export default function PdfLinks({ preuves }: { preuves: PreuvePdf[] }) {
  if (!preuves.length) {
    return (
      <p className="text-sm text-ink-300">
        Aucune preuve PDF renseignée (placeholder).
      </p>
    );
  }

  return (
    <ul className="grid gap-2">
      {preuves.map((p) => (
        <li
          key={p.href}
          className="flex flex-wrap items-center justify-between gap-2 rounded border border-ink-800/70 bg-ink-900/25 px-4 py-3"
        >
          <span className="text-sm text-ink-100">📄 {p.label}</span>
          <span className="flex items-center gap-2">
            <a
              className="rounded bg-accent-500 px-3 py-1 text-xs font-semibold text-black hover:bg-accent-600"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              Consulter
            </a>
            <a
              className="rounded border border-ink-700/70 px-3 py-1 text-xs font-semibold text-ink-100 hover:bg-ink-900/40"
              href={p.href}
              download
            >
              Télécharger
            </a>
          </span>
        </li>
      ))}
    </ul>
  );
}
