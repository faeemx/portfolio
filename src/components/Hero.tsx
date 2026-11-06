'use client';

import AsciiText from './AsciiText';
import DiscordHeroCard from './DiscordHeroCard';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative pt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 z-10 w-full">

        {/* Left: Bio, Headline, Status */}
        <div className="flex-1 max-w-xl space-y-7">
          {/* Minimal Terminal Tag with subtle winter touch */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs font-mono text-[var(--accent)] backdrop-blur-md hero-entrance shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <AsciiText text="mando@dev:~$" delay={100} />
            <span className="text-white/40 text-[10px]">❄</span>
          </div>

          {/* Main Name & Title */}
          <div className="hero-entrance-delay-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-2">
              <AsciiText text="Mando" delay={300} />
            </h1>
            <p className="text-lg sm:text-2xl text-[var(--accent)] font-mono font-medium">
              <AsciiText text="Developer · Hardware Hacker · Builder" delay={600} />
            </p>
          </div>

          {/* Clean concise bio */}
          <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed hero-entrance-delay-2">
            <AsciiText
              text="I write Python, build with ESP32s, and craft minimal terminal applications. Focused on TUIs, IoT hardware, and building things that work."
              delay={900}
            />
          </p>

          {/* Frosted Terminal System Readout */}
          <div className="terminal-card rounded-xl p-5 font-mono text-xs max-w-lg space-y-3 hero-entrance-delay-3 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[var(--text-dim)]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <span className="ml-2 text-white/80">system.status</span>
              </div>
              <span className="text-[var(--accent)] flex items-center gap-1.5">
                <span>ready [OK]</span>
                <span className="text-white/60">❄</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[var(--text-dim)]">
              <p><span className="text-white">stack:</span> Python, Next.js, ESP32</p>
              <p><span className="text-white">focus:</span> TUIs &amp; IoT sensors</p>
              <p><span className="text-white">uptime:</span> 18 years</p>
              <p><span className="text-white">season:</span> winter atmosphere <span className="text-white/60">❄</span></p>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[var(--text-dim)] hero-entrance-delay-4">
            <span className="text-[var(--accent)] animate-bounce">↓</span>
            <span>scroll to explore</span>
          </div>
        </div>

        {/* Right side free space: Circular Discord PFP + Minimal Activity Below */}
        <div className="w-full md:w-auto flex justify-center md:justify-end md:pr-8 shrink-0 hero-entrance-delay-5">
          <DiscordHeroCard />
        </div>

      </div>
    </section>
  );
}
