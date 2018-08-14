const Sequelize = require("sequelize");

const orm = new Sequelize('postgres://postgres:1234@localhost:5432/kudypoditys');

module.exports = orm;
