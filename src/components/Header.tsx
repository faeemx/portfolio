'use client';

import React from 'react';
import DiscordProfile from './DiscordProfile';

const NAV_LINKS = [
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#stack' },
  { label: 'projects', href: '#projects' },
  { label: 'now', href: '#now' },
  { label: 'connect', href: '#connect' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand / Terminal Prompt with subtle winter touch */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-mono text-sm font-bold text-white hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span className="text-[var(--accent)]">λ</span>
            <span>mando</span>
            <span className="text-[var(--text-dim)] hidden sm:inline">:~$</span>
          </a>

          {/* Subtle Winter Touch Badge */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[var(--text-dim)]">
            <span className="text-white/70">❄</span>
            <span className="tracking-wide">winter</span>
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-[var(--text-dim)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              <span className="opacity-40">[</span>
              {link.label}
              <span className="opacity-40">]</span>
            </a>
          ))}
        </nav>

        {/* Right: Discord Profile & Activity Widget */}
        <div className="flex items-center shrink-0">
          <DiscordProfile />
        </div>
      </div>
    </header>
  );
}
