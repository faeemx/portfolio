'use client';

import AsciiText from './AsciiText';
import DiscordHeroCard from './DiscordHeroCard';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative pt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 z-10 w-full">

        {/* Left: Bio, Headline, Status */}
        <div className="flex-1 max-w-xl space-y-7">
          {/* Frost Terminal Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#070e1b]/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md hero-entrance shadow-[0_0_15px_rgba(56,189,248,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <AsciiText text="mando@dev:~$" delay={100} />
          </div>

          {/* Main Name & Title */}
          <div className="hero-entrance-delay-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-2">
              <AsciiText text="Mando" delay={300} />
            </h1>
            <p className="text-lg sm:text-2xl text-cyan-400 font-mono font-medium">
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

          {/* Frosted System Readout Box */}
          <div className="frost-card rounded-xl p-5 font-mono text-xs max-w-lg space-y-3 hero-entrance-delay-3 shadow-[0_0_25px_rgba(56,189,248,0.06)]">
            <div className="flex items-center justify-between border-b border-cyan-500/15 pb-2.5 text-[var(--text-dim)]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/90 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                <span className="ml-2 text-white/80">system.status</span>
              </div>
              <span className="text-cyan-300 font-semibold">[❄ FROST OK]</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[var(--text-dim)]">
              <p><span className="text-white">stack:</span> Python, Next.js, ESP32</p>
              <p><span className="text-white">focus:</span> TUIs &amp; IoT sensors</p>
              <p><span className="text-white">uptime:</span> 18 years</p>
              <p><span className="text-white">season:</span> winter atmosphere</p>
            </div>
          </div>

          {/* Scroll hint with icy cyan arrow */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[var(--text-dim)] hero-entrance-delay-4">
            <span className="text-cyan-400 animate-bounce">↓</span>
            <span>scroll to explore</span>
          </div>
        </div>

        {/* Right side: Circular Discord PFP + Minimal Activity Below */}
        <div className="w-full md:w-auto flex justify-center md:justify-end md:pr-8 shrink-0 hero-entrance-delay-5">
          <DiscordHeroCard />
        </div>

      </div>
    </section>
  );
}
