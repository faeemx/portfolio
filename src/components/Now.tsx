import AsciiText from './AsciiText';

const CURSOR = `
  ▊
`;

export default function Now() {
  return (
    <section id="now" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute top-10 right-0 w-full text-right opacity-[0.05] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-[var(--accent)]">NOW</span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-[var(--accent)]">
            <AsciiText text="[04] cat ~/.now" delay={0} />
          </h2>

          <div className="terminal-card rounded-xl overflow-hidden max-w-xl shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
            {/* Tab bar */}
            <div className="px-5 py-2.5 border-b border-white/10 text-xs text-[var(--text-dim)] font-mono flex items-center justify-between bg-black/30">
              <span className="flex items-center gap-2">
                <span className="opacity-40">─</span> ~/.now
              </span>
              <span className="text-[var(--accent)] flex items-center gap-1.5">
                <span>updated: Nov 2026</span>
              </span>
            </div>

            {/* Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="space-y-3">
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--accent)] mr-2">›</span>
                  Building a fast TUI file manager in Python (Textual)
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--cyan)] mr-2">›</span>
                  Shipping full-stack apps with React, Next.js &amp; MongoDB Atlas
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--orange)] mr-2">›</span>
                  Experimenting with MQTT for ESP32 IoT mesh networking
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--purple)] mr-2">›</span>
                  Reading: &quot;Brave New World&quot; by Aldous Huxley
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--pink)] mr-2">›</span>
                  Watching films &amp; logging ratings on Letterboxd
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-[var(--text-dim)]">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>Status: focus mode active [50/10 blocks]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center text-[var(--accent)]">
          <pre className="ascii-art text-sm animate-pulse">
            {CURSOR}
          </pre>
        </div>
      </div>
    </section>
  );
}
