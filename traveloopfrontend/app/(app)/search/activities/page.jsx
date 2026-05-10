
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import '../../../../styles/activities.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const activities = [
  {
    id: 1,
    tag: 'Adventure',
    isPopular: true,
    name: 'Hot Air Balloon Ride',
    location: 'Cappadocia, Turkey',
    rating: 4.9,
    reviews: 128,
    price: '₹12,450',
    priceLabel: 'per person',
    description: 'Experience breathtaking views of Cappadocia\'s unique landscape from above.',
    duration: '3-4 hours',
    groupType: 'Small Group',
    img: '', // placeholder
  },
  {
    id: 2,
    tag: 'Water Activity',
    isPopular: false,
    name: 'Snorkeling Adventure',
    location: 'Maldives',
    rating: 4.8,
    reviews: 96,
    price: '₹5,250',
    priceLabel: 'per person',
    description: 'Explore vibrant coral reefs and marine life in crystal clear waters.',
    duration: '2-3 hours',
    groupType: 'Small Group',
    img: '',
  },
  {
    id: 3,
    tag: 'Cultural',
    isPopular: false,
    name: 'Colosseum Guided Tour',
    location: 'Rome, Italy',
    rating: 4.7,
    reviews: 211,
    price: '₹3,850',
    priceLabel: 'per person',
    description: 'Step back in time and explore the iconic Colosseum with expert guide.',
    duration: '2 hours',
    groupType: 'Guided Tour',
    img: '',
  },
  {
    id: 4,
    tag: 'Adventure',
    isPopular: false,
    name: 'Hiking in Swiss Alps',
    location: 'Interlaken, Switzerland',
    rating: 4.9,
    reviews: 156,
    price: '₹8,750',
    priceLabel: 'per person',
    description: 'Scenic hiking trails with stunning views of the Swiss Alps.',
    duration: '6-8 hours',
    groupType: 'Small Group',
    img: '',
  },
  {
    id: 5,
    tag: 'Safari',
    isPopular: false,
    name: 'Desert Safari Experience',
    location: 'Dubai, UAE',
    rating: 4.6,
    reviews: 113,
    price: '₹6,980',
    priceLabel: 'per person',
    description: 'Thrilling adventure with dune bashing and cultural show.',
    duration: '6 hours',
    groupType: 'Small Group',
    img: '',
  },
]

const categories = [
  { label: 'Adventure', count: 42 },
  { label: 'Water Activity', count: 28 },
  { label: 'Cultural', count: 36 },
  { label: 'Food & Drink', count: 18 },
  { label: 'Entertainment', count: 12 },
  { label: 'Safari', count: 15 },
]

const durations = [
  { label: '1-2 hours', count: 24 },
  { label: '2-4 hours', count: 45 },
  { label: '4-6 hours', count: 32 },
  { label: '6+ hours', count: 27 },
]

const ratings = [
  { label: '5.0', count: 68 },
  { label: '4.0 & above', count: 112 },
  { label: '3.0 & above', count: 120 },
  { label: '2.0 & above', count: 125 },
]

const groupTypes = [
  { label: 'Small Group', count: 89 },
  { label: 'Private Tour', count: 26 },
  { label: 'Shared Tour', count: 67 },
]

const getCategoryClass = (tag) => {
  const map = {
    'Adventure': 'activities-category-tag activities-category-tag--adventure',
    'Water Activity': 'activities-category-tag activities-category-tag--water',
    'Cultural': 'activities-category-tag activities-category-tag--cultural',
    'Food & Drink': 'activities-category-tag activities-category-tag--food',
    'Entertainment': 'activities-category-tag activities-category-tag--entertainment',
    'Safari': 'activities-category-tag activities-category-tag--safari',
  }
  return map[tag] || 'activities-category-tag'
}

