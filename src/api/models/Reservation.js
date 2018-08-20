const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Reservation = orm.define('reservation', {
    dateIn: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        // allowNull: false
    },
    dateOut: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        // allowNull: false
    },
    guestsCount: {
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        // allowNull: false
    }
});

module.exports = Reservation;