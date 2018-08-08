const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let AccommodationRule = orm.define('accommodationRule', {
    allowPets: {
        type: Sequelize.BOOLEAN
    },
    cancelReservation: {
        type: Sequelize.INTEGER
    },
    minimumStay: {
        type: Sequelize.INTEGER,
        validate: { min: 1,  isNumeric: true }

    },
    arrivalTimeStart: {
        type: Sequelize.DATE,
        validate: { isDate: true }
    },
    arrivalTimeEnd: {
        type: Sequelize.DATE,
        validate: { isDate: true}
    },
    departureTimeStart: {
        type: Sequelize.DATE,
        validate: { isDate: true}
    },
    departureTimeEnd: {
        type: Sequelize.DATE,
        validate: { isDate: true}
    }
});

module.exports = AccommodationRule;
