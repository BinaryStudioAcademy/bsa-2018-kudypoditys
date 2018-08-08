const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    User = require('./User'),
    Room = require('./Room'),
    PaymentType = require('./PaymentType');

let Reservation = orm.define('reservation', {
    dateIn: {
        type: Sequelize.DATE,
        validate: { isDate: true}
    },
    dateOut: {
        type: Sequelize.DATE,
        validate: { isDate: true}
    },
    guestsCount: {
        type: Sequelize.INTEGER,
        validate: { min: 1 }

    }
})

Reservation.belongsTo(User);
Reservation.belongsTo(Room);
Reservation.belongsTo(PaymentType);

module.exports = Reservation;