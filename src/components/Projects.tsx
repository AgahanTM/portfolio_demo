import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time updates",
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    tech: ["Vue.js", "Firebase", "D3.js"],
    link: "#"
  },
  {
    title: "AI-Powered Chat",
    description: "Real-time chat application with AI integration",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    tech: ["React", "OpenAI", "WebSocket"],
    link: "#"
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio creation platform",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tech: ["Next.js", "Tailwind", "Framer"],
    link: "#"
  },
  {
    title: "Task Management",
    description: "Collaborative task management system",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tech: ["React", "Redux", "Firebase"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={2}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="w-full py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide 
              key={index} 
              className="w-[300px] sm:w-[400px] bg-transparent transition-transform duration-500"
              style={{
                transition: 'transform 0.5s ease'
              }}
            >
              <motion.div
                className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={project.link}
                      className="px-6 py-2 bg-purple-500 text-white rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm transform hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;