module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("bedInRooms", [
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 1,
                bedTypeId: 1
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 2,
                bedTypeId: 2
            },
            {
                count: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 3,
                bedTypeId: 3
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 4,
                bedTypeId: 4
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 5,
                bedTypeId: 5
            },
            {
                count: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 6,
                bedTypeId: 6
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 7,
                bedTypeId: 5
            },
            {
                count: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 8,
                bedTypeId: 3
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 9,
                bedTypeId: 3
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 10,
                bedTypeId: 2
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 11,
                bedTypeId: 2
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 12,
                bedTypeId: 3
            },
            {
                count: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 13,
                bedTypeId: 4
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 14,
                bedTypeId: 5
            },
            {
                count: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 15,
                bedTypeId: 6
            },
            {
                count: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 16,
                bedTypeId: 7
            },
            {
                count: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 17,
                bedTypeId: 1
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 18,
                bedTypeId: 2
            },
            {
                count: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 19,
                bedTypeId: 3
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 20,
                bedTypeId: 1
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 21,
                bedTypeId: 2
            },
            {
                count: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 22,
                bedTypeId: 3
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 23,
                bedTypeId: 4
            },
            {
                count: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 24,
                bedTypeId: 5
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 25,
                bedTypeId: 6
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 26,
                bedTypeId: 4
            },
            {
                count: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 27,
                bedTypeId: 2
            },
            {
                count: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 28,
                bedTypeId: 2
            },
            {
                count: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 28,
                bedTypeId: 3
            },
            {
                count: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 29,
                bedTypeId: 2
            },
            {
                count: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 30,
                bedTypeId: 3
            },
            {
                count: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 30,
                bedTypeId: 1
            },
            {
                count: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomId: 31,
                bedTypeId: 4
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("bedInRooms", {
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
                },
                {
                    id: 13
                },
                {
                    id: 14
                },
                {
                    id: 15
                },
                {
                    id: 16
                },
                {
                    id: 17
                },
                {
                    id: 18
                },
                {
                    id: 19
                },
                {
                    id: 20
                },
                {
                    id: 21
                },
                {
                    id: 22
                },
                {
                    id: 23
                },
                {
                    id: 24
                },
                {
                    id: 25
                },
                {
                    id: 26
                },
                {
                    id: 27
                },
                {
                    id: 28
                },
                {
                    id: 29
                },
                {
                    id: 30
                },
                {
                    id: 31
                },
                {
                    id: 32
                },
                {
                    id: 33
                }
            ]
        });
    }
};
