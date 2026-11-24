/** Static decorative background: two soft glows + a faint grid. No animation. */
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="glow-orb absolute left-[-10%] top-[5%] h-[28rem] w-[28rem]" />
      <div className="glow-orb-deep absolute right-[-8%] top-[38%] h-[26rem] w-[26rem]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
