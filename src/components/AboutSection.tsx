'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24 bg-background border-t border-white/5">
      <div className="max-w-[1000px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10 text-xl md:text-3xl font-medium leading-normal text-gray-400"
        >
          <p>
            A dedicated Computer Science and Engineering student at <span className="text-white">United International University</span>, with focus on Machine Learning, Computer Vision, Blockchain and Cryptography.
          </p>
          <p>
            My expertise bridges the gap between software and hardware. I specialize in building <span className="text-white">AI-driven applications</span> (leveraging LLMs, NLP, and real-time object detection), crafting accessible <span className="text-white">full-stack web platforms</span>, and engineering <span className="text-white">embedded systems</span> like portable hardware solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
