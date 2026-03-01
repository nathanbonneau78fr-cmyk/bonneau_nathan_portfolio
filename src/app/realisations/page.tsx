import Section from "@/components/Section";
import { realisations } from "@/data/realisations";
import RealisationCard from "@/components/RealisationCard";

export default function RealisationsPage() {
  return (
    <Section
      title="Réalisations professionnelles & preuves"
      subtitle="Chaque mission dispose d’une fiche dédiée avec ses preuves PDF directement rattachées."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {realisations.map((r) => (
          <RealisationCard key={r.titre} r={r} />
        ))}
      </div>
    </Section>
  );
}
