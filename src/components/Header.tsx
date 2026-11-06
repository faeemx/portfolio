'use client';

import React, { useState, useEffect } from 'react';
import DiscordProfile from './DiscordProfile';

interface NavItem {
  id: string;
  num: string;
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
  { id: 'about', num: '01', label: 'about', href: '#about' },
  { id: 'stack', num: '02', label: 'stack', href: '#stack' },
  { id: 'projects', num: '03', label: 'projects', href: '#projects' },
  { id: 'now', num: '04', label: 'now', href: '#now' },
  { id: 'connect', num: '05', label: 'connect', href: '#connect' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Track active section and header scroll elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3'
          : 'bg-[#0d0d0d]/70 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Left: Brand / Terminal Prompt */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="group font-mono text-sm font-bold text-white hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span className="text-[var(--accent)] group-hover:scale-110 transition-transform">λ</span>
            <span>mando</span>
            <span className="text-[var(--text-dim)] hidden sm:inline">:~$</span>
            <span className="inline-block w-1.5 h-3.5 bg-[var(--accent)] animate-pulse ml-0.5 opacity-80" />
          </a>
        </div>

        {/* Center: Desktop Navigation with Active Section State */}
        <nav className="hidden md:flex items-center gap-1.5 font-mono text-xs">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-1 ${
                  isActive
                    ? 'text-white bg-white/10 border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.3)]'
                    : 'text-[var(--text-dim)] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse shrink-0" />
                )}
                <span className="opacity-40 text-[10px]">{link.num}.</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Mobile Menu Toggle + Discord Profile Widget */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-white/80 hover:text-white hover:border-[var(--accent)] transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-[var(--accent)] text-[11px]">//</span>
            <span>{mobileMenuOpen ? 'close' : activeSection ? activeSection : 'nav'}</span>
          </button>

          {/* Discord Presence Widget */}
          <DiscordProfile />
        </div>
      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0d0d0d]/95 backdrop-blur-2xl px-6 py-4 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 font-mono text-xs">
            <div className="text-[10px] uppercase text-[var(--text-dim)] pb-1 border-b border-white/5 tracking-wider">
              directory
            </div>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/15'
                      : 'text-[var(--text-dim)] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">{isActive ? '›' : '·'}</span>
                    <span className="text-white/60">[{link.num}]</span>
                    <span className="font-medium">{link.label}</span>
                  </div>
                  {isActive && (
                    <span className="text-[10px] text-[var(--accent)] font-semibold">
                      active
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
