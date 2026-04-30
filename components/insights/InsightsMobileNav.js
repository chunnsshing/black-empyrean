'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function fmtDay(iso) {
  return String(new Date(iso).getDate()).padStart(2, '0');
}

export default function InsightsMobileNav({ articles, activeTitle }) {
  const pathname = usePathname();
  const byMonth = {};
  articles.forEach(a => { (byMonth[a.month] ||= []).push(a); });

  return (
    <details className="insights-mobile-nav">
      <summary>
        <span>{activeTitle || '▼ All Posts'}</span>
        <span style={{ color: 'var(--periwinkle)', flexShrink: 0 }}>{articles.length} posts</span>
      </summary>
      <div className="insights-mobile-nav-list">
        {Object.entries(byMonth).map(([month, items]) => (
          <div key={month}>
            <div className="insights-month">{month}</div>
            {items.map(a => (
              <Link
                key={a.id}
                href={`/insights/${a.slug}`}
                className={'insights-entry' + (pathname === `/insights/${a.slug}` ? ' active' : '')}
              >
                <span className="d">{fmtDay(a.date)}</span>
                <span>{a.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </details>
  );
}
