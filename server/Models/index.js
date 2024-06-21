
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicine = sequelize.define('Medicine', {
    medicine_id : {
        type : DataTypes, primaryKey ,
        allowNull : false
    },
    medicine_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

const LabTests = sequelize.define('Medicine', {
    test_id : {
        type : DataTypes, primaryKey ,
        allowNull : false
    },
    test_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = {Medicine};
