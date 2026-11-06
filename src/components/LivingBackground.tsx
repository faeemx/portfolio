'use client';

import { useEffect, useState, useMemo } from 'react';

// Snowflake characters per layer for rich visual texture
const BG_FLAKES = ['·', '.', '•', '·', '.', '°'];
const MID_FLAKES = ['*', '•', 'o', '+', '·', '*', '✦'];
const FG_FLAKES = ['❄', '❅', '✻', '✦', '*', '❄', '❅'];
const FLURRY_FLAKES = ['~*', '·*', '*~', '❅', '❄'];

const CLOUDS = [
  "   ~~~~~~~    ",
  " ~~~~~~~~~~~  ",
  "  ~~~~~~~~~   "
];

const STARS = [
  "   *  .    *    .   ",
  ".     *      *     .",
  "   .      *      .  ",
  " *      .     *    *"
];

const MOUNTAINS = [
  `       /\\       
      /**\\      
     /****\\     
    /      \\    
   /        \\   `,
  `    /\\          
   /  \\    /\\   
  /    \\  /  \\  
 /      \\/    \\ `
];

const HILLS = [
  " _/\\_/~\\___ ",
  " ~\\_/~\\__/~\\",
  " __/\\_/~\\___ "
];

const TREES = [
  `      ^
     /|\\
    /*|*\\
   /*'*'*\\
  /'*'*'*'\\
     |||`,
  `     /\\
    //\\\\
   ///\\\\\\
  ////\\\\\\\\
 //////\\\\\\\\
      ||`,
  `    .o00o
   o000000o
  0000000000
   o000000o
      ||`,
  `   /\\
  /~~\\
 /~~~~\\
   ||`
];

const GRASS = "\\/\\/\\/\\/\\/\\/\\/";

// Winter palette: crisp whites, silver frost, and icy cyan accents
const SNOW_COLORS = ['#ffffff', '#f8fafc', '#e2e8f0', '#cbd5e1', '#a5f3fc', '#7dd3fc', '#bae6fd'];
const CLOUD_COLORS = ['#64748b', '#475569', '#334155', '#94a3b8'];
const STAR_COLORS = ['#a5f3fc', '#e2e8f0', '#cbd5e1', '#94a3b8', '#7dd3fc', '#c7d2fe'];

interface SnowflakeConfig {
  id: number;
  layer: 'bg' | 'mid' | 'fg' | 'flurry';
  char: string;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
  size: string;
  color: string;
  animationType: 'snowFallSwayLeft' | 'snowFallSwayRight' | 'snowFallTumble' | 'snowFlurry';
}

