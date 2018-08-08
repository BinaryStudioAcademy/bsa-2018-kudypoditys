const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let RoomDiscount = orm.define('roomDiscount', {
    discountStart: {
        type: Sequelize.DATE
    },
    discountEnd: {
        type: Sequelize.DATE
    }
});

module.exports = RoomDiscount;