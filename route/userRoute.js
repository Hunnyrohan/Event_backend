// const express = require('express');
// const router = express.Router();
// const userController = require('../controller/userController');

// router.post('/register', userController.register);
// router.post('/login', userController.login);

// module.exports = router;
// filepath: /c:/Users/Acer/Desktop/Web development/backend/backend/route/userRoute.js
// filepath: /c:/Users/Acer/Desktop/Web development/backend/backend/route/userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController'); // Ensure this path is correct

// Define your routes here
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;