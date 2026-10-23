'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Highlight, type HighlightColor } from '@/components/Notebook/Doodles';
import { PageHeading, Polaroid } from '@/components/Notebook/Paper';

type Project = {
  title: string;
  subtitle: string;
  stamp: string;
  did: string[];
  tech: string[];
  githubLink?: string;
  videoLink?: string;
  bgImage?: string;
  caption: string;
  imageClassName?: string;
  bgColor?: string;
};

const projects: Project[] = [
  {
    title: 'ARGUS',
    subtitle: 'AI-powered smart glasses for the visually impaired',
    stamp: 'Ongoing thesis',
    did: [
      'Scoped the problem, requirements and hardware for on-device navigation glasses with a custom 3D-printed frame.',
      'Planned and moderated a focus group with visually impaired participants to gather their needs.',
      'Built the real-time perception pipeline on a Jetson Orin Nano: stereo depth, object detection & tracking, segmentation.',
      'Wired up the voice interface: Whisper speech recognition, a quantized on-device LLM for commands, and TTS.',
    ],
    tech: ['Jetson Orin Nano', 'Stereo depth', 'YOLO', 'Whisper', 'Quantized LLMs', '3D printing'],
    bgImage: '/argus-v2.png',
    caption: 'ARGUS v2',
  },
  {
    title: 'Portable Braille Printer',
    subtitle: 'Making print accessible, on demand',
    stamp: 'User-tested',
    did: [
      'Engineered a low-cost, battery-powered printer that scans text and embosses it as Braille onto A4 paper.',
      'Built the electromechanics: NEMA 17 steppers on DRV8825 drivers, solenoid embossing, IR paper sensing.',
      'Ran a focus group and a usability study, then a thematic analysis in Taguette to derive design requirements.',
    ],
    tech: ['Raspberry Pi', 'Python', 'OCR', 'Stepper motors', 'MOSFETs', '3D printing'],
    githubLink: 'https://github.com/namaray/Portable-Braille-Printer',
    videoLink: 'https://www.youtube.com/embed/iy1dZGjbnOs',
    caption: 'press play ▶',
  },
  {
    title: 'ShareStrength',
    subtitle: 'Community support for people with disabilities',
    stamp: 'Funded · ৳20,000',
    did: [
      'Wrote the requirements (SRS) and built the full-stack platform: helper matching, task tracking, messaging, donations and a marketplace.',
      'Added accessible voice and eye-tracking controls.',
      'Won BDT 20,000 pre-seed funding through the DEIED project (ICT Division & World Bank).',
    ],
    tech: ['React', 'Vite', 'Laravel', 'MySQL', 'Tailwind', 'REST APIs'],
    githubLink: 'https://github.com/meteorboyF/ShareStrength-SL',
    bgImage: '/Sharestrength.png',
    caption: 'helpers, matched',
  },
  {
    title: 'Maternify',
    subtitle: 'Prenatal & postnatal health tracker',
    stamp: 'Team project',
    did: [
      'Symptom tracking for expecting and new mothers, with intelligent risk flags to help them monitor their health.',
      'My role: main front-end designer.',
    ],
    tech: ['React', 'Python', 'AI APIs'],
    bgImage: '/maternify.png',
    caption: 'for new mums',
    imageClassName: 'object-contain p-6',
    bgColor: '#0f6e56',
  },
];

type Card = {
  kind: string;
  title: string;
  body: string;
  tags: string;
  href?: string;
  linkLabel?: string;
  pin: string;
};

const moreWork: Card[] = [
  {
    kind: 'Android game',
    title: 'Last Light',
    body: 'A one-thumb neon arcade game: turn a shield around a glowing core to block incoming shapes, and let the healing light through. 8 levels, 4 difficulties.',
    tags: 'TypeScript · Canvas · Capacitor',
    pin: 'bg-red-pen',
  },
  {
    kind: 'Hackathon · team of 4',
    title: 'Oushudh Bondhu',
    body: 'Photograph a handwritten prescription; Gemma explains each medicine in plain Bangla and builds a dose timetable. I wrote the submission and drew the architecture and user flows.',
    tags: 'Gemma · OCR · Python',
    pin: 'bg-[#3b82c4]',
  },
  {
    kind: 'EdTech · team of 2',
    title: 'ReplayCS',
    body: 'Students predict what a program does next before the answer is revealed. I led the UX redesign and front-end: a 4-step onboarding, a calmer landing page and a light theme.',
    tags: 'SvelteKit · Playwright',
    href: 'https://replaycs.vercel.app',
    linkLabel: 'live site',
    pin: 'bg-[#2f9e6a]',
  },
  {
    kind: 'Tool',
    title: 'Messages Archive Viewer',
    body: 'An offline viewer for Android SMS / MMS / RCS backups that looks like Google Messages. Nothing is uploaded, and the Android version asks for zero permissions.',
    tags: 'JavaScript · IndexedDB · Android',
    pin: 'bg-[#e0a526]',
  },
  {
    kind: 'Research',
    title: 'BanglaSlumNet',
    body: 'Finding informal settlements in Dhaka from Sentinel-2 imagery, where optical-only models confuse dense formal areas with slums. Fuses a vision-language backbone with night lights, population and road data.',
    tags: 'PyTorch · Earth Engine · VLMs',
    href: 'https://github.com/namaray/BanglaSlumNet',
    linkLabel: 'GitHub',
    pin: 'bg-red-pen',
  },
  {
    kind: 'Research · team',
    title: 'Does structure matter?',
    body: 'An empirical study of whether data-flow graphs help code transformers (CodeBERT, GraphCodeBERT, UniXcoder) find vulnerabilities in decompiled Android apps.',
    tags: 'Transformers · Android security',
    pin: 'bg-[#3b82c4]',
  },
  {
    kind: 'Research',
    title: 'Anomaly detection, in bad light',
    body: 'A benchmark of test-time "rescue" preprocessing versus training-time augmentation for PatchCore and PaDiM under adverse imaging, on MVTec-AD and VisA, with proper significance tests.',
    tags: 'PatchCore · PaDiM · stats',
    pin: 'bg-[#2f9e6a]',
  },
  {
    kind: 'Study platform',
    title: 'Linguistic uncanny valley',
    body: 'A web app for a writing study: participants write, an LLM edits their text within seconds, and they review the AI versions. Runs entirely on free tiers.',
    tags: 'Node · Turso · Groq · Vercel',
    pin: 'bg-[#e0a526]',
  },
  {
    kind: 'On this site',
    title: 'Résumé chatbot',
    body: 'Retrieval-augmented chatbot grounded in my real documents, so it won’t make up skills I don’t have. It’s the bubble in the bottom-right corner.',
    tags: 'FastAPI · RAG · Render',
    pin: 'bg-red-pen',
  },
];

