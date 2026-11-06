'use client';

import { useEffect, useRef, useState } from 'react';
import AsciiText from './AsciiText';

interface SkillBar {
  name: string;
  level: number; // 0-100
  color: string;
}

const LANGUAGES: SkillBar[] = [
  { name: 'Python', level: 90, color: '#38bdf8' },
  { name: 'JavaScript', level: 55, color: '#7dd3fc' },
  { name: 'HTML/CSS', level: 85, color: '#e2e8f0' },
  { name: 'MicroPython', level: 70, color: '#a5f3fc' },
];

const FRAMEWORKS = ['Textual', 'FastAPI', 'Flask', 'Scrapy', 'Next.js', 'React', 'Tailwind CSS'];
const HARDWARE = ['ESP32', 'DHT11', 'BMP280', 'TFT Displays', 'I2C', 'SPI'];
const INFRA = ['Supabase', 'Firebase', 'MongoDB', 'Vercel', 'Render', 'Railway'];
const TOOLS = ['Git', 'VS Code', 'Linux', 'pip', 'npm'];

const TERMINAL_ART = `
  .───────────.
  |  >_       |
  |  ████░░   |
  |  ██████░  |
  '───────────'
     /______\\
`;

function ProgressBar({ skill, animate }: { skill: SkillBar; animate: boolean }) {
  const filled = Math.round(skill.level / 5); // 20 chars total
  const empty = 20 - filled;
  const bar = animate
    ? '█'.repeat(filled) + '░'.repeat(empty)
    : '░'.repeat(20);

  return (
    <div className="flex items-center gap-3 font-mono text-sm">
      <span className="w-28 text-[var(--text-primary)] shrink-0">{skill.name}</span>
      <span
        className="transition-all duration-1000"
        style={{ color: animate ? skill.color : 'var(--text-dim)' }}
      >
        {bar}
      </span>
      <span className="text-[var(--text-dim)] text-xs w-10 text-right">
        {animate ? `${skill.level}%` : ''}
      </span>
    </div>
  );
}

function TagGroup({ label, tags, color }: { label: string; tags: string[]; color: string }) {
  return (
    <div className="space-y-2">
      <span className="text-xs uppercase tracking-widest text-[var(--text-dim)]">{label}:</span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-mono rounded border transition-colors duration-300 hover:bg-white/5"
            style={{ borderColor: `${color}66`, color }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" ref={sectionRef} className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute top-10 left-0 w-full text-center opacity-[0.04] pointer-events-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-cyan-400">STACK</span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
            <span className="text-cyan-400/60 text-xl">❄</span>
            <AsciiText text="[02] cat stack.yml" delay={0} />
          </h2>

          {/* Progress Bars in Frost Card */}
          <div className="frost-card rounded-xl p-6 mb-8 max-w-lg shadow-[0_0_20px_rgba(56,189,248,0.06)]">
            <p className="text-xs text-cyan-400/80 mb-4 uppercase tracking-widest font-mono">languages</p>
            <div className="space-y-3">
              {LANGUAGES.map((skill) => (
                <ProgressBar key={skill.name} skill={skill} animate={animate} />
              ))}
            </div>
          </div>

          {/* Tag Groups */}
          <div className="space-y-6 max-w-2xl">
            <TagGroup label="frameworks" tags={FRAMEWORKS} color="#38bdf8" />
            <TagGroup label="hardware" tags={HARDWARE} color="#a5f3fc" />
            <TagGroup label="infrastructure" tags={INFRA} color="#818cf8" />
            <TagGroup label="tools" tags={TOOLS} color="#e2e8f0" />
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center text-[var(--text-dim)] hover:text-cyan-300 transition-colors duration-700">
          <div className="p-6 rounded-2xl bg-[#070e1b]/40 border border-cyan-500/15 shadow-[0_0_20px_rgba(56,189,248,0.06)]">
            <pre className="ascii-art text-sm lg:text-base">
              {TERMINAL_ART}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
