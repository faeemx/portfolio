'use client';

import { useEffect, useState, useMemo } from 'react';

// Pre-computed snowflake characters per layer
const BG_FLAKES = ['.', '.', '·', '·'];
const MID_FLAKES = ['*', 'o', '*', '·'];
const FG_FLAKES = ['❄', '*', '❄', '*'];

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

// Winter palette
const SNOW_COLORS = ['#f8fafc', '#e2e8f0', '#cbd5e1', '#a5f3fc'];
const CLOUD_COLORS = ['#94a3b8', '#64748b', '#475569', '#cbd5e1'];
const STAR_COLORS = ['#a5f3fc', '#e2e8f0', '#cbd5e1', '#94a3b8', '#67e8f9', '#a78bfa'];

interface SnowflakeConfig {
  id: number;
  layer: 'bg' | 'mid' | 'fg';
  char: string;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
  size: string;
  color: string;
}

function generateSnowflakes(): SnowflakeConfig[] {
  const flakes: SnowflakeConfig[] = [];
  let id = 0;

  // Background layer: 18 small, slow, dim dots
  for (let i = 0; i < 18; i++) {
    flakes.push({
      id: id++,
      layer: 'bg',
      char: BG_FLAKES[i % BG_FLAKES.length],
      left: (i * 5.5 + (Math.random() * 4)) % 100,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 8,
      drift: -30 + Math.random() * 60,
      opacity: 0.15 + Math.random() * 0.1,
      size: 'text-[8px]',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
    });
  }

  // Midground layer: 16 medium speed, moderate opacity
  for (let i = 0; i < 16; i++) {
    flakes.push({
      id: id++,
      layer: 'mid',
      char: MID_FLAKES[i % MID_FLAKES.length],
      left: (i * 6.2 + (Math.random() * 5)) % 100,
      delay: Math.random() * 6,
      duration: 7 + Math.random() * 5,
      drift: -50 + Math.random() * 100,
      opacity: 0.3 + Math.random() * 0.2,
      size: 'text-[10px]',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
    });
  }

  // Foreground layer: 12 crisp, visible, gentle drift
  for (let i = 0; i < 12; i++) {
    flakes.push({
      id: id++,
      layer: 'fg',
      char: FG_FLAKES[i % FG_FLAKES.length],
      left: (i * 8.3 + (Math.random() * 6)) % 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 4,
      drift: -40 + Math.random() * 80,
      opacity: 0.55 + Math.random() * 0.25,
      size: 'text-xs',
      color: SNOW_COLORS[i % SNOW_COLORS.length],
    });
  }

  return flakes;
}

// Pre-generate star configs
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

// Pre-generate cloud configs
function generateClouds() {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    content: CLOUDS[i % CLOUDS.length],
    top: 2 + (i * 8) % 60,
    speed: 70 + (i * 12) % 50,
    delay: i * 3,
    color: CLOUD_COLORS[i % CLOUD_COLORS.length],
  }));
}

export default function LivingBackground() {
  const [mounted, setMounted] = useState(false);

  // Pre-compute all particle configs once — never recalculated
  const snowflakes = useMemo(() => generateSnowflakes(), []);
  const stars = useMemo(() => generateStars(), []);
  const clouds = useMemo(() => generateClouds(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR-safe static backdrop — no flash of black
  if (!mounted) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
        {/* Winter ambient glow — renders during SSR */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060c18]/40 via-transparent to-[#0a1120]/50" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20"
      style={{ contain: 'strict', willChange: 'transform' }}
    >
      {/* Winter Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c18]/40 via-transparent to-[#0a1120]/50" />

      {/* Frosty Cyan Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/15 via-transparent to-indigo-950/10 mix-blend-screen" />

      {/* Stars — cool winter tones */}
      <div className="absolute top-0 left-0 w-full h-1/2 flex flex-col justify-between opacity-50">
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

      {/* Shooting Stars — icy cyan */}
      <div className="absolute top-0 left-0 w-full h-1/2">
        {[0, 1, 2].map((i) => (
          <div
            key={`shooting-${i}`}
            className="whitespace-pre ascii-art absolute font-bold"
            style={{
              left: `${20 + i * 30}%`,
              top: `${5 + i * 10}%`,
              animation: `shootingStar ${12 + i * 6}s linear infinite`,
              animationDelay: `${i * 4}s`,
              color: '#a5f3fc',
            }}
          >
            ---*
          </div>
        ))}
      </div>

      {/* Winter Clouds — muted slate */}
      <div className="absolute top-10 left-0 w-full h-64">
        {clouds.map((cloud) => (
          <div
            key={`cloud-${cloud.id}`}
            className="whitespace-pre ascii-art absolute opacity-40"
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

      {/* 3-Layer Parallax Snowfall */}
      <div className="absolute inset-0 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={`snow-${flake.id}`}
            className={`whitespace-pre ascii-art absolute font-bold ${flake.size}`}
            style={{
              left: `${flake.left}%`,
              top: '-20px',
              opacity: flake.opacity,
              color: flake.color,
              animation: `snowFallDrift ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
              ['--snow-drift' as string]: `${flake.drift}px`,
            }}
          >
            {flake.char}
          </div>
        ))}
      </div>

      {/* Frost Horizon Line — subtle cool tones */}
      <div
        className="absolute bottom-12 left-0 w-full whitespace-pre ascii-art text-xs overflow-hidden flex opacity-30"
        style={{ color: '#94a3b8' }}
      >
        {Array.from({ length: 25 }, (_, i) => (
          <span key={`frost-${i}`} style={{ color: i % 2 === 0 ? '#94a3b8' : '#64748b' }}>
            {'─·─·─·─'}
          </span>
        ))}
      </div>
    </div>
  );
}
