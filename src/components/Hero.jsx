import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Blobs */}
      <div className="bg-blur-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-600 font-semibold mb-2"
          >
            Hello, Welcome!
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-4">
            I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Priyanshi Patel</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-slate-400 h-10 mb-6">
            <Typewriter
              words={['2nd Year Computer Engineering Student', 'Aspiring Full Stack Developer']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Passionate developer skilled in building real-world applications using modern technologies. 
            I love solving problems and creating impactful solutions for students and society.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-gradient">
              View Projects
            </a>
            <a href="tel:7861037313" className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors shadow-lg hover:shadow-purple-500/10">
              Contact Me: 7861037313
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main profile image with floating animation and glowing border */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-floating">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-2xl opacity-40"></div>
            <div className="relative glow-border rounded-full w-full h-full p-1 bg-slate-900/50">
              <img 
                src="https://raw.githubusercontent.com/priyanshi2708/Practice-C-Programs/main/WhatsApp%20Image%202026-04-03%20at%204.42.46%20PM.jpeg" 
                alt="Priyanshi Patel" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
            
            {/* Small floating badges */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 glass p-3 rounded-xl shadow-lg border border-white/10"
            >
              🚀 MERN Stack
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass p-3 rounded-xl shadow-lg border border-white/10"
            >
              💻 UI/UX
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
