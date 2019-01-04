module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("currencies", [
            {
                name: "EURO",
                code: "EUR",
                codeTitle: "EUR",
                number: "978",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "US DOLLAR",
                code: "USD",
                codeTitle: "USD",
                number: "840",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Hryvnia",
                code: "UAH",
                codeTitle: "UAH",
                number: "980",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("currencies", {
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
