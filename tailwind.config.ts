import type { Config } from "tailwindcss";

/**
 * Colors come from CSS variables (see globals.css) so the visitor can switch
 * the whole theme at runtime. Values are "R G B" triplets, which lets Tailwind
 * keep opacity modifiers working, e.g. `bg-accent/20`.
 */
const withVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: withVar("--base"),
        accent: {
          DEFAULT: withVar("--accent"),
          soft: withVar("--accent-soft"),
          deep: withVar("--accent-deep"),
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 26px rgb(var(--accent) / 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-16px) rotate(calc(var(--r, 0deg) + 6deg))" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spinSlow var(--dur, 20s) linear infinite",
        marquee: "marquee var(--dur, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
