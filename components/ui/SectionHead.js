'use client';
import { useEffect, useRef } from 'react';

export default function SectionHead({ eyebrow, title, lede, align }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current; if (!node || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { node.classList.add('in'); obs.unobserve(node); } }),
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="section-head"
      data-traced
      style={align === 'center' ? { textAlign: 'center', marginInline: 'auto' } : undefined}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h-section">{title}</h2>
      {lede && <p className="lede" style={{ marginTop: 20 }}>{lede}</p>}
    </div>
  );
}
