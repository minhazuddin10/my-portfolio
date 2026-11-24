/** Theme options shown in the navbar. Colors themselves live in globals.css. */
export const themes = [
  { id: "cyan", label: "Cyan", hex: "#22d3ee" },
  { id: "violet", label: "Violet", hex: "#a78bfa" },
  { id: "emerald", label: "Emerald", hex: "#34d399" },
  { id: "amber", label: "Amber", hex: "#fbbf24" },
  { id: "rose", label: "Rose", hex: "#fb7185" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const DEFAULT_THEME: ThemeId = "cyan";
export const THEME_STORAGE_KEY = "portfolio-theme";
