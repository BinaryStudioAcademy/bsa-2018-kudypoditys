const Sequelize = require('sequelize'),
    orm = require('../orm');

const RoomDiscount = orm.define('roomDiscount', {
    discountStart: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    },
    discountEnd: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    }
});

RoomDiscount.associate = function (models) {
    RoomDiscount.belongsTo(models.Room);
    RoomDiscount.belongsTo(models.Discount);
};

module.exports = RoomDiscount;