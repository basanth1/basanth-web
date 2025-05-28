import { RevealOnScroll } from "../ReavealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export const About = () => {
  const skills = [
    { name: "React", logo: "./skills/react-removebg-preview.png" },
    { name: "Express.js", logo: "./skills/expressjs.png" },
    { name: "BootStrap", logo: "./skills/bootstrap.png" },
    { name: "TailwindCSS", logo: "./skills/taiwind.png" },
    { name: "Node.js", logo: "./skills/nodejs.png" },
    { name: "Python", logo: "./skills/python.png" },
    { name: "MongoDB", logo: "./skills/mongoDB.png" },
    { name: "PostgreSQL", logo: "./skills/postgreSQL.png" },
    { name: "PowerBI", logo: "./skills/powerbi.png" },
    { name: "Java", logo: "./skills/java.png" },
    { name: "Flask", logo: "./skills/flask.png" }
  ];

  return (
    <RevealOnScroll>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative bg-[url('/about.jpg')] bg-no-repeat bg-cover"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              I'm a passionate for building intelligent systems.  
              Developed an AI plant disease detection model, worked on web projects with React and Node.js, and created Power BI dashboards.    
              Currently exploring cloud deployment, scalable apps, and contributing to open-source software.
            </p>

            <div className="mb-8 bg-white/5 p-6 rounded-xl relative">
              <h3 className="text-xl font-bold mb-4 text-white text-center">Skills</h3>

              <div className="relative flex items-center">
                {/* Navigation Buttons */}
                <button
                  className="swiper-button-prev z-10 text-3xl text-blue-400 hover:text-blue-600 transition p-2"
                >
                  &#10094;
                </button>

                {/* Swiper Carousel */}
                <Swiper
                  modules={[FreeMode, Navigation]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  freeMode={true}
                  grabCursor={true}
                  spaceBetween={20}
                  slidesPerView={"auto"}
                  className="w-full"
                >
                  {skills.map((skill, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="w-[120px] h-[120px] flex items-center justify-center bg-black rounded-xl shadow-md p-4 hover:scale-105 transition-all"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-[1000px] h-[100px] object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className="swiper-button-next z-10 text-3xl text-blue-400 hover:text-blue-600 transition p-2"
                >
                  &#10095;
                </button>
              </div>
            </div>

            {/* 💼 Education & Work */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>B.Tech in Computer Science</strong> - Geethanjali
                    College of Engineering and Technology [2022-2026]
                  </li>
                  <li>
                    Relevant Coursework: Data Structures, Web Development, AI &
                    ML
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      AI Intern at Cantilever Labs
                    </h4>
                    <p>Developed AI & ML App</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Intern at Swecha Telangana
                    </h4>
                    <p>Developing LLM for Telugu language</p>
                  </div>
                </div>
              </div>
            </div>

            {/* View Certificates Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://drive.google.com/drive/folders/1XKKFkcbg_krg0ATdTsAtFDd6AkashsNB?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                View Certificates
              </a>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
