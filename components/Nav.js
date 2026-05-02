'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NAV_ITEMS = [
  { id: 'home',      label: 'Home',      href: '/' },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { id: 'insights',  label: 'Insights',  href: '/insights' },
  { id: 'spark',     label: 'Spark*',    href: '/spark', spark: true },
];

function LogoMark() {
  const [imgError, setImgError] = useState(false);
  if (imgError) return <span className="logo-mark" aria-hidden />;
  return (
    <img
      src="/main_logo.png"
      alt="The Empyrean"
      className="logo-img"
      onError={() => setImgError(true)}
      width={28}
      height={28}
    />
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="container">
        <div className="nav-row">
          <Link href="/" className="nav-brand">
            <LogoMark />
            <span className="nav-brand-text">The Empyrean</span>
            <span className="nav-status" aria-hidden>
              <span className="pulse" />
            </span>
          </Link>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={
                  'nav-link' +
                  (item.spark ? ' spark' : '') +
                  (isActive(item.href) ? ' active' : '')
                }
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta">
              Contact Us →
            </Link>
          </div>

          <button
            className="nav-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        <div className={'nav-mobile' + (open ? ' open' : '')}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={'nav-link' + (isActive(item.href) ? ' active' : '')}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-link">Contact Us →</Link>
        </div>
      </div>
    </nav>
  );
}
