<<<<<<< HEAD
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import '../../../styles/profile.css'
import logoImg from '@/public/logo.png'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const user = {
  name: 'Impressive Mantis',
  email: 'impressive.mantis@gmail.com',
  phone: '+91 98765 43210',
  location: 'Ahmedabad, Gujarat, India',
  isPremium: true,
  avatar: '',
  stats: {
    tripsPlanned: 12,
    tripsCompleted: 8,
    countriesVisited: 4,
    totalSpent: '₹1,26,450',
  },
}

const preplannedTrips = [
  {
    id: 1,
    status: 'ONGOING',
    name: 'Swiss Alps Adventure',
    country: 'Switzerland',
    flag: '🇨🇭',
    startDate: 'May 10',
    endDate: 'May 17, 2024',
    travelers: 2,
    budget: '$3,450',
    img: '',
  },
  {
    id: 2,
    status: 'UP-COMING',
    name: 'Santorini Getaway',
    country: 'Greece',
    flag: '🇬🇷',
    startDate: 'Jun 20',
    endDate: 'Jun 27, 2024',
    travelers: 2,
    budget: '$1,980',
    img: '',
  },
  {
    id: 3,
    status: 'UP-COMING',
    name: 'Bali Retreat',
    country: 'Indonesia',
    flag: '🇮🇩',
    startDate: 'Mar 15',
    endDate: 'Mar 22, 2024',
    travelers: 2,
    budget: '$1,980',
    img: '',
  },
]

const previousTrips = [
  {
    id: 4,
    name: 'Dubai City Escape',
    country: 'UAE',
    flag: '🇦🇪',
    startDate: 'Feb 18',
    endDate: 'Feb 25, 2024',
    travelers: 2,
    budget: '$2,100',
    img: '',
  },
  {
    id: 5,
    name: 'Maldives Paradise',
    country: 'Maldives',
    flag: '🇲🇻',
    startDate: 'Jan 10',
    endDate: 'Jan 16, 2024',
    travelers: 2,
    budget: '$3,150',
    img: '',
  },
  {
    id: 6,
    name: 'Paris Explorer',
    country: 'France',
    flag: '🇫🇷',
    startDate: 'Dec 03',
    endDate: 'Dec 10, 2023',
    travelers: 2,
    budget: '$1,620',
    img: '',
  },
]

const getTripBadgeClass = (status) => {
  if (status === 'ONGOING') return 'profile-trip-badge profile-trip-badge--ongoing'
  if (status === 'UP-COMING') return 'profile-trip-badge profile-trip-badge--upcoming'
  return ''
}

