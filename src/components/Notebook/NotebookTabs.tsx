'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const tabs = [
  { id: 'about', label: 'About', bg: 'bg-sticky' },
  { id: 'projects', label: 'Projects', bg: 'bg-sticky-pink' },
  { id: 'skills', label: 'Toolbox', bg: 'bg-sticky-blue' },
  { id: 'experience', label: 'Path', bg: 'bg-sticky-green' },
  { id: 'achievements', label: 'Wins', bg: 'bg-sticky' },
  { id: 'contact', label: 'Contact', bg: 'bg-sticky-pink' },
];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

// Colored index tabs sticking out of the notebook's right edge (wide screens),
// and a sticky header strip on smaller screens
export default function NotebookTabs() {
  const active = useActiveSection();

  return (
    <>
      <nav
        aria-label="Sections"
        className="sticky top-0 z-40 min-[1440px]:hidden bg-paper/90 backdrop-blur-sm border-b border-rule"
      >
        <div className="flex items-center gap-4 px-4 md:px-8 h-14">
          <Link href="/" className="font-hand text-3xl font-bold text-ink shrink-0 leading-none">
            NSA.
          </Link>
          <ul className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar text-sm font-mono">
            {tabs.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className={`block px-2.5 py-1 rounded-sm whitespace-nowrap text-ink transition-colors ${
                    active === t.id ? t.bg : 'hover:bg-paper-deep'
                  }`}
                >
                  {t.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/product" className="block px-2.5 py-1 whitespace-nowrap text-red-pen hover:underline">
                Case studies ↗
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav
        aria-label="Sections"
        className="hidden min-[1440px]:block absolute left-full top-0 h-full w-32 pointer-events-none"
      >
        <ul className="sticky top-28 flex flex-col gap-2 pointer-events-auto">
          {tabs.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                className={`block ${t.bg} pl-4 pr-3 py-2.5 rounded-r-md font-hand text-2xl leading-none text-ink shadow-[2px_2px_4px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
                  active === t.id ? 'translate-x-3 font-bold' : '-translate-x-1 hover:translate-x-1'
                }`}
              >
                {t.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/product"
              className="block pl-4 pr-3 py-2 font-mono text-xs uppercase tracking-widest text-red-pen hover:translate-x-1 transition-transform"
            >
              Case
              <br />
              studies ↗
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
