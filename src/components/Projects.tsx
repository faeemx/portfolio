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
    accentColor: 'var(--accent)',
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
    accentColor: 'var(--cyan)',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/faeemaxp' },
    ],
  },
  {
    file: 'weather-station.md',
    title: '🌡️ Weather Station',
    tagline: 'Multi-sensor environmental monitor',
    description:
      'Reads temperature, humidity, pressure from DHT11 and BMP280 sensors. Pushes data every 60s to a Next.js dashboard via Supabase. Real-time live chart.',
    tech: ['ESP32', 'DHT11', 'BMP280', 'Next.js', 'Supabase'],
    ascii: `    _  _
   ( \`   )_
  (____(___)
    ' ' ' '
   ' ' ' '`,
    accentColor: 'var(--orange)',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/faeemaxp' },
    ],
  },
  {
    file: 'mediaradar.md',
    title: '📡 Mediaradar',
    tagline: 'Automated intelligence scraper',
    description:
      'Scrapes media intelligence data, cleans with pandas, and dumps to PostgreSQL. Scheduled cron jobs running headless. Built for real production workloads.',
    tech: ['Python', 'Scrapy', 'PostgreSQL', 'Docker', 'pandas'],
    ascii: `    /|
   / |___
  /  |   )
 /___|__/
    /|`,
    accentColor: 'var(--purple)',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/faeemaxp' },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="terminal-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      style={{ '--hover-color': project.accentColor } as React.CSSProperties}
    >
      {/* File tab header */}
      <div className="px-5 py-2.5 border-b border-white/10 text-xs text-[var(--text-dim)] font-mono flex items-center justify-between bg-black/30">
        <div className="flex items-center gap-2">
          <span className="opacity-40">─</span>
          <span className="group-hover:text-white transition-colors">{project.file}</span>
        </div>
        <span className="text-[10px] text-white/30 font-mono">markdown</span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-5">
          {/* ASCII Art */}
          <pre
            className="ascii-art text-xs shrink-0 hidden sm:block opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: project.accentColor }}
          >
            {project.ascii}
          </pre>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[var(--text-dim)] mb-3">{project.tagline}</p>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-mono rounded border transition-colors duration-200"
                  style={{ borderColor: project.accentColor, color: project.accentColor }}
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
      <div className="absolute top-10 left-0 w-full text-center opacity-[0.05] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-[var(--accent)]">PROJECTS</span>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-[var(--accent)]">
          <AsciiText text="[03] ls ~/projects" delay={0} />
        </h2>
        <p className="text-sm text-[var(--text-dim)] italic mb-10 font-mono">
          things I&apos;ve built and shipped
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
