'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-[#111729] to-[#0b1020] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl hover:border-accent/20 transition-colors group mb-20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 group-hover:bg-accent/10 transition-colors duration-700"></div>

          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral to-neutral/50 mb-6">
            Summary
          </h2>
          <div className="space-y-6">
            <p className="text-neutral/80 leading-relaxed text-lg font-medium">
              A dedicated Computer Science and Engineering student at United International University, with focus on Machine Learning, Computer Vision, Blockchain and Cryptography.
            </p>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 mb-12 inline-block">
            Education
          </h2>

          <div className="relative border-l-2 border-accent/20 pl-8 space-y-12 ml-4 md:ml-8">

            {/* Timeline Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              {/* Glowing Dot */}
              <div className="absolute -left-[41px] top-6 w-5 h-5 bg-[#0b1020] border-4 border-accent rounded-full group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(0,210,255,0.8)] transition-all duration-300 z-10"></div>

              {/* Card */}
              <div className="bg-[#111729] p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral group-hover:text-accent transition-colors">B.Sc in Computer Science & Engineering</h3>
                  <span className="text-xs font-bold px-4 py-1.5 bg-white/5 text-neutral/70 rounded-full group-hover:bg-accent/10 group-hover:text-accent border border-white/5 group-hover:border-accent/20 transition-all">June 2022 - Current</span>
                </div>
                <div className="text-neutral/50 mb-6 font-medium">United International University (SoSE)</div>
                <div className="inline-flex items-center px-4 py-2 rounded-lg bg-accent/5 border border-accent/20 text-accent font-bold text-sm tracking-wide">
                  CGPA: 3.74 / 4.00
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-5 h-5 bg-[#0b1020] border-4 border-accent rounded-full group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(0,210,255,0.8)] transition-all duration-300 z-10"></div>

              <div className="bg-[#111729] p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral group-hover:text-accent transition-colors">International Advanced Level (IAL)</h3>
                  <span className="text-xs font-bold px-4 py-1.5 bg-white/5 text-neutral/70 rounded-full group-hover:bg-accent/10 group-hover:text-accent border border-white/5 group-hover:border-accent/20 transition-all">Year: 2021</span>
                </div>
                <div className="text-neutral/50 mb-6 font-medium">Singapore International School</div>
                <div className="inline-flex items-center px-4 py-2 rounded-lg bg-accent/5 border border-accent/20 text-accent font-bold text-sm tracking-wide">
                  Result: 1A 2B
                </div>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-6 w-5 h-5 bg-[#0b1020] border-4 border-accent rounded-full group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(0,210,255,0.8)] transition-all duration-300 z-10"></div>

              <div className="bg-[#111729] p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-accent/40 group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral group-hover:text-accent transition-colors">International General Certificate of Secondary Education (IGCSE)</h3>
                  <span className="text-xs font-bold px-4 py-1.5 bg-white/5 text-neutral/70 rounded-full group-hover:bg-accent/10 group-hover:text-accent border border-white/5 group-hover:border-accent/20 transition-all">Year: 2019</span>
                </div>
                <div className="text-neutral/50 mb-6 font-medium">Academia</div>
                <div className="inline-flex items-center px-4 py-2 rounded-lg bg-accent/5 border border-accent/20 text-accent font-bold text-sm tracking-wide">
                  Result: 1A* 1A 3B
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
