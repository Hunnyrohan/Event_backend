// models/eventModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

// Define the Event model
const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sync the model to the database (create table if not exists)
sequelize.sync();

module.exports = Event;
