
const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Property = orm.define('property', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },

    },
    address: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
        // unique: true,
        // allowNull: false
    },
    distanceToCentre: {
        type: Sequelize.FLOAT,
        validate: { notEmpty: true }
    },
    description: {
        type: Sequelize.TEXT,
        validate: { notEmpty: true },
        // allowNull: true
    },
    vatIncluded: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    additionalFees: {
        type: Sequelize.STRING,
        allowNull: true
    },
    coordinates: {
        type: Sequelize.JSON,
        // allowNull: false
    },
    rating: {
        type: Sequelize.FLOAT,
        validate: { min: 0, max: 10, isFloat: true },
        // allowNull: true
    },
    contactPersonName: {
        type: Sequelize.STRING
        // allowNull: false
    },
    contactPhone: {
        type: Sequelize.STRING
        // allowNull: false
    }
});



module.exports = Property;