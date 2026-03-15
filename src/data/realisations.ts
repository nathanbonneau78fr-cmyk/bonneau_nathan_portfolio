import type { CompetenceCode } from "@/components/CompetencePictBadge";

export type PreuvePdf = {
  label: string;
  href: string;
};

export type Realisation = {
  titre: string;
  contexte: string;
  categorie: "formation" | "professionnel";
  preuvesPdfAssociees: PreuvePdf[];
  image?: string;
  imageAlt?: string;
  competences: CompetenceCode[];
};

export const realisations: Realisation[] = [
  {
  titre:
    "Installation et administration d’un serveur Windows Server (services de base, rôles, maintenance)",
  contexte:
    "Déploiement d’un serveur Windows Server en environnement de formation : installation, configuration des rôles, vérifications et maintenance de base.",
  categorie: "formation",
  image: "/realisations/windows-server-administration.png",
  imageAlt: "Serveur Windows avec logo Windows et icône de configuration",
  competences: ["C1", "C5"],
  preuvesPdfAssociees: [
  {
    label: "4-Atelier Install Serveur Web",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/4-atelier-install-serveur-web.pdf"
  },
  {
    label: "HA avec UCARP",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/ha-avec-ucarp.pdf"
  },
  {
    label: "Rapport BTS SIO UCARP 1",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/rapport-bts-sio-ucarp-1.pdf"
  },
  {
    label: "Réponse appel d'offre HA",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/reponse-appel-offre-ha.pdf"
  },
  {
    label: "Serveurs web",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/serveurs-web.pdf"
  },
  {
    label: "Services web (HTTP, HTTPS, serveurs web comme Apache ou Nginx)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/services-web-http-https-apache-nginx.pdf"
  },
  {
    label: "Sujet projet HA",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/sujet-projet-ha.pdf"
  }
]
},
  {
    titre: "Mise en place d’un contrôleur de domaine Active Directory",
    contexte:
      "Mise en place d’un contrôleur de domaine Active Directory : création d’utilisateurs, de groupes et organisation des droits dans un cadre de formation.",
    categorie: "formation",
    image: "/realisations/active-directory-controleur-domaine.png",
    imageAlt: "Contrôleur de domaine Active Directory avec utilisateurs et groupes",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Contrôleur de domaine - livrable",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’un-contrôleur-de-domaine-Active-Directory-(utilisateurs,groupes,GPO)/ad-controleur-domaine-livrable.pdf"
  },
  {
    label: "Gestion des utilisateurs et des droits",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’un-contrôleur-de-domaine-Active-Directory-(utilisateurs,groupes,GPO)/gestion-utilisateurs-droits.pdf"
  },
  {
    label: "Services d’annuaire (LDAP, Active Directory)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’un-contrôleur-de-domaine-Active-Directory-(utilisateurs,groupes,GPO)/services-annuaire-ldap-active-directory.pdf"
  }
]
},
  {
    titre: "Configuration des services réseau (DNS, DHCP, FTP)",
    contexte:
      "Configuration de services réseau : paramétrage, tests de fonctionnement et validation des échanges en environnement de formation.",
    categorie: "formation",
    image: "/realisations/services-reseau-dns-dhcp-ftp.png",
    imageAlt: "Services réseau DNS DHCP FTP avec schéma de connexion",
    competences: ["C1", "C5"],
   preuvesPdfAssociees: [
  {
    label: "Switch forwarding (corrigé)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/switch-forwarding-corrige.pdf"
  },
  {
    label: "Analyse de trame (devoir)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/devoir-analyse-trame.pdf"
  },
  {
    label: "Protocoles et services réseaux courants",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/protocoles-services-reseaux-courants-1.pdf"
  },
  {
    label: "Protocoles et services réseaux courants (version 2)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/protocoles-services-reseaux-courants-2.pdf"
  }
],
},
  {
    titre: "Déploiement et sécurisation d’un serveur de fichiers",
    contexte:
      "Déploiement d’un serveur de fichiers : structuration des partages, gestion des droits et sécurisation des accès.",
    categorie: "formation",
    image: "/realisations/serveur-fichiers-securise.png",
    imageAlt: "Serveur de fichiers avec dossiers partagés et cadenas",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Certificats et infrastructure à clé publique (PKI)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Déploiement-et-sécurisation-d’un-serveur-de-fichiers/certificats-pki.pdf"
  },
  {
    label: "Forensics informatique",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Déploiement-et-sécurisation-d’un-serveur-de-fichiers/forensics-informatique.pdf"
  },
  {
    label: "Protocoles cryptographiques",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Déploiement-et-sécurisation-d’un-serveur-de-fichiers/protocoles-cryptographiques.pdf"
  },
  {
    label: "Protocoles d’authentification",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Déploiement-et-sécurisation-d’un-serveur-de-fichiers/protocoles-authentification.pdf"
  },
  {
    label: "Services web (HTTP, HTTPS, serveurs web comme Apache ou Nginx)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Déploiement-et-sécurisation-d’un-serveur-de-fichiers/services-web-http-https-apache-nginx.pdf"
  },
  {
    label: "TP4 SSH serveur fichiers - livrable",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Déploiement-et-sécurisation-d’un-serveur-de-fichiers/tp4-ssh-serveur-fichiers-livrable.pdf"
  },
  {
  label: "Virtualisation",
  href: "/preuves/e5/formation/virtualisation/virtualisation.pdf"
}
]
  },
  {
    titre: "Mise en place d’une solution de sauvegarde et de restauration",
    contexte:
      "Définition d’une stratégie de sauvegarde : planification, contrôle des exécutions et tests de restauration pour valider la continuité de service.",
    categorie: "formation",
    image: "/realisations/sauvegarde-restauration-donnees.png",
    imageAlt: "Sauvegarde et restauration de données avec disque et flèche de retour",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Lab NFS",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/lab-nfs.pdf"
  },
  {
    label: "Lab RamDisque",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/lab-ramdisque.pdf"
  },
  {
    label: "Projet DATA Sec",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/projet-data-sec.pdf"
  },
  {
    label: "Protocoles de stockage (iSCSI, NFS, SMB)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/protocoles-stockage-iscsi-nfs-smb.pdf"
  },
  {
    label: "Sauvegarde et restauration 1",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/sauvegarde-restauration-1.pdf"
  },
  {
    label: "Sauvegarde et restauration 2",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/sauvegarde-restauration-2.pdf"
  },
  {
    label: "Technologies de stockage (SAN, NAS, DAS)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/technologies-stockage-san-nas-das.pdf"
  }
]
  },
  {
    titre: "Sécurisation du système d’information par pare-feu",
    contexte:
      "Mise en place de règles de filtrage : définition des flux autorisés, durcissement et tests de connectivité selon les besoins.",
    categorie: "formation",
    image: "/realisations/pare-feu-filtrage-securite.png",
    imageAlt: "Pare-feu réseau avec bouclier et règles de filtrage",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Lab SSH",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/lab-ssh.pdf"
    )
  },
  {
    label: "Mécanismes de protection (pare-feu, antivirus)",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/mecanismes-protection-pare-feu-antivirus.pdf"
    )
  },
  {
    label: "Normes et cadres réglementaires (comme ISO 27001, RGPD, etc.)",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/normes-cadres-reglementaires-iso-27001-rgpd.pdf"
    )
  },
  {
    label: "Pare-feu (firewall)",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/pare-feu-firewall.pdf"
    )
  },
  {
    label: "Pare-feu, IDS-IPS, solutions antimalware",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/pare-feu-ids-ips-antimalware.pdf"
    )
  },
  {
    label: "Politiques de sécurité et plans de reprise d'activité",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/politiques-securite-plans-reprise-activite.pdf"
    )
  },
  {
    label: "Politiques de sécurité",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/politiques-securite.pdf"
    )
  },
  {
    label: "Principes de base de la sécurité informatique",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/principes-base-securite-informatique.pdf"
    )
  },
  {
    label: "Systèmes de détection et de prévention des intrusions (IDS-IPS)",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/systemes-detection-prevention-intrusions-ids-ips.pdf"
    )
  },
  {
    label: "Tests de pénétration",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/tests-penetration.pdf"
    )
  },
  {
    label: "VPN, chiffrement, authentification",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/vpn-chiffrement-authentification.pdf"
    )
  },
  {
    label: "Vulnérabilités courantes (comme l'injection SQL, cross-site scripting, etc.)",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/vulnerabilites-courantes-injection-sql-xss.pdf"
    )
  }

]
  },
  {
    titre: "Création et administration d’un réseau local",
    contexte:
      "Conception d’un réseau local : plan d’adressage IP, segmentation VLAN, configuration et tests pour valider la connectivité.",
    categorie: "formation",
    image: "/realisations/reseau-local-vlan-adressage-ip.png",
    imageAlt: "Réseau local avec switch, VLAN et adresses IP",
    competences: ["C1", "C5"],
   preuvesPdfAssociees: [
  {
    label: "Lab - Identifying IPv4 Addresses",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/lab-identifying-ipv4-addresses.pdf"
    )
  },
  {
    label: "Lab - Configuration de base d’un switch Cisco",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/lab-configuration-base-switch-cisco.pdf"
    )
  },
  {
    label: "Lab - Configuring a Switch Management",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/lab-configuring-switch-management.pdf"
    )
  },
  {
    label: "Adressage IP - Base",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/adressage-ip-base.pdf"
    )
  },
  {
    label: "Bloc 2 - Couche Réseau IP - Partie 1",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/bloc2-couche-reseau-ip-partie1.pdf"
    )
  },
  {
    label: "Bloc 2 - Introduction au routage IP - Partie 3",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/bloc2-introduction-routage-ip-partie3.pdf"
    )
  },
  {
    label: "Bloc 2 - Les bases de l’adressage IPv4",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/bloc2-bases-adressage-ipv4.pdf"
    )
  },
  {
    label: "Bloc 2 - Les réseaux locaux",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/bloc2-reseaux-locaux.pdf"
    )
  },
  {
  label: "Bloc 2 - VLAN",
  href: "/preuves/e5/formation/reseau-local/bloc2-vlan.pdf"
},
  {
    label: "Modèle OSI",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/modele-osi.pdf"
    )
  },
  {
    label: "Protocoles et services réseau",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/protocoles-services-reseau.pdf"
    )
  },
  {
    label: "Topologies et typologies des réseaux",
    href: encodeURI(
      "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/topologies-typologies-reseaux.pdf"
    )
  }
]
  },
  {
    titre: "Virtualisation de serveurs et de services",
    contexte:
      "Mise en œuvre de la virtualisation : création de machines virtuelles, allocation des ressources, administration et vérification des services hébergés.",
    categorie: "formation",
    image: "/realisations/virtualisation-serveurs-machines-virtuelles.png",
    imageAlt: "Virtualisation de serveurs avec plusieurs machines virtuelles",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Lab - Installation VM Trisquel",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Virtualisation-de-serveurs-et-services-(création-et-gestion-de-machines-virtuelles)/lab-installation-vm-trisquel.pdf"
  },
  {
    label: "Lab - Installation VM Ubuntu",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Virtualisation-de-serveurs-et-services-(création-et-gestion-de-machines-virtuelles)/lab-installation-vm-ubuntu.pdf"
  },
  {
    label: "Atelier - Installation ordinateur virtuel",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Virtualisation-de-serveurs-et-services-(création-et-gestion-de-machines-virtuelles)/atelier-installation-ordinateur-virtuel.pdf"
  },
  {
    label: "Virtualisation",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Virtualisation-de-serveurs-et-services-(création-et-gestion-de-machines-virtuelles)/virtualisation.pdf"
  }
]
  },
  {
    titre: "Mission de veille technologique sur COSMOS",
    contexte:
      "Veille technologique : collecte d’informations, synthèse et restitution structurée des apports pour capitalisation.",
    categorie: "formation",
    image: "/realisations/veille-technologique-cosmos.png",
    imageAlt: "Veille technologique avec écran, articles et icône de recherche",
    competences: ["C4", "C6"],
    preuvesPdfAssociees: [
  {
    label: "Veille technologique COSMOS ServiceNow",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Veille technologique-COSMOS-Servicenow/veille-technologique-cosmos-servicenow.pdf"
  }
]
  },
  {
    titre: "Épreuve E5 : portfolio et tableau de synthèse",
    contexte:
      "Construction et mise à jour du portfolio E5 : structuration des réalisations, mise en cohérence et préparation des supports.",
    categorie: "formation",
    image: "/realisations/epreuve-e5-portfolio-tableau-synthese.png",
    imageAlt: "Portfolio E5 avec documents et tableau de synthèse",
    competences: ["C3", "C4", "C6"],
   preuvesPdfAssociees: [
  {
    label: "Épreuve E5 (portfolio, tableau de synthèse)",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Epreuve-E5-(portfolio,tableau-de-synthèse)/epreuve-e5-portfolio-tableau-synthese.pdf"
  }
]
  },
  {
    titre: "Création de scripts Bash et automatisation Shell",
    contexte:
      "Développement de scripts Shell : automatisation de tâches, gestion d’erreurs, traces d’exécution et documentation d’usage.",
    categorie: "formation",
    image: "/realisations/scripts-bash-automatisation-shell.png",
    imageAlt: "Terminal Linux avec script Bash et automatisation",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Lab - Commandes de base GNU/Linux",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Création-de-script-Bash-automatisés/lab-commandes-base-gnu-linux.pdf"
  },
  {
    label: "Lab - Scripts Bash",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Création-de-script-Bash-automatisés/lab-scripts-bash.pdf"
  },
  {
    label: "Exercices - Shell scripting",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Création-de-script-Bash-automatisés/exercices-shell-scripting.pdf"
  },
  {
    label: "Bloc 1 - Introduction Processus",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Création-de-script-Bash-automatisés/bloc1-introduction-processus.pdf"
  },
  {
    label: "Bloc 1 - Introduction Shell Scripts",
    href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Création-de-script-Bash-automatisés/bloc1-introduction-shell-scripts.pdf"
  }
]
  },

  {
    titre: "Gestion des utilisateurs du SI",
    contexte:
      "Traitement des opérations liées aux comptes et aux accès : création, modification, désactivation et suivi des demandes.",
    categorie: "professionnel",
    image: "/realisations/gestion-utilisateurs-si.png",
    imageAlt: "Gestion des utilisateurs du SI avec comptes et accès",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Accès au SI pour les externes et assistantes sociales",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/acces-si-externes-assistantes-sociales.pdf"
  },
  {
    label: "Arrivées et départs filiale",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/arrivees-departs-filiale.pdf"
  },
  {
    label: "Arrivées et départs",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/arrivees-departs.pdf"
  },
  {
    label: "Gestion des mutations et modifications profils utilisateurs",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/gestion-mutations-modifications-profils-utilisateurs.pdf"
  }
]
  },
  {
    titre: "Communication aux utilisateurs",
    contexte:
      "Rédaction et diffusion d’informations aux utilisateurs : consignes, changements, messages de suivi et accompagnement.",
    categorie: "professionnel",
    image: "/realisations/communication-utilisateurs-si.png",
    imageAlt: "Communication aux utilisateurs avec message et support informatique",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Communication aux utilisateurs",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Communication-aux-utilisateurs/communication-utilisateurs.pdf"
  }
]
  },
  {
    titre: "Applications, logiciels et dérogations",
    contexte:
      "Suivi de demandes applicatives : analyse du besoin, traitement des dérogations et mise à jour des informations de suivi.",
    categorie: "professionnel",
    image: "/realisations/applications-logiciels-derogations.png",
    imageAlt: "Applications et logiciels avec validation de dérogation",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Applications et logiciels",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Applications-logiciels-et-dérogations/fiche-arsi-applications-logiciels.pdf"
  }
]
  },
  {
    titre: "Gestion des listes de diffusion",
    contexte:
      "Administration de listes de diffusion : création, mise à jour des membres, contrôles et maintien de la cohérence.",
    categorie: "professionnel",
    image: "/realisations/listes-diffusion-messagerie.png",
    imageAlt: "Liste de diffusion avec groupe de messagerie",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Gestion des listes de diffusion",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-listes-de-diffussions/gestion-listes-diffusion.pdf"
  }
]
  },
  {
    titre: "Mise à jour Windows 10 22H2 des postes de dispatching et VIP",
    contexte:
      "Déploiement d’une mise à jour Windows sur des postes sensibles : préparation, exécution, contrôles post-déploiement et suivi.",
    categorie: "professionnel",
    image: "/realisations/windows-10-22h2-postes-vip-dispatching.png",
    imageAlt: "Mise à jour Windows 10 sur postes sensibles et VIP",
    competences: ["C1", "C4", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Mise à jour Windows 10 22H2 des postes de dispatching et VIP",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Mise-à-jour-Windows-10-22H2-des-postes-de-dispatching-et-VIP/mise-a-jour-windows10-22h2-postes-dispatching-vip.pdf"
  }
]
  },
  {
    titre: "Revue de conformité",
    contexte:
      "Contrôles de conformité : vérification d’éléments attendus, identification d’écarts et formalisation des actions à mener.",
    categorie: "professionnel",
    image: "/realisations/revue-conformite-controle.png",
    imageAlt: "Revue de conformité avec checklist et validation",
    competences: ["C1", "C2"],
   preuvesPdfAssociees: [
  {
    label: "Mode opératoire revues de conformité",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Revue-de-conformité/mode-operatoire-revues-conformite.pdf"
  }
]
  },
  {
    titre: "Active Directory et Hyena",
    contexte:
      "Utilisation d’outils d’administration Active Directory, comme Hyena, pour gérer les comptes, les groupes et faciliter les recherches et contrôles.",
    categorie: "professionnel",
    image: "/realisations/active-directory-hyena-administration.png",
    imageAlt: "Administration Active Directory avec utilisateurs, groupes et outil de gestion",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Utilisation de Hyena",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Active-Directory-et-Hyena/utilisation-hyena.pdf"
  },
  {
    label: "Active Directory les bases",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Active-Directory-et-Hyena/active-directory-les-bases.pdf"
  }
]
  },
  {
    titre: "Actions de sécurité suite à la perte ou au vol de matériel informatique ou télécom",
    contexte:
      "Application de mesures de sécurité : sécurisation des accès, actions immédiates, traçabilité et suivi de remédiation.",
    categorie: "professionnel",
    image: "/realisations/securite-perte-vol-materiel.png",
    imageAlt: "Sécurité après perte ou vol de matériel avec ordinateur et cadenas",
    competences: ["C1", "C2", "C5"],
   preuvesPdfAssociees: [
  {
    label: "Actions de sécurité suite à la perte ou au vol d'équipement RTE",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Actions-de-sécurité-suite-à-la-perte-ou-au-vol-de-materiel-informatique-ou-télécom/actions-securite-perte-vol-equipement-rte.pdf"
  }
]
  },
  {
    titre: "Installation et gestion des tokens RSA pour l’accès à distance sécurisé",
    contexte:
      "Gestion de tokens d’authentification forte : mise à disposition, assistance, renouvellement et vérification de l’accès à distance.",
    categorie: "professionnel",
    image: "/realisations/token-rsa-acces-distance.png",
    imageAlt: "Token RSA pour accès à distance sécurisé",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Gestion du code PIN RSA SecurID",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Installation-et-gestion-des-tokens-RSA-permettant-l’acces-à-distance-sécurisé/gestion-code-pin-rsa-securid.pdf"
  },
  {
    label: "Installation de Soft Token RSA sur Smartphone - Hors parc RTE V2",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Installation-et-gestion-des-tokens-RSA-permettant-l’acces-à-distance-sécurisé/installation-soft-token-rsa-smartphone-hors-parc-rte-v2.pdf"
  }
]
  },
  {
    titre: "Approbation des demandes des utilisateurs",
    contexte:
      "Analyse et validation de demandes : contrôle des informations, décision selon les règles, et suivi jusqu’à clôture.",
    categorie: "professionnel",
    image: "/realisations/approbation-demandes-utilisateurs.png",
    imageAlt: "Validation de demandes utilisateurs avec coche verte",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Back Office COSMOS",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Approbation-des-demandes-des-utilisateurs/back-office-cosmos.pdf"
  }
]
  },
  {
    titre: "Saisie de demandes dans le portail DIL",
    contexte:
      "Création et saisie de demandes dans le portail : qualification, catégorisation et suivi des échanges liés à la demande.",
    categorie: "professionnel",
    image: "/realisations/portail-dil-saisie-demande.png",
    imageAlt: "Saisie de demande dans un portail de support informatique",
    competences: ["C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Saisie de demande portail DIL",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Saisie de demande dans le portail DIL/saisie-demande-portail-dil.pdf"
  }
]
  },
  {
    titre: "Gestion d’une BAL fonctionnelle",
    contexte:
      "Gestion de boîtes aux lettres fonctionnelles : création, configuration, droits d’accès et tests d’envoi et de réception.",
    categorie: "professionnel",
    image: "/realisations/bal-fonctionnelle-messagerie.png",
    imageAlt: "Boîte mail fonctionnelle avec enveloppe et paramètres d'accès",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "BAL fonctionnelle",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion BAL (boîte aux lettres) fonctionnelle/bal-fonctionnelle.pdf"
  }
]
  },
  {
    titre: "Ticket GoPro Animation Filière SI",
    contexte:
      "Traitement d’une demande spécifique : qualification, coordination des actions, communication et clôture.",
    categorie: "professionnel",
    image: "/realisations/ticket-gopro-animation-filiere-si.png",
    imageAlt: "Ticket de support informatique lié à l’animation de la filière SI",
    competences: ["C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "GoPro AFSI",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Ticket GoPro Animation Filière SI/gopro-afsi.pdf"
  }
]
  },
  {
    titre: "Gestion des rapports, des listes et du matériel",
    contexte:
      "Mise à jour de suivis, rapports et listes, ainsi que gestion associée du matériel : consolidation, contrôles et cohérence des données.",
    categorie: "professionnel",
    image: "/realisations/gestion-rapports-listes-materiel.png",
    imageAlt: "Gestion de rapports, listes et matériel informatique",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Tables et rapports COSMOS",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion des rapports, des listes et du matériel/tables-rapports-cosmos.pdf"
  }
]
  },
  {
    titre: "Installation de bornes Wi-Fi",
    contexte:
      "Participation à l’installation de bornes Wi-Fi : préparation, mise en service, tests et validation de la connectivité.",
    categorie: "professionnel",
    image: "/realisations/installation-bornes-wifi.png",
    imageAlt: "Installation de borne Wi-Fi avec signal réseau",
    competences: ["C1", "C2", "C4", "C5"],
   preuvesPdfAssociees: [
  {
    label: "Installation de bornes Wi-Fi",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Installation de bornes Wi-Fi/installation-bornes-wifi.pdf"
  }
]
  },
  {
    titre: "Gestion et maintien en condition opérationnelle du matériel SI",
    contexte:
      "Maintien en condition opérationnelle : suivi, dépannage, remplacement et coordination afin de réduire l’impact sur les utilisateurs.",
    categorie: "professionnel",
    image: "/realisations/mco-materiel-si.png",
    imageAlt: "Maintien en condition opérationnelle du matériel informatique",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Équipement et MCO des salles de réunion",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion et maintien en condition opérationnelle du matériel SI/equipement-mco-salles-reunion.pdf"
  },
  {
    label: "Mise à jour ClickShare",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion et maintien en condition opérationnelle du matériel SI/fiche-arsi-mise-a-jour-clickshare.pdf"
  }
]
  },
  {
    titre: "Mise à jour Windows 11 23H2 des postes de dispatching et VIP",
    contexte:
      "Déploiement de Windows 11 sur des postes sensibles : préparation, accompagnement, contrôles post-déploiement et traitement d’anomalies.",
    categorie: "professionnel",
    image: "/realisations/windows-11-23h2-postes-vip-dispatching.png",
    imageAlt: "Mise à jour Windows 11 sur postes sensibles et VIP",
    competences: ["C1", "C4", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Procédure d’upgrade WIN11 23H2 des postes dispatching et VIP",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Mise à jour Windows 11 23H2 des postes de dispatching et VIP/procedure-upgrade-win11-23h2-postes-dispatching-vip.pdf"
  }
]
  },
  {
    titre: "Former et accompagner les utilisateurs dans leur montée en compétences du SI",
    contexte:
      "Accompagnement des utilisateurs : explications, démonstrations, bonnes pratiques et aide ciblée pour gagner en autonomie.",
    categorie: "professionnel",
    image: "/realisations/accompagnement-montee-competences-utilisateurs.png",
    imageAlt: "Accompagnement des utilisateurs en montée en compétences du SI",
    competences: ["C2", "C5"],
    preuvesPdfAssociees: [
  {
    label: "Former et accompagner les utilisateurs dans leur montée en compétences du SI",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Former et accompagner les utilisateurs dans leur montée en compétences du SI/former-accompagner-utilisateurs-montee-competences-si.pdf"
  }
]
  },
  {
    titre: "Participation à l’amélioration du diaporama de présentation pour les alternants de RTE",
    contexte:
      "Amélioration d’un support de présentation : structuration, lisibilité, mise en forme et adaptation au public visé.",
    categorie: "professionnel",
    image: "/realisations/amelioration-diaporama-alternants-rte.png",
    imageAlt: "Amélioration d’un diaporama de présentation pour alternants",
    competences: ["C3"],
    preuvesPdfAssociees: [
  {
    label: "Participation à l’optimisation du support de présentation des métiers RTE pour les futurs alternants",
    href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Participation a l’amélioration du diaporama présentation pour les alternant de RTE/participation-optimisation-support-presentation-metiers-rte-futurs-alternants.pdf"
  }
]
  },
  {
    titre: "Inventaire du matériel et étiquetage",
    contexte:
      "Inventaire du matériel : contrôle, étiquetage, mise à jour du suivi et remontée des écarts constatés.",
    categorie: "professionnel",
    image: "/realisations/inventaire-materiel-etiquetage.png",
    imageAlt: "Inventaire de matériel avec étiquetage et suivi",
    competences: ["C1"],
    preuvesPdfAssociees: []
  }
];