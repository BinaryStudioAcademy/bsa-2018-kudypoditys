const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Room = require('./Room'),
    Discount = require('./Discount');


//проміжна таблиця
let RoomDiscount = orm.define('roomDiscount', {
    discountStart: {
        type: Sequelize.DATE
    },
    discountEnd: {
        type: Sequelize.DATE
    }
});

RoomDiscount.belongsTo(Room);
RoomDiscount.belongsTo(Discount);

module.exports = RoomDiscount;