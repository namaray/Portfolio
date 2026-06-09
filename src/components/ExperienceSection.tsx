'use client';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-8 md:px-16 lg:px-24 bg-background border-t border-white/5">
      <div className="max-w-[1400px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-20"
        >
          Experience & Education
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Experience Column */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-12">Experience</h3>
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">Freelance Annotator</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                  <span className="text-accent font-medium uppercase tracking-widest text-sm">Transperfect DataForce</span>
                  <span className="hidden sm:block text-gray-700">&bull;</span>
                  <span className="text-gray-500 font-medium">2021 — 2024</span>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Annotated Audio/Video data and interpreted audio files for the development of AI solutions. Ensured high-quality data labeling and contributed to the training of robust machine learning models.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Education Column */}
          <div className="flex-1 lg:pl-16 lg:border-l lg:border-white/5">
            <h3 className="text-3xl font-bold text-white mb-12">Education</h3>
            <div className="space-y-16">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">B.Sc Computer Science</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="text-accent font-medium uppercase tracking-widest text-sm">United International University</span>
                  <span className="hidden sm:block text-gray-700">&bull;</span>
                  <span className="text-gray-500 font-medium">2022 — Current</span>
                </div>
                <div className="inline-block px-4 py-2 border border-white/10 rounded-lg text-gray-300 font-medium">
                  CGPA: 3.74 / 4.00
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">A-Levels (IAL)</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="text-accent font-medium uppercase tracking-widest text-sm">Singapore International School</span>
                  <span className="hidden sm:block text-gray-700">&bull;</span>
                  <span className="text-gray-500 font-medium">2021</span>
                </div>
                <div className="inline-block px-4 py-2 border border-white/10 rounded-lg text-gray-300 font-medium">
                  Result: 1A 2B
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">IGCSE</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="text-accent font-medium uppercase tracking-widest text-sm">Academia</span>
                  <span className="hidden sm:block text-gray-700">&bull;</span>
                  <span className="text-gray-500 font-medium">2019</span>
                </div>
                <div className="inline-block px-4 py-2 border border-white/10 rounded-lg text-gray-300 font-medium">
                  Result: 1A* 1A 3B
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
