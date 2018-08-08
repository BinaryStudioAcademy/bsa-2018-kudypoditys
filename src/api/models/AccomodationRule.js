const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Property = require('./Property');

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

AccommodationRule.belongsTo(Property);

module.exports = AccommodationRule;
