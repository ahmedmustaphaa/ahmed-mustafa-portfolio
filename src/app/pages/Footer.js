"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020202] py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Status & Location */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-gray-400 font-mono text-[10px] uppercase tracking-widest">
                Available for new opportunities
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe size={14} />
              <span className="text-xs font-mono">Kafr Elshikh, Egypt — Remote Worldwide</span>
            </div>
          </div>

          {/* Navigation Links (Quick Access) */}
          <div className="flex gap-8">
            {['Home', 'Work', 'Stack', 'Contact'].map((item) => (
              <button 
                key={item}
                className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            <span className="text-xs font-mono text-gray-400 group-hover:text-white uppercase tracking-widest transition-colors">
              Back to top
            </span>
            <ArrowUp size={16} className="text-gray-500 group-hover:text-white transition-colors" />
          </motion.button>
          
        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent my-10" />

        {/* Version & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700 font-mono text-[9px] uppercase tracking-[0.4em]">
          <p>© 2026 AHMED MUSTAFA — ALL RIGHTS RESERVED</p>
          <p>BUILT WITH NEXT.JS 15 & FRAMER MOTION</p>
          <p className="text-blue-500/50">V1.0.2</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;