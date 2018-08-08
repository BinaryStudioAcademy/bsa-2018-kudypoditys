const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    BedType = require('./BedType'),
    Room = require('./Room');

// проміжна таблиця
let BedInRoom = orm.define('bedInRoom', {
    count: {
        type: Sequelize.INTEGER
    }
});

BedInRoom.belongsTo(BedType);
BedInRoom.belongsTo(Room);

module.exports = BedInRoom;
