import AsciiText from './AsciiText';

interface Project {
  file: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  ascii: string;
  accentColor: string;
  links: { label: string; href: string }[];
}

const PROJECTS: Project[] = [
  {
    file: 'katto.md',
    title: '💬 Katto',
    tagline: 'Real-time terminal chat',
    description:
      'A TUI-based social chat application built with Python and Textual. Multiple channels, message history, live presence indicators. Chat without leaving your terminal.',
    tech: ['Python', 'Textual', 'WebSockets', 'AsyncIO'],
    ascii: `  .=========.
  | [=====] |
  |  _   _  |
  | | | | | |
  |_________|`,
    accentColor: '#38bdf8',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/faeemaxp' },
    ],
  },
  {
    file: 'iot-radio.md',
    title: '📻 Internet Radio',
    tagline: 'ESP32 streaming device',
    description:
      'Streams 50+ radio stations on a 1.8" TFT display. Rotary encoder for station switching. Real-time metadata display. Runs 24/7 on my desk.',
    tech: ['ESP32', 'MicroPython', 'TFT', 'I2C', 'VS1053'],
    ascii: `    .───.
   | ))) |
    '───'
   /     \\`,
    accentColor: '#22d3ee',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/faeemaxp' },
    ],
  },
  {
    file: 'weather-station.md',
    title: '🌡️ Weather Station',
    tagline: 'Environmental monitor',
    description:
      'Reads temperature, humidity, and barometric pressure from physical sensors. Logs data to Supabase. Web dashboard shows historical trends and real-time readings.',
    tech: ['ESP32', 'DHT11', 'BMP280', 'Supabase', 'Python'],
    ascii: `   ╭──╮
   │°C│
   │  │
   ╰──╯`,
    accentColor: '#a5f3fc',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/faeemaxp' },
    ],
  },
  {
    file: 'mediaradar.md',
    title: '🌐 Mediaradar',
    tagline: 'Web scraping + data pipeline',
    description:
      'Automated media tracking and aggregation platform. Scrapes, processes, and serves structured data. Deployed on Railway with a MongoDB backend.',
    tech: ['Python', 'Scrapy', 'FastAPI', 'MongoDB', 'Railway'],
    ascii: `   ╭─────╮
   │ ◉ ◉ │
   │  ━  │
   ╰─────╯`,
    accentColor: '#818cf8',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/faeemaxp' },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="frost-card rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]"
      style={{ '--hover-color': project.accentColor } as React.CSSProperties}
    >
      {/* File tab */}
      <div className="px-5 py-2.5 border-b border-cyan-500/15 text-xs text-[var(--text-dim)] font-mono flex items-center justify-between bg-black/20">
        <div className="flex items-center gap-2">
          <span className="opacity-40 text-cyan-400">❄</span>
          <span>{project.file}</span>
        </div>
        <span className="text-[10px] text-cyan-400/60 font-mono">[code]</span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-5">
          {/* ASCII Art */}
          <pre
            className="ascii-art text-xs shrink-0 hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: project.accentColor }}
          >
            {project.ascii}
          </pre>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white mb-0.5">{project.title}</h3>
            <p className="text-xs text-[var(--text-dim)] mb-3">{project.tagline}</p>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-mono rounded border bg-black/30"
                  style={{ borderColor: `${project.accentColor}55`, color: project.accentColor }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono underline decoration-dotted underline-offset-4 hover:text-white transition-colors"
                  style={{ color: project.accentColor }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute top-10 left-0 w-full text-center opacity-[0.04] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-cyan-400">PROJECTS</span>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
          <span className="text-cyan-400/60 text-xl">❄</span>
          <AsciiText text="[03] ls ~/projects" delay={0} />
        </h2>
        <p className="text-sm text-[var(--text-dim)] italic mb-10 font-mono">
          things I&apos;ve built and shipped in winter
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.file} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
