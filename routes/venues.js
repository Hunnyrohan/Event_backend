const express = require('express');
const router = express.Router();
const { createVenue, getVenues, getVenueById } = require('../controllers/venueController');

// Create a new venue
router.post('/', createVenue);

// Get all venues
router.get('/', getVenues);

// Get a venue by ID
router.get('/:id', getVenueById);

module.exports = router;