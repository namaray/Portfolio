'use client';
import { motion } from 'framer-motion';
import { Circled } from '@/components/Notebook/Doodles';
import { PageHeading } from '@/components/Notebook/Paper';

const timeline = [
  {
    when: '2022 – 2026',
    kind: 'School',
    title: 'B.Sc. Computer Science & Engineering',
    place: 'United International University',
    detail: 'Graduating Nov 2026 (expected).',
    grade: 'CGPA 3.93 / 4.00',
  },
  {
    when: '2021 – 2024',
    kind: 'Work',
    title: 'Freelance Annotator',
    place: 'TransPerfect DataForce · Remote',
    detail:
      'Annotated audio and video data and interpreted audio files to support the training of AI and machine learning models.',
  },
  {
    when: '2021',
    kind: 'School',
    title: 'International Advanced Level (IAL)',
    place: 'Singapore International School',
    grade: '1A 2B',
  },
  {
    when: '2019',
    kind: 'School',
    title: 'IGCSE',
    place: 'Academia',
    grade: '1A* 1A 3B',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative pl-10 pr-5 md:pl-28 md:pr-14 py-20 md:py-28 border-t-2 border-dashed border-rule scroll-mt-14">
      <PageHeading page="04" kicker="Experience & education" title="How I got here" note="newest on top" />

      <ol className="relative ml-2 md:ml-4">
        <motion.svg
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-3 h-[calc(100%-1rem)] overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 10 100"
          initial={{ clipPath: 'inset(0 -100% 100% -100%)' }}
          whileInView={{ clipPath: 'inset(0 -100% 0% -100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        >
          <path
            d="M5 0 C 3 20, 7 40, 5 60 S 4 85, 5 100"
            fill="none"
            stroke="var(--color-ink-soft)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </motion.svg>

        {timeline.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-10 md:pl-14 pb-14 last:pb-0"
          >
            <span aria-hidden className="absolute left-[-3px] top-3 w-[18px] h-[18px] rounded-full border-2 border-ink bg-paper" />
            <div className="grid md:grid-cols-[170px_1fr] gap-2 md:gap-8">
              <div>
                <p className="font-hand text-3xl text-red-pen leading-none">{item.when}</p>
                <span
                  className={`inline-block mt-2 font-mono text-[11px] uppercase tracking-widest px-2 py-0.5 ${
                    item.kind === 'Work' ? 'bg-sticky-blue' : 'bg-sticky-green'
                  }`}
                >
                  {item.kind}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink leading-tight">{item.title}</h3>
                <p className="font-mono text-sm uppercase tracking-wider text-ink-soft mt-1">{item.place}</p>
                {item.detail && <p className="text-lg leading-relaxed text-ink-soft mt-3 max-w-[36rem]">{item.detail}</p>}
                {item.grade && (
                  <p className="font-hand text-3xl text-ink mt-3">
                    <Circled delay={0.5}>{item.grade}</Circled>
                  </p>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
