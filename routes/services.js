const express = require('express');
const router = express.Router();
const { getServices, createService } = require('../controllers/serviceController');

// Get all services
router.get('/', getServices);

// Create a new service
router.post('/', createService);

module.exports = router;