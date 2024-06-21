
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const login = sequelize.define('login', {
    gmail : {
        type : DataTypes.STRING,
        allowNull: false,
    },
    password : {
        type : DataTypes.STRING,
        allowNull: false,
    }
}) ;




module.exports = {login};
