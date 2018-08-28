const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let PropertyPaymentType = orm.define('propertyPaymentType', {
    name: {
        type: Sequelize.STRING,

    }
});

module.exports = PropertyPaymentType;