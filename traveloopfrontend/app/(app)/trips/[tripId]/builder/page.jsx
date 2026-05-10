'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import '../../../../../styles/builder.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function BuildItineraryPage() {
  const [sections, setSections] = useState([
    { id: 1, dateRange: '', budget: '' },
    { id: 2, dateRange: '', budget: '' },
    { id: 3, dateRange: '', budget: '' },
  ])

  const addSection = () => {
    setSections(prev => [
      ...prev,
      { id: prev.length + 1, dateRange: '', budget: '' }
    ])
  }

  const updateSection = (id, field, value) => {
    setSections(prev =>
      prev.map(s => s.id === id ? { ...s, [field]: value } : s)
    )
  }

  return (
    <div className={`builder-root ${sora.className}`}>

      {/* 2. PAGE HEADER */}
      <div className="builder-container">
        <div className="builder-header">
          <div className="builder-header-left">
            <h1 className="builder-title">Build Itinerary</h1>
            <p className="builder-description">
              Plan your perfect trip by filling in the details for each section of your itinerary.
            </p>
          </div>
          <button className="builder-back-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="14" y1="8" x2="2" y2="8"/>
              <path d="M6 4 L2 8 L6 12"/>
            </svg>
            Back to Trip Details
          </button>
        </div>

        {/* 3. SECTION CARDS */}
        <div className="builder-sections-list">
          {sections.map((section, index) => (
            <div key={section.id} className="builder-section-card">

              {/* Section Header */}
              <div className="builder-section-header">
                <div className="builder-section-accent" />
                <h2 className="builder-section-title">Section {index + 1}</h2>
              </div>
              <p className="builder-section-desc">
                All the necessary information about this section.
                This can be anything like travel section, hotel or any other activity.
              </p>

              {/* Input Grid */}
              <div className="builder-input-grid">

                {/* Date Range */}
                <div className="builder-input-group">
                  <label className="builder-input-label">Date Range</label>
                  <div className="builder-input-wrap">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="14" height="13" rx="2"/>
                      <line x1="2" y1="7" x2="16" y2="7"/>
                      <line x1="6" y1="1" x2="6" y2="5"/>
                      <line x1="12" y1="1" x2="12" y2="5"/>
                    </svg>
                    <input
                      type="text"
                      className="builder-input-inner"
                      placeholder="Select date range"
                      value={section.dateRange}
                      onChange={e => updateSection(section.id, 'dateRange', e.target.value)}
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="builder-input-group">
                  <label className="builder-input-label">Budget of this section</label>
                  <div className="builder-input-wrap">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="9" r="7"/>
                      <line x1="9" y1="5" x2="9" y2="13"/>
                      <path d="M7 7 Q7 5 9 5 Q11 5 11 7 Q11 9 9 9 Q11 9 11 11 Q11 13 9 13 Q7 13 7 11"/>
                    </svg>
                    <input
                      type="text"
                      className="builder-input-inner"
                      placeholder="Enter budget"
                      value={section.budget}
                      onChange={e => updateSection(section.id, 'budget', e.target.value)}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 4. ADD ANOTHER SECTION */}
        <div className="builder-add-section" onClick={addSection}>
          <div className="builder-add-circle">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F81927" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="11" y1="4" x2="11" y2="18"/>
              <line x1="4" y1="11" x2="18" y2="11"/>
            </svg>
          </div>
          <p className="builder-add-label">Add another Section</p>
          <p className="builder-add-sublabel">Add more sections to include more activities or stays.</p>
        </div>

        {/* 5. SAVE & CONTINUE BUTTON */}
        <div className="builder-actions">
          <button className="builder-save-btn">
            Save & Continue
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="9" x2="15" y2="9"/>
              <path d="M11 5 L15 9 L11 13"/>
            </svg>
          </button>
        </div>
      </div>

      </div>
  )
}
