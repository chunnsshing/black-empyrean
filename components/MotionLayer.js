'use client';
import { useEffect, useRef, useState } from 'react';

function Starfield() {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dpr = Math.min(2, window.devicePixelRatio || 1);
    let stars = [];
    let raf = 0;

    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((w * h) / 6500);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        z: Math.random() * 0.7 + 0.3,
        r: Math.random() * 1.1 + 0.2,
        tw: Math.random() * Math.PI * 2,
        sp: Math.random() * 0.012 + 0.004,
      }));
    };

    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      stars.forEach(s => {
        s.tw += s.sp;
        const alpha = 0.35 + Math.sin(s.tw) * 0.35;
        ctx.fillStyle = `rgba(175,203,255,${alpha * s.z})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fill();
        s.x += 0.02 * s.z;
        if (s.x > w + 4) s.x = -4;
      });
      if (Math.random() < 0.0035) {
        const sx = Math.random() * w, sy = Math.random() * h * 0.6;
        const len = 80 + Math.random() * 120;
        const grad = ctx.createLinearGradient(sx, sy, sx - len, sy + len * 0.4);
        grad.addColorStop(0, 'rgba(175,203,255,0.95)');
        grad.addColorStop(1, 'rgba(175,203,255,0)');
        ctx.strokeStyle = grad; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx - len, sy + len * 0.4); ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { ctx.setTransform(1, 0, 0, 1, 0, 0); resize(); };
    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} className="starfield" />;
}

function CursorAura() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let raf = 0, tx = 0, ty = 0, x = 0, y = 0;
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const loop = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      if (ref.current) ref.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) raf = requestAnimationFrame(loop);
      else raf = 0;
    };
    const onEnter = () => ref.current && ref.current.classList.add('on');
    const onLeave = () => ref.current && ref.current.classList.remove('on');
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onEnter);
    document.body.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onEnter);
      document.body.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-aura" />;
}

function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100;
      if (ref.current) ref.current.style.width = pct + '%';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" ref={ref} />;
}

function SideRail() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setPct((h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const ticks = 12;
  const lit = Math.round((pct / 100) * (ticks - 1));
  return (
    <div className="side-rail" aria-hidden>
      <span>EMPYREAN</span>
      {Array.from({ length: ticks }).map((_, i) =>
        <span key={i} className={'tick' + (i <= lit ? ' lit' : '')} />
      )}
      <span className="label-rotate">{Math.round(pct)}% / SCROLL</span>
    </div>
  );
}

function BootOverlay() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('emp_booted')) { setGone(true); return; }
    const t = setTimeout(() => { setGone(true); sessionStorage.setItem('emp_booted', '1'); }, 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={'boot-overlay' + (gone ? ' gone' : '')}>
      <div className="ring" />
      <div className="booting">Initialising · The Empyrean</div>
    </div>
  );
}

export default function MotionLayer() {
  return (
    <>
      <BootOverlay />
      <Starfield />
      <CursorAura />
      <ScrollProgress />
      <SideRail />
    </>
  );
}
