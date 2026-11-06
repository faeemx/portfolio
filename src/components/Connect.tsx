import AsciiText from './AsciiText';

const LINKS = [
  { key: 'github', value: 'github.com/faeemx', href: 'https://github.com/faeemx', color: 'var(--accent)' },
  { key: 'email', value: 'faeem@example.com', href: 'mailto:faeem@example.com', color: 'var(--cyan)' },
  { key: 'letterboxd', value: 'letterboxd.com/faeem', href: 'https://letterboxd.com/faeem/', color: 'var(--orange)' },
  { key: 'discord', value: 'faeemaxn (Mando)', href: 'https://discord.com/users/1409447267290714222', color: 'var(--purple)' },
];

export default function Connect() {
  return (
    <section id="connect" className="min-h-[70vh] flex flex-col justify-center relative items-center text-center pt-16">
      <div className="absolute top-10 w-full text-center opacity-[0.05] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-[var(--text-primary)]">CONNECT</span>
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-[var(--accent)]">
          <AsciiText text="[05] cat contacts.json" delay={0} />
        </h2>

        {/* JSON-style frosted contact card */}
        <div className="terminal-card rounded-xl text-left font-mono text-sm overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          {/* Tab */}
          <div className="px-5 py-2.5 border-b border-white/10 text-xs text-[var(--text-dim)] flex items-center justify-between bg-black/30">
            <span className="flex items-center gap-2">
              <span className="opacity-40">─</span> contacts.json
            </span>
            <span className="text-white/30 text-[10px]">json</span>
          </div>

          <div className="p-6">
            <p className="text-[var(--text-dim)]">{'{'}</p>
            {LINKS.map((link, i) => (
              <div key={link.key} className="ml-4 my-2 group flex items-center">
                <span className="text-[var(--text-dim)]">&quot;</span>
                <span style={{ color: link.color }} className="font-semibold">{link.key}</span>
                <span className="text-[var(--text-dim)]">&quot;</span>
                <span className="text-[var(--text-dim)]">: </span>
                <span className="text-[var(--text-dim)]">&quot;</span>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-white"
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

        <p className="text-xs text-[var(--text-dim)] mt-8 font-mono">
          open to collaborations, hardware discussions &amp; interesting projects
        </p>
      </div>
    </section>
  );
}
