import { useNavigate } from 'react-router-dom';
import CustomerTable from "../CustomerTable";
import BackButton from '../BackButton';
import RevealOnScroll from '../RevealOnScroll';
import backgroundImage from '../../assets/images/background.jpg';
import RecentBlogPosts from '../RecentBlogPosts.jsx';

export const Blog = () => {
    
    return <section id="blog" className="min-h-screen flex items-center py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`}}
    >
        
         <div className="text-center z-10 px-4">

            <div className='bg-black/70 p-6 rounded-xl w-1/2 mx-auto px-4'>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text leading-right text-transparent">
                Notes From The Loop
            </h1>

            <h2 className="text-gray-400 text-2xl md:text-4xl font-bold mb-8 my-8">
                Exploring code and math, one iteration at a time.
            </h2>
            
            </div>

            <br />
            <div className='bg-black/70 p-6 rounded-xl w-1/2 mx-auto px-4'>

            <p className="text-gray-400 text-lg mb-8 max-w mx-auto">
                Welcome to Notes from the Loop. My goal is to create a community of people interested in learning about computers and math. I am not an expert but a student as well, everything I post will be what I am actively learning.   
            </p>

            </div>
            
            <div className="w-1/2 mx-auto px-4 mt-[15vh] bg-black/70 p-6 rounded-xl">
            
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        This space is all about curiosity, growth, and the shared love of learning. My goal is to build a community of people who enjoy exploring the worlds of computers. This will cover everything from algorithms and logic to theory and problem-solving.I’m not an expert, I am learning right alongside you. Everything here comes straight from what I’m actively studying, experimenting with, or trying to understand better. Think of it as an open notebook.
                    </p>

                    
            </div>
        </div>
        
        <RecentBlogPosts />
        
    </div>
    </section>
}