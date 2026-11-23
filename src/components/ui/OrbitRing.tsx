interface OrbitRingProps {
  /** Ring diameter as a percentage of the parent. */
  scale: number;
  /** Tilt (deg) that turns the circle into an ellipse. */
  tilt: number;
  rotate?: number;
  /** Seconds per revolution. */
  duration: number;
  reverse?: boolean;
  /** Dashed outline, for a calm decorative ring. */
  dashed?: boolean;
}

/** A tilted ring with a glowing neutrino orbiting along it. Parent needs perspective. */
export default function OrbitRing({ scale, tilt, rotate = 0, duration, reverse = false, dashed = false }: OrbitRingProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        width: `${scale}%`,
        aspectRatio: "1",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) rotateX(${tilt}deg) rotateZ(${rotate}deg)`,
      }}
    >
      <div
        className={`animate-spin-slow absolute inset-0 rounded-full border ${dashed ? "border-dashed border-accent/30" : "border-accent/25"}`}
        style={{ ["--dur" as string]: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-soft shadow-glow" />
        <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent/70" />
      </div>
    </div>
  );
}
