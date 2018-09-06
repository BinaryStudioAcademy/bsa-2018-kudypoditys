const
  Sequelize = require('sequelize'),
  orm = require('../orm');

let Language = orm.define('language', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = Language;