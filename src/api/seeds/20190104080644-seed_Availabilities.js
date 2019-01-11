const availabilities = [
    {
        date: 1,
        roomId: 1
    },
    {
        date: 2,
        roomId: 1
    },
    {
        date: 3,
        roomId: 1
    },
    {
        date: 4,
        roomId: 1
    },
    {
        date: 5,
        roomId: 1
    },
    {
        date: 6,
        roomId: 1
    },
    {
        date: 7,
        roomId: 1
    },
    {
        date: 8,
        roomId: 1
    },
    {
        date: 9,
        roomId: 1
    },
    {
        date: 10,
        roomId: 1
    },
    {
        date: 11,
        roomId: 1
    },
    {
        date: 12,
        roomId: 1
    },
    {
        date: 13,
        roomId: 1
    },
    {
        date: 14,
        roomId: 1
    },
    {
        date: 15,
        roomId: 1
    },
    {
        date: 16,
        roomId: 1
    },
    {
        date: 17,
        roomId: 1
    },
    {
        date: 18,
        roomId: 1
    },
    {
        date: 19,
        roomId: 1
    },
    {
        date: 20,
        roomId: 1
    },
    {
        date: 21,
        roomId: 1
    },
    {
        date: 22,
        roomId: 1
    },
    {
        date: 23,
        roomId: 1
    },
    {
        date: 24,
        roomId: 1
    },
    {
        date: 25,
        roomId: 1
    },
    {
        date: 26,
        roomId: 1
    },
    {
        date: 27,
        roomId: 1
    },
    {
        date: 28,
        roomId: 1
    },
    {
        date: 29,
        roomId: 1
    },
    {
        date: 30,
        roomId: 1
    },
    {
        date: 31,
        roomId: 1
    },
    {
        date: 31,
        roomId: 26
    },
    {
        date: 1,
        roomId: 26
    },
    {
        date: 2,
        roomId: 26
    },
    {
        date: 3,
        roomId: 26
    },
    {
        date: 4,
        roomId: 26
    },
    {
        date: 5,
        roomId: 26
    },
    {
        date: 6,
        roomId: 26
    },
    {
        date: 7,
        roomId: 26
    },
    {
        date: 8,
        roomId: 26
    },
    {
        date: 9,
        roomId: 26
    },
    {
        date: 10,
        roomId: 26
    },
    {
        date: 11,
        roomId: 26
    },
    {
        date: 12,
        roomId: 26
    },
    {
        date: 13,
        roomId: 26
    },
    {
        date: 14,
        roomId: 26
    },
    {
        date: 15,
        roomId: 26
    },
    {
        date: 16,
        roomId: 26
    },
    {
        date: 17,
        roomId: 26
    },
    {
        date: 18,
        roomId: 26
    },
    {
        date: 19,
        roomId: 26
    },
    {
        date: 20,
        roomId: 26
    },
    {
        date: 21,
        roomId: 26
    },
    {
        date: 22,
        roomId: 26
    },
    {
        date: 23,
        roomId: 26
    },
    {
        date: 24,
        roomId: 26
    },
    {
        date: 25,
        roomId: 26
    },
    {
        date: 26,
        roomId: 26
    },
    {
        date: 27,
        roomId: 26
    },
    {
        date: 28,
        roomId: 26
    },
    {
        date: 29,
        roomId: 26
    },
    {
        date: 30,
        roomId: 26
    },
    {
        date: 31,
        roomId: 27
    },
    {
        date: 1,
        roomId: 27
    },
    {
        date: 2,
        roomId: 27
    },
    {
        date: 3,
        roomId: 27
    },
    {
        date: 4,
        roomId: 27
    },
    {
        date: 5,
        roomId: 27
    },
    {
        date: 6,
        roomId: 27
    },
    {
        date: 7,
        roomId: 27
    },
    {
        date: 8,
        roomId: 27
    },
    {
        date: 9,
        roomId: 27
    },
    {
        date: 10,
        roomId: 27
    },
    {
        date: 11,
        roomId: 27
    },
    {
        date: 12,
        roomId: 27
    },
    {
        date: 13,
        roomId: 27
    },
    {
        date: 14,
        roomId: 27
    },
    {
        date: 15,
        roomId: 27
    },
    {
        date: 16,
        roomId: 27
    },
    {
        date: 17,
        roomId: 27
    },
    {
        date: 18,
        roomId: 27
    },
    {
        date: 19,
        roomId: 27
    },
    {
        date: 20,
        roomId: 27
    },
    {
        date: 21,
        roomId: 27
    },
    {
        date: 22,
        roomId: 27
    },
    {
        date: 23,
        roomId: 27
    },
    {
        date: 24,
        roomId: 27
    },
    {
        date: 25,
        roomId: 27
    },
    {
        date: 26,
        roomId: 27
    },
    {
        date: 27,
        roomId: 27
    },
    {
        date: 28,
        roomId: 27
    },
    {
        date: 29,
        roomId: 27
    },
    {
        date: 30,
        roomId: 27
    },
    {
        date: 31,
        roomId: 27
    }
];

const seed = availabilities.map((availability, i) => ({
    id: i + 1,
    amount: 10,
    date: availability.date,
    price: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
    roomId: availability.roomId
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("availabilities", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("availabilities", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