// Deterministic PRNG to ensure 100% SSR-to-client hydration match
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateSnowflakes(): SnowflakeConfig[] {
  const flakes: SnowflakeConfig[] = [];
  let id = 0;
  let seed = 42;

  // 1. Background layer: 30 micro-crystals (slow, gentle sway, soft depth)
  for (let i = 0; i < 30; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);
    const r5 = pseudoRandom(seed++);

    flakes.push({
      id: id++,
      layer: 'bg',
      char: BG_FLAKES[i % BG_FLAKES.length],
      left: Math.round((i * 3.3 + r1 * 3) % 100),
      delay: Math.round(r2 * 8 * 10) / 10,
      duration: Math.round((9 + r3 * 7) * 10) / 10,
      drift: Math.round(-25 + r4 * 50),
      opacity: Math.round((0.25 + r5 * 0.2) * 100) / 100,
      size: 'text-[8px]',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
      animationType: i % 2 === 0 ? 'snowFallSwayLeft' : 'snowFallSwayRight',
    });
  }

  // 2. Midground layer: 34 fluttering snowflakes (moderate speed, sinusoidal sway)
  for (let i = 0; i < 34; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);
    const r5 = pseudoRandom(seed++);

    flakes.push({
      id: id++,
      layer: 'mid',
      char: MID_FLAKES[i % MID_FLAKES.length],
      left: Math.round((i * 2.9 + r1 * 4) % 100),
      delay: Math.round(r2 * 6 * 10) / 10,
      duration: Math.round((5.5 + r3 * 4.5) * 10) / 10,
      drift: Math.round(-45 + r4 * 90),
      opacity: Math.round((0.5 + r5 * 0.25) * 100) / 100,
      size: 'text-[11px]',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
      animationType: i % 3 === 0 ? 'snowFallSwayLeft' : (i % 3 === 1 ? 'snowFallSwayRight' : 'snowFallTumble'),
    });
  }

  // 3. Foreground layer: 20 crisp crystalline snowflakes (tumbling, crisp white/cyan)
  for (let i = 0; i < 20; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);
    const r5 = pseudoRandom(seed++);

    const sizes = ['text-xs', 'text-sm', 'text-base'];
    flakes.push({
      id: id++,
      layer: 'fg',
      char: FG_FLAKES[i % FG_FLAKES.length],
      left: Math.round((i * 4.8 + r1 * 5) % 100),
      delay: Math.round(r2 * 5 * 10) / 10,
      duration: Math.round((4.2 + r3 * 3.5) * 10) / 10,
      drift: Math.round(-35 + r4 * 70),
      opacity: Math.round((0.8 + r5 * 0.2) * 100) / 100,
      size: sizes[i % sizes.length],
      color: i % 3 === 0 ? '#ffffff' : (i % 3 === 1 ? '#a5f3fc' : '#f8fafc'),
      animationType: i % 2 === 0 ? 'snowFallTumble' : 'snowFallSwayLeft',
    });
  }

  // 4. Flurry layer: 8 diagonal wind gusts
  for (let i = 0; i < 8; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);

    flakes.push({
      id: id++,
      layer: 'flurry',
      char: FLURRY_FLAKES[i % FLURRY_FLAKES.length],
      left: Math.round((i * 12 + r1 * 8) % 95),
      delay: Math.round((1 + r2 * 7) * 10) / 10,
      duration: Math.round((3.2 + r3 * 2.2) * 10) / 10,
      drift: Math.round(50 + r4 * 80),
      opacity: 0.75,
      size: 'text-xs',
      color: '#e0f2fe',
      animationType: 'snowFlurry',
    });
  }

  return flakes;
}

function generateStars() {
  return Array.from({ length: 14 }, (_, i) => ({
    id: i,
    content: STARS[i % STARS.length],
    left: (i * 7.1 + 2) % 95,
    pulseDuration: 2 + (i % 4) * 1.2,
    pulseDelay: (i * 0.7) % 3,
    color: STAR_COLORS[i % STAR_COLORS.length],
  }));
}

function generateClouds() {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    content: CLOUDS[i % CLOUDS.length],
    top: 2 + (i * 8) % 55,
    speed: 65 + (i * 11) % 45,
    delay: i * 3,
    color: CLOUD_COLORS[i % CLOUD_COLORS.length],
  }));
}

