"use client";

import { AuroraHero } from "@/components/ui/AuroraHero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionBorder from "@/components/ui/SectionBorder";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from 'next/image'
import { SiReact, SiTypescript, SiVercel, SiGithub, SiAxios, SiJavascript, SiLinux, SiUbuntu, SiTailwindcss, SiPostgresql, SiNodedotjs, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";



export default function Home() {
  return (
    <>
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
                        Hi, I'm Tyler Ruiz! A dedicated Full-Stack Software Engineer with a strong passion for building scalable,
                        user-friendly web applications. My journey into programming began through self-driven experimentation and
                        building small projects at home, which eventually led me to complete the Springboard Software Engineering Career Track.
                        Since then, I've worked on a variety of personal and collaborative projects that have sharpened my skills and deepened my
                        understanding of modern development practices and the web overall.

                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Outside of coding, I enjoy playing video games, listening to music, and spending time with friends and family.
                        I'm constantly seeking to learn, grow, and improve my abilities as a developer. Whether it's tackling new challenges
                        or diving into the latest tech, I'm excited to continue pushing forward in my journey and see where it takes me next.
                      </p>
                    </div>
                  </SectionBorder>
                  {/* SKILLS */}
                  <SectionBorder className="mb-20">
                    <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 ">
                        <h3 className="text-2xl font-semibold text-white mb-4 pr-4">Frontend</h3>
                        <ul className="text-gray-300 space-y-2 " >
                          <li>• React <SiReact className="inline mb-1" /></li>
                          <li>• TypeScript <SiTypescript className="inline mb-1" /></li>
                          <li>• JavaScript <SiJavascript className="inline mb-1" /></li>
                          <li>• Next.JS <RiNextjsFill className="inline mb-1" /></li>
                          <li>• Tailwind CSS <SiTailwindcss className="inline mb-1" /></li>
                          <li>• Framer Motion <TbBrandFramerMotion className="inline mb-1" /></li>
                        </ul>
                      </div>
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-2xl font-semibold text-white mb-4">Backend</h3>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Node.JS <SiNodedotjs className="inline mb-1" /></li>
                          <li>• Express.JS <SiExpress className="inline mb-1" /></li>
                        </ul>
                      </div>
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-2xl font-semibold text-white mb-4">Databases</h3>
                        <ul className="text-gray-300 space-y-2">
                          <li>• MongoDB <SiMongodb className="inline mb-1" /></li>
                          <li>• MySQL <SiMysql className="inline mb-1" /></li>
                          <li>• PostgreSQL <SiPostgresql className="inline mb-1" /></li>
                        </ul>
                      </div>
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-2xl font-semibold text-white mb-4">Tools</h3>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Ubuntu <SiUbuntu className="inline mb-1" /></li>
                          <li>• Linux <SiLinux className="inline mb-1" /></li>
                          <li>• Git/Github <SiGithub className="inline mb-1" /></li>
                          <li>• Axios <SiAxios className="inline mb-1" /></li>
                          <li>• Vercel <SiVercel className="inline mb-1" /></li>

                        </ul>
                      </div>
                    </div>
                  </SectionBorder>
                  {/* PROJECTS */}
                  <SectionBorder className="mb-20">
                    <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
                    <div className="space-y-8">
                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                        <h3 className="text-2xl font-semibold text-white mb-4">Guessify</h3>
                        <p className="text-gray-300 mb-4">
                          Developed a dynamic web game where users connect their own Spotify playlists to guess song titles and compete for high scores. Inspired by Wordle, Guessify blends music and gameplay to create a personalized and shareable challenge for anyone who enjoys music.
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Next.js</span>
                          <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">PostgreSQL</span>
                          <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">TypeScript</span>
                        </div>
                        <div>
                          <Image
                            src="/portfolioss.png"
                            alt="Image"
                            width={500}
                            height={500}

                          />
                        </div>
                      </div>

                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                        <h3 className="text-2xl font-semibold text-white mb-4">SteamFinder GPT</h3>
                        <p className="text-gray-300 mb-4">
                          Developer a tool that allows users to connect their steam data using the steam api and allow chatgpt to give personalized reccomendations to games based on the users previous gaming history and the time they have spent on those games.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">D3.js</span>
                          <span className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-full text-sm">Tailwind</span>
                        </div>
                        <div>
                          <Image
                            src="/screenshotforportfolio.png"
                            alt="Image"
                            width={500}
                            height={500}
                          />
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
                          rel="noopener"
                        >
                          Email Me
                        </a>
                        <a
                          href="https://linkedin.com/in/tylerruiz"
                          target="_blank"
                          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                          rel="noopener"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </SectionBorder>
                </div>
              </div>
            </TracingBeam>
          </main>
        </div>
      </div>
    </>
  );
}