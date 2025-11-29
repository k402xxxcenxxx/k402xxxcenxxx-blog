import {
  getHeroContent,
  getAboutContent,
  getWorksContent,
  getContactContent,
  getSectionNavItems,
} from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  const hero = getHeroContent();
  const about = getAboutContent();
  const works = getWorksContent();
  const contact = getContactContent();
  const sectionNavItems = getSectionNavItems("home");

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar sectionNavItems={sectionNavItems} />
      <div className="pt-16">
        <Hero content={hero} />
        <About content={about} />
        <Works content={works} />
        <Contact content={contact} />
      </div>
    </main>
  );
}
