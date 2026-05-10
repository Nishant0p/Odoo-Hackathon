const prisma = require('../config/prisma');

exports.getPublicTrip = async (req, res) => {
  try {
    const { shareToken } = req.params;

    const trip = await prisma.trip.findUnique({
      where: { share_token: shareToken },
      include: {
        stops: {
          orderBy: { order_index: 'asc' },
          include: {
            activities: {
              orderBy: { scheduled_time: 'asc' }
            }
          }
        }
      }
    });

    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    if (!trip.is_public) return res.status(403).json({ error: 'This trip is not public' });

    // Exclude sensitive or private data if necessary before sending
    res.json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