const TAG_COLORS: HighlightColor[] = ['yellow', 'pink', 'blue', 'green'];

function Stamp({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 1.6, rotate: -14 }}
      whileInView={{ opacity: 0.85, scale: 1, rotate: -6 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 }}
      className="inline-block border-[2.5px] border-red-pen text-red-pen font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-[3px] mix-blend-multiply"
    >
      {children}
    </motion.span>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-start py-14 md:py-16 border-b border-dashed border-pencil/30 last:border-b-0`}
    >
      <div className="w-full lg:w-[48%] shrink-0 px-2 lg:pt-4">
        <Polaroid
          src={project.bgImage}
          alt={project.title}
          caption={project.caption}
          rotate={flip ? 2 : -2}
          imageClassName={project.imageClassName}
          bg={project.bgColor}
          aspect="aspect-[16/10]"
        >
          {project.videoLink ? (
            <iframe
              src={project.videoLink}
              title={`${project.title} video`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : undefined}
        </Polaroid>
      </div>

      <div className="w-full lg:w-[52%]">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">Entry 0{index + 1}</span>
          <Stamp>{project.stamp}</Stamp>
        </div>
        <h3 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-ink leading-[1.02]">
          {project.title}
        </h3>
        <p className="font-hand text-2xl md:text-3xl text-red-pen mt-2 mb-6">{project.subtitle}</p>

        <ul className="space-y-3 mb-7">
          {project.did.map((d) => (
            <li key={d} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
              <span aria-hidden className="font-hand text-2xl leading-[1.1] text-red-pen shrink-0">✓</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <p className="flex flex-wrap gap-x-3 gap-y-2 font-hand text-2xl text-ink">
          {project.tech.map((t, i) => (
            <Highlight key={t} color={TAG_COLORS[(i + index) % TAG_COLORS.length]}>
              {t}
            </Highlight>
          ))}
        </p>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-7 font-mono text-sm uppercase tracking-widest text-ink border-b-2 border-ink hover:text-red-pen hover:border-red-pen transition-colors"
          >
            Source on GitHub ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}

function IndexCard({ card, index }: { card: Card; index: number }) {
  const rotate = [-1.5, 1, -0.5, 1.5, -1, 0.5][index % 6];
  const external = card.href?.startsWith('http');

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ rotate: 0, y: -6 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 130, damping: 16, delay: (index % 3) * 0.08 }}
      className="relative index-card px-5 pt-3 pb-5 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_10px_24px_-12px_rgba(29,43,79,0.35)]"
    >
      <span aria-hidden className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${card.pin} shadow-[inset_-2px_-2px_3px_rgba(0,0,0,0.25),0_2px_3px_rgba(0,0,0,0.25)]`} />
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-pencil h-[18px]">{card.kind}</p>
      <h4 className="font-serif text-2xl font-semibold text-ink leading-[26px] h-[26px] mb-[12px] truncate">{card.title}</h4>
      <p className="font-hand text-[22px] leading-[26px] text-ink-soft">{card.body}</p>
      <div className="mt-[26px] flex items-end justify-between gap-3 font-mono text-[11px] text-pencil leading-[26px]">
        <span>{card.tags}</span>
        {card.href &&
          (external ? (
            <a href={card.href} target="_blank" rel="noopener noreferrer" className="shrink-0 text-red-pen underline underline-offset-4 hover:no-underline">
              {card.linkLabel} ↗
            </a>
          ) : (
            <Link href={card.href} className="shrink-0 text-red-pen underline underline-offset-4 hover:no-underline">
              {card.linkLabel} →
            </Link>
          ))}
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative pl-10 pr-5 md:pl-28 md:pr-14 py-20 md:py-28 border-t-2 border-dashed border-rule scroll-mt-14">
      <PageHeading page="02" kicker="Experiments log" title="Selected work" note="the ones I’m proudest of" />

      <div>
        {projects.map((project, idx) => (
          <ProjectEntry key={project.title} project={project} index={idx} />
        ))}
      </div>

      <div className="mt-20 md:mt-28">
        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-12">
          Also pinned to the corkboard
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
          {moreWork.map((card, i) => (
            <IndexCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
