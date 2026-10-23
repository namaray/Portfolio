'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Strip of masking tape with torn ends
export function Tape({ className = '', rotate = -4 }: { className?: string; rotate?: number }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 h-7 w-24 bg-[rgba(238,222,170,0.78)] shadow-[0_1px_2px_rgba(0,0,0,0.08)] ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath:
          'polygon(3% 0, 97% 4%, 100% 22%, 96% 40%, 100% 62%, 97% 82%, 99% 100%, 2% 96%, 0 78%, 4% 58%, 0 40%, 3% 20%)',
      }}
    />
  );
}

// Taped polaroid photo that straightens up on hover
export function Polaroid({
  src,
  alt,
  caption,
  rotate = -2,
  className = '',
  imageClassName = 'object-cover',
  aspect = 'aspect-[4/3]',
  bg = '#e9e4d8',
  priority = false,
  children,
}: {
  src?: string;
  alt: string;
  caption?: string;
  rotate?: number;
  className?: string;
  imageClassName?: string;
  aspect?: string;
  bg?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ rotate: 0, scale: 1.02, y: -4 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      className={`relative bg-white p-3 pb-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_28px_-8px_rgba(29,43,79,0.28)] ${className}`}
    >
      <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate={rotate > 0 ? -3 : 3} />
      <div className={`relative w-full overflow-hidden ${aspect}`} style={{ backgroundColor: bg }}>
        {children ??
          (src && <Image src={src} alt={alt} fill sizes="(max-width: 768px) 90vw, 560px" className={imageClassName} priority={priority} />)}
      </div>
      {caption && (
        <figcaption className="font-hand text-2xl text-ink-soft text-center pt-2 pb-1 leading-tight">{caption}</figcaption>
      )}
    </motion.figure>
  );
}

const STICKY_BG = {
  yellow: 'bg-sticky',
  pink: 'bg-sticky-pink',
  blue: 'bg-sticky-blue',
  green: 'bg-sticky-green',
};

// Sticky note with a slight curl shadow
export function StickyNote({
  children,
  color = 'yellow',
  rotate = 2,
  className = '',
}: {
  children: React.ReactNode;
  color?: keyof typeof STICKY_BG;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotate * 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      whileHover={{ rotate: 0, y: -3 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 140, damping: 14 }}
      className={`relative p-5 ${STICKY_BG[color]} shadow-[0_1px_1px_rgba(0,0,0,0.08),0_10px_18px_-10px_rgba(0,0,0,0.35)] ${className}`}
    >
      <span aria-hidden className="absolute top-0 left-0 right-0 h-6 bg-black/[0.035]" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

// Section heading: page number + kicker in mono, big serif title, handwritten aside
export function PageHeading({
  page,
  kicker,
  title,
  note,
}: {
  page: string;
  kicker: string;
  title: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-pencil mb-4"
      >
        <span className="text-red-pen font-semibold">p. {page}</span>
        <span className="h-px w-8 bg-pencil/40" />
        <span>{kicker}</span>
      </motion.div>
      <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-ink leading-[0.95]"
        >
          {title}
        </motion.h2>
        {note && (
          <motion.p
            initial={{ opacity: 0, rotate: -6 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-hand text-2xl md:text-3xl text-red-pen md:pb-2"
          >
            {note}
          </motion.p>
        )}
      </div>
    </div>
  );
}
