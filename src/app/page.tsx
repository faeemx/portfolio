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
    <main className="relative min-h-screen selection:bg-[#22c55e]/30 selection:text-white">
      {/* Top Fixed Header with Discord Status & Quick Nav */}
      <Header />

      {/* Layer 0: Winter Living Background with Organic Snowfall & ASCII Landscape */}
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
