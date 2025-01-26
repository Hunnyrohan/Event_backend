const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController'); // Ensure this path is correct

// Define your routes here
router.get('/login', eventController.getAllEvents);
router.post('/', eventController.createEvent);

module.exports = router;