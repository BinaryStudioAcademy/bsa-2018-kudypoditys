module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("roomTypes", [
            {
                name: "Single Room",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Double Room",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Twin",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Twin / Double",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Triple Room",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Quadruple",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Family",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Suite",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Studio",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Apartment",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Dorm Room",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bed in Dorm Room",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("roomTypes", {
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
                },
                {
                    id: 11
                },
                {
                    id: 12
                }
            ]
        });
    }
};
