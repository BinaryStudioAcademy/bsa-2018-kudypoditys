const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Room = require('./Room')

let BedInRoom = orm.define('bedInRoom', {
    count: {
        type: Sequelize.INTEGER
    }
});


BedInRoom.belongsTo(Room);

module.exports = BedInRoom;