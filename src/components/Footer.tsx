'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-8 md:px-16 lg:px-24 bg-background mt-20">
      <div className="max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32"
        >
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter text-white mb-8 hover:animate-glitch cursor-default">
              Let's Talk.
            </h2>
            <a 
              href="mailto:namare.shakib@gmail.com" 
              className="text-2xl md:text-4xl font-medium text-gray-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-2 inline-block"
            >
              namare.shakib@gmail.com
            </a>
          </div>
          
          <div className="mt-16 lg:mt-0 flex gap-8">
            <a href="https://github.com/namaray" target="_blank" rel="noopener noreferrer" className="text-xl font-bold uppercase tracking-widest text-gray-500 hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/namare-shakib-angkon" target="_blank" rel="noopener noreferrer" className="text-xl font-bold uppercase tracking-widest text-gray-500 hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-gray-600 text-sm font-medium tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} Namare Shakib Angkon.</p>
          <p className="mt-4 md:mt-0">Inspired by Hamish Williams</p>
        </div>
      </div>
    </footer>
  );
}
