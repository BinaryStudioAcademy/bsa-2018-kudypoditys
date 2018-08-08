const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

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
});

module.exports = Reservation;