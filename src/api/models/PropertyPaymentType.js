const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let PropertyPaymentType = orm.define('propertyPaymentType', {
    name: {
        type: Sequelize.STRING,
        // unique: true,
        allowNull: true
    }
});

module.exports = PropertyPaymentType;