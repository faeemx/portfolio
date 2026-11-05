'use client';

import { useEffect, useState } from 'react';

const SQUIRREL_SIT = `
 (\\_/)
 ( •_•)
 / >🌰
`.trim();

const SQUIRREL_RUN_1 = `
 (\\_/)
 (•_• )
 />  \\>
`.trim();

const SQUIRREL_RUN_2 = `
 (\\_/)
 ( •_•)
 / > \\>
`.trim();

const SQUIRREL_LOOK = `
 (\\_/)
 (O_O )
 / >🌰
`.trim();

export default function Squirrel() {
  const [squirrelState, setSquirrelState] = useState(SQUIRREL_SIT);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [target, setTarget] = useState({ x: 50, y: 50 });
  
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Move squirrel based on scroll
      const yPos = 20 + (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 60;
      setTarget(prev => ({ ...prev, y: yPos }));
      
      setSquirrelState(Math.random() > 0.5 ? SQUIRREL_RUN_1 : SQUIRREL_RUN_2);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setSquirrelState(Math.random() > 0.8 ? SQUIRREL_LOOK : SQUIRREL_SIT);
      }, 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Occasionally look at cursor or move towards it
      if (Math.random() > 0.95) {
        const xPos = Math.max(10, Math.min(90, (e.clientX / window.innerWidth) * 100));
        setTarget(prev => ({ ...prev, x: xPos }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    // Animation loop for movement
    let animationFrameId: number;
    
    const animate = () => {
      setPosition(prev => {
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        
        // Only update if distance is significant
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          return {
            x: prev.x + dx * 0.05,
            y: prev.y + dy * 0.05
          };
        }
        return prev;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [target]);

  return (
    <div 
      className="fixed z-50 pointer-events-none transition-transform duration-75"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        color: 'var(--accent)'
      }}
    >
      <pre className="ascii-art text-sm sm:text-base font-bold whitespace-pre">
        {squirrelState}
      </pre>
    </div>
  );
}