const renderStars = (rating) => {
  return [1,2,3,4,5].map(i => (
    <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill={i <= Math.round(rating) ? '#F59E0B' : '#E5E7EB'}>
      <polygon points="6.5,1 8,5 12,5 8.5,7.5 10,12 6.5,9.5 3,12 4.5,7.5 1,5 5,5" />
    </svg>
  ))
}

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterSearch, setFilterSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(['Adventure'])
  const [selectedDuration, setSelectedDuration] = useState(['2-4 hours'])
  const [selectedRating, setSelectedRating] = useState(['4.0 & above'])
  const [selectedGroupType, setSelectedGroupType] = useState(['Small Group'])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(90000)
  const [currentPage, setCurrentPage] = useState(1)
  const [wishlist, setWishlist] = useState([])
  const toggleWishlist = (id) =>
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  return (
    <div className={`activities-root ${sora.className}`}>

      {/* 2. MAIN TWO-COLUMN LAYOUT */}
      <div className="activities-main">

        {/* LEFT COLUMN */}
        <div className="activities-left">

          {/* Breadcrumb */}
          <div className="activities-breadcrumb">
            <a href="#" className="activities-breadcrumb-home">Home</a>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8A8A8A" strokeWidth="1.5">
              <path d="M4 3 L8 6 L4 9"/>
            </svg>
            <span className="activities-breadcrumb-current">Activities</span>
          </div>

          {/* Page Header */}
          <h1 className="activities-page-title">Discover Activities</h1>
          <p className="activities-page-desc">
            Find and book amazing activities and experiences at your destination.
          </p>

          {/* Search + Filter row */}
          <div className="activities-search-row">
            <div className="activities-search-wrap">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8A8A8A" strokeWidth="1.5">
                <circle cx="7" cy="7" r="5"/>
                <line x1="11" y1="11" x2="15" y2="15"/>
              </svg>
              <input
                className="activities-search-input"
                placeholder="Search activities, attractions, or experiences..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="activities-filter-btn">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <circle cx="5.5" cy="5" r="2.5"/>
                <path d="M1 13 Q1 10 5.5 10 Q10 10 10 13"/>
                <circle cx="11" cy="5" r="2"/>
                <path d="M9 13 Q11 10.5 14 11.5"/>
              </svg>
              Group by
            </button>
            <button className="activities-filter-btn">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <line x1="2" y1="4" x2="13" y2="4"/>
                <line x1="4" y1="8" x2="11" y2="8"/>
                <line x1="6" y1="12" x2="9" y2="12"/>
              </svg>
              Filter
            </button>
            <button className="activities-filter-btn">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <line x1="2" y1="4" x2="13" y2="4"/>
                <line x1="4" y1="8" x2="13" y2="8"/>
                <line x1="6" y1="12" x2="13" y2="12"/>
              </svg>
              Sort by
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5" style={{marginLeft: '4px'}}>
                <path d="M2 3 L5 7 L8 3"/>
              </svg>
            </button>
          </div>

          {/* Results count */}
          <p className="activities-results-count">
            <span>128 activities</span> found
          </p>

          {/* Activity Cards */}
          <div className="activities-cards-list">
            {activities.map(activity => (
              <div key={activity.id} className="activities-card">

                {/* Image */}
                <div className="activities-card-img-wrap">
                  {activity.img ? (
                    <Image src={activity.img} alt={activity.name} fill className="activities-card-img" />
                  ) : (
                    <div className="activities-card-img-placeholder">{activity.name}</div>
                  )}
                  {activity.isPopular && (
                    <div className="activities-popular-tag">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1 C5 1 7 3 6 5 C8 4 8 7 6 8 C7 9 5 9 4 8 C2 7 2 4 4 5 C3 3 5 1 5 1Z"/>
                      </svg>
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="activities-card-content">

                  {/* Wishlist */}
                  <button
                    className={`activities-wishlist-btn ${wishlist.includes(activity.id) ? 'activities-wishlist-btn--active' : ''}`}
                    onClick={() => toggleWishlist(activity.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill={wishlist.includes(activity.id) ? '#F81927' : 'none'} xmlns="http://www.w3.org/2000/svg" stroke="#F81927" strokeWidth="1.5">
                      <path d="M8 14 C8 14 2 10 2 6 C2 4 4 2 6 2 C7 2 8 3 8 3 C8 3 9 2 10 2 C12 2 14 4 14 6 C14 10 8 14 8 14Z"/>
                    </svg>
                  </button>

                  {/* Category tag */}
                  <span className={getCategoryClass(activity.tag)}>
                    {activity.tag}
                  </span>

                  {/* Name */}
                  <h3 className="activities-card-name">{activity.name}</h3>

                  {/* Location */}
                  <div className="activities-card-location">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5F5F5F" strokeWidth="1.5">
                      <circle cx="6.5" cy="5" r="2"/>
                      <path d="M6.5 1 C4 1 2 3 2 5 C2 8 6.5 12 6.5 12 C6.5 12 11 8 11 5 C11 3 9 1 6.5 1Z"/>
                    </svg>
                    <span>{activity.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="activities-card-rating">
                    <div className="activities-rating-stars">
                      {renderStars(activity.rating)}
                    </div>
                    <span>{activity.rating}</span>
                    <span className="activities-card-rating-count">
                      ({activity.reviews})
                    </span>
                  </div>

                  {/* Description */}
                  <p className="activities-card-desc">{activity.description}</p>

                  {/* Footer: meta + price + CTA */}
                  <div className="activities-card-footer">
                    <div className="activities-card-meta">
                      <div className="activities-card-meta-item">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5F5F5F" strokeWidth="1.5">
                          <circle cx="6.5" cy="6.5" r="5.5"/>
                          <line x1="6.5" y1="3.5" x2="6.5" y2="6.5"/>
                          <line x1="6.5" y1="6.5" x2="9" y2="8"/>
                        </svg>
                        <span>{activity.duration}</span>
                      </div>
                      <div className="activities-card-meta-item">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5F5F5F" strokeWidth="1.5">
                          <circle cx="5" cy="4.5" r="2"/>
                          <path d="M1 11 Q1 8 5 8 Q9 8 9 11"/>
                          <circle cx="9.5" cy="4.5" r="1.5"/>
                          <path d="M8 11 Q9 9 12 10"/>
                        </svg>
                        <span>{activity.groupType}</span>
                      </div>
                    </div>
                    <div className="activities-card-price-cta">
                      <div className="activities-card-price-wrap">
                        <div className="activities-card-price">{activity.price}</div>
                        <div className="activities-card-price-label">{activity.priceLabel}</div>
                      </div>
                      <button className="activities-card-cta">
                        View Details
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2">
                          <line x1="2" y1="7" x2="12" y2="7"/>
                          <path d="M8 3 L12 7 L8 11"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="activities-pagination">
            <button className="activities-page-btn activities-page-btn--nav">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <path d="M9 3 L5 7 L9 11"/>
              </svg>
            </button>
            {[1,2,3,4,5].map(page => (
              <button
                key={page}
                className={`activities-page-btn ${currentPage === page ? 'activities-page-btn--active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="activities-page-btn activities-page-btn--nav">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <path d="M5 3 L9 7 L5 11"/>
              </svg>
            </button>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="activities-sidebar">

          {/* Sidebar header */}
          <div className="activities-sidebar-header">
            <h3 className="activities-sidebar-title">Filter Activities</h3>
            <button className="activities-reset-btn">
              Reset All
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F81927" strokeWidth="1.5">
                <path d="M11 4 A5 5 0 1 0 12 7"/>
                <path d="M11 2 L11 5 L14 5"/>
              </svg>
            </button>
          </div>

          {/* Sidebar search */}
          <div className="activities-sidebar-search">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8A8A8A" strokeWidth="1.5">
              <circle cx="6" cy="6" r="4"/>
              <line x1="9.5" y1="9.5" x2="13" y2="13"/>
            </svg>
            <input
              className="activities-sidebar-search-input"
              placeholder="Search in filters..."
              value={filterSearch}
              onChange={e => setFilterSearch(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="activities-filter-section">
            <div className="activities-filter-section-header">
              <h4 className="activities-filter-section-title">Categories</h4>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <path d="M3 9 L7 5 L11 9"/>
              </svg>
            </div>
            {categories.map(cat => (
              <div
                key={cat.label}
                className="activities-filter-item"
                onClick={() => setSelectedCategories(prev =>
                  prev.includes(cat.label)
                    ? prev.filter(x => x !== cat.label)
                    : [...prev, cat.label]
                )}
              >
                <div className="activities-filter-item-left">
                  <div className={`activities-checkbox ${selectedCategories.includes(cat.label) ? 'activities-checkbox--active' : ''}`}>
                    {selectedCategories.includes(cat.label) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2">
                        <path d="M2 5 L4 8 L8 2"/>
                      </svg>
                    )}
                  </div>
                  <span className="activities-filter-label">{cat.label}</span>
                </div>
                <span className="activities-filter-count">{cat.count}</span>
              </div>
            ))}
          </div>

          {/* Price Range */}
          <div className="activities-filter-section">
            <div className="activities-filter-section-header">
              <h4 className="activities-filter-section-title">Price Range</h4>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <path d="M3 9 L7 5 L11 9"/>
              </svg>
            </div>
            <div className="activities-price-row">
              <span style={{fontSize:'12px',color:'#8A8A8A'}}>₹0</span>
              <div className="activities-price-track" style={{ position: 'relative' }}>
                <div className="activities-price-fill" style={{ right: `${100 - (Math.min(Number(maxPrice) || 0, 90000) / 90000 * 100)}%` }} />
                <div className="activities-price-thumb" style={{ left: `${Math.min(Number(maxPrice) || 0, 90000) / 90000 * 100}%`, right: 'auto', transform: 'translate(-50%, -50%)' }} />
                <input
                  type="range"
                  min="0"
                  max="90000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: 0,
                    width: '100%',
                    height: '24px',
                    opacity: 0,
                    cursor: 'pointer',
                    margin: 0,
                    zIndex: 10
                  }}
                />
              </div>
              <span style={{fontSize:'12px',color:'#8A8A8A'}}>₹90,000+</span>
            </div>
            <div className="activities-price-inputs">
              <div className="activities-price-input-wrap">
                <span className="activities-price-input-label">Min Price</span>
                <input
                  className="activities-price-input"
                  placeholder="₹ 0"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                />
              </div>
              <div className="activities-price-input-wrap">
                <span className="activities-price-input-label">Max Price</span>
                <input
                  className="activities-price-input"
                  placeholder="₹ 90,000+"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="activities-filter-section">
            <div className="activities-filter-section-header">
              <h4 className="activities-filter-section-title">Duration</h4>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <path d="M3 9 L7 5 L11 9"/>
              </svg>
            </div>
            {durations.map(d => (
              <div
                key={d.label}
                className="activities-filter-item"
                onClick={() => setSelectedDuration(prev =>
                  prev.includes(d.label)
                    ? prev.filter(x => x !== d.label)
                    : [...prev, d.label]
                )}
              >
                <div className="activities-filter-item-left">
                  <div className={`activities-checkbox ${selectedDuration.includes(d.label) ? 'activities-checkbox--active' : ''}`}>
                    {selectedDuration.includes(d.label) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2">
                        <path d="M2 5 L4 8 L8 2"/>
                      </svg>
                    )}
                  </div>
                  <span className="activities-filter-label">{d.label}</span>
                </div>
                <span className="activities-filter-count">{d.count}</span>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="activities-filter-section">
            <div className="activities-filter-section-header">
              <h4 className="activities-filter-section-title">Rating</h4>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <path d="M3 9 L7 5 L11 9"/>
              </svg>
            </div>
            {ratings.map(r => (
              <div
                key={r.label}
                className="activities-filter-item"
                onClick={() => setSelectedRating(prev =>
                  prev.includes(r.label)
                    ? prev.filter(x => x !== r.label)
                    : [...prev, r.label]
                )}
              >
                <div className="activities-filter-item-left">
                  <div className={`activities-checkbox ${selectedRating.includes(r.label) ? 'activities-checkbox--active' : ''}`}>
                    {selectedRating.includes(r.label) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2">
                        <path d="M2 5 L4 8 L8 2"/>
                      </svg>
                    )}
                  </div>
                  <div className="activities-rating-stars">
                    {renderStars(parseFloat(r.label))}
                  </div>
                  <span className="activities-filter-label">{r.label}</span>
                </div>
                <span className="activities-filter-count">{r.count}</span>
              </div>
            ))}
          </div>

          {/* Group Type */}
          <div className="activities-filter-section">
            <div className="activities-filter-section-header">
              <h4 className="activities-filter-section-title">Group Type</h4>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#111111" strokeWidth="1.5">
                <path d="M3 9 L7 5 L11 9"/>
              </svg>
            </div>
            {groupTypes.map(g => (
              <div
                key={g.label}
                className="activities-filter-item"
                onClick={() => setSelectedGroupType(prev =>
                  prev.includes(g.label)
                    ? prev.filter(x => x !== g.label)
                    : [...prev, g.label]
                )}
              >
                <div className="activities-filter-item-left">
                  <div className={`activities-checkbox ${selectedGroupType.includes(g.label) ? 'activities-checkbox--active' : ''}`}>
                    {selectedGroupType.includes(g.label) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="2">
                        <path d="M2 5 L4 8 L8 2"/>
                      </svg>
                    )}
                  </div>
                  <span className="activities-filter-label">{g.label}</span>
                </div>
                <span className="activities-filter-count">{g.count}</span>
              </div>
            ))}
          </div>

          {/* Clear All Filters */}
          <button className="activities-clear-btn">
            Clear All Filters
          </button>

        </div>
      </div>

    </div>
  )
}

