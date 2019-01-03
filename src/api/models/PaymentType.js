const Sequelize = require('sequelize'),
    orm = require('../orm');

const PaymentType = orm.define('paymentType', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

PaymentType.associate = function (models) {
    PaymentType.hasMany(models.Reservation);
    PaymentType.hasMany(models.PropertyPaymentType);
    PaymentType.hasMany(models.User);
    PaymentType.belongsToMany(models.Property, {
        through: "propertyPaymentType"
    });
};

module.exports = PaymentType;