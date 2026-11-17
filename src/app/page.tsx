import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import HowIBuild from "@/components/sections/HowIBuild";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <HowIBuild />
      <Projects />
      <Experience />
      <Services />
      <Education />
      <Contact />
    </>
  );
}
