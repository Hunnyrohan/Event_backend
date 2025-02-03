// routes/eventRoute.js
const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// Event routes
router.get('/events', eventController.getAllEvents);
router.post('/events', eventController.createEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;
