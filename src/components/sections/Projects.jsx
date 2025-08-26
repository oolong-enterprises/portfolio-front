import RevealOnScroll from "../RevealOnScroll";
export const Projects = () => {

    return <section id="projects"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-5xl mx-auto px-4">
            <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Recent Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3>Project 1</h3>
                    <p>
                        Coming Soon
                    </p>
                </div>

            </div>
            </RevealOnScroll>
        </div>                
    </section>

}