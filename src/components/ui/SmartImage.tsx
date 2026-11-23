"use client";

import { useEffect, useRef, useState } from "react";
import { FaImage } from "react-icons/fa";

interface SmartImageProps {
  src?: string;
  alt: string;
  className?: string;
  /** Text shown when the file does not exist yet. */
  label?: string;
  eager?: boolean;
}

/**
 * <img> that falls back to a neat placeholder if the file is missing.
 * Lets you list images in data/portfolio.ts before you have the files.
 */
export default function SmartImage({ src, alt, className = "", label = "Photo coming soon", eager = false }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Catches errors that happened before React hydrated
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-deep/30 to-slate-900/60 text-slate-400 ${className}`}
      >
        <FaImage className="text-2xl" aria-hidden />
        <span className="px-2 text-center text-xs">{label}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setFailed(true)} className={className} />
  );
}
