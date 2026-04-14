"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

// 1. زرار مغناطيسي ذكي (Magnetic Effect) - أحدث صيحة
const MagneticWrapper = ({ children, strength = 0.5 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main ref={containerRef} className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* 2. الـ Cursor المضيء اللي بيلاحقك (Spotlight Effect) */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-50"
        animate={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* 3. خلفية جزيئات سائلة (Floating Liquid Background) */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
            className={`absolute rounded-full blur-[120px] ${i === 0 ? 'bg-blue-600 w-[500px] h-[500px] top-0' : i === 1 ? 'bg-purple-600 w-[400px] h-[400px] bottom-0 right-0' : 'bg-cyan-500 w-[300px] h-[300px] top-1/2 left-1/4'}`}
          />
        ))}
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-48 flex flex-col items-center">
        
        {/* 4. الـ Header المتحرك باستمرار */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="group relative px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md overflow-hidden transition-all hover:border-blue-500/50">
             <motion.div 
              animate={{ x: ["-100%", "100%"] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
             />
             <span className="relative text-xs font-mono tracking-widest text-blue-400 uppercase">Available for Next-Gen Projects</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20  w-full">
          
         
          <div className="space-y-10">
            <h1 className="text-[4rem] md:text-[9rem] font-black leading-[0.8] tracking-[ -0.05em]">
              <motion.span 
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block origin-bottom"
              >
                AHMED
              </motion.span>
              <motion.span 
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block origin-bottom italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-cyan-400"
              >
                MUSTAFA
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 max-w-md font-light border-l-2 border-blue-600 pl-6"
            >
              Crafting immersive digital ecosystems where <span className="text-white font-bold">Imagination</span> meets <span className="text-white font-bold">Logic</span>.
            </motion.p>

            <div className="flex gap-8">
              <MagneticWrapper strength={0.2}>
                <button className="h-20 w-48 bg-white text-black font-black text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                  MY WORK
                </button>
              </MagneticWrapper>
            </div>
          </div>

          {/* الجانب الأيمن: الـ Floating Bento Image */}
          <motion.div 
            style={{ rotateY: useTransform(useScroll().scrollYProgress, [0, 1], [0, 45]) }}
            className="relative"
          >
            {/* إطار زجاجي متحرك (The Glass Portal) */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 aspect-[4/5] w-full rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl overflow-hidden p-4 group"
            >
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-black">
                <Image 
                  src="/image.png" 
                  alt="Ahmed Mustafa"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                />
                {/* Overlay تفاعلي */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent mix-blend-overlay" />
              </div>

              {/* بطاقات طائرة (Floating Cards) داخل الـ Hero */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -right-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 hidden md:block"
              >
                <div className="text-blue-400 font-bold">100+</div>
                <div className="text-[10px] text-gray-300 uppercase tracking-widest">Projects</div>
              </motion.div>
            </motion.div>

            {/* حلقات طاقة خلف الصورة (Energy Rings) */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 4, delay: i * 1, repeat: Infinity }}
                className="absolute inset-0 border border-blue-500/30 rounded-[3rem] z-10"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. الـ Floating Nav - أحدث شكل في 2026 */}
   <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex gap-2 p-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl">
  {[
    { name: 'Home', hash: '#' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Experience', hash: '#stack' },
    { name: 'Contact', hash: '#contact' }
  ].map((item) => (
    <MagneticWrapper key={item.name} strength={0.3}>
      {/* حولنا الـ button لـ a عشان الـ Scroll يشتغل */}
      <a 
        href={item.hash}
        className="px-6 py-3 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all block"
      >
        {item.name}
      </a>
    </MagneticWrapper>
  ))}
</nav>

    </main>
  );
}