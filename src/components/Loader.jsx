import React, { useState, useEffect } from 'react';
import './Loader.scss';

const DURATION = 2600; // ms du chargement

// Fleur SVG dont les pétales s'ouvrent progressivement
const FlowerSVG = ({ progress }) => {
  const ease = (p) => 1 - Math.pow(1 - p, 2);

  // 8 grands pétales extérieurs
  const outerPetals = Array.from({ length: 8 }, (_, i) => {
    const threshold = (i / 8) * 80;
    const p = ease(Math.max(0, Math.min(1, (progress - threshold) / (80 / 8))));
    return (
      <g key={`o${i}`} transform={`translate(100,100) rotate(${i * 45})`}>
        <ellipse cx="0" cy="-42" rx="13" ry="26"
          fill="#1e4d35"
          opacity={0.55 + 0.45 * p}
          transform={`scale(${p})`}
        />
      </g>
    );
  });

  // 8 pétales intérieurs décalés (apparaissent après)
  const innerPetals = Array.from({ length: 8 }, (_, i) => {
    const threshold = 35 + (i / 8) * 55;
    const p = ease(Math.max(0, Math.min(1, (progress - threshold) / (55 / 8))));
    return (
      <g key={`in${i}`} transform={`translate(100,100) rotate(${i * 45 + 22.5})`}>
        <ellipse cx="0" cy="-27" rx="9" ry="16"
          fill="#2d6b4a"
          opacity={0.7 * p}
          transform={`scale(${p})`}
        />
      </g>
    );
  });

  const centerR = 7 + 13 * ease(Math.min(1, progress / 80));

  return (
    <svg viewBox="0 0 200 200" width="150" height="150" className="loader__svg">
      {outerPetals}
      {innerPetals}
      <circle cx="100" cy="100" r={centerR} fill="#4caf7d" />
      <circle cx="100" cy="100" r={centerR * 0.55} fill="#1e4d35" />
    </svg>
  );
};

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Décommentez pour n'afficher qu'à la première visite de la session :
    // if (sessionStorage.getItem('loaded')) { onComplete?.(); return; }

    const start = performance.now();

    const tick = (now) => {
      const raw = Math.min(((now - start) / DURATION) * 100, 100);
      setProgress(Math.floor(raw));

      if (raw < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setGone(true);
            // sessionStorage.setItem('loaded', '1');
            onComplete?.();
          }, 700);
        }, 350);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${fading ? 'loader--fade' : ''}`}>
      <div className="loader__content">
        <FlowerSVG progress={progress} />
        <span className="loader__pct">
          {progress}<small>%</small>
        </span>
        <div className="loader__bar">
          <div className="loader__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Loader;