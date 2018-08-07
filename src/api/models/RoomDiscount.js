const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Room = require('./Room'),
    Discount = require('./Discount');

let roomDiscount = orm.define('roomDiscount', {
    discountStart: {
        type: Sequelize.DATE
    },
    discountEnd: {
        type: Sequelize.DATE
    }
});

roomDiscount.belongsTo(Room);
roomDiscount.belongsTo(Discount);

module.exports = roomDiscount;