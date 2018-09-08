const
  Sequelize = require('sequelize'),
  orm = require('../orm');

module.exports = orm.define('currency', {
  name: {
    type: Sequelize.STRING,
    validate: { notEmpty: true },
    allowNull: false,
    unique: true
  },
  code: {
    type: Sequelize.STRING,
    validate: { notEmpty: true },
    allowNull: false,
    unique: true
  },
  code: {
    type: Sequelize.STRING,
    validate: { notEmpty: true },
    allowNull: false,
    unique: true
  }
});