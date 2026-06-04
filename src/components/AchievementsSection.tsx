'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
            Achievements &amp; Recognition
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

        {/* ===== Category 1: CSE Project Shows (Featured with Image) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
          <div className="relative bg-[#111729] rounded-[2rem] border border-white/10 group-hover:border-accent/50 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Content */}
              <div className="flex-1 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-10-5v4l10 5 10-5v-4l-10 5zm0 5l-10-5v4l10 5 10-5v-4l-10 5z"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral">CSE Project Shows</h3>
                </div>
                <div className="text-accent text-sm font-bold mb-6 uppercase tracking-wider pl-[52px]">United International University</div>
                
                <ul className="space-y-4">
                  <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                    <span className="text-neutral/60 text-sm">FYDP 1 Fall 2025 Project Show (Undergraduate Thesis)</span>
                    <span className="text-neutral font-bold">🥈 1st Runner-Up</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                    <span className="text-neutral/60 text-sm">Microprocessor Lab Show – Spring 2025</span>
                    <span className="text-neutral font-bold">🥈 1st Runner-Up</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                    <span className="text-neutral/60 text-sm">Electronics Lab Show – Spring 2025</span>
                    <span className="text-neutral font-bold">🥈 1st Runner-Up</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-accent/40 transition-colors">
                    <span className="text-neutral/60 text-sm">SAD Lab Show – Spring 2025</span>
                    <span className="text-neutral font-bold">🥉 2nd Runner-Up</span>
                  </li>
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className="md:w-[320px] lg:w-[380px] flex-shrink-0 relative min-h-[240px] md:min-h-0 bg-white/5 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10">
                {/* Replace the placeholder below with: <Image src="/achievements/cse-project-show.jpg" alt="CSE Project Show" fill className="object-cover" /> */}
                <div className="flex flex-col items-center gap-3 text-neutral/30 p-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><path d="m3 16 5-5 4 4 4-6 5 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/></svg>
                  <span className="text-sm text-center">CSE Project Show<br/>Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Category 2: Scientific Poster Wins (Featured with Image) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="group relative mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
          <div className="relative bg-[#111729] rounded-[2rem] border border-white/10 group-hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Content */}
              <div className="flex-1 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral">Scientific Poster</h3>
                </div>
                <div className="text-emerald-400 text-sm font-bold mb-6 uppercase tracking-wider pl-[52px]">Poster Presentations</div>
                
                <ul className="space-y-4">
                  <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-emerald-500/40 transition-colors">
                    <span className="text-neutral/60 text-sm">Robolution 2025 – MIST Robotics Club</span>
                    <span className="text-neutral font-bold">🏆 Champion</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-emerald-500/40 transition-colors">
                    <span className="text-neutral/60 text-sm">R&amp;I Week 2025 – UIU</span>
                    <span className="text-neutral font-bold">🏆 Champion</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-white/10 pl-4 group-hover:border-emerald-500/40 transition-colors">
                    <span className="text-neutral/60 text-sm">BRAC presents 1st S.N. Bose National Science Festival</span>
                    <span className="text-neutral font-bold">🥈 1st Runner-Up</span>
                  </li>
                </ul>
              </div>

              {/* R&I Week Image */}
              <div className="md:w-[320px] lg:w-[380px] flex-shrink-0 relative min-h-[240px] md:min-h-[100%] border-t md:border-t-0 md:border-l border-white/10 bg-[#0d1220]">
                <Image src="/R&Iweek.jpg" alt="R&I Week 2025 Scientific Poster" fill className="object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Row of 2 smaller cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* Card: Blockchain Olympiad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative h-full bg-[#111729] p-8 rounded-[2rem] border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral mb-2">Competitions</h3>
              <div className="text-purple-400 text-sm font-bold mb-8 uppercase tracking-wider">National &amp; International</div>
              
              <ul className="space-y-6 mt-auto">
                <li className="flex flex-col">
                  <span className="text-neutral/80 leading-relaxed mb-3">
                    National Blockchain Olympiad (BCOL) 2025
                  </span>
                  <span className="inline-block w-fit px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg text-sm font-bold">
                    🏅 Finalist
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-neutral/80 leading-relaxed mb-3">
                    &apos;The Queen&apos;s Commonwealth Essay Competition&apos; organized by the Royal Commonwealth Society
                  </span>
                  <span className="inline-block w-fit px-4 py-1.5 bg-[#CD7F32]/10 border border-[#CD7F32]/30 text-[#CD7F32] rounded-lg text-sm font-bold">
                    🥉 Bronze Medal
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card: Scholarships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
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

        </div>

        {/* ===== Launchpad Funding – Full-width row: Text left, Image right ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Text Card */}
            <div className="group relative flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="relative h-full bg-[#111729] p-8 md:p-10 rounded-[2rem] border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.94s4.18 1.36 4.18 3.85c0 1.89-1.44 2.93-3.12 3.19z"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral">Pre-Seed Funding</h3>
                </div>
                <div className="text-cyan-400 text-sm font-bold mb-6 uppercase tracking-wider pl-[52px]">Launchpad by UIHP@UIU 2025</div>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                    <span className="text-3xl font-extrabold text-cyan-400">20,000</span>
                    <span className="text-sm text-neutral/70">BDT Pre-Seed Funding Recipient</span>
                  </div>
                  <p className="text-sm text-neutral/50 leading-relaxed">
                    An initiative of the Digital Entrepreneurship and Innovation Ecosystem Development (DEIED) Project, supported by the ICT Division, Bangladesh Hi-Tech Park Authority &amp; The World Bank.
                  </p>
                </div>
              </div>
            </div>

            {/* Image with Glow */}
            <div className="md:w-[380px] lg:w-[440px] flex-shrink-0 relative min-h-[280px] flex items-center justify-center">
              <div className="absolute inset-[15%] bg-cyan-500/20 rounded-full blur-[60px]"></div>
              <div className="relative w-full h-full min-h-[280px] rounded-[1.5rem] overflow-hidden">
                <Image src="/launchpad.jpg" alt="Launchpad by UIHP@UIU" fill className="object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
