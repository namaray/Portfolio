'use client';
import { motion } from 'framer-motion';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Dense Particles Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Teal particles */}
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-accent rounded-full animate-float blur-[1px] opacity-60"></div>
        <div className="absolute top-[60%] left-[5%] w-3 h-3 bg-accent rounded-full animate-float-delayed blur-[1px] opacity-40"></div>
        <div className="absolute top-[80%] right-[15%] w-2 h-2 bg-accent rounded-full animate-float blur-[2px] opacity-70"></div>
        
        {/* Purple/Blue particles */}
        <div className="absolute top-[25%] right-[10%] w-3 h-3 bg-purple-500 rounded-full animate-float-delayed blur-[1px] opacity-50"></div>
        <div className="absolute top-[75%] left-[25%] w-2 h-2 bg-purple-400 rounded-full animate-float blur-[1px] opacity-60"></div>
        <div className="absolute top-[10%] right-[30%] w-2 h-2 bg-[#5cc0fe] rounded-full animate-float blur-[1px] opacity-80"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-[40%] left-[20%] w-4 h-4 border border-accent rounded-sm rotate-45 animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-[20%] right-[25%] w-6 h-6 border border-purple-500 rounded-full animate-float-delayed opacity-20"></div>
        <div className="absolute top-[50%] right-[5%] w-3 h-3 border border-[#5cc0fe] rotate-12 animate-spin-slow opacity-40"></div>
        
        {/* Tiny stars */}
        <div className="absolute top-[30%] left-[40%] w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-[70%] right-[40%] w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-[20%] left-[60%] w-1.5 h-1.5 bg-white rounded-full animate-float opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-56 h-56 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_30px_rgba(0,210,255,0.4)]"
        >
          <Image 
            src="/profile.jpg" 
            alt="Namare Shakib Angkon" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-neutral mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#5cc0fe] to-purple-400">Namare Shakib Angkon</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral/80 mb-10 max-w-2xl mx-auto"
        >
          Computer Science & Engineering Student | Machine Learning | Blockchain | Cryptography
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <a href="https://github.com/namaray" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-accent hover:text-[#0b1020] transition-colors font-medium">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/namare-shakib-angkon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white transition-colors font-medium">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="bg-accent text-[#0b1020] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-[#0b1020] transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
