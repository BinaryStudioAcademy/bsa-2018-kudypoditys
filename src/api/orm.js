const Sequelize = require("sequelize");

const orm = new Sequelize("postgres://postgres:example@db:5432/postgres");

module.exports = orm;
