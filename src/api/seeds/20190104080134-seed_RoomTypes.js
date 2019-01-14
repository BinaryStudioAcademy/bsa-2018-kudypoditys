const roomTypes = [
    {
        name: "Single Room"
    },
    {
        name: "Double Room"
    },
    {
        name: "Twin"
    },
    {
        name: "Twin / Double"
    },
    {
        name: "Triple Room"
    },
    {
        name: "Quadruple"
    },
    {
        name: "Family"
    },
    {
        name: "Suite"
    },
    {
        name: "Studio"
    },
    {
        name: "Apartment"
    },
    {
        name: "Dorm Room"
    },
    {
        name: "Bed in Dorm Room"
    }
];

const seed = roomTypes.map((roomType, i) => ({
    id: i + 1,
    name: roomType.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("roomTypes", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("roomTypes", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
