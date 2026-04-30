'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';
import Counter from '@/components/motion/Counter';
import HeroParallax from '@/components/motion/HeroParallax';
import LiveTicker from '@/components/motion/LiveTicker';
import SectionHead from '@/components/ui/SectionHead';

const ROTATING_WORDS = ['AI Agents', 'ERP Systems', 'Data Platforms', 'Digital Products', 'Real Results'];

function HeroRotator() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setI(p => (p + 1) % ROTATING_WORDS.length); setShow(true); }, 280);
    }, 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="rotator-word" style={{ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(-4px)' }}>
      {ROTATING_WORDS[i]}
    </span>
  );
}

const SERVICES = [
  {
    name: 'AI Solutions & Integration',
    desc: 'Custom agents, LLM workflows, and AI products integrated into the systems you already run.',
    tag: 'AI',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" />
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
      </svg>
    ),
  },
  {
    name: 'Enterprise Resource Strategy',
    desc: 'End-to-end ERP planning, customisation, and implementation. From spreadsheets to live operations.',
    tag: 'ERP',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    name: 'Customer Data & Analytics',
    desc: 'Dashboards, pipelines, and decision-grade reporting that turn raw operations into insight.',
    tag: 'DATA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 20h18M6 20V10M11 20V4M16 20v-7M21 20v-3" />
      </svg>
    ),
  },
  {
    name: 'NextGen Experience Design',
    desc: 'Research-led UI/UX for products people actually want to use. Web, mobile, and internal tools.',
    tag: 'UX',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 17l9-9 4 4-9 9H3v-4z" /><path d="M14 6l2-2 4 4-2 2" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discover', desc: 'We sit with the problem. Stakeholder workshops, system audits, real conversations.' },
  { num: '02', title: 'Design',   desc: 'Solution architecture and UX shaped around constraints — budget, team, timeline.' },
  { num: '03', title: 'Develop',  desc: 'Build with seniors driving direction, juniors driving velocity. Weekly demos.' },
  { num: '04', title: 'Deploy',   desc: 'Ship it, train your team, document everything. Then keep the lights on with you.' },
];

const PROCESS_ICONS = {
  Discover: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>,
  Design:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 17l9-9 4 4-9 9H3v-4z" /><path d="M14 6l2-2 4 4-2 2" /></svg>,
  Develop:  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 6l-5 6 5 6" /><path d="M16 6l5 6-5 6" /></svg>,
  Deploy:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12l7-7 7 7" /><path d="M12 5v14" /></svg>,
};