function ProfileTripCard({ trip, showBadge = false }) {
  return (
    <div className="profile-trip-card">
      <div className="profile-trip-img-wrap">
        {trip.img ? (
          <Image src={trip.img} alt={trip.name} fill className="profile-trip-img" />
        ) : (
          <div className="profile-trip-img-placeholder">{trip.name}</div>
        )}
        {showBadge && trip.status && (
          <div className="profile-trip-badge-wrap">
            <span className={getTripBadgeClass(trip.status)}>
              {trip.status}
            </span>
          </div>
        )}
        <button className="profile-trip-menu-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#5F5F5F" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="8" r="1.3"/>
            <circle cx="8" cy="8" r="1.3"/>
            <circle cx="12.5" cy="8" r="1.3"/>
          </svg>
        </button>
      </div>
      <div className="profile-trip-content">
        <p className="profile-trip-name">{trip.name}</p>
        <div className="profile-trip-meta-row">
          <div className="profile-trip-meta-item">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6.5" cy="5" r="2"/>
              <path d="M6.5 1 C4 1 2 3 2 5 C2 8 6.5 12 6.5 12 C6.5 12 11 8 11 5 C11 3 9 1 6.5 1Z"/>
            </svg>
            <span>{trip.country}</span>
          </div>
          <div className="profile-trip-meta-item">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="2" width="11" height="10" rx="1.5"/>
              <line x1="1" y1="5.5" x2="12" y2="5.5"/>
              <line x1="4" y1="1" x2="4" y2="3.5"/>
              <line x1="9" y1="1" x2="9" y2="3.5"/>
            </svg>
            <span>{trip.startDate} – {trip.endDate}</span>
          </div>
        </div>
        <div className="profile-trip-stats-row">
          <div className="profile-trip-stat">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="5" cy="4.5" r="2"/>
              <path d="M1 11 Q1 8 5 8 Q9 8 9 11"/>
              <circle cx="9.5" cy="4.5" r="1.5"/>
              <path d="M8 11 Q9 8.5 12 9.5"/>
            </svg>
            <span>{trip.travelers} Travelers</span>
          </div>
          <div className="profile-trip-stat">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3.5" width="11" height="8" rx="1.5"/>
              <path d="M1 6.5 L12 6.5"/>
              <circle cx="9.5" cy="9" r="0.8"/>
            </svg>
            <span>{trip.budget} Budget</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  return (
    <div className={`profile-root ${sora.className}`}>

      {/* 1. NAVBAR */}
      <nav className="profile-navbar">
        <div className="profile-nav-left">
          <Image src={logoImg} alt="Traveloop"
            width={180} height={44} className="profile-logo-img"
            style={{ objectFit: 'contain', objectPosition: 'left' }} />
          <ul className="profile-nav-links">
            <li><a href="#">Explore</a></li>
            <li><a href="#">Trips</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="profile-nav-right">
          <button className="profile-nav-icon-btn">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5F5F5F" strokeWidth="1.5">
              <circle cx="11" cy="11" r="9"/>
              <path d="M11 2 C11 2 7 6 7 11 C7 16 11 20 11 20"/>
              <path d="M11 2 C11 2 15 6 15 11 C15 16 11 20 11 20"/>
              <line x1="2" y1="11" x2="20" y2="11"/>
            </svg>
          </button>
          <button className="profile-nav-icon-btn">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5F5F5F" strokeWidth="1.5">
              <path d="M6 10 C6 6 8 4 11 4 C14 4 16 6 16 10 L16 14 L18 16 L4 16 L6 14 Z"/>
              <line x1="9" y1="17" x2="13" y2="17"/>
            </svg>
            <span className="profile-nav-notif-dot" />
          </button>
          <button className="profile-nav-profile-circle">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5F5F5F" strokeWidth="1.5">
              <circle cx="11" cy="8" r="4"/>
              <path d="M3 20 Q3 15 11 15 Q19 15 19 20"/>
            </svg>
          </button>
        </div>
      </nav>

      <div className="profile-container">

        {/* 2. PAGE HEADER */}
        <div className="profile-header">
          <h1 className="profile-page-title">My Profile</h1>
          <p className="profile-page-desc">
            Manage your profile, preferences and trips.
          </p>
        </div>

        {/* 3. PROFILE CARD */}
        <div className="profile-card">

          {/* Top: avatar + info + edit button */}
          <div className="profile-card-top">
            <div className="profile-avatar-wrap">
              {user.avatar ? (
                <Image src={user.avatar} alt={user.name} width={100} height={100} className="profile-avatar" />
              ) : (
                <div className="profile-avatar-placeholder">Avatar</div>
              )}
              <button className="profile-avatar-edit">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4 L4 2 L6 4 L12 4 L12 11 L2 11 Z"/>
                  <circle cx="7" cy="7.5" r="2"/>
                </svg>
              </button>
            </div>

            <div className="profile-info">
              <div className="profile-name-row">
                <h2 className="profile-name">{user.name}</h2>
                {user.isPremium && (
                  <span className="profile-premium-badge">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="#F81927" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5"/>
                    </svg>
                    Premium
                  </span>
                )}
              </div>
              <div className="profile-contact-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2 L5 2 L6.5 5.5 L5 6.5 C5.5 8 6 8.5 7.5 9 L8.5 7.5 L12 9 L12 11 C9 12 2 8 3 2Z"/>
                </svg>
                <span>{user.phone}</span>
                <span style={{color: '#EAEAEA', margin: '0 4px'}}>|</span>
                <span>{user.email}</span>
              </div>
              <div className="profile-location-row">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="5.5" r="2.5"/>
                  <path d="M7 1 C4 1 1.5 3.5 1.5 5.5 C1.5 9 7 13 7 13 C7 13 12.5 9 12.5 5.5 C12.5 3.5 10 1 7 1Z"/>
                </svg>
                <span>{user.location}</span>
              </div>
            </div>

            <button className="profile-edit-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 10 L10 2 L12 4 L4 12 Z"/>
                <line x1="2" y1="12" x2="14" y2="12"/>
              </svg>
              Edit Profile
            </button>
          </div>

          {/* Stats Row */}
          <div className="profile-stats-row">

            <div className="profile-stat-item">
              <div className="profile-stat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="16" height="11" rx="2"/>
                  <path d="M7 7 L7 5 Q7 3 10 3 Q13 3 13 5 L13 7"/>
                  <line x1="2" y1="12" x2="18" y2="12"/>
                </svg>
              </div>
              <div className="profile-stat-text">
                <p className="profile-stat-value">{user.stats.tripsPlanned}</p>
                <p className="profile-stat-label">Trips Planned</p>
              </div>
            </div>

            <div className="profile-stat-item">
              <div className="profile-stat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8"/>
                  <path d="M6 10 L9 13 L14 7"/>
                </svg>
              </div>
              <div className="profile-stat-text">
                <p className="profile-stat-value">{user.stats.tripsCompleted}</p>
                <p className="profile-stat-label">Trips Completed</p>
              </div>
            </div>

            <div className="profile-stat-item">
              <div className="profile-stat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="8"/>
                  <path d="M10 2 C10 2 7 5 7 10 C7 15 10 18 10 18"/>
                  <path d="M10 2 C10 2 13 5 13 10 C13 15 10 18 10 18"/>
                  <line x1="2" y1="10" x2="18" y2="10"/>
                </svg>
              </div>
              <div className="profile-stat-text">
                <p className="profile-stat-value">{user.stats.countriesVisited}</p>
                <p className="profile-stat-label">Countries Visited</p>
              </div>
            </div>

            <div className="profile-stat-item">
              <div className="profile-stat-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#5F5F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="16" height="12" rx="2"/>
                  <path d="M2 9 L18 9"/>
                  <circle cx="14" cy="13" r="1.5"/>
                </svg>
              </div>
              <div className="profile-stat-text">
                <p className="profile-stat-value">{user.stats.totalSpent}</p>
                <p className="profile-stat-label">Total Spent</p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. PREPLANNED TRIPS SECTION */}
        <section className="profile-section">
          <div className="profile-section-header">
            <div className="profile-section-heading-wrap">
              <div className="profile-section-accent" />
              <h2 className="profile-section-title">Preplanned Trips</h2>
            </div>
            <button className="profile-view-all">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#F81927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3 L9 7 L5 11"/>
              </svg>
            </button>
          </div>
          <div className="profile-trips-grid">
            {preplannedTrips.map(trip => (
              <ProfileTripCard key={trip.id} trip={trip} showBadge={true} />
            ))}
          </div>
        </section>

        {/* 5. PREVIOUS TRIPS SECTION */}
        <section className="profile-section">
          <div className="profile-section-header">
            <div className="profile-section-heading-wrap">
              <div className="profile-section-accent" />
              <h2 className="profile-section-title">Previous Trips</h2>
            </div>
            <button className="profile-view-all">
              View All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#F81927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3 L9 7 L5 11"/>
              </svg>
            </button>
          </div>
          <div className="profile-trips-grid">
            {previousTrips.map(trip => (
              <ProfileTripCard key={trip.id} trip={trip} showBadge={false} />
            ))}
          </div>
        </section>

      </div>

      {/* 6. FOOTER */}
      <footer className="profile-footer">
        <span className="profile-footer-copy">
          © 2024 Traveloop. All rights reserved.
        </span>
        <ul className="profile-footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </footer>

    </div>
  )
}
=======
import React from "react";

const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;
>>>>>>> 35ca6e74d641af63cf10c2e2aeb64950a5a6216d
