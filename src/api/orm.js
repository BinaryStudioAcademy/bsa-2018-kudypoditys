const Sequelize = require("sequelize");
require("dotenv").config();

const DB_NAME = process.env.DB_NAME,
    DB_USER = process.env.DB_USER,
    DB_PASS = process.env.DB_PASS,
    DB_OPTIONS = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DIALECT,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 60000,
            acquire: 60000
        }
    };

//Change values above to your OWN (.env file)
const orm = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_OPTIONS);

module.exports = orm;
