'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ShareStrength',
    subtitle: 'Empowering Individuals with Disabilities',
    description: 'Built a web platform connecting people with disabilities to trusted helpers using AI-based recommendations, accessibility tools (TTS, STT, Eye Tracking), and a secure task and donation system.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Tailwind', 'APIs'],
    link: '#',
    githubLink: 'https://github.com/namaray/ShareStrength',
  },
  {
    title: 'Portable Braille Printer',
    subtitle: 'Making Print Accessible for the Visually Impaired',
    description: 'Engineered a low-cost, portable Braille printer that embosses digital text onto A4 paper using stepper motors, solenoid actuators, and IR sensors. Built with Raspberry Pi and Python, the device supports OCR, text-to-Braille conversion, and battery operation for mobility.',
    tech: ['Raspberry Pi', 'Python', 'DRV8825', 'Nema17', 'Solenoid Actuator', 'OCR', 'IR Sensor', 'MOSFET', '3D Printing'],
    link: '#',
    githubLink: 'https://github.com/namaray/Portable-Braille-Printer',
    youtubeId: 'iy1dZGjbnOs',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 mb-12 inline-block">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {projects.map((project, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                className="relative p-[2px] rounded-3xl group flex flex-col hover:-translate-y-2 transition-all duration-500"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-purple-500/40 to-blue-500/40 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Inner Card Content */}
                <div className="relative h-full bg-[#111729] p-8 rounded-[22px] border border-white/10 group-hover:border-transparent transition-colors duration-500 flex flex-col overflow-hidden z-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:bg-accent/20 group-hover:scale-150 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold text-neutral mb-2">{project.title}</h3>
                <h4 className="text-accent font-medium mb-6">{project.subtitle}</h4>
                <p className="text-neutral/70 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                {/* @ts-ignore */}
                {project.youtubeId && (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-6">
                    <iframe 
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={project.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 rounded-full text-xs font-bold text-neutral/70 hover:text-accent transition-all duration-300 cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* @ts-ignore */}
                {project.githubLink && (
                  <div>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-[#0b1020] transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      View on GitHub
                    </a>
                  </div>
                )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
