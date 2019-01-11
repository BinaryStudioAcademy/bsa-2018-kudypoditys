const reviews = [
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel.",
        userId: 1,
        propertyId: 1,
        anon: true
    },
    {
        pros: "Nice staff",
        cons: "A bit expensive",
        userId: 2,
        propertyId: 1,
        anon: false
    },
    {
        pros: "Perfect location",
        cons: "Had some problems with check-in and check-out time",
        userId: 1,
        propertyId: 2,
        anon: false
    },
    {
        pros: "Nice facilities here",
        cons: "None",
        userId: 2,
        propertyId: 2,
        anon: false
    },
    {
        pros: "You can pay with allmost anything",
        cons: "Dinner time is a bit uncomfortable. It is also untidy somewhere",
        userId: 2,
        propertyId: 3,
        anon: false
    },
    {
        pros: "Brilliant location. Left the hotel 20 minutes prior to my train",
        cons: "Would like to have my room cleaned more often",
        userId: 1,
        propertyId: 3,
        anon: false
    },
    {
        pros: "Would like to see more facilities",
        cons: "A bit expensive",
        userId: 1,
        propertyId: 4,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 4,
        anon: false
    },
    {
        pros: "Nice place for a romantic weekend, liked it",
        cons: "Location is uncomfortable a bit",
        userId: 2,
        propertyId: 5,
        anon: false
    },
    {
        pros: "Nice place. Realy liked it",
        cons: "Could be closer to a historic center",
        userId: 1,
        propertyId: 5,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 6,
        anon: true
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 6,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 25,
        anon: true
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 25,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 7,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 7,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 8,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 8,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 9,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 9,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 10,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 10,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 11,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 11,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 12,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 12,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 13,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 13,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 14,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 14,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 15,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 15,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 16,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 16,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 17,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 17,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 18,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 18,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 19,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 19,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 20,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 20,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 21,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 21,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 22,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 22,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 23,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 23,
        anon: false
    },
    {
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        userId: 1,
        propertyId: 24,
        anon: false
    },
    {
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        userId: 2,
        propertyId: 24,
        anon: false
    }
];

const seed = reviews.map((review, i) => ({
    id: i + 1,
    pros: review.pros,
    cons: review.cons,
    Cleanliness: 1 + Math.floor(Math.random() * 9),
    Price: 1 + Math.floor(Math.random() * 9),
    Comfort: 1 + Math.floor(Math.random() * 9),
    Facilities: 1 + Math.floor(Math.random() * 9),
    Location: 1 + Math.floor(Math.random() * 9),
    avgReview: 1 + Math.floor(Math.random() * 9),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: review.userId,
    propertyId: review.propertyId,
    anon: review.anon
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("reviews", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("reviews", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
