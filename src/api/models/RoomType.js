const Sequelize = require('sequelize'),
    orm = require('../orm');

const RoomType = orm.define('roomTypes', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

RoomType.associate = function (models) {
    RoomType.hasMany(models.Room);
};

module.exports = RoomType;