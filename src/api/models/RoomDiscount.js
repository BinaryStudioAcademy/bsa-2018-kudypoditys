const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let RoomDiscount = orm.define('roomDiscount', {
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

module.exports = RoomDiscount;