const { createVenue, getVenues, getVenueById } = require('../models/Venue');

const createVenueHandler = async (req, res) => {
  const { name, location, capacity, price } = req.body;
  try {
    const venue = await createVenue(name, location, capacity, price);
    res.status(201).json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVenuesHandler = async (req, res) => {
  try {
    const venues = await getVenues();
    res.json(venues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVenueByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const venue = await getVenueById(id);
    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }
    res.json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createVenue: createVenueHandler,
  getVenues: getVenuesHandler,
  getVenueById: getVenueByIdHandler,
};