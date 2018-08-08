const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Room = orm.define('room', {
    price: {
        type: Sequelize.INTEGER
    },
    amount: {
        type: Sequelize.INTEGER
    },
    area: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    }
});



module.exports = Room;