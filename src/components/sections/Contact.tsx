import type { IconType } from "react-icons";
import { FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaLinkedin, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { company, profile, youtubeChannels } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface ContactLink {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

interface ContactCardProps {
  title: string;
  subtitle: string;
  mailTo: string;
  links: ContactLink[];
}

/** One card = one identity (me / my company) with a main "Send email" button and a list of links. */
function ContactCard({ title, subtitle, mailTo, links }: ContactCardProps) {
  return (
    <div className="glass flex h-full flex-col p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>

      <a href={`mailto:${mailTo}`} className="btn-primary mt-6 w-full justify-start !px-4 !py-3 text-left">
        <FaEnvelope aria-hidden className="shrink-0" />
        <span className="min-w-0 truncate">{mailTo}</span>
      </a>

      <ul className="mt-4 space-y-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <li key={`${label}-${value}`}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:border-accent/50"
            >
              <Icon className="shrink-0 text-xl text-accent-soft" aria-hidden />
              <span className="min-w-0">
                <span className="block text-xs text-slate-500">{label}</span>
                <span className="block truncate text-sm font-medium text-slate-100">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Two contact cards (personal + company). Edit the arrays below to add or remove links. */
export default function Contact() {
  const personalChannel = youtubeChannels.find((c) => c.owner === "personal");
  const companyChannel = youtubeChannels.find((c) => c.owner === "company");

  const personalLinks: ContactLink[] = [
    { icon: FaLinkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
    { icon: FaGithub, label: "GitHub", value: "minhazuddin10", href: profile.github },
    ...(personalChannel ? [{ icon: FaYoutube, label: "YouTube", value: personalChannel.handle, href: personalChannel.url }] : []),
  ];

  const companyLinks: ContactLink[] = [
    { icon: FaGlobe, label: "Website", value: "neutrinobyte.com", href: company.url },
    { icon: FaFacebook, label: "Facebook", value: "facebook.com/neutrinobyte", href: company.facebook },
    ...(companyChannel ? [{ icon: FaYoutube, label: "YouTube", value: companyChannel.handle, href: companyChannel.url }] : []),
  ];

  return (
    <Section id="contact" title="Get in touch" subtitle="Hiring for a front-end or DevOps role, or want a project built by NeutrinoByte? Reach out.">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <ContactCard title={profile.name} subtitle="For jobs, collaborations and research" mailTo={profile.email} links={personalLinks} />
        </Reveal>
        <Reveal>
          <ContactCard title={company.name} subtitle="For business enquiries and IT projects" mailTo={company.email} links={companyLinks} />
        </Reveal>
      </div>

      <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
        <FaMapMarkerAlt aria-hidden /> Based in {profile.location} · Open to on-site, hybrid and remote roles
      </p>
    </Section>
  );
}
