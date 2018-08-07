const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('roomDiscount', {
    discountStart: {
        type: Sequelize.DATE
    },
    discountEnd: {
        type: Sequelize.DATE
    }
});