"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { about, aboutFacts, profile, stats } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import SmartImage from "@/components/ui/SmartImage";
import DetailModal from "@/components/ui/DetailModal";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="about" title="About me">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal from="left">
          <TiltCard onClick={() => setOpen(true)} label="Open details about me" className="grid gap-6 p-6 sm:grid-cols-[180px_1fr]">
            <SmartImage src={profile.aboutImage} alt={profile.name} className="aspect-square w-full rounded-2xl bg-gradient-to-br from-accent-deep/40 to-slate-900 object-cover object-top" />
            <div className="space-y-3 leading-relaxed text-slate-300">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="pt-1 text-sm font-medium text-accent-soft">Click to learn more</p>
            </div>
          </TiltCard>
        </Reveal>

        <div className="grid gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} from="right" delay={i * 0.1}>
              <div className="glass flex items-center gap-5 px-6 py-5">
                <span className="font-display text-3xl font-bold text-accent-soft">{s.value}</span>
                <span className="text-sm text-slate-400">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <DetailModal
            onClose={() => setOpen(false)}
            detail={{ title: profile.name, subtitle: profile.headline, paragraphs: [...about, ...aboutFacts] }}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
