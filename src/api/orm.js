const Sequelize = require('sequelize');

const orm = new Sequelize('postgres://postgres:123@localhost:5432/kudypoditys');

module.exports = orm;

