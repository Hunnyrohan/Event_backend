const express = require('express');
const router = express.Router();
const { getReviews, createReview } = require('../controllers/reviewController');

// Get all reviews
router.get('/', getReviews);

// Create a new review
router.post('/', createReview);

module.exports = router;