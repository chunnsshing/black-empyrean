import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getInsights, getInsightBySlug, blocksToHtml } from '@/lib/notion';
import InsightsMobileNav from '@/components/insights/InsightsMobileNav';
import ShareBar from '@/components/insights/ShareBar';

export const revalidate = 3600;

const CAT_TONE = {
  'AI Trends': 'blue',
  'SME Guide': 'green',
  'Behind the Build': 'purple',
  'Spark* Stories': 'yellow',
};

function CatTag({ cat }) {
  return <span className={'tag tag-cat-' + (CAT_TONE[cat] || 'blue')}>{cat}</span>;
}

export async function generateStaticParams() {
  try {
    const articles = await getInsights();
    return articles.map(a => ({ slug: a.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const article = await getInsightBySlug(params.slug);
  if (!article) return { title: 'Not Found | The Empyrean' };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theempyrean.org';
  const url = `${siteUrl}/insights/${params.slug}`;
  const description = article.summary || `Read "${article.title}" on The Empyrean Insights`;
  const ogImage = article.cover || `${siteUrl}/og-default.png`;
  const pubDate = new Date(article.date).toISOString();

  return {
    title: `${article.title} | The Empyrean Insights`,
    description,
    openGraph: {
      title: article.title,
      description,
      url,
      type: 'article',
      publishedTime: pubDate,
      authors: ['The Empyrean'],
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}

function fmtDateLong(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function BlockRenderer({ elements }) {
  return elements.map((el, i) => {
    if (el.type === 'p') return <p key={i} dangerouslySetInnerHTML={{ __html: el.html }} />;
    if (el.type === 'h1') return <h1 key={i} dangerouslySetInnerHTML={{ __html: el.html }} />;
    if (el.type === 'h2') return <h2 key={i} dangerouslySetInnerHTML={{ __html: el.html }} />;
    if (el.type === 'h3') return <h3 key={i} style={{ fontSize: 20, fontWeight: 500, margin: '32px 0 12px', color: 'var(--ink)' }} dangerouslySetInnerHTML={{ __html: el.html }} />;
    if (el.type === 'blockquote') return <blockquote key={i}>&ldquo;{el.html}&rdquo;</blockquote>;
    if (el.type === 'ul') return <ul key={i}>{el.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>;
    if (el.type === 'ol') return <ol key={i}>{el.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}</ol>;
    if (el.type === 'code') return <pre key={i}><code>{el.html}</code></pre>;
    if (el.type === 'hr') return <hr key={i} style={{ border: 'none', borderTop: '1px solid var(--hairline)', margin: '40px 0' }} />;
    if (el.type === 'callout') return (
      <div key={i} style={{ background: 'var(--glass)', border: '1px solid var(--hairline)', borderRadius: 12, padding: '16px 20px', margin: '24px 0', display: 'flex', gap: 12, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
        {el.icon && <span>{el.icon}</span>}
        <span dangerouslySetInnerHTML={{ __html: el.html }} />
      </div>
    );
    if (el.type === 'image' && el.url) return (
      <figure key={i} style={{ margin: '32px 0' }}>
        <img src={el.url} alt={el.caption || ''} style={{ width: '100%', borderRadius: 12, border: '1px solid var(--hairline)' }} />
        {el.caption && <figcaption style={{ textAlign: 'center', color: 'var(--ink-3)', fontSize: 13, marginTop: 10, fontFamily: 'var(--font-mono)' }}>{el.caption}</figcaption>}
      </figure>
    );
    return null;
  });
}

export default async function ArticlePage({ params }) {
  const [article, allArticles] = await Promise.all([
    getInsightBySlug(params.slug),
    getInsights(),
  ]);

  if (!article) notFound();

  const elements = article.blocks ? blocksToHtml(article.blocks) : [];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theempyrean.org';
  const articleUrl = `${siteUrl}/insights/${params.slug}`;

  return (
    <>
      <InsightsMobileNav articles={allArticles} activeTitle={article.title} />

      <article className="article-view">
        <Link href="/insights" className="back-link">← Back to Insights</Link>

        <CatTag cat={article.category} />
        <h1>{article.title}</h1>

        <div className="meta-row">
          <span>{fmtDateLong(article.date)}</span>
          <span>·</span>
          <span>{article.readTime} min read</span>
        </div>

        {article.cover ? (
          <div className="cover">
            <img src={article.cover} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ) : (
          <div className="placeholder cover" style={{ aspectRatio: '16/9' }}>{article.title} · cover</div>
        )}

        {elements.length > 0 ? (
          <BlockRenderer elements={elements} />
        ) : (
          article.summary && <p>{article.summary}</p>
        )}

        <ShareBar title={article.title} url={articleUrl} />
      </article>
    </>
  );
}
