"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Direction the content slides in from. */
  from?: "up" | "left" | "right";
}

/** Fades + slides content in once when it scrolls into view. */
export default function Reveal({ children, delay = 0, className, from = "up" }: RevealProps) {
  const offset = { up: { y: 32 }, left: { x: -40 }, right: { x: 40 } }[from];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
