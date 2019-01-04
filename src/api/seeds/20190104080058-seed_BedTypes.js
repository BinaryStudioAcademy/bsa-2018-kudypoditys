module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("bedTypes", [
            {
                id: 1,
                name: "Twin bed(s) / 90 - 130 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                name: "Full bed(s) / 131 - 150 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                name: "Queen bed(s) / 151 - 180 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 4,
                name: "King bed(s) / 181 - 210 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 5,
                name: "Bunk bed / Variable Size",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 6,
                name: "Sofa bed / Variable Size",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 7,
                name: "Futon bed(s) / Variable Size",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("bedTypes", {
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
                }
            ]
        });
    }
};
