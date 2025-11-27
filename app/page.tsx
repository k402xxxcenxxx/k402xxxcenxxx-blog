import {
  getHeroContent,
  getAboutContent,
  getWorksContent,
  getContactContent,
} from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const hero = getHeroContent();
  const about = getAboutContent();
  const works = getWorksContent();
  const contact = getContactContent();

  return (
    <main className="bg-black text-white">
      <Hero content={hero} />
      <About content={about} />
      <Works content={works} />
      <Contact content={contact} />
    </main>
  );
}
