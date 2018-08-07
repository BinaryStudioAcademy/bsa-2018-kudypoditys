const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
    Bed = require('./Bed')
    Room = require('./Room')

let BadInRoom = orm.define('bedInRoom', {
    count: {
        type: Sequelize.INTEGER
    }
});

BadInRoom.belongsTo(Bed)
BadInRoom.belongsTo(Room)
module.exports = BadInRoom;