'use client';
import { motion } from 'framer-motion';

const softwareTools = ['C/C++', 'Java', 'Python', 'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'];
// Duplicate array multiple times to ensure the marquee is wide enough for large screens and loops seamlessly
const marqueeSkills = [...softwareTools, ...softwareTools, ...softwareTools, ...softwareTools, ...softwareTools, ...softwareTools]; 

const otherCategories = [
  {
    title: 'Frameworks & Platforms',
    skills: ['Laravel', 'MySQL Workbench', 'XAMPP', 'phpMyAdmin'],
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'Platforms & Devices',
    skills: ['Raspberry Pi', 'Arduino'],
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'AI & Data Science',
    skills: ['OCR', 'TTS/STT APIs', 'Basic Machine Learning'],
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Soft Skills',
    skills: ['Public Speaking', 'Anchoring', 'Event Hosting', 'Team Collaboration'],
    colSpan: 'md:col-span-2 lg:col-span-2'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 pb-2 inline-block">
              Arsenal & Expertise
            </h2>
            <p className="text-neutral/60 mt-4 max-w-2xl mx-auto text-lg">
              A comprehensive overview of the tools, frameworks, and skills I leverage to build robust and scalable solutions.
            </p>
          </div>
          
          {/* Infinite Marquee for Software Tools */}
          <div className="mb-20">
            <h3 className="text-xl font-bold text-neutral/80 mb-8 px-4 border-l-4 border-accent tracking-wide uppercase text-sm">
              Software Tools
            </h3>
            <div className="relative w-full flex overflow-hidden group">
              {/* Fade gradients for the left and right edges */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b1020] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b1020] to-transparent z-10 pointer-events-none"></div>
              
              <motion.div
                className="flex whitespace-nowrap gap-6 py-4 cursor-default"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 40 // Adjust this value to speed up or slow down the marquee
                }}
              >
                {marqueeSkills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 px-8 py-4 bg-[#0b1020] rounded-2xl border border-white/10 text-neutral/90 font-semibold shadow-lg hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all duration-300"
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
                className={`bg-[#111729] p-10 rounded-[2rem] border border-white/5 hover:border-accent/40 transition-all duration-500 group relative overflow-hidden ${category.colSpan || ''}`}
              >
                {/* Decorative glowing orb in the background of each card */}
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-all duration-500"></div>
                
                <h3 className="text-2xl font-bold text-neutral mb-8 group-hover:text-accent transition-colors duration-300 relative z-10">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-white/5 hover:bg-accent/10 border border-white/5 hover:border-accent/40 rounded-xl text-sm font-semibold text-neutral/70 hover:text-accent transition-all duration-300 cursor-default"
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
