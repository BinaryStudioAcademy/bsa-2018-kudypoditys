const rooms = [
    {
        roomTypeId: 1,
        propertyId: 1
    },
    {
        roomTypeId: 2,
        propertyId: 2
    },
    {
        roomTypeId: 2,
        propertyId: 3
    },
    {
        roomTypeId: 2,
        propertyId: 4
    },
    {
        roomTypeId: 2,
        propertyId: 5
    },
    {
        roomTypeId: 2,
        propertyId: 6
    },
    {
        roomTypeId: 1,
        propertyId: 7
    },
    {
        roomTypeId: 2,
        propertyId: 8
    },
    {
        roomTypeId: 2,
        propertyId: 9
    },
    {
        roomTypeId: 2,
        propertyId: 10
    },
    {
        roomTypeId: 2,
        propertyId: 11
    },
    {
        roomTypeId: 2,
        propertyId: 12
    },
    {
        roomTypeId: 1,
        propertyId: 13
    },
    {
        roomTypeId: 2,
        propertyId: 14
    },
    {
        roomTypeId: 2,
        propertyId: 15
    },
    {
        roomTypeId: 2,
        propertyId: 16
    },
    {
        roomTypeId: 2,
        propertyId: 17
    },
    {
        roomTypeId: 2,
        propertyId: 18
    },
    {
        roomTypeId: 1,
        propertyId: 19
    },
    {
        roomTypeId: 2,
        propertyId: 20
    },
    {
        roomTypeId: 2,
        propertyId: 21
    },
    {
        roomTypeId: 2,
        propertyId: 22
    },
    {
        roomTypeId: 2,
        propertyId: 23
    },
    {
        roomTypeId: 2,
        propertyId: 24
    },
    {
        roomTypeId: 2,
        propertyId: 25
    },
    {
        roomTypeId: 4,
        propertyId: 1
    },
    {
        roomTypeId: 3,
        propertyId: 1
    },
    {
        roomTypeId: 5,
        propertyId: 2
    },
    {
        roomTypeId: 1,
        propertyId: 2
    },
    {
        roomTypeId: 6,
        propertyId: 3
    },
    {
        roomTypeId: 8,
        propertyId: 4
    }
];

const seed = rooms.map((room, i) => ({
    id: i + 1,
    price: 1 + Math.floor(Math.random() * 50),
    amount: 1 + Math.floor(Math.random() * 10),
    area: 1 + Math.floor(Math.random() * 30),
    createdAt: new Date(),
    updatedAt: new Date(),
    roomTypeId: room.roomTypeId,
    propertyId: room.propertyId
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    rooms: seed,
    
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("rooms", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("rooms", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
