'use client';
import { useEffect, useRef } from 'react';

let _obs = null;
function getObserver() {
  if (_obs) return _obs;
  _obs = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); _obs.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  return _obs;
}

export default function Reveal({ children, kind = 'up', stagger, as: Tag = 'div', className = '', style }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    getObserver().observe(node);
    return () => { try { _obs && _obs.unobserve(node); } catch {} };
  }, []);
  return (
    <Tag
      ref={ref}
      data-reveal={kind}
      data-stagger={stagger}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
