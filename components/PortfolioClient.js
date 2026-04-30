'use client';
import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';
import HeroParallax from '@/components/motion/HeroParallax';
import SectionHead from '@/components/ui/SectionHead';
import Placeholder from '@/components/ui/Placeholder';

const AI_PRODUCTS = [
  { name: 'EmonyAI',       desc: 'Emotion-aware customer support agent.',     full: 'Tunes responses to customer sentiment in real-time. Trained on SEA service-industry transcripts.' },
  { name: 'Trown',         desc: 'Procurement intelligence for SMEs.',         full: 'Vendor scoring, contract anomaly detection, and procurement spend analytics — out of the box.' },
  { name: 'Senti-an',      desc: 'Multi-language sentiment & review monitor.', full: 'Tracks brand mentions in Bahasa, English, Mandarin, and Tamil across socials and reviews.' },
  { name: 'OrganAIzer',    desc: 'AI ops co-pilot for back-office teams.',     full: 'Schedules, summarises, and routes work across calendars, email, and ticketing systems.' },
  { name: 'Wednesday',     desc: 'Weekly insights, automated.',                full: 'Auto-generates the executive Monday-morning report from your operational data, every Sunday night.' },
  { name: 'AIffinity',     desc: 'Customer segmentation & next-best-action.',  full: 'Clusters customers, predicts churn, and suggests the next conversation to have.' },
  { name: 'FlowLytics',    desc: 'Process mining for messy operations.',       full: "Discovers your real workflows from system logs and surfaces bottlenecks you didn't know existed." },
  { name: 'PulseCore',     desc: 'Real-time KPI heartbeat.',                   full: 'Streams operational KPIs into a single live view. Alerts when reality drifts from plan.' },
  { name: 'LogisticsWise', desc: 'Fleet routing & dispatch optimisation.',     full: 'Dynamic route planning, driver scheduling, and load balancing for delivery fleets.' },
  { name: 'Office.home',   desc: 'Internal AI assistant for hybrid teams.',    full: "A private, company-aware assistant that answers HR, IT, and ops questions without leaving your data." },
];

const PROJECTS = [
  {
    name: 'Manufacturing',
    sector: 'Heavy industry · Custom ERP',
    built: 'Custom ERP with real-time production tracking, inventory management, and automated reporting across three facilities.',
    problem: 'Manual paperwork between shifts. Reporting blind spots. Inventory discrepancies discovered too late to act on.',
    outcome: 'Live operational view across all sites. Reporting time cut from days to minutes. Inventory variance reduced to under 1%.',
    tags: ['ERP', 'Manufacturing', 'Automation'],
  },
  {
    name: 'Logistics',
    sector: 'Regional logistics · Fleet platform',
    built: 'Fleet tracking with automated scheduling, billing reconciliation, and a mobile driver app — connected to existing finance and CRM.',
    problem: 'Spreadsheet-based fleet management. Drivers, dispatch, and billing all running disconnected systems.',
    outcome: 'Scheduling time cut dramatically. Billing errors eliminated. Driver compliance up; fuel cost per delivery down.',
    tags: ['Logistics', 'Fleet Management', 'Mobile'],
  },
  {
    name: 'Multi-Industry',
    sector: 'Several markets · Mixed engagements',
    built: 'AI development, web and app builds, ERP customisation, and data dashboards — across retail, F&B, education, and professional services.',
    problem: 'Different problems, different industries — but the same need for senior-led delivery on a junior-team budget.',
    outcome: 'Long-term retainer relationships. Each engagement delivered on schedule. Many clients now in their second or third project.',
    tags: ['AI', 'ERP', 'Web & App', 'Data', 'Multi-market'],
  },
];

const EXPERTISE_TAGS = [
  'AI Agents', 'LLM Integration', 'ERP Development', 'Web & App Building',
  'Data Analytics', 'UI/UX Design', 'Cloud Infrastructure',
  'Process Automation', 'NLP', 'End-User Training',
];

function ProductCard({ p, idx }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal stagger={(idx % 4) + 1}>
      <Tilt className="product-card glow-card" max={4}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Placeholder label={p.name + ' · preview'} ratio="16/10" />
        <div className="body">
          <h3>{p.name}</h3>
          <p className="desc">{hovered ? p.full : p.desc}</p>
          <span className="more">Learn More →</span>
        </div>
      </Tilt>
    </Reveal>
  );
}

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={'project-card' + (open ? ' open' : '')}>
      <div className="head">
        <Placeholder label={p.name + ' · field shot'} ratio="4/3" />
        <div className="meta">
          <span className="muted-mono">{p.sector}</span>
          <h3 style={{ marginTop: 10 }}>{p.name}</h3>
          <p>{p.built}</p>
          <div className="tag-row">
            {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
      <button className="toggle" onClick={() => setOpen(!open)}>
        <span>{open ? 'Hide details' : 'See what we did'}</span>
        <span style={{ transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'none' }}>↓</span>
      </button>
      <div className="body-extra">
        <div className="row"><span className="label">Built</span><span className="val">{p.built}</span></div>
        <div className="row"><span className="label">Problem</span><span className="val">{p.problem}</span></div>
        <div className="row"><span className="label">Outcome</span><span className="val">{p.outcome}</span></div>
      </div>
    </div>
  );
}

export default function PortfolioClient() {
  const marqueeItems = [...EXPERTISE_TAGS, ...EXPERTISE_TAGS];
  return (
    <>
      <section className="hero">
        <div className="hero-orbit" aria-hidden>
          <span className="satellite" /><span className="satellite s2" />
        </div>
        <div className="container hero-inner">
          <HeroParallax>
            <Reveal kind="fade"><p className="eyebrow">OUR WORK</p></Reveal>
            <Reveal stagger={1}>
              <h1 className="h-display" style={{ maxWidth: '16ch' }}>
                Built to solve. <br /><span className="serif-italic shimmer">Ready to scale.</span>
              </h1>
            </Reveal>
            <Reveal stagger={2}>
              <p className="lede" style={{ marginTop: 28 }}>
                Every project started with a real problem. Here's what we built — and what it made possible.
              </p>
            </Reveal>
          </HeroParallax>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="OUR AI PRODUCTS"
            title={<>AI solutions, <span className="serif-italic">built in-house.</span></>}
            lede="A growing suite of deployable, customisable AI products — built on real use cases, not demos."
          />
          <div className="grid-4" style={{ gap: 20 }}>
            {AI_PRODUCTS.map((p, i) => <ProductCard key={p.name} p={p} idx={i} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="PROJECT WORK"
            title={<>Real problems. <span className="serif-italic">Real solutions.</span></>}
            lede="We don't name our clients — we let the work speak."
          />
          <div>
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} stagger={Math.min(i + 1, 4)}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBlock: 0 }}>
        <div className="container">
          <p className="eyebrow">WHAT WE'RE BUILT FROM</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {marqueeItems.map((t, i) => (
              <span key={i} className="marquee-item">
                <span className="dot" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2 className="h-section" style={{ maxWidth: '20ch', margin: '0 auto' }}>
            Think your project <span className="serif-italic">belongs here?</span>
          </h2>
          <p className="lede" style={{ margin: '18px auto 0', textAlign: 'center' }}>
            If you've built something that solves a real problem, we'd love to help bring it to more clients.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary">
              Feature Your Solution <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
