module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("propertyTypes", [
            {
                name: "Apartment",
                description:
                    "Furnished, independent accommodations available for short- and long-term rental",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Vacation home",
                description:
                    "Freestanding home with private, external entrance and rented specifically for vacation",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Villa",
                description:
                    "Private, freestanding and independent home with a luxury feel",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Homestay",
                description:
                    "Private home with shared living facilities for host and guest",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Country House",
                description:
                    "Private home in the countryside with simple accommodations",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Condo hotel",
                description:
                    "Independent apartments with some hotel facilities like a front desk",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Farm stay",
                description: "Private farm with simple accommodations",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Lodge",
                description:
                    "Private home with accommodations surrounded by nature, such as a forest or mountains",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Hotel",
                description:
                    "Accommodations for travelers often with restaurants, meeting rooms and other guest services",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Inn",
                description:
                    "Small property with basic accommodations and a rustic feel",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Capsule Hotel",
                description:
                    "Extremely small units or capsules offering cheap and basic overnight accommodations",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Economy hotel",
                description: "Economy hotel",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Hostel",
                description:
                    "Budget accommodations with mostly dorm-style beds and social atmosphere",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Love Hotel",
                description:
                    "Adult-only accommodations rented by the hour or night",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Motel",
                description:
                    "Roadside hotel usually for motorists, with direct access to parking and fewer amenities",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Resort",
                description:
                    "A place for relaxation with on-site restaurants, activities and often a luxury feel",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Riad",
                description:
                    "Traditional Moroccan accommodations with a courtyard and luxury feel",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Ryokan",
                description:
                    "Traditional Japanese-style accommodations with meal options",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Campground",
                description:
                    "Accommodations offering cabins or bungalows alongside areas for camping or campers, with shared facilities or recreational activities",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Boat",
                description:
                    "Commercial travel accommodations located on a boat",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Luxury Tent",
                description:
                    "Tents with fixed beds and some services, located in natural surroundings",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("propertyTypes", {
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
                }
            ]
        });
    }
};
