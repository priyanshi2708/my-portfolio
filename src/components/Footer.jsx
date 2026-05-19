import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white/5 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-2 text-slate-400 mb-4">
          <span>Made with</span>
          <Heart size={18} className="text-red-500 fill-current animate-pulse" />
          <span>by</span>
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Priyanshi Patel</span>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} All rights reserved. 
          Built with React, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
