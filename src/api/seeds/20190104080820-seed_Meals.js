const meals = [
    {
        name: "Breakfast"
    },
    {
        name: "Lunch"
    },
    {
        name: "Dinner"
    }
];

const seed = meals.map((meal, i) => ({
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
        return queryInterface.bulkInsert("meals", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("meals", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
