
const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Discount = orm.define('discount', {
    rate: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Discount;
