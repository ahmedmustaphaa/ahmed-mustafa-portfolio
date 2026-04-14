"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Phrase = ({ src, progress, range, children }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const blur = useTransform(progress, range, ["20px", "0px"]);
  const y = useTransform(progress, range, [100, 0]);

  return (
    <motion.span 
      style={{ opacity, filter: `blur(${blur})`, y }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

export default function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

 

  // أنيميشن لتنعيم الحركة جداً
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // تحريك الخلفية السائلة بشكل أعنف وأجمل
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.5, 1]);

  const text = "Architecting digital experiences where precision meets raw creativity. I bridge the gap between complex backend logic and high-end visual storytelling.";

  return (
    <section id="About" ref={targetRef} className="relative min-h-[200vh] bg-[#020202] py-40 overflow-hidden">
      
      {/* 1. طبقة الـ Noise (بتخلي التصميم غالي جداً) */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. الـ Fluid Background Core */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ rotate, scale }}
          className="relative w-[600px] h-[600px] blur-[150px] opacity-30"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-full mix-blend-screen" />
          <div className="absolute inset-0 bg-purple-600 rounded-full translate-x-1/2 mix-blend-screen" />
          <div className="absolute inset-0 bg-cyan-400 rounded-full -translate-y-1/2 mix-blend-screen" />
        </motion.div>
      </div>

      <div className="relative z-10 -mt-[100vh] container mx-auto px-6 flex flex-col items-center">
        
        {/* 3. الـ Reveal Header */}
        <div className="flex flex-col gap-32 items-start w-full max-w-6xl">
          
          <div className="space-y-10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              className="h-[2px] bg-blue-500 origin-left" 
            />
            <h2 className="text-[12vw] lg:text-[10vw] font-black leading-none tracking-tighter text-white flex flex-col uppercase">
              <Phrase progress={smoothProgress} range={[0, 0.2]}>The</Phrase>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500">
                <Phrase progress={smoothProgress} range={[0.1, 0.3]}>Visionary</Phrase>
              </span>
            </h2>
          </div>

          {/* 4. الـ Core Philosophy مع "تأثير المغناطيس" */}
          <div className="w-full flex justify-end">
            <p className="text-3xl md:text-6xl font-light text-gray-500 max-w-4xl leading-[1.1] text-right">
              {text.split(" ").map((word, i) => {
                const start = 0.3 + (i * 0.02);
                const end = start + 0.1;
                const color = useTransform(smoothProgress, [start, end], ["#222", "#fff"]);
                return (
                  <motion.span key={i} style={{ color }} className="inline-block mr-4 mb-2 transition-all">
                    {word}
                  </motion.span>
                );
              })}
            </p>
          </div>

          {/* 5. الـ Animated Tech Badges (Glassmorphism 2026) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-20">
            {["Next.js 15", "Three.js", "GSAP", "Tailwind"].map((tech, idx) => (
              <motion.div
                key={tech}
                style={{
                  y: useTransform(smoothProgress, [0.5, 1], [100 * (idx + 1), 0]),
                  opacity: useTransform(smoothProgress, [0.6, 0.9], [0, 1])
                }}
                className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex flex-col gap-4 group hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* لمسة أخيرة: نصوص عملاقة بتجري في الخلفية */}
      <motion.div 
        style={{ x: useTransform(smoothProgress, [0, 1], ["0%", "-50%"]) }}
        className="absolute bottom-0 whitespace-nowrap text-[25vh] font-black text-white/[0.01] uppercase pointer-events-none"
      >
        Ahmed Mustafa Ahmed Mustafa Ahmed Mustafa
      </motion.div>
    </section>
  );
}