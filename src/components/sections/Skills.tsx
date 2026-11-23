"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { devopsJourney, skillGroups } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import SmartImage from "@/components/ui/SmartImage";
import { skillIcons } from "@/components/ui/skillIcons";
import DetailModal from "@/components/ui/DetailModal";

export default function Skills() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="skills" title="Skills" subtitle="What I build with, and what I'm learning next.">
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div className="glass h-full p-6">
              <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((name) => {
                  const Icon = skillIcons[name]?.Icon;
                  return (
                    <li key={name} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-soft">
                      {Icon && <Icon className="shrink-0 text-lg text-accent-soft" aria-hidden />}
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <TiltCard onClick={() => setOpen(true)} label="Open DevOps journey" className="grid overflow-hidden md:grid-cols-[1.1fr_1fr]">
          <SmartImage src={devopsJourney.image} alt="DevOps life cycle" className="h-52 w-full object-cover md:h-full" />
          <div className="p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white">{devopsJourney.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-400">{devopsJourney.summary}</p>
            <p className="mt-4 text-sm font-medium text-accent-soft">Click to read more</p>
          </div>
        </TiltCard>
      </Reveal>

      <AnimatePresence>
        {open && (
          <DetailModal
            onClose={() => setOpen(false)}
            detail={{
              title: devopsJourney.title,
              paragraphs: [devopsJourney.summary, ...devopsJourney.details],
              images: [{ src: devopsJourney.image, caption: "The DevOps life cycle" }],
            }}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
