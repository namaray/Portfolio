'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Platform',
    subtitle: 'A full-stack solution for online retail',
    description: 'Developed a robust e-commerce platform featuring secure payment gateways, user authentication, and dynamic inventory management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#e85d5d',
  },
  {
    title: 'AI Image Generator',
    subtitle: 'Transforming text into visual art',
    description: 'Built a machine learning model capable of generating high-quality images from textual descriptions using state-of-the-art neural networks.',
    tech: ['Python', 'PyTorch', 'React'],
    color: '#d4846a',
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Showcasing skills and projects',
    description: 'Designed and developed a responsive, interactive portfolio website to showcase my skills, experience, and projects effectively.',
    tech: ['Next.js', 'Tailwind', 'Framer'],
    color: '#6ea8a0',
  },
  {
    title: 'Blockchain DApp',
    subtitle: 'Decentralized application for secure voting',
    description: 'Created a decentralized application ensuring transparency and security in voting processes leveraging Ethereum smart contracts.',
    tech: ['Solidity', 'React', 'Ethers.js'],
    color: '#c4886a',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e85d5d] via-[#d4846a] to-[#6ea8a0] mb-12 inline-block">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Hover glow */}
                <div 
                  className="absolute -inset-0.5 rounded-[1.6rem] blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                />
                
                <div className="relative glass-card p-8 h-full flex flex-col group-hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  style={{ ['--hover-color' as string]: project.color }}
                >
                  {/* Corner decoration */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -z-10 opacity-10 group-hover:opacity-25 group-hover:scale-150 transition-all duration-700"
                    style={{ background: project.color }}
                  />
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:transition-colors" style={{ '--tw-text-opacity': 1 } as React.CSSProperties}>
                    {project.title}
                  </h3>
                  <h4 className="font-medium mb-6 text-sm" style={{ color: project.color }}>{project.subtitle}</h4>
                  <p className="text-white/60 leading-relaxed mb-8 flex-grow text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold text-white/70 bg-white/5 border border-white/8 px-4 py-1.5 rounded-full group-hover:border-white/15 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
