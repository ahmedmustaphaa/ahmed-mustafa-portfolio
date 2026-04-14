"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MessageSquareText } from 'lucide-react';

const reviews = [
  {
    name: "م. محمد الشريف",
    role: "Senior Full-stack Developer",
    content: "أحمد من الناس اللي بتهتم بتفاصيل الـ UI بشكل مش طبيعي، الكود بتاعه في الـ Next.js منظم جداً.",
    tag: "Professionalism"
  },
  {
    name: "عمر خالد",
    role: "Product Designer",
    content: "اشتغلنا سوا على مشروع Medic، وانبهرت بقدرته على تحويل الـ Design لأنيماشين حقيقي وسلس.",
    tag: "Technical Skill"
  },
  {
    name: "إبراهيم ناصر",
    role: "Project Manager",
    content: "أكثر حاجة بتميزه هي سرعة الأداء والالتزام بالـ SEO في كل سطر كود بيكتبه.",
    tag: "Efficiency"
  }
];

function Testimonials() {
  return (
    <section id='testimonials' className="py-32 bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <MessageSquareText className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Real <span className="text-gray-500 italic">Impact</span>
            </h2>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 rounded-[3rem] bg-[#080808] border border-white/5 group hover:border-blue-500/20 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 group-hover:text-blue-500/10 transition-colors" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-6 block">
                    {item.tag}
                  </span>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl">{item.name}</span>
                  <span className="text-gray-600 text-sm font-mono">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* سكشن صغير "Call to action" */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 font-light max-w-lg mx-auto leading-relaxed">
            الآراء دي من ناس حقيقية اشتغلت معاهم على أرض الواقع، وده اللي بيعكس جودة الشغل اللي بقدمه.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;