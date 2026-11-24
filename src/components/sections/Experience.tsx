"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";
import type { Experience as ExperienceItem } from "@/types";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import DetailModal from "@/components/ui/DetailModal";

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-6 border-l border-accent/30 pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <li key={exp.company} className="relative">
            <span aria-hidden className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-accent shadow-glow sm:-left-[39px]" />
            <Reveal delay={i * 0.1} from="right">
              <TiltCard onClick={() => setSelected(exp)} label={`Open details: ${exp.role} at ${exp.company}`} className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="text-sm text-accent-soft">{exp.period}</span>
                </div>
                <p className="mt-1 text-slate-300">{exp.company} <span className="text-slate-500">({exp.type})</span></p>
                <p className="mt-3 leading-relaxed text-slate-400">{exp.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <li key={s} className="tag">{s}</li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          </li>
        ))}
      </ol>

      
        {selected && (
          <DetailModal
            onClose={() => setSelected(null)}
            detail={{
              title: selected.role,
              subtitle: selected.company,
              meta: `${selected.type} · ${selected.period} · ${selected.location}`,
              paragraphs: selected.details,
              tags: selected.skills,
            }}
          />
        )}
      
    </Section>
  );
}
