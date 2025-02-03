const { User } = require('../models/userModel');  // Adjust if needed

// Function to fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();  // Assuming you're using Sequelize ORM
        console.log('Fetched users:', users);  // Log users to check if the query works
        res.status(200).json(users);  // Send the fetched users as response
    } catch (error) {
        console.error('Error fetching users:', error);  // Log any error
        res.status(500).json({ error: 'Server error' });  // Send 500 server error if the query fails
    }
};
