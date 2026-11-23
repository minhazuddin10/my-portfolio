"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import type { NavItem } from "@/types";

export default function Navbar({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const active = useActiveSection(ids);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav className="glass relative mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-hidden px-4 py-3 sm:px-5">
        <a href="#top" className="focus-ring shrink-0 font-display text-base font-bold text-accent-soft sm:text-lg">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`focus-ring rounded-lg px-2.5 py-1.5 text-sm transition ${
                  active === item.id ? "bg-accent/15 text-accent-soft" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeSwitcher />
          <button
            className="focus-ring text-2xl text-slate-200 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Scroll progress */}
        <motion.span
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent shadow-glow"
        />
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 grid max-h-[70vh] max-w-6xl grid-cols-2 gap-1 overflow-y-auto p-3 sm:grid-cols-3 xl:hidden"
          >
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-slate-200 hover:bg-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
