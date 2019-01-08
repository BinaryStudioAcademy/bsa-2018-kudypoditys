module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("facilities", [
            {
                name: "Fitness/spa locker rooms",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 1
            },
            {
                name: "Fitness",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 1
            },
            {
                name: "Full body massage",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 1
            },
            {
                name: "Cats",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 2
            },
            {
                name: "Dogs",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 2
            },
            {
                name: "Other",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 2
            },
            {
                name: "Terrace",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 3
            },
            {
                name: "Daily maid service",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 4
            },
            {
                name: "Ironing service",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 4
            },
            {
                name: "Dry cleaning",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 4
            },
            {
                name: "Laundry",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 4
            },
            {
                name: "Live sport events (broadcast)",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Live music/performance",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Themed dinner nights",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Bike tours",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Walking tours",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Movie nights",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Temporary art galleries",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Hiking",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Library",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Games room",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 5
            },
            {
                name: "Shuttle service",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Airport shuttle",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Designated smoking area",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Air conditioning",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Non-smoking throughout",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Shops (on site)",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Heating",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Soundproof rooms",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Safety deposit box",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Lift",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Family rooms",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Barber/beauty shop",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Non-smoking rooms",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            },
            {
                name: "Room service",
                createdAt: new Date(),
                updatedAt: new Date(),
                facilityCategoryId: 6
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("facilities", {
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
                },
                {
                    id: 34
                },
                {
                    id: 35
                }
            ]
        });
    }
};