export default function LivingBackground() {
  const [mounted, setMounted] = useState(false);

  // Pre-compute particle configs deterministically once
  const snowflakes = useMemo(() => generateSnowflakes(), []);
  const stars = useMemo(() => generateStars(), []);
  const clouds = useMemo(() => generateClouds(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR-safe static backdrop — no black flash during hydration
  if (!mounted) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b18]/60 via-[#070e1e]/30 to-[#080d19]/80" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-40 sm:opacity-50 transition-opacity duration-1000"
      style={{ contain: 'strict', willChange: 'transform' }}
    >
      {/* Winter Ambient Gradient: Deep twilight navy into cold ice darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040814]/70 via-[#070e1e]/40 to-[#080d19]/90" />

      {/* Frosty Auroral Cyan Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-indigo-950/20 mix-blend-screen" />

      {/* Cool Radial Vignette — delicate frost at the viewport edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_60%,rgba(6,12,24,0.6)_100%)]" />

      {/* Twinkling Ice Stars */}
      <div className="absolute top-0 left-0 w-full h-1/2 flex flex-col justify-between opacity-60">
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="whitespace-pre ascii-art animate-pulse"
            style={{
              marginLeft: `${star.left}%`,
              animationDuration: `${star.pulseDuration}s`,
              animationDelay: `${star.pulseDelay}s`,
              color: star.color,
            }}
          >
            {star.content}
          </div>
        ))}
      </div>

      {/* Icy Shooting Stars / Meteors */}
      <div className="absolute top-0 left-0 w-full h-1/2">
        {[0, 1, 2].map((i) => (
          <div
            key={`shooting-${i}`}
            className="whitespace-pre ascii-art absolute font-bold"
            style={{
              left: `${15 + i * 32}%`,
              top: `${4 + i * 9}%`,
              animation: `shootingStar ${10 + i * 5}s linear infinite`,
              animationDelay: `${i * 3.5}s`,
              color: '#a5f3fc',
            }}
          >
            ---*
          </div>
        ))}
      </div>

      {/* Winter Clouds — muted silver & slate */}
      <div className="absolute top-8 left-0 w-full h-64">
        {clouds.map((cloud) => (
          <div
            key={`cloud-${cloud.id}`}
            className="whitespace-pre ascii-art absolute opacity-35"
            style={{
              left: '-15%',
              top: `${cloud.top}%`,
              animation: `moveRight ${cloud.speed}s linear infinite`,
              animationDelay: `${cloud.delay}s`,
              color: cloud.color,
            }}
          >
            {cloud.content}
          </div>
        ))}
      </div>

      {/* Multi-layered Organic Snowfall (Sway, Tumble & Flurries) */}
      <div className="absolute inset-0 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={`snow-${flake.id}`}
            className={`whitespace-pre ascii-art absolute font-bold ${flake.size}`}
            style={{
              left: `${flake.left}%`,
              top: '-30px',
              color: flake.color,
              animation: `${flake.animationType} ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
              ['--snow-drift' as string]: `${flake.drift}px`,
              ['--flake-op' as string]: flake.opacity,
            }}
          >
            {flake.char}
          </div>
        ))}
      </div>

      {/* Frosted Mountains Silhouette in the distance */}
      <div
        className="absolute bottom-36 left-0 w-full flex justify-around items-end opacity-45"
        style={{ color: '#64748b' }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`mountain-${i}`}
            className="whitespace-pre ascii-art origin-bottom"
            style={{ color: i % 2 === 0 ? '#64748b' : '#475569' }}
          >
            {MOUNTAINS[i % MOUNTAINS.length]}
          </div>
        ))}
      </div>

      {/* Snow-Covered Horizon Hills */}
      <div
        className="absolute bottom-28 left-0 w-full whitespace-pre ascii-art text-xs sm:text-sm overflow-hidden flex opacity-65"
        style={{ color: '#94a3b8' }}
      >
        {Array.from({ length: 22 }, (_, i) => (
          <span key={`hill-${i}`} style={{ color: i % 2 === 0 ? '#cbd5e1' : '#94a3b8' }}>
            {HILLS[i % HILLS.length]}
          </span>
        ))}
      </div>

      {/* Frosted Pine Trees Line — swaying gently in the cold breeze */}
      <div className="absolute bottom-14 left-0 w-full flex justify-around items-end px-4 opacity-75">
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={`tree-${i}`}
            className="whitespace-pre ascii-art origin-bottom"
            style={{
              animation: `sway ${3.5 + (i % 3)}s ease-in-out infinite alternate`,
              animationDelay: `${(i * 0.4) % 2}s`,
              color: i % 3 === 0 ? '#cbd5e1' : (i % 3 === 1 ? '#94a3b8' : '#7dd3fc'),
            }}
          >
            {TREES[i % TREES.length]}
          </div>
        ))}
      </div>

      {/* Fresh Snow Ground Layer */}
      <div
        className="absolute bottom-0 left-0 w-full whitespace-pre ascii-art text-xs sm:text-sm overflow-hidden flex opacity-85"
        style={{ color: '#f8fafc' }}
      >
        {Array.from({ length: 32 }, (_, i) => (
          <span
            key={`grass-${i}`}
            style={{
              animation: `ripple ${1.8 + (i % 2) * 0.6}s ease-in-out infinite alternate`,
              color: i % 3 === 0 ? '#ffffff' : (i % 3 === 1 ? '#e2e8f0' : '#bae6fd'),
            }}
          >
            {GRASS}
          </span>
        ))}
      </div>
    </div>
  );
}
