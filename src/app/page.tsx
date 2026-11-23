import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import { sections } from "@/config/sections";

export default function HomePage() {
  const navItems = sections.filter((s) => s.showInNav).map(({ id, label }) => ({ id, label }));

  return (
    <>
      <AnimatedBackground />
      <Navbar items={navItems} />
      <main>
        <Hero />
        <TechMarquee />
        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer />
    </>
  );
}
