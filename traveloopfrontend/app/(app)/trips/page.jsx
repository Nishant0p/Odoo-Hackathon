<<<<<<< HEAD
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import '../../../styles/trips.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const trips = [
  {
    id: 1,
    status: 'ONGOING',
    name: 'Swiss Alps Adventure',
    country: 'Switzerland',
    flag: '🇨🇭',
    startDate: 'May 10',
    endDate: 'May 17, 2024',
    description: 'Experience the breathtaking beauty of Swiss Alps with curated activities and scenic views.',
    travelers: 2,
    budget: '$2,450',
    img: '', // empty since not available, triggers placeholder
  },
  {
    id: 2,
    status: 'UP-COMING',
    name: 'Santorini Getaway',
    country: 'Greece',
    flag: '🇬🇷',
    startDate: 'Jun 20',
    endDate: 'Jun 27, 2024',
    description: 'Relax in the beautiful beaches of Santorini and enjoy unforgettable sunsets.',
    travelers: 2,
    budget: '$1,980',
    img: '',
  },
  {
    id: 3,
    status: 'COMPLETED',
    name: 'Bali Retreat',
    country: 'Indonesia',
    flag: '🇮🇩',
    startDate: 'Mar 15',
    endDate: 'Mar 22, 2024',
    description: 'A peaceful retreat in Bali with temples, culture and amazing landscapes.',
    travelers: 2,
    budget: '$1,750',
    img: '',
  },
  {
    id: 4,
    status: 'COMPLETED',
    name: 'Dubai City Escape',
    country: 'UAE',
    flag: '🇦🇪',
    startDate: 'Feb 18',
    endDate: 'Feb 25, 2024',
    description: 'Explore the futuristic city of Dubai with luxury, adventure and world-class attractions.',
    travelers: 2,
    budget: '$2,100',
    img: '',
  },
]

const ongoing = trips.filter(t => t.status === 'ONGOING')
const upcoming = trips.filter(t => t.status === 'UP-COMING')
const completed = trips.filter(t => t.status === 'COMPLETED')

const getBadgeClass = (status) => {
  if (status === 'ONGOING') return 'trips-badge trips-badge--ongoing'
  if (status === 'UP-COMING') return 'trips-badge trips-badge--upcoming'
  return 'trips-badge trips-badge--completed'
}

