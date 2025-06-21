
import SectionBorder from "@/components/ui/SectionBorder";
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiAxios, SiMongodb, SiMysql, SiPostgresql, SiUbuntu, SiLinux, SiGithub, SiVercel } from "react-icons/si";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

function Skills() {
    return (
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
                        <li>• Supabase <RiSupabaseFill className="inline mb-1" /></li>
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
    )
}

export default Skills