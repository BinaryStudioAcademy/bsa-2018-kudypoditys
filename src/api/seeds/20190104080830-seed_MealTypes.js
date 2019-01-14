const mealTypes = [
    {
        name: "Ordinary"
    },
    {
        name: "Continental"
    },
    {
        name: "Exclusive"
    }
];

const seed = mealTypes.map((meal, i) => ({
    id: i + 1,
    name: meal.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("mealTypes", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("mealTypes", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
