export type PreuvePdf = {
  label: string;
  href: string; // ex: "/preuves/mon-document.pdf"
};

export type Realisation = {
  titre: string;
  contexte: string;
  tachesRealisees: string[];
  competencesMobilisees: string[]; // codes: C1..C6
  preuvesPdfAssociees: PreuvePdf[];
};

export const realisations: Realisation[] = [
  {
    titre: "Traitement de tickets d’incident et demandes d’assistance (N1/N2) — modèle",
    contexte:
      "EXEMPLE À PERSONNALISER — Support utilisateurs dans un environnement SI d’entreprise. Utilisation d’un outil ITSM (GLPI / ServiceNow / autre).",
    tachesRealisees: [
      "Qualifier les tickets : impact / urgence / catégorie",
      "Diagnostiquer (réseau, poste, droits, applications) et appliquer des correctifs",
      "Escalader avec éléments techniques (logs, étapes de repro, captures)",
      "Rédiger un compte-rendu et mettre à jour la base de connaissance"
    ],
    competencesMobilisees: ["C2", "C5", "C6"],
    preuvesPdfAssociees: [
      {
        label: "Compte-rendu d’intervention (PDF — placeholder)",
        href: "/preuves/placeholder-compte-rendu-intervention.pdf"
      },
      {
        label: "Procédure de diagnostic (PDF — placeholder)",
        href: "/preuves/placeholder-procedure.pdf"
      }
    ]
  },
  {
    titre: "Inventaire et mise à jour du patrimoine informatique — modèle",
    contexte:
      "EXEMPLE À PERSONNALISER — Participation à l’inventaire du parc (postes/serveurs), suivi des configurations, mise à jour de référentiels.",
    tachesRealisees: [
      "Vérifier et compléter l’inventaire (matériel / OS / logiciels / localisation)",
      "Identifier les écarts (matériel non référencé, versions obsolètes)",
      "Proposer des actions : normalisation, retrait, mise à jour",
      "Rédiger une note de synthèse"
    ],
    competencesMobilisees: ["C1", "C4", "C6"],
    preuvesPdfAssociees: [
      {
        label: "Synthèse inventaire (PDF — placeholder)",
        href: "/preuves/placeholder-procedure.pdf"
      }
    ]
  },
  {
    titre: "Mise à disposition d’un service aux utilisateurs (partage / accès / compte) — modèle",
    contexte:
      "EXEMPLE À PERSONNALISER — Mise en service ou évolution d’un accès (partage réseau, groupe AD, droits applicatifs, etc.).",
    tachesRealisees: [
      "Recueillir le besoin et valider avec le référent",
      "Mettre en place les accès (groupes, droits, règles de nommage)",
      "Tester avec un utilisateur pilote",
      "Documenter la procédure d’attribution et de révocation"
    ],
    competencesMobilisees: ["C5", "C1", "C4"],
    preuvesPdfAssociees: [
      {
        label: "Capture outil / paramétrage (PDF — placeholder)",
        href: "/preuves/placeholder-capture-outil.pdf"
      }
    ]
  },
  {
    titre: "Contribution à la présence en ligne (documentation / page interne) — modèle",
    contexte:
      "EXEMPLE À PERSONNALISER — Amélioration d’une page intranet / documentation technique à destination des utilisateurs.",
    tachesRealisees: [
      "Structurer une page d’information (FAQ, pas-à-pas)",
      "Mettre à jour les contenus et vérifier la clarté",
      "Assurer l’accessibilité (titres, listes, liens explicites)",
      "Publier et communiquer le lien"
    ],
    competencesMobilisees: ["C3", "C6", "C4"],
    preuvesPdfAssociees: [
      {
        label: "Export PDF de la page / doc (PDF — placeholder)",
        href: "/preuves/placeholder-procedure.pdf"
      }
    ]
  }
];
