'use client';
import { motion } from 'framer-motion';
import { Highlight, type HighlightColor } from '@/components/Notebook/Doodles';
import { PageHeading, Tape } from '@/components/Notebook/Paper';

const groups: { title: string; color: HighlightColor; items: string[] }[] = [
  {
    title: 'Research methods',
    color: 'pink',
    items: ['Focus groups', 'Usability testing', 'Thematic analysis', 'User-centered design', 'Qualtrics · Taguette'],
  },
  {
    title: 'AI & vision',
    color: 'blue',
    items: ['Stereo depth', 'Segmentation', 'Object detection & tracking', 'OCR', 'Whisper / TTS', 'Quantized LLMs'],
  },
  {
    title: 'Languages',
    color: 'yellow',
    items: ['Python', 'C / C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'HTML / CSS'],
  },
  {
    title: 'Web',
    color: 'green',
    items: ['React', 'Vite', 'Tailwind CSS', 'Laravel', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Hardware',
    color: 'pink',
    items: ['Jetson Orin Nano Super', 'Raspberry Pi', 'Arduino', 'Stepper motor control', '3D printing'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative pl-10 pr-5 md:pl-28 md:pr-14 py-20 md:py-28 border-t-2 border-dashed border-rule scroll-mt-14">
      <PageHeading page="03" kicker="Toolbox" title="What’s in the pencil case" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative paper-grid p-6 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_32px_-16px_rgba(29,43,79,0.35)]"
      >
        <Tape className="-top-3 left-10" rotate={-6} />
        <Tape className="-top-3 right-10" rotate={5} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {groups.map((g, gi) => (
            <div key={g.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-pencil mb-3">
                <span className="text-red-pen">{String.fromCharCode(65 + gi)}.</span> {g.title}
              </h3>
              <ul className="space-y-0.5">
                {g.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                    className="font-hand text-[28px] leading-[1.25] text-ink"
                  >
                    {i === 0 ? <Highlight color={g.color}>{item}</Highlight> : item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex items-end">
            <p className="font-hand text-2xl leading-snug text-red-pen rotate-[-3deg]">
              + always learning whatever the next project needs
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
