import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Terminal className="w-6 h-6 text-purple-600" />,
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      title: 'Web Dev',
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 75 },
        { name: 'PHP', level: 70 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6 text-green-600" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 65 },
      ],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#030014] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A diverse set of skills spanning across front-end, back-end, and competitive programming.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white shadow-xl"
            >
              <div className="flex items-center mb-8">
                <div className="bg-slate-900/50 p-3 rounded-2xl shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          category.title === 'Programming' ? 'from-purple-500 to-indigo-500' :
                          category.title === 'Web Dev' ? 'from-blue-500 to-cyan-500' :
                          'from-green-500 to-emerald-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
