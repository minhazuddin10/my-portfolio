import { FaExternalLinkAlt } from "react-icons/fa";
import { company } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/** Clicking the card goes straight to the company website. */
export default function Company() {
  return (
    <Section id="company" title="My company">
      <Reveal>
        <a
          href={company.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${company.name} website`}
          className="glass glass-hover focus-ring group relative flex flex-col gap-6 overflow-hidden p-8 sm:flex-row sm:items-center sm:p-10"
        >
          <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl transition duration-700 group-hover:scale-150" />
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 font-display text-3xl font-bold text-accent-soft shadow-glow">
            NB
          </div>
          <div className="relative flex-1">
            <p className="text-sm text-accent-soft">{company.role}</p>
            <h3 className="font-display text-3xl font-bold text-white">{company.name}</h3>
            <p className="mt-2 max-w-xl text-slate-400">{company.description}</p>
          </div>
          <span className="btn-primary relative">
            Visit neutrinobyte.com <FaExternalLinkAlt className="text-xs" />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
