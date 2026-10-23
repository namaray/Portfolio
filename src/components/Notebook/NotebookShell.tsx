'use client';
import { MotionConfig } from 'framer-motion';
import NotebookTabs from './NotebookTabs';

// The notebook itself: a ruled sheet on a dotted desk, with punched holes down the
// left edge and index tabs on the right
export default function NotebookShell({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <main className="desk min-h-screen md:py-10 md:px-6 font-serif text-ink selection:bg-hl-yellow">
        <div className="relative mx-auto max-w-[1120px]">
          <div className="relative paper-ruled md:rounded-r-md shadow-[0_1px_2px_rgba(0,0,0,0.06),0_30px_60px_-30px_rgba(29,43,79,0.45)] overflow-x-clip">
            <div aria-hidden className="spiral hidden md:block absolute left-1 top-0 bottom-0 w-7 z-30" />
            <NotebookTabs />
            {children}
          </div>
        </div>
      </main>
    </MotionConfig>
  );
}
