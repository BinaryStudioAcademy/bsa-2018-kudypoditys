const


    Sequelize = require('sequelize'),
    orm = require('../orm');

let AccommodationRule = orm.define('accommodationRule', {
    allowPets: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    cancelReservation: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    minimumStay: {
        type: Sequelize.INTEGER,
        validate: { min: 1, isNumeric: true },
        defaultValue: 1,
        allowNull: false
    },
    arrivalTimeStart: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    },
    arrivalTimeEnd: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    },
    departureTimeStart: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    },
    departureTimeEnd: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    }
});

module.exports = AccommodationRule;
