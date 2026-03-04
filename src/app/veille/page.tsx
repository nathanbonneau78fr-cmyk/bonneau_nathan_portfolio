import Section from "@/components/Section";

export default function VeillePage() {
  return (
    <Section
      title="Veille"
      subtitle="Consultation de mon document de veille (PDF) directement sur la page."
    >
      <div className="glow-rgb-veille rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="rounded bg-accent-500 px-4 py-2 text-sm font-semibold text-black hover:bg-accent-600"
            href="/documents/veille.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Consulter le PDF
          </a>

          <a
            className="rounded border border-ink-700/70 px-4 py-2 text-sm font-semibold text-ink-100 hover:bg-ink-900/40"
            href="/documents/veille.pdf"
            download
          >
            Télécharger le PDF
          </a>
        </div>

        {/* Encadré sombre + scroll dans le viewer */}
        <div className="mt-6 overflow-hidden rounded-lg border border-ink-800/70 bg-black/30">
          <iframe
            title="Document de veille (PDF)"
            src="/documents/veille.pdf"
            className="h-[80vh] w-full bg-black"
          />
        </div>

        <p className="mt-3 text-xs text-ink-300">
          Si le PDF ne s’affiche pas, utilise “Consulter le PDF”.
        </p>
      </div>
    </Section>
  );
}