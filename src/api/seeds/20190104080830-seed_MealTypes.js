module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("mealTypes", [
            {
                name: "Ordinary",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Continental",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Exclusive",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("mealTypes", {
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
