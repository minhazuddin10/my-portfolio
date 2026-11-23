import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

/** Shared wrapper: anchor id, spacing and heading for every section. */
export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl overflow-x-clip px-4 py-14 sm:px-8 sm:py-20">
      <Reveal from="left">
        <div className="flex items-center gap-4">
          <span className="h-10 w-1.5 rounded-full bg-accent shadow-glow" aria-hidden />
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{title}</h2>
            {subtitle && <p className="mt-1 max-w-xl text-slate-400">{subtitle}</p>}
          </div>
        </div>
      </Reveal>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}
