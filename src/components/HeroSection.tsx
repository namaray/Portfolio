'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Highlight, Arrow, Star } from '@/components/Notebook/Doodles';
import { Polaroid, StickyNote } from '@/components/Notebook/Paper';

const TITLES = ['researcher', 'engineer', 'designer', 'developer'];

// "Student + ___": each word gets scribbled out in red pen before the next is written in
function ScribbledTitle() {
  const [index, setIndex] = useState(0);
  const [struck, setStruck] = useState(false);

  useEffect(() => {
    let swap: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setStruck(true);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % TITLES.length);
        setStruck(false);
      }, 700);
    }, 2800);
    return () => {
      clearInterval(interval);
      clearTimeout(swap);
    };
  }, []);

  return (
    <span className="relative inline-block min-w-[6.5ch] text-left align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block text-ink"
        >
          {TITLES[index]}
        </motion.span>
      </AnimatePresence>
      <motion.svg
        aria-hidden
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[0.7em] pointer-events-none overflow-visible"
        initial={false}
        animate={{ clipPath: struck ? 'inset(-50% 0% -50% 0)' : 'inset(-50% 100% -50% 0)' }}
        transition={{ duration: struck ? 0.45 : 0 }}
      >
        <path
          d="M2 24 L 30 14 L 50 28 L 80 12 L 110 26 L 140 12 L 170 26 L 198 14"
          fill="none"
          stroke="var(--color-red-pen)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </span>
  );
}

const focus = [
  'HCI & accessibility research',
  'Computer vision on edge devices',
  'Embedded hardware & 3D printing',
  'Full-stack web apps',
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative pl-10 pr-5 md:pl-28 md:pr-14 pt-10 md:pt-16 pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-between gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-pencil mb-10 md:mb-16"
      >
        <span>Field notebook · Vol. 04</span>
        <span>Dhaka, Bangladesh</span>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_340px] gap-14 lg:gap-10 items-start">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[15vw] sm:text-7xl md:text-8xl lg:text-[104px] font-semibold tracking-tight leading-[0.9] text-ink"
          >
            Namare Shakib
            <br />
            <span className="relative inline-block">
              Angkon
              <Star className="absolute -right-12 -top-2 w-9 h-9 md:w-11 md:h-11 rotate-12" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-hand text-4xl md:text-5xl text-ink-soft mt-6 md:mt-8"
          >
            Student + <ScribbledTitle />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-[34rem] text-xl md:text-2xl leading-relaxed text-ink-soft"
          >
            Final-year CSE student at United International University. I build{' '}
            <Highlight>accessible technology</Highlight> — smart glasses for people with visual impairments, a
            portable Braille printer — and I <Highlight color="pink">test it with the people</Highlight> who will
            use it.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } } }}
            className="mt-8 space-y-1.5"
          >
            {focus.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-center gap-3 font-hand text-2xl md:text-[28px] text-ink"
              >
                <span aria-hidden className="relative inline-flex w-5 h-5 border-2 border-ink/70 rounded-[3px] shrink-0">
                  <svg viewBox="0 0 20 20" className="absolute -top-1.5 -left-0.5 w-6 h-6 overflow-visible">
                    <path d="M3 10 L8 15 L19 1" fill="none" stroke="var(--color-red-pen)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#contact"
              className="inline-block bg-ink text-paper px-6 py-3 font-mono text-sm uppercase tracking-widest rounded-[3px] shadow-[3px_3px_0_var(--color-red-pen)] hover:shadow-[1px_1px_0_var(--color-red-pen)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Write to me
            </a>
            <a href="#projects" className="font-hand text-3xl text-ink hover:text-red-pen transition-colors">
              flip to the projects ↓
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] lg:mt-6">
          <Polaroid src="/profile.jpg" alt="Namare Shakib Angkon" caption="me, mid-build" rotate={3} aspect="aspect-[4/5]" priority />
          <Arrow className="hidden lg:block absolute -left-24 top-24 w-24 -scale-x-100 rotate-[200deg]" />

          <StickyNote rotate={-4} className="mt-10 lg:mt-0 lg:absolute lg:-left-16 lg:-bottom-32 w-60 mx-auto">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-1">Right now</p>
            <p className="font-hand text-[26px] leading-[1.1] text-ink">
              Building <strong>ARGUS</strong>: on-device AI glasses that help visually impaired people navigate. (My thesis!)
            </p>
          </StickyNote>
        </div>
      </div>
    </section>
  );
}
