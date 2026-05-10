'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import '@/styles/notes.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

// SVG Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const GroupIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
)

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
)

const JournalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
)

// Category Icons (SVGs for notes and sidebar tags)
const AccommodationIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 22v-6.57" /><path d="M12 11h.01" /><path d="M12 7h.01" /><path d="M14 15.43V22" /><path d="M15 16a5 5 0 0 0-6 0" /><path d="M16 11h.01" /><path d="M16 7h.01" /><path d="M8 11h.01" /><path d="M8 7h.01" /><rect x="4" y="2" width="16" height="20" rx="2" />
  </svg>
)

const FoodIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
)

const SightseeingIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" />
  </svg>
)

const TransportIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
  </svg>
)

const ShoppingIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const ImportantIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const OthersIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
)

export default function TripNotesPage() {
  const [activeTab, setActiveTab] = useState('All Notes')

  const notes = [
    {
      id: 1,
      category: 'Accommodation',
      catClass: 'accommodation',
      icon: <AccommodationIcon />,
      title: 'Hotel check-in details – Rome stop',
      day: 'Day 3',
      date: 'June 14, 2025',
      location: 'Rome, Italy',
      description: 'Check in after 2pm, room 302, breakfast included (7–10am)',
      time: '10:30 AM',
    },
    {
      id: 2,
      category: 'Food & Dining',
      catClass: 'food',
      icon: <FoodIcon />,
      title: 'Dinner reservation – Trastevere',
      day: 'Day 3',
      date: 'June 14, 2025',
      location: 'Rome, Italy',
      description: 'Booked a table at Trattoria Da Enzo for 7:30 PM. Try the Cacio e Pepe!',
      time: '06:15 PM',
    },
    {
      id: 3,
      category: 'Sightseeing',
      catClass: 'sightseeing',
      icon: <SightseeingIcon />,
      title: 'Colosseum visit notes',
      day: 'Day 2',
      date: 'June 13, 2025',
      location: 'Rome, Italy',
      description: 'Visited early morning. Skip-the-line ticket saved a lot of time. The view from the upper level is amazing.',
      time: '09:45 AM',
    },
  ]

  const tags = [
    { label: 'Accommodation', count: 12, icon: <AccommodationIcon />, color: '#F81927' },
    { label: 'Food & Dining', count: 8, icon: <FoodIcon />, color: '#4CAF50' },
    { label: 'Sightseeing', count: 15, icon: <SightseeingIcon />, color: '#F5A623' },
    { label: 'Transport', count: 6, icon: <TransportIcon />, color: '#2196F3' },
    { label: 'Shopping', count: 4, icon: <ShoppingIcon />, color: '#9C27B0' },
    { label: 'Important', count: 7, icon: <ImportantIcon />, color: '#F81927' },
    { label: 'Others', count: 3, icon: <OthersIcon />, color: '#5F5F5F' },
  ]

  return (
    <div className={`note-page ${sora.className}`}>
      <div className="note-container">
        
        {/* PAGE HEADER */}
        <div className="note-header-row">
          <div className="note-header-left">
            <div className="note-header-icon">
              <JournalIcon />
            </div>
            <div>
              <h1 className="note-title">Trip Notes / Journal</h1>
              <p className="note-subtitle">Capture your memories, thoughts, and important details from your journey.</p>
            </div>
          </div>
        </div>

        {/* SEARCH + FILTER BAR */}
        <div className="note-toolbar">
          <div className="note-search-wrapper">
            <input type="text" className="note-search-input" placeholder="Search notes..." />
            <SearchIcon className="note-search-icon" />
          </div>
          <button className="note-filter-btn">
            <GroupIcon /> Group by
          </button>
          <button className="note-filter-btn">
            <FilterIcon /> Filter
          </button>
          <button className="note-filter-btn">
            Sort by: Latest <ChevronDownIcon />
          </button>
        </div>

        {/* MAIN TWO-COLUMN GRID */}
        <div className="note-main-grid">
          
          {/* LEFT COLUMN */}
          <div className="note-left-col">
            
            {/* Trip Selection Card */}
            <div className="note-trip-card">
              <div className="note-trip-left">
                <img src="https://picsum.photos/88/88?random=30" alt="Trip" className="note-trip-img" />
                <div className="note-trip-info">
                  <h2 className="note-trip-title">
                    Trip: Paris & Rome Adventure <ChevronDownIcon />
                  </h2>
                  <div className="note-trip-meta">May 10 – May 24, 2024 • 14 Days</div>
                </div>
              </div>
              <button className="note-btn-add">
                <PlusIcon /> Add Note
              </button>
            </div>

            {/* Tabs */}
            <div className="note-tabs">
              <button 
                className={`note-tab ${activeTab === 'All Notes' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('All Notes')}
              >
                📋 All Notes
              </button>
              <button 
                className={`note-tab ${activeTab === 'By Day' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('By Day')}
              >
                📅 By Day
              </button>
              <button 
                className={`note-tab ${activeTab === 'By Stop' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('By Stop')}
              >
                📍 By Stop
              </button>
            </div>

            {/* Note Cards List */}
            <div className="note-cards-list">
              {notes.map(note => (
                <div key={note.id} className="note-card">
                  
                  {/* Left: Icon Container */}
                  <div className={`note-card-icon note-cat-${note.catClass}`}>
                    {note.icon}
                  </div>
                  
                  {/* Center: Note Content */}
                  <div className="note-card-content">
                    <h3 className="note-card-title">{note.title}</h3>
                    <div className="note-card-meta">
                      <div className="note-meta-item bold">
                        <CalendarIcon /> {note.day}
                      </div>
                      <span style={{color: '#EAEAEA'}}>•</span>
                      <div className="note-meta-item">
                        {note.date}
                      </div>
                      <span style={{color: '#EAEAEA'}}>•</span>
                      <div className="note-meta-item">
                        <MapPinIcon /> {note.location}
                      </div>
                    </div>
                    <p className="note-card-desc">{note.description}</p>
                    <div className={`note-card-tag note-tag-${note.catClass}`}>
                      {note.category}
                    </div>
                    <div className="note-card-time">
                      <ClockIcon /> {note.time}
                    </div>
                  </div>
                  
                  {/* Right: Action Buttons */}
                  <div className="note-card-actions">
                    <button className="note-btn-action note-btn-edit">
                      <EditIcon />
                    </button>
                    <button className="note-btn-action note-btn-delete">
                      <TrashIcon />
                    </button>
                  </div>
                  
                </div>
              ))}
            </div>
            
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="note-sidebar">
            
            {/* Search Notes Card */}
            <div className="note-sidebar-card">
              <h3 className="note-sidebar-title">Search Notes</h3>
              <div className="note-sidebar-search-wrap">
                <input type="text" className="note-sidebar-search" placeholder="Search within trip notes..." />
                <SearchIcon className="note-sidebar-search-icon" />
              </div>
            </div>

            {/* Tags Card */}
            <div className="note-sidebar-card">
              <h3 className="note-sidebar-title">Tags</h3>
              <div className="note-tag-rows">
                {tags.map((tag, index) => (
                  <div key={index} className="note-tag-row">
                    <div className="note-tag-row-left">
                      <div style={{ width: '16px', height: '16px', color: tag.color }}>
                        {tag.icon}
                      </div>
                      <span className="note-tag-row-name">{tag.label}</span>
                    </div>
                    <span className="note-tag-row-count">{tag.count}</span>
                  </div>
                ))}
              </div>
              <button className="note-tag-view-all">
                View all tags →
              </button>
            </div>

            {/* Notes Summary Card */}
            <div className="note-sidebar-card">
              <h3 className="note-sidebar-title">Notes Summary</h3>
              <div className="note-summary-rows">
                <div className="note-summary-row">
                  <div className="note-summary-row-left">
                    <span style={{ fontSize: '16px' }}>📋</span> Total Notes
                  </div>
                  <span className="note-summary-row-val">45</span>
                </div>
                <div className="note-summary-row">
                  <div className="note-summary-row-left">
                    <span style={{ fontSize: '16px' }}>✈️</span> This Trip
                  </div>
                  <span className="note-summary-row-val">32</span>
                </div>
                <div className="note-summary-row">
                  <div className="note-summary-row-left">
                    <span style={{ fontSize: '16px' }}>📅</span> This Week
                  </div>
                  <span className="note-summary-row-val">8</span>
                </div>
                <div className="note-summary-row">
                  <div className="note-summary-row-left">
                    <span style={{ fontSize: '16px' }}>📅</span> Today
                  </div>
                  <span className="note-summary-row-val">3</span>
                </div>
              </div>
            </div>

            {/* Quick Tip Card */}
            <div className="note-sidebar-card">
              <h3 className="note-sidebar-title" style={{ fontSize: '20px' }}>
                <LightbulbIcon style={{ color: '#F5A623', width: '20px', height: '20px' }} /> Quick Tip
              </h3>
              <p className="note-tip-desc">
                Write notes regularly to remember important details and special moments from your trip.
              </p>
              <img src="https://picsum.photos/280/180?random=40" alt="Quick Tip" className="note-tip-img" />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