function TripCard({ trip }) {
  return (
    <div className="trips-card">

      {/* Image */}
      <div className="trips-card-img-wrap">
        {trip.img ? (
          <Image src={trip.img} alt={trip.name} fill className="trips-card-img" />
        ) : (
          <div className="trips-card-img-placeholder">{trip.name}</div>
        )}
      </div>

      {/* Content */}
      <div className="trips-card-content">

        {/* Top row: badge + 3-dot menu */}
        <div className="trips-card-top">
          <span className={getBadgeClass(trip.status)}>{trip.status}</span>
          <button className="trips-card-menu-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#111111" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="9" r="1.5"/>
              <circle cx="9" cy="9" r="1.5"/>
              <circle cx="14" cy="9" r="1.5"/>
            </svg>
          </button>
        </div>

        {/* Trip Name */}
        <h3 className="trips-card-name">{trip.name}</h3>

        {/* Meta: country + dates */}
        <div className="trips-card-meta">
          <div className="trips-card-meta-item">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7.5" cy="6" r="2.5"/>
              <path d="M7.5 1 C4.5 1 2 3.5 2 6 C2 9.5 7.5 14 7.5 14 C7.5 14 13 9.5 13 6 C13 3.5 10.5 1 7.5 1Z"/>
            </svg>
            <span>{trip.country}</span>
          </div>
          <div className="trips-card-meta-item">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1.5" y="2.5" width="12" height="11" rx="2"/>
              <line x1="1.5" y1="6.5" x2="13.5" y2="6.5"/>
              <line x1="5" y1="1" x2="5" y2="4"/>
              <line x1="10" y1="1" x2="10" y2="4"/>
            </svg>
            <span>{trip.startDate} – {trip.endDate}</span>
          </div>
        </div>

        {/* Description */}
        <p className="trips-card-desc">{trip.description}</p>

        {/* Footer: stats + CTA */}
        <div className="trips-card-footer">
          <div className="trips-card-stats">
            <div className="trips-card-stat">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5.5" cy="5" r="2.5"/>
                <path d="M1 13 Q1 10 5.5 10 Q10 10 10 13"/>
                <circle cx="11" cy="5" r="2"/>
                <path d="M9 13 Q10.5 10 14 11"/>
              </svg>
              <span>{trip.travelers} Travelers</span>
            </div>
            <span className="trips-card-stat-dot">•</span>
            <div className="trips-card-stat">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="13" height="9" rx="2"/>
                <path d="M1 7 L14 7"/>
                <circle cx="11.5" cy="10.5" r="1"/>
              </svg>
              <span>{trip.budget} Budget</span>
            </div>
          </div>
          <button className="trips-card-cta">
            View Trip Details
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="8" x2="13" y2="8"/>
              <path d="M9 4 L13 8 L9 12"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default function TripsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={`trips-root ${sora.className}`}>

      <div className="trips-container">

        {/* 2. PAGE HEADER */}
        <div className="trips-header">
          <h1 className="trips-title">My Trips</h1>
          <p className="trips-description">
            All your trips in one place. Plan, track and explore your adventures.
          </p>
        </div>

        {/* 3. SEARCH + FILTER BAR */}
        <div className="trips-search-row">
          <div className="trips-search-wrap">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="7" r="5"/>
              <line x1="11" y1="11" x2="15" y2="15"/>
            </svg>
            <input
              className="trips-search-input"
              placeholder="Search trips by destination, title or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="trips-filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="5" r="2.5"/>
              <path d="M1 14 Q1 10 6 10 Q11 10 11 14"/>
              <circle cx="11.5" cy="5" r="2"/>
              <path d="M10 14 Q11 11 15 12"/>
            </svg>
            Group by
          </button>
          <button className="trips-filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="4" x2="14" y2="4"/>
              <line x1="4" y1="8" x2="12" y2="8"/>
              <line x1="6" y1="12" x2="10" y2="12"/>
            </svg>
            Filter
          </button>
          <button className="trips-filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="5" x2="14" y2="5"/>
              <line x1="4" y1="9" x2="14" y2="9"/>
              <line x1="6" y1="13" x2="14" y2="13"/>
            </svg>
            Sort by
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}>
              <path d="M2 3 L5 7 L8 3"/>
            </svg>
          </button>
        </div>

        {/* 4. ONGOING SECTION */}
        <section className="trips-section">
          <div className="trips-section-header">
            <div className="trips-section-heading-wrap">
              <div className="trips-section-accent" />
              <h2 className="trips-section-title">Ongoing</h2>
            </div>
            <button className="trips-view-all">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F81927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3 L9 7 L5 11"/>
              </svg>
            </button>
          </div>
          <div className="trips-cards-list">
            {ongoing.map(trip => <TripCard key={trip.id} trip={trip} />)}
          </div>
        </section>

        {/* 5. UPCOMING SECTION */}
        <section className="trips-section">
          <div className="trips-section-header">
            <div className="trips-section-heading-wrap">
              <div className="trips-section-accent" />
              <h2 className="trips-section-title">Up-coming</h2>
            </div>
            <button className="trips-view-all">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F81927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3 L9 7 L5 11"/>
              </svg>
            </button>
          </div>
          <div className="trips-cards-list">
            {upcoming.map(trip => <TripCard key={trip.id} trip={trip} />)}
          </div>
        </section>

        {/* 6. COMPLETED SECTION */}
        <section className="trips-section">
          <div className="trips-section-header">
            <div className="trips-section-heading-wrap">
              <div className="trips-section-accent" />
              <h2 className="trips-section-title">Completed</h2>
            </div>
            <button className="trips-view-all">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F81927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3 L9 7 L5 11"/>
              </svg>
            </button>
          </div>
          <div className="trips-cards-list">
            {completed.map(trip => <TripCard key={trip.id} trip={trip} />)}
          </div>
        </section>

      </div>

    </div>
  )
}
=======
import React from "react";

const Trips = () => {
  return <div>Trips</div>;
};

export default Trips;
>>>>>>> 35ca6e74d641af63cf10c2e2aeb64950a5a6216d
