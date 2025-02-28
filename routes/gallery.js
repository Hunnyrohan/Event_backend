const express = require('express');
const router = express.Router();
const { getGallery, createGallery } = require('../controllers/galleryController');

// Get all gallery items
router.get('/', getGallery);

// Create a new gallery item
router.post('/', createGallery);

module.exports = router;