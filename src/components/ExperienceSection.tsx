'use client';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
        >
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 pb-2">
              Experience
            </h2>
            <p className="text-neutral/60 mt-4 text-lg">
              My professional journey in the tech industry, contributing to real-world AI solutions.
            </p>
          </div>
          
          {/* Right Column: Featured Experience Card */}
          <div className="lg:col-span-2 relative group">
            {/* Glowing background blur effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-[2.5rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-500"></div>
            
            <div className="relative bg-[#111729] p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-accent/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral group-hover:text-accent transition-colors duration-300">
                    Freelance Annotator
                  </h3>
                  <div className="text-accent/80 text-lg mt-2 font-medium">
                    Transperfect Translation International Inc. (Transperfect DataForce)
                  </div>
                </div>
                <div className="px-5 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-bold tracking-widest whitespace-nowrap h-fit">
                  2021 — 2024
                </div>
              </div>
              
              <p className="text-neutral/70 leading-relaxed text-lg">
                Annotated Audio/Video data and interpreted audio files for the development of AI solutions. Ensured high-quality data labeling and contributed to the training of robust machine learning models over a multi-year period.
              </p>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
