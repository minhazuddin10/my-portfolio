"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { certifications } from "@/data/portfolio";
import type { Certification } from "@/types";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import Modal from "@/components/ui/Modal";

interface FlipCardProps {
  cert: Certification;
  onView: (cert: Certification) => void;
}

/** Click to flip: front shows the certificate, back shows a summary. */
function FlipCard({ cert, onView }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${cert.title}, ${cert.issuer}. Press to flip.`}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className="flip-scene focus-ring aspect-[4/3] cursor-pointer rounded-2xl"
    >
      <div className="flip-inner h-full w-full" data-flipped={flipped}>
        {/* Front */}
        <div className="flip-face glass absolute inset-0 overflow-hidden">
          <SmartImage src={cert.image} alt={`${cert.title} certificate`} label="Certificate image coming soon" className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-12">
            <p className="font-display font-semibold text-white">{cert.title}</p>
            <p className="text-xs text-accent-soft">{cert.issuer} · {cert.issued}</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-face flip-back glass absolute inset-0 flex flex-col overflow-y-auto !bg-slate-950/90 p-5">
          <p className="flex items-center gap-2 text-xs text-accent-soft">
            <FaAward aria-hidden /> {cert.issuer} · {cert.issued}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-white">{cert.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{cert.summary}</p>
          <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-slate-400">
            {cert.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
            {cert.credentialId && <li>Credential ID: {cert.credentialId}</li>}
          </ul>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onView(cert);
            }}
            className="btn-primary mt-auto self-start !px-4 !py-2 text-xs"
          >
            View certificate
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [viewing, setViewing] = useState<Certification | null>(null);

  return (
    <Section id="certificates" title="Certificates" subtitle="Courses and recognitions I've earned. Click a card to flip it.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 3) * 0.1}>
            <FlipCard cert={cert} onView={setViewing} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {viewing && (
          <Modal title={viewing.title} onClose={() => setViewing(null)}>
            <h3 className="pr-10 font-display text-xl font-semibold text-white">{viewing.title}</h3>
            <p className="text-sm text-accent-soft">{viewing.issuer} · {viewing.issued}</p>
            <SmartImage
              src={viewing.image}
              alt={`${viewing.title} certificate`}
              label="Certificate image coming soon"
              className="mt-5 aspect-[4/3] w-full rounded-xl border border-white/10 bg-black/30 object-contain"
            />
          </Modal>
        )}
      </AnimatePresence>
    </Section>
  );
}
