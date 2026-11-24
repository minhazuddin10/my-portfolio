import { FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { youtubeChannels } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/** One card per YouTube channel. Clicking a card opens the channel in a new tab. */
export default function Videos() {
  return (
    <Section id="videos" title="YouTube" subtitle="My channels. Click a card to watch on YouTube.">
      <div className="grid gap-6 md:grid-cols-2">
        {youtubeChannels.map((ch, i) => (
          <Reveal key={ch.url} delay={i * 0.12} from={i % 2 === 0 ? "left" : "right"}>
            <a
              href={ch.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open YouTube channel ${ch.handle}`}
              className="glass glass-hover focus-ring group relative flex h-full items-center gap-5 overflow-hidden p-6 sm:p-8"
            >
              <div aria-hidden className="absolute -right-12 -top-12 h-44 w-44 glow-orb rounded-full transition duration-700 group-hover:scale-150" />
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-3xl text-accent-soft shadow-glow transition group-hover:scale-110">
                <FaYoutube aria-hidden />
              </span>
              <div className="relative flex-1">
                <h3 className="font-display text-xl font-semibold text-white">{ch.name}</h3>
                <p className="text-sm text-accent-soft">{ch.handle}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{ch.description}</p>
              </div>
              <FaExternalLinkAlt className="relative shrink-0 text-slate-500 transition group-hover:text-accent-soft" aria-hidden />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
