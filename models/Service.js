const db = require('../config/db');

const getServices = async () => {
  const query = `
    SELECT * FROM services;
  `;
  const { rows } = await db.query(query);
  return rows;
};

const createService = async (name, description, price) => {
  const query = `
    INSERT INTO services (name, description, price)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, description, price];
  const { rows } = await db.query(query, values);
  return rows[0];
};

module.exports = {
  getServices,
  createService,
};