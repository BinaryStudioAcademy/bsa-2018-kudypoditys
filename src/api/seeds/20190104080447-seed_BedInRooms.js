const bedInRooms = [
    {
        roomId: 1,
        bedTypeId: 1
    },
    {
        roomId: 2,
        bedTypeId: 2
    },
    {
        roomId: 3,
        bedTypeId: 3
    },
    {
        roomId: 4,
        bedTypeId: 4
    },
    {
        roomId: 5,
        bedTypeId: 5
    },
    {
        roomId: 6,
        bedTypeId: 6
    },
    {
        roomId: 7,
        bedTypeId: 5
    },
    {
        roomId: 8,
        bedTypeId: 3
    },
    {
        roomId: 9,
        bedTypeId: 3
    },
    {
        roomId: 10,
        bedTypeId: 2
    },
    {
        roomId: 11,
        bedTypeId: 2
    },
    {
        roomId: 12,
        bedTypeId: 3
    },
    {
        roomId: 13,
        bedTypeId: 4
    },
    {
        roomId: 14,
        bedTypeId: 5
    },
    {
        roomId: 15,
        bedTypeId: 6
    },
    {
        roomId: 16,
        bedTypeId: 7
    },
    {
        roomId: 17,
        bedTypeId: 1
    },
    {
        roomId: 18,
        bedTypeId: 2
    },
    {
        roomId: 19,
        bedTypeId: 3
    },
    {
        roomId: 20,
        bedTypeId: 1
    },
    {
        roomId: 21,
        bedTypeId: 2
    },
    {
        roomId: 22,
        bedTypeId: 3
    },
    {
        roomId: 23,
        bedTypeId: 4
    },
    {
        bedTypeId: 5
    },
    {
        roomId: 25,
        bedTypeId: 6
    },
    {
        roomId: 26,
        bedTypeId: 4
    },
    {
        roomId: 27,
        bedTypeId: 2
    },
    {
        roomId: 28,
        bedTypeId: 2
    },
    {
        roomId: 28,
        bedTypeId: 3
    },
    {
        roomId: 29,
        bedTypeId: 2
    },
    {
        roomId: 30,
        bedTypeId: 3
    },
    {
        roomId: 30,
        bedTypeId: 1
    },
    {
        roomId: 31,
        bedTypeId: 4
    }
];

const seed = bedInRooms.map((bedInRoom, i) => ({
    id: i + 1,
    count: 1 + Math.floor(Math.random() * 5),
    createdAt: new Date(),
    updatedAt: new Date(),
    roomId: bedInRoom.roomId,
    bedTypeId: bedInRoom.bedTypeId
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("bedInRooms", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("bedInRooms", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
