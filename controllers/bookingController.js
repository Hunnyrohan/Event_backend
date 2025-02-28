const { createBooking, getBookingsByUser } = require('../models/Booking');

const createBookingHandler = async (req, res) => {
  const { userId, serviceId, venueId, date, totalPrice } = req.body;
  try {
    const booking = await createBooking(userId, serviceId, venueId, date, totalPrice);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookingsByUserHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const bookings = await getBookingsByUser(userId);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBooking: createBookingHandler,
  getBookingsByUser: getBookingsByUserHandler,
};