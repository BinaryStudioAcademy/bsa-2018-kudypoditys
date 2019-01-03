
const Sequelize = require('sequelize'),
    orm = require('../orm');

const Discount = orm.define('discount', {
    rate: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

Discount.associate = function (models) {
    Discount.hasMany(models.RoomDiscount);
    Discount.belongsToMany(models.Room, {
        through: "roomDiscount"
    });
}

module.exports = Discount;
