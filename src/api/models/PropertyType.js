const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let PropertyType = orm.define('propertyType', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    }
});

module.exports = PropertyType;