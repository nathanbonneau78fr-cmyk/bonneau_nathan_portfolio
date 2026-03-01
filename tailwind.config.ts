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
      }
    }
  },
  plugins: []
} satisfies Config;
