module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("paymentTypes", [
            {
                name: "Cash",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Visa Credit Card",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "WebMoney",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "WesternUnion",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("paymentTypes", {
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
