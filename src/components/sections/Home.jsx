import { RevealOnScroll } from "../ReavealOnScroll";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai"; 
import "../../index.css"
export const Home=()=>{
    return( 
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[url('/home.png')] bg-no-repeat">
        <RevealOnScroll>
        
        <div className="text-center z-10 px-4">
            <a href="https://www.linkedin.com/in/basanth-kumar-putta" target="_blank" rel="noopener noreferrer">
                <img
                    src="./logo.png"
                    alt="Profile"
                    class="mx-auto mb-6 w-48 h-48 rounded-full object-cover shadow-lg border-4 border-transparent hover:border-blue-500 transition duration-300 cursor-pointer"
                />
            </a>



            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-right bounce-name">
                I'm Basanth kumar
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-5xl mx-auto">
                Hi, I'm Basanth Kumar 👋  
                Aspiring Software Engineer & AI Enthusiast  
                Currently pursuing B.Tech in CSE (IoT) with hands-on experience in full-stack development, AI/ML, and deep learning projects.  
                Skilled in Python, React, Node.js, MongoDB, TensorFlow, and more.  
                Explore my projects, connect with me, or view my resume below.

            </p>
            <div className="flex justify-center space-x-4">
                <a 
                    href="./basanth-resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-500 text-white py-3 px-6 rounded font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                    View Resume
                </a>
                <a href="#contact" className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Contact me
                </a>
            </div>
        {/* Social Icons Section */}
                    <div className="flex justify-center space-x-6 mt-8 text-3xl text-cyan-500">
                        <a href="https://github.com/basanth1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/basanth-kumar-putta" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://drive.google.com/drive/folders/1XKKFkcbg_krg0ATdTsAtFDd6AkashsNB?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <AiOutlineFilePdf />
                        </a>
                        <a href="https://wa.me/917995519086" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};