"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import type { Detail } from "@/types";
import Modal from "./Modal";
import PhotoGallery from "./PhotoGallery";

/** Generic "click a card → see details" dialog used by most sections. */
export default function DetailModal({ detail, onClose }: { detail: Detail; onClose: () => void }) {
  return (
    <Modal title={detail.title} onClose={onClose}>
      {detail.meta && <p className="pr-10 text-sm text-accent-soft">{detail.meta}</p>}
      <h3 className="mt-1 pr-10 font-display text-2xl font-bold text-white">{detail.title}</h3>
      {detail.subtitle && <p className="mt-1 text-slate-400">{detail.subtitle}</p>}

      <div className="mt-5 space-y-3 leading-relaxed text-slate-300">
        {detail.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      {detail.tags && detail.tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {detail.tags.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      )}

      {detail.images && detail.images.length > 0 && (
        <div className="mt-6">
          <PhotoGallery images={detail.images} fit="contain" />
        </div>
      )}

      {detail.links && detail.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {detail.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="btn-primary">
              {l.label} <FaExternalLinkAlt className="text-xs" />
            </a>
          ))}
        </div>
      )}
    </Modal>
  );
}
