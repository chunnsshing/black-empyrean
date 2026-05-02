import Link from 'next/link';

function LogoMark() {
  return <span className="logo-mark" aria-hidden style={{ width: 28, height: 28 }} />;
}

const Social = ({ kind, href = '#' }) => {
  const paths = {
    linkedin: <path d="M4 4h3v12H4zM5.5 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8h2.8v1.6h.04c.4-.7 1.4-1.6 2.96-1.6 3.16 0 3.74 2 3.74 4.6V20H17v-5.6c0-1.4-.04-3.2-2-3.2s-2.3 1.5-2.3 3.1V20H10z" fill="currentColor" />,
    x: <path d="M4 4l7 8-7 8h2.5L12 13.6 17 20h3l-7.5-8.7L19.5 4H17l-4.5 5.4L8 4z" fill="currentColor" />,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.6" fill="none" /><circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" fill="none" /><circle cx="17" cy="7" r="1" fill="currentColor" /></>,
    whatsapp: <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3zm4.7 12.7c-.2.5-1.2 1-1.6 1.1-.4.05-.9.07-1.5-.1-.3-.1-.8-.3-1.4-.6-2.4-1-4-3.5-4.1-3.7-.1-.2-1-1.3-1-2.5s.6-1.8.8-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.05.1.1.2 0 .4-.1.2-.15.3-.3.5-.15.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.8-.9.9-1.2.2-.3.3-.3.6-.2.2.1 1.5.7 1.8.9.3.1.4.2.5.3.1.1 0 .7-.2 1.2z" fill="currentColor" />,
  };
  return (
    <a href={href} aria-label={kind} rel="noopener noreferrer" target="_blank">
      <svg width="16" height="16" viewBox="0 0 24 24">{paths[kind]}</svg>
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="top">
          <div className="foot-col">
            <div className="foot-brand-row">
              <LogoMark />
              <span className="foot-brand-text">The Empyrean</span>
            </div>
            <p className="foot-tag">
              Committed to delivering results — while shaping futures. Together. For tomorrow.
            </p>
            <div className="foot-socials">
              <Social kind="linkedin" />
              <Social kind="x" />
              <Social kind="instagram" />
              <Social kind="whatsapp" />
            </div>
          </div>

          <div className="foot-col">
            <h5>Capabilities</h5>
            <ul>
              <li><a href="#">AI Solutions</a></li>
              <li><a href="#">ERP Planning</a></li>
              <li><a href="#">Web & App Building</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Cloud Development</a></li>
              <li><a href="#">Process Automation</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/spark">Spark*</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Get in Touch</h5>
            <ul>
              <li><a href="mailto:hello@theempyrean.org">hello@theempyrean.org</a></li>
              <li><a href="mailto:press@theempyrean.org">press@theempyrean.org</a></li>
              <li><a href="mailto:spark@theempyrean.org">spark@theempyrean.org</a></li>
              <li><a href="mailto:finance@theempyrean.org">finance@theempyrean.org</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© The Empyrean 2026 · All Rights Reserved</span>
          <span>MY · SG · ID · AU</span>
        </div>
      </div>
    </footer>
  );
}
