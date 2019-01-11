const reviewCategories = [
    {
        name: "Place"
    },
    {
        name: "Owner"
    },
    {
        name: "Neighbourhood"
    },
    {
        name: "Fun things to do"
    }
];

const seed = reviewCategories.map((reviewCategory, i) => ({
    id: i + 1,
    name: reviewCategory.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("reviewCategories", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("reviewCategories", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
