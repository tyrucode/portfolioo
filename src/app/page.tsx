"use client";

import { AuroraHero } from "@/components/ui/AuroraHero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionBorder from "@/components/ui/SectionBorder";
import BackgroundStars from "@/components/ui/BackgroundStars";
import Image from 'next/image'
import { SiReact, SiTypescript, SiVercel, SiGithub, SiAxios, SiJavascript, SiLinux, SiUbuntu, SiTailwindcss, SiPostgresql, SiNodedotjs, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { RiNextjsFill, RiLinkM } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import IconSideNav from "@/components/ui/IconSideNav";

export default function Home() {

  return (
    <>
      <main >
        <IconSideNav />
        <div>
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
                          <li>• Axios <SiAxios className="inline mb-1" /></li>
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
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Javascript</span>
                          <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">Express.JS</span>
                          <span className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-full text-sm">MongoDB</span>
                          <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">Tailwind</span>
                          <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">Vite</span>
                        </div>
                        <div>
                          <div className="flex justify-center mt-8">
                            <Image
                              className="rounded-xl shadow-xl/20"
                              src="/portfolioss.png"
                              alt="Image"
                              width={500}
                              height={500}

                            />
                          </div>
                          <div className="flex m4 gap-6">
                            <a href="https://official-capstone.vercel.app/"
                              target="_blank"
                              rel="noopener">
                              <RiLinkM className="text-white scale-150 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-200" />
                            </a>
                            <a href="https://github.com/tyrucode/OfficialCapstone"
                              target="_blank"
                              rel="noopener">
                              <SiGithub className="text-white scale-125 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-175" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                        <h3 className="text-2xl font-semibold text-white mb-4">SteamFinder GPT</h3>
                        <p className="text-gray-300 mb-4">
                          Developer a tool that allows users to connect their steam data using the steam api and allow chatgpt to give personalized reccomendations to games based on the users previous gaming history and the time they have spent on those games.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Javascript</span>
                          <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">Express.JS</span>
                          <span className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-full text-sm">Tailwind</span>
                          <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">Framer-Motion</span>
                          <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">Vite</span>
                        </div>
                        <div>
                          <div className="flex justify-center mt-8">
                            <Image
                              className="rounded-xl shadow-xl/20"
                              src="/screenshotforportfolio.png"
                              alt="Image"
                              width={500}
                              height={500}
                            />
                          </div>
                          <div className="flex m4 gap-6">
                            <a href="https://steam-game-finder-orcin.vercel.app/"
                              target="_blank"
                              rel="noopener">
                              <RiLinkM className="text-white scale-150 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-200" />
                            </a>
                            <a href="https://github.com/tyrucode/steamGameFinder"
                              target="_blank"
                              rel="noopener">
                              <SiGithub className="text-white scale-125 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-175" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SectionBorder>
                  {/* EXPERIENCE */}
                  <SectionBorder className="mb-20">
                    <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">Springboard Software Engineering Career Track</h3>
                        <h3 className="text-2xl font-semibold text-white mb-4 " >2024-2025</h3>
                      </div>
                      <div>
                        <p className="text-gray-300 text-lg mb-6">
                          Completed the Springboard Software Engineering Career Track, an intensive, project-based 700+ hour
                          bootcamp focused on full-stack
                          web development. The program covered core technologies such as JavaScript, React, Node.js, Express, and PostgreSQL, while
                          emphasizing best practices in software design, algorithms, and version control.
                        </p>
                        <div className="flex justify-center mt-8">
                          <Image
                            className="rounded-xl shadow-xl/20"
                            src="/springboard_logo.png"
                            alt="Image"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="flex m4 gap-6">
                          <a href="https://www.linkedin.com/posts/tyler-ruiz-84a287305_software-engineering-career-track-foundations-activity-7330730742630576130-oFIl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3RI_oByms7BHBJZxhZrUFIpuoSAj3_R5Y"
                            target="_blank"
                            rel="noopener">
                            <RiLinkM className="text-white scale-150 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-200" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SectionBorder>
                  {/* CONTACT */}
                  <SectionBorder>
                    <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                      <p className="text-gray-300 text-lg mb-6">
                        I'm always open to new opportunities and collaborations.
                        Feel free to reach out if you'd like to work together or simply connect via email or LinkedIn.
                        You can also check out my projects on GitHub!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="mailto:ruiztyler24@gmail.com"
                          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
                          target="_blank"
                          rel="noopener"
                        >
                          Email Me
                        </a>

                        <a
                          className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                          href="https://www.linkedin.com/in/tyler-ruiz-84a287305/"
                          target="_blank"
                          rel="noopener"
                        >
                          LinkedIn
                        </a>

                        <a
                          className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                          href="https://github.com/tyrucode"
                          target="_blank"
                          rel="noopener"
                        >
                          GitHub
                        </a>

                      </div>
                    </div>
                  </SectionBorder>
                </div>
              </div>
            </TracingBeam>
          </div >
        </div >
      </main >
    </>
  );
}