import { skillIcons } from "@/components/ui/skillIcons";

/** Static row of the technologies I work with (no scrolling animation). */
const techs = ["React.js", "HTML", "CSS", "JavaScript", "Docker", "Git", "GitHub", "Linux", "AWS", "Kubernetes", "Python", "Microsoft Excel"];

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
      <ul className="flex flex-wrap justify-center gap-3">
        {techs.map((name) => {
          const entry = skillIcons[name];
          if (!entry?.Icon) return null;
          const { Icon, color } = entry;
          return (
            <li
              key={name}
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2.5 text-xs font-medium text-slate-200 sm:text-sm"
            >
              <Icon className="text-xl sm:text-2xl" style={{ color }} aria-hidden />
              {name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
