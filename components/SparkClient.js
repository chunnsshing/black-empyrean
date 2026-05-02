'use client';
import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';
import Tilt from '@/components/motion/Tilt';
import HeroParallax from '@/components/motion/HeroParallax';
import SectionHead from '@/components/ui/SectionHead';
import Placeholder from '@/components/ui/Placeholder';

const PROGRAMS = [
  {
    num: '01', title: 'Hackathon Support',
    desc: 'We sponsor and organise youth hackathons, providing mentorship, judging, and resources for student teams across the region.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>,
  },
  {
    num: '02', title: 'School Workshops',
    desc: 'Hands-on sessions at schools and universities — coding, robotics, and design thinking taught by working practitioners.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 9l9-5 9 5-9 5-9-5z" /><path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5" /></svg>,
  },
  {
    num: '03', title: 'Tech Talks',
    desc: 'Introductory talks on AI, software development, and tech careers for curious young minds, taken seriously.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
  },
];

const FAQ_ITEMS = [
  {
    q: 'Who can apply?',
    a: 'Students from any school or university in Southeast Asia. Most of our hackathon participants are undergraduates, but we run workshops for secondary-school students too.',
  },
  {
    q: 'Do I need prior coding experience?',
    a: "For most programmes, no. Curiosity and willingness to build are enough. Some advanced hackathons have prerequisites — we'll always say so on the application page.",
  },
  {
    q: 'Is there a fee?',
    a: 'No. Spark* programmes are free for participating students. Costs are covered by The Empyrean and our partner organisations.',
  },
  {
    q: 'What languages are programmes run in?',
    a: 'Primarily English, with bilingual support (Bahasa Malaysia, Mandarin) at specific events depending on the host institution.',
  },
  {
    q: 'Can my school or organisation partner with Spark*?',
    a: (
      <>
        Yes. We collaborate with schools, universities, and community groups across the region.
        Reach out via the <Link href="/contact">contact page</Link> and tell us a bit about your students.
      </>
    ),
  },
  {
    q: 'How often do you run events?',
    a: (
      <>
        A few major hackathons per year, plus rolling workshops and tech talks.
        Follow our <Link href="/insights">Insights page</Link> or get in touch to be added to the announcement list.
      </>
    ),
  },
];

