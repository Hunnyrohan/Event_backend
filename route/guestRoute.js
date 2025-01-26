const express = require('express');
const router = express.Router();
const guestController = require('../controller/guestController'); // Ensure this path is correct

// Define your routes here
router.get('/', guestController.getAllGuests);
router.post('/', guestController.createGuest);

module.exports = router;