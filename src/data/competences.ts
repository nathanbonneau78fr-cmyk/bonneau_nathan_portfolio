export type Competence = {
  code: "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
  titre: string;
  description: string;
};

export const competences: Competence[] = [
  {
    code: "C1",
    titre: "Gérer le patrimoine informatique",
    description:
      "Inventorier, maintenir à jour, sécuriser et faire évoluer les ressources (matériel, logiciel, configurations, documentation)."
  },
  {
    code: "C2",
    titre: "Répondre aux incidents et aux demandes d’assistance / d’évolution",
    description:
      "Qualifier, diagnostiquer, résoudre, escalader et capitaliser les solutions via procédures et base de connaissances."
  },
  {
    code: "C3",
    titre: "Développer la présence en ligne de l’organisation",
    description:
      "Contribuer à des contenus utiles (pages, docs, supports), en respectant clarté, accessibilité et cohérence."
  },
  {
    code: "C4",
    titre: "Travailler en mode projet",
    description:
      "Structurer, planifier, suivre, communiquer et livrer une réalisation (objectifs, jalons, risques, compte-rendus)."
  },
  {
    code: "C5",
    titre: "Mettre à disposition un service informatique aux utilisateurs",
    description:
      "Déployer, configurer, tester et documenter un service ; assurer la continuité et une expérience utilisateur fiable."
  },
  {
    code: "C6",
    titre: "Organiser son développement professionnel",
    description:
      "Mettre en place une veille, se former, tracer ses apprentissages et démontrer la progression de compétences."
  }
];
