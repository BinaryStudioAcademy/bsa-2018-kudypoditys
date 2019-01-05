module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("languages", [
            {
                name: "English",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Russian",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Ukranian",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "German",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("languages", {
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
