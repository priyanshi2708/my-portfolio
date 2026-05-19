import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'C++', icon: '🚀' },
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'PHP', icon: '🐘' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
  ];

  return (
    <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              I am a 2nd-year Computer Engineering student with a deep passion for programming and 
              software development. My journey began with a curiosity about how things work 
              under the hood, leading me to explore various technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-100 border-l-4 border-purple-500 pl-4">My Journey</h3>
              <p className="text-slate-400">
                Ever since I started learning programming, I've been fascinated by the ability to 
                create solutions that can help people. From small command-line tools to full-stack 
                applications, every project has been a learning milestone. 
              </p>
              <p className="text-slate-400">
                Currently, I am focusing on mastering the MERN stack and exploring the world 
                of web scraping and automated systems. I am eager to take on new challenges 
                and contribute to real-world impactful projects.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center">
                <Code2 className="mr-2 text-purple-600" /> Technical Skills
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center p-3 rounded-2xl glass transition-all"
                  >
                    <span className="text-2xl mb-1">{skill.icon}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-tighter text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
