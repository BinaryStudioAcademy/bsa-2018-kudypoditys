const facilities = [
    {
        name: "Fitness/spa locker rooms",
        facilityCategoryId: 1
    },
    {
        name: "Fitness",
        facilityCategoryId: 1
    },
    {
        name: "Full body massage",
        facilityCategoryId: 1
    },
    {
        name: "Cats",
        facilityCategoryId: 2
    },
    {
        name: "Dogs",
        facilityCategoryId: 2
    },
    {
        name: "Other",
        facilityCategoryId: 2
    },
    {
        name: "Terrace",
        facilityCategoryId: 3
    },
    {
        name: "Daily maid service",
        facilityCategoryId: 4
    },
    {
        name: "Ironing service",
        facilityCategoryId: 4
    },
    {
        name: "Dry cleaning",
        facilityCategoryId: 4
    },
    {
        name: "Laundry",
        facilityCategoryId: 4
    },
    {
        name: "Live sport events (broadcast)",
        facilityCategoryId: 5
    },
    {
        name: "Live music/performance",
        facilityCategoryId: 5
    },
    {
        name: "Themed dinner nights",
        facilityCategoryId: 5
    },
    {
        name: "Bike tours",
        facilityCategoryId: 5
    },
    {
        name: "Walking tours",
        facilityCategoryId: 5
    },
    {
        name: "Movie nights",
        facilityCategoryId: 5
    },
    {
        name: "Temporary art galleries",
        facilityCategoryId: 5
    },
    {
        name: "Hiking",
        facilityCategoryId: 5
    },
    {
        name: "Library",
        facilityCategoryId: 5
    },
    {
        name: "Games room",
        facilityCategoryId: 5
    },
    {
        name: "Shuttle service",
        facilityCategoryId: 6
    },
    {
        name: "Airport shuttle",
        facilityCategoryId: 6
    },
    {
        name: "Designated smoking area",
        facilityCategoryId: 6
    },
    {
        name: "Air conditioning",
        facilityCategoryId: 6
    },
    {
        name: "Non-smoking throughout",
        facilityCategoryId: 6
    },
    {
        name: "Shops (on site)",
        facilityCategoryId: 6
    },
    {
        name: "Heating",
        facilityCategoryId: 6
    },
    {
        name: "Soundproof rooms",
        facilityCategoryId: 6
    },
    {
        name: "Safety deposit box",
        facilityCategoryId: 6
    },
    {
        name: "Lift",
        facilityCategoryId: 6
    },
    {
        name: "Family rooms",
        facilityCategoryId: 6
    },
    {
        name: "Barber/beauty shop",
        facilityCategoryId: 6
    },
    {
        name: "Non-smoking rooms",
        facilityCategoryId: 6
    },
    {
        name: "Room service",
        facilityCategoryId: 6
    }
];

const seed = facilities.map((facility, i) => ({
    id: i + 1,
    name: facility.name,
    facilityCategoryId: facility.facilityCategoryId,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    facilities: seed,

    up: (queryInterface) => {
        return queryInterface.bulkInsert("facilities", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("facilities", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
