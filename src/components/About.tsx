import AsciiText from './AsciiText';

const AVATAR = `
    ╭─────────╮
    │  \`\_/\`  │
    │  (o o)  │
    │  ( > )  │
    ╰─────────╯
`;

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute top-10 left-0 w-full text-center opacity-[0.04] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-cyan-400">ABOUT</span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
            <span className="text-cyan-400/60 text-xl">❄</span>
            <AsciiText text="[01] about.txt" delay={0} />
          </h2>
          <div className="text-[var(--text-primary)] space-y-5 max-w-xl text-base leading-relaxed">
            <p>
              I&apos;m Mando — an 18-year-old developer who builds terminal apps,
              wires up IoT sensors, and deploys things to the internet.
            </p>
            <p>
              I taught myself Python by building a Wordle clone, then got into
              hardware because I wanted my code to affect the physical world.
              Now I build full-stack apps, solder circuit boards, and scrape
              the web for data.
            </p>
            <p className="text-[var(--text-dim)] italic text-sm">
              When I&apos;m not coding, I&apos;m reading dystopian fiction or
              rating films on Letterboxd. I don&apos;t have a CS degree — I
              have shipped projects.
            </p>
          </div>
        </div>

        <div className="flex-1 text-[var(--text-dim)] flex justify-center hover:text-cyan-300 transition-colors duration-700">
          <div className="p-6 rounded-2xl bg-[#070e1b]/40 border border-cyan-500/15 shadow-[0_0_20px_rgba(56,189,248,0.06)]">
            <pre className="ascii-art text-base sm:text-lg">
              {AVATAR}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
