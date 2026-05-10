'use client'

import React from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import '@/styles/community.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const posts = [
  {
    id: 1,
    user: { name: 'Priya Sharma', handle: '@priyatravels', level: 'Level 5 Explorer', trips: 28, followers: 156, avatar: 'https://i.pravatar.cc/64?img=5' },
    location: 'Switzerland',
    timeAgo: '2 hours ago',
    title: 'Hiking in Swiss Alps – A Dream Come True',
    desc: 'The views from the top were absolutely breathtaking! Here\'s my experience hiking in the Swiss Alps.',
    tags: ['Hiking', 'Mountains', 'Adventure'],
    likes: 124,
    comments: 18,
    img: 'https://picsum.photos/seed/swiss/600/400'
  },
  {
    id: 2,
    user: { name: 'Rahul Mehta', handle: '@rahul_ontrip', level: 'Level 4 Explorer', trips: 22, followers: 98, avatar: 'https://i.pravatar.cc/64?img=11' },
    location: 'Greece',
    timeAgo: '5 hours ago',
    title: 'Sunset in Santorini is Magical',
    desc: 'If you ever visit Santorini, don\'t miss the sunset in Oia. Pure magic and unforgettable views.',
    tags: ['Sunset', 'Greece', 'Photography'],
    likes: 98,
    comments: 12,
    img: 'https://picsum.photos/seed/santorini/600/400'
  },
  {
    id: 3,
    user: { name: 'Ananya Iyer', handle: '@ananya.trips', level: 'Level 3 Explorer', trips: 15, followers: 67, avatar: 'https://i.pravatar.cc/64?img=9' },
    location: 'Bali, Indonesia',
    timeAgo: '1 day ago',
    title: 'Peaceful Morning in Bali',
    desc: 'Started my day with a peaceful temple visit in Bali. The calm and positive energy here is unmatched.',
    tags: ['Bali', 'Temple', 'Culture'],
    likes: 76,
    comments: 9,
    img: 'https://picsum.photos/seed/bali/600/400'
  },
  {
    id: 4,
    user: { name: 'Karan Verma', handle: '@karan.verma', level: 'Level 2 Explorer', trips: 10, followers: 45, avatar: 'https://i.pravatar.cc/64?img=12' },
    location: 'Iceland',
    timeAgo: '2 days ago',
    title: 'Northern Lights – Once in a Lifetime',
    desc: 'Witnessing the Northern Lights in Iceland was a surreal experience. Nature never stops amazing us!',
    tags: ['Iceland', 'Northern Lights', 'Nature'],
    likes: 150,
    comments: 24,
    img: 'https://picsum.photos/seed/iceland/600/400'
  }
]

