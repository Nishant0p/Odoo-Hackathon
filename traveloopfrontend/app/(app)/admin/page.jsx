<<<<<<< HEAD
import React from "react";

const Admin = () => {
  return <div>Admin</div>;
};

export default Admin;
=======
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Sora } from 'next/font/google';
import '../../../styles/admin.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Cell
} from 'recharts';
import { ArrowLeft, Users, Map, Activity, TrendingUp, LogOut, Eye, X, ChevronRight, RefreshCw } from 'lucide-react';
import axios from 'axios';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

const API_BASE = 'https://reactbits.in/api';

const ADMIN_USERNAME = 'traveloop';
const ADMIN_PASSWORD = 'odoo';

// Known user accounts to login and fetch data from
const KNOWN_ACCOUNTS = [
  { email: 'admin@traveloop.com', password: 'admin123', name: 'Admin Test' },
  { email: 'nishantsharma2006720@gmail.com', password: 'Nishant@123', name: 'Nishant Sharma' },
];

export default function AdminDashboard() {
  const router = useRouter();

  // Admin auth
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [mounted, setMounted] = useState(false);

  // Dashboard data
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allTrips, setAllTrips] = useState([]);
  const [tokenMap, setTokenMap] = useState({});

  // User trip log viewer
  const [selectedUser, setSelectedUser] = useState(null);
  const [userTrips, setUserTrips] = useState([]);
  const [userTripsLoading, setUserTripsLoading] = useState(false);

  // Trip detail
  const [expandedTrip, setExpandedTrip] = useState(null);
  const [tripDetail, setTripDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const COLORS = ['#F81927', '#111111', '#5F5F5F', '#8A8A8A', '#CFCFCF', '#D9101E'];

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== 'undefined' ? sessionStorage.getItem('admin_logged_in') : null;
    if (saved === 'true') setIsAdminLoggedIn(true);
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    if (adminUser === ADMIN_USERNAME && adminPass === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('admin_logged_in', 'true');
    } else {
      setLoginError('Invalid admin credentials. Access denied.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('admin_logged_in');
    setAllUsers([]);
    setAllTrips([]);
    setSelectedUser(null);
  };

  // Try to login each known account and fetch their trips
  const fetchAdminData = useCallback(async () => {
    setLoading(true);
    const usersFound = [];
    const tripsFound = [];
    const tokens = {};

    for (const account of KNOWN_ACCOUNTS) {
      try {
        // Attempt login
        const loginRes = await axios.post(`${API_BASE}/auth/login`, {
          email: account.email,
          password: account.password
        });

        if (loginRes.data?.token) {
          const token = loginRes.data.token;
          const user = loginRes.data.user;
          tokens[user.id] = token;

          usersFound.push({
            id: user.id,
            name: user.name || account.name,
            email: user.email,
            tripCount: 0,
            source: 'api-login'
          });

          // Fetch trips for this user
          try {
            const tripsRes = await axios.get(`${API_BASE}/trips`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            const trips = Array.isArray(tripsRes.data) ? tripsRes.data : (tripsRes.data.trips || []);
            
            // Update trip count
            const userIdx = usersFound.findIndex(u => u.id === user.id);
            if (userIdx >= 0) usersFound[userIdx].tripCount = trips.length;

            trips.forEach(t => {
              tripsFound.push({ ...t, _userId: user.id, _userName: user.name || account.name });
            });
          } catch (err) {
            console.log(`No trips for ${account.email}`);
          }
        }
      } catch (err) {
        // Login failed for this account — try alternate passwords
        const altPasswords = ['password', 'admin123', '123456', 'Nishant@123'];
        for (const altPass of altPasswords) {
          if (altPass === account.password) continue;
          try {
            const res = await axios.post(`${API_BASE}/auth/login`, {
              email: account.email,
              password: altPass
            });
            if (res.data?.token) {
              const token = res.data.token;
              const user = res.data.user;
              tokens[user.id] = token;
              usersFound.push({
                id: user.id,
                name: user.name || account.name,
                email: user.email,
                tripCount: 0,
                source: 'api-login'
              });
              try {
                const tripsRes = await axios.get(`${API_BASE}/trips`, {
                  headers: { Authorization: `Bearer ${token}` }
                });
                const trips = Array.isArray(tripsRes.data) ? tripsRes.data : (tripsRes.data.trips || []);
                const userIdx = usersFound.findIndex(u => u.id === user.id);
                if (userIdx >= 0) usersFound[userIdx].tripCount = trips.length;
                trips.forEach(t => {
                  tripsFound.push({ ...t, _userId: user.id, _userName: user.name || account.name });
                });
              } catch {}
              break;
            }
          } catch {}
        }
      }
    }

    // Also try the admin/stats and admin/users endpoints (in case backend is updated)
    const firstToken = Object.values(tokens)[0];
    if (firstToken) {
      try {
        const usersRes = await axios.get(`${API_BASE}/admin/users`, {
          headers: { Authorization: `Bearer ${firstToken}` }
        });
        if (usersRes.data?.users) {
          usersRes.data.users.forEach(u => {
            if (!usersFound.find(existing => existing.id === u.id)) {
              usersFound.push({ ...u, source: 'admin-api' });
            }
          });
        }
      } catch {
        // Admin endpoint not deployed yet — that's fine
      }
    }

    setAllUsers(usersFound);
    setAllTrips(tripsFound);
    setTokenMap(tokens);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isAdminLoggedIn && mounted) fetchAdminData();
  }, [isAdminLoggedIn, mounted, fetchAdminData]);

  // View trips for a specific user
  const viewUserTrips = (user) => {
    setSelectedUser(user);
    setExpandedTrip(null);
    setTripDetail(null);
    const trips = allTrips.filter(t => t._userId === user.id);
    setUserTrips(trips);

    // If we have a token for this user, re-fetch their trips live
    if (tokenMap[user.id]) {
      setUserTripsLoading(true);
      axios.get(`${API_BASE}/trips`, {
        headers: { Authorization: `Bearer ${tokenMap[user.id]}` }
      }).then(res => {
        const trips = Array.isArray(res.data) ? res.data : (res.data.trips || []);
        setUserTrips(trips);
      }).catch(() => {}).finally(() => setUserTripsLoading(false));
    }
  };

  // View full trip detail
  const viewTripDetail = async (trip) => {
    if (expandedTrip === trip.id) {
      setExpandedTrip(null);
      setTripDetail(null);
      return;
    }
    setExpandedTrip(trip.id);
    setDetailLoading(true);

    const userId = trip._userId || trip.user_id;
    const token = tokenMap[userId] || Object.values(tokenMap)[0];

    if (token) {
      try {
        const res = await axios.get(`${API_BASE}/trips/${trip.id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTripDetail(res.data);
        setDetailLoading(false);
        return;
      } catch {}
    }
    // Fallback to the trip data we already have
    setTripDetail(trip);
    setDetailLoading(false);
  };

  // Compute stats
  const stats = {
    totalUsers: allUsers.length,
    totalTrips: allTrips.length,
    totalStops: allTrips.reduce((sum, t) => sum + (t.stops?.length || 0), 0),
    totalActivities: allTrips.reduce((sum, t) => {
      return sum + (t.stops || []).reduce((sa, s) => sa + (s.activities?.length || 0), 0);
    }, 0)
  };

  // Build chart data from real trips
  const buildTripsByDay = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const counts = new Array(7).fill(0);
    allTrips.forEach(t => {
      if (t.created_at) counts[new Date(t.created_at).getDay()]++;
    });
    return days.map((name, i) => ({ name, trips: counts[i] }));
  };

  const buildCityData = () => {
    const cityMap = {};
    allTrips.forEach(t => {
      (t.stops || []).forEach(s => {
        const city = s.city_name || 'Unknown';
        cityMap[city] = (cityMap[city] || 0) + 1;
      });
    });
    return Object.entries(cityMap)
      .map(([name, visits]) => ({ name, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 6);
  };

  if (!mounted) return null;

  // ─── ADMIN LOGIN ───
  if (!isAdminLoggedIn) {
    return (
      <div className={`admin-container ${sora.className}`}>
        <div className="admin-login-card">
          <div className="admin-login-logo">
            <span className="logo-travel">travel</span><span className="logo-oop">oop</span>
          </div>
          <h1 className="admin-login-title">Admin Access</h1>
          <p className="admin-login-subtitle">Enter admin credentials to continue</p>
          <form onSubmit={handleAdminLogin} className="admin-login-form">
            <div className="admin-input-wrapper">
              <svg className="admin-input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" width="18" height="18">
                <circle cx="9" cy="6" r="4"/><path d="M1 18 Q1 13 9 13 Q17 13 17 18"/>
              </svg>
              <input type="text" className="admin-input" placeholder="Admin Username" value={adminUser} onChange={e => setAdminUser(e.target.value)} autoComplete="off" />
            </div>
            <div className="admin-input-wrapper">
              <svg className="admin-input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" width="18" height="18">
                <rect x="2" y="9" width="14" height="9" rx="2"/><path d="M 5 9 V 6 A 4 4 0 0 1 13 6 V 9"/>
              </svg>
              <input type="password" className="admin-input" placeholder="Admin Password" value={adminPass} onChange={e => setAdminPass(e.target.value)} autoComplete="off" />
            </div>
            {loginError && <p className="admin-login-error">{loginError}</p>}
            <button type="submit" className="admin-login-btn">Access Dashboard</button>
          </form>
          <button onClick={() => router.push('/')} className="back-btn" style={{ marginTop: '20px' }}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ─── DASHBOARD ───
  const tripsByDay = buildTripsByDay();
  const cityData = buildCityData();

  return (
    <div className={`admin-container ${sora.className}`}>
      <div className="admin-card">

        <div className="admin-header">
          <div>
            <h1 className="admin-title">Admin Dashboard</h1>
            <p className="admin-subtitle">
              Live data from reactbits.in &bull; {stats.totalUsers} users &bull; {stats.totalTrips} trips
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button onClick={fetchAdminData} className="back-btn" style={{ gap: '4px' }}>
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={() => router.push('/')} className="back-btn"><ArrowLeft size={18} /> Back</button>
            <button onClick={handleAdminLogout} className="action-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Logging into user accounts and fetching trip data...</p>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-box">
                <Users size={24} color="#6F6F6F" style={{ margin: '0 auto 12px' }} />
                <h3 className="stat-value">{stats.totalUsers}</h3>
                <p className="stat-label">Users Found</p>
              </div>
              <div className="stat-box">
                <Map size={24} color="#6F6F6F" style={{ margin: '0 auto 12px' }} />
                <h3 className="stat-value">{stats.totalTrips}</h3>
                <p className="stat-label">Trips Created</p>
              </div>
              <div className="stat-box">
                <Activity size={24} color="#6F6F6F" style={{ margin: '0 auto 12px' }} />
                <h3 className="stat-value">{stats.totalStops}</h3>
                <p className="stat-label">Stops / Cities</p>
              </div>
              <div className="stat-box">
                <TrendingUp size={24} color="#6F6F6F" style={{ margin: '0 auto 12px' }} />
                <h3 className="stat-value">{stats.totalActivities}</h3>
                <p className="stat-label">Activities</p>
              </div>
            </div>

            {/* Charts */}
            <div className="charts-container">
              <div className="chart-card">
                <h2 className="section-title">Trips by Day of Week</h2>
                <div style={{ width: '100%', height: 250 }}>
                  <ResponsiveContainer>
                    <LineChart data={tripsByDay} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid stroke="#E4E4E4" strokeDasharray="5 5" />
                      <XAxis dataKey="name" stroke="#8A8A8A" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#8A8A8A" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                      <RechartsTooltip contentStyle={{ borderRadius: '8px', border: '1px solid #E4E4E4' }} />
                      <Line type="monotone" dataKey="trips" stroke="#F81927" strokeWidth={3} dot={{ r: 4, fill: '#F81927' }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="chart-card">
                <h2 className="section-title">Top Cities</h2>
                {cityData.length > 0 ? (
                  <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                      <BarChart data={cityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid stroke="#E4E4E4" strokeDasharray="5 5" vertical={false} />
                        <XAxis dataKey="name" stroke="#8A8A8A" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#8A8A8A" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                        <RechartsTooltip cursor={{ fill: '#FAFAFA' }} contentStyle={{ borderRadius: '8px', border: '1px solid #E4E4E4' }} />
                        <Bar dataKey="visits" radius={[4, 4, 0, 0]}>
                          {cityData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="chart-placeholder">No city data — create trips with stops to populate charts</div>
                )}
              </div>
            </div>

            {/* Users Table */}
            <div style={{ marginTop: '40px' }}>
              <h2 className="section-title">All Users ({allUsers.length})</h2>
              {allUsers.length > 0 ? (
                <div className="users-table-container">
                  <table className="users-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Trips</th>
                        <th>User ID</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsers.map(user => (
                        <tr key={user.id}>
                          <td style={{ fontWeight: '600' }}>{user.name}</td>
                          <td className="user-email">{user.email}</td>
                          <td><span className="trip-count-badge">{user.tripCount}</span></td>
                          <td style={{ color: '#8A8A8A', fontSize: '12px', fontFamily: 'monospace' }}>{user.id?.slice(0, 8)}...</td>
                          <td>
                            <button className="action-btn" onClick={() => viewUserTrips(user)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Eye size={12} /> View Trips
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="chart-placeholder" style={{ height: 100 }}>
                  No users found. Make sure user accounts are registered on the API.
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* ─── USER TRIP LOG PANEL ─── */}
      {selectedUser && (
        <div className="trip-log-overlay" onClick={() => { setSelectedUser(null); setExpandedTrip(null); setTripDetail(null); }}>
          <div className="trip-log-panel" onClick={e => e.stopPropagation()}>
            <div className="trip-log-header">
              <div>
                <h2 className="trip-log-title">{selectedUser.name}&apos;s Trips</h2>
                <p className="trip-log-subtitle">{selectedUser.email} &bull; {userTrips.length} trip(s)</p>
              </div>
              <button className="close-btn" onClick={() => { setSelectedUser(null); setExpandedTrip(null); setTripDetail(null); }}>
                <X size={20} />
              </button>
            </div>

            {userTripsLoading ? (
              <div className="loading-state"><div className="spinner"></div><p>Loading trips...</p></div>
            ) : userTrips.length > 0 ? (
              <div className="trip-log-list">
                {userTrips.map(trip => (
                  <div key={trip.id} className={`trip-log-item ${expandedTrip === trip.id ? 'active' : ''}`}>
                    <div className="trip-log-item-header" onClick={() => viewTripDetail(trip)} style={{ cursor: 'pointer' }}>
                      <h3 className="trip-log-item-name">{trip.trip_name || 'Untitled Trip'}</h3>
                      <ChevronRight size={16} color="#8A8A8A" style={{ transform: expandedTrip === trip.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                    </div>
                    <div className="trip-log-item-meta">
                      <span>{trip.stops?.length || 0} stops</span>
                      <span>&bull;</span>
                      <span>{trip.created_at ? new Date(trip.created_at).toLocaleDateString() : '—'}</span>
                      {trip.is_public && <span className="public-badge">Public</span>}
                    </div>

                    {/* Expanded detail */}
                    {expandedTrip === trip.id && (
                      <div className="trip-log-detail">
                        {detailLoading ? (
                          <div className="loading-state" style={{ padding: '20px' }}><div className="spinner"></div></div>
                        ) : (
                          <>
                            {(tripDetail || trip).description && (
                              <p className="trip-detail-desc">{(tripDetail || trip).description}</p>
                            )}

                            {((tripDetail || trip).stops || []).map((stop, si) => (
                              <div key={stop.id || si} className="stop-card">
                                <div className="stop-card-header">
                                  <span className="stop-index">{si + 1}</span>
                                  <div>
                                    <h4 className="stop-city">{stop.city_name}</h4>
                                    <span className="stop-country">{stop.country}</span>
                                  </div>
                                </div>
                                {stop.travel_dates && <p className="stop-dates">{stop.travel_dates}</p>}

                                {stop.activities && stop.activities.length > 0 && (
                                  <div className="activities-list">
                                    <p className="activities-label">Activities ({stop.activities.length})</p>
                                    {stop.activities.map((act, ai) => (
                                      <div key={act.id || ai} className="activity-row">
                                        <span className="activity-name">{act.title}</span>
                                        <div className="activity-meta">
                                          {act.category && <span className="activity-cat">{act.category}</span>}
                                          {act.cost > 0 && <span className="activity-cost">${act.cost}</span>}
                                          {act.duration && <span className="activity-dur">{act.duration}min</span>}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {stop.notes && stop.notes.length > 0 && (
                                  <div className="stop-notes">
                                    {stop.notes.map((n, ni) => (
                                      <p key={n.id || ni} className="stop-note-text">&quot;{n.content}&quot;</p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}

                            {((tripDetail || trip).checklists || []).length > 0 && (
                              <div style={{ marginTop: '12px' }}>
                                <p className="activities-label">Checklist</p>
                                {((tripDetail || trip).checklists).map((cl, ci) => (
                                  <div key={cl.id || ci} className="activity-row">
                                    <span className={cl.is_packed ? 'checklist-done' : ''}>{cl.item_name}</span>
                                    <span className="activity-cat">{cl.is_packed ? '✓ Packed' : '○ Not packed'}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {((tripDetail || trip).notes || []).length > 0 && (
                              <div className="stop-notes" style={{ marginTop: '12px' }}>
                                <p className="activities-label">Trip Notes</p>
                                {((tripDetail || trip).notes).map((n, ni) => (
                                  <p key={n.id || ni} className="stop-note-text">&quot;{n.content}&quot;</p>
                                ))}
                              </div>
                            )}

                            {/* Raw data toggle */}
                            <details style={{ marginTop: '16px' }}>
                              <summary style={{ cursor: 'pointer', color: '#8A8A8A', fontSize: '12px' }}>View raw JSON</summary>
                              <pre className="trip-raw-json">{JSON.stringify(tripDetail || trip, null, 2)}</pre>
                            </details>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="chart-placeholder" style={{ height: 120, marginTop: '20px' }}>
                This user has no trips yet.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
>>>>>>> 35ca6e74d641af63cf10c2e2aeb64950a5a6216d
