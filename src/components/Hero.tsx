'use client';

import AsciiText from './AsciiText';
import DiscordHeroCard from './DiscordHeroCard';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative pt-20">
      <div className="max-w-3xl space-y-7 z-10">

        {/* Discord PFP with Minimal Live Activity Below It */}
        <DiscordHeroCard />

        {/* Minimal Terminal Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-[var(--accent)] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <AsciiText text="mando@dev:~$" delay={100} />
        </div>

        {/* Main Name & Title */}
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-2">
            <AsciiText text="Mando" delay={300} />
          </h1>
          <p className="text-lg sm:text-2xl text-[var(--accent)] font-mono font-medium">
            <AsciiText text="Developer · Hardware Hacker · Builder" delay={600} />
          </p>
        </div>

        {/* Clean concise bio */}
        <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed">
          <AsciiText
            text="I write Python, build with ESP32s, and craft minimal terminal applications. Focused on TUIs, IoT hardware, and building things that work."
            delay={900}
          />
        </p>

        {/* Single Simplified System Readout */}
        <div className="bg-black/60 border border-white/10 rounded-xl p-5 font-mono text-xs backdrop-blur-md max-w-lg space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[var(--text-dim)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/70">system.status</span>
            </div>
            <span className="text-[var(--accent)]">ready [OK]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[var(--text-dim)]">
            <p><span className="text-white">stack:</span> Python, Next.js, ESP32</p>
            <p><span className="text-white">focus:</span> TUIs &amp; IoT sensors</p>
            <p><span className="text-white">uptime:</span> 18 years</p>
            <p><span className="text-white">status:</span> building full-time</p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[var(--text-dim)]">
          <span className="text-[var(--accent)] animate-bounce">↓</span>
          <span>scroll to explore</span>
        </div>

      </div>
    </section>
  );
}
