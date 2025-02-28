const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Contact form submitted successfully', contact });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};