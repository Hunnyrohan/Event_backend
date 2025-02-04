const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController'); // Ensure this path is correct

// Define your routes here
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);

module.exports = router;