'use client';

import { useState, useEffect } from 'react';

export default function AnimatedHeading({
  lines,
  className = '',
  initialDelay = 200,
  charDelay = 30,
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const delay =
              lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                key={charIndex}
                className="inline-block transition-all"
                style={{
                  opacity:   started ? 1 : 0,
                  transform: started ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDuration: '500ms',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
