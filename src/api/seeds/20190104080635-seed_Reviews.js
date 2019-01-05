module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("reviews", [
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel.",
                Cleanliness: 3,
                Price: 5,
                Comfort: 5,
                Facilities: 4,
                Location: 2,
                avgReview: 3.8,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 1,
                anon: true
            },
            {
                pros: "Nice staff",
                cons: "A bit expensive",
                Cleanliness: 4,
                Price: 3,
                Comfort: 5,
                Facilities: 4,
                Location: 4,
                avgReview: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 1,
                anon: false
            },
            {
                pros: "Perfect location",
                cons:
                    "Had some problems with check-in and check-out time",
                Cleanliness: 3,
                Price: 5,
                Comfort: 4,
                Facilities: 3,
                Location: 5,
                avgReview: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 2,
                anon: false
            },
            {
                pros: "Nice facilities here",
                cons: "None",
                Cleanliness: 5,
                Price: 5,
                Comfort: 5,
                Facilities: 5,
                Location: 5,
                avgReview: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 2,
                anon: false
            },
            {
                pros: "You can pay with allmost anything",
                cons:
                    "Dinner time is a bit uncomfortable. It is also untidy somewhere",
                Cleanliness: 3,
                Price: 5,
                Comfort: 4,
                Facilities: 5,
                Location: 5,
                avgReview: 4.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 3,
                anon: false
            },
            {
                pros:
                    "Brilliant location. Left the hotel 20 minutes prior to my train",
                cons: "Would like to have my room cleaned more often",
                Cleanliness: 3,
                Price: 4,
                Comfort: 5,
                Facilities: 5,
                Location: 5,
                avgReview: 4.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 3,
                anon: false
            },
            {
                pros: "Would like to see more facilities",
                cons: "A bit expensive",
                Cleanliness: 8,
                Price: 6,
                Comfort: 8,
                Facilities: 4,
                Location: 7,
                avgReview: 6.6,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 4,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 5,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 4,
                anon: false
            },
            {
                pros: "Nice place for a romantic weekend, liked it",
                cons: "Location is uncomfortable a bit",
                Cleanliness: 7,
                Price: 6,
                Comfort: 9,
                Facilities: 8,
                Location: 4,
                avgReview: 6.8,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 5,
                anon: false
            },
            {
                pros: "Nice place. Realy liked it",
                cons: "Could be closer to a historic center",
                Cleanliness: 6,
                Price: 7,
                Comfort: 8,
                Facilities: 6,
                Location: 4,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 5,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 6,
                anon: true
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 6,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 25,
                anon: true
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 25,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 7,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 7,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 8,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 8,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 9,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 9,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 10,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 10,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 11,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 11,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 12,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 12,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 13,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 13,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 14,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 14,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 15,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 15,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 16,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 16,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 17,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 17,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 18,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 18,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 19,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 19,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 20,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 20,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 21,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 21,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 22,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 22,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 23,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 23,
                anon: false
            },
            {
                pros: "very nice place for family ",
                cons: "It was hard to find a hostel",
                Cleanliness: 7,
                Price: 8,
                Comfort: 8,
                Facilities: 6,
                Location: 8,
                avgReview: 7.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyId: 24,
                anon: false
            },
            {
                pros: "Quite clean. Realy liked it",
                cons: "Would love it to be less expensive(",
                Cleanliness: 9,
                Price: 4,
                Comfort: 9,
                Facilities: 6,
                Location: 8,
                avgReview: 7.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 2,
                propertyId: 24,
                anon: false
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("reviews", {
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
                },
                {
                    id: 36
                },
                {
                    id: 37
                },
                {
                    id: 38
                },
                {
                    id: 39
                },
                {
                    id: 40
                },
                {
                    id: 41
                },
                {
                    id: 42
                },
                {
                    id: 43
                },
                {
                    id: 44
                },
                {
                    id: 45
                },
                {
                    id: 46
                },
                {
                    id: 47
                },
                {
                    id: 48
                },
                {
                    id: 49
                },
                {
                    id: 50
                }
            ]
        });
    }
};
