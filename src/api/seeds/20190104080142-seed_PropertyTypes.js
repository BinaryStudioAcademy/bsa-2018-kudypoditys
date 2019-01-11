const propertyTypes = [
    {
        name: "Apartment",
        description:
            "Furnished, independent accommodations available for short- and long-term rental"
    },
    {
        name: "Vacation home",
        description:
            "Freestanding home with private, external entrance and rented specifically for vacation"
    },
    {
        name: "Villa",
        description:
            "Private, freestanding and independent home with a luxury feel"
    },
    {
        name: "Homestay",
        description:
            "Private home with shared living facilities for host and guest"
    },
    {
        name: "Country House",
        description:
            "Private home in the countryside with simple accommodations"
    },
    {
        name: "Condo hotel",
        description:
            "Independent apartments with some hotel facilities like a front desk"
    },
    {
        name: "Farm stay",
        description: "Private farm with simple accommodations"
    },
    {
        name: "Lodge",
        description:
            "Private home with accommodations surrounded by nature, such as a forest or mountains"
    },
    {
        name: "Hotel",
        description:
            "Accommodations for travelers often with restaurants, meeting rooms and other guest services"
    },
    {
        name: "Inn",
        description:
            "Small property with basic accommodations and a rustic feel"
    },
    {
        name: "Capsule Hotel",
        description:
            "Extremely small units or capsules offering cheap and basic overnight accommodations"
    },
    {
        name: "Economy hotel",
        description: "Economy hotel"
    },
    {
        name: "Hostel",
        description:
            "Budget accommodations with mostly dorm-style beds and social atmosphere"
    },
    {
        name: "Love Hotel",
        description: "Adult-only accommodations rented by the hour or night"
    },
    {
        name: "Motel",
        description:
            "Roadside hotel usually for motorists, with direct access to parking and fewer amenities"
    },
    {
        name: "Resort",
        description:
            "A place for relaxation with on-site restaurants, activities and often a luxury feel"
    },
    {
        name: "Riad",
        description:
            "Traditional Moroccan accommodations with a courtyard and luxury feel"
    },
    {
        name: "Ryokan",
        description:
            "Traditional Japanese-style accommodations with meal options"
    },
    {
        name: "Campground",
        description:
            "Accommodations offering cabins or bungalows alongside areas for camping or campers, with shared facilities or recreational activities"
    },
    {
        name: "Boat",
        description: "Commercial travel accommodations located on a boat"
    },
    {
        name: "Luxury Tent",
        description:
            "Tents with fixed beds and some services, located in natural surroundings"
    }
];

const seed = propertyTypes.map((propertyType, i) => ({
    id: i + 1,
    name: propertyType.name,
    description: propertyType.description,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("propertyTypes", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("propertyTypes", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
