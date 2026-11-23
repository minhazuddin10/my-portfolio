"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import type { Link, Project } from "@/types";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import DetailModal from "@/components/ui/DetailModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const linksOf = (p: Project): Link[] => [
    ...(p.repoUrl ? [{ label: "Source code", url: p.repoUrl }] : []),
    ...(p.liveUrl ? [{ label: "Live site", url: p.liveUrl }] : []),
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <TiltCard onClick={() => setSelected(p)} label={`Open details: ${p.title}`} className="flex h-full flex-col p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                <span className="text-xs text-slate-500">{p.period}</span>
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-slate-400">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="tag">{t}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <DetailModal
            onClose={() => setSelected(null)}
            detail={{ title: selected.title, meta: selected.period, paragraphs: [selected.description, ...selected.details], tags: selected.tags, links: linksOf(selected) }}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
