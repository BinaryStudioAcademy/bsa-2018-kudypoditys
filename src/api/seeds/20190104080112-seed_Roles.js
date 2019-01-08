module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("roles", [
            {
                name: "Admin",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Owner",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("roles", {
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
