"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { events } from "@/data/portfolio";
import type { EventItem } from "@/types";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import SmartImage from "@/components/ui/SmartImage";
import DetailModal from "@/components/ui/DetailModal";

export default function Events() {
  const [selected, setSelected] = useState<EventItem | null>(null);

  return (
    <Section id="events" title="IT programs & volunteering" subtitle="Events I joined or helped organize at Premier University.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((ev, i) => (
          <Reveal key={ev.id} delay={i * 0.1}>
            <TiltCard onClick={() => setSelected(ev)} label={`Open details: ${ev.title}`} className="h-full overflow-hidden">
              <SmartImage src={ev.cover} alt={ev.title} className="aspect-[4/3] w-full object-cover object-top" />
              <div className="p-5">
                <span className="tag">{ev.role}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{ev.title}</h3>
                <p className="text-xs text-slate-500">{ev.organizer} · {ev.date}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{ev.summary}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <DetailModal
            onClose={() => setSelected(null)}
            detail={{
              title: selected.title,
              subtitle: selected.organizer,
              meta: `${selected.role} · ${selected.date}`,
              paragraphs: selected.details,
              images: selected.images,
            }}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
