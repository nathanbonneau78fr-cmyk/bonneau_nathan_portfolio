import Section from "@/components/Section";
import { realisations } from "@/data/realisations";
import RealisationsFilterGrid from "@/components/RealisationsFilterGrid";

export default function RealisationsPage() {
  return (
    <Section title="Réalisations" subtitle="">
      <RealisationsFilterGrid realisations={realisations} />
    </Section>
  );
}