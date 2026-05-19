import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'Smart Fix',
      description: 'A society complaint management system where users can report issues like plumbing, and admin assigns workers to resolve them efficiently.',
      tech: ['PHP', 'MySQL', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      github: '#',
      live: '#',
    },
    {
      title: 'MentorPath',
      description: 'A platform that helps students choose the right career path with guidance, certifications, and domain-based learning.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Scraping'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      github: '#',
      live: '#',
    },
    {
      title: 'FleetFlow',
      description: 'A project developed during hackathon focused on smart system management for efficient logistics and fleet operations.',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      github: '#',
      live: '#',
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Latest Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Each project represents a unique challenge and a solution 
            built with modern technologies and clean code practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group border border-white/10 shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] font-bold bg-white/5 backdrop-blur-md text-white px-2 py-1 rounded-full border border-white/10 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-400 hover:text-purple-600 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <button className="text-xs font-bold uppercase tracking-widest text-purple-600 flex items-center group-hover:translate-x-1 transition-transform">
                    Read More ➜
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
