import { skillIcons } from "@/components/ui/skillIcons";

/** Two rows of tech chips sliding in opposite directions. Pauses on hover. */
const rowOne = ["React.js", "HTML", "CSS", "JavaScript", "Docker", "Git", "GitHub", "Linux", "AWS", "Kubernetes", "Python", "Microsoft Excel"];
const rowTwo = ["Docker", "Kubernetes", "AWS", "Linux", "Git", "GitHub", "Python", "React.js", "JavaScript", "CSS", "HTML", "Microsoft Excel"];

function Row({ items, reverse = false, duration }: { items: string[]; reverse?: boolean; duration: number }) {
  const loop = [...items, ...items]; // duplicated so the loop is seamless
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul
        className="animate-marquee flex w-max py-2 hover:[animation-play-state:paused]"
        style={{ ["--dur" as string]: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {loop.map((name, i) => {
          const entry = skillIcons[name];
          if (!entry?.Icon) return null; // skip unknown skills instead of crashing
          const { Icon, color } = entry;
          return (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= items.length}
              className="glass mr-4 flex shrink-0 items-center gap-3 !rounded-xl px-5 py-3 text-sm font-medium text-slate-200"
            >
              <Icon className="text-2xl" style={{ color }} aria-hidden />
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="space-y-2 py-6">
      <Row items={rowOne} duration={38} />
      <Row items={rowTwo} duration={44} reverse />
    </section>
  );
}
