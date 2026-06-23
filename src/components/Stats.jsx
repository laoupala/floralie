import React, { useEffect, useRef, useState } from 'react';
import './Stats.scss';

const stats = [
  { value: '+200', label: 'Bouquets créés chaque année' },
  { value: '15 ans',  label: 'De passion' },
  { value: '100%', label: 'Fleurs choisies à la main' },
];

const parse = (str) => {
  const match = str.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: str };
  return { prefix: match[1], target: parseInt(match[2], 10), suffix: match[3] };
};

const useCountUp = (target, duration = 1400, active = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
};

const StatItem = ({ value, label, active }) => {
  const { prefix, target, suffix } = parse(value);
  const count = useCountUp(target, 1400, active);

  return (
    <div className="stats__item">
      <span className="stats__value">
        {prefix}{count}{suffix}
      </span>
      <span className="stats__label">{label}</span>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="container stats__inner">
        {stats.map((s, i) => (
          <StatItem key={i} value={s.value} label={s.label} active={active} />
        ))}
      </div>
    </section>
  );
};

export default Stats;