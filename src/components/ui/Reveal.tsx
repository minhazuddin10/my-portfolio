interface RevealProps {
  children: React.ReactNode;
  className?: string;
  // kept so existing calls keep working; animations are switched off
  delay?: number;
  from?: "up" | "left" | "right";
}

/** Plain wrapper (scroll animations are disabled for speed). */
export default function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
