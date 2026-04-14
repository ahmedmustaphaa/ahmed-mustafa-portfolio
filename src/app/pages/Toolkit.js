"use client";
import React from "react";
import { motion } from "framer-motion";
// استخدام Lucide React حصرياً
import { 
  Zap, 
  Search, 
  Database, 
  Box, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Code2 
} from "lucide-react";

const techCards = [
  {
    title: "Next.js 15 Mastery",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    description: "Architecting high-performance ecosystems using App Router, PPR (Partial Prerendering), and Server Actions.",
    tags: ["Core Web Vitals", "LCP/CLS Optimization", "ISR"],
    grid: "md:col-span-2 md:row-span-2",
    gradient: "from-yellow-500/10"
  },
  {
    title: "SEO Strategy",
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    description: "Advanced Metadata API implementation and JSON-LD schema for maximum search visibility.",
    tags: ["Semantic HTML", "Schema.org", "Indexing"],
    grid: "md:col-span-1 md:row-span-1",
    gradient: "from-emerald-500/10"
  },
  {
    title: "Backend Core",
    icon: <Database className="w-8 h-8 text-blue-400" />,
    description: "Scalable data architecture using Prisma ORM with PostgreSQL for type-safe operations.",
    tags: ["Prisma", "PostgreSQL", "Migrations"],
    grid: "md:col-span-1 md:row-span-1",
    gradient: "from-blue-500/10"
  },
  {
    title: "Cloud & DevOps",
    icon: <Box className="w-8 h-8 text-cyan-400" />,
    description: "Containerized deployment workflows with Docker and Vercel edge runtime.",
    tags: ["Docker", "CI/CD", "Edge Config"],
    grid: "md:col-span-2 md:row-span-1",
    gradient: "from-cyan-500/10"
  }
];

export default function Toolkit() {
  return (
    <section id="stack" className="relative py-32 px-6 bg-[#020202] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em]">Engineering Unit</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
            Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/10">
              Architecture
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {techCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${card.grid} group relative rounded-[3rem] border border-white/5 bg-[#080808] p-10 flex flex-col justify-between hover:border-blue-500/20 transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{card.description}</p>
              </div>

              <div className="relative z-10 mt-10 flex flex-wrap gap-2">
                {card.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-mono text-gray-400 uppercase tracking-widest group-hover:text-white transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 p-10 rounded-[3rem] border border-white/5 bg-[#050505] flex flex-wrap justify-between items-center gap-10"
        >
          <div className="flex gap-12">
            <div>
              <p className="text-4xl font-black text-white">100</p>
              <p className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">Performance</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">100</p>
              <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">SEO Score</p>
            </div>
          </div>
          <div className="flex-1 text-right">
            <p className="text-gray-500 text-sm max-w-xs ml-auto">
              Precision-engineered for the modern web. Every component is optimized for speed, accessibility, and search visibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}