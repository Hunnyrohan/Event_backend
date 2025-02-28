const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.createReview = async (req, res) => {
  const { name, image, stars, event, text, user_id } = req.body;
  try {
    const review = await Review.create({ name, image, stars, event, text, user_id: user_id || null });
    res.status(201).json({ message: 'Review created successfully', review });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};