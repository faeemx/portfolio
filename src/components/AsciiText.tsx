'use client';

import { useEffect, useState } from 'react';
import { scrambleText } from '@/lib/pretext';

interface AsciiTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
}

export default function AsciiText({ text, as: Component = 'span', className = '', delay = 0 }: AsciiTextProps) {
  const [displayText, setDisplayText] = useState(() => text);
  const [started, setStarted] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
      setIsScrambling(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let progress = 0;
    let animationFrameId: number;

    const animate = () => {
      progress += 0.03; // slightly faster speed
      if (progress >= 1) {
        setDisplayText(text);
        setIsScrambling(false);
        return;
      }
      setDisplayText(scrambleText(text, progress));
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [text, started]);

  // If scrambling, apply a random color from the variables
  const colors = [
    'var(--purple)', 'var(--cyan)', 'var(--lime)', 
    'var(--orange)', 'var(--pink)', 'var(--indigo)'
  ];
  const color = isScrambling ? colors[Math.floor(Math.random() * colors.length)] : undefined;

  return (
    <Component 
      className={`scramble-text transition-colors duration-75 ${className}`}
      style={{ color }}
    >
      {started ? displayText : <span className="opacity-[0.08]">{text}</span>}
    </Component>
  );
}