import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { title: 'Full Stack Web Development', provider: 'Coursera', date: 'Dec 2023' },
    { title: 'Data Structures with C++', provider: 'GeeksforGeeks', date: 'Oct 2023' },
    { title: 'Java Programming', provider: 'HackerRank', date: 'Aug 2023' },
  ];

  return (
    <section className="py-20 bg-white/5 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Continuous learning and skill validation through industry-recognized platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 shadow-lg group hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <Award className="text-purple-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200">{cert.title}</h3>
                  <p className="text-sm text-purple-600 font-semibold">{cert.provider}</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-400">
                <span className="flex items-center">
                  <CheckCircle size={14} className="mr-1 text-green-500" /> Verified
                </span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
