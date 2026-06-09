'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'ARGUS',
    subtitle: 'AI-Powered Smart Glasses for the Visually Impaired',
    description: 'An on-device AI navigation system integrating real-time object detection, depth estimation, and voice-command NLU on a Jetson Orin Nano.',
    tech: ['Python', 'YOLOv8', 'TensorRT', 'Whisper'],
    githubLink: '',
    bgImage: '/argus-v2.png'
  },

  {
    title: 'Portable Braille',
    subtitle: 'Making Print Accessible',
    description: 'Engineered a low-cost, portable Braille printer that embosses digital text onto A4 paper using stepper motors, solenoid actuators, and IR sensors.',
    tech: ['Raspberry Pi', 'Python', 'OCR', '3D Printing'],
    githubLink: 'https://github.com/namaray/Portable-Braille-Printer',
    videoLink: 'https://www.youtube.com/embed/iy1dZGjbnOs',
    bgImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'ShareStrength',
    subtitle: 'Empowering Individuals with Disabilities',
    description: 'Built a web platform connecting people with disabilities to trusted helpers using AI-based recommendations and accessibility tools.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Tailwind'],
    githubLink: 'https://github.com/namaray/ShareStrength',
    bgImage: '/Sharestrength.png'
  },
  {
    title: 'Maternify',
    subtitle: 'Prenatal & Postnatal Health Tracker',
    description: 'A prenatal/postnatal symptom tracking platform with intelligent risk-flag generation to help expecting and new mothers monitor their health. Role: Main front end designer.',
    tech: ['Python', 'AI APIs', 'React'],
    githubLink: '',
    bgImage: '/maternify.png',
    imageClassName: 'object-contain p-4 lg:p-8',
    bgColor: '#0f6e56'
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center mb-32 last:mb-0`}
    >
      {/* Image / Video Container */}
      <div 
        className="w-full lg:w-[55%] relative group rounded-3xl overflow-hidden border border-white/5 aspect-[4/3] lg:aspect-[16/10] shrink-0 grayscale hover:grayscale-0 transition-all duration-700"
        style={{ backgroundColor: project.bgColor || '#111111' }}
      >
        {project.videoLink ? (
          <iframe 
            src={project.videoLink}
            title={`${project.title} Video`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Image 
            src={project.bgImage} 
            alt={project.title} 
            fill 
            className={`transition-transform duration-700 scale-100 group-hover:scale-105 ${project.imageClassName || 'object-cover'}`}
          />
        )}
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">0{index + 1}</span>
          <span className="w-12 h-px bg-white/20"></span>
          <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">{project.subtitle}</span>
        </div>
        
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 text-white leading-[0.9]">
          {project.title}
        </h3>
        
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase text-gray-300">
              {t}
            </span>
          ))}
        </div>

        {project.githubLink && (
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
          >
            View Project
            <span className="w-8 h-[2px] bg-white group-hover:bg-accent group-hover:w-12 transition-all duration-300"></span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24 relative bg-background border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-32"
        >
          Selected Works
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
