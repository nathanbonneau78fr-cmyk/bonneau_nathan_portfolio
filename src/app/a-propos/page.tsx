import Section from "@/components/Section";
import { profile } from "@/data/profile";

type EntryVariant = "professional" | "academic";

type ResumeEntryProps = {
  logo: string;
  logoAlt: string;
  titre: string;
  structure: string;
  meta: string;
  missions?: string[];
  technologies?: string;
  showMissionsTitle?: boolean;
  variant?: EntryVariant;
};

const entryToneClass: Record<EntryVariant, string> = {
  professional:
    "border-fuchsia-500/15 bg-[linear-gradient(135deg,rgba(88,28,135,0.18),rgba(146,64,14,0.14),rgba(15,23,42,0.22))]",
  academic:
    "border-cyan-500/15 bg-[linear-gradient(135deg,rgba(8,47,73,0.22),rgba(30,64,175,0.14),rgba(15,23,42,0.22))]"
};

function ResumeEntry({
  logo,
  logoAlt,
  titre,
  structure,
  meta,
  missions,
  technologies,
  showMissionsTitle = true,
  variant = "professional"
}: ResumeEntryProps) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-soft ${entryToneClass[variant]}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-ink-700/70 bg-white/95 p-1">
          <img
            src={logo}
            alt={logoAlt}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-ink-50">{titre}</h3>
          <p className="mt-1 text-sm font-medium text-ink-100">{structure}</p>
          <p className="mt-2 text-xs text-ink-300">{meta}</p>
        </div>
      </div>

      {missions?.length ? (
        <div className="mt-4">
          {showMissionsTitle ? (
            <p className="text-sm font-semibold text-ink-100">
              Missions principales
            </p>
          ) : null}

          <ul
            className={`${showMissionsTitle ? "mt-2" : ""} space-y-1 text-sm text-ink-200`}
          >
            {missions.map((mission) => (
              <li key={mission}>- {mission}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {technologies ? (
        <div className="mt-4">
          <p className="text-sm font-semibold text-ink-100">Technologies</p>
          <p className="mt-2 text-sm text-ink-200">- {technologies}</p>
        </div>
      ) : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <Section
      title="À propos"
      subtitle="Profil, parcours et contexte d’alternance."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glow-rgb rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">Profil</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            Étudiant en BTS SIO SISR (Services Informatiques aux Organisations
            option Solutions d'Infrastructure, Systèmes et Réseaux)
          </p>

          <div className="mt-5 text-sm text-ink-200">
            <p>
              <span className="font-semibold text-ink-100">Localisation :</span>{" "}
              {profile.localisation}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-ink-100">Contact :</span>{" "}
              {profile.email}
            </p>
          </div>
        </div>

        <div className="glow-rgb rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-ink-50">
            BTS SIO (SISR) & alternance
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            Je développe mes compétences en systèmes, réseaux et sécurité. En
            alternance chez RTE, je les applique au quotidien à travers le
            support, la gestion des incidents et la mise à disposition de
            services.
          </p>

          <h3 className="mt-5 text-sm font-semibold text-ink-100">
            RTE - (Réseau de Transport d'Électricité)
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-200">
            Alternance en tant qu’Appui à l’Animation Régionale du SI — Service
            POLARIS (Pôle d’Animation Régionale du SI et de sa Sécurité)
          </p>
        </div>
      </div>

      <div className="mt-6 grid items-start gap-6 xl:grid-cols-2">
        <div className="glow-rgb rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-ink-50">
            Expériences Professionnelles
          </h2>

          <div className="mt-5 space-y-5">
            <ResumeEntry
              variant="professional"
              logo="/logos/rte.png"
              logoAlt="Logo RTE"
              titre="Alternance – Appui Animateur Régional SI"
              structure="RTE – Réseau de Transport d'Électricité"
              meta="Saint-Denis (93) | 2024–2026 (2 ans)"
              missions={[
                "Coordination des CSI et pilotage de projets SI transverses.",
                "Support utilisateurs & gestion des incidents.",
                "Administration des accès et gestion du parc informatique.",
                "Organisation des travaux/aménagements SI et conformité.",
                "Suivi, reporting et contrôle interne."
              ]}
              technologies="ServiceNow, SharePoint, O365, Active Directory, GAIA"
            />

            <ResumeEntry
              variant="professional"
              logo="/logos/sqy.png"
              logoAlt="Logo SQY"
              titre="Stage – Support informatique"
              structure="Communauté d’agglomération de SQY"
              meta="Trappes (78) | janvier 2024 (4 semaines)"
              missions={[
                "Préparation & maintenance des postes.",
                "Support utilisateurs et gestion des tickets.",
                "Participation aux projets IT."
              ]}
              technologies="Windows 10/11, GLPI"
            />

            <ResumeEntry
              variant="professional"
              logo="/logos/ielo.png"
              logoAlt="Logo IELO"
              titre="Stage – Technicien SI"
              structure="IELO informatique"
              meta="Houilles (78) | 06/2022, 12/2022, 06/2023, 10/2023 (4 × 4 semaines)"
              missions={[
                "Réparation de pannes (hardware/software).",
                "Assistance technique, mises à jour."
              ]}
              technologies="Windows, Linux, diagnostic matériel & logiciel, PowerShell, gestion et accès NAS (stockage réseau)"
            />

            <ResumeEntry
              variant="professional"
              logo="/logos/inli.png"
              logoAlt="Logo IN'LI"
              titre="Stage – Technicien SI"
              structure="IN'LI"
              meta="Puteaux (92) | 01/2022 (3 semaines)"
              missions={[
                "Administration réseau, maintenance du parc informatique."
              ]}
            />
          </div>
        </div>

        <div className="glow-rgb rounded-xl border border-ink-800/70 bg-ink-900/20 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-ink-50">
            Parcours Académique
          </h2>

          <div className="mt-5 space-y-5">
            <ResumeEntry
              variant="academic"
              logo="/logos/h3-campus.png"
              logoAlt="Logo H3 Campus"
              titre="BTS SIO SISR"
              structure="H3 Campus"
              meta="Poissy (78) | 2024–2026 (2 ans)"
              showMissionsTitle={false}
              missions={[
                "Brevet de Technicien Supérieur – Services Informatiques aux Organisations, Option A : Solutions d'Infrastructure, Systèmes et Réseaux."
              ]}
            />

            <ResumeEntry
              variant="academic"
              logo="/logos/claude-chappe.png"
              logoAlt="Logo Lycée Claude Chappe"
              titre="BAC PRO SN RISC"
              structure="Lycée professionnel Claude Chappe"
              meta="Nanterre (92) | 2021–2024 (3 ans)"
              showMissionsTitle={false}
              missions={[
                "Baccalauréat Professionnel Systèmes Numériques – Option Réseaux Informatiques et Systèmes Communicants."
              ]}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}