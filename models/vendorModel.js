const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ensure this path is correct

const Vendor = sequelize.define('Vendor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    service: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'vendors',
});

module.exports = Vendor;