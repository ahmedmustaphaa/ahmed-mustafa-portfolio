"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Knowledge Challenge",
    description: "A full-stack quiz platform featuring complex state management, real-time feedback, and a robust Node.js/MongoDB backend.",
    link: "https://knowledge-challenge-fullstack-51h4.vercel.app/",
    color: "#f59e0b", 
    tags: ["MERN Stack", "Redux Toolkit", "Vercel"]
  },
  {
    title: "AI Resume Engine",
    description: "A sophisticated SaaS platform using AI to architect professional resumes with real-time feedback.",
    link: "https://resume-ai-engine-sass-c9k3.vercel.app/app",
    color: "#3b82f6",
    tags: ["Next.js", "OpenAI", "SaaS"]
  },
  {
    title: "Doctor Appointment",
    description: "A comprehensive medical booking system with an advanced admin dashboard and seamless user flow.",
    link: "https://github.com/ahmedmustaphaa/",
    color: "#ec4899",
    tags: ["Full Stack", "Medical UI", "Dashboard"]
  },
  {
    title: "JSAP Motion Lab",
    description: "An experimental playground focusing on high-end GSAP animations and creative interactions.",
    link: "https://JSAPAHMEDMUSTAF.surge.sh",
    color: "#a855f7",
    tags: ["GSAP", "Creative Coding", "Motion"]
  },
  {
    title: "Full GitHub Repo",
    description: "Explore my full archive of open-source projects, system architectures, and creative coding experiments.",
    link: "https://github.com/ahmedmustaphaa/",
    color: "#ffffff",
    tags: ["GitHub", "Open Source", "Archive"]
  }
];

const ProjectCard = ({ project, i, progress, range, targetScale }) => {
  const container = useRef(null);
  
  // حركة الـ Scale لكل كارت بناءً على السكرول الكلي
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div id="projects" ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
          scale, 
          backgroundColor: "#0d0d0d", 
          top: `calc(-5vh + ${i * 30}px)`, // زيادة بسيطة في الإزاحة لجمالية الـ Stack
          border: `1px solid ${project.color}33`
        }} 
        className="relative h-[500px] w-[95%] max-w-[1100px] rounded-[3.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl overflow-hidden"
      >
        {/* تفاصيل المشروع */}
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <div className="flex gap-3 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono border border-white/10 px-4 py-1.5 rounded-full text-gray-400 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase italic">
              {project.title.split(" ")[0]}<br/>
              <span style={{ color: project.color }}>{project.title.split(" ").slice(1).join(" ")}</span>
            </h3>
            <p className="mt-8 text-gray-500 text-lg max-w-sm font-light leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-5 text-white font-bold tracking-widest uppercase text-xs"
          >
            <span className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 text-xl text-white">
              →
            </span>
            Explore Project
          </a>
        </div>

        {/* الجزء البصري - خلفية فنية بدل الصور */}
        <div className="flex-1 relative rounded-[2rem] overflow-hidden border border-white/5 bg-black/60 group">
          <div className="absolute inset-0 flex items-center justify-center text-[15rem] font-black opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 select-none">
            0{i + 1}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80 z-10" />
          <motion.div 
            className="absolute inset-0 opacity-30 blur-[80px]"
            style={{ backgroundColor: project.color }}
          />
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <main ref={container} className="relative bg-[#050505]">
      {/* سكشن العنوان */}
      <section className="h-[60vh] flex flex-col items-center justify-center">
         <motion.h2 
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           className="text-[12vw] font-black text-white/5 uppercase leading-none select-none"
         >
           Selected
         </motion.h2>
         <h2 className="text-5xl md:text-9xl font-black text-white -mt-8 md:-mt-16 relative z-10 tracking-tighter">
           SOME WORKS<span className="text-blue-500">.</span>
         </h2>
      </section>

      {/* عرض الكروت بنظام الـ Sticky Stack */}
      <div className="pb-[10vh]">
        {projects.map((project, i) => {
          // حساب الـ scale بناءً على ترتيب الكارت (الكروت اللي تحت تصغر شوية)
          const targetScale = 1 - ((projects.length - i) * 0.05);
          const startRange = i * (1 / projects.length);
          
          return (
            <ProjectCard 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[startRange, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>

      <div className="h-[20vh]" />
    </main>
  );
}