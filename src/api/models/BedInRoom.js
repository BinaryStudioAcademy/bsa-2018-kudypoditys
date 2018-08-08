const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    BedType = require('./BedType'),
    Room = require('./Room');

let BadInRoom = orm.define('bedInRoom', {
    count: {
        type: Sequelize.INTEGER
    }
});

BadInRoom.belongsTo(BedType)
BadInRoom.belongsTo(Room)
module.exports = BadInRoom;