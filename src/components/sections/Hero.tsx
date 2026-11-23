"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import SmartImage from "@/components/ui/SmartImage";
import OrbitRing from "@/components/ui/OrbitRing";

/** Floating glass chips around the photo; each links to a section. */
const chips = [
  { label: "Founder · NeutrinoByte", href: "#company", pos: "left-0 top-[8%]", delay: 0 },
  { label: "Research · iCONEECT 2026", href: "#research", pos: "right-0 top-[40%]", delay: 0.8 },
  { label: "React.js · DevOps learner", href: "#skills", pos: "left-0 bottom-[10%]", delay: 1.6 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % profile.rotatingRoles.length), 2600);
    return () => clearInterval(timer);
  }, []);

  // Photo tilts with the cursor (parallax)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 110, damping: 16 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 110, damping: 16 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="top" className="mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-4 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28">
      <div className="grid w-full items-center gap-10 lg:gap-14 lg:grid-cols-[1.1fr_1fr]">
        {/* Text */}
        <motion.div
          className="glass p-6 sm:p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {profile.openToWork && (
            <span className="tag mb-5 inline-flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to work
            </span>
          )}

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent-soft">{profile.name}</span>
          </h1>

          <motion.p
            key={roleIndex}
            className="mt-4 h-8 font-display text-xl text-slate-300 sm:text-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {profile.rotatingRoles[roleIndex]}
          </motion.p>

          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="btn-primary">View research</a>
            <a href="#contact" className="btn-ghost">Contact me</a>
            <a href={profile.resumeUrl} download className="btn-ghost">Download CV</a>
          </div>

          <div className="mt-8 flex gap-5 text-2xl text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring transition hover:text-accent-soft"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring transition hover:text-accent-soft"><FaLinkedin /></a>
            <a href="#videos" aria-label="YouTube channels" className="focus-ring transition hover:text-accent-soft"><FaYoutube /></a>
          </div>
        </motion.div>

        {/* Photo with neutrino orbits */}
        <motion.div
          className="relative mx-auto aspect-square w-[min(86vw,560px)]"
          style={{ perspective: 1100 }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div aria-hidden className="absolute inset-[16%] rounded-full bg-accent/25 blur-3xl" />

          {/* Orbits: a flat dashed ring that spins in place + tilted rings with orbiting neutrinos */}
          <OrbitRing scale={96} tilt={0} duration={50} dashed />
          <OrbitRing scale={100} tilt={64} rotate={-25} duration={14} />
          <OrbitRing scale={88} tilt={64} rotate={40} duration={20} reverse />

          {/* Centering is done by this flex wrapper, NOT by translate classes:
              framer-motion's rotateX/rotateY would override a CSS translate. */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[62%]"
            >
              <motion.div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-3xl border border-accent/40 bg-black shadow-glow"
                style={{ rotateX, rotateY, transformPerspective: 1100 }}
              >
                <SmartImage src={profile.heroImage} alt={profile.name} eager className="h-full w-full object-cover object-top" />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
              </motion.div>
            </motion.div>
          </div>

          <OrbitRing scale={72} tilt={70} rotate={-60} duration={10} />

          {chips.map((chip) => (
            <motion.a
              key={chip.label}
              href={chip.href}
              className={`glass focus-ring absolute hidden whitespace-nowrap sm:block px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-accent/60 hover:text-accent-soft sm:px-3.5 sm:py-2 sm:text-sm ${chip.pos}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
            >
              {chip.label}
            </motion.a>
          ))}

          {/* Decorative drifting glass shapes */}
          <span aria-hidden className="animate-float absolute right-[6%] top-[8%] h-8 w-8 rotate-45 rounded-lg border border-accent/40 bg-accent/10 backdrop-blur-sm sm:h-9 sm:w-9" style={{ ["--r" as string]: "45deg" }} />
          <span aria-hidden className="animate-float absolute bottom-[8%] right-[10%] h-5 w-5 rounded-md border border-accent/40 bg-accent/10 backdrop-blur-sm sm:h-6 sm:w-6" style={{ ["--r" as string]: "20deg", animationDelay: "1.5s" }} />
        </motion.div>
      </div>
    </section>
  );
}
