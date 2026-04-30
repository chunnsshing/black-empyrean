'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function fmtDay(iso) {
  const d = new Date(iso);
  return String(d.getDate()).padStart(2, '0');
}

export default function InsightsSidebar({ articles }) {
  const pathname = usePathname();

  const byMonth = {};
  articles.forEach(a => {
    (byMonth[a.month] ||= []).push(a);
  });

  return (
    <aside className="insights-side">
      <h2>Insights</h2>
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
    </aside>
  );
}
