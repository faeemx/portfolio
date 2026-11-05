import AsciiText from './AsciiText';

const GEARS = `
       .-------.
      /   _   _  \\
     |  | | | |  |
     |  | | | |  |
      \\  _|_|_  /
       '-------'
`;

const BOX = `
     +-------+
    /       /|
   /       / |
  +-------+  |
  |       |  +
  |       | /
  +-------+/
`;

const FLOPPY = `
  .==========.
  | [======] |
  |        | |
  |________|_|
`;

export default function Workshop() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute top-10 left-0 w-full text-center opacity-10 pointer-events-none">
        <span className="text-9xl font-bold tracking-widest text-[var(--accent)]">WORKSHOP</span>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-[var(--accent)] text-center">
          <AsciiText text="[03] The Workshop" delay={0} />
        </h2>
        <p className="text-center text-[var(--text-dim)] italic mb-12 text-sm">
          (Projects, terminals, and hardware experiments)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center group cursor-pointer">
            <pre className="ascii-art text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {FLOPPY}
            </pre>
            <h3 className="mt-6 font-bold text-lg text-white">💬 Katto</h3>
            <p className="text-center text-sm text-[var(--text-dim)] mt-2">
              A terminal-based social chat application engineered with Python and the Textual framework.
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <pre className="ascii-art text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {GEARS}
            </pre>
            <h3 className="mt-6 font-bold text-lg text-white">📻 IoT Creations</h3>
            <p className="text-center text-sm text-[var(--text-dim)] mt-2">
              An internet radio and weather station built using ESP32 boards, TFT displays, and environmental sensors.
            </p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <pre className="ascii-art text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {BOX}
            </pre>
            <h3 className="mt-6 font-bold text-lg text-white">🌐 Web Ecosystems</h3>
            <p className="text-center text-sm text-[var(--text-dim)] mt-2">
              Deployed applications and databases including mediaradar and exist-tv across platforms like Railway and Supabase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}