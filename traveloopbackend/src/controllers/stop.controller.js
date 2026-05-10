const prisma = require('../config/prisma');

exports.addStop = async (req, res) => {
  try {
    const { tripId } = req.params;
    const { city_name, country, travel_dates, order_index } = req.body;

    if (!city_name || !country) {
       return res.status(400).json({ error: 'city_name and country are required' });
    }

    // Verify trip ownership
    const trip = await prisma.trip.findFirst({
      where: { id: tripId, user_id: req.user.userId }
    });
    if (!trip) return res.status(404).json({ error: 'Trip not found' });

    const stop = await prisma.stop.create({
      data: {
        trip_id: tripId,
        city_name,
        country,
        travel_dates,
        order_index: order_index || 0
      }
    });

    res.status(201).json(stop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.reorderStops = async (req, res) => {
  try {
    const { tripId } = req.params;
    const { stops } = req.body; // Array of { id, order_index }

    if (!Array.isArray(stops)) {
      return res.status(400).json({ error: 'stops must be an array' });
    }

    // Verify trip ownership
    const trip = await prisma.trip.findFirst({
      where: { id: tripId, user_id: req.user.userId }
    });
    if (!trip) return res.status(404).json({ error: 'Trip not found' });

    // Using transaction to perform updates safely
    const updates = stops.map(stop => 
      prisma.stop.update({
        where: { id: stop.id },
        data: { order_index: stop.order_index }
      })
    );
    
    await prisma.$transaction(updates);

    res.json({ message: 'Stops reordered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addActivity = async (req, res) => {
  try {
    const { stopId } = req.params;
    const { title, description, category, duration, cost, scheduled_time } = req.body;

    if (!title) return res.status(400).json({ error: 'title is required' });

    // Verify that stop exists and user owns the parent trip
    const stop = await prisma.stop.findUnique({
      where: { id: stopId },
      include: { trip: true }
    });
    
    if (!stop || stop.trip.user_id !== req.user.userId) {
      return res.status(404).json({ error: 'Stop not found or unauthorized' });
    }

    const activity = await prisma.activity.create({
      data: {
        stop_id: stopId,
        title,
        description,
        category,
        duration,
        cost: cost || 0.0,
        scheduled_time: scheduled_time ? new Date(scheduled_time) : null
      }
    });

    res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
