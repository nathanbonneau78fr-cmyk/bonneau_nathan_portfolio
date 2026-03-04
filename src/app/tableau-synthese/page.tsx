import Section from "@/components/Section";

export default function TableauSynthesePage() {
  return (
    <Section
      title="Tableau de synthèse"
      subtitle="Version officielle issue de mon tableau Excel (export PDF)."
    >
      <div className="glow-rgb-synthese rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="rounded bg-accent-500 px-4 py-2 text-sm font-semibold text-black hover:bg-accent-600"
            href="/documents/tableau-synthese.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Consulter le PDF
          </a>

          <a
            className="rounded border border-ink-700/70 px-4 py-2 text-sm font-semibold text-ink-100 hover:bg-ink-900/40"
            href="/documents/tableau-synthese.pdf"
            download
          >
            Télécharger le PDF
          </a>

          {/* Optionnel : proposer aussi le .xlsx */}
          {/* 
          <a
            className="rounded border border-ink-700/70 px-4 py-2 text-sm font-semibold text-ink-100 hover:bg-ink-900/40"
            href="/documents/tableau-synthese.xlsx"
            download
          >
            Télécharger le fichier Excel
          </a>
          */}
        </div>

        <div className="mt-6 overflow-hidden rounded-lg border border-ink-800/70 bg-black/20">
          {/* Affichage intégré du PDF */}
          <iframe
            title="Tableau de synthèse (PDF)"
            src="/documents/tableau-synthese.pdf"
            className="h-[75vh] w-full"
          />
        </div>

        <p className="mt-3 text-xs text-ink-300">
          Si le PDF ne s’affiche pas, utilise le bouton “Consulter le PDF”.
        </p>
      </div>
    </Section>
  );
}