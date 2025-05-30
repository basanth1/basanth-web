import { RevealOnScroll } from "../ReavealOnScroll";
export const Projects=()=>{
    return (
    <RevealOnScroll>
    <section
    id="projects"
    className="min-h-screen flex items-center justify-center py-20 relative bg-[url('/projects.png')] bg-no-repeat bg-cover" 
    >
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <img
                            src="./projects/plant-ai.png"
                            alt="Plant Disease Detection"
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">Plant Disease Detection</h3>
                        <p className="text-gray-400 mb-3">
                            Developed a web app for plant disease detection with 95% accuracy using deep learning models.
Aimed at assisting farmers with early diagnosis and timely treatment. Integrates computer vision to support precision agriculture and reduce crop loss, early insights for faster and more effective intervention.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Streamlit", "Python", "JS", "Cloud"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                             ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://plant-disease-detect-sc4rmav5qo8vfneksd2vid.streamlit.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         <img
                            src="./projects/vitacare-app.png"
                            alt="Plant Disease Detection"
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">VitaCare App</h3>
                        <p className="text-gray-400 mb-3">
                            VitaCare is an AI-powered medical assistant platform that streamlines healthcare tasks like appointment booking, prescription parsing, and medicine ordering.
It uses computer vision and NLP to digitize prescriptions and optimize workflows for clinics, patients, and pharmacies.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Streamlit", "Python", "HTML5", "CSS3"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                             ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://vita-care.streamlit.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         <img
                            src="./projects/keeper.png"
                            alt="Plant Disease Detection"
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">Keeper App</h3>
                        <p className="text-gray-400 mb-3">
                            Keeper is a note-taking web app built using React, Vite, Node.js, and a connected database.
It allows users to create, view, and delete notes with a fast and responsive interface powered by a full-stack architecture.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "PostgreSQL"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                             ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://keeper-frontend-p4xl.onrender.com/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                         <img
                            src="./projects/supply.png"
                            alt="Plant Disease Detection"
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-2">Supply chain Dashboard</h3>
                        <p className="text-gray-400 mb-3">
                            A Power BI dashboard designed to visualize and analyze supply chain efficiency using interactive charts and KPIs.
It helps identify bottlenecks, monitor performance, and support data-driven decisions for logistics and operations.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["PowerBI", "Excel"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                             ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://app.powerbi.com/groups/me/reports/bf6c048c-6250-422b-807b-071344f06676/61da8df5304f2e23d5d3?ctid=5a01a638-d36a-4be3-8ce8-9a88b888b626&experience=power-bi" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>
                        </div>
                    </div>
            </div>
            <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/basanth1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              View More
            </a>
          </div>
        </div>
    </section>
    </RevealOnScroll>
    );
}