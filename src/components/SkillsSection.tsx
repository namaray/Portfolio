'use client';
import { motion } from 'framer-motion';

const softwareTools = ['C/C++', 'Java', 'Python', 'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'];
const marqueeSkills = [...softwareTools, ...softwareTools, ...softwareTools, ...softwareTools, ...softwareTools, ...softwareTools]; 

const otherCategories = [
  {
    title: 'Frameworks & Platforms',
    skills: ['Laravel', 'MySQL Workbench', 'XAMPP', 'phpMyAdmin'],
    colSpan: 'md:col-span-2 lg:col-span-2',
    accent: '#e85d5d',
  },
  {
    title: 'Platforms & Devices',
    skills: ['Raspberry Pi', 'Arduino'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: '#d4846a',
  },
  {
    title: 'AI & Data Science',
    skills: ['OCR', 'TTS/STT APIs', 'Basic Machine Learning'],
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: '#6ea8a0',
  },
  {
    title: 'Soft Skills',
    skills: ['Public Speaking', 'Anchoring', 'Event Hosting', 'Team Collaboration'],
    colSpan: 'md:col-span-2 lg:col-span-2',
    accent: '#c4886a',
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e85d5d] to-[#6ea8a0] pb-2 inline-block">
              Arsenal &amp; Expertise
            </h2>
            <p className="text-white/55 mt-4 max-w-2xl mx-auto text-lg">
              A comprehensive overview of the tools, frameworks, and skills I leverage to build robust and scalable solutions.
            </p>
          </div>
          
          {/* Infinite Marquee for Software Tools */}
          <div className="mb-20">
            <h3 className="text-sm font-bold text-white/70 mb-8 px-4 border-l-4 border-[#e85d5d] tracking-wide uppercase">
              Software Tools
            </h3>
            <div className="relative w-full flex overflow-hidden group">
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#2d2332]/90 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#2d2332]/90 to-transparent z-10 pointer-events-none" />
              
              <motion.div
                className="flex whitespace-nowrap gap-5 py-4 cursor-default"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              >
                {marqueeSkills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 px-7 py-3.5 bg-[#2d2332]/60 backdrop-blur-sm rounded-xl border border-white/8 text-white/80 font-semibold hover:border-[#e85d5d]/40 hover:text-[#e85d5d] hover:shadow-[0_0_15px_rgba(232,93,93,0.15)] transition-all duration-300 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bento Grid for other categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-card p-8 group relative overflow-hidden hover:-translate-y-1 transition-all duration-500 ${category.colSpan || ''}`}
                style={{ ['--cat-accent' as string]: category.accent }}
              >
                <div 
                  className="absolute -right-16 -top-16 w-40 h-40 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-all duration-500"
                  style={{ background: category.accent }}
                />
                
                <h3 className="text-xl font-bold text-white mb-6 group-hover:transition-colors duration-300 relative z-10" style={{  }}>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-white/5 border border-white/8 rounded-xl text-sm font-medium text-white/65 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
