import RevealOnScroll from "../RevealOnScroll";
export const Projects = () => {

    return <section id="projects"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-8xl mx-auto px-4">
            <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Recent Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[15vw]">

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4" >Website Backend</h3>
                    <div className="flex flex-wrap gap-2">
                    <p>
                        Coming Soon
                    </p>
                    </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4" >Website Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                    <p>
                        Coming Soon
                    </p>
                    </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4" >MySQL Database GUI</h3>
                    <div className="flex flex-wrap gap-2">
                    <p>
                        Coming Soon
                    </p>
                    </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4" >Blog Backend</h3>
                    <div className="flex flex-wrap gap-2">
                    <p>
                        Coming Soon
                    </p>
                    </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4" >News Summary API</h3>
                    <div className="flex flex-wrap gap-2">
                    <p>
                        Coming Soon
                    </p>
                    </div>
                </div>

            </div>
            
            </RevealOnScroll>
        </div>                
    </section>

}