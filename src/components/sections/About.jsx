import RevealOnScroll from "../RevealOnScroll";

export const About = () => {

    const frontendSkills =["React", "Vue", "Java Script", "Tailwind CSS"];

    const backendSkills =["Spring", "SQL", "Object Relational Mapping", "JAVA"];

    return <section id="about" className="min-h-screen flex items-center py-20"
    >
        
        <div className="max-w-3xl mx-auto px-4">
            <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I am Ben Seemar and I am passionate about creating software. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans Spring Boot, React, and SQL databases. I am always eager to learn more.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">FrontEnd </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => 
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                {tech}
                            </span>
                            )}
                        </div>
                       
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">BackEnd </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => 
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                {tech}
                            </span>
                            )}
                        </div>
                       
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </div>
    </section>
}