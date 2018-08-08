const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Room = require('./Room'),
    Discount = require('./Discount');


//проміжна таблиця
let RoomDiscount = orm.define('roomDiscount', {
    discountStart: {
        type: Sequelize.DATE,
        validate: {isDate: true }
    },
    discountEnd: {
        type: Sequelize.DATE,
        validate: {isDate: true }
    }
});

RoomDiscount.belongsTo(Room);
RoomDiscount.belongsTo(Discount);

module.exports = RoomDiscount;