export default function CommunityPage() {
  return (
    <div className={`comm-root ${sora.className}`}>
      <main className="comm-main">
        {/* Page Header */}
        <div className="comm-header">
          <h1 className="comm-page-title">Community</h1>
          <p className="comm-page-desc">
            Share your travel experiences, get tips from fellow travelers and inspire others in the community.
          </p>
        </div>

        {/* Search Row */}
        <div className="comm-search-row">
          <div className="comm-search-wrap">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8A8A8A" strokeWidth="1.5">
              <circle cx="9" cy="9" r="6"/>
              <line x1="13.5" y1="13.5" x2="18" y2="18"/>
            </svg>
            <input
              type="text"
              className="comm-search-input"
              placeholder="Search experiences, destinations, activities..."
            />
          </div>
          <div className="comm-search-actions">
            <button className="comm-filter-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#111111" strokeWidth="1.5">
                <circle cx="6" cy="6" r="3"/>
                <path d="M2 15 Q2 11 6 11 Q10 11 10 15"/>
                <circle cx="13" cy="6" r="2.5"/>
                <path d="M11 15 Q13 12 16 13"/>
              </svg>
              Group by
            </button>
            <button className="comm-filter-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#111111" strokeWidth="1.5">
                <line x1="3" y1="5" x2="15" y2="5"/>
                <line x1="5" y1="9" x2="13" y2="9"/>
                <line x1="7" y1="13" x2="11" y2="13"/>
              </svg>
              Filter
            </button>
            <button className="comm-filter-btn">
              Sort by: Latest
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#111111" strokeWidth="1.5">
                <path d="M3 4 L6 7 L9 4"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="comm-grid">
          
          {/* Left Column: Feed */}
          <div className="comm-feed">
            {posts.map(post => (
              <div key={post.id} className="comm-feed-card">
                
                {/* User Info */}
                <div className="comm-feed-user">
                  <Image src={post.user.avatar} alt={post.user.name} width={64} height={64} className="comm-avatar" unoptimized />
                  <h3 className="comm-user-name">{post.user.name}</h3>
                  <p className="comm-user-handle">{post.user.handle}</p>
                  <div className="comm-level-badge">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="#F81927" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5"/>
                    </svg>
                    {post.user.level}
                  </div>
                  <div className="comm-user-stats">
                    <div className="comm-user-stat-row">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5F5F5F" strokeWidth="1.5">
                        <rect x="2" y="4" width="10" height="8" rx="1.5"/>
                        <path d="M4 4 V3 C4 1.5 10 1.5 10 3 V4"/>
                      </svg>
                      {post.user.trips} Trips
                    </div>
                    <div className="comm-user-stat-row">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5F5F5F" strokeWidth="1.5">
                        <circle cx="7" cy="5" r="2.5"/>
                        <path d="M2 12 Q2 8 7 8 Q12 8 12 12"/>
                      </svg>
                      {post.user.followers} Followers
                    </div>
                  </div>
                </div>

                {/* Post Body */}
                <div className="comm-feed-body">
                  <div className="comm-feed-img-wrap">
                    <Image src={post.img} alt={post.title} fill className="comm-feed-img" unoptimized />
                  </div>
                  <div className="comm-feed-content">
                    <div className="comm-post-meta">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#8A8A8A" strokeWidth="1.5">
                        <circle cx="7" cy="5.5" r="2.5"/>
                        <path d="M7 1 C4 1 1.5 3.5 1.5 5.5 C1.5 9 7 13 7 13 C7 13 12.5 9 12.5 5.5 C12.5 3.5 10 1 7 1Z"/>
                      </svg>
                      {post.location}
                      <span style={{margin: '0 4px'}}>·</span>
                      {post.timeAgo}
                    </div>
                    <button className="comm-post-menu">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8A8A" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="8" r="1.5"/>
                        <circle cx="8" cy="8" r="1.5"/>
                        <circle cx="12.5" cy="8" r="1.5"/>
                      </svg>
                    </button>
                    <h2 className="comm-post-title">{post.title}</h2>
                    <p className="comm-post-desc">{post.desc}</p>
                    <div className="comm-post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="comm-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="comm-post-interactions">
                      <div className="comm-interact-item">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="#F81927" stroke="#F81927" strokeWidth="1.5">
                          <path d="M9 15.5 C9 15.5 2 11 2 6 C2 3.5 4.5 2 6.5 2 C7.8 2 8.8 2.8 9 3.5 C9.2 2.8 10.2 2 11.5 2 C13.5 2 16 3.5 16 6 C16 11 9 15.5 9 15.5Z"/>
                        </svg>
                        {post.likes}
                      </div>
                      <div className="comm-interact-item">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#111111" strokeWidth="1.5">
                          <path d="M3 9 C3 4.5 5.5 3 9 3 C12.5 3 15 4.5 15 9 C15 13.5 12.5 15 9 15 C8 15 6 16 4 16 C4.5 14.5 3 12 3 9Z"/>
                        </svg>
                        {post.comments}
                      </div>
                      <div className="comm-interact-item" style={{marginLeft: '4px'}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111111" strokeWidth="1.5">
                          <path d="M3 2 L13 2 L13 14 L8 11 L3 14 Z"/>
                        </svg>
                      </div>
                      <a href="#" className="comm-read-more">
                        Read more
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="2" y1="7" x2="12" y2="7"/>
                          <path d="M8 3 L12 7 L8 11"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Pagination */}
            <div className="comm-pagination">
              <button className="comm-page-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#111111" strokeWidth="1.5">
                  <path d="M9 3 L5 7 L9 11"/>
                </svg>
              </button>
              <button className="comm-page-btn comm-page-btn--active">1</button>
              <button className="comm-page-btn">2</button>
              <button className="comm-page-btn">3</button>
              <button className="comm-page-btn">4</button>
              <button className="comm-page-btn">5</button>
              <button className="comm-page-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#111111" strokeWidth="1.5">
                  <path d="M5 3 L9 7 L5 11"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="comm-sidebar">
            
            {/* About Community Card */}
            <div className="comm-sidebar-card">
              <h2 className="comm-sidebar-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F81927" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                About Community
              </h2>
              <p className="comm-about-desc">
                A place for travelers to share experiences, tips, photos and stories from around the world.
              </p>
              <div className="comm-stats-list">
                <div className="comm-stat-row">
                  <div className="comm-stat-icon-wrap">👤</div>
                  <div className="comm-stat-info">
                    <span className="comm-stat-num">1,245,678</span>
                    <span className="comm-stat-label">Active Travelers</span>
                  </div>
                </div>
                <div className="comm-stat-row">
                  <div className="comm-stat-icon-wrap">📖</div>
                  <div className="comm-stat-info">
                    <span className="comm-stat-num">12,458</span>
                    <span className="comm-stat-label">Stories Shared</span>
                  </div>
                </div>
                <div className="comm-stat-row">
                  <div className="comm-stat-icon-wrap">📷</div>
                  <div className="comm-stat-info">
                    <span className="comm-stat-num">98,765</span>
                    <span className="comm-stat-label">Photos Shared</span>
                  </div>
                </div>
                <div className="comm-stat-row">
                  <div className="comm-stat-icon-wrap">🗺️</div>
                  <div className="comm-stat-info">
                    <span className="comm-stat-num">45,321</span>
                    <span className="comm-stat-label">Destinations Discussed</span>
                  </div>
                </div>
              </div>
              <button className="comm-share-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <line x1="9" y1="3" x2="9" y2="15"/>
                  <line x1="3" y1="9" x2="15" y2="9"/>
                </svg>
                Share Your Experience
              </button>
            </div>

            {/* Trending Topics Card */}
            <div className="comm-sidebar-card">
              <h2 className="comm-sidebar-title">
                🔥 Trending Topics
              </h2>
              <div className="comm-trending-list">
                <div className="comm-trending-item">
                  <span className="comm-trending-name"># Switzerland</span>
                  <span className="comm-trending-count">1.2K posts</span>
                </div>
                <div className="comm-trending-item">
                  <span className="comm-trending-name"># Bali</span>
                  <span className="comm-trending-count">982 posts</span>
                </div>
                <div className="comm-trending-item">
                  <span className="comm-trending-name"># Europe</span>
                  <span className="comm-trending-count">875 posts</span>
                </div>
                <div className="comm-trending-item">
                  <span className="comm-trending-name"># Adventure</span>
                  <span className="comm-trending-count">643 posts</span>
                </div>
                <div className="comm-trending-item">
                  <span className="comm-trending-name"># SoloTravel</span>
                  <span className="comm-trending-count">532 posts</span>
                </div>
              </div>
              <a href="#" className="comm-view-all">
                View all topics
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="2" y1="7" x2="12" y2="7"/>
                  <path d="M8 3 L12 7 L8 11"/>
                </svg>
              </a>
            </div>

            {/* Top Contributors Card */}
            <div className="comm-sidebar-card">
              <h2 className="comm-sidebar-title">
                ⭐ Top Contributors
              </h2>
              <div className="comm-contributors-list">
                <div className="comm-contributor-item">
                  <Image src="https://i.pravatar.cc/64?img=5" alt="Priya" width={52} height={52} className="comm-contributor-avatar" unoptimized />
                  <div className="comm-contributor-info">
                    <div className="comm-contributor-name-row">
                      <h4 className="comm-contributor-name">Priya Sharma</h4>
                      <span className="comm-contributor-level">Level 5</span>
                    </div>
                    <p className="comm-contributor-handle">@priyatravels</p>
                  </div>
                  <div className="comm-contributor-points">
                    🏅 12,450
                  </div>
                </div>
                <div className="comm-contributor-item">
                  <Image src="https://i.pravatar.cc/64?img=11" alt="Rahul" width={52} height={52} className="comm-contributor-avatar" unoptimized />
                  <div className="comm-contributor-info">
                    <div className="comm-contributor-name-row">
                      <h4 className="comm-contributor-name">Rahul Mehta</h4>
                      <span className="comm-contributor-level">Level 4</span>
                    </div>
                    <p className="comm-contributor-handle">@rahul_ontrip</p>
                  </div>
                  <div className="comm-contributor-points">
                    🏅 8,230
                  </div>
                </div>
                <div className="comm-contributor-item">
                  <Image src="https://i.pravatar.cc/64?img=9" alt="Ananya" width={52} height={52} className="comm-contributor-avatar" unoptimized />
                  <div className="comm-contributor-info">
                    <div className="comm-contributor-name-row">
                      <h4 className="comm-contributor-name">Ananya Iyer</h4>
                      <span className="comm-contributor-level">Level 3</span>
                    </div>
                    <p className="comm-contributor-handle">@ananya.trips</p>
                  </div>
                  <div className="comm-contributor-points">
                    🏅 6,780
                  </div>
                </div>
              </div>
              <a href="#" className="comm-view-all">
                See all contributors
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="2" y1="7" x2="12" y2="7"/>
                  <path d="M8 3 L12 7 L8 11"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
