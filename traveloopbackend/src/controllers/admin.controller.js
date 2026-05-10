const prisma = require('../config/prisma');

// GET /admin/users — list all users with trip count
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { created_at: 'desc' },
      select: {
        id: true,
        name: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        city: true,
        country: true,
        created_at: true,
        _count: { select: { trips: true } }
      }
    });

    const formatted = users.map(u => ({
      id: u.id,
      name: u.name || `${u.firstName || ''} ${u.lastName || ''}`.trim() || 'N/A',
      email: u.email,
      phone: u.phoneNumber || '—',
      city: u.city || '—',
      country: u.country || '—',
      tripCount: u._count.trips,
      joinDate: u.created_at
    }));

    res.json({ users: formatted, totalUsers: formatted.length });
  } catch (error) {
    console.error('Admin getAllUsers error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /admin/users/:userId/trips — get all trips for a specific user
exports.getUserTrips = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, firstName: true, lastName: true }
    });

    if (!user) return res.status(404).json({ error: 'User not found' });

    const trips = await prisma.trip.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      include: {
        stops: {
          orderBy: { order_index: 'asc' },
          include: {
            activities: true,
            notes: true
          }
        },
        checklists: true,
        notes: true
      }
    });

    res.json({
      user: {
        id: user.id,
        name: user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: user.email
      },
      trips,
      totalTrips: trips.length
    });
  } catch (error) {
    console.error('Admin getUserTrips error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /admin/stats — platform-wide stats
exports.getStats = async (req, res) => {
  try {
    const totalUsers = await prisma.user.count();
    const totalTrips = await prisma.trip.count();
    const totalStops = await prisma.stop.count();
    const totalActivities = await prisma.activity.count();

    // Top cities from stops
    const stops = await prisma.stop.findMany({ select: { city_name: true } });
    const cityMap = {};
    stops.forEach(s => {
      const city = s.city_name || 'Unknown';
      cityMap[city] = (cityMap[city] || 0) + 1;
    });
    const topCities = Object.entries(cityMap)
      .map(([name, count]) => ({ name, visits: count }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 8);

    // Trips by day of week
    const allTrips = await prisma.trip.findMany({ select: { created_at: true } });
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayCounts = new Array(7).fill(0);
    allTrips.forEach(t => {
      dayCounts[new Date(t.created_at).getDay()]++;
    });
    const tripsByDay = dayNames.map((name, i) => ({ name, trips: dayCounts[i] }));

    // Recent registrations (last 7 days)
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const recentSignups = await prisma.user.count({ where: { created_at: { gte: weekAgo } } });

    res.json({
      totalUsers,
      totalTrips,
      totalStops,
      totalActivities,
      recentSignups,
      topCities,
      tripsByDay,
      topCity: topCities.length > 0 ? topCities[0].name : '—'
    });
  } catch (error) {
    console.error('Admin getStats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
