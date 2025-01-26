const express = require('express');
const router = express.Router();

const testController = require('../controller/testController'); // Importing the controller

//Defining the routes
router.get('/crate_test', testController.createTest); // create test
router.get('view_test', testController.getTest); // view test

module.exports = router; // Exporting the router