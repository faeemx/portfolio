'use client';

import AsciiText from './AsciiText';

const NEOFETCH = `
  ┌──────────────────────────┐
  │  faeem@dev ~ $ neofetch  │
  └──────────────────────────┘
   ╭───────────────────────────╮
   │  OS      Web + Hardware   │
   │  Shell   Python 3.12      │
   │  Editor  VS Code          │
   │  HW      ESP32 + Sensors  │
   │  Uptime  18 years         │
   │  Status  Building...      │
   ╰───────────────────────────╯
`;

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-20 sm:pt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left: Intro */}
        <div className="flex-1 space-y-8 z-10">
          <div>
            <p className="text-sm text-[var(--text-dim)] tracking-[0.3em] uppercase mb-4 font-mono">
              <AsciiText text="faeem@portfolio:~$" delay={100} />
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
              <AsciiText text="Faeem" delay={300} />
              <br />
              <span className="text-[var(--accent)]">
                <AsciiText text="Ahmed" delay={600} />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-primary)] max-w-lg mt-6 leading-relaxed">
              <AsciiText
                text="Developer. Hardware Hacker. Builder. I write Python, solder ESP32s, and ship things that work."
                delay={1000}
              />
            </p>
          </div>

          {/* Terminal Block */}
          <div className="bg-black/60 border border-[var(--text-dim)] rounded-lg p-5 font-mono text-sm backdrop-blur-md max-w-md">
            <div className="flex gap-2 mb-3 border-b border-[var(--text-dim)] pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs text-[var(--text-dim)]">~/portfolio</span>
            </div>
            <div className="space-y-2 text-[var(--text-dim)]">
              <p><AsciiText text="$ python --version → 3.12" delay={1600} as="span" /></p>
              <p><AsciiText text="$ node --version → 22.x" delay={2000} as="span" /></p>
              <p><AsciiText text="$ cat /proc/uptime → 18 years" delay={2400} as="span" /></p>
              <p className="text-[var(--accent)] animate-pulse">
                <AsciiText text="$ ready. scroll to explore ▾" delay={2800} as="span" />
              </p>
            </div>
          </div>
        </div>

        {/* Right: Neofetch ASCII */}
        <div className="hidden md:flex flex-1 justify-end opacity-90 hover:opacity-100 transition-opacity duration-700">
          <pre className="ascii-art text-[var(--accent)] font-bold text-sm lg:text-base leading-snug transition-all duration-700">
            {NEOFETCH}
          </pre>
        </div>

      </div>
    </section>
  );
}
