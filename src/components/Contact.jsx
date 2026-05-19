import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Github = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const Linkedin = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/10 shadow-xl group hover:shadow-purple-500/10 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase">Email Me</p>
                  <a href="mailto:priyanship2708@gmail.com" className="text-lg font-bold text-slate-200 hover:text-purple-600 transition-colors">priyanship2708@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase">Call Me</p>
                  <a href="tel:7861037313" className="text-lg font-bold text-slate-200 hover:text-blue-600 transition-colors">+91 7861037313</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-500/20 p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                  <MapPin className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase">Location</p>
                  <p className="text-lg font-bold text-slate-200">Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/priyanshi2708" target="_blank" rel="noreferrer" className="bg-slate-900/50 p-4 rounded-2xl shadow-lg border border-white/10 hover:scale-110 transition-transform text-slate-300 hover:text-purple-600">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/priyanshi-patel-415a5633a" target="_blank" rel="noreferrer" className="bg-slate-900/50 p-4 rounded-2xl shadow-lg border border-white/10 hover:scale-110 transition-transform text-slate-300 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all font-medium" placeholder="Priyanshi Patel" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all font-medium" placeholder="name@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all font-medium" placeholder="Project Discussion" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all font-medium" placeholder="How can I help you?"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full btn-gradient flex items-center justify-center gap-2 group"
                onClick={(e) => e.preventDefault()}
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
