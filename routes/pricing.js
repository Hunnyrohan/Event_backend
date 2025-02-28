const express = require('express');
const router = express.Router();
const { getPricing, createPricing } = require('../controllers/pricingController');

// Get all pricing
router.get('/', getPricing);

// Create new pricing
router.post('/', createPricing);

module.exports = router;