export default function HomePage() {
  return (
    <>
      {/* Announcement */}
      <div className="announce">
        <strong>NEW</strong> · AI Agents v2 · Custom-trained for Southeast Asia · Now available →
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-orbit" aria-hidden>
          <span className="satellite" />
          <span className="satellite s2" />
        </div>
        <div className="container hero-inner">
          <HeroParallax>
            <Reveal kind="fade">
              <div className="hero-tag-rotator">
                <span className="dot" />
                <span>Now Building</span>
                <HeroRotator />
              </div>
            </Reveal>

            <Reveal stagger={1}>
              <h1 className="h-display" style={{ maxWidth: '16ch' }}>
                Connecting <span className="serif-italic shimmer">intelligence</span> to your existing business.
              </h1>
            </Reveal>

            <Reveal stagger={2}>
              <p className="lede" style={{ marginTop: 28, maxWidth: '60ch' }}>
                Senior practitioners and emerging talent, deploying AI agents and enterprise
                systems that are fast, affordable, and built to last — across Southeast Asia.
              </p>
            </Reveal>

            <Reveal stagger={3}>
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-primary">
                  Talk to us <span className="btn-arrow">→</span>
                </Link>
                <Link href="/portfolio" className="btn btn-outline">
                  See our work <span className="btn-arrow">→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal stagger={4}>
              <div className="hero-readout">
                <div>
                  <div className="label">/ Region</div>
                  <div className="val live">SEA + AU</div>
                </div>
                <div>
                  <div className="label">/ Agents Live</div>
                  <div className="val live"><LiveTicker base={10} jitter={1} format={(n) => `${n} / Production`} /></div>
                </div>
                <div>
                  <div className="label">/ Avg Time-to-Pilot</div>
                  <div className="val live"><LiveTicker base={21} jitter={2} intervalMs={3200} format={(n) => `≈ ${n} Days`} /></div>
                </div>
                <div>
                  <div className="label">/ Languages Supported</div>
                  <div className="val live">EN · MS · ID · ZH</div>
                </div>
              </div>
            </Reveal>
          </HeroParallax>
        </div>
        <div className="scroll-hint" aria-hidden>
          <span>Scroll</span>
          <span className="arrow" />
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="OUR SERVICES"
            title={<>Four ways we <span className="serif-italic">move</span> your business forward.</>}
            lede="A full-stack capability — from intelligence to interface — delivered as one team."
          />
          <div className="grid-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} stagger={Math.min(i + 1, 4)}>
                <Tilt className="card card-accent glow-card" max={5}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--glass-2)', border: '1px solid var(--hairline)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--periwinkle)' }}>
                      {s.icon}
                    </div>
                    <span className="muted-mono">/ {s.tag}</span>
                  </div>
                  <h3 className="h-card" style={{ marginTop: 14 }}>{s.name}</h3>
                  <p className="muted" style={{ fontSize: 14, margin: 0 }}>{s.desc}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Stats */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="THE EMPYREAN DIFFERENCE"
            title={<>Senior thinking. <span className="serif-italic">Junior energy.</span></>}
            lede="We pair seasoned practitioners with hungry junior talent. Senior judgment keeps the work safe and on-strategy; junior energy keeps it fast and affordable. You get both — for the price of neither alone."
          />
          <div className="stats">
            <Reveal stagger={1}>
              <div className="stat">
                <div className="stat-num"><span className="serif-italic"><Counter to={4} format={(n) => Math.round(n)} /></span></div>
                <div className="stat-label">/ Markets · SEA & beyond</div>
              </div>
            </Reveal>
            <Reveal stagger={2}>
              <div className="stat">
                <div className="stat-num"><span className="serif-italic"><Counter to={10} format={(n) => Math.round(n)} /></span></div>
                <div className="stat-label">/ AI products · in production</div>
              </div>
            </Reveal>
            <Reveal stagger={3}>
              <div className="stat">
                <div className="stat-num"><span className="serif-italic"><Counter to={21} suffix="+" format={(n) => Math.round(n)} /></span></div>
                <div className="stat-label">/ Practitioners · across disciplines</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="OUR PROCESS"
            title={<>From idea to <span className="serif-italic">impact</span> in four steps.</>}
          />
          <div className="process">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.num} stagger={Math.min(i + 1, 4)} kind="up">
                <div className="process-step">
                  <span className="num">/ {s.num}</span>
                  <div className="icon">{PROCESS_ICONS[s.title]}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="circuit-divider" aria-hidden style={{ marginTop: 0 }} />
          <div style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn btn-outline">
              Not sure where to start? Say hi. <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Spark Banner */}
      <section className="dark-section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <p className="eyebrow">SPARK*</p>
            <h2 className="h-section" style={{ maxWidth: '20ch' }}>
              We don't just build tech.<br />
              <span className="serif-italic">We build the people</span> who build tech.
            </h2>
          </div>
          <Link href="/spark" className="btn btn-outline">
            Learn More <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Join Us */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="JOIN US"
            title={<>Two ways in. <span className="serif-italic">Same team.</span></>}
          />
          <div className="grid-2">
            <Reveal kind="left" stagger={1}>
              <div className="dark-card glow-card">
                <span className="glow" />
                <p className="eyebrow">FOR EMERGING TALENT</p>
                <h3>Real project experience. Senior mentorship.</h3>
                <p>A portfolio that stands out. No coffee-fetching, no fake intern projects — work that ships.</p>
                <Link href="/contact" className="btn">
                  Join the team <span className="btn-arrow">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal kind="right" stagger={2}>
              <div className="dark-card glow-card">
                <span className="glow" />
                <p className="eyebrow">FOR INDUSTRY PROFESSIONALS</p>
                <h3>Contribute as a consultant, advisor, or domain expert.</h3>
                <p>Problems worth solving. Flexible engagement. Work alongside emerging talent you'll actually enjoy mentoring.</p>
                <Link href="/contact" className="btn">
                  Explore collaboration <span className="btn-arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
