const express = require('express');
const router = express.Router();

const { authenticate } = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');
const tripController = require('../controllers/trip.controller');
const stopController = require('../controllers/stop.controller');
const publicController = require('../controllers/public.controller');


// Authentication
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Public Sharing
router.get('/public/trips/:shareToken', publicController.getPublicTrip);

// Secure routes
router.use(authenticate);

// Trip Management
router.post('/trips', tripController.createTrip);
router.get('/trips', tripController.getTrips);
router.get('/trips/:id', tripController.getTripById);

// Budgeting & Aggregation
router.get('/trips/:tripId/budget', tripController.getTripBudget);

// Itinerary Builder (Stops & Activities)
router.post('/trips/:tripId/stops', stopController.addStop);
router.put('/trips/:tripId/stops/reorder', stopController.reorderStops);
router.post('/stops/:stopId/activities', stopController.addActivity);

const adminController = require('../controllers/admin.controller');

// Admin Panel
router.get('/admin/stats', adminController.getStats);
router.get('/admin/users', adminController.getAllUsers);
router.get('/admin/users/:userId/trips', adminController.getUserTrips);

module.exports = router;
