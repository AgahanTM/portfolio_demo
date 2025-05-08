import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          variants={cardVariants}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={cardVariants}
        >
          <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Framer Motion</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Experience</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Frontend Developer at Tech Co</li>
              <li>• UI/UX Designer at Design Studio</li>
              <li>• Freelance Web Developer</li>
            </ul>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-gray-300 mt-12 text-lg leading-relaxed"
          variants={cardVariants}
        >
          I'm passionate about creating beautiful, interactive web experiences that delight users and solve real problems. With a background in both development and design, I bring a unique perspective to every project.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;