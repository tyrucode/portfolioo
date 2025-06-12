import SectionBorder from "@/components/ui/SectionBorder";

function Contact() {
    return (
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
    )
}

export default Contact