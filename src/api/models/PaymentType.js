const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Reservation = require('./Reservation'),
    PropertyPaymentType = require('./PropertyPaymentType');

let PaymentType = orm.define('paymentType', {
    name: {
        type: Sequelize.STRING
    }
});

PaymentType.hasMany(PropertyPaymentType);
PaymentType.hasMany(Reservation);

module.exports = PaymentType;