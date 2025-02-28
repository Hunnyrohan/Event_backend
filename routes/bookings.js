const express = require('express');
const router = express.Router();
const { createBooking, getBookingsByUser } = require('../controllers/bookingController');
const auth = require('../middleware/auth');

// Create a new booking
router.post('/create', auth, createBooking);

// Get bookings by user
router.get('/user/:userId', auth, getBookingsByUser);

module.exports = router;