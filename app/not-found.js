import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | The Empyrean',
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        gap: '24px',
      }}
    >
      <p className="eyebrow">404</p>
      <h1
        className="h-section"
        style={{ maxWidth: '560px' }}
      >
        Lost in the void
      </h1>
      <p className="lede" style={{ maxWidth: '420px', opacity: 0.6 }}>
        This page drifted beyond the empyrean. It may have moved or never existed.
      </p>
      <Link href="/insights" className="btn-primary">
        Back to Insights
      </Link>
    </section>
  );
}
