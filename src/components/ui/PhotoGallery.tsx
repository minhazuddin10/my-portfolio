"use client";

import { useState } from "react";
import type { GalleryImage } from "@/types";

interface PhotoGalleryProps {
  images: GalleryImage[];
  /** "contain" shows the whole picture (certificates), "cover" fills the frame (photos). */
  fit?: "contain" | "cover";
}

/**
 * Shows only the images whose files really exist. If none exist yet,
 * it renders nothing, so missing photos never leave empty boxes.
 */
export default function PhotoGallery({ images, fit = "cover" }: PhotoGalleryProps) {
  const [failed, setFailed] = useState<string[]>([]);
  const visible = images.filter((img) => !failed.includes(img.src));
  if (visible.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {visible.map((img) => (
        <figure key={img.src} className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.caption}
            loading="lazy"
            decoding="async"
            onError={() => setFailed((f) => [...f, img.src])}
            className={`aspect-[4/3] w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
          />
          <figcaption className="px-3 py-2 text-xs text-slate-400">{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
