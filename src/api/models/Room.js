const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    RoomType = require('./RoomType');

const Room = orm.define('room', {
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

Room.belongsTo(RoomType);

module.exports = Room;