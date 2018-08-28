const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let PaymentType = orm.define('paymentType', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

module.exports = PaymentType;