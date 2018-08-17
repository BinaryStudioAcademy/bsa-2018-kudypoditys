const Sequelize = require('sequelize');
require('dotenv').config();

const
    DB_NAME = process.env.DB_NAME,
    DB_USER = process.env.DB_USER,
    DB_PASS = process.env.DB_PASS,
    DB_OPTIONS = {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: process.env.DIALECT
    };


//Change values above to your OWN (.env file)
const orm = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_OPTIONS
);

<<<<<<< HEAD
const orm = new Sequelize("postgres://postgres:example@db:5432/postgres");
=======
>>>>>>> beta

module.exports = orm;

