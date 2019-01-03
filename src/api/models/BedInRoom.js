const Sequelize = require('sequelize'),
    orm = require('../orm');

const BedInRoom = orm.define('bedInRoom', {
    count: {
        type: Sequelize.INTEGER,
        validate: { min: 1, isNumeric: true },
        allowNull: false,
        defaultValue: 1
    }
});

BedInRoom.associate = function (models) {
    BedInRoom.belongsTo(models.BedType);
    BedInRoom.belongsTo(models.Room);
};

module.exports = BedInRoom;
