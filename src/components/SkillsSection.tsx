'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'C/C++', icon: '/ISO_C++_Logo.svg.png' },
  { name: 'Java', icon: '/Java_programming_language_logo.svg.png' },
  { name: 'Python', icon: '/Python-logo-notext.svg.png' },
  { name: 'HTML', icon: '/HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS', icon: '/css.png' },
  { name: 'JavaScript', icon: '/JavaScript.webp' },
  { name: 'PHP', icon: '/PHP-logo.svg' },
  { name: 'MySQL', icon: '/mysql-logo-png_seeklogo-231538.png' },
  { name: 'Arduino', icon: '/Arduino_Logo.svg.png' },
  { name: 'Raspberry Pi', icon: '/Raspberry_Pi_Logo.svg.png' },
];

const frameworks = [
  { name: 'Tailwind CSS', icon: '/tailwind-css-logo-rounded-free-png.webp' },
  { name: 'Laravel', icon: '/Laravel.svg.png' },
  { name: 'MongoDB', icon: '/mongodb.png' },
  { name: 'Express.js', icon: '/expressjs.png' },
  { name: 'React', icon: '/React-icon.svg.png' },
  { name: 'Node.js', icon: '/Node.js_logo.svg.png' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-20"
        >
          Arsenal
        </motion.h2>

        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-gray-400 mb-10 tracking-widest uppercase"
          >
            Languages & Tools
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-8 bg-[#111729] rounded-2xl border border-white/5 hover:border-accent hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] transition-all duration-300 group"
              >
                <div className="relative w-16 h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-gray-400 mb-10 tracking-widest uppercase text-center md:text-left"
          >
            Frameworks
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {frameworks.map((framework, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-8 bg-[#111729] rounded-2xl border border-white/5 hover:border-accent hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] transition-all duration-300 group"
              >
                <div className="relative w-16 h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src={framework.icon} 
                    alt={framework.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors text-center">
                  {framework.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
