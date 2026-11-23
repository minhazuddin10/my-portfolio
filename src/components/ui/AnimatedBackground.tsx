"use client";

import { motion } from "framer-motion";
import NeutrinoField from "./NeutrinoField";

/** Fixed decorative background: theme-colored glow orbs + faint grid + neutrino particles. */
const orbs = [
  { className: "left-[-10%] top-[5%] h-[28rem] w-[28rem] bg-accent/20", x: 60, y: 40, d: 18 },
  { className: "right-[-8%] top-[38%] h-[26rem] w-[26rem] bg-accent-deep/25", x: -50, y: 60, d: 22 },
  { className: "left-[25%] bottom-[-10%] h-[24rem] w-[24rem] bg-accent/15", x: 40, y: -50, d: 26 },
];

export default function AnimatedBackground() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl transition-colors duration-700 ${orb.className}`}
            animate={{ x: [0, orb.x, 0], y: [0, orb.y, 0] }}
            transition={{ duration: orb.d, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>
      <NeutrinoField />
    </>
  );
}
