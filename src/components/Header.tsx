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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070e1b]/80 backdrop-blur-md border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(2,6,23,0.5)] transition-all">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand / Terminal Prompt with Winter badge */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="font-mono text-sm font-bold text-white hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <span className="text-cyan-400">λ</span>
            <span>mando</span>
            <span className="text-[var(--text-dim)] hidden sm:inline">:~$</span>
          </a>

          {/* Winter status chip */}
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono">
            <span className="animate-spin text-cyan-300" style={{ animationDuration: '8s' }}>❄</span>
            <span>winter</span>
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-[var(--text-dim)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-300 transition-colors"
            >
              <span className="opacity-40 text-cyan-500/40">[</span>
              {link.label}
              <span className="opacity-40 text-cyan-500/40">]</span>
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
