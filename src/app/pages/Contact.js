"use client";
import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import { Mail, Github, Linkedin, Facebook, MessageSquareText, Copy, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  { name: "Email", icon: Mail, value: "ahmedmustafaabdelwakeel@gmail.com", action: 'copy' },
  { name: "WhatsApp", icon: MessageSquareText, value: "https://wa.me/201204579687", action: 'link' },
  { name: "GitHub", icon: Github, value: "https://github.com/ahmedmustaphaa/", action: 'link' },
  { name: "LinkedIn", icon: Linkedin, value: "https://www.linkedin.com/in/ahmed-mustafa-2b2b23314/", action: 'link' },
  { name: "Facebook", icon: Facebook, value: "https://www.facebook.com/profile.php?id=100041755029382", action: 'link' },
];

const nameString = "AHMEDMUSTAFA".split("");

const MagneticWrapper = ({ children }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const midX = left + width / 2;
    const midY = top + height / 2;
    x.set((clientX - midX) * 0.35);
    y.set((clientY - midY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block w-full">
      {children}
    </motion.div>
  );
};

function Contact() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  
  const handleAction = (item) => {
    if (item.action === 'copy') {
      navigator.clipboard.writeText(item.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(item.value, '_blank');
    }
  };

  return (
    <section id='contact' ref={containerRef} className="relative pt-40 pb-10 px-6 bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 mb-6 text-blue-500 font-mono text-xs uppercase tracking-[0.4em]">
              <span className="w-8 h-[1px] bg-blue-500" /> Availability: Open for projects
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none uppercase">
              LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white/20">CONNECT</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-sm max-w-[280px] leading-relaxed pb-4 border-l border-white/10 pl-6">
            Ready to deploy high-performance solutions and cinematic user experiences.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-40">
          {contactLinks.map((item, idx) => (
            <MagneticWrapper key={idx}>
              <motion.div
                onClick={() => handleAction(item)}
                className="group relative p-8 h-[180px] rounded-[2.5rem] bg-[#080808] border border-white/5 flex flex-col justify-between cursor-pointer hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-white/5 text-gray-400 group-hover:text-blue-500 group-hover:bg-blue-500/5 transition-all">
                    <item.icon size={24} />
                  </div>
                  <ArrowUpRight size={20} className="text-white/10 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-xs font-mono truncate max-w-[200px]">
                    {item.action === 'copy' && copied ? "Copied to clipboard!" : item.value}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              </motion.div>
            </MagneticWrapper>
          ))}
        </div>

        {/* Cinematic Name Footer */}
        <div className="relative py-20 border-t border-white/5">
          <div className="flex justify-center items-center overflow-hidden h-[15vw] select-none">
            {nameString.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -20, 
                  color: "#3b82f6", 
                  scale: 1.1,
                  transition: { duration: 0.2 } 
                }}
                className="text-[14vw] font-black text-white/5 leading-none uppercase tracking-tighter cursor-default inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
          <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
            © 2026 Crafted with Passion by Ahmed Mustafa
          </p>
          <div className="flex gap-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Next.js 15</span>
            <span className="hover:text-white cursor-pointer transition-colors">Framer Motion</span>
            <span className="hover:text-white cursor-pointer transition-colors">Prisma</span>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}

export default Contact;