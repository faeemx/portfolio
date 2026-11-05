'use client';

import { useEffect, useState } from 'react';
import AsciiText from './AsciiText';

const TELESCOPE = `
       .
      . .
    .  .  .
   .   .   .
  .    .    .
  \\___/ \\___/
    |     |
    |     |
   / \\   / \\
  /   \\ /   \\
`;

export default function Observatory() {
  const [constellation, setConstellation] = useState('');

  useEffect(() => {
    const words = [
      "*  T U I S  *",
      ".  C L I  .",
      "* H A R D W A R E .",
      ".  I O T  *"
    ];
    let idx = 0;
    const interval = setInterval(() => {
      setConstellation(words[idx]);
      idx = (idx + 1) % words.length;
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute top-10 right-0 w-full text-right opacity-10 pointer-events-none">
        <span className="text-9xl font-bold tracking-widest text-[var(--accent)]">LOOKING UP</span>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 order-2 md:order-1 text-[var(--text-dim)] flex justify-center">
          <pre className="ascii-art text-xs sm:text-base">
            {TELESCOPE}
          </pre>
        </div>
        
        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">
            <AsciiText text="[04] The Observatory" delay={0} />
          </h2>
          <div className="text-[var(--text-primary)] space-y-4 max-w-md">
            <p>
              Looking into the night sky, finding shapes in the noise. 
              These are the technologies and paths I am currently navigating.
            </p>
            
            <div className="h-24 mt-8 flex items-center justify-center border border-[var(--text-dim)] border-dashed rounded-md bg-[rgba(0,0,0,0.3)]">
              <span className="font-mono text-2xl tracking-[0.5em] text-[var(--accent)] transition-opacity duration-1000">
                {constellation || "..."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}