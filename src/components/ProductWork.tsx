'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies, toolbox, workflow, type CaseImage, type CaseStudy } from '@/appData/caseStudies';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 },
};

const Figure = ({ image, className = '' }: { image: CaseImage; className?: string }) => (
  <figure className={className}>
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="w-full h-auto"
      />
    </div>
    {image.caption && (
      <figcaption className="mt-3 text-sm text-gray-500">{image.caption}</figcaption>
    )}
  </figure>
);

const CaseStudyBlock = ({ study, index }: { study: CaseStudy; index: number }) => (
  <motion.article
    {...fadeUp}
    id={study.id}
    className="scroll-mt-32 py-24 border-t border-white/5 first:border-t-0"
  >
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <span className="text-accent font-bold tracking-widest uppercase text-sm">0{index + 1}</span>
      <span className="w-12 h-px bg-white/20"></span>
      <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">{study.kicker}</span>
    </div>

    <h3 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-12 text-white leading-[0.9]">
      {study.title}
    </h3>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
      <div className="space-y-8">
        <p className="text-xl text-gray-300 leading-relaxed">{study.context}</p>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">My role</h4>
          <p className="text-lg text-gray-300 leading-relaxed">{study.role}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The problem</h4>
          <p className="text-lg text-gray-400 leading-relaxed">{study.problem}</p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-5">What I did</h4>
        <ul className="space-y-4">
          {study.did.map((item, i) => (
            <li key={i} className="flex gap-4 text-lg text-gray-300 leading-relaxed">
              <span className="mt-3 h-px w-4 shrink-0 bg-white/40"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {study.beforeAfter && (
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Figure image={study.beforeAfter.before} />
        <Figure image={study.beforeAfter.after} />
      </div>
    )}

    {study.images.map((image) => (
      <Figure
        key={image.src}
        image={image}
        className={image.width < 1000 ? 'max-w-xl mb-6' : 'mb-6'}
      />
    ))}

    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-10">
      <div className="flex flex-wrap gap-3">
        {study.stack.map((t) => (
          <span
            key={t}
            className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {study.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
          >
            {link.label}
            <span className="w-6 h-[2px] bg-white group-hover:bg-accent group-hover:w-10 transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </div>
  </motion.article>
);

export default function ProductWork() {
  return (
    <main className="bg-background min-h-screen relative overflow-hidden">
      {/* Intro */}
      <section className="pt-40 pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-8"
          >
            Namare Shakib Angkon · Product & Web
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-12 max-w-6xl"
          >
            I find the friction, write it down, and ship the fix.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mb-12"
          >
            Final-year CSE student at United International University (CGPA 3.78). Below are four projects
            where I worked on the product side of web applications: spotting what confuses users,
            documenting requirements, drawing user flows, building the interface and testing it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-x-10 gap-y-4 text-sm font-bold uppercase tracking-widest"
          >
            <a href="mailto:namare.shakib@gmail.com" className="text-white hover:text-accent transition-colors">
              namare.shakib@gmail.com
            </a>
            <a href="https://github.com/namaray" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/namare-shakib-angkon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
              Full portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How I work */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-16"
          >
            How I Work
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {workflow.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-8 flex flex-col"
              >
                <span className="text-accent font-bold tracking-widest text-sm mb-6">0{i + 1}</span>
                <span className="text-2xl font-black uppercase tracking-tight text-white mb-2">{item.step}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">{item.duty}</span>
                <span className="text-gray-400 leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white"
          >
            Case Studies
          </motion.h2>
          {caseStudies.map((study, idx) => (
            <CaseStudyBlock key={study.id} study={study} index={idx} />
          ))}
        </div>
      </section>

      {/* Toolbox */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-16"
          >
            Toolbox
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {toolbox.map((group) => (
              <motion.div key={group.group} {...fadeUp}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">{group.group}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="mt-20 text-lg text-gray-400 leading-relaxed max-w-3xl">
            I also build AI and hardware projects, including on-device smart glasses for the visually
            impaired and a portable Braille printer.{' '}
            <Link href="/#projects" className="text-white underline underline-offset-4 hover:text-accent transition-colors">
              See them on the main portfolio
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-32 px-8 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-8">
            Let&apos;s Talk.
          </h2>
          <a
            href="mailto:namare.shakib@gmail.com"
            className="text-2xl md:text-4xl font-medium text-gray-400 hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-2 inline-block break-all"
          >
            namare.shakib@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
