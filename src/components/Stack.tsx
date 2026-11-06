'use client';

import React, { useState } from 'react';
import AsciiText from './AsciiText';

interface StackItem {
  name: string;
  role: string;
  tag: string;
  color: string;
  desc: string;
}

interface StackCategory {
  id: string;
  name: string;
  icon: string;
  items: StackItem[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'languages',
    name: 'languages',
    icon: 'λ',
    items: [
      {
        name: 'Python 3.12',
        role: 'Core Runtime',
        tag: 'PRIMARY',
        color: 'var(--accent)',
        desc: 'AsyncIO, Textual TUIs, Scrapy pipelines, FastAPI backends',
      },
      {
        name: 'TypeScript & JS',
        role: 'Full-Stack Web',
        tag: 'PRODUCTION',
        color: 'var(--cyan)',
        desc: 'Next.js 15, React 19, client-server types, WebSockets',
      },
      {
        name: 'MicroPython',
        role: 'Embedded Firmware',
        tag: 'FIRMWARE',
        color: 'var(--purple)',
        desc: 'ESP32 microcontroller programming, sensor polling, displays',
      },
      {
        name: 'C / C++',
        role: 'Low-Level Drivers',
        tag: 'EMBEDDED',
        color: 'var(--orange)',
        desc: 'ESP-IDF / Arduino hardware drivers, timing-critical routines',
      },
      {
        name: 'SQL',
        role: 'Data Modeling',
        tag: 'QUERIES',
        color: 'var(--lime)',
        desc: 'PostgreSQL schemas, indexing, joins, Supabase database logic',
      },
      {
        name: 'Bash / Shell',
        role: 'Automation',
        tag: 'SCRIPTS',
        color: 'var(--pink)',
        desc: 'Linux environment automation, cron jobs, deploy scripts',
      },
    ],
  },
  {
    id: 'frameworks',
    name: 'frameworks & runtimes',
    icon: '⚡',
    items: [
      {
        name: 'Textual & Rich',
        role: 'TUI Engine',
        tag: 'TERMINAL',
        color: 'var(--accent)',
        desc: 'Building responsive async terminal apps, widget trees & styling',
      },
      {
        name: 'FastAPI',
        role: 'API Framework',
        tag: 'BACKEND',
        color: 'var(--cyan)',
        desc: 'High-throughput async REST endpoints, Pydantic schemas',
      },
      {
        name: 'Next.js 15 & React 19',
        role: 'Web Platform',
        tag: 'FULL-STACK',
        color: 'var(--orange)',
        desc: 'App Router, Server Components, SSR, cyber-minimal UI',
      },
      {
        name: 'Scrapy',
        role: 'Web Scraping',
        tag: 'PIPELINES',
        color: 'var(--purple)',
        desc: 'Distributed crawlers, item pipelines, media data harvesting',
      },
      {
        name: 'Tailwind CSS',
        role: 'Design System',
        tag: 'STYLING',
        color: 'var(--cyan)',
        desc: 'Terminal aesthetics, glassmorphism, responsive cyber layouts',
      },
      {
        name: 'AsyncIO & WebSockets',
        role: 'Realtime Protocol',
        tag: 'CONCURRENCY',
        color: 'var(--lime)',
        desc: 'Concurrent event loops, bidirectional socket streaming',
      },
    ],
  },
  {
    id: 'hardware',
    name: 'embedded & iot',
    icon: '🔌',
    items: [
      {
        name: 'ESP32 Dual-Core',
        role: 'Microcontroller',
        tag: '240MHz SoC',
        color: 'var(--accent)',
        desc: 'Xtensa LX6 32-bit SoC, built-in Wi-Fi & BLE, FreeRTOS',
      },
      {
        name: 'I2C · SPI · UART',
        role: 'Bus Protocols',
        tag: 'COMMUNICATION',
        color: 'var(--orange)',
        desc: 'Hardware interconnects for high-speed displays & multi-drop buses',
      },
      {
        name: 'VS1053 Audio Codec',
        role: 'DSP Hardware',
        tag: 'AUDIO DECODER',
        color: 'var(--cyan)',
        desc: 'Hardware MP3/AAC decoding for Internet Radio streaming 24/7',
      },
      {
        name: 'ST7735 / ILI9341',
        role: 'TFT Displays',
        tag: 'GRAPHICS UI',
        color: 'var(--purple)',
        desc: 'SPI color displays with custom bitmap fonts and real-time graphs',
      },
      {
        name: 'BMP280 & DHT22',
        role: 'Telemetry Sensors',
        tag: 'ENVIRONMENTAL',
        color: 'var(--lime)',
        desc: 'Precision barometric pressure, temperature, and humidity nodes',
      },
      {
        name: 'MQTT Protocol',
        role: 'IoT Transport',
        tag: 'TELEMETRY',
        color: 'var(--pink)',
        desc: 'Low-overhead publish/subscribe messaging for wireless sensor mesh',
      },
    ],
  },
  {
    id: 'databases',
    name: 'databases & storage',
    icon: '🗄️',
    items: [
      {
        name: 'PostgreSQL',
        role: 'Relational DB',
        tag: 'ACID STORE',
        color: 'var(--cyan)',
        desc: 'Primary relational database for structured datasets and indexes',
      },
      {
        name: 'Supabase',
        role: 'Realtime Backend',
        tag: 'POSTGRES CLOUD',
        color: 'var(--accent)',
        desc: 'Instant REST/GraphQL APIs, live database change streams & Auth',
      },
      {
        name: 'MongoDB Atlas',
        role: 'Document Store',
        tag: 'NOSQL',
        color: 'var(--lime)',
        desc: 'JSON document persistence for dynamic schemas and scraper dumps',
      },
      {
        name: 'Redis',
        role: 'In-Memory Cache',
        tag: 'KEY-VALUE',
        color: 'var(--orange)',
        desc: 'Sub-millisecond data caching, session state, and pub/sub queues',
      },
    ],
  },
  {
    id: 'devops',
    name: 'devops & tooling',
    icon: '🛠️',
    items: [
      {
        name: 'Docker',
        role: 'Containers',
        tag: 'CONTAINERIZATION',
        color: 'var(--cyan)',
        desc: 'Multi-stage builds, isolated scrapers, consistent deploy environments',
      },
      {
        name: 'Linux / Debian',
        role: 'Operating System',
        tag: 'SYSADMIN',
        color: 'var(--orange)',
        desc: 'Headless VPS servers, systemd daemons, SSH, terminal workflow',
      },
      {
        name: 'Git & GitHub Actions',
        role: 'CI/CD Pipelines',
        tag: 'VERSION CONTROL',
        color: 'var(--accent)',
        desc: 'Automated test runners, branch deployment, release automation',
      },
      {
        name: 'Vercel & Railway',
        role: 'Cloud Deployment',
        tag: 'PRODUCTION HOST',
        color: 'var(--purple)',
        desc: 'Edge serverless web hosting and persistent Docker microservices',
      },
    ],
  },
];

