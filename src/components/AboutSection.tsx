'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card glass-card-hover p-8 md:p-10 mb-16 transition-all duration-500 relative overflow-hidden"
        >
          {/* Decorative warm glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e85d5d]/8 rounded-full blur-[100px] -z-10" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e85d5d] to-[#d4846a] mb-6">
            About Me
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-4">
            A dedicated Computer Science and Engineering student at United International University, with focus on Machine Learning, Computer Vision, Blockchain and Cryptography.
          </p>
          <p className="text-white/65 text-base leading-relaxed">
            I thrive on transforming complex problems into elegant, efficient code. My journey is driven by a deep curiosity for how things work and a relentless pursuit of innovation in the tech landscape.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e85d5d] to-[#6ea8a0] mb-12 inline-block">
            Education
          </h2>

          <div className="relative border-l-2 border-[#e85d5d]/20 ml-3 md:ml-6 space-y-10">
            
            {/* B.Sc */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-5 h-5 bg-[#2d2332] border-[3px] border-[#e85d5d] rounded-full group-hover:bg-[#e85d5d] group-hover:shadow-[0_0_12px_rgba(232,93,93,0.6)] transition-all duration-300 z-10" />

              <div className="bg-white/[0.03] p-6 md:p-8 rounded-2xl border border-white/[0.06] group-hover:border-[#e85d5d]/30 group-hover:bg-white/[0.06] group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#e85d5d] transition-colors">B.Sc in Computer Science &amp; Engineering</h3>
                  <span className="text-xs font-bold px-4 py-1.5 bg-white/5 text-white/60 rounded-full border border-white/5">June 2022 - Current</span>
                </div>
                <h4 className="text-base text-[#d4846a] mb-4 font-medium">United International University</h4>
                <p className="text-white/60 leading-relaxed mb-4 text-sm">
                  Focused on Machine Learning, Blockchain, and advanced algorithmic problem solving.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e85d5d] bg-[#e85d5d]/10 px-4 py-2 rounded-lg border border-[#e85d5d]/15">
                  <span className="text-white/50">CGPA:</span> 3.82/4.00
                </div>
              </div>
            </motion.div>

            {/* IAL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-5 h-5 bg-[#2d2332] border-[3px] border-[#d4846a] rounded-full group-hover:bg-[#d4846a] group-hover:shadow-[0_0_12px_rgba(212,132,106,0.6)] transition-all duration-300 z-10" />

              <div className="bg-white/[0.03] p-6 md:p-8 rounded-2xl border border-white/[0.06] group-hover:border-[#d4846a]/30 group-hover:bg-white/[0.06] group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#d4846a] transition-colors">International Advanced Level (IAL)</h3>
                  <span className="text-xs font-bold px-4 py-1.5 bg-white/5 text-white/60 rounded-full border border-white/5">Year: 2021</span>
                </div>
                <h4 className="text-base text-[#d4846a] mb-4 font-medium">Edexcel</h4>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4846a] bg-[#d4846a]/10 px-4 py-2 rounded-lg border border-[#d4846a]/15">
                  <span className="text-white/50">Results:</span> 3 A*, 1 A
                </div>
              </div>
            </motion.div>

            {/* IGCSE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-5 h-5 bg-[#2d2332] border-[3px] border-[#6ea8a0] rounded-full group-hover:bg-[#6ea8a0] group-hover:shadow-[0_0_12px_rgba(110,168,160,0.6)] transition-all duration-300 z-10" />

              <div className="bg-white/[0.03] p-6 md:p-8 rounded-2xl border border-white/[0.06] group-hover:border-[#6ea8a0]/30 group-hover:bg-white/[0.06] group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#6ea8a0] transition-colors">IGCSE</h3>
                  <span className="text-xs font-bold px-4 py-1.5 bg-white/5 text-white/60 rounded-full border border-white/5">Year: 2019</span>
                </div>
                <h4 className="text-base text-[#6ea8a0] mb-4 font-medium">Edexcel</h4>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#6ea8a0] bg-[#6ea8a0]/10 px-4 py-2 rounded-lg border border-[#6ea8a0]/15">
                  <span className="text-white/50">Results:</span> 8 A*
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
