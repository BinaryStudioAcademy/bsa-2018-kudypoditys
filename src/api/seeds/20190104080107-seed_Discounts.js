module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("discounts", [
            {
                rate: 0.1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 0.9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("discounts", {
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
                },
                {
                    id: 7
                },
                {
                    id: 8
                },
                {
                    id: 9
                },
                {
                    id: 10
                }
            ]
        });
    }
};
