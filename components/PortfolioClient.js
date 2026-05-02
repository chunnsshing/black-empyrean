'use client';
import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';
import HeroParallax from '@/components/motion/HeroParallax';
import SectionHead from '@/components/ui/SectionHead';
import Placeholder from '@/components/ui/Placeholder';

const METHODOLOGY_STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We sit with your team, walk the floor, read the spreadsheets. No solutions until we understand the actual bottleneck.',
  },
  {
    num: '02',
    title: 'Frame',
    desc: 'One page. The problem, the constraints, what success looks like, and what we\'re explicitly not solving. Signed off before a line of code.',
  },
  {
    num: '03',
    title: 'Build in slices',
    desc: 'Working software every two weeks, in front of real users. We\'d rather ship something narrow that runs than something broad that demos.',
  },
  {
    num: '04',
    title: 'Hand over, don\'t disappear',
    desc: 'Documentation, training, and a 90-day support window. Your team owns it; we stay reachable.',
  },
];

const PROJECTS = [
  {
    name: 'Manufacturing',
    sector: 'Heavy industry · Custom ERP',
    built: 'Custom ERP with real-time production tracking, inventory management, and automated reporting across three facilities.',
    problem: 'Manual paperwork between shifts. Reporting blind spots. Inventory discrepancies discovered too late to act on.',
    outcome: 'Live operational view across all sites. Reporting time cut from days to minutes. Inventory variance reduced to under 1%.',
    timeline: '6-month engagement · 2023',
    team: '2 engineers · 1 business analyst · embedded with client ops team',
    stack: 'Odoo · Python · PostgreSQL · React dashboard · AWS',
    scale: '~800 production records tracked daily across 3 facilities',
    quote: {
      text: 'We used to run end-of-day reporting the next morning. Now it\'s live. That alone changed how our supervisors work.',
      attribution: 'Operations Director, manufacturing group',
    },
    tags: ['ERP', 'Manufacturing', 'Automation'],
  },
  {
    name: 'Logistics',
    sector: 'Regional logistics · Fleet platform',
    built: 'Fleet tracking with automated scheduling, billing reconciliation, and a mobile driver app — connected to existing finance and CRM.',
    problem: 'Spreadsheet-based fleet management. Drivers, dispatch, and billing all running disconnected systems.',
    outcome: 'Scheduling time cut dramatically. Billing errors eliminated. Driver compliance up; fuel cost per delivery down.',
    timeline: '4-month engagement · 2024',
    team: '2 engineers · 1 designer · embedded with client ops lead',
    stack: 'Next.js · PostgreSQL · Python services · AWS',
    scale: '~300 active vehicles tracked daily',
    quote: {
      text: 'The billing alone used to take two people a full day. It\'s automated now — they do other work.',
      attribution: 'Operations Manager, regional logistics firm',
    },
    tags: ['Logistics', 'Fleet Management', 'Mobile'],
  },
  {
    name: 'Retainer Engagements',
    sector: 'Several markets · Ongoing retainers',
    built: 'AI development, web and app builds, ERP customisation, and data dashboards — across retail, F&B, education, and professional services.',
    problem: 'Different problems, different industries — but the same need for senior-led delivery on a junior-team budget.',
    outcome: 'Long-term retainer relationships. Each engagement delivered on schedule. Many clients now in their second or third project.',
    timeline: 'Ongoing · since 2022',
    team: 'Variable · typically 2–4 practitioners per client',
    stack: 'Mixed stack — matched to client environment per engagement',
    scale: '8+ active retainer clients across 4 markets',
    quote: {
      text: 'They don\'t just deliver and disappear. Every time we have a new problem they already understand our business.',
      attribution: 'Head of Technology, professional services firm',
    },
    tags: ['AI', 'ERP', 'Web & App', 'Data', 'Multi-market'],
  },
];

const EXPERTISE_TAGS = [
  'AI Agents', 'LLM Integration', 'ERP Development', 'Web & App Building',
  'Data Analytics', 'UI/UX Design', 'Cloud Infrastructure',
  'Process Automation', 'NLP', 'End-User Training',
];

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
      <button className="toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{open ? 'Hide details' : 'See what we did'}</span>
        <span aria-hidden style={{ transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'none' }}>↓</span>
      </button>
      <div className="body-extra">
        <div className="row"><span className="label">Built</span><span className="val">{p.built}</span></div>
        <div className="row"><span className="label">Problem</span><span className="val">{p.problem}</span></div>
        <div className="row"><span className="label">Outcome</span><span className="val">{p.outcome}</span></div>
        <div className="row"><span className="label">Timeline</span><span className="val">{p.timeline}</span></div>
        <div className="row"><span className="label">Team</span><span className="val">{p.team}</span></div>
        <div className="row"><span className="label">Stack</span><span className="val">{p.stack}</span></div>
        <div className="row"><span className="label">Scale</span><span className="val">{p.scale}</span></div>
        <div className="row" style={{ display: 'block', paddingTop: 0 }}>
          <blockquote className="project-quote">
            "{p.quote.text}"
            <cite>— {p.quote.attribution}</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioClient() {
  const marqueeItems = [...EXPERTISE_TAGS, ...EXPERTISE_TAGS];
  return (
    <>
      {/* Hero */}
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

      {/* Methodology */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="HOW WE BUILD"
            title={<>Senior thinking, <span className="serif-italic">shipped in slices.</span></>}
            lede="We've found the same four-step rhythm gets the best results, whether the build is a custom ERP or a single AI agent."
          />
          <div className="methodology-grid">
            {METHODOLOGY_STEPS.map((s, i) => (
              <Reveal key={s.num} stagger={Math.min(i + 1, 4)}>
                <div className="methodology-step">
                  <span className="step-num">/ {s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Work */}
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

      {/* Expertise marquee */}
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

      {/* CTA */}
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
