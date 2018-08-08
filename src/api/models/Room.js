const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    RoomType = require('./RoomType'),
    Property = require('./Property')

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

Room.belongsTo(RoomType);
Room.belongsTo(Property);

module.exports = Room;