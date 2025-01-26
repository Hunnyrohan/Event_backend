const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ensure this path is correct

const Guest = sequelize.define('Guest', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Events', // Adjust the model name as necessary
            key: 'id',
        },
    },
}, {
    timestamps: true,
    tableName: 'guests',
});

module.exports = Guest;