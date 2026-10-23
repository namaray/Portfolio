'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HL_COLORS = {
  yellow: 'var(--color-hl-yellow)',
  pink: 'var(--color-hl-pink)',
  green: 'var(--color-hl-green)',
  blue: 'var(--color-hl-blue)',
};

export type HighlightColor = keyof typeof HL_COLORS;

// Highlighter stroke that sweeps across the text the first time it scrolls into view
export function Highlight({
  children,
  color = 'yellow',
  className = '',
}: {
  children: React.ReactNode;
  color?: HighlightColor;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });

  return (
    <span
      ref={ref}
      className={`hl ${inView ? 'is-on' : ''} ${className}`}
      style={{ backgroundImage: `linear-gradient(${HL_COLORS[color]}, ${HL_COLORS[color]})` }}
    >
      {children}
    </span>
  );
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

// Hand-drawn pen underline that draws itself in
export function Underline({
  children,
  color = 'var(--color-red-pen)',
  delay = 0.2,
}: {
  children: React.ReactNode;
  color?: string;
  delay?: number;
}) {
  return (
    <span className="relative inline-block">
      {children}
      {/* Revealed with a clip rather than pathLength: dashes break on stretched non-scaling strokes */}
      <motion.svg
        aria-hidden
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        className="absolute left-0 -bottom-[0.18em] w-full h-[0.3em] overflow-visible"
        initial={{ clipPath: 'inset(-50% 100% -50% 0)' }}
        whileInView={{ clipPath: 'inset(-50% 0% -50% 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: 'easeInOut' }}
      >
        <path
          d="M2 8 C 40 3, 80 11, 120 6 S 180 4, 198 7"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </span>
  );
}

// Loose pen circle around a word
export function Circled({
  children,
  color = 'var(--color-red-pen)',
  delay = 0.3,
}: {
  children: React.ReactNode;
  color?: string;
  delay?: number;
}) {
  return (
    <span className="relative inline-block px-[0.2em]">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        className="absolute -inset-x-[0.25em] -inset-y-[0.3em] w-[calc(100%+0.5em)] h-[calc(100%+0.6em)] overflow-visible pointer-events-none"
      >
        <motion.path
          d="M108 6 C 40 2, 4 20, 6 42 C 8 66, 60 78, 112 74 C 170 70, 198 52, 194 32 C 190 12, 140 2, 86 8"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          variants={draw}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: 'easeInOut' }}
        />
      </svg>
    </span>
  );
}

// Curly hand-drawn arrow; point it with the rotate/flip classes
export function Arrow({ className = '', color = 'var(--color-ink-soft)' }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 80" className={`overflow-visible ${className}`} fill="none">
      <motion.path
        d="M6 10 C 30 60, 70 70, 108 52"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={draw}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.path
        d="M92 40 L 110 51 L 94 66"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.75 }}
      />
    </svg>
  );
}

// Doodled star
export function Star({ className = '', color = 'var(--color-red-pen)' }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 50 50" className={className} fill="none">
      <path
        d="M25 4 L30 19 L46 19 L33 29 L38 45 L25 35 L12 45 L17 29 L4 19 L20 19 Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
