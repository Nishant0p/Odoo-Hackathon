'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'

import Navbar from '../../../../components/layout/Navbar'
import Footer from '../../../../components/layout/Footer'

import '../../../../styles/create-trip.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const suggestedDestinations = [
  { id: 1, name: 'Lake Louise', country: 'Canada', img: '/images/lake-louise.jpg' },
  { id: 2, name: 'Cappadocia', country: 'Turkey', img: '/images/cappadocia.jpg' },
  { id: 3, name: 'Bali Beaches', country: 'Indonesia', img: '/images/bali.jpg' },
  { id: 4, name: 'Kyoto Temples', country: 'Japan', img: '/images/kyoto.jpg' },
  { id: 5, name: 'Santorini', country: 'Greece', img: '/images/santorini.jpg' },
  { id: 6, name: 'Iceland Adventure', country: 'Iceland', img: '/images/iceland.jpg' },
]

export default function CreateTripPage() {
  const [tripName, setTripName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [selectedPlace, setSelectedPlace] = useState('')
  const [placeStartDate, setPlaceStartDate] = useState('')
  const [placeEndDate, setPlaceEndDate] = useState('')

  return (
    <div className={`create-trip-root ${sora.className}`}>


      {/* 1. NAVBAR */}
      <Navbar customClass="create-trip-navbar" />


      {/* 2. PAGE HEADER */}
      <div className="create-trip-container">
        <div className="create-trip-header">
          <div>
            <h1 className="create-trip-title">Create a new Trip</h1>
            <p className="create-trip-description">
              Plan your next adventure by adding trip details and choosing places to visit.
            </p>
          </div>
          <button className="create-trip-back-btn">
            <svg viewBox="0 0 16 16" width="16" height="16" stroke="#111111" strokeWidth="2" fill="none">
              <line x1="14" y1="8" x2="2" y2="8"/>
              <path d="M6 4 L2 8 L6 12"/>
            </svg>
            Back to Home
          </button>
        </div>

        {/* 3. MAIN FORM CONTAINER */}
        <div className="create-trip-form-wrapper">
          <p className="create-trip-section-label">Plan a new trip</p>

          {/* Trip Name */}
          <div className="create-trip-field">
            <label className="create-trip-label">Trip Name</label>
            <input
              className="create-trip-input"
              placeholder="Enter a name for your trip"
              value={tripName}
              onChange={e => setTripName(e.target.value)}
            />
          </div>

          {/* Start Date (Trip level) */}
          <div className="create-trip-field">
            <label className="create-trip-label">Start Date</label>
            <div className="create-trip-input-wrap">
              <svg viewBox="0 0 18 18" width="18" height="18" stroke="#8A8A8A" strokeWidth="1.5" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2"/>
                <line x1="2" y1="7" x2="16" y2="7"/>
                <line x1="6" y1="1" x2="6" y2="5"/>
                <line x1="12" y1="1" x2="12" y2="5"/>
              </svg>
              <input
                type="date"
                className="create-trip-input-inner"
                placeholder="Select start date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="create-trip-divider" />

          {/* Select a Place */}
          <div className="create-trip-field">
            <label className="create-trip-label">Select a Place</label>
            <div className="create-trip-input-wrap">
              <svg viewBox="0 0 18 18" width="18" height="18" stroke="#8A8A8A" strokeWidth="1.5" fill="none">
                <circle cx="9" cy="7" r="3"/>
                <path d="M9 1 C5 1 2 4 2 7 C2 11 9 17 9 17 C9 17 16 11 16 7 C16 4 13 1 9 1Z"/>
              </svg>
              <input
                className="create-trip-input-inner"
                placeholder="Search or select a destination"
                value={selectedPlace}
                onChange={e => setSelectedPlace(e.target.value)}
              />
            </div>
          </div>

          {/* Place Start Date */}
          <div className="create-trip-field">
            <label className="create-trip-label">Start Date</label>
            <div className="create-trip-input-wrap">
              <svg viewBox="0 0 18 18" width="18" height="18" stroke="#8A8A8A" strokeWidth="1.5" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2"/>
                <line x1="2" y1="7" x2="16" y2="7"/>
                <line x1="6" y1="1" x2="6" y2="5"/>
                <line x1="12" y1="1" x2="12" y2="5"/>
              </svg>
              <input
                type="date"
                className="create-trip-input-inner"
                placeholder="Select start date"
                value={placeStartDate}
                onChange={e => setPlaceStartDate(e.target.value)}
              />
            </div>
          </div>

          {/* Place End Date */}
          <div className="create-trip-field">
            <label className="create-trip-label">End Date</label>
            <div className="create-trip-input-wrap">
              <svg viewBox="0 0 18 18" width="18" height="18" stroke="#8A8A8A" strokeWidth="1.5" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2"/>
                <line x1="2" y1="7" x2="16" y2="7"/>
                <line x1="6" y1="1" x2="6" y2="5"/>
                <line x1="12" y1="1" x2="12" y2="5"/>
              </svg>
              <input
                type="date"
                className="create-trip-input-inner"
                placeholder="Select end date"
                value={placeEndDate}
                onChange={e => setPlaceEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 4. DESTINATION SUGGESTIONS */}
        <h2 className="create-trip-suggestions-heading">
          Suggestions for places to visit / activities to perform
        </h2>
        <div className="create-trip-cards-grid">
          {suggestedDestinations.map(dest => (
            <div key={dest.id} className="create-trip-dest-card">
              <div className="create-trip-dest-img-wrap">
                <div className="create-trip-dest-placeholder">{dest.name}</div>
                <Image 
                  src={dest.img} 
                  alt={dest.name} 
                  fill 
                  className="create-trip-dest-img" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
                <button className="create-trip-dest-bookmark">
                  <svg viewBox="0 0 16 16" width="16" height="16" stroke="#5F5F5F" strokeWidth="1.5" fill="none">
                    <path d="M4 2 L12 2 L12 14 L8 11 L4 14 Z"/>
                  </svg>
                </button>
              </div>
              <div className="create-trip-dest-info">
                <p className="create-trip-dest-name">{dest.name}</p>
                <p className="create-trip-dest-country">
                  <svg viewBox="0 0 13 13" width="13" height="13" stroke="#8A8A8A" strokeWidth="1.5" fill="none">
                    <circle cx="6.5" cy="5" r="2"/>
                    <path d="M6.5 1 C4 1 1.5 3 1.5 5 C1.5 8 6.5 12 6.5 12 C6.5 12 11.5 8 11.5 5 C11.5 3 9 1 6.5 1Z"/>
                  </svg>
                  {dest.country}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 5. CREATE TRIP BUTTON */}
        <div className="create-trip-actions">
          <button className="create-trip-submit-btn">
            <svg viewBox="0 0 20 20" width="20" height="20" stroke="#FFFFFF" strokeWidth="2" fill="none">
              <path d="M2 10 L18 3 L12 18 L9 12 Z"/>
              <line x1="9" y1="12" x2="18" y2="3"/>
            </svg>
            Create Trip
          </button>
        </div>
      </div>


      {/* 6. FOOTER */}
      <Footer customClass="create-trip-footer" />


    </div>
  )
}
