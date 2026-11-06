import AsciiText from './AsciiText';

const CURSOR = `
  ▊
`;

export default function Now() {
  return (
    <section id="now" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute top-10 right-0 w-full text-right opacity-[0.04] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-cyan-400">NOW</span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
            <span className="text-cyan-400/60 text-xl">❄</span>
            <AsciiText text="[04] cat ~/.now" delay={0} />
          </h2>

          <div className="frost-card rounded-xl overflow-hidden max-w-xl shadow-[0_0_25px_rgba(56,189,248,0.06)]">
            {/* Tab bar */}
            <div className="px-5 py-2.5 border-b border-cyan-500/15 text-xs text-[var(--text-dim)] font-mono flex items-center justify-between bg-black/20">
              <div className="flex items-center gap-2">
                <span className="opacity-40 text-cyan-400">❄</span>
                <span>~/.now</span>
              </div>
              <span className="text-cyan-300 font-mono">winter 2026</span>
            </div>

            {/* Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="space-y-3">
                <p className="text-[var(--text-primary)]">
                  <span className="text-cyan-400 mr-2">›</span>
                  Building a TUI file manager in Python
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-sky-300 mr-2">›</span>
                  Learning React + Next.js <span className="text-[var(--text-dim)]">(built this site)</span>
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-cyan-200 mr-2">›</span>
                  Experimenting with MQTT for IoT mesh networking
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-indigo-300 mr-2">›</span>
                  Reading: &quot;Brave New World&quot; by Aldous Huxley
                </p>
                <p className="text-[var(--text-primary)]">
                  <span className="text-slate-300 mr-2">›</span>
                  Watching films &amp; rating on Letterboxd
                </p>
              </div>

              <div className="border-t border-cyan-500/15 pt-4 mt-4">
                <p className="text-[var(--text-dim)] text-xs">
                  <span className="text-cyan-400">status:</span>{' '}
                  open to freelance Python &amp; IoT work
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center text-cyan-400 animate-pulse">
          <pre className="ascii-art text-6xl font-bold">
            {CURSOR}
          </pre>
        </div>
      </div>
    </section>
  );
}
