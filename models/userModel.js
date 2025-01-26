// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const User = sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isEmail: true
//         }
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     timestamps: true
// });

// module.exports = User;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ensure this path is correct

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
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
}, {
    timestamps: true,
    tableName: 'users',
});

module.exports = User;