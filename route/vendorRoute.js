const express = require('express');
const router = express.Router();
const vendorController = require('../controller/vendorController'); // Ensure this path is correct

// Define your routes here
router.get('/', vendorController.getAllVendors);
router.post('/', vendorController.createVendor);

module.exports = router;