const HARDWARE_SPEC = [
  { key: 'host', value: 'mando@esp32-node' },
  { key: 'arch', value: 'Xtensa LX6 32-bit Dual-Core @ 240MHz' },
  { key: 'firmware', value: 'MicroPython v1.22 · FreeRTOS' },
  { key: 'bus', value: 'I2C (0x76) · SPI (40MHz) · UART' },
  { key: 'audio_ic', value: 'VS1053 DSP MP3 Decoder' },
  { key: 'display', value: '1.8" ST7735 SPI Color TFT' },
  { key: 'sensors', value: 'BMP280 (I2C) + DHT22 (1-Wire)' },
  { key: 'network', value: 'Wi-Fi 802.11 b/g/n · MQTT Broker' },
  { key: 'status', value: 'all peripheral buses verified [OK]' },
];

export default function Stack() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? STACK_CATEGORIES
      : STACK_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="stack" className="min-h-screen flex flex-col justify-center relative pt-16">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 w-full text-center opacity-[0.04] pointer-events-none select-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-widest text-[var(--accent)]">
          STACK
        </span>
      </div>

      <div className="relative z-10 w-full">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[var(--accent)]">
              <AsciiText text="[02] cat stack.yml" delay={0} />
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-dim)] font-mono mt-1">
              verified production tools, hardware specs &amp; runtime environments
            </p>
          </div>

          {/* Terminal File Stats Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-[var(--text-dim)] backdrop-blur-md self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-white/70">schema:</span>
            <span className="text-[var(--accent)]">v2.4 [YAML]</span>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[var(--accent)]/15 border-[var(--accent)] text-white shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                : 'bg-black/40 border-white/10 text-[var(--text-dim)] hover:text-white hover:border-white/20'
            }`}
          >
            <span className="text-[var(--accent)] mr-1">●</span> all.yml
          </button>
          {STACK_CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white/10 border-white/25 text-white shadow-[0_2px_12px_rgba(0,0,0,0.4)]'
                    : 'bg-black/40 border-white/10 text-[var(--text-dim)] hover:text-white hover:border-white/20'
                }`}
              >
                <span className="opacity-40 text-[10px]">0{idx + 1}.</span>
                <span>{cat.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Left = Stack Categories, Right = Hardware Architecture Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Categorized Stack Specifications (Replaces old arbitrary progress bars) */}
          <div className="lg:col-span-8 space-y-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="terminal-card rounded-xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.5)] border border-white/10"
              >
                {/* Category Header */}
                <div className="px-5 py-2.5 border-b border-white/10 text-xs text-[var(--text-dim)] font-mono flex items-center justify-between bg-black/40">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">{category.icon}</span>
                    <span className="text-white/80 font-medium tracking-wide">
                      {category.name}:
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--text-dim)] font-mono">
                    {category.items.length} components
                  </span>
                </div>

                {/* Items Grid */}
                <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group p-3 rounded-lg bg-black/30 border border-white/5 hover:border-white/15 hover:bg-white/[0.03] transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-sm font-bold font-mono text-white group-hover:text-[var(--accent)] transition-colors">
                          {item.name}
                        </span>
                        <span
                          className="px-1.5 py-0.5 text-[9px] font-mono rounded border uppercase tracking-wider shrink-0"
                          style={{ borderColor: item.color, color: item.color }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-dim)] font-mono line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Embedded Hardware Architecture Readout */}
          <div className="lg:col-span-4 space-y-6">
            <div className="terminal-card rounded-xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.5)] border border-white/10 sticky top-24">
              {/* Terminal Window Header */}
              <div className="px-4 py-2.5 border-b border-white/10 text-xs font-mono flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-white/80 ml-1.5 text-[11px]">hardware.spec</span>
                </div>
                <span className="text-[10px] text-[var(--accent)] font-mono">active</span>
              </div>

              {/* Hardware Diagnostics */}
              <div className="p-5 font-mono text-xs space-y-3 bg-[#0a0a0c]/80">
                <div className="pb-2 border-b border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-[var(--text-dim)]">TARGET:</span>
                  <span className="text-[var(--accent)] font-semibold">ESP32 IoT NODE</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  {HARDWARE_SPEC.map((spec) => (
                    <div key={spec.key} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                      <span className="text-[var(--text-dim)] shrink-0">{spec.key}:</span>
                      <span
                        className={`text-right ${
                          spec.key === 'status'
                            ? 'text-[var(--accent)] font-semibold'
                            : 'text-white/85'
                        }`}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CRT Terminal ASCII Art */}
                <div className="pt-3 border-t border-white/10 flex flex-col items-center">
                  <pre className="ascii-art text-xs text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors select-none">
{`  .───────────.
  |  >_       |
  |  READY    |
  |  ESP32_OK |
  '───────────'
     /______\\`}
                  </pre>
                  <p className="text-[10px] text-[var(--text-dim)] mt-2">
                    zero bloat · hardware direct
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
