const Pricing = require('../models/Pricing');

exports.getAllPricing = async (req, res) => {
  try {
    const pricing = await Pricing.findAll();
    res.json(pricing);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.createPricing = async (req, res) => {
  const { title, amount, features, popular } = req.body;
  try {
    const pricing = await Pricing.create({ title, amount, features, popular });
    res.status(201).json({ message: 'Pricing plan created successfully', pricing });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};