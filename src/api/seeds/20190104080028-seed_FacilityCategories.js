module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("facilityCategories", [
            {
                name: "Wellness facilities",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Pets",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Outdoors",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Cleaning services",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Activities",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "General",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("facilityCategories", {
            [Sequelize.Op.or]: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
                {
                    id: 5
                },
                {
                    id: 6
                }
            ]
        });
    }
};
