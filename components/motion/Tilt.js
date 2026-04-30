'use client';
import { useRef } from 'react';

export default function Tilt({ children, className = '', max = 6, style, ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-cy * max}deg) rotateY(${cx * max}deg) translateY(-2px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <div ref={ref} className={'tilt ' + className} onMouseMove={onMove} onMouseLeave={onLeave} style={style} {...rest}>
      {children}
    </div>
  );
}
