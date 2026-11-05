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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand / Terminal Prompt */}
        <a
          href="#"
          className="font-mono text-sm font-bold text-white hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span className="text-[var(--accent)]">λ</span>
          <span>faeem</span>
          <span className="text-[var(--text-dim)] hidden sm:inline">@portfolio:~$</span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-[var(--text-dim)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[var(--accent)] transition-colors"
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
