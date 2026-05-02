/**
 * TEMPLATE — Products catalogue page
 *
 * This is a scaffold for a future "App Store"-style products page.
 * It is currently NOT linked from the nav (see components/Nav.js).
 *
 * To activate when products ship:
 *  1. Replace the PRODUCTS array below with real product data.
 *  2. Add /products to the nav links in components/Nav.js.
 *  3. Wire each card's "View details" link to a real /products/[slug] page.
 *  4. Remove or update this comment block.
 */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';
import HeroParallax from '@/components/motion/HeroParallax';
import SectionHead from '@/components/ui/SectionHead';
import Placeholder from '@/components/ui/Placeholder';

const CATEGORIES = ['All', 'AI Agents', 'Operations', 'Analytics', 'Customer', 'Internal Tools'];

// TEMPLATE DATA — replace with real products when ready to ship.
const PRODUCTS = [
  {
    slug: 'monday',
    name: 'Monday',
    tagline: 'Your business, summarised overnight. An AI briefing in your inbox every Monday morning.',
    category: 'AI Agents',
    version: 'v1.0 · Available',
  },
  {
    slug: 'product-beta',
    name: 'Product Beta',
    tagline: '[Placeholder] Operations tooling that connects your core systems in one view.',
    category: 'Operations',
    version: 'v0.1 · Beta',
  },
  {
    slug: 'product-gamma',
    name: 'Product Gamma',
    tagline: '[Placeholder] Analytics layer that turns raw operational data into decisions.',
    category: 'Analytics',
    version: 'v0.1 · Beta',
  },
  {
    slug: 'product-delta',
    name: 'Product Delta',
    tagline: '[Placeholder] Customer-facing product for intelligent support and engagement.',
    category: 'Customer',
    version: 'v0.1 · Beta',
  },
  {
    slug: 'product-epsilon',
    name: 'Product Epsilon',
    tagline: '[Placeholder] Internal tooling that reduces friction for back-office teams.',
    category: 'Internal Tools',
    version: 'v0.1 · Beta',
  },
  {
    slug: 'product-zeta',
    name: 'Product Zeta',
    tagline: '[Placeholder] AI agent for automated workflows across multiple data sources.',
    category: 'AI Agents',
    version: 'v0.1 · Beta',
  },
];

function AppCard({ p, idx }) {
  return (
    <Reveal stagger={Math.min((idx % 4) + 1, 4)}>
      <Tilt className="app-card glow-card" max={4}>
        <div className="icon-area" role="img" aria-label={p.name + ' · app icon'}>
          <Placeholder label={p.name} ratio="1/1" />
        </div>
        <div className="app-body">
          <h3>{p.name}</h3>
          <p className="tagline">{p.tagline}</p>
          <div className="app-footer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span className="tag">{p.category}</span>
              <span className="version">{p.version}</span>
            </div>
            <Link href={`/products/${p.slug}`} className="btn btn-outline btn-sm">
              View details <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export default function ProductsClient() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-orbit" aria-hidden>
          <span className="satellite" /><span className="satellite s2" />
        </div>
        <div className="container hero-inner">
          <HeroParallax>
            <Reveal kind="fade"><p className="eyebrow">PRODUCTS</p></Reveal>
            <Reveal stagger={1}>
              <h1 className="h-display" style={{ maxWidth: '18ch' }}>
                Built once.{' '}
                <span className="serif-italic shimmer">Deployed everywhere.</span>
              </h1>
            </Reveal>
            <Reveal stagger={2}>
              <p className="lede" style={{ marginTop: 28, maxWidth: '60ch' }}>
                A growing catalogue of deployable, customisable software products — each one born from a real client engagement and refined across multiple industries.
              </p>
            </Reveal>
            <Reveal stagger={3}>
              <p className="muted-mono" style={{ marginTop: 16 }}>CATALOGUE · COMING SOON</p>
            </Reveal>
          </HeroParallax>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="ALL PRODUCTS"
            title={<>Software that <span className="serif-italic">ships ready.</span></>}
            lede="Each product is built on a proven use case. Customise, deploy, and extend — or reach out and we'll configure it for your environment."
          />

          {/* Category filter bar */}
          <div className="filter-bar" role="group" aria-label="Filter products by category">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={'filter-pill' + (active === cat ? ' active' : '')}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid-4" style={{ gap: 20 }}>
            {filtered.map((p, i) => (
              <AppCard key={p.slug} p={p} idx={i} />
            ))}
          </div>

          {/* Coming soon banner */}
          <div className="dark-card" style={{ marginTop: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', minHeight: 'auto' }}>
            <span className="glow" />
            <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
              This catalogue is a preview. Live product pages, screenshots, and download links will go here as each product ships.{' '}
              Want early access?
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
              Get in touch <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
