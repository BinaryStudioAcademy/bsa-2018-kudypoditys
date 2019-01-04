module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("reviewCategories", [
            {
                name: "Place",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Owner",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Neighbourhood",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Fun things to do",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("reviewCategories", {
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
                }
            ]
        });
    }
};
