import AsciiText from './AsciiText';

const BOOKS = `
      ______ ______
    _/      Y      \\_
   // ~~ ~~ | ~~ ~  \\\\
  // ~ ~ ~~ | ~~~ ~~ \\\\
 //________.|.________\\\\
\`----------\`-'\`----------'
`;

export default function Library() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute top-10 right-0 w-full text-right opacity-10 pointer-events-none">
        <span className="text-9xl font-bold tracking-widest text-[var(--text-dim)]">LIBRARY</span>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row-reverse items-start md:items-center gap-12">
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">
            <AsciiText text="[02] The Library" delay={0} />
          </h2>
          <div className="text-[var(--text-primary)] space-y-4 max-w-2xl">
            <p className="text-lg leading-relaxed text-[var(--text-primary)]">
              A quiet place for thoughts, collected knowledge, and narratives that bend reality.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-6">
              
              <div className="border border-[var(--text-dim)] p-5 rounded-lg bg-[rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-[var(--cyan)] transition-colors duration-500 group">
                <h3 className="text-lg font-bold mb-4 text-[var(--cyan)] flex items-center gap-2">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">›</span> Literature & Media
                </h3>
                <ul className="space-y-4 text-sm text-[var(--text-primary)]">
                  <li className="flex gap-2">
                    <span className="text-[var(--text-dim)] mt-0.5">■</span> 
                    <span><strong className="text-white">Dystopian Worlds</strong><br/><span className="text-xs text-[var(--text-dim)]">1984 by George Orwell</span></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--text-dim)] mt-0.5">■</span> 
                    <span><strong className="text-white">Psychological & Supernatural Narratives</strong><br/><span className="text-xs text-[var(--text-dim)]">Jujutsu Kaisen and various Manhwa</span></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--text-dim)] mt-0.5">■</span> 
                    <span><strong className="text-white">Science & Logic</strong><br/><span className="text-xs text-[var(--text-dim)]">Exploring the intersections of Physics, Chemistry, and Biology</span></span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        
        <div className="flex-1 text-[var(--text-dim)] flex justify-center hover:text-[var(--purple)] transition-colors duration-1000">
          <pre className="ascii-art text-xs sm:text-base leading-tight">
            {BOOKS}
          </pre>
        </div>
      </div>
    </section>
  );
}