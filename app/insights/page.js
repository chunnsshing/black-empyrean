import Link from 'next/link';
import { getInsights } from '@/lib/notion';
import InsightsMobileNav from '@/components/insights/InsightsMobileNav';

export const revalidate = 3600;

export const metadata = {
  title: 'Insights | The Empyrean',
  description: 'Perspectives from The Empyrean — on AI trends, practical guides for SMEs, and what we\'re learning in the field.',
};

const CAT_TONE = {
  'AI Trends': 'blue',
  'SME Guide': 'green',
  'Behind the Build': 'purple',
  'Spark* Stories': 'yellow',
};

function CatTag({ cat }) {
  const tone = CAT_TONE[cat] || 'blue';
  return <span className={'tag tag-cat-' + tone}>{cat}</span>;
}

function fmtDateLong(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function InsightsPage() {
  const articles = await getInsights();

  if (!articles.length) {
    return (
      <div>
        <p className="eyebrow">FIELD NOTES</p>
        <h1 className="h-display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', maxWidth: '20ch', marginBottom: 20 }}>
          Thinking out loud about <span className="serif-italic">AI and business.</span>
        </h1>
        <p className="lede">No articles yet — check back soon.</p>
      </div>
    );
  }

  const [feat, ...rest] = articles;

  return (
    <div>
      <InsightsMobileNav articles={articles} />

      <p className="eyebrow">FIELD NOTES</p>
      <h1 className="h-display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', maxWidth: '20ch', marginBottom: 20 }}>
        Thinking out loud about <span className="serif-italic">AI and business.</span>
      </h1>
      <p className="lede" style={{ marginBottom: 56 }}>
        Perspectives from The Empyrean — on AI trends, practical guides for SMEs, and what we're learning in the field.
      </p>

      <Link href={`/insights/${feat.slug}`} className="featured-card">
        <div className="placeholder" style={{ aspectRatio: '21/9', border: 'none', borderRadius: 0 }}>
          {feat.title}
        </div>
        <div className="meta">
          <CatTag cat={feat.category} />
          <h3>{feat.title}</h3>
          {feat.summary && <p className="summary">{feat.summary}</p>}
          <div className="footer-row">
            <span>{fmtDateLong(feat.date)}</span>
            <span>·</span>
            <span>{feat.readTime} min read</span>
            <span style={{ marginLeft: 'auto', color: 'var(--periwinkle)' }}>Read →</span>
          </div>
        </div>
      </Link>

      <div className="grid-2" style={{ marginTop: 8 }}>
        {rest.map(a => (
          <Link key={a.id} href={`/insights/${a.slug}`} className="article-card">
            <CatTag cat={a.category} />
            <h4>{a.title}</h4>
            {a.summary && <p>{a.summary}</p>}
            <div className="meta-row">
              <span>{fmtDateLong(a.date)}</span>
              <span>·</span>
              <span>{a.readTime} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
