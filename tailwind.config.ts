import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f8fb",
          100: "#eef2f7",
          200: "#d9e2ef",
          300: "#b8c7dc",
          600: "#39557a",
          700: "#2b4464",
          800: "#1f324b",
          900: "#162334"
        },
        accent: {
          500: "#1ea7a8",
          600: "#148a8a"
        }
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)"
      },

      // ✅ AJOUT ICI (dans extend)
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-30%)" },
          "100%": { transform: "translateX(130%)" }
        }
      },

      // ✅ AJOUT ICI (objet, pas tableau)
      animation: {
        floatSlow: "floatSlow 10s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;