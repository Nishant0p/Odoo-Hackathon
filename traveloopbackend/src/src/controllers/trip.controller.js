const prisma = require('../config/prisma');
const crypto = require('crypto');

exports.createTrip = async (req, res) => {
  try {
    const { trip_name, start_date, end_date, description, cover_photo, is_public } = req.body;
    
    if (!trip_name) return res.status(400).json({ error: 'trip_name is required' });

    const share_token = crypto.randomBytes(16).toString('hex');
    
    const trip = await prisma.trip.create({
      data: {
        user_id: req.user.userId,
        trip_name,
        start_date: start_date ? new Date(start_date) : null,
        end_date: end_date ? new Date(end_date) : null,
        description,
        cover_photo,
        is_public: is_public || false,
        share_token
      }
    });

    res.status(201).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTrips = async (req, res) => {
  try {
    const trips = await prisma.trip.findMany({
      where: { user_id: req.user.userId },
      orderBy: { created_at: 'desc' }
    });
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTripById = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await prisma.trip.findFirst({
      where: { id, user_id: req.user.userId },
      include: {
        stops: {
          orderBy: { order_index: 'asc' },
          include: {
            activities: {
              orderBy: { scheduled_time: 'asc' }
            },
            notes: true
          }
        },
        checklists: true,
        notes: {
          where: { stop_id: null }
        }
      }
    });

    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTripBudget = async (req, res) => {
  try {
    const { tripId } = req.params;
    
    // Ensure the trip belongs to the user
    const trip = await prisma.trip.findFirst({
      where: { id: tripId, user_id: req.user.userId }
    });
    if (!trip) return res.status(404).json({ error: 'Trip not found' });

    // Aggregate costs by category
    const activities = await prisma.activity.findMany({
      where: { stop: { trip_id: tripId } }
    });

    let total_cost = 0;
    const category_breakdown = {};

    activities.forEach(activity => {
      total_cost += activity.cost || 0;
      const cat = activity.category || 'Uncategorized';
      category_breakdown[cat] = (category_breakdown[cat] || 0) + (activity.cost || 0);
    });

    res.json({
      trip_id: tripId,
      total_cost,
      category_breakdown
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
