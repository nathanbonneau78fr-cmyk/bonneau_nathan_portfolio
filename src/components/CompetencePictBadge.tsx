import React from "react";

export type CompetenceCode = "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
type BadgeSize = "sm" | "md" | "lg";

function CompetenceIcon({
  code,
  size
}: {
  code: CompetenceCode;
  size: number;
}) {
  const common = {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (code) {
    case "C1":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="6" rx="1" />
          <rect x="4" y="13" width="16" height="6" rx="1" />
          <path d="M7 8h.01M7 16h.01" />
        </svg>
      );
    case "C2":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M8.2 8.2l2.2 2.2M15.6 15.6l2.2 2.2M15.8 8.2l-2.2 2.2M8.4 15.6l-2.2 2.2" />
        </svg>
      );
    case "C3":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "C4":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M9 9v6M15 9v3" />
        </svg>
      );
    case "C5":
      return (
        <svg {...common}>
          <path d="M16 21v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
          <circle cx="9.5" cy="9" r="3.5" />
          <path d="M16 11l1.5 1.5L21 9" />
        </svg>
      );
    case "C6":
      return (
        <svg {...common}>
          <path d="M22 10l-10 5L2 10l10-5 10 5Z" />
          <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      );
  }
}

const styleByCode: Record<CompetenceCode, string> = {
  C1: "border-blue-400/25 bg-blue-500/10 text-blue-100",
  C2: "border-red-400/25 bg-red-500/10 text-red-100",
  C3: "border-purple-400/25 bg-purple-500/10 text-purple-100",
  C4: "border-amber-400/25 bg-amber-500/10 text-amber-100",
  C5: "border-emerald-400/25 bg-emerald-500/10 text-emerald-100",
  C6: "border-cyan-400/25 bg-cyan-500/10 text-cyan-100"
};

const sizeCfg: Record<BadgeSize, { icon: number; cls: string }> = {
  sm: { icon: 16, cls: "px-3 py-1 text-xs gap-2" },
  md: { icon: 18, cls: "px-3.5 py-1.5 text-xs gap-2" },
  lg: { icon: 22, cls: "px-4 py-2 text-sm gap-2.5" }
};

export default function CompetencePictBadge({
  code,
  size = "md"
}: {
  code: CompetenceCode;
  size?: BadgeSize;
}) {
  const cfg = sizeCfg[size];

  return (
    <span
      className={`inline-flex items-center rounded-full border font-semibold ${cfg.cls} ${styleByCode[code]}`}
      title={code}
      aria-label={code}
    >
      <CompetenceIcon code={code} size={cfg.icon} />
      <span className="tracking-wide">{code}</span>
    </span>
  );
}