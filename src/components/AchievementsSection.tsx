'use client';
import { motion } from 'framer-motion';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-accent to-purple-500 mb-4 inline-block"
          >
            Achievements & Recognition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral/60 text-lg max-w-2xl mx-auto"
          >
            A track record of academic excellence, competitive success, and continuous learning.
          </motion.p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: CSE Project Show */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative h-full bg-[#111729] p-8 rounded-[2rem] border border-white/10 group-hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-10-5v4l10 5 10-5v-4l-10 5zm0 5l-10-5v4l10 5 10-5v-4l-10 5z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral mb-2">CSE Project Show</h3>
              <div className="text-accent text-sm font-bold mb-8 uppercase tracking-wider">United International University</div>
              
              <ul className="space-y-4 mt-auto">
                <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                  <span className="text-neutral/60 text-sm">Electronics Lab (EEE 2124)</span>
                  <span className="text-neutral font-bold">1st Runner Up</span>
                </li>
                <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                  <span className="text-neutral/60 text-sm">System Analysis & Design (CSE 3412)</span>
                  <span className="text-neutral font-bold">2nd Runner Up</span>
                </li>
                <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                  <span className="text-neutral/60 text-sm">Microprocessors Lab (CSE 4326)</span>
                  <span className="text-neutral font-bold">1st Runner Up</span>
                </li>
                <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                  <span className="text-neutral/60 text-sm">Final Year Design Project - I</span>
                  <span className="text-neutral font-bold">1st Runner Up</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Scholarships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative h-full bg-[#111729] p-8 rounded-[2rem] border border-white/10 group-hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 text-amber-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 1.5L2 7l10 5.5 10-5.5-10-5.5zm0 8.5l-10-5.5v5l10 5.5 10-5.5v-5l-10 5.5zm0 7l-10-5.5v5l10 5.5 10-5.5v-5l-10 5.5z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral mb-2">Scholarship Awards</h3>
              <div className="text-amber-400 text-sm font-bold mb-8 uppercase tracking-wider">United International University</div>
              
              <div className="space-y-4 mt-auto">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-amber-400/20 group-hover:bg-amber-400/5 transition-all">
                  <div className="text-4xl font-extrabold text-neutral group-hover:text-amber-400 transition-colors">50%</div>
                  <div className="text-right">
                    <div className="text-sm text-neutral/60">Waiver</div>
                    <div className="text-sm font-bold text-neutral">Four Times</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-amber-400/20 group-hover:bg-amber-400/5 transition-all">
                  <div className="text-4xl font-extrabold text-neutral group-hover:text-amber-400 transition-colors">25%</div>
                  <div className="text-right">
                    <div className="text-sm text-neutral/60">Waiver</div>
                    <div className="text-sm font-bold text-neutral">Two Times</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative h-full bg-[#111729] p-8 rounded-[2rem] border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral mb-2">Competitions</h3>
              <div className="text-purple-400 text-sm font-bold mb-8 uppercase tracking-wider">National & International</div>
              
              <ul className="space-y-6 mt-auto">
                <li className="flex flex-col">
                  <span className="text-neutral/80 leading-relaxed mb-3">
                    MIST Scientific Poster Presentation at Robotron 2026
                  </span>
                  <span className="inline-block w-fit px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg text-sm font-bold">
                    🏆 Champion
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-neutral/80 leading-relaxed mb-3">
                    'The Queen's Commonwealth Essay Competition' organized by the Royal Commonwealth Society
                  </span>
                  <span className="inline-block w-fit px-4 py-1.5 bg-[#CD7F32]/10 border border-[#CD7F32]/30 text-[#CD7F32] rounded-lg text-sm font-bold">
                    🥉 Bronze Medal
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
