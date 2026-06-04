'use client';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-12 items-center"
        >
          {/* Left Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e85d5d] to-[#d4846a] pb-2">
              Experience
            </h2>
            <p className="text-white/65 mt-4 text-lg leading-relaxed">
              My professional journey in the tech industry, contributing to real-world AI solutions.
            </p>
          </div>

          {/* Right Column: Featured Experience Card */}
          <div className="lg:col-span-2 relative group">
            {/* Warm glow on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e85d5d] to-[#d4846a] rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700" />
            
            <div className="relative glass-card p-8 md:p-10 group-hover:border-[#e85d5d]/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#e85d5d] transition-colors duration-300">
                    Data Annotation Expert (AI/ML)
                  </h3>
                  <div className="text-lg text-[#d4846a] font-medium mt-2">Transperfect DataForce</div>
                </div>
                <div className="shrink-0 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-sm font-bold text-white/70 group-hover:bg-[#e85d5d]/10 group-hover:text-[#e85d5d] group-hover:border-[#e85d5d]/20 transition-all">
                  December 2024 - Present
                </div>
              </div>
              
              <ul className="space-y-4 text-white/65 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#e85d5d] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">▹</span>
                  <span>Annotated and classified vast datasets to refine machine learning models.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4846a] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">▹</span>
                  <span>Conducted Reinforcement Learning from Human Feedback (RLHF) tasks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6ea8a0] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">▹</span>
                  <span>Evaluated and interpreted outputs from Large Language Models (LLMs).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e85d5d] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">▹</span>
                  <span>Collaborated closely with cross-functional AI teams to improve model accuracy.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
