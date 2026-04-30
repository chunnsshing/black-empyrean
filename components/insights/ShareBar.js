'use client';
import { useState } from 'react';

export default function ShareBar({ title, url }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try { await navigator.clipboard.writeText(url); } catch { }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener');
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank', 'noopener');
  };

  return (
    <div className="share-bar">
      <button className="share-btn" onClick={copyLink}>
        🔗 {copied ? 'Copied!' : 'Copy Link'}
      </button>
      <button className="share-btn" onClick={shareLinkedIn}>
        in Share to LinkedIn
      </button>
      <button className="share-btn" onClick={shareWhatsApp}>
        💬 Share on WhatsApp
      </button>
    </div>
  );
}
