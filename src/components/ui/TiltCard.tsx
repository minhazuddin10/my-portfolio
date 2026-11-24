"use client";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  label?: string;
}

/** Glass card. Becomes a keyboard-accessible button when onClick is given. */
export default function TiltCard({ children, className = "", onClick, label }: TiltCardProps) {
  const interactive = Boolean(onClick);
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (interactive && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? label : undefined}
      className={`glass ${interactive ? "glass-hover focus-ring" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
