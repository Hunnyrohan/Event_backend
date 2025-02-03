const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Define user routes
router.get('/', userController.getAllUsers); // GET all users
router.get('/:id', userController.getUserById); // GET user by ID
router.post('/', userController.createUser); // CREATE new user
router.put('/:id', userController.updateUser); // UPDATE user
router.delete('/:id', userController.deleteUser); // DELETE user

module.exports = router;
