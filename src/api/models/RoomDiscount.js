const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

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

module.exports = RoomDiscount;