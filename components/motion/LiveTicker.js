'use client';
import { useEffect, useState } from 'react';

export default function LiveTicker({ base, jitter = 1, intervalMs = 2400, format = (n) => n }) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      setV(base + Math.floor((Math.random() - 0.5) * 2 * jitter));
    }, intervalMs);
    return () => clearInterval(t);
  }, [base, jitter, intervalMs]);
  return <>{format(v)}</>;
}
