
const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    RoomDiscount = require ('./RoomDiscount')

let Discount = orm.define('discount', {
    discountRate:{
        type: Sequelize.FLOAT
    }
});

Discount.belongsTo(RoomDiscount);

module.exports = Discount;
