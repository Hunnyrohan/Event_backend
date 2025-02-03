// database/db.js
const { Sequelize } = require('sequelize');

// Setup Sequelize to connect to PostgreSQL database
const sequelize = new Sequelize('event_planner_db', 'postgres', 'admin123', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,
});

// Test connection to the database
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('DB connection successful');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;
