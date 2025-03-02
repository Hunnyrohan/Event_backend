const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  console.log('Received signup request:', req.body); // Log the request body

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log('User already exists'); // Log if user already exists
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    console.log('User registered successfully:', newUser); // Log the new user
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error during user registration:', error.message); // Log the error message
    console.error('Error stack:', error.stack); // Log the error stack trace
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { registerUser };
