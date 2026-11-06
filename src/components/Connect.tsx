import AsciiText from './AsciiText';

const LINKS = [
  { key: 'github', value: 'github.com/faeemx', href: 'https://github.com/faeemx', color: '#38bdf8' },
  { key: 'email', value: 'faeem@example.com', href: 'mailto:faeem@example.com', color: '#7dd3fc' },
  { key: 'letterboxd', value: 'letterboxd.com/faeem', href: 'https://letterboxd.com/faeem/', color: '#e2e8f0' },
  { key: 'discord', value: 'faeemaxn (Mando)', href: 'https://discord.com/users/1409447267290714222', color: '#a5f3fc' },
];

export default function Connect() {
  return (
    <section id="connect" className="min-h-[70vh] flex flex-col justify-center relative items-center text-center pt-16">
      <div className="absolute top-10 w-full text-center opacity-[0.04] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-cyan-400">CONNECT</span>
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-cyan-400 flex items-center justify-center gap-2">
          <span className="text-cyan-400/60 text-xl">❄</span>
          <AsciiText text="[05] cat contacts.json" delay={0} />
        </h2>

        {/* JSON-style contact card */}
        <div className="frost-card rounded-xl text-left font-mono text-sm overflow-hidden shadow-[0_0_25px_rgba(56,189,248,0.06)]">
          {/* Tab */}
          <div className="px-5 py-2.5 border-b border-cyan-500/15 text-xs text-[var(--text-dim)] flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-2">
              <span className="opacity-40 text-cyan-400">❄</span>
              <span>contacts.json</span>
            </div>
            <span className="text-[10px] text-cyan-400/60 font-mono">[ready]</span>
          </div>

          <div className="p-6">
            <p className="text-[var(--text-dim)]">{'{'}</p>
            {LINKS.map((link, i) => (
              <div key={link.key} className="ml-4 my-2 group">
                <span className="text-[var(--text-dim)]">&quot;</span>
                <span style={{ color: link.color }}>{link.key}</span>
                <span className="text-[var(--text-dim)]">&quot;</span>
                <span className="text-[var(--text-dim)]">: </span>
                <span className="text-[var(--text-dim)]">&quot;</span>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="underline decoration-dotted underline-offset-4 transition-colors duration-300 hover:text-white"
                  style={{ color: link.color }}
                >
                  {link.value}
                </a>
                <span className="text-[var(--text-dim)]">&quot;</span>
                {i < LINKS.length - 1 && <span className="text-[var(--text-dim)]">,</span>}
              </div>
            ))}
            <p className="text-[var(--text-dim)]">{'}'}</p>
          </div>
        </div>

        <p className="mt-16 text-xs text-[var(--text-dim)] uppercase tracking-[0.2em] font-mono">
          {"// EOF — winter terminal session closed."}
        </p>
      </div>
    </section>
  );
}
