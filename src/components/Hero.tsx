import AsciiText from './AsciiText';

const HERO_ART = `
               ,@@@@@@@,
       ,,,.   ,@@@@@@/@@,  .oo8888o.
    ,&%%&%&&%,@@@@@/@@@@@@,8888\\88/8o
   ,%&\\%&&%&&%,@@@\\@@@/@@@88\\88888/88'
   %&&%&%&/%&&%@@\\@@/ /@@@88888\\88888'
   %&&%/ %&%%&&@@\\ V /@@' \`88\\8 \`/88'
   \`&%\\ \` /%&'    |.|        \\ '|8'
       |o|        | |         | |
       |.|        | |         | |
 \\\\/ ._\\//_/__/  ,\\_//__\\\\/.  \\_//__/_
`;

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text and Terminal */}
        <div className="flex-1 space-y-8 z-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
              <AsciiText text="faeem's" delay={100} />
              <br />
              <span className="text-[var(--accent)]">
                <AsciiText text="Digital Forest" delay={400} />
              </span>
            </h1>
            <p className="text-sm md:text-base text-[var(--text-dim)] font-mono italic mb-6">
              <AsciiText text="(Also known in the wild as mando)" delay={800} />
            </p>
            <p className="text-xl text-[var(--text-primary)] max-w-lg mt-6 leading-relaxed">
              <AsciiText text="Welcome to my interactive portfolio. A tiny world built from code, hardware." delay={1200} />
            </p>
          </div>

          {/* Terminal Boot Sequence */}
          <div className="bg-black/60 border border-[var(--text-dim)] rounded-lg p-5 font-mono text-sm backdrop-blur-md max-w-md">
            <div className="flex gap-2 mb-3 border-b border-[var(--text-dim)] pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="space-y-2 text-[var(--text-dim)]">
              <p><AsciiText text="> Init environment... [OK]" delay={1800} as="span" /></p>
              <p><AsciiText text="> Loading squirrel.exe... [OK]" delay={2200} as="span" /></p>
              <p><AsciiText text="> Generating world terrain... [OK]" delay={2600} as="span" /></p>
              <p className="text-[var(--cyan)] animate-pulse">
                <AsciiText text="> SYSTEM READY. Awaiting explorer." delay={3000} as="span" />
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Hero ASCII Art */}
        <div className="hidden md:flex flex-1 justify-end opacity-90 hover:opacity-100 transition-opacity duration-700">
          <pre className="ascii-art text-[var(--lime)] font-bold text-sm lg:text-base leading-snug transition-all duration-700">
            {HERO_ART}
          </pre>
        </div>

      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce opacity-70">
        <div className="text-center text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors cursor-default">
          <span className="block text-xs uppercase tracking-[0.3em] mb-2">Scroll to explore</span>
          <span className="text-2xl">▼</span>
        </div>
      </div>
    </section>
  );
}