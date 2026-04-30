'use client';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ to, from = 0, suffix = '', duration = 1400, format = (n) => n }) {
  const [val, setVal] = useState(from);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(from + (to - from) * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setVal(to);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, from, duration]);
  return <span ref={ref} className="counter">{format(val)}{suffix}</span>;
}
