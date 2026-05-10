const axios = require('axios');
const API = 'https://reactbits.in/api';

async function test() {
  // Try login
  try {
    const r = await axios.post(`${API}/auth/login`, { email: 'nishantsharma2006720@gmail.com', password: 'password' });
    console.log('Login result:', JSON.stringify(r.data, null, 2));
  } catch(e) {
    console.log('Login error:', e.response?.status, e.response?.data);
  }

  // Try register + login with known password
  try {
    await axios.post(`${API}/auth/register`, { name: 'Admin Test', email: 'admin@traveloop.com', password: 'admin123' });
    console.log('Registered admin@traveloop.com');
  } catch(e) {
    console.log('Register result:', e.response?.status, e.response?.data);
  }

  try {
    const r2 = await axios.post(`${API}/auth/login`, { email: 'admin@traveloop.com', password: 'admin123' });
    console.log('Login admin:', JSON.stringify(r2.data, null, 2));
    
    const token = r2.data.token;
    // Fetch trips
    const trips = await axios.get(`${API}/trips`, { headers: { Authorization: `Bearer ${token}` } });
    console.log('Trips:', JSON.stringify(trips.data, null, 2));

    // Try admin endpoints
    try {
      const stats = await axios.get(`${API}/admin/stats`, { headers: { Authorization: `Bearer ${token}` } });
      console.log('Admin stats:', JSON.stringify(stats.data, null, 2));
    } catch(e) {
      console.log('Admin stats error:', e.response?.status, e.response?.data);
    }

    try {
      const users = await axios.get(`${API}/admin/users`, { headers: { Authorization: `Bearer ${token}` } });
      console.log('Admin users:', JSON.stringify(users.data, null, 2));
    } catch(e) {
      console.log('Admin users error:', e.response?.status, e.response?.data);
    }
  } catch(e) {
    console.log('Login admin error:', e.response?.status, e.response?.data);
  }
}

test();
