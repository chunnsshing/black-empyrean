import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'The Empyrean — AI-first Solutions for Southeast Asia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080b12',
          fontFamily: 'sans-serif',
          gap: '24px',
          padding: '64px',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#b4c0d3',
          }}
        >
          The Empyrean
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#f0f4ff',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: '900px',
          }}
        >
          AI-first Solutions for Southeast Asia
        </div>
        <div
          style={{
            fontSize: '20px',
            color: '#7a8ba8',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Senior practitioners deploying AI agents and enterprise systems that are fast, affordable, and built to last.
        </div>
      </div>
    ),
    { ...size }
  );
}
