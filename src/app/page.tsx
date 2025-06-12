"use client";

//components
import { AuroraHero } from "@/components/ui/AuroraHero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import BackgroundStars from "@/components/ui/BackgroundStars";
import IconSideNav from "@/components/ui/IconSideNav";

//ui sections
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {

  return (
    <>
      <main className="relative z-10">
        <IconSideNav />
        <div className="fixed inset-0 z-0">
          <div className="aurora-background h-full w-full">
            <BackgroundStars />
          </div>
        </div>
        <div className="relative z-10">
          <header className="z-0">
            <AuroraHero />
          </header>
          <TracingBeam>
            {/* Reduced padding from py-20 to py-10 and added pb-4 to reduce bottom space */}
            <div className="py-10 px-4 pb-4">
              <div className="max-w-4xl mx-auto">
                {/* ALL UI SECTIONS */}
                <AboutMe />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </div>
            </div>
          </TracingBeam>
        </div >

      </main >
    </>
  );
}