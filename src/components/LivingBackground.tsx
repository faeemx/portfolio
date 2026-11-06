'use client';

import { useEffect, useState, useMemo } from 'react';

// Snowflake characters per layer for rich visual texture (inspired by main branch + enhanced crystals)
const BG_FLAKES = ['·', '.', '•', '·', '.', '°'];
const MID_FLAKES = ['*', 'o', '•', '+', '·', '*', '✦'];
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

// Landscape elements (from main branch ASCII art)
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
  `   /\\
  /~~\\
 /~~~~\\
   ||`
];

const GRASS = "\\/\\/\\/\\/\\/\\/\\/";

// Winter palette: crisp whites, silver frost, and cool atmospheric accents
const SNOW_COLORS = ['#ffffff', '#f8fafc', '#e2e8f0', '#cbd5e1', '#f1f5f9', '#bae6fd'];
const CLOUD_COLORS = ['#64748b', '#475569', '#334155', '#94a3b8'];
const STAR_COLORS = ['#e2e8f0', '#cbd5e1', '#94a3b8', '#a5f3fc', '#f8fafc', '#c7d2fe'];

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
  animationType: 'snowFallSwayLeft' | 'snowFallSwayRight' | 'snowFallTumble' | 'snowFallMicro' | 'snowFlurry';
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

  // 1. Background layer: 26 micro-crystals (slow, gentle sway, soft depth)
  for (let i = 0; i < 26; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);
    const r5 = pseudoRandom(seed++);

    flakes.push({
      id: id++,
      layer: 'bg',
      char: BG_FLAKES[i % BG_FLAKES.length],
      left: Math.round((i * 3.8 + r1 * 4) % 100),
      delay: Math.round(r2 * 8 * 10) / 10,
      duration: Math.round((12 + r3 * 8) * 10) / 10,
      drift: Math.round(-20 + r4 * 40),
      opacity: Math.round((0.2 + r5 * 0.15) * 100) / 100,
      size: 'text-[9px]',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
      animationType: 'snowFallMicro',
    });
  }

  // 2. Midground layer: 28 fluttering snowflakes (moderate speed, sinusoidal sway)
  for (let i = 0; i < 28; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);
    const r5 = pseudoRandom(seed++);

    flakes.push({
      id: id++,
      layer: 'mid',
      char: MID_FLAKES[i % MID_FLAKES.length],
      left: Math.round((i * 3.5 + r1 * 5) % 100),
      delay: Math.round(r2 * 6 * 10) / 10,
      duration: Math.round((7 + r3 * 5) * 10) / 10,
      drift: Math.round(-40 + r4 * 80),
      opacity: Math.round((0.45 + r5 * 0.25) * 100) / 100,
      size: 'text-[11px]',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
      animationType: i % 2 === 0 ? 'snowFallSwayLeft' : 'snowFallSwayRight',
    });
  }

  // 3. Foreground layer: 16 large crystalline snowflakes (flutter & 3D tumble)
  for (let i = 0; i < 16; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);
    const r5 = pseudoRandom(seed++);

    flakes.push({
      id: id++,
      layer: 'fg',
      char: FG_FLAKES[i % FG_FLAKES.length],
      left: Math.round((i * 6.2 + r1 * 6) % 100),
      delay: Math.round(r2 * 5 * 10) / 10,
      duration: Math.round((4.5 + r3 * 3.5) * 10) / 10,
      drift: Math.round(-55 + r4 * 110),
      opacity: Math.round((0.75 + r5 * 0.25) * 100) / 100,
      size: i % 3 === 0 ? 'text-base' : 'text-sm',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
      animationType: 'snowFallTumble',
    });
  }

  // 4. Gust / Flurry layer: 6 occasional wind gust flakes
  for (let i = 0; i < 6; i++) {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    const r3 = pseudoRandom(seed++);
    const r4 = pseudoRandom(seed++);

    flakes.push({
      id: id++,
      layer: 'flurry',
      char: FLURRY_FLAKES[i % FLURRY_FLAKES.length],
      left: Math.round((i * 16 + r1 * 8) % 100),
      delay: Math.round((2 + r2 * 7) * 10) / 10,
      duration: Math.round((4 + r3 * 2.5) * 10) / 10,
      drift: Math.round(60 + r4 * 60),
      opacity: 0.65,
      size: 'text-xs',
      color: '#ffffff',
      animationType: 'snowFlurry',
    });
  }

  return flakes;
}

// Pre-generate star configs with deterministic PRNG
function generateStars() {
  let seed = 101;
  return Array.from({ length: 16 }, (_, i) => {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    return {
      id: i,
      content: STARS[i % STARS.length],
      left: Math.round((i * 6.2 + r1 * 5) % 95),
      pulseDuration: Math.round((2.5 + r2 * 2.5) * 10) / 10,
      pulseDelay: Math.round((i * 0.5) % 3 * 10) / 10,
      color: STAR_COLORS[i % STAR_COLORS.length],
    };
  });
}

