module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("meals", [
            {
                name: "Breakfast",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Lunch",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Dinner",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("meals", {
            [Sequelize.Op.or]: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                }
            ]
        });
    }
};
