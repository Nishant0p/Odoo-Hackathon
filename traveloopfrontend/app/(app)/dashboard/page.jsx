'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'



import '../../../styles/dashboard.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

const topRegions = [
  { id: 1, name: 'Blue Gazelle', trips: 12, img: '/images/blue-gazelle.jpg' },
  { id: 2, name: 'Golden Triangle', trips: 10, img: '/images/golden-triangle.jpg' },
  { id: 3, name: 'Serene Coast', trips: 8, img: '/images/serene-coast.jpg' },
  { id: 4, name: 'Mystic Asia', trips: 9, img: '/images/mystic-asia.jpg' },
  { id: 5, name: 'Jatin', trips: 15, img: '/images/jatin.jpg' },
]

const previousTrips = [
  {
    id: 1, name: 'Swiss Alps Explorer', country: 'Switzerland',
    flag: '🇨🇭', startDate: 'May 10', endDate: 'May 17, 2024',
    img: '/images/swiss-alps.jpg'
  },
  {
    id: 2, name: 'Santorini Getaway', country: 'Greece',
    flag: '🇬🇷', startDate: 'Apr 02', endDate: 'Apr 08, 2024',
    img: '/images/santorini.jpg'
  },
  {
    id: 3, name: 'Bali Retreat', country: 'Indonesia',
    flag: '🇮🇩', startDate: 'Mar 15', endDate: 'Mar 22, 2024',
    img: '/images/bali.jpg'
  },
  {
    id: 4, name: 'Dubai City Escape', country: 'UAE',
    flag: '🇦🇪', startDate: 'Feb 18', endDate: 'Feb 25, 2024',
    img: '/images/dubai.jpg'
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={`dashboard-root ${sora.className}`}>





      {/* 2. HERO SECTION */}
      <section className="dash-hero">
        <img src="/herosection.png" alt="Hero Background" className="dash-hero-img" />
        <div className="dash-hero-overlay">
          <div className="dash-hero-content">
            <h1 className="dash-hero-title">
              Explore. Plan. Travel.
              <span className="dash-hero-title-red">Repeat.</span>
            </h1>
            <p className="dash-hero-subtitle">
              Discover amazing places, plan your trips,
              and create unforgettable memories.
            </p>
            <button className="dash-hero-cta">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8 L13 8 M10 5 L13 8 L10 11" />
              </svg>
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT */}
      <main className="dash-content">

        {/* SEARCH + FILTER BAR */}
        <div className="dash-search-row">
          <div className="dash-search-input-wrap">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="7" r="5" />
              <line x1="11" y1="11" x2="15" y2="15" />
            </svg>
            <input
              className="dash-search-input"
              placeholder="Search for destinations, places or activities..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="dash-search-divider" />
          <button className="dash-filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="5" x2="14" y2="5" />
              <line x1="5" y1="9" x2="14" y2="9" />
              <line x1="8" y1="13" x2="14" y2="13" />
            </svg>
            Group by
          </button>
          <div className="dash-search-divider" />
          <button className="dash-filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="1,2 15,2 9,9 9,15 7,15 7,9" />
            </svg>
            Filter
          </button>
          <div className="dash-search-divider" />
          <button className="dash-filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="4" x2="14" y2="4" />
              <line x1="4" y1="8" x2="14" y2="8" />
              <line x1="6" y1="12" x2="14" y2="12" />
            </svg>
            Sort by
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3 L5 7 L8 3" />
            </svg>
          </button>
        </div>

        {/* TOP REGIONAL SELECTIONS */}
        <section className="dash-regions-section">
          <div className="dash-section-header">
            <h2 className="dash-section-title">Top Regional Selections</h2>
            <button className="dash-view-all">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#F81927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3 L9 7 L5 11" />
              </svg>
            </button>
          </div>
          <div className="dash-regions-grid">
            {topRegions.map(region => (
              <div key={region.id} className="dash-region-card">
                <div className="dash-region-img-wrap">
                  <div className="dash-region-placeholder">{region.name} Image</div>
                </div>
                <div className="dash-region-info">
                  <p className="dash-region-name">{region.name}</p>
                  <p className="dash-region-trips">{region.trips} Trips</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PREVIOUS TRIPS */}
        <section className="dash-trips-section">
          <div className="dash-section-header">
            <h2 className="dash-section-title">Previous Trips</h2>
            <button className="dash-view-all">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#F81927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3 L9 7 L5 11" />
              </svg>
            </button>
          </div>
          <div className="dash-trips-grid">
            {previousTrips.map(trip => (
              <div key={trip.id} className="dash-trip-card">
                <div className="dash-trip-img-wrap">
                  <div className="dash-trip-placeholder">{trip.name} Image</div>
                </div>
                <div className="dash-trip-info">
                  <p className="dash-trip-name">{trip.name}</p>
                  <div className="dash-trip-meta">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="5" r="2" />
                      <path d="M6 1 C3 1 1 3 1 5 C1 8 6 11 6 11 C6 11 11 8 11 5 C11 3 9 1 6 1Z" />
                    </svg>
                    <span className="dash-trip-country">
                      {trip.flag} {trip.country}
                    </span>
                  </div>
                  <div className="dash-trip-date">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="2" width="10" height="9" rx="1.5" />
                      <line x1="1" y1="5" x2="11" y2="5" />
                      <line x1="4" y1="1" x2="4" y2="3" />
                      <line x1="8" y1="1" x2="8" y2="3" />
                    </svg>
                    <span>{trip.startDate} – {trip.endDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FLOATING PLAN A TRIP BUTTON */}
      <button className="dash-plan-fab">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="2" x2="8" y2="14" />
          <line x1="2" y1="8" x2="14" y2="8" />
        </svg>
        Plan a trip
      </button>





    </div>
  )
}
