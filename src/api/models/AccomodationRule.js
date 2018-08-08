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
        type: Sequelize.INTEGER
    },
    arrivalTimeStart: {
        type: Sequelize.DATE
    },
    arrivalTimeEnd: {
        type: Sequelize.DATE
    },
    departureTimeStart: {
        type: Sequelize.DATE
    },
    departureTimeEnd: {
        type: Sequelize.DATE
    }
});

AccommodationRule.belongsTo(Property);

module.exports = AccommodationRule;
