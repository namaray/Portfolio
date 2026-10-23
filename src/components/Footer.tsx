'use client';
import { motion } from 'framer-motion';
import { Underline } from '@/components/Notebook/Doodles';
import { PageHeading } from '@/components/Notebook/Paper';

const links = [
  { label: 'GitHub', href: 'https://github.com/namaray' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/namare-shakib/' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative pl-10 pr-5 md:pl-28 md:pr-14 pt-20 md:pt-28 pb-10 border-t-2 border-dashed border-rule scroll-mt-14">
      <PageHeading page="06" kicker="Contact" title="Let’s talk." />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 90, damping: 16 }}
        className="relative max-w-[760px] p-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.06),0_24px_40px_-20px_rgba(29,43,79,0.4)]"
        style={{
          background:
            'repeating-linear-gradient(135deg, var(--color-red-pen) 0 14px, #fffefa 14px 22px, #3b6fb6 22px 36px, #fffefa 36px 44px)',
        }}
      >
        <div className="relative bg-[#fffefa] px-6 py-8 md:px-12 md:py-12">
          <div aria-hidden className="absolute top-5 right-5 md:top-7 md:right-7 w-16 h-20 md:w-20 md:h-24 border-2 border-dashed border-pencil/50 flex flex-col items-center justify-center rotate-3">
            <span className="font-hand text-3xl text-red-pen leading-none">✉</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-pencil mt-1">Dhaka</span>
          </div>

          <p className="font-hand text-3xl md:text-4xl text-ink mb-5 pr-20">Dear reader,</p>
          <p className="text-lg md:text-xl leading-relaxed text-ink-soft max-w-[32rem]">
            I&apos;m looking for research and engineering roles in HCI, accessibility and applied AI. If you&apos;re
            working on something for people who usually get left out of the spec, I&apos;d love to hear about it.
          </p>

          <a
            href="mailto:namare.shakib@gmail.com"
            className="inline-block mt-8 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-ink hover:text-red-pen transition-colors break-all"
          >
            <Underline delay={0.5}>namare.shakib@gmail.com</Underline>
          </a>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <ul className="flex gap-6">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm uppercase tracking-widest text-ink border-b-2 border-ink/30 hover:border-red-pen hover:text-red-pen transition-colors"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-hand text-3xl text-ink-soft -rotate-2">— Angkon</p>
          </div>
        </div>
      </motion.div>

      <div className="mt-24 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-pencil">
        <p>&copy; {new Date().getFullYear()} Namare Shakib Angkon</p>
        <p>No pages were torn out in the making of this notebook</p>
      </div>
    </footer>
  );
}
