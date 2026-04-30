'use client';
import { useEffect, useRef } from 'react';

export default function Reveal({ children, kind = 'up', stagger, as: Tag = 'div', className = '', style }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(node);
    return () => obs.disconnect();
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
