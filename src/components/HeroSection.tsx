'use client';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const TITLES = ['Developer', 'Innovator', 'Designer', 'Engineer'];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && showScrollIndicator) {
      setShowScrollIndicator(false);
    } else if (latest <= 50 && !showScrollIndicator) {
      setShowScrollIndicator(true);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-[150px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mt-20 md:mt-0">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6 ml-1 md:ml-2"
          >
            Namare Shakib Angkon
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[14vw] sm:text-[12vw] md:text-[9vw] lg:text-[140px] font-black leading-[0.9] tracking-tighter text-white"
          >
            <span className="block hover:animate-glitch transition-all duration-300">Student</span>
            <div className="h-[1.2em] overflow-hidden text-gray-600 hover:text-white transition-colors duration-500">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="block"
                >
                  + {TITLES[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 shrink-0"
        >
          <Image 
            src="/profile.jpg" 
            alt="Namare Shakib Angkon" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center border border-gray-700 w-10 h-16 rounded-full"
          >
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
