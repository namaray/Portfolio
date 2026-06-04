'use client';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: '1st Runner Up',
    description: 'Project Exhibition (Hardware Category) — BrainStation-23 presents CSE Fest 2024',
    icon: '🏆',
    color: '#e85d5d',
  },
  {
    title: 'Gold Medalist',
    description: 'The Duke of Edinburgh\'s International Award',
    icon: '🥇',
    color: '#d4846a',
  },
  {
    title: 'Former President',
    description: 'Maple Leaf International School Science Club (2021)',
    icon: '⭐',
    color: '#6ea8a0',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6ea8a0] via-[#e85d5d] to-[#d4846a] mb-4 inline-block">
            Achievements &amp; Recognition
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto text-lg">
            Milestones and awards that mark my journey in tech and community leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative text-left"
            >
              {/* Hover glow */}
              <div 
                className="absolute inset-0 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-15 transition-all duration-500"
                style={{ background: `radial-gradient(circle at center, ${item.color}, transparent)` }}
              />
              
              <div className="relative glass-card h-full p-8 group-hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:transition-colors" style={{  }}>
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm flex-grow leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
