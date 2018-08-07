const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('ruleAccommodation', {
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