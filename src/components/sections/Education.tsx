"use client";

import { useState } from "react";
import { education } from "@/data/portfolio";
import type { Education as EducationItem } from "@/types";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import DetailModal from "@/components/ui/DetailModal";

export default function Education() {
  const [selected, setSelected] = useState<EducationItem | null>(null);

  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.institution} delay={i * 0.1}>
            <TiltCard onClick={() => setSelected(item)} label={`Open details: ${item.institution}`} className="h-full p-6">
              <p className="text-sm text-accent-soft">{item.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">{item.institution}</h3>
              <p className="text-slate-300">{item.degree}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      
        {selected && (
          <DetailModal
            onClose={() => setSelected(null)}
            detail={{ title: selected.institution, subtitle: selected.degree, meta: selected.period, paragraphs: selected.details }}
          />
        )}
      
    </Section>
  );
}
