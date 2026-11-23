"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { research } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import SmartImage from "@/components/ui/SmartImage";
import Modal from "@/components/ui/Modal";
import PhotoGallery from "@/components/ui/PhotoGallery";

/** Full "detail page" shown in a large dialog when the research card is clicked. */
function ResearchDetails({ onClose }: { onClose: () => void }) {
  return (
    <Modal title={research.shortTitle} onClose={onClose} size="lg">
      <p className="pr-10 text-sm text-accent-soft">{research.venue}</p>
      <h3 className="mt-2 pr-10 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">{research.title}</h3>

      <ul className="mt-4 flex flex-wrap gap-2">
        {research.status.map((s) => (
          <li key={s} className="tag">{s}</li>
        ))}
      </ul>

      <p className="mt-6 leading-relaxed text-slate-300">{research.summary}</p>
      {research.highlights.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300">
          {research.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      <h4 className="mt-10 font-display text-lg font-semibold text-white">Team and supervisor</h4>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {research.people.map((p) => (
          <li key={p.name}>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-accent/50"
            >
              <FaLinkedin className="mt-1 shrink-0 text-xl text-accent-soft" aria-hidden />
              <span>
                <span className="block font-medium text-white">{p.name}</span>
                <span className="block text-sm text-slate-400">{p.role}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <h4 className="mt-10 font-display text-lg font-semibold text-white">The journey</h4>
      <ol className="relative mt-5 space-y-8 border-l border-accent/30 pl-6">
        {research.updates.map((u) => (
          <li key={u.title} className="relative">
            <span aria-hidden className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <h5 className="font-display text-lg font-semibold text-white">{u.title}</h5>
            <div className="mt-2 space-y-2 leading-relaxed text-slate-300">
              {u.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {u.image && (
              <div className="mt-4">
                <PhotoGallery images={[{ src: u.image, caption: u.title }]} />
              </div>
            )}
          </li>
        ))}
      </ol>

      <h4 className="mt-10 font-display text-lg font-semibold text-white">Photos</h4>
      <p className="mt-2 text-sm text-slate-500">Photos with our supervisor and from the presentation appear here once added.</p>
      <div className="mt-4">
        <PhotoGallery images={research.gallery} />
      </div>
    </Modal>
  );
}

export default function Research() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="research" title="Research & thesis" subtitle="Our undergraduate thesis, published at an international conference.">
      <Reveal>
        <TiltCard onClick={() => setOpen(true)} label="Open research details" className="grid overflow-hidden md:grid-cols-[1fr_1.2fr]">
          <SmartImage src={research.cover} alt="Final defense" label="Defense photo coming soon" className="h-56 w-full object-cover md:h-full" />
          <div className="p-6 sm:p-8">
            <ul className="flex flex-wrap gap-2">
              {research.status.map((s) => (
                <li key={s} className="tag">{s}</li>
              ))}
            </ul>
            <h3 className="mt-4 break-words font-display text-xl font-semibold leading-snug text-white sm:text-2xl">{research.title}</h3>
            <p className="mt-3 text-sm text-accent-soft">{research.venue}</p>
            <p className="mt-3 leading-relaxed text-slate-400">{research.summary}</p>
            <p className="mt-5 text-sm font-medium text-accent-soft">Click for the full story, team and photos</p>
          </div>
        </TiltCard>
      </Reveal>

      <AnimatePresence>{open && <ResearchDetails onClose={() => setOpen(false)} />}</AnimatePresence>
    </Section>
  );
}
