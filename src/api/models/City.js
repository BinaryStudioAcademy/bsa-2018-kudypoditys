const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let City = orm.define('city', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    }
});

module.exports = City;
