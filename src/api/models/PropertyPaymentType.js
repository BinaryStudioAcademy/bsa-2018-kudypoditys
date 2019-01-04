const Sequelize = require('sequelize'),
    orm = require('../orm');

const PropertyPaymentType = orm.define('propertyPaymentType', {
    name: {
        type: Sequelize.STRING
    }
});

PropertyPaymentType.associate = function (models) {
    PropertyPaymentType.belongsTo(models.Property);
    PropertyPaymentType.belongsTo(models.PaymentType);
};

module.exports = PropertyPaymentType;