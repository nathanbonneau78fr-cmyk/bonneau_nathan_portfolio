import Section from "@/components/Section";
import { realisations } from "@/data/realisations";
import { competences } from "@/data/competences";
import SyntheseTable from "@/components/SyntheseTable";

export default function TableauSynthesePage() {
  return (
    <Section
      title="Tableau de synthèse"
      subtitle="Correspondance entre réalisations et compétences mobilisées (adapté à l’oral)."
    >
      <SyntheseTable realisations={realisations} competences={competences} />
      <p className="mt-4 text-sm text-ink-300">
        Astuce : utilise cette page comme plan pendant l’oral (liens vers les fiches).
      </p>
    </Section>
  );
}
