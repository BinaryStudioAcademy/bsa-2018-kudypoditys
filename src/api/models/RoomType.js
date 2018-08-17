const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let RoomType = orm.define('roomTypes', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = RoomType;