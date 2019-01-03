const Sequelize = require('sequelize'),
    orm = require('../orm');

const BedType = orm.define('bedType', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});

BedType.associate = function (models) {
    BedType.hasMany(models.BedInRoom);
};

module.exports = BedType;
