"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

/**
 * Neutrinos arriving from far away: each particle starts tiny and faint at a
 * distance, then slowly drifts toward the viewer, growing brighter and a little
 * larger, and finally flies out of view and respawns far away.
 * The cursor adds a gentle parallax. Occasionally a fast neutrino streaks by.
 * Uses the theme's accent color and re-reads it whenever the theme changes.
 */
interface Particle { x: number; y: number; z: number; speed: number; phase: number }
interface Streak { x: number; y: number; vx: number; vy: number; life: number }

const TAU = Math.PI * 2;
const FAR = 1; // spawn depth
const NEAR = 0.12; // despawn depth

export default function NeutrinoField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const rgb = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent-soft")
      .trim()
      .split(/\s+/)
      .join(",");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0, y: 0 }; // -0.5 .. 0.5
    let w = 0;
    let h = 0;
    let raf = 0;
    let particles: Particle[] = [];
    const streaks: Streak[] = [];

    // randomDepth=true at start so particles are already spread between far and near
    const spawn = (randomDepth: boolean): Particle => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: randomDepth ? NEAR + Math.random() * (FAR - NEAR) : FAR,
      speed: 0.0007 + Math.random() * 0.0008,
      phase: Math.random() * TAU,
    });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(40, (w * h) / 32000));
      particles = Array.from({ length: count }, () => spawn(true));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!reduceMotion) p.z -= p.speed;

        // Perspective projection: smaller z = closer = further from the center
        const near = 1 - p.z; // 0 (far) .. ~0.9 (close)
        const sx = cx + (p.x * cx * 0.9) / p.z + mouse.x * 60 * near;
        const sy = cy + (p.y * cy * 0.9) / p.z + mouse.y * 60 * near;

        if (p.z < NEAR || sx < -30 || sx > w + 30 || sy < -30 || sy > h + 30) {
          particles[i] = spawn(false);
          continue;
        }

        const radius = 0.5 + near * 1.6; // small: 0.5px far, ~2px close
        const twinkle = 0.6 + 0.4 * Math.sin(time / 1100 + p.phase);
        const alpha = Math.min(1, near * 1.8) * twinkle * 0.85; // far = faint

        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius * 4);
        glow.addColorStop(0, `rgba(${rgb},${alpha})`);
        glow.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(sx, sy, radius * 4, 0, TAU);
        ctx.fill();
      }

      // Occasional fast neutrino streak
      if (!reduceMotion && Math.random() < 0.003) {
        streaks.push({ x: Math.random() * w * 0.7, y: -20, vx: 7 + Math.random() * 5, vy: 4 + Math.random() * 4, life: 1 });
      }
      for (let i = streaks.length - 1; i >= 0; i--) {
        const s = streaks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.008;
        if (s.life <= 0 || s.x > w + 50 || s.y > h + 50) {
          streaks.splice(i, 1);
          continue;
        }
        const tail = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12);
        tail.addColorStop(0, `rgba(${rgb},${0.7 * s.life})`);
        tail.addColorStop(1, `rgba(${rgb},0)`);
        ctx.strokeStyle = tail;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12);
        ctx.stroke();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX / w - 0.5;
      mouse.y = e.clientY / h - 0.5;
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [theme, reduceMotion]);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
