const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Room = require('./Room')


let RoomDiscount = orm.define('roomDiscount', {
    discountStart: {
        type: Sequelize.DATE
    },
    discountEnd: {
        type: Sequelize.DATE
    }
});

RoomDiscount.belongsTo(Room);


module.exports = RoomDiscount;