
import SectionBorder from "@/components/ui/SectionBorder";

function AboutMe() {
    return (
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
    )
}

export default AboutMe