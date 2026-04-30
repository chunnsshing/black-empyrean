'use client';
import { useEffect, useRef } from 'react';

export default function HeroParallax({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (ref.current) ref.current.style.transform = `translateY(${window.scrollY * 0.18}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="hero-parallax">{children}</div>;
}
