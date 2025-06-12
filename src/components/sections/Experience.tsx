import SectionBorder from "@/components/ui/SectionBorder";
import Image from 'next/image'
import { RiLinkM } from "react-icons/ri";

function Experience() {
    return (
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
    )
}

export default Experience