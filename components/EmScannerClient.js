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
    title: 'AI Field Recognition',
    desc: 'Our AI reads handwritten text and detects document structure automatically — field labels, values, tables, and all. No human review required for standard documents.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'No Template Setup',
    desc: 'Unlike legacy OCR tools, EM Scanner does not require you to define field positions or set up templates. It adapts to whatever document you give it.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 6.75" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Excel Export',
    desc: 'Each document type exports to its own sheet in a structured Excel file — column headers, clean rows, ready for analysis or import into your ERP.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 20h18M6 20V10M11 20V4M16 20v-7M21 20v-3" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Multi-format Image Support',
    desc: 'Works with photos taken on any phone or scanner. Accepts HEIC, JPG, PNG, PDF, and more — so your field teams work the way they already do.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10.5" r="1.5" />
        <path d="M21 15l-5-5L5 19" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Admin Dashboard',
    desc: 'Central control for your IT or operations team. Manage users, set processing limits, review activity logs, and monitor usage across departments.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Windows & Mac Desktop App',
    desc: 'Installs like any standard application. No server setup, no browser dependency, no technical knowledge required from end users.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="3" width="20" height="14" rx="1" />
        <path d="M2 17h20M12 17v4M8 21h8" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  {
    num: '01',
    title: 'Snap',
    desc: 'Photograph any handwritten document with your phone or scan it. EM Scanner accepts whatever your team already uses to capture documents in the field.',
  },
  {
    num: '02',
    title: 'Upload',
    desc: 'Drop the image into the EM Scanner desktop app. The AI reads every field, detects the document structure, and organises the data — in seconds.',
  },
  {
    num: '03',
    title: 'Export',
    desc: 'Download a clean, structured Excel file with one sheet per document type. Ready to analyse, import into your ERP, or share with your team.',
  },
];

const USE_CASES = [
  { sector: 'Logistics', example: 'Delivery notes, consignment records, proof-of-delivery forms' },
  { sector: 'Retail', example: 'Purchase orders, stock take sheets, supplier invoices' },
  { sector: 'Manufacturing', example: 'Quality inspection forms, production records, work orders' },
  { sector: 'Field Services', example: 'Site reports, maintenance checklists, job completion forms' },
];

export default function EmScannerClient() {
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
              <Link href="/portfolio" className="back-link" style={{ marginBottom: 32, display: 'inline-flex' }}>
                ← Portfolio
              </Link>
            </Reveal>
            <Reveal stagger={1}>
              <p className="eyebrow">PRODUCT · DOCUMENT AI</p>
              <h1 className="h-display" style={{ marginTop: 8, maxWidth: '14ch' }}>
                EM Scanner.
              </h1>
            </Reveal>
            <Reveal stagger={2}>
              <p className="lede" style={{ marginTop: 24, maxWidth: '52ch' }}>
                Turn paper into data, instantly. Your handwritten documents, read by AI and exported as clean, structured Excel data — automatically.
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <div className="hero-readout" style={{ marginTop: 32 }}>
                <div>
                  <div className="label">/ Platform</div>
                  <div className="val">Windows · Mac</div>
                </div>
                <div>
                  <div className="label">/ Status</div>
                  <div className="val" style={{ color: 'var(--periwinkle)' }}>Available</div>
                </div>
                <div>
                  <div className="label">/ Export Format</div>
                  <div className="val">Excel (.xlsx)</div>
                </div>
                <div>
                  <div className="label">/ Powered by</div>
                  <div className="val">Google Gemini AI</div>
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
            <Placeholder label="EM Scanner · app interface" ratio="16/9" />
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <Reveal kind="fade"><p className="eyebrow">THE PROBLEM</p></Reveal>
          <Reveal stagger={1}>
            <h2 className="h-section" style={{ maxWidth: '22ch', marginBottom: 32 }}>
              Most businesses still <span className="serif-italic">run on paper.</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <Reveal stagger={2}>
              <p className="lede" style={{ maxWidth: '52ch' }}>
                Sales orders, delivery records, inspection forms — filled in by hand, stacked in folders, and manually re-entered into spreadsheets.
              </p>
              <p style={{ color: 'var(--ink-2)', marginTop: 20, fontSize: 15, lineHeight: 1.7 }}>
                It's slow. It's error-prone. And it costs more in staff hours than most businesses realise.
              </p>
              <p style={{ color: 'var(--ink-2)', marginTop: 16, fontSize: 15, lineHeight: 1.7 }}>
                EM Scanner eliminates that entirely. Just photograph your handwritten documents, and our AI reads them, recognises every field, and organises the data into a structured Excel file — automatically.
              </p>
              <p style={{ color: 'var(--ink-2)', marginTop: 16, fontSize: 15, lineHeight: 1.7 }}>
                Built for enterprises that are ready to digitalise, without changing the way their teams work on the ground.
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p className="eyebrow">SNAP. UPLOAD. EXPORT.</p>
                {HOW_IT_WORKS.map((step) => (
                  <div key={step.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span className="muted-mono" style={{ flexShrink: 0, paddingTop: 2, fontSize: 13 }}>/ {step.num}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, color: 'var(--ink-1)' }}>{step.title}</div>
                      <div style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6 }}>{step.desc}</div>
                    </div>
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
              'EM Scanner · document upload view',
              'EM Scanner · AI reading in progress',
              'EM Scanner · structured data preview',
              'EM Scanner · Excel export and admin panel',
            ].map((label, n) => (
              <Reveal key={n} stagger={Math.min(n + 1, 4)}>
                <Placeholder label={label} ratio="16/10" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="WHO IT'S FOR"
            title={<>Any enterprise that <span className="serif-italic">still processes paper.</span></>}
            lede="If your team fills in forms by hand and someone re-types them later, EM Scanner eliminates that step entirely."
          />
          <div className="grid-2" style={{ gap: 20 }}>
            {USE_CASES.map((u, i) => (
              <Reveal key={u.sector} stagger={Math.min(i + 1, 4)}>
                <div className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span className="muted-mono" style={{ flexShrink: 0, paddingTop: 2 }}>/ {String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6, color: 'var(--ink-1)' }}>{u.sector}</div>
                    <div style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6 }}>{u.example}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="dark-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <span className="glow" />
            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
              <div>
                <p className="eyebrow">GET EM SCANNER</p>
                <h2 className="h-section" style={{ maxWidth: '22ch', marginBottom: 16 }}>
                  Ready to eliminate <span className="serif-italic">manual data entry?</span>
                </h2>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, maxWidth: '52ch' }}>
                  We'll walk you through a live demo using one of your actual document types. Setup takes less than a day. Your team keeps working the way they always have — EM Scanner just removes the re-entry step.
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
