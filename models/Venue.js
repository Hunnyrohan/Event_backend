const db = require('../config/db');

const createVenue = async (name, location, capacity, price) => {
  const query = `
    INSERT INTO venues (name, location, capacity, price)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [name, location, capacity, price];
  const { rows } = await db.query(query, values);
  return rows[0];
};

const getVenues = async () => {
  const query = `
    SELECT * FROM venues;
  `;
  const { rows } = await db.query(query);
  return rows;
};

const getVenueById = async (id) => {
  const query = `
    SELECT * FROM venues
    WHERE id = $1;
  `;
  const { rows } = await db.query(query, [id]);
  return rows[0];
};

module.exports = {
  createVenue,
  getVenues,
  getVenueById,
};