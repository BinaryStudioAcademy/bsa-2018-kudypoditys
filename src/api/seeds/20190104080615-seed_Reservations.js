module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("reservations", [
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 3,
                orderCode: "NSP4ISIYL",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 1,
                paymentTypeId: 1
            },
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 2,
                orderCode: "JFKSOF9U6",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 2,
                paymentTypeId: 1
            },
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 3,
                orderCode: "KSIFY6U4H",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 3,
                paymentTypeId: 1
            },
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 2,
                orderCode: "NLS5F9L5S",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 4,
                paymentTypeId: 1
            },
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 3,
                orderCode: "LVP6T4GSF",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 5,
                paymentTypeId: 1
            },
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 2,
                orderCode: "NPSUCCP5O",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 6,
                paymentTypeId: 1
            },
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 3,
                orderCode: "9JFISP5N0",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 7,
                paymentTypeId: 1
            },
            {
                dateIn: new Date("2018-09-10"),
                dateOut: new Date("2018-09-15"),
                guestsCount: 2,
                orderCode: "NH9GS8NKD",
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                roomId: 8,
                paymentTypeId: 1
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("reservations", {
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
                }
            ]
        });
    }
};
