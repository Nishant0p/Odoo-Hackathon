
"use client";

import React, { useState } from 'react';
import '@/styles/checklist.css';

// SVG Icons
const LuggageIcon = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="8" width="16" height="12" rx="2" ry="2"></rect><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M8 20v2"></path><path d="M16 20v2"></path><path d="M12 8v12"></path>
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

const ChevronDownIcon = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const ResetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline>
  </svg>
);

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
  </svg>
);

const CheckboxIcon = ({ checked }) => {
  if (checked) {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    );
  }
  return null;
};

const LightbulbIcon = ({ style }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
  </svg>
);

const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const PlugIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
  </svg>
);

export default function ChecklistPage() {
  const [checklist, setChecklist] = useState({
    documents: {
      title: "Documents",
      icon: "📄",
      class: "documents",
      collapsed: false,
      items: [
        { id: "d1", label: "Passport", checked: true },
        { id: "d2", label: "Flight Tickets (printed)", checked: true },
        { id: "d3", label: "Travel Insurance", checked: true },
        { id: "d4", label: "Hotel Booking Confirmation", checked: false },
      ]
    },
    clothing: {
      title: "Clothing",
      icon: "👕",
      class: "clothing",
      collapsed: false,
      items: [
        { id: "c1", label: "Casual Shirts", checked: true },
        { id: "c2", label: "Trousers / Jeans", checked: false },
        { id: "c3", label: "Comfortable Walking Shoes", checked: false },
        { id: "c4", label: "Light Jacket / Windbreaker", checked: false },
      ]
    },
    electronics: {
      title: "Electronics",
      icon: "🔌",
      class: "electronics",
      collapsed: false,
      items: [
        { id: "e1", label: "Phone Charger", checked: true },
        { id: "e2", label: "Universal Power Adapter", checked: false },
        { id: "e3", label: "Earphones / Headphones", checked: false },
      ]
    }
  });

  const toggleItem = (categoryId, itemId) => {
    setChecklist(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        items: prev[categoryId].items.map(item => 
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      }
    }));
  };

  const toggleCategory = (categoryId) => {
    setChecklist(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        collapsed: !prev[categoryId].collapsed
      }
    }));
  };

  const resetAll = () => {
    setChecklist(prev => {
      const newState = { ...prev };
      Object.keys(newState).forEach(key => {
        newState[key].items = newState[key].items.map(item => ({ ...item, checked: false }));
      });
      return newState;
    });
  };

  // Calculations
  let totalItems = 0;
  let packedItems = 0;

  Object.values(checklist).forEach(category => {
    totalItems += category.items.length;
    packedItems += category.items.filter(item => item.checked).length;
  });

  const remainingItems = totalItems - packedItems;
  const progressPercentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  // Circular progress math
  const r = 54;
  const circumference = 2 * Math.PI * r;
  const dashoffset = circumference * (1 - (progressPercentage / 100));

  return (
    <div className="chk-page">
      <div className="chk-container">
        
        {/* Page Header */}
        <div className="chk-page-header">
          <div className="chk-title-row">
            <LuggageIcon className="chk-title-icon" style={{ width: '36px', height: '36px' }} />
            <h1 className="chk-title">Packing Checklist</h1>
          </div>
          <p className="chk-subtitle">Stay organized and never forget an essential item for your trip.</p>
        </div>

        {/* Search + Filter Bar */}
        <div className="chk-search-bar">
          <div className="chk-search-input-wrapper">
            <input type="text" className="chk-search-input" placeholder="Search items in checklist..." />
            <SearchIcon className="chk-search-icon" />
          </div>
          <button className="chk-filter-btn">
            <GroupIcon /> Group by
          </button>
          <button className="chk-filter-btn">
            <FilterIcon /> Filter
          </button>
          <button className="chk-filter-btn">
            ↑↓ Sort by <ChevronDownIcon />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="chk-content-grid">
          
          {/* LEFT COLUMN */}
          <div>
            {/* Trip Selection Card */}
            <div className="chk-trip-card">
              <div className="chk-trip-left">
                <img src="https://picsum.photos/88/88?random=10" alt="Trip" className="chk-trip-img" />
                <div className="chk-trip-info">
                  <div className="chk-trip-title-row">
                    Trip: Paris & Rome Adventure
                    <ChevronDownIcon className="chk-trip-title-icon" />
                  </div>
                  <div className="chk-trip-meta">
                    May 10 – May 24, 2024 • 14 Days
                  </div>
                </div>
              </div>
              <button className="chk-btn-view-trip">
                View Trip <ExternalLinkIcon />
              </button>
            </div>

            {/* Progress Section */}
            <div className="chk-progress-section">
              <div className="chk-progress-label-row">
                <span className="chk-progress-label-left">Progress:</span>
                <span className="chk-progress-label-mid">{packedItems}/{totalItems} items packed</span>
                <span className="chk-progress-label-right">{progressPercentage}%</span>
              </div>
              <div className="chk-progress-bar-track">
                <div className="chk-progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>

            {/* Categories */}
            {Object.entries(checklist).map(([catId, category]) => {
              const packedCat = category.items.filter(i => i.checked).length;
              const totalCat = category.items.length;
              return (
                <div key={catId} className="chk-category-card">
                  <div className="chk-category-header" onClick={() => toggleCategory(catId)}>
                    <div className="chk-category-header-left">
                      <div className={`chk-category-icon-container ${category.class}`}>
                        {category.icon}
                      </div>
                      <h3 className="chk-category-title">{category.title}</h3>
                    </div>
                    <div className="chk-category-header-right">
                      <div className="chk-category-badge">{packedCat}/{totalCat}</div>
                      <div className="chk-category-chevron">
                        {category.collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
                      </div>
                    </div>
                  </div>
                  {!category.collapsed && (
                    <div className="chk-checklist-items">
                      {category.items.map(item => (
                        <div key={item.id} className="chk-item-row" onClick={() => toggleItem(catId, item.id)}>
                          <div className={`chk-checkbox ${item.checked ? 'checked' : 'unchecked'}`}>
                            <CheckboxIcon checked={item.checked} />
                          </div>
                          <span className={`chk-item-label ${item.checked ? 'checked' : ''}`}>
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Action Buttons */}
            <div className="chk-bottom-actions">
              <button className="chk-btn-primary-large">
                + Add Item to Checklist
              </button>
              <button className="chk-btn-secondary-large" onClick={resetAll}>
                <ResetIcon /> Reset All
              </button>
              <button className="chk-btn-secondary-large">
                <ShareIcon /> Share Checklist
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Summary Card */}
            <div className="chk-sidebar-card">
              <div className="chk-sidebar-header">
                <LuggageIcon className="chk-sidebar-header-icon" />
                Checklist Summary
              </div>
              
              <div className="chk-circular-progress">
                <svg width="140" height="140" className="chk-circular-progress-svg">
                  <circle cx="70" cy="70" r="54" fill="transparent" stroke="#EAEAEA" strokeWidth="12" />
                  <circle 
                    cx="70" cy="70" r="54" 
                    fill="transparent" 
                    stroke="#F81927" 
                    strokeWidth="12" 
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashoffset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  />
                </svg>
                <div className="chk-circular-progress-text">{progressPercentage}%</div>
              </div>

              <div className="chk-summary-text-center">
                <div className="chk-summary-packed">{packedItems} of {totalItems}</div>
                <div className="chk-summary-packed-label">items packed</div>
                <div className="chk-summary-remaining">{remainingItems} items remaining</div>
              </div>

              <div className="chk-summary-rows">
                <div className="chk-summary-row">
                  <div className="chk-summary-row-left">
                    <span>✅</span> Packed Items
                  </div>
                  <div className="chk-summary-row-val">{packedItems}</div>
                </div>
                <div className="chk-summary-row">
                  <div className="chk-summary-row-left">
                    <span>☐</span> Remaining Items
                  </div>
                  <div className="chk-summary-row-val">{remainingItems}</div>
                </div>
                <div className="chk-summary-row">
                  <div className="chk-summary-row-left">
                    <span>≡</span> Total Items
                  </div>
                  <div className="chk-summary-row-val">{totalItems}</div>
                </div>
              </div>
            </div>

            {/* Travel Smart Tips */}
            <div className="chk-sidebar-card">
              <div className="chk-sidebar-header">
                <LightbulbIcon style={{ color: '#F5A623' }} />
                Travel Smart Tips
              </div>
              <div style={{ marginTop: '16px' }}>
                <div className="chk-tip-row">
                  <div className="chk-tip-icon-container">
                    <LuggageIcon />
                  </div>
                  <div className="chk-tip-content">
                    <div className="chk-tip-title">Roll your clothes</div>
                    <div className="chk-tip-desc">Rolling saves space and reduces wrinkles.</div>
                  </div>
                </div>
                <div className="chk-tip-row">
                  <div className="chk-tip-icon-container">
                    <DocumentIcon />
                  </div>
                  <div className="chk-tip-content">
                    <div className="chk-tip-title">Make digital copies</div>
                    <div className="chk-tip-desc">Keep digital copies of important documents.</div>
                  </div>
                </div>
                <div className="chk-tip-row">
                  <div className="chk-tip-icon-container">
                    <PlugIcon />
                  </div>
                  <div className="chk-tip-content">
                    <div className="chk-tip-title">Don't forget adapters</div>
                    <div className="chk-tip-desc">Check the power plug type at your destination.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Promotional Card */}
            <div className="chk-sidebar-card-nopad">
              <img src="https://picsum.photos/400/220?random=20" alt="Promo" className="chk-promo-img" />
              <div className="chk-promo-content">
                <div className="chk-promo-title">Pack Like a Pro</div>
                <div className="chk-promo-desc">Create and manage multiple checklists for different trips and never miss essentials again.</div>
                <button className="chk-btn-promo">
                  Learn More <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