// Pre-generate cloud configs with deterministic PRNG
function generateClouds() {
  let seed = 202;
  return Array.from({ length: 7 }, (_, i) => {
    const r1 = pseudoRandom(seed++);
    const r2 = pseudoRandom(seed++);
    return {
      id: i,
      content: CLOUDS[i % CLOUDS.length],
      top: Math.round(4 + (i * 7.5 + r1 * 4) % 45),
      speed: Math.round(75 + (i * 12 + r2 * 25)),
      delay: i * 3.5,
      color: CLOUD_COLORS[i % CLOUD_COLORS.length],
    };
  });
}

export default function LivingBackground() {
  const [mounted, setMounted] = useState(false);

  // Pre-compute configs once with deterministic values — zero Math.random() in render
  const snowflakes = useMemo(() => generateSnowflakes(), []);
  const stars = useMemo(() => generateStars(), []);
  const clouds = useMemo(() => generateClouds(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR-safe static backdrop: prevents black flash while maintaining zero layout shift
  if (!mounted) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-25">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1525]/30 via-transparent to-[#0a1120]/40" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-25"
      style={{ contain: 'strict', willChange: 'transform' }}
    >
      {/* Crisp Winter Ambient Atmosphere Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1525]/30 via-transparent to-[#0a1120]/40" />

      {/* Subtle Cold Sky Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#040810]/40" />

      {/* Stars in clear winter sky with gentle twinkling */}
      <div className="absolute top-0 left-0 w-full h-1/2 flex flex-col justify-between opacity-55">
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="whitespace-pre ascii-art"
            style={{
              marginLeft: `${star.left}%`,
              animation: `twinkleWinter ${star.pulseDuration}s ease-in-out infinite`,
              animationDelay: `${star.pulseDelay}s`,
              color: star.color,
            }}
          >
            {star.content}
          </div>
        ))}
      </div>

      {/* Shooting Stars across cold night sky */}
      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={`shooting-${i}`}
            className="whitespace-pre ascii-art absolute font-bold"
            style={{
              left: `${18 + i * 32}%`,
              top: `${5 + i * 9}%`,
              animation: `shootingStar ${12 + i * 5}s linear infinite`,
              animationDelay: `${i * 3.8}s`,
              color: '#cbd5e1',
            }}
          >
            ---*
          </div>
        ))}
      </div>

      {/* Winter Clouds — muted slate & silver drifting slowly */}
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

      {/* Multi-layered Organic Snowfall (Sway, Tumble & Micro-drift) */}
      <div className="absolute inset-0 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={`snow-${flake.id}`}
            className={`whitespace-pre ascii-art absolute font-bold select-none ${flake.size}`}
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

      {/* Frosted Mountains Silhouette in distance (from main branch) */}
      <div
        className="absolute bottom-36 left-0 w-full flex justify-around items-end opacity-40"
        style={{ color: '#475569' }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`mountain-${i}`}
            className="whitespace-pre ascii-art origin-bottom"
            style={{ color: i % 2 === 0 ? '#475569' : '#334155' }}
          >
            {MOUNTAINS[i % MOUNTAINS.length]}
          </div>
        ))}
      </div>

      {/* Snow-Covered Horizon Hills (from main branch) */}
      <div
        className="absolute bottom-28 left-0 w-full whitespace-pre ascii-art text-xs sm:text-sm overflow-hidden flex opacity-50"
        style={{ color: '#64748b' }}
      >
        {Array.from({ length: 22 }, (_, i) => (
          <span key={`hill-${i}`} style={{ color: i % 2 === 0 ? '#94a3b8' : '#64748b' }}>
            {HILLS[i % HILLS.length]}
          </span>
        ))}
      </div>

      {/* Frosted Pine Trees — swaying gently in the winter wind (from main branch) */}
      <div className="absolute bottom-14 left-0 w-full flex justify-around items-end px-4 opacity-65">
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={`tree-${i}`}
            className="whitespace-pre ascii-art origin-bottom"
            style={{
              animation: `swayWinter ${4 + (i % 3) * 0.8}s ease-in-out infinite alternate`,
              animationDelay: `${(i * 0.5) % 2.5}s`,
              color: i % 3 === 0 ? '#cbd5e1' : (i % 3 === 1 ? '#94a3b8' : '#64748b'),
            }}
          >
            {TREES[i % TREES.length]}
          </div>
        ))}
      </div>

      {/* Fresh Snow Ground Layer with gentle ripple (from main branch) */}
      <div
        className="absolute bottom-0 left-0 w-full whitespace-pre ascii-art text-xs sm:text-sm overflow-hidden flex opacity-75"
        style={{ color: '#e2e8f0' }}
      >
        {Array.from({ length: 32 }, (_, i) => (
          <span
            key={`grass-${i}`}
            style={{
              animation: `ripple ${2 + (i % 2) * 0.6}s ease-in-out infinite alternate`,
              color: i % 3 === 0 ? '#f8fafc' : (i % 3 === 1 ? '#e2e8f0' : '#cbd5e1'),
            }}
          >
            {GRASS}
          </span>
        ))}
      </div>
    </div>
  );
}
