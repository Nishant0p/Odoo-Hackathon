import React from 'react';
import Link from 'next/link';
import { Sora } from 'next/font/google';
import '../styles/not-found.css';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

export default function NotFound() {
  return (
    <div className={`nf-container ${sora.className}`}>
      <div className="nf-content">
        <h1 className="nf-error-code">4<span>0</span>4</h1>
        <h2 className="nf-title">Lost in the wild?</h2>
        <p className="nf-description">
          It looks like the page you are looking for has wandered off the map. 
          Let's get you back on track to planning your next great adventure.
        </p>
        <Link href="/" className="nf-button">
          <svg className="nf-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
