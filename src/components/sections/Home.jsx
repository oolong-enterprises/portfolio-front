import RevealOnScroll from "../RevealOnScroll";

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 px-4">
            <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text leading-right text-transparent">
                Welcome to Seemar.tech
            </h1>

            <h2 className="text-gray-400 text-2xl md:text-4xl font-bold mb-8 my-8">
                Your Tech Problem Just Met Its Match.
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                From backend systems and custom APIs to modern web design and marketing that runs itself with smart automation. 
                Get everything you need to launch, scale, or refresh your digital presence. 
                Let’s bring your idea to life with efficient products that actually work.   
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
                </a>

                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                    Contact
                </a>

            </div>
            </RevealOnScroll>
        </div>
    </section>
}