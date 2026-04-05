import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050510",
          secondary: "#0A0A1A",
          tertiary: "#10102A",
        },
        text: {
          primary: "#EEEEF2",
          secondary: "#7A7A95",
          tertiary: "#4A4A65",
        },
        accent: {
          primary: "#E94560",
          "primary-glow": "#E9456040",
          secondary: "#8BE9FD",
          tertiary: "#BD93F9",
          green: "#50FA7B",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.03)",
          hover: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-accent":
          "linear-gradient(135deg, #E94560 0%, #BD93F9 100%)",
        "gradient-accent-2":
          "linear-gradient(135deg, #8BE9FD 0%, #BD93F9 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.5", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(233, 69, 96, 0.15)",
        "glow-md": "0 0 40px rgba(233, 69, 96, 0.2)",
        "glow-lg": "0 0 80px rgba(233, 69, 96, 0.3)",
        "glow-blue": "0 0 40px rgba(139, 233, 253, 0.15)",
        "glow-purple": "0 0 40px rgba(189, 147, 249, 0.15)",
        card: "0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover":
          "0 0 0 1px rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.6), 0 0 40px rgba(233,69,96,0.08)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
