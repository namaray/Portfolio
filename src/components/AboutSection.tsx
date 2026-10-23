'use client';
import { motion } from 'framer-motion';
import { Highlight, Underline, Circled } from '@/components/Notebook/Doodles';
import { PageHeading, StickyNote } from '@/components/Notebook/Paper';

const steps = [
  { title: 'Listen', body: 'Focus groups & interviews with the people it’s for', color: 'yellow' },
  { title: 'Define', body: 'Turn what they said into requirements', color: 'pink' },
  { title: 'Build', body: 'Hardware, AI and web, whatever it needs', color: 'blue' },
  { title: 'Test', body: 'Usability studies, then back to listening', color: 'green' },
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="relative pl-10 pr-5 md:pl-28 md:pr-14 py-20 md:py-28 border-t-2 border-dashed border-rule scroll-mt-14">
      <PageHeading page="01" kicker="About" title="Hello there." note="(the short version)" />

      <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="space-y-7 text-xl md:text-2xl leading-[1.6] text-ink-soft max-w-[40rem]"
        >
          <p>
            I&apos;m a final-year Computer Science &amp; Engineering student at{' '}
            <span className="text-ink font-medium">United International University</span>. I work in{' '}
            <Highlight color="blue">HCI</Highlight>, building accessible technology, from AI-powered embedded
            hardware to web apps, and testing it with the people who&apos;ll use it.
          </p>
          <p>
            Most of my projects start with a <Underline>conversation, not code</Underline>. For ARGUS and the
            Braille printer I planned and moderated focus groups with visually impaired participants, ran usability
            studies, and used thematic analysis to turn what people said into design requirements.
          </p>
          <p>
            Then I build the thing: perception pipelines on a <Circled>Jetson</Circled> Orin Nano, stepper-motor
            rigs on a Raspberry Pi, 3D-printed housings, and the <Highlight color="green">web apps</Highlight>{' '}
            around them.
          </p>
        </motion.div>

        <aside className="relative space-y-8 font-hand text-[26px] leading-tight text-ink-soft lg:pt-2">
          <motion.p
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-red-pen">CGPA 3.93</span> / 4.00, graduating Nov 2026
          </motion.p>
          <motion.p
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            Thesis supervised by Dr. Novia Nurain (BUET)
          </motion.p>
          <StickyNote color="blue" rotate={2.5} className="max-w-[260px]">
            <p className="text-[24px] leading-[1.15] text-ink">
              Psst! The chat bubble in the corner is a RAG bot that answers from my résumé. Ask it anything.
            </p>
          </StickyNote>
        </aside>
      </div>

      <div className="mt-20 md:mt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil mb-6">How I work, roughly</p>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <StickyNote color={s.color} rotate={i % 2 === 0 ? -1.5 : 1.5} className="h-full">
                <span className="font-mono text-xs text-pencil">0{i + 1}</span>
                <p className="font-hand text-4xl font-bold text-ink leading-none mt-1 mb-2">{s.title}</p>
                <p className="text-base leading-snug text-ink-soft">{s.body}</p>
              </StickyNote>
              {i < steps.length - 1 && (
                <span aria-hidden className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 font-hand text-3xl text-red-pen">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="font-hand text-2xl text-red-pen mt-4 text-right pr-2">↺ and repeat</p>
      </div>
    </section>
  );
}
