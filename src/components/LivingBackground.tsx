'use client';

import { useEffect, useState } from 'react';

type WeatherState = 'CLEAR' | 'SUNNY' | 'CLOUDY' | 'RAIN' | 'HEAVY_RAIN' | 'THUNDERSTORM' | 'SNOW' | 'STORM';

const STARS = [
  "   *  .    *    .   ",
  ".     *      *     .",
  "   .      *      .  ",
  " *      .     *    *"
];

const RAIN_DROPS = ["|", "/", "\\", "'"];
const SNOW_FLAKES = ["*", ".", "o", "❄"];

const CLOUDS = [
  "   ~~~~~~~    ",
  " ~~~~~~~~~~~  ",
  "  ~~~~~~~~~   "
];

const HILLS = [
  " _/\\_/~\\___ ",
  " ~\\_/~\\__/~\\",
  " __/\\_/~\\___ "
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

const TREES = [
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
  `      ^
     /|\\
    /*|*\\
   /*'*'*\\
  /'*'*'*'\\
     |||`,
  `   /\\
  /~~\\
 /~~~~\\
   ||`
];

const LEAF = "v";
const GRASS = "\\/\\/\\/\\/\\/\\/\\/";
const WIND_WAVES = [
  "  ~ - ~ = - ~  ",
  " - = ~ - = ~ - ",
  " ~ ~ - - = ~ = "
];

const CALM_COLORS = [
  'var(--purple)', 'var(--cyan)', 'var(--lime)', 
  'var(--orange)', 'var(--pink)', 'var(--indigo)'
];

const SUNNY_COLORS = [
  '#fde047', '#facc15', '#eab308', '#ca8a04', '#f59e0b', '#d97706'
];

const SNOW_COLORS = [
  '#e2e8f0', '#cbd5e1', '#f8fafc', '#f1f5f9'
];

const STORM_COLORS = [
  'var(--orange)', '#ef4444', '#b91c1c', '#7f1d1d'
];

const CLOUD_COLORS = [
  'var(--indigo)', '#64748b', '#94a3b8', '#cbd5e1'
];

export default function LivingBackground() {
  const [mounted, setMounted] = useState(false);
  const [weather, setWeather] = useState<WeatherState>('CLEAR');

  useEffect(() => {
    setMounted(true);

    const changeWeather = () => {
      const rand = Math.random();
      if (rand < 0.25) setWeather('CLEAR');
      else if (rand < 0.40) setWeather('SUNNY');
      else if (rand < 0.55) setWeather('CLOUDY');
      else if (rand < 0.65) setWeather('SNOW');
      else if (rand < 0.80) setWeather('RAIN');
      else if (rand < 0.90) setWeather('HEAVY_RAIN');
      else if (rand < 0.95) setWeather('THUNDERSTORM');
      else setWeather('STORM');
    };

    // Change weather every 20 seconds
    const interval = setInterval(changeWeather, 20000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const isStorm = weather === 'STORM';
  const isCloudy = weather === 'CLOUDY' || weather === 'RAIN' || weather === 'HEAVY_RAIN' || weather === 'THUNDERSTORM' || weather === 'SNOW';
  const isRain = weather === 'RAIN' || weather === 'HEAVY_RAIN' || weather === 'THUNDERSTORM';
  const isHeavyRain = weather === 'HEAVY_RAIN' || weather === 'THUNDERSTORM';
  const isThunderstorm = weather === 'THUNDERSTORM';
  const isSnow = weather === 'SNOW';
  const isSunny = weather === 'SUNNY';
  const isClear = weather === 'CLEAR';

  const getColors = () => {
    if (isStorm) return STORM_COLORS;
    if (isSunny) return SUNNY_COLORS;
    if (isSnow) return SNOW_COLORS;
    if (isCloudy) return CLOUD_COLORS;
    return CALM_COLORS;
  };

  const colors = getColors();

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-1000 ${isStorm || isThunderstorm ? 'opacity-35' : 'opacity-20'}`}>
      
      {/* Dusty Red Dead Environment Overlay during storm */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-[#3a0d0d] via-transparent to-[#1a0505] mix-blend-color-burn transition-opacity duration-2000 ${isStorm ? 'opacity-40' : 'opacity-0'}`} 
      />

      {/* Sunny Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-yellow-900/20 via-orange-500/10 to-transparent mix-blend-screen transition-opacity duration-2000 ${isSunny ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* Cloud Overlay during overcast */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-transparent mix-blend-multiply transition-opacity duration-2000 ${isCloudy ? 'opacity-60' : 'opacity-0'}`} 
      />

      {/* Thunderstorm Flash Overlay */}
      <div 
        className={`absolute inset-0 bg-white pointer-events-none mix-blend-overlay transition-opacity ${isThunderstorm ? 'animate-thunder' : 'opacity-0'}`}
      />

      {/* Precipitation Overlay (Rain or Snow) */}
      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000 overflow-hidden ${(isRain || isSnow) ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(60)].map((_, i) => {
          const showParticle = isHeavyRain || (isRain && i < 30) || (isSnow && i < 40);
          return (
            <div 
              key={`precip-${i}`}
              className={`whitespace-pre ascii-art absolute font-bold transition-opacity duration-500 ${showParticle ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animation: isRain 
                  ? `fallingFast ${isHeavyRain ? 0.3 + Math.random() * 0.2 : 0.5 + Math.random() * 0.5}s linear infinite` 
                  : `falling ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                color: isSnow ? '#e2e8f0' : '#94a3b8'
              }}
            >
              {isRain ? RAIN_DROPS[i % RAIN_DROPS.length] : SNOW_FLAKES[i % SNOW_FLAKES.length]}
            </div>
          );
        })}
      </div>

      {/* Sky / Stars - Hide if cloudy */}
      <div className={`absolute top-0 left-0 w-full h-1/2 flex flex-col justify-between transition-opacity duration-2000 ${isCloudy ? 'opacity-0' : 'opacity-50'}`}>
        {[...Array(12)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="whitespace-pre ascii-art animate-pulse transition-colors duration-1000"
            style={{ 
              marginLeft: `${Math.random() * 90}%`,
              animationDuration: `${1 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
              color: isStorm ? STORM_COLORS[i % STORM_COLORS.length] : CALM_COLORS[i % CALM_COLORS.length]
            }}
          >
            {STARS[i % STARS.length]}
          </div>
        ))}
      </div>

      {/* Strong Wind Waves - Only visible in STORM */}
      <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-between py-10 transition-opacity duration-1000 ${isStorm ? 'opacity-40' : 'opacity-0'}`}>
        {[...Array(12)].map((_, i) => (
          <div 
            key={`wind-${i}`}
            className="whitespace-pre ascii-art absolute font-bold"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 90}%`,
              animation: `windRush ${0.5 + Math.random()}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
              color: 'var(--orange)'
            }}
          >
            {WIND_WAVES[i % WIND_WAVES.length]}
          </div>
        ))}
      </div>

      {/* Shooting Stars - Hide if cloudy */}
      <div className={`absolute top-0 left-0 w-full h-1/2 transition-opacity duration-1000 ${isCloudy ? 'opacity-0' : 'opacity-100'}`}>
        {[...Array(3)].map((_, i) => (
          <div 
            key={`shooting-${i}`}
            className="whitespace-pre ascii-art absolute font-bold"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 30}%`,
              animation: `shootingStar ${isStorm ? 3 + Math.random() * 5 : 10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              color: isStorm ? 'var(--orange)' : 'var(--cyan)'
            }}
          >
            ---*
          </div>
        ))}
      </div>

      {/* Clouds - More dense when Cloudy */}
      <div className="absolute top-10 left-0 w-full h-64">
        {[...Array(isCloudy ? 15 : 6)].map((_, i) => (
          <div 
            key={`cloud-${i}`}
            className="whitespace-pre ascii-art absolute opacity-50 transition-colors duration-2000"
            style={{ 
              left: `${(i * (isCloudy ? 10 : 20)) - 10}%`,
              top: `${Math.random() * 80}%`,
              animation: `moveRight ${isStorm ? 15 : (isCloudy ? 50 : 80) + Math.random() * 30}s linear infinite`,
              color: colors[i % colors.length]
            }}
          >
            {CLOUDS[i % CLOUDS.length]}
          </div>
        ))}
      </div>

      {/* Falling Leaves */}
      <div className="absolute bottom-20 left-0 w-full h-64 overflow-hidden">
        {[...Array(isStorm ? 25 : 10)].map((_, i) => (
          <div 
            key={`leaf-${i}`}
            className="whitespace-pre ascii-art absolute transition-colors duration-1000"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              animation: isStorm ? `fallingFast ${1 + Math.random() * 3}s linear infinite` : `falling ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              color: isStorm ? STORM_COLORS[i % STORM_COLORS.length] : (Math.random() > 0.5 ? 'var(--orange)' : 'var(--lime)')
            }}
          >
            {LEAF}
          </div>
        ))}
      </div>

      {/* Mountains */}
      <div className="absolute bottom-40 left-0 w-full flex justify-around items-end opacity-40 transition-colors duration-2000" style={{ color: isStorm ? 'var(--orange)' : (isSnow ? '#cbd5e1' : (isCloudy ? '#475569' : 'var(--indigo)')) }}>
        {[...Array(6)].map((_, i) => (
          <div 
            key={`mountain-${i}`}
            className="whitespace-pre ascii-art origin-bottom transition-colors duration-2000"
          >
            {MOUNTAINS[i % MOUNTAINS.length]}
          </div>
        ))}
      </div>

      {/* Horizon / Hills */}
      <div className="absolute bottom-32 left-0 w-full whitespace-pre ascii-art text-xs sm:text-sm overflow-hidden flex opacity-70 transition-colors duration-2000" style={{ color: isStorm ? 'var(--orange)' : (isSnow ? '#e2e8f0' : (isCloudy ? '#64748b' : 'var(--purple)')) }}>
        {[...Array(20)].map((_, i) => (
          <span key={`hill-${i}`}>{HILLS[i % HILLS.length]}</span>
        ))}
      </div>

      {/* Forest Line */}
      <div className="absolute bottom-16 left-0 w-full flex justify-around items-end px-4 opacity-80">
        {[...Array(10)].map((_, i) => (
          <div 
            key={`tree-${i}`}
            className="whitespace-pre ascii-art origin-bottom transition-colors duration-2000"
            style={{
              animation: isStorm ? `swayAggressive ${0.5 + Math.random()}s ease-in-out infinite alternate` : `sway ${3 + Math.random() * 3}s ease-in-out infinite alternate`,
              color: colors[i % colors.length]
            }}
          >
            {TREES[i % TREES.length]}
          </div>
        ))}
      </div>

      {/* Grass Ground */}
      <div className="absolute bottom-0 left-0 w-full whitespace-pre ascii-art text-xs sm:text-sm overflow-hidden flex transition-colors duration-2000" style={{ color: isStorm ? 'var(--orange)' : (isSnow ? '#f8fafc' : (isCloudy ? '#475569' : 'var(--lime)')) }}>
        {[...Array(30)].map((_, i) => (
          <span 
            key={`grass-${i}`}
            style={{
              animation: isStorm ? `rippleFast ${0.3 + Math.random() * 0.3}s ease-in-out infinite alternate` : `ripple ${1.5 + Math.random()}s ease-in-out infinite alternate`
            }}
          >
            {GRASS}
          </span>
        ))}
      </div>

    </div>
  );
}