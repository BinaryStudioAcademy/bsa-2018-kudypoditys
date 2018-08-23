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
        type: Sequelize.TIME,
        allowNull: false
    },
    arrivalTimeEnd: {
        type: Sequelize.TIME,
        allowNull: false
    },
    departureTimeStart: {
        type: Sequelize.TIME,
        allowNull: false
    },
    departureTimeEnd: {
        type: Sequelize.TIME,
        allowNull: false
    }
});

module.exports = AccommodationRule;
