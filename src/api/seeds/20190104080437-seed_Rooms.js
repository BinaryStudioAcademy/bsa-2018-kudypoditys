module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("rooms", [
            {
                price: 20,
                amount: 10,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 1,
                propertyId: 1
            },
            {
                price: 30,
                amount: 4,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 2
            },
            {
                price: 33,
                amount: 4,
                area: 29,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 3
            },
            {
                price: 14,
                amount: 2,
                area: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 4
            },
            {
                price: 20,
                amount: 2,
                area: 41,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 5
            },
            {
                price: 33,
                amount: 4,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 6
            },
            {
                price: 20,
                amount: 10,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 1,
                propertyId: 7
            },
            {
                price: 30,
                amount: 4,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 8
            },
            {
                price: 33,
                amount: 4,
                area: 29,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 9
            },
            {
                price: 14,
                amount: 2,
                area: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 10
            },
            {
                price: 20,
                amount: 2,
                area: 41,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 11
            },
            {
                price: 33,
                amount: 4,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 12
            },
            {
                price: 20,
                amount: 10,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 1,
                propertyId: 13
            },
            {
                price: 30,
                amount: 4,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 14
            },
            {
                price: 33,
                amount: 4,
                area: 29,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 15
            },
            {
                price: 14,
                amount: 2,
                area: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 16
            },
            {
                price: 20,
                amount: 2,
                area: 41,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 17
            },
            {
                price: 33,
                amount: 4,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 18
            },
            {
                price: 20,
                amount: 10,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 1,
                propertyId: 19
            },
            {
                price: 30,
                amount: 4,
                area: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 20
            },
            {
                price: 33,
                amount: 4,
                area: 29,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 21
            },
            {
                price: 14,
                amount: 2,
                area: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 22
            },
            {
                price: 20,
                amount: 2,
                area: 41,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 23
            },
            {
                price: 33,
                amount: 4,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 24
            },
            {
                price: 33,
                amount: 4,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 2,
                propertyId: 25
            },
            {
                price: 33,
                amount: 2,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 4,
                propertyId: 1
            },
            {
                price: 20,
                amount: 3,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 3,
                propertyId: 1
            },
            {
                price: 15,
                amount: 3,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 5,
                propertyId: 2
            },
            {
                price: 25,
                amount: 3,
                area: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 1,
                propertyId: 2
            },
            {
                price: 80,
                amount: 2,
                area: 77,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 6,
                propertyId: 3
            },
            {
                price: 40,
                amount: 4,
                area: 50,
                createdAt: new Date(),
                updatedAt: new Date(),
                roomTypeId: 8,
                propertyId: 4
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("rooms", {
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
                }
            ]
        });
    }
};
