'use client';

import LivingBackground from '@/components/LivingBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Projects from '@/components/Projects';
import Now from '@/components/Now';
import Connect from '@/components/Connect';

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* Top Fixed Header with Discord Status & Quick Nav */}
      <Header />

      {/* Layer 0: Winter Living background (3-layer parallax snowfall, winter landscape, atmosphere) */}
      <LivingBackground />

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-12 flex flex-col gap-32 md:gap-48">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Now />
        <Connect />
      </div>
    </main>
  );
}