export default function SparkClient() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-orbit" aria-hidden>
          <span className="satellite" /><span className="satellite s2" />
        </div>
        <div className="container hero-inner">
          <HeroParallax>
            <Reveal kind="fade"><p className="eyebrow">SPARK*</p></Reveal>
            <Reveal stagger={1}>
              <h1 className="h-display" style={{ maxWidth: '20ch' }}>
                We don't just build tech.<br />
                <span className="serif-italic shimmer">We build the people</span> who build tech.
              </h1>
            </Reveal>
            <Reveal stagger={2}>
              <p className="lede" style={{ marginTop: 28, maxWidth: '60ch' }}>
                Spark* is The Empyrean's outreach programme — bringing real technology experience to
                students and communities across Southeast Asia.
              </p>
            </Reveal>
          </HeroParallax>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          <p className="eyebrow">OUR MISSION</p>
          <div>
            <p style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontSize: 'clamp(24px, 2.6vw, 34px)', lineHeight: 1.35, letterSpacing: '-0.012em', color: 'var(--ink)', margin: 0 }}>
              We believe the best way to grow a great team is to grow great people first.
              Spark* is how we do that — through hackathons, campus workshops, and tech talks
              that give young talent their first real exposure to building{' '}
              <span style={{ color: 'var(--periwinkle)' }}>technology that matters</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Spark* */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="WHY SPARK*"
            title={<>It started with <span className="serif-italic">one workshop.</span></>}
          />
          <Reveal kind="up" stagger={1}>
            <div style={{ maxWidth: '65ch' }}>
              <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.7, margin: '0 0 22px' }}>
                When we started The Empyrean, the engineers we wanted to hire didn't exist yet — not because there wasn't talent in the region, but because there weren't enough places for that talent to do real work before graduating. Most students we met had built nothing larger than a class assignment.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.7, margin: 0 }}>
                Spark* is our answer. It's not charity, and it's not recruiting. It's the simple belief that if we want to build serious technology in Southeast Asia, we have to invest in the people who'll build it next. So we run hackathons, teach in classrooms, and bring practitioners into rooms where students can ask them <span className="serif-italic">anything</span>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="WHAT WE DO"
            title={<>Three programmes. <span className="serif-italic">One purpose.</span></>}
          />
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.num} stagger={Math.min(i + 1, 3)}>
              <div className="spark-program">
                <div className="icon" style={{ color: 'var(--periwinkle)' }}>{p.icon}</div>
                <div>
                  <div className="num">PROGRAMME / {p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <a href="#" className="btn btn-outline" onClick={(e) => e.preventDefault()}>
                  Details <span className="btn-arrow">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Collaborations */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="OUR COLLABORATIONS"
            title={<>Growing together with <span className="serif-italic">leading universities.</span></>}
          />
          <div className="grid-2">
            {[
              { name: 'UTAR', full: 'Universiti Tunku Abdul Rahman', desc: 'Joint hackathons and an ongoing internship pipeline focused on AI and full-stack development.' },
              { name: 'USM',  full: 'Universiti Sains Malaysia',     desc: 'Campus tech-talk series and a mentorship programme pairing students with senior practitioners.' },
            ].map((u, i) => (
              <Reveal key={u.name} stagger={i + 1}>
                <Tilt className="card glow-card" max={4} style={{ padding: 0, overflow: 'hidden' }}>
                  <Placeholder label={u.name + ' · campus partnership'} ratio="16/9" />
                  <div style={{ padding: 28 }}>
                    <span className="muted-mono">UNIVERSITY PARTNER</span>
                    <h3 className="h-card" style={{ marginTop: 10, fontSize: 22 }}>{u.name}</h3>
                    <p style={{ color: 'var(--ink-3)', fontSize: 13, margin: '6px 0 12px' }}>{u.full}</p>
                    <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14.5 }}>{u.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Spark* */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="JOIN SPARK*"
            title={<>Two ways to <span className="serif-italic">get involved.</span></>}
          />
          <div className="grid-2">
            <div className="dark-card">
              <span className="glow" />
              <p className="eyebrow">FOR STUDENTS</p>
              <h3>Ready to build something real?</h3>
              <p>Apply to our hackathons, workshops, and mentorship programmes. No prior experience required — just curiosity.</p>
              <p style={{ fontSize: 13, color: 'var(--ink-3)', margin: '-4px 0 0' }}>
                Questions?{' '}
                <a href="mailto:spark@theempyrean.org" style={{ color: 'var(--periwinkle)' }}>
                  spark@theempyrean.org
                </a>
              </p>
              <Link href="/contact" className="btn">Apply now <span className="btn-arrow">→</span></Link>
            </div>
            <div className="dark-card">
              <span className="glow" />
              <p className="eyebrow">FOR ORGANISATIONS</p>
              <h3>Bring Spark* to your school or institution.</h3>
              <p>We collaborate with schools, universities, and community organisations across Southeast Asia. Let's build something with your students.</p>
              <p style={{ fontSize: 13, color: 'var(--ink-3)', margin: '-4px 0 0' }}>
                Partnership enquiries:{' '}
                <a href="mailto:spark@theempyrean.org" style={{ color: 'var(--periwinkle)' }}>
                  spark@theempyrean.org
                </a>
              </p>
              <Link href="/contact" className="btn">Partner with us <span className="btn-arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="FREQUENTLY ASKED"
            title={<>Questions, <span className="serif-italic">answered.</span></>}
          />
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <Reveal key={i} stagger={Math.min(i + 1, 4)}>
                <details className="faq-item">
                  <summary>
                    {item.q}
                    <span className="faq-icon" aria-hidden>+</span>
                  </summary>
                  <div className="faq-body">{item.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
