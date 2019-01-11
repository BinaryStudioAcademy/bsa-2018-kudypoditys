const propertiesModule = require("./20190104080316-seed_Properties");
const facilitiesModule = require("./20190104080038-seed_Facilities");
const _ = require("lodash");

const propertiesFacilities = _.flattenDeep(
    _.map(propertiesModule.properties, property =>
        _.map(facilitiesModule.facilities, facility => ({
            facilityId: facility.id,
            propertyId: property.id
        }))
    )
);

const seed = propertiesFacilities.map((propertyFacility, i) => ({
    id: i + 1,
    facilityId: propertyFacility.facilityId,
    propertyId: propertyFacility.propertyId,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("facilityLists", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("facilityLists", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
