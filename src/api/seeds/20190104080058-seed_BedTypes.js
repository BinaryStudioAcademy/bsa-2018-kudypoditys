module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("bedTypes", [
            {
                name: "Twin bed(s) / 90 - 130 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Full bed(s) / 131 - 150 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Queen bed(s) / 151 - 180 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "King bed(s) / 181 - 210 cm wide",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bunk bed / Variable Size",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Sofa bed / Variable Size",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
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
