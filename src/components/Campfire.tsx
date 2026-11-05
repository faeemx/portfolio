'use client';

import { useEffect, useState } from 'react';
import AsciiText from './AsciiText';

const FIRE_FRAMES = [
  `
    (  )
   (  ) )
  ( (  )  )
  _\\|/\\|/\\_
 `,
  `
   (  )
  ( ( ) )
   (  ( ) )
  _\\|/\\|/\\_
 `,
  `
    ( )
   ( (  )
  (  (  ) )
  _\\|/\\|/\\_
 `
];

const SMOKE_MESSAGES = [
  "   collaborate on a project...   ",
  "   talk about dystopian fiction...   ",
  "   swap Letterboxd reviews...   "
];

export default function Campfire() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % FIRE_FRAMES.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative items-center text-center">
      <div className="absolute top-10 w-full text-center opacity-10 pointer-events-none">
        <span className="text-9xl font-bold tracking-widest text-[var(--accent)]">REST</span>
      </div>
      
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-[var(--accent)]">
          <AsciiText text="[05] The Campfire" delay={0} />
        </h2>
        
        <div className="mb-4 h-6 text-[var(--text-dim)] animate-pulse tracking-widest text-sm">
          {SMOKE_MESSAGES[frame % SMOKE_MESSAGES.length]}
        </div>
        
        <pre className="ascii-art text-[var(--accent)] text-lg mb-12 transition-all">
          {FIRE_FRAMES[frame]}
        </pre>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base">
          <a href="https://github.com/faeemaxp" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors underline decoration-dotted underline-offset-4">GitHub</a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors underline decoration-dotted underline-offset-4">Freelancer / Upwork</a>
          <a href="https://letterboxd.com/faeem/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors underline decoration-dotted underline-offset-4">Letterboxd</a>
          <a href="mailto:your-email@example.com" className="hover:text-[var(--accent)] transition-colors underline decoration-dotted underline-offset-4">Email</a>
        </div>
        
        <p className="mt-24 text-xs text-[var(--text-dim)] uppercase tracking-[0.2em]">
          End of the journey. Thanks for exploring.
        </p>
      </div>
    </section>
  );
}