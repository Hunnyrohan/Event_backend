const express = require('express');
const router = express.Router();
const { getContacts, createContact } = require('../controllers/contactController');

// Get all contacts
router.get('/', getContacts);

// Create a new contact
router.post('/', createContact);

module.exports = router;