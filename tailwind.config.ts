import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: { DEFAULT: "#06060e", surface: "#0c0c18", "surface-2": "#111122" },
        accent: { DEFAULT: "#00c896", glow: "rgba(0,200,150,0.25)" },
        cyan: "#00d4ff",
        purple: "#a78bfa",
        green: "#34d399",
        muted: "#8888a4",
        "muted-2": "#55556a",
        line: "rgba(255,255,255,0.06)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      screens: { xs: "420px" },
    },
  },
  plugins: [],
};
export default config;
