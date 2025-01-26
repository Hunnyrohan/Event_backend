const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ensure this path is correct

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
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
    tableName: 'tasks',
});

module.exports = Task;