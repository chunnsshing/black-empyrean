'use client';
import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';
import HeroParallax from '@/components/motion/HeroParallax';
import SectionHead from '@/components/ui/SectionHead';

function Toast({ msg, show }) {
  return (
    <div className={'toast' + (show ? ' show' : '')}>
      <span className="check">✓</span> {msg}
    </div>
  );
}

function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.type) errs.type = 'Choose one';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'Tell us a bit more';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      onSubmit('Message sent — we\'ll be in touch within 24 business hours');
      setTimeout(() => { setForm({ name: '', company: '', email: '', type: '', message: '' }); setSubmitted(false); }, 2400);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label>Name *</label>
          <input value={form.name} onChange={set('name')} placeholder="Your name" />
          {errors.name && <span style={{ color: '#FF8888', fontSize: 12 }}>{errors.name}</span>}
        </div>
        <div className="field">
          <label>Company</label>
          <input value={form.company} onChange={set('company')} placeholder="Where you work" />
        </div>
      </div>
      <div className="field">
        <label>Email *</label>
        <input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" />
        {errors.email && <span style={{ color: '#FF8888', fontSize: 12 }}>{errors.email}</span>}
      </div>
      <div className="field">
        <label>Enquiry Type *</label>
        <select value={form.type} onChange={set('type')}>
          <option value="">Select an option…</option>
          <option value="erp">ERP</option>
          <option value="ai">AI</option>
          <option value="webapp">Web & App</option>
          <option value="data">Data</option>
          <option value="other">Other</option>
        </select>
        {errors.type && <span style={{ color: '#FF8888', fontSize: 12 }}>{errors.type}</span>}
      </div>
      <div className="field">
        <label>Message *</label>
        <textarea rows={6} value={form.message} onChange={set('message')} placeholder="Tell us about your challenge, your timeline, what you've tried…" />
        {errors.message && <span style={{ color: '#FF8888', fontSize: 12 }}>{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary" style={{ marginTop: 8, opacity: submitted ? 0.7 : 1 }} disabled={submitted}>
        {submitted ? 'Sent ✓' : <><span>Send Message</span> <span className="btn-arrow">→</span></>}
      </button>
    </form>
  );
}

const DISCIPLINES = [
  { title: 'Solution Consultants',    desc: 'Translate business problems into technical roadmaps.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" /></svg> },
  { title: 'AI Developers',           desc: 'Build and integrate intelligent systems and agents.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="4" y="6" width="16" height="12" rx="2" /><circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" /><path d="M12 3v3M9 22h6" /></svg> },
  { title: 'Full Stack Developers',   desc: 'End-to-end web and app development.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 6l-5 6 5 6" /><path d="M16 6l5 6-5 6" /></svg> },
  { title: 'UI/UX Designers',         desc: 'User research, wireframing, and experience design.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 17l9-9 4 4-9 9H3v-4z" /></svg> },
  { title: 'Data Analysts',           desc: 'Dashboards, pipelines, and business intelligence.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 20h18M6 20V10M11 20V4M16 20v-7M21 20v-3" /></svg> },
  { title: 'Cloud & DevOps Engineers', desc: 'Infrastructure, deployment, and reliability.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M7 18a5 5 0 110-10 6 6 0 0111.6 2A4 4 0 0118 18z" /></svg> },
  { title: 'Technical Writers',       desc: 'Documentation, training, and knowledge transfer.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 5h12l4 4v10a2 2 0 01-2 2H4z" /><path d="M8 12h8M8 16h6" /></svg> },
];

export default function ContactPage() {
  const [toast, setToast] = useState({ show: false, msg: '' });
  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2400);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-orbit" aria-hidden>
          <span className="satellite" /><span className="satellite s2" />
        </div>
        <div className="container hero-inner">
          <HeroParallax>
            <Reveal kind="fade"><p className="eyebrow">CONTACT</p></Reveal>
            <Reveal stagger={1}>
              <h1 className="h-display" style={{ maxWidth: '18ch' }}>
                Let's build <span className="serif-italic shimmer">something</span> together.
              </h1>
            </Reveal>
            <Reveal stagger={2}>
              <p className="lede" style={{ marginTop: 28, maxWidth: '60ch' }}>
                Whether you have a business challenge, a project idea, or just want to explore
                what's possible — we'd love to hear from you.
              </p>
            </Reveal>
          </HeroParallax>
        </div>
      </section>

      {/* Contact form */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">GOT A PROJECT?</p>
          <h2 className="h-section" style={{ marginBottom: 56, maxWidth: '20ch' }}>
            Tell us about your <span className="serif-italic">challenge.</span>
          </h2>
          <div className="contact-grid">
            <div><ContactForm onSubmit={showToast} /></div>
            <div className="contact-side">
              {[
                {
                  label: 'EMAIL',
                  val: 'contact@theempyrean.org',
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 7l9 6 9-6" /><rect x="3" y="5" width="18" height="14" rx="2" /></svg>,
                },
                {
                  label: 'RESPONSE TIME',
                  val: 'Within 24 business hours',
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
                },
                {
                  label: 'REGIONS',
                  val: 'Malaysia · Singapore · Indonesia · Australia',
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>,
                },
                {
                  label: 'PREFER TO TALK?',
                  val: 'Mention "discovery call" in your message and we\'ll skip straight to a 30-minute conversation.',
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
                  small: true,
                },
              ].map((row) => (
                <div key={row.label} className="info-row">
                  <div className="icon">{row.icon}</div>
                  <div>
                    <div className="label">{row.label}</div>
                    <div style={row.small ? { fontSize: 14, color: 'var(--ink-2)' } : {}}>{row.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="THE DISCIPLINES"
            title={<>The right people for the <span className="serif-italic">right problem.</span></>}
            lede="Not sure which disciplines your project needs? Tell us the problem — we'll put together the right team."
          />
          <div className="grid-3">
            {DISCIPLINES.map((d, i) => (
              <Reveal key={d.title} stagger={(i % 3) + 1}>
                <Tilt className="discipline-card glow-card" max={4}>
                  <div className="top">
                    <div className="glyph" style={{ color: 'var(--periwinkle)' }}>{d.icon}</div>
                    <h4>{d.title}</h4>
                  </div>
                  <p>{d.desc}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join section */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="JOIN THE TEAM"
            title={<>Two ways in. <span className="serif-italic">Same team.</span></>}
          />
          <div className="grid-2">
            <div className="dark-card">
              <span className="glow" />
              <p className="eyebrow">FOR EMERGING TALENT</p>
              <h3>Real project experience. Senior mentorship.</h3>
              <p>A portfolio that stands out. No coffee-fetching, no fake intern projects — work that ships and clients that pay.</p>
              <button className="btn" onClick={() => showToast('Tell us about yourself')}>
                Apply as Junior Talent <span className="btn-arrow">→</span>
              </button>
            </div>
            <div className="dark-card">
              <span className="glow" />
              <p className="eyebrow">FOR INDUSTRY PROFESSIONALS</p>
              <h3>Contribute as a consultant, advisor, or domain expert.</h3>
              <p>Problems worth solving. Flexible engagement. Work alongside emerging talent you'll actually enjoy mentoring.</p>
              <button className="btn" onClick={() => showToast('Tell us about your collaboration interest')}>
                Explore Collaboration <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Toast msg={toast.msg} show={toast.show} />
    </>
  );
}
