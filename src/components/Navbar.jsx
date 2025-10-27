import { useEffect } from "react"
import LoginButton from '../components/LoginButton';

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return <nav className = "fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg ">
       <div className = "max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="/#home" className="font-mono text-lx font-bold text-white"> 
                    {" "}
                    Seemar<span className="text-blue-500">.tech</span>  
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="/#home" 
                    className="text-gray-300 hover:text-blue-500 transition-colors"> 
                    Home </a>

                    <a href="/#about" 
                    className="text-gray-300 hover:text-blue-500 transition-colors"> 
                    About </a>

                    <a href="/#projects" 
                    className="text-gray-300 hover:text-blue-500 transition-colors"> 
                    Projects </a>

                    <a href="/#contact" 
                    className="text-gray-300 hover:text-blue-500 transition-colors"> 
                    Contact </a>

                    <a href="/blog"
                    className="bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">
                    Blog </a>

                    <LoginButton />
                </div>
            </div>
       </div>
    </nav>
}