"use client";

import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube, FaGlobe } from "react-icons/fa";
import { company, profile, youtubeChannels } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface FormState { name: string; email: string; message: string }
const initialState: FormState = { name: "", email: "", message: "" };

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-accent/60 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Front-end only for now: opens the visitor's mail app with the message filled in.
  // TODO (backend phase): POST to a route handler at app/api/contact/route.ts instead.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setForm(initialState);
  };

  const links = [
    { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FaLinkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: FaGithub, label: "GitHub", href: profile.github },
    ...youtubeChannels.map((ch) => ({ icon: FaYoutube, label: `YouTube ${ch.handle}`, href: ch.url })),
    { icon: FaGlobe, label: company.name, href: company.url },
  ];

  return (
    <Section id="contact" title="Contact" subtitle="Looking for a front-end or DevOps role, or a project with NeutrinoByte? Send me a message.">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal from="left">
          <form onSubmit={handleSubmit} className="glass space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required aria-label="Your name" className={fieldClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" required aria-label="Your email" className={fieldClass} />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" required rows={5} aria-label="Your message" className={fieldClass} />
            <button type="submit" className="btn-primary w-full sm:w-auto">Send message</button>
          </form>
        </Reveal>

        <Reveal from="right">
          <ul className="glass h-full space-y-4 p-6">
            {links.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="focus-ring flex items-center gap-3 text-slate-300 transition hover:text-accent-soft">
                  <Icon className="text-accent-soft" aria-hidden /> {label}
                </a>
              </li>
            ))}
            <li className="pt-2 text-sm text-slate-500">Based in {profile.location}. Open to on-site, hybrid and remote roles.</li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
