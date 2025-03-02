const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Get all contacts (example implementation)
exports.getContacts = (req, res) => {
  // Implement your logic to get all contacts
  res.status(200).json({ message: 'Get all contacts' });
};

// Create a new contact
exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    // Save contact to the database
    const contact = await Contact.create({ name, email, message });

    // Configure nodemailer
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    } catch (err) {
      console.error('Error creating nodemailer transport:', err);
      return res.status(500).json({ message: 'Server error', error: 'Failed to create email transport' });
    }

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      text: message,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error('Error sending email:', err);
      return res.status(500).json({ message: 'Server error', error: 'Failed to send email' });
    }

    res.status(201).json({ message: 'Contact form submitted successfully', contact });
  } catch (err) {
    console.error('Error during contact form submission:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};