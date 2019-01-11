const facilityCategories = [
    {
        name: "Wellness facilities"
    },
    {
        name: "Pets"
    },
    {
        name: "Outdoors"
    },
    {
        name: "Cleaning services"
    },
    {
        name: "Activities"
    },
    {
        name: "General"
    }
];

const seed = facilityCategories.map((facilityCategory, i) => ({
    id: i + 1,
    name: facilityCategory.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("facilityCategories", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("facilityCategories", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
