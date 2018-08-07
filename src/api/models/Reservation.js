const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Reservation = orm.define('reservation', {
    dateIn: {
        type: Sequelize.DATE
    },
    dateOut: {
        type: Sequelize.DATE
    },
    guestsCount: {
        type: Sequelize.INTEGER
    }
})

module.exports = Reservation;