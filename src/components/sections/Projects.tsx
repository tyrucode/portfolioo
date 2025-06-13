import { RiLinkM } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import SectionBorder from "@/components/ui/SectionBorder";

import Image from 'next/image'
function Projects() {
    return (
        <SectionBorder className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
            <div className="space-y-8">
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
                    <h3 className="text-2xl font-semibold text-white mb-4">Guessify</h3>
                    <p className="text-gray-300 mb-4">
                        Developed a dynamic web game where users connect their own Spotify playlists using the Spotify API to guess song titles and compete for high scores. Inspired by Wordle, Guessify blends music and gameplay to create a personalized and shareable challenge for anyone who enjoys music.
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
                        Developed a tool that allows users to connect their steam data using the Steam API and allow ChatGPT to give personalized reccomendations to games based on the users previous gaming history and the time they have spent on those games.
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
    )
}

export default Projects