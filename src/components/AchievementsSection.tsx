'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-32 px-8 md:px-16 lg:px-24 bg-background">
      <div className="max-w-[1400px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-20"
        >
          Achievements
        </motion.h2>

        <div className="flex flex-col gap-32">
          
          {/* Achievement 1: UIU R&I Week */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-16 border-t border-gray-800 pt-16"
          >
            <div className="flex-1">
              <div className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Scientific Poster Presentation</div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Science & Tech Fests</h3>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-medium text-white">Robolution 2025 <span className="text-sm text-gray-500 font-normal">– MIST Robotics Club</span></span>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold bg-yellow-500/10 text-yellow-500 px-3 py-1.5 rounded-lg border border-yellow-500/30"><span className="text-lg">🏆</span> Champion</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-medium text-white">R&I Week 2025 <span className="text-sm text-gray-500 font-normal">– UIU</span></span>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold bg-yellow-500/10 text-yellow-500 px-3 py-1.5 rounded-lg border border-yellow-500/30"><span className="text-lg">🏆</span> Champion</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-medium text-white">1st S.N. Bose National Science Festival <span className="text-sm text-gray-500 font-normal">– BRAC</span></span>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold bg-white/10 text-white px-3 py-1.5 rounded-lg border border-white/10"><span className="text-lg">🥈</span> 1st Runner-Up</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-[500px] w-full shrink-0 relative aspect-video rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image src="/R&Iweek.jpg" alt="UIU R&I Week" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Achievement 2: Pre-Seed Funding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse lg:flex-row items-center gap-16 border-t border-gray-800 pt-16"
          >
             <div className="lg:w-[500px] w-full shrink-0 relative aspect-[4/3] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-[#111]">
              <Image src="/launchpad.jpg" alt="Launchpad Funding" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Launchpad by UIHP@UIU</div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Pre-Seed Funding</h3>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Received 20,000 BDT in Pre-Seed funding. An initiative of the Digital Entrepreneurship and Innovation Ecosystem Development (DEIED) Project, supported by the ICT Division & The World Bank.
              </p>
            </div>
          </motion.div>

          {/* Achievement 3: CSE Project Show */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-16 border-t border-gray-800 pt-16"
          >
            <div className="flex-1">
              <div className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Project Showcase</div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">CSE Project Shows</h3>
              <div className="text-accent mb-6 font-medium uppercase tracking-widest text-sm">United International University</div>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-medium text-white">FYDP 1 Fall 2025 Project Show <span className="text-sm text-gray-500 font-normal">(Undergraduate Thesis)</span></span>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold bg-white/10 text-white px-3 py-1.5 rounded-lg border border-white/10"><span className="text-lg">🥈</span> 1st Runner-Up</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-medium text-white">Microprocessor Lab Show <span className="text-sm text-gray-500 font-normal">– Summer 2025</span></span>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold bg-white/10 text-white px-3 py-1.5 rounded-lg border border-white/10"><span className="text-lg">🥈</span> 1st Runner-Up</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-medium text-white">Electronics Lab Show <span className="text-sm text-gray-500 font-normal">– Spring 2025</span></span>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold bg-white/10 text-white px-3 py-1.5 rounded-lg border border-white/10"><span className="text-lg">🥈</span> 1st Runner-Up</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-medium text-white">SAD Lab Show <span className="text-sm text-gray-500 font-normal">– Spring 2025</span></span>
                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold bg-[#CD7F32]/10 text-[#CD7F32] px-3 py-1.5 rounded-lg border border-[#CD7F32]/30"><span className="text-lg">🥉</span> 2nd Runner-Up</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-[500px] w-full shrink-0 relative aspect-[4/3] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-[#111]">
              <Image src="/CSE Project Show Awards.jpg" alt="CSE Project Show Awards" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Other Text Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-800 pt-16"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Competitions</h3>
              <ul className="space-y-6 text-gray-400 text-lg">
                <li className="flex flex-col gap-2">
                  <span className="font-semibold text-white">National Blockchain Olympiad (BCOL) 2025</span>
                  <span className="text-accent uppercase tracking-widest text-sm">Finalist</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-semibold text-white">The Queen's Commonwealth Essay Competition</span>
                  <span className="text-orange-500 uppercase tracking-widest text-sm flex items-center gap-2"><span className="text-base">🥉</span> Bronze Medal</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Scholarships</h3>
              <ul className="space-y-6 text-gray-400 text-lg">
                <li className="flex flex-col gap-2">
                  <span className="font-semibold text-white">50% Waiver (Four Times)</span>
                  <span>United International University</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-semibold text-white">25% Waiver (Two Times)</span>
                  <span>United International University</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
