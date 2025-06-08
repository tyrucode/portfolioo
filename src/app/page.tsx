"use client";
import { AuroraHero } from "@/components/ui/AuroraHero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionBorder from "@/components/ui/SectionBorder";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div className="aurora-background h-full w-full"></div>
      </div>
      <div className="fixed inset-0 z-[1]">
        <Canvas className="!h-full !w-full">
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      {/* Content Layer */}
      <div className="relative z-10">
        <header>
          <AuroraHero />
        </header>
        <main className="relative">
          <TracingBeam>
            <div className="py-20 px-4">
              <div className="max-w-4xl mx-auto">
                {/* ABOUTME */}
                <SectionBorder className="mb-20">
                  <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
                  <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      I'm a passionate software developer with expertise in modern web technologies.
                      My journey in programming started with a curiosity about how things work,
                      and has evolved into a career focused on creating exceptional user experiences.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      I specialize in full-stack development using React, Next.js, Node.js,
                      and PostgreSQL, always staying current with the latest industry trends
                      and best practices.
                    </p>
                  </div>
                </SectionBorder>
                {/* SKILLS */}
                <SectionBorder className="mb-20">
                  <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                      <h3 className="text-2xl font-semibold text-white mb-4">Frontend</h3>
                      <ul className="text-gray-300 space-y-2">
                        <li>• React & Next.js</li>
                        <li>• TypeScript</li>
                        <li>• Tailwind CSS</li>
                        <li>• Framer Motion</li>
                      </ul>
                    </div>
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                      <h3 className="text-2xl font-semibold text-white mb-4">Backend</h3>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Node.js</li>
                        <li>• PostgreSQL</li>
                        <li>• REST APIs</li>
                        <li>• Database Design</li>
                      </ul>
                    </div>
                  </div>
                </SectionBorder>
                {/* PROJECTS */}
                <SectionBorder className="mb-20">
                  <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
                  <div className="space-y-8">
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                      <h3 className="text-2xl font-semibold text-white mb-4">Project One</h3>
                      <p className="text-gray-300 mb-4">
                        A dynamic web application built with Next.js and PostgreSQL that
                        showcases modern development practices and user-centered design.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Next.js</span>
                        <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">PostgreSQL</span>
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">TypeScript</span>
                      </div>
                    </div>

                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                      <h3 className="text-2xl font-semibold text-white mb-4">Project Two</h3>
                      <p className="text-gray-300 mb-4">
                        An interactive dashboard featuring real-time data visualization
                        and responsive design principles for optimal user experience.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">D3.js</span>
                        <span className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-full text-sm">Tailwind</span>
                      </div>
                    </div>
                  </div>
                </SectionBorder>
                {/* EXPERIENCE */}
                <SectionBorder className="mb-20">
                  <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>

                </SectionBorder>
                {/* CONTACT */}
                <SectionBorder className="pb-20">
                  <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>
                  <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                    <p className="text-gray-300 text-lg mb-6">
                      I'm always interested in new opportunities and collaborations.
                      Feel free to reach out if you'd like to work together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="mailto:tyler@example.com"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        target="_blank"
                      >
                        Email Me
                      </a>
                      <a
                        href="https://linkedin.com/in/tylerruiz"
                        target="_blank"
                        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </SectionBorder>
              </div>
            </div>
          </TracingBeam>
        </main >
      </div >
    </div >
  );
}