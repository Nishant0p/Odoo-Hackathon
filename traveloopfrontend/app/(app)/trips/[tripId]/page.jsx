
"use client";

import React, { useState } from 'react';
import '@/styles/itinerary.css';

// SVG Icons as inline components for simplicity and dependency-free rendering
const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const GroupIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const MenuDotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
  </svg>
);

export default function ItineraryPage() {
  const [collapsedDays, setCollapsedDays] = useState({
    1: false,
    2: false,
    3: true,
  });

  const toggleDay = (dayNum) => {
    setCollapsedDays(prev => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  return (
    <div className="itin-page">
      <div className="itin-container">
        {/* Breadcrumb */}
        <div className="itin-breadcrumb">
          <span>My Trips</span>
          <span className="itin-breadcrumb-separator">›</span>
          <span>Swiss Alps Adventure</span>
          <span className="itin-breadcrumb-separator">›</span>
          <span className="itin-breadcrumb-active">Itinerary</span>
        </div>

        {/* Main Header */}
        <div className="itin-main-header">
          <div>
            <div className="itin-title-row">
              <h1 className="itin-title">Swiss Alps Adventure</h1>
              <div className="itin-status-badge">ONGOING</div>
            </div>
            <div className="itin-meta-row">
              <div className="itin-meta-item">
                <PinIcon /> Switzerland
              </div>
              <div className="itin-meta-item">
                <CalendarIcon /> May 10 – May 17, 2024
              </div>
              <div className="itin-meta-item">
                <span>👥 2 Travelers</span>
              </div>
              <div className="itin-meta-item">
                <span>💰 ₹82,450 Budget</span>
              </div>
            </div>
          </div>
          <div className="itin-header-actions">
            <button className="itin-btn-secondary">
              <ShareIcon /> Share Trip
            </button>
            <button className="itin-btn-primary">
              <EditIcon /> Edit Itinerary
            </button>
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div className="itin-search-bar">
          <div className="itin-search-input-wrapper">
            <SearchIcon className="itin-search-icon" />
            <input type="text" className="itin-search-input" placeholder="Search activities, places, or notes..." />
          </div>
          <button className="itin-filter-btn">
            <GroupIcon /> Group by
          </button>
          <button className="itin-filter-btn">
            <FilterIcon /> Filter
          </button>
          <button className="itin-filter-btn">
            ↑↓ Sort by: Latest <ChevronDownIcon />
          </button>
        </div>

        {/* Section Heading */}
        <div className="itin-section-heading">
          <div>
            <h2 className="itin-section-title">Itinerary for a selected place</h2>
            <p className="itin-section-subtitle">Your day-by-day travel plan and activities</p>
          </div>
          <button className="itin-btn-expand">
            <ExpandIcon /> Expand All
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="itin-content-grid">
          {/* LEFT COLUMN - DAYS */}
          <div>
            {/* Day 1 */}
            <div className="itin-day-card">
              <div className="itin-day-sidebar">
                <div className={`itin-day-circle ${collapsedDays[1] ? 'itin-day-circle-collapsed' : ''}`}>1</div>
                <h3 className="itin-day-heading">Day 1</h3>
                <div className="itin-day-date">May 10, Fri</div>
                <div className="itin-day-vibe">☀️ Exploring</div>
              </div>
              <div className="itin-day-right">
                <div className={`itin-day-summary ${collapsedDays[1] ? 'collapsed' : ''}`}>
                  <div className="itin-day-summary-left">
                    <span>🗓 3 Activities</span>
                  </div>
                  <div className="itin-day-summary-right">
                    <span className="itin-day-cost">₹8,450</span>
                    <button className="itin-day-collapse-btn" onClick={() => toggleDay(1)}>
                      {collapsedDays[1] ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    </button>
                  </div>
                </div>
                {!collapsedDays[1] && (
                  <div className="itin-timeline">
                    {/* Activity 1 */}
                    <div className="itin-activity-row">
                      <div className="itin-timeline-marker">
                        <div className="itin-timeline-dot"></div>
                        <div className="itin-timeline-line"></div>
                      </div>
                      <div className="itin-activity-content-wrapper">
                        <div className="itin-activity-time">09:00 AM</div>
                        <div className="itin-activity-content">
                          <img src="https://picsum.photos/92/72?random=1" alt="Activity" className="itin-activity-img" />
                          <div className="itin-activity-details">
                            <div className="itin-activity-name">Mount Titlis Cable Car</div>
                            <div className="itin-activity-location"><PinIcon /> Engelberg, Switzerland</div>
                          </div>
                          <div className="itin-activity-cost-wrapper">
                            <span className="itin-activity-cost">₹3,200</span>
                            <button className="itin-activity-menu"><MenuDotsIcon /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Activity 2 */}
                    <div className="itin-activity-row">
                      <div className="itin-timeline-marker">
                        <div className="itin-timeline-dot"></div>
                        <div className="itin-timeline-line"></div>
                      </div>
                      <div className="itin-activity-content-wrapper">
                        <div className="itin-activity-time">01:00 PM</div>
                        <div className="itin-activity-content">
                          <img src="https://picsum.photos/92/72?random=2" alt="Activity" className="itin-activity-img" />
                          <div className="itin-activity-details">
                            <div className="itin-activity-name">Lunch at Trübsee Restaurant</div>
                            <div className="itin-activity-location"><PinIcon /> Engelberg, Switzerland</div>
                          </div>
                          <div className="itin-activity-cost-wrapper">
                            <span className="itin-activity-cost">₹2,100</span>
                            <button className="itin-activity-menu"><MenuDotsIcon /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Activity 3 */}
                    <div className="itin-activity-row">
                      <div className="itin-timeline-marker">
                        <div className="itin-timeline-dot"></div>
                        <div className="itin-timeline-line"></div>
                      </div>
                      <div className="itin-activity-content-wrapper">
                        <div className="itin-activity-time">04:00 PM</div>
                        <div className="itin-activity-content">
                          <img src="https://picsum.photos/92/72?random=3" alt="Activity" className="itin-activity-img" />
                          <div className="itin-activity-details">
                            <div className="itin-activity-name">Glacier Cave Tour</div>
                            <div className="itin-activity-location"><PinIcon /> Titlis Glacier, Switzerland</div>
                          </div>
                          <div className="itin-activity-cost-wrapper">
                            <span className="itin-activity-cost">₹3,150</span>
                            <button className="itin-activity-menu"><MenuDotsIcon /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Day 2 */}
            <div className="itin-day-card">
              <div className="itin-day-sidebar">
                <div className={`itin-day-circle ${collapsedDays[2] ? 'itin-day-circle-collapsed' : ''}`}>2</div>
                <h3 className="itin-day-heading">Day 2</h3>
                <div className="itin-day-date">May 11, Sat</div>
                <div className="itin-day-vibe">☀️ Adventuring</div>
              </div>
              <div className="itin-day-right">
                <div className={`itin-day-summary ${collapsedDays[2] ? 'collapsed' : ''}`}>
                  <div className="itin-day-summary-left">
                    <span>🗓 3 Activities</span>
                  </div>
                  <div className="itin-day-summary-right">
                    <span className="itin-day-cost">₹7,250</span>
                    <button className="itin-day-collapse-btn" onClick={() => toggleDay(2)}>
                      {collapsedDays[2] ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    </button>
                  </div>
                </div>
                {!collapsedDays[2] && (
                  <div className="itin-timeline">
                    {/* Activity 1 */}
                    <div className="itin-activity-row">
                      <div className="itin-timeline-marker">
                        <div className="itin-timeline-dot"></div>
                        <div className="itin-timeline-line"></div>
                      </div>
                      <div className="itin-activity-content-wrapper">
                        <div className="itin-activity-time">08:30 AM</div>
                        <div className="itin-activity-content">
                          <img src="https://picsum.photos/92/72?random=4" alt="Activity" className="itin-activity-img" />
                          <div className="itin-activity-details">
                            <div className="itin-activity-name">Grindelwald First Cliff Walk</div>
                            <div className="itin-activity-location"><PinIcon /> Grindelwald, Switzerland</div>
                          </div>
                          <div className="itin-activity-cost-wrapper">
                            <span className="itin-activity-cost">₹2,800</span>
                            <button className="itin-activity-menu"><MenuDotsIcon /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Activity 2 */}
                    <div className="itin-activity-row">
                      <div className="itin-timeline-marker">
                        <div className="itin-timeline-dot"></div>
                        <div className="itin-timeline-line"></div>
                      </div>
                      <div className="itin-activity-content-wrapper">
                        <div className="itin-activity-time">12:30 PM</div>
                        <div className="itin-activity-content">
                          <img src="https://picsum.photos/92/72?random=5" alt="Activity" className="itin-activity-img" />
                          <div className="itin-activity-details">
                            <div className="itin-activity-name">Bachalpsee Lake Hike</div>
                            <div className="itin-activity-location"><PinIcon /> Grindelwald, Switzerland</div>
                          </div>
                          <div className="itin-activity-cost-wrapper">
                            <span className="itin-activity-cost">₹2,450</span>
                            <button className="itin-activity-menu"><MenuDotsIcon /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Activity 3 */}
                    <div className="itin-activity-row">
                      <div className="itin-timeline-marker">
                        <div className="itin-timeline-dot"></div>
                        <div className="itin-timeline-line"></div>
                      </div>
                      <div className="itin-activity-content-wrapper">
                        <div className="itin-activity-time">05:00 PM</div>
                        <div className="itin-activity-content">
                          <img src="https://picsum.photos/92/72?random=6" alt="Activity" className="itin-activity-img" />
                          <div className="itin-activity-details">
                            <div className="itin-activity-name">Paragliding Experience</div>
                            <div className="itin-activity-location"><PinIcon /> Grindelwald, Switzerland</div>
                          </div>
                          <div className="itin-activity-cost-wrapper">
                            <span className="itin-activity-cost">₹2,000</span>
                            <button className="itin-activity-menu"><MenuDotsIcon /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Day 3 (Collapsed) */}
            <div className="itin-day-card">
              <div className="itin-day-sidebar">
                <div className={`itin-day-circle ${collapsedDays[3] ? 'itin-day-circle-collapsed' : ''}`}>3</div>
                <h3 className="itin-day-heading">Day 3</h3>
                <div className="itin-day-date">May 12, Sun</div>
                <div className="itin-day-vibe" style={{ background: '#F5F5F5', color: '#5F5F5F' }}>☁️ Relaxing</div>
              </div>
              <div className="itin-day-right">
                <div className={`itin-day-summary ${collapsedDays[3] ? 'collapsed' : ''}`}>
                  <div className="itin-day-summary-left">
                    <span>🗓 2 Activities</span>
                  </div>
                  <div className="itin-day-summary-right">
                    <span className="itin-day-cost">₹5,600</span>
                    <button className="itin-day-collapse-btn" onClick={() => toggleDay(3)}>
                      {collapsedDays[3] ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    </button>
                  </div>
                </div>
                {!collapsedDays[3] && (
                  <div className="itin-timeline">
                    <div className="itin-activity-row">
                      <div className="itin-timeline-marker">
                        <div className="itin-timeline-dot"></div>
                        <div className="itin-timeline-line"></div>
                      </div>
                      <div className="itin-activity-content-wrapper">
                        <div className="itin-activity-time">10:00 AM</div>
                        <div className="itin-activity-content">
                          <img src="https://picsum.photos/92/72?random=7" alt="Activity" className="itin-activity-img" />
                          <div className="itin-activity-details">
                            <div className="itin-activity-name">Spa Morning</div>
                            <div className="itin-activity-location"><PinIcon /> Hotel Spa, Switzerland</div>
                          </div>
                          <div className="itin-activity-cost-wrapper">
                            <span className="itin-activity-cost">₹4,000</span>
                            <button className="itin-activity-menu"><MenuDotsIcon /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div>
            {/* Budget Overview Card */}
            <div className="itin-sidebar-card">
              <div className="itin-sidebar-header">
                <h3 className="itin-sidebar-title">Budget Overview</h3>
                <span className="itin-sidebar-link">Edit Budget</span>
              </div>
              <div className="itin-budget-label">Total Budget</div>
              <div className="itin-budget-total">₹82,450</div>
              
              <div className="itin-budget-split">
                <div className="itin-budget-split-col">
                  <div className="itin-budget-split-label">Spent So Far</div>
                  <div className="itin-budget-split-val">₹28,450</div>
                </div>
                <div className="itin-budget-split-col right">
                  <div className="itin-budget-split-label">Remaining</div>
                  <div className="itin-budget-split-val">₹54,000</div>
                </div>
              </div>

              <div className="itin-progress-bar-container">
                <div className="itin-progress-bar-track">
                  <div className="itin-progress-bar-fill" style={{ width: '35%' }}></div>
                </div>
                <div className="itin-progress-label">35%</div>
              </div>

              <div className="itin-breakdown-section">
                <h4 className="itin-breakdown-title">Breakdown</h4>
                <div className="itin-breakdown-row">
                  <div className="itin-breakdown-left">
                    <div className="itin-breakdown-dot" style={{ backgroundColor: '#F81927' }}></div>
                    <span className="itin-breakdown-label">Activities</span>
                  </div>
                  <div className="itin-breakdown-val">₹22,700 (48%)</div>
                </div>
                <div className="itin-breakdown-row">
                  <div className="itin-breakdown-left">
                    <div className="itin-breakdown-dot" style={{ backgroundColor: '#F5A623' }}></div>
                    <span className="itin-breakdown-label">Accommodation</span>
                  </div>
                  <div className="itin-breakdown-val">₹28,000 (42%)</div>
                </div>
                <div className="itin-breakdown-row">
                  <div className="itin-breakdown-left">
                    <div className="itin-breakdown-dot" style={{ backgroundColor: '#4CAF50' }}></div>
                    <span className="itin-breakdown-label">Food</span>
                  </div>
                  <div className="itin-breakdown-val">₹15,200 (18%)</div>
                </div>
                <div className="itin-breakdown-row">
                  <div className="itin-breakdown-left">
                    <div className="itin-breakdown-dot" style={{ backgroundColor: '#2196F3' }}></div>
                    <span className="itin-breakdown-label">Transport</span>
                  </div>
                  <div className="itin-breakdown-val">₹6,550 (12%)</div>
                </div>
                <div className="itin-breakdown-row">
                  <div className="itin-breakdown-left">
                    <div className="itin-breakdown-dot" style={{ backgroundColor: '#9C27B0' }}></div>
                    <span className="itin-breakdown-label">Other</span>
                  </div>
                  <div className="itin-breakdown-val">₹10,000 (8%)</div>
                </div>
              </div>

              <div className="itin-pie-chart-container">
                <div className="itin-pie-chart-wrapper">
                  <svg viewBox="0 0 100 100" width="240" height="240" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAEAEA" strokeWidth="16" />
                    
                    {/* Other (8%) - #9C27B0 */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#9C27B0" strokeWidth="16"
                      strokeDasharray="30.1 221.1" strokeDashoffset="0" />
                      
                    {/* Transport (12%) - #2196F3 */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2196F3" strokeWidth="16"
                      strokeDasharray="20 231.2" strokeDashoffset="-30.1" />
                      
                    {/* Food (18%) - #4CAF50 */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4CAF50" strokeWidth="16"
                      strokeDasharray="46.2 205" strokeDashoffset="-50.1" />
                      
                    {/* Accommodation (42%) - #F5A623 */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F5A623" strokeWidth="16"
                      strokeDasharray="85.4 165.8" strokeDashoffset="-96.3" />
                      
                    {/* Activities (48%) - #F81927 */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F81927" strokeWidth="16"
                      strokeDasharray="69.5 181.7" strokeDashoffset="-181.7" />
                  </svg>
                  <div className="itin-pie-center-text">
                    <div className="itin-pie-center-val">₹82,450</div>
                    <div className="itin-pie-center-label">Total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="itin-sidebar-card">
              <h3 className="itin-summary-title">Quick Summary</h3>
              <div className="itin-summary-row">
                <div className="itin-summary-left">
                  <CalendarIcon /> Total Days
                </div>
                <div className="itin-summary-val">7 Days</div>
              </div>
              <div className="itin-summary-row">
                <div className="itin-summary-left">
                  <span>🗓</span> Total Activities
                </div>
                <div className="itin-summary-val">18 Activities</div>
              </div>
              <div className="itin-summary-row">
                <div className="itin-summary-left">
                  <PinIcon /> Places to Visit
                </div>
                <div className="itin-summary-val">6 Places</div>
              </div>
              <div className="itin-summary-row">
                <div className="itin-summary-left">
                  <span>👥</span> Travelers
                </div>
                <div className="itin-summary-val">2 People</div>
              </div>

              <button className="itin-btn-full">
                + Add Activity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="itin-bottom-bar">
        <button className="itin-bottom-btn-back">
          ← Back to Trip
        </button>
        <button className="itin-bottom-btn-secondary">
          <CalendarIcon /> Add Day
        </button>
        <button className="itin-bottom-btn-primary">
          + Add Activity
        </button>
      </div>
    </div>
  );
}

