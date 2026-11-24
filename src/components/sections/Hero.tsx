import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import SmartImage from "@/components/ui/SmartImage";
import OrbitRing from "@/components/ui/OrbitRing";

/** Static chips around the photo; each links to a section. */
const chips = [
  { label: "Founder · NeutrinoByte", href: "#company", pos: "left-0 top-[8%]" },
  { label: "Research · iCONEECT 2026", href: "#research", pos: "right-0 top-[40%]" },
  { label: "React.js · DevOps learner", href: "#skills", pos: "left-0 bottom-[10%]" },
];

/** The only animation on the site: rings orbiting the profile photo (pure CSS). */
export default function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-[100svh] w-full max-w-6xl items-center overflow-x-clip px-4 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* Text */}
        <div className="glass p-6 sm:p-10">
          {profile.openToWork && (
            <span className="tag mb-5 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to work
            </span>
          )}

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent-soft">{profile.name}</span>
          </h1>

          <p className="mt-4 font-display text-xl text-slate-300 sm:text-2xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="btn-primary">View research</a>
            <a href="#contact" className="btn-ghost">Contact me</a>
            <a href={profile.resumeUrl} download className="btn-ghost">Download CV</a>
          </div>

          <div className="mt-8 flex gap-5 text-2xl text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring hover:text-accent-soft"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring hover:text-accent-soft"><FaLinkedin /></a>
            <a href="#videos" aria-label="YouTube channels" className="focus-ring hover:text-accent-soft"><FaYoutube /></a>
          </div>
        </div>

        {/* Photo with orbiting rings */}
        <div className="relative mx-auto aspect-square w-[min(86vw,560px)]" style={{ perspective: 1100 }}>
          <div aria-hidden className="glow-orb absolute inset-[4%]" />

          <OrbitRing scale={94} tilt={0} duration={50} dashed />
          <OrbitRing scale={90} tilt={60} rotate={-25} duration={14} />
          <OrbitRing scale={80} tilt={60} rotate={40} duration={20} reverse />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative aspect-[4/5] w-[62%] overflow-hidden rounded-t-[999px] rounded-b-3xl border border-accent/40 bg-black shadow-glow">
              <SmartImage src={profile.heroImage} alt={profile.name} eager className="h-full w-full object-cover object-top" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>

          <OrbitRing scale={70} tilt={62} rotate={-60} duration={10} />

          {chips.map((chip) => (
            <a
              key={chip.label}
              href={chip.href}
              className={`glass focus-ring absolute hidden whitespace-nowrap px-3.5 py-2 text-sm font-medium text-slate-100 hover:border-accent/60 hover:text-accent-soft sm:block ${chip.pos}`}
            >
              {chip.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
