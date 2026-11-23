"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  /** "lg" for full detail pages (research), "md" for normal cards. */
  size?: "md" | "lg";
}

/**
 * Accessible dialog. Mount it conditionally inside <AnimatePresence>
 * so the exit animation plays:  {item && <Modal ...>}
 */
export default function Modal({ title, onClose, children, size = "md" }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`glass relative max-h-[92vh] w-full overflow-y-auto !rounded-b-none !bg-slate-950/90 overscroll-contain p-5 sm:!rounded-2xl sm:p-8 ${
          size === "lg" ? "max-w-4xl" : "max-w-2xl"
        }`}
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="focus-ring absolute right-4 top-4 rounded-full border border-white/15 bg-white/5 p-2 text-lg text-slate-300 transition hover:text-white"
        >
          <HiX />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}
