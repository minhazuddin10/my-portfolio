/**
 * Section registry — the only place you edit to add, remove or reorder sections.
 *
 * To add a new section:
 *   1. Create src/components/sections/MySection.tsx (wrap it in <Section id="my-id" ...>)
 *   2. Add one line below. Order here = order on the page = order in the navbar.
 */
import type { ComponentType } from "react";
import About from "@/components/sections/About";
import Company from "@/components/sections/Company";
import Research from "@/components/sections/Research";
import Achievements from "@/components/sections/Achievements";
import Certificates from "@/components/sections/Certificates";
import Events from "@/components/sections/Events";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Videos from "@/components/sections/Videos";
import Contact from "@/components/sections/Contact";

export interface SectionConfig {
  /** Must match the id passed to <Section id="..."> inside the component. */
  id: string;
  label: string;
  showInNav: boolean;
  Component: ComponentType;
}

export const sections: SectionConfig[] = [
  { id: "about", label: "About", showInNav: true, Component: About },
  { id: "company", label: "NeutrinoByte", showInNav: false, Component: Company },
  { id: "research", label: "Research", showInNav: true, Component: Research },
  { id: "achievements", label: "Achievements", showInNav: true, Component: Achievements },
  { id: "certificates", label: "Certificates", showInNav: true, Component: Certificates },
  { id: "events", label: "Events", showInNav: true, Component: Events },
  { id: "skills", label: "Skills", showInNav: true, Component: Skills },
  { id: "experience", label: "Experience", showInNav: true, Component: Experience },
  { id: "projects", label: "Projects", showInNav: true, Component: Projects },
  { id: "education", label: "Education", showInNav: false, Component: Education },
  { id: "videos", label: "YouTube", showInNav: true, Component: Videos },
  { id: "contact", label: "Contact", showInNav: true, Component: Contact },
];
