const Sequelize = require("sequelize");

const orm = new Sequelize("postgres://postgres@localhost:5432/kudypoditys");

module.exports = orm;
