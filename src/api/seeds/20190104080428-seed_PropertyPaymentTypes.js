const propertiesModule = require("./20190104080316-seed_Properties");
const paymentTypesModule = require("./20190104080051-seed_PaymentTypes");
const _ = require("lodash");

const paymentTypesProperties = _.flattenDeep(
    _.map(propertiesModule.properties, property =>
        _.map(paymentTypesModule.paymentTypes, paymentType => ({
            paymentTypeId: paymentType.id,
            propertyId: property.id
        }))
    )
);

const seed = paymentTypesProperties.map((paymentTypeProperty, i) => ({
    id: i + 1,
    paymentTypeId: paymentTypeProperty.paymentTypeId,
    propertyId: paymentTypeProperty.propertyId,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("propertyPaymentTypes", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("propertyPaymentTypes", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
