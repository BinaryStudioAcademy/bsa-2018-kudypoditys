const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('reservation', {
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