'use client';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';
import HeroParallax from '@/components/motion/HeroParallax';
import SectionHead from '@/components/ui/SectionHead';
import Placeholder from '@/components/ui/Placeholder';

const FEATURES = [
  {
    num: '01',
    title: 'Automated Data Ingestion',
    desc: 'Connects to your ERP, CRM, and ops systems. No manual exports — Monday pulls the data while you sleep.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
        <path d="M16 6l-4-4-4 4" /><path d="M12 2v13" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Structured Executive Briefing',
    desc: 'Not a dashboard. A written summary — the top movements, risks, and actions for the week ahead, formatted for decision-makers.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 5h12l4 4v10a2 2 0 01-2 2H4z" />
        <path d="M8 11h8M8 15h6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '7 AM Inbox Delivery',
    desc: 'Delivered every Monday morning before the first meeting. Consistent, reliable, always ready when you are.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Configurable Sections',
    desc: 'Choose which data sources and KPIs appear. Finance, sales pipeline, logistics, HR — configured once, updated every week.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 6.75" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Trend Detection',
    desc: 'Monday compares this week against the last 4. Spikes, dips, and anomalies are flagged automatically — no analyst required.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 20h18M6 20V10M11 20V4M16 20v-7M21 20v-3" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Team Distribution',
    desc: 'Send different briefings to different teams. The CEO gets the full picture; the sales lead gets the pipeline view.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="8" cy="8" r="3" /><circle cx="16" cy="16" r="3" />
        <path d="M10.5 10.5L13.5 13.5" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  { num: '01', title: 'Connect your data sources', desc: 'We configure Monday to read from your existing ERP, CRM, or spreadsheets. No new software required on your end.' },
  { num: '02', title: 'Define your KPIs', desc: 'Work with our team to select the 10–20 metrics that matter most to your leadership team.' },
  { num: '03', title: 'Monday runs overnight', desc: 'Every Sunday night, Monday fetches, analyses, and writes your briefing. You wake up to insight, not data.' },
  { num: '04', title: 'Brief your team by 7 AM', desc: 'Your personalised briefing lands in inboxes before the first meeting of the week, every week.' },
];

const INTEGRATIONS = [
  'SAP', 'Oracle NetSuite', 'Xero', 'QuickBooks', 'Salesforce',
  'HubSpot', 'Google Sheets', 'Microsoft 365', 'Slack', 'Custom API',
];

export default function MondayClient() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ paddingTop: 'clamp(120px, 16vw, 200px)' }}>
        <div className="hero-orbit" aria-hidden>
          <span className="satellite" /><span className="satellite s2" />
        </div>
        <div className="container hero-inner">
          <HeroParallax>
            <Reveal kind="fade">
              <Link href="/products" className="back-link" style={{ marginBottom: 32, display: 'inline-flex' }}>
                ← All Products
              </Link>
            </Reveal>
            <Reveal stagger={1}>
              <p className="eyebrow">PRODUCT · AI AGENTS</p>
              <h1 className="h-display" style={{ marginTop: 8, maxWidth: '14ch' }}>
                Monday.
              </h1>
            </Reveal>
            <Reveal stagger={2}>
              <p className="lede" style={{ marginTop: 24, maxWidth: '56ch' }}>
                Your business, summarised overnight. An AI executive briefing — connected to your live data, written in plain English, in your inbox every Monday at 7 AM.
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <div className="hero-readout" style={{ marginTop: 32 }}>
                <div>
                  <div className="label">/ Version</div>
                  <div className="val">v1.0</div>
                </div>
                <div>
                  <div className="label">/ Status</div>
                  <div className="val" style={{ color: 'var(--periwinkle)' }}>Available</div>
                </div>
                <div>
                  <div className="label">/ Category</div>
                  <div className="val">AI Agents</div>
                </div>
                <div>
                  <div className="label">/ Delivery</div>
                  <div className="val">Every Monday · 7 AM</div>
                </div>
              </div>
            </Reveal>
            <Reveal stagger={4}>
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-primary">
                  Request a demo <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Talk to us <span className="btn-arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </HeroParallax>
        </div>
      </section>

      {/* Hero screenshot */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <Placeholder label="Monday · sample briefing email" ratio="16/9" />
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <Reveal kind="fade"><p className="eyebrow">OVERVIEW</p></Reveal>
          <Reveal stagger={1}>
            <h2 className="h-section" style={{ maxWidth: '22ch', marginBottom: 32 }}>
              What <span className="serif-italic">Monday</span> does.
            </h2>
          </Reveal>
          <div className="two-col-50">
            <Reveal stagger={2}>
              <p className="lede" style={{ maxWidth: '52ch' }}>
                Most leadership teams don't have time to pull reports before the week begins. They fly blind on Monday mornings — or spend the first hour chasing numbers across systems.
              </p>
              <p style={{ color: 'var(--ink-2)', marginTop: 20, fontSize: 15, lineHeight: 1.7 }}>
                Monday solves this. It connects directly to your existing ERP, CRM, and ops data. Every Sunday night it reads, analyses, and writes a structured executive briefing. By 7 AM on Monday, your team has a clear, consistent view of what happened last week — and what needs attention this week.
              </p>
              <p style={{ color: 'var(--ink-2)', marginTop: 16, fontSize: 15, lineHeight: 1.7 }}>
                No new dashboards. No analyst hours. Just the right information, at the right time, in plain English.
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p className="eyebrow">WHAT'S IN A BRIEFING</p>
                {[
                  'Revenue vs target — week and month-to-date',
                  'Top pipeline movements and deal closures',
                  'Operational flags and delivery exceptions',
                  'Headcount or capacity alerts',
                  'Week-on-week trend comparison',
                  'Recommended focus areas for the week',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="muted-mono" style={{ flexShrink: 0, paddingTop: 2 }}>/ {String(i + 1).padStart(2, '0')}</span>
                    <span style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="FEATURES"
            title={<>What's <span className="serif-italic">included.</span></>}
          />
          <div className="grid-3" style={{ gap: 20 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={f.num} stagger={Math.min((i % 3) + 1, 3)} style={{ display: 'flex', flexDirection: 'column' }}>
                <Tilt className="card glow-card" max={4} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: 'var(--glass-2)', border: '1px solid var(--hairline)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--periwinkle)',
                    }}>
                      {f.icon}
                    </div>
                    <span className="muted-mono">{f.num}</span>
                  </div>
                  <h4 className="h-card">{f.title}</h4>
                  <p style={{ color: 'var(--ink-2)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="HOW IT WORKS"
            title={<>Set it up once. <span className="serif-italic">Let it run.</span></>}
            lede="Monday is configured by our team in a single onboarding session. After that, it runs autonomously every week."
          />
          <div className="process">
            {HOW_IT_WORKS.map((s, i) => (
              <Reveal key={s.num} stagger={Math.min(i + 1, 4)} kind="up">
                <div className="process-step">
                  <span className="num">/ {s.num}</span>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section">
        <div className="container">
          <Reveal kind="fade"><p className="eyebrow">SCREENSHOTS</p></Reveal>
          <Reveal stagger={1}>
            <h2 className="h-section" style={{ maxWidth: '18ch', marginBottom: 40 }}>
              See it in <span className="serif-italic">action.</span>
            </h2>
          </Reveal>
          <div className="grid-2" style={{ gap: 20 }}>
            {[
              'Monday · sample briefing — revenue view',
              'Monday · pipeline summary section',
              'Monday · ops flags and exceptions',
              'Monday · configuration dashboard',
            ].map((label, n) => (
              <Reveal key={n} stagger={Math.min(n + 1, 4)}>
                <Placeholder label={label} ratio="16/10" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section">
        <div className="container">
          <Reveal kind="fade"><p className="eyebrow">INTEGRATIONS</p></Reveal>
          <Reveal stagger={1}>
            <h2 className="h-section" style={{ maxWidth: '22ch', marginBottom: 32 }}>
              Works with the systems <span className="serif-italic">you already run.</span>
            </h2>
          </Reveal>
          <Reveal stagger={2}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
              {INTEGRATIONS.map((name) => (
                <span key={name} className="tag" style={{ fontSize: 13, padding: '6px 14px' }}>{name}</span>
              ))}
            </div>
            <p style={{ color: 'var(--ink-3)', fontSize: 14, marginTop: 20 }}>
              Don't see yours? If it has an API or exports to CSV, Monday can likely connect to it.{' '}
              <Link href="/contact" style={{ color: 'var(--periwinkle)' }}>Ask us →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section">
        <div className="container">
          <Reveal kind="fade"><p className="eyebrow">TECH STACK</p></Reveal>
          <Reveal stagger={1}>
            <h2 className="h-section" style={{ maxWidth: '18ch', marginBottom: 32 }}>
              How it's <span className="serif-italic">built.</span>
            </h2>
          </Reveal>
          <Reveal stagger={2}>
            <p className="lede" style={{ maxWidth: '56ch' }}>
              Monday runs as a managed service on your preferred cloud. The AI layer uses a fine-tuned LLM trained on business reporting formats. Data connectors use read-only credentials — we never write to your systems.
            </p>
          </Reveal>
          <Reveal stagger={3}>
            <div style={{ display: 'flex', gap: 32, marginTop: 32, flexWrap: 'wrap' }}>
              {[
                { label: 'Hosting', val: 'AWS / Azure / GCP' },
                { label: 'AI Layer', val: 'Fine-tuned LLM' },
                { label: 'Access', val: 'Read-only API keys' },
                { label: 'Delivery', val: 'Email (HTML + plain text)' },
                { label: 'Security', val: 'SOC 2-aligned practices' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="muted-mono" style={{ marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 15, color: 'var(--ink-1)' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="dark-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <span className="glow" />
            <div className="cta-row" style={{ position: 'relative', zIndex: 1 }}>
              <div>
                <p className="eyebrow">GET STARTED WITH MONDAY</p>
                <h2 className="h-section" style={{ maxWidth: '22ch', marginBottom: 16 }}>
                  Ready for a briefing that <span className="serif-italic">actually lands?</span>
                </h2>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, maxWidth: '52ch' }}>
                  Setup takes one session. We configure your data sources, define your KPIs, and run a test briefing with you. From there, Monday runs every week without you lifting a finger.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
                <Link href="/contact" className="btn btn-primary">
                  Request a demo <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Talk to us first <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
