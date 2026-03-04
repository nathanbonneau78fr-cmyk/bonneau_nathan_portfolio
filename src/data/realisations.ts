export type PreuvePdf = {
  label: string;
  href: string; // ex: "/preuves/mon-document.pdf"
};

export type Realisation = {
  titre: string;
  contexte: string;

  // PDFs (si tu veux garder les preuves rattachées aux fiches)
  preuvesPdfAssociees: PreuvePdf[];

  // Image pour la carte (mettre les images dans /public/realisations/)
  image?: string;    // ex: "/realisations/incident-support.png"
  imageAlt?: string; // ex: "Illustration incident / support"
};

// Placeholders (à personnaliser) — 31 cartes au total
function makePlaceholderRealisation(numero: number): Realisation {
  const n = String(numero).padStart(2, "0");
  return {
    titre: `Réalisation ${n} — À personnaliser`,
    contexte:
      "PLACEHOLDER — Ajoute une courte description (1–2 phrases) de la réalisation.",
    preuvesPdfAssociees: [],
    // image: `/realisations/realisation-${n}.png`,
    // imageAlt: `Illustration réalisation ${n}`
  };
}

export const realisations: Realisation[] = [
  {
    titre:
      "Traitement de tickets d’incident et demandes d’assistance (N1/N2) — modèle",
    contexte:
      "EXEMPLE À PERSONNALISER — Support utilisateurs dans un environnement SI d’entreprise. Utilisation d’un outil ITSM (GLPI / ServiceNow / autre).",

    // ✅ Image de la carte (à déposer dans public/realisations/)
    image: "/realisations/INLI.png",
    imageAlt: "Illustration incident / support",

    preuvesPdfAssociees: [
      {
        label: "Switch forwarding (corrigé)",
        href: encodeURI(
          "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/2-switch-forwarding-corr.pdf"
        )
      },
      {
        label: "Analyse de trame (devoir)",
        href: encodeURI(
          "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/7-devoir-a-rendre-analyse-trame.pdf"
        )
      },
      {
        label: "Protocoles et services réseaux courants",
        href: encodeURI(
          "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/Protocoles et services réseaux courants.pdf"
        )
      },
      {
        label: "Protocoles et services réseaux courants (version 2)",
        href: encodeURI(
          "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/protocoles-et-services-reseaux-courants.pdf"
        )
      }
    ]
  },

  {
    titre: "Inventaire et mise à jour du patrimoine informatique — modèle",
    contexte:
      "EXEMPLE À PERSONNALISER — Participation à l’inventaire du parc, suivi des configurations, mise à jour de référentiels.",
    image: "/realisations/inventaire-parc.png",
    imageAlt: "Illustration inventaire / parc",
    preuvesPdfAssociees: [
      {
        label: "Synthèse inventaire (PDF — placeholder)",
        href: "/preuves/placeholder-procedure.pdf"
      }
    ]
  },

  {
    titre:
      "Mise à disposition d’un service aux utilisateurs (partage / accès / compte) — modèle",
    contexte:
      "EXEMPLE À PERSONNALISER — Mise en service ou évolution d’un accès (partage réseau, droits, etc.).",
    image: "/realisations/service-acces.png",
    imageAlt: "Illustration service / accès",
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
    image: "/realisations/documentation.png",
    imageAlt: "Illustration documentation",
    preuvesPdfAssociees: [
      {
        label: "Export PDF de la page / doc (PDF — placeholder)",
        href: "/preuves/placeholder-procedure.pdf"
      }
    ]
  },

  // ✅ Ajout de 27 réalisations placeholders pour arriver à 31 au total :
  ...Array.from({ length: 27 }, (_, i) => makePlaceholderRealisation(i + 5))
];