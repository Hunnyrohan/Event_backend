const bcrypt = require('bcrypt');
const db = require('../config/db');

const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  console.log('Register request received:', req.body); // Log the request body
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users (first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, email, hashedPassword]
    );
    console.log('User registered:', result.rows[0]); // Log the result
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error during user registration:', error); // Log the full error
    console.error('Error details:', error.message, error.stack); // Log detailed error
    res.status(500).json({ message: 'An error occurred. Please try again later.', error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', req.body); // Log the request body
  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during user login:', error); // Log the full error
    console.error('Error details:', error.message, error.stack); // Log detailed error
    res.status(500).json({ message: 'An error occurred. Please try again later.', error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};