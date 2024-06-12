const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Example = require('./exampleModel')(sequelize, Sequelize);

module.exports = { sequelize, Example };
