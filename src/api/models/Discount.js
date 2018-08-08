
const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Discount = orm.define('discount', {
    rate: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Discount;
