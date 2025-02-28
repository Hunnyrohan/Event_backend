const db = require('../config/db');

const createBooking = async (userId, serviceId, venueId, date, totalPrice) => {
  const query = `
    INSERT INTO bookings (user_id, service_id, venue_id, date, total_price)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [userId, serviceId, venueId, date, totalPrice];
  const { rows } = await db.query(query, values);
  return rows[0];
};

const getBookingsByUser = async (userId) => {
  const query = `
    SELECT * FROM bookings
    WHERE user_id = $1;
  `;
  const { rows } = await db.query(query, [userId]);
  return rows;
};

module.exports = {
  createBooking,
  getBookingsByUser,
};