"use client";

import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { achievements } from "@/data/portfolio";
import type { Achievement } from "@/types";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import DetailModal from "@/components/ui/DetailModal";

export default function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones I'm proud of. Click any card for details.">
      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.08}>
            <TiltCard onClick={() => setSelected(a)} label={`Open details: ${a.title}`} className="flex h-full gap-4 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-xl text-accent-soft">
                <FaTrophy aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{a.title}</h3>
                <p className="text-sm text-accent-soft">{a.subtitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.summary}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      
        {selected && (
          <DetailModal
            onClose={() => setSelected(null)}
            detail={{ title: selected.title, subtitle: selected.subtitle, paragraphs: selected.details, images: selected.images }}
          />
        )}
      
    </Section>
  );
}
