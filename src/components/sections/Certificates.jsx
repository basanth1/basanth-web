import { RevealOnScroll } from "../ReavealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export const Certificates = () => {
  const certificates = [
    { name: "SmartCoder - Smartinterviews", img: "./certificates/smartcoder.jpg" },
    { name: "Merit - Academic excellence", img: "./certificates/merit-certificate.jpg" },
    { name: "IITH Hackathon winner", img: "./certificates/iith win.jpg" },
    { name: "Cantilever labs", img: "./certificates/cantilever1.jpg" },
    { name: "Paloalto virtual internship", img: "./certificates/paloalto certifcate.jpg" },
    { name: "Oracle - Advance java", img: "./certificates/oracle adv java Certificate.jpg" },
    { name: "Cisco Network Technician course", img: "./certificates/network-technician.jpg" },
    { name: "Full stack course", img: "./certificates/full stack.jpg" },
    { name: "MongoDB course", img: "./certificates/MongoDBWorkshop.jpg" },
    { name: "IoT event co-ordination", img: "./certificates/iotverse.jpg" },
  ];

  return (
    <RevealOnScroll>
      <section
        id="certificates"
        className="min-h-screen flex items-center justify-center py-20 relative bg-[url('/about.jpg')] bg-no-repeat bg-cover"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent text-center">
            Certificates
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-black/40">
            <div className="relative flex items-center">
              {/* Navigation Buttons */}
              <button className="swiper-button-prev z-10 text-3xl text-green-400 hover:text-green-600 transition p-2">
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
                className="w-[700px]"
              >
                {certificates.map((cert, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="w-[320px] h-[220px] flex flex-col items-center justify-center 
                               rounded-xl  overflow-hidden hover:scale-105 transition-all"
                  >
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </SwiperSlide>


                ))}
              </Swiper>

              <button className="swiper-button-next z-10 text-3xl text-green-400 hover:text-green-600 transition p-2">
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
