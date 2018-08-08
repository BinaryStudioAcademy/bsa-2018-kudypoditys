const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`)

let RoomType = orm.define('roomType', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = RoomType