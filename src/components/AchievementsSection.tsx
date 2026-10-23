'use client';
import { motion } from 'framer-motion';
import { PageHeading, Polaroid, StickyNote } from '@/components/Notebook/Paper';

type Medal = 'gold' | 'silver' | 'bronze';

const MEDAL = {
  gold: { bg: 'bg-[#f2c94c]', ring: 'ring-[#c99a1c]', label: 'Champion' },
  silver: { bg: 'bg-[#d5d9e0]', ring: 'ring-[#9aa1ad]', label: '1st runner-up' },
  bronze: { bg: 'bg-[#e0a676]', ring: 'ring-[#b0703d]', label: '2nd runner-up' },
};

const groups: { title: string; note: string; wins: { name: string; by: string; medal: Medal }[] }[] = [
  {
    title: 'Poster competitions',
    note: 'science & tech fests',
    wins: [
      { name: 'Robolution 2025', by: 'MIST Robotics Club', medal: 'gold' },
      { name: 'R&I Week 2025', by: 'UIU', medal: 'gold' },
      { name: '1st S.N. Bose National Science Festival', by: 'BRAC', medal: 'silver' },
    ],
  },
  {
    title: 'UIU CSE project shows',
    note: 'four shows, four podiums',
    wins: [
      { name: 'FYDP 1 (undergraduate thesis)', by: 'Fall 2025', medal: 'silver' },
      { name: 'Microprocessor Lab', by: 'Summer 2025', medal: 'silver' },
      { name: 'Electronics Lab', by: 'Spring 2025', medal: 'silver' },
      { name: 'System Analysis & Design Lab', by: 'Spring 2025', medal: 'bronze' },
    ],
  },
];

const notes = [
  {
    color: 'yellow' as const,
    kicker: 'Launchpad by UIHP@UIU',
    title: 'Pre-seed funding',
    body: 'BDT 20,000 for ShareStrength, through the DEIED project (ICT Division & World Bank).',
  },
  {
    color: 'blue' as const,
    kicker: 'Competition',
    title: 'Finalist',
    body: 'National Blockchain Olympiad (BCOL) 2025.',
  },
  {
    color: 'pink' as const,
    kicker: 'Writing',
    title: 'Bronze medal',
    body: 'The Queen’s Commonwealth Essay Competition.',
  },
  {
    color: 'green' as const,
    kicker: 'Scholarships · UIU',
    title: '6 tuition waivers',
    body: '50% waiver four times and 25% waiver twice.',
  },
];

function Sticker({ medal }: { medal: Medal }) {
  const m = MEDAL[medal];
  return (
    <span
      title={m.label}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full ${m.bg} ring-2 ${m.ring} shadow-[0_2px_3px_rgba(0,0,0,0.2)] shrink-0`}
    >
      <svg aria-hidden viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2.5l2.8 6 6.5.6-4.9 4.4 1.4 6.4L12 16.6l-5.8 3.3 1.4-6.4L2.7 9.1l6.5-.6z" fill="white" fillOpacity="0.9" />
      </svg>
    </span>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative pl-10 pr-5 md:pl-28 md:pr-14 py-20 md:py-28 border-t-2 border-dashed border-rule scroll-mt-14">
      <PageHeading page="05" kicker="Achievements" title="Gold stars" note="collected along the way" />

      <div className="grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-12">
        <div className="space-y-14">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-5">
                <h3 className="font-serif text-3xl font-semibold text-ink">{g.title}</h3>
                <span className="font-hand text-2xl text-red-pen">{g.note}</span>
              </div>
              <ul className="space-y-3">
                {g.wins.map((w, i) => (
                  <motion.li
                    key={w.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -40 }}
                      whileInView={{ scale: 1, rotate: [8, -6, 0][i % 3] }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.2 + i * 0.1 }}
                      className="inline-flex"
                    >
                      <Sticker medal={w.medal} />
                    </motion.span>
                    <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-4 border-b border-dotted border-pencil/50 pb-1">
                      <span className="text-lg md:text-xl text-ink">
                        {w.name} <span className="text-ink-soft text-base">· {w.by}</span>
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-pencil">{MEDAL[w.medal].label}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-1 items-start gap-8 lg:gap-0 px-2">
          <Polaroid src="/R&Iweek.jpg" alt="Poster presentation at UIU R&I Week 2025" caption="R&I Week 2025" rotate={-3} aspect="aspect-video" className="lg:w-[86%]" />
          <Polaroid
            src="/CSE Project Show Awards.jpg"
            alt="UIU CSE project show awards"
            caption="project show haul"
            rotate={2.5}
            className="lg:w-[80%] lg:ml-auto lg:-mt-6"
          />
          <Polaroid
            src="/launchpad.jpg"
            alt="Launchpad pre-seed funding event"
            caption="Launchpad day"
            rotate={-1.5}
            className="col-span-2 sm:col-span-1 lg:w-[84%] lg:-mt-4 lg:ml-4"
          />
        </div>
      </div>

      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {notes.map((n, i) => (
          <StickyNote key={n.title} color={n.color} rotate={[-2, 1.5, -1, 2][i]}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">{n.kicker}</p>
            <p className="font-hand text-4xl font-bold text-ink leading-none mt-2 mb-2">{n.title}</p>
            <p className="text-base leading-snug text-ink-soft">{n.body}</p>
          </StickyNote>
        ))}
      </div>
    </section>
  );
}
