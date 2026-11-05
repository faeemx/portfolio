'use client';

import Squirrel from '@/components/Squirrel';
import Forest from '@/components/Forest';
import Library from '@/components/Library';
import Workshop from '@/components/Workshop';
import Observatory from '@/components/Observatory';
import Campfire from '@/components/Campfire';
import LivingBackground from '@/components/LivingBackground';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--accent)] selection:bg-opacity-30 selection:text-white">
      {/* Layer 0: Living ASCII background */}
      <LivingBackground />

      {/* Layer 1: The guide */}
      <Squirrel />

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-12 flex flex-col gap-32 md:gap-64">
        <Hero />
        <Forest />
        <Library />
        <Workshop />
        <Observatory />
        <Campfire />
      </div>
    </main>
  );
}