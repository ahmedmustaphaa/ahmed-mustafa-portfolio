"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // هنستخدم Lucide اللي اتفقنا عليها

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // اللينكات لازم تطابق الـ id اللي هنحطه في كل سكشن
  const links = [
    { name: "Projects", hash: "#projects" },
    { name: "Experience", hash: "#stack" },
    { name: "Testimonials", hash: "#testimonials" },
    { name: "Contact", hash: "#contact" },
  ];

  return (
    <nav className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-fit flex items-center gap-2 p-2 bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl"
      >
        {/* Logo */}
        <div className="px-4 py-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl font-black text-white text-sm">
          A.
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Action Button */}
        <a 
          href="#contact"
          className="ml-2 px-4 py-2 text-sm font-semibold bg-white text-black rounded-xl hover:scale-105 active:scale-95 transition-all hidden sm:block"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 inset-x-4 p-4 bg-[#0a0a0a] border border-white/10 rounded-3xl flex flex-col gap-2 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                onClick={() => setIsOpen(false)}
                className="px-4 py-4 text-lg text-gray-400 hover:text-white border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}