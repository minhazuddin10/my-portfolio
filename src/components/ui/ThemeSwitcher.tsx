"use client";

import { themes } from "@/config/themes";
import { useTheme } from "@/components/providers/ThemeProvider";

/** Row of color dots; clicking one recolors the whole website. */
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div role="radiogroup" aria-label="Website color" className="flex items-center gap-1.5">
      {themes.map((t) => (
        <button
          key={t.id}
          role="radio"
          aria-checked={theme === t.id}
          aria-label={`${t.label} theme`}
          title={t.label}
          onClick={() => setTheme(t.id)}
          className={`focus-ring h-5 w-5 rounded-full border-2 transition hover:scale-110 ${
            theme === t.id ? "scale-110 border-white" : "border-white/20"
          }`}
          style={{ backgroundColor: t.hex }}
        />
      ))}
    </div>
  );
}
