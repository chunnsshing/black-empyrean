/**
 * STUB — Product detail page
 *
 * Replace placeholder content here when real product pages are ready.
 * Each section (Overview, Features, Screenshots, Tech Stack, Get Started)
 * is intentionally stubbed so the routing pattern and layout exist now.
 */
'use client';
import Link from 'next/link';
import Placeholder from '@/components/ui/Placeholder';
import Reveal from '@/components/motion/Reveal';

export default function ProductDetailClient({ name, slug }) {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ paddingTop: 'clamp(120px, 16vw, 200px)' }}>
        <div className="container hero-inner">
          <Reveal kind="fade">
            <Link href="/products" className="back-link" style={{ marginBottom: 32, display: 'inline-flex' }}>
              ← All Products
            </Link>
          </Reveal>
          <Reveal stagger={1}>
            <p className="eyebrow">PRODUCT</p>
            <h1 className="h-display" style={{ marginTop: 8, maxWidth: '18ch' }}>{name}</h1>
          </Reveal>
          <Reveal stagger={2}>
            <p className="lede" style={{ marginTop: 24, maxWidth: '56ch' }}>
              [Placeholder] — Product description and value proposition go here when this product ships.
            </p>
          </Reveal>
          <Reveal stagger={3}>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">
                Request early access <span className="btn-arrow">→</span>
              </Link>
              <span className="muted-mono" style={{ alignSelf: 'center' }}>COMING SOON</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <Placeholder label={name + ' · screenshots'} ratio="16/9" />
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <Reveal kind="fade"><p className="eyebrow">OVERVIEW</p></Reveal>
          <Reveal stagger={1}>
            <h2 className="h-section" style={{ maxWidth: '22ch', marginBottom: 32 }}>
              What <span className="serif-italic">{name}</span> does
            </h2>
          </Reveal>
          <Reveal stagger={2}>
            <p className="lede" style={{ maxWidth: '60ch' }}>
              [Placeholder] — A clear, one-paragraph description of the product's core function and the problem it solves. Written for a business decision-maker, not a developer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <Reveal kind="fade"><p className="eyebrow">FEATURES</p></Reveal>
          <Reveal stagger={1}>
            <h2 className="h-section" style={{ maxWidth: '20ch', marginBottom: 40 }}>
              What's <span className="serif-italic">included.</span>
            </h2>
          </Reveal>
          <div className="grid-3" style={{ gap: 20 }}>
            {['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E', 'Feature F'].map((f, i) => (
              <Reveal key={f} stagger={Math.min((i % 3) + 1, 3)}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span className="muted-mono">/ 0{i + 1}</span>
                  <h4 className="h-card">{f}</h4>
                  <p style={{ color: 'var(--ink-2)', fontSize: 14, margin: 0 }}>
                    [Placeholder] — Short description of this feature and what it enables.
                  </p>
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
            {[1, 2, 3, 4].map(n => (
              <Reveal key={n} stagger={Math.min(n, 4)}>
                <Placeholder label={`${name} · screen ${n}`} ratio="16/10" />
              </Reveal>
            ))}
          </div>
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
              [Placeholder] — Hosting requirements, integration methods, infrastructure notes, and any third-party dependencies go here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Get Started */}
      <section className="section">
        <div className="container center">
          <Reveal>
            <h2 className="h-section" style={{ maxWidth: '20ch', margin: '0 auto 20px' }}>
              Ready to get <span className="serif-italic">started?</span>
            </h2>
            <p className="lede" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
              Reach out and we'll walk you through setup, pricing, and what customisation looks like for your environment.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Talk to us <span className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
