import AsciiText from './AsciiText';

const ASCII_CREATURE = `
 ||  || 
 \\\\()// 
//(__)\\\\
||    ||
`;

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute top-10 left-0 w-full text-center opacity-[0.05] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-[var(--text-primary)]">ABOUT</span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-[var(--accent)] flex items-center gap-2">
            <AsciiText text="[01] cat about.txt" delay={0} />
          </h2>
          <div className="text-[var(--text-primary)] space-y-5 max-w-xl text-base leading-relaxed">
            <p>
              I&apos;m Mando — an 18-year-old developer building terminal applications,
              wiring up IoT sensors, and deploying full-stack systems to the internet.
            </p>
            <p>
              I taught myself Python by building a Wordle clone, then dove into embedded
              hardware because I wanted my code to interact with the physical world. Since then,
              I&apos;ve completed a remote Python developer internship, competed in global coding
              challenges, and built everything from automated scraping pipelines to custom circuit boards.
            </p>
            <p className="text-[var(--text-dim)] italic text-sm">
              When I&apos;m away from the terminal, I&apos;m reading dystopian fiction or logging
              films on Letterboxd. I believe in learning by shipping — turning raw ideas into
              working firmware and production code.
            </p>
          </div>
        </div>

        <div className="flex-1 text-[var(--text-dim)] flex flex-col items-center justify-center hover:text-[var(--accent)] transition-colors duration-500 group select-none">
          <pre className="ascii-art text-2xl sm:text-4xl leading-tight font-mono font-bold tracking-widest text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">
            {ASCII_CREATURE}
          </pre>
        </div>
      </div>
    </section>
  );
}
