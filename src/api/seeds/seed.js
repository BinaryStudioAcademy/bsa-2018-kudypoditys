const bcrypt = require("bcrypt");

const USERS = [
    {
        id: 1,
        fullName: "Natalya",
        password: bcrypt.hashSync("102938abC", 10),
        email: "sayber1990@gmail.com",
        phoneNumber: "0504958671",
        nickname: "Nata1ya",
        address: "Nebereshnaya street 20, Lviv",
        appeal: "Mrs.",
        preferredCurrency: "USD",
        countryId: 1,
        paymentTypeId: 1
    },
    {
        id: 2,
        fullName: "Nikolay Datsko",
        password: bcrypt.hashSync("102938abC", 10),
        email: "lorem@lorem.com",
        phoneNumber: "80954568261",
        nickname: "Lorem",
        appeal: "Mrs.",
        preferredCurrency: "USD",
        countryId: 1,
        paymentTypeId: 1
    }
];

const PROPERTIES = [
    {
        id: 1,
        name: "Hotel Ukraine",
        address: "Koval street 16, Kyiv",
        description: "Hotel Ukraine description.",
        contactPhone: "0509832174",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        rating: 8.1,
        userId: 1
    },
    {
        id: 2,
        name: "Hotel Dolynskyi",
        address: "Koval street 16, Lviv",
        description: "Hotel Dolynskyi description. Located in Lviv.",
        contactPhone: "0509842174",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        userId: 2
    }
];

const ROOMS = [
    {
        id: 1,
        price: 20,
        amount: 10,
        area: 20,
        roomTypeId: 1,
        propertyId: 1
    },
    {
        id: 2,
        price: 30,
        amount: 4,
        area: 20,
        roomTypeId: 2,
        propertyId: 1
    }
];

const IMAGES = [
    {
        id: 1,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/947-1262818585EUqs.jpg",
        propertyId: 1
    },
    {
        id: 2,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/947-1262818585EUqs.jpg",
        propertyId: 2
    },
    {
        id: 3,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/947-1262818585EUqs.jpg",
        propertyId: 2
    }
];

const RESERVATIONS = [
    {
        id: 1,
        dateIn: "2018-09-25",
        dateOut: "2018-09-26",
        guestsCount: 3,
        userId: 1,
        roomId: 1,
        paymentTypeId: 1
    },
    {
        id: 2,
        dateIn: "2018-09-28",
        dateOut: "2018-09-29",
        guestsCount: 2,
        userId: 1,
        roomId: 2,
        paymentTypeId: 1
    }
];

const COUNTRIES = [
    {
        id: 1,
        name: "Ukraine",

        cities: [
            {
                id: 1,
                name: "Lviv"
            },
            {
                id: 2,
                name: "Kiev"
            },
            {
                id: 3,
                name: "Ternopil"
            },
            {
                id: 4,
                name: "Odessa"
            },
            {
                id: 5,
                name: "Kharkiv"
            },
            {
                id: 6,
                name: "Dnipro"
            }
        ]
    },
    {
        id: 2,
        name: "Poland",
        cities: [
            {
                id: 4,
                name: "Krakow"
            },
            {
                id: 5,
                name: "Warsaw"
            }
        ]
    }
];

const DISCOUNTS = [
    {
        id: 1,
        rate: 0.1
    },
    {
        id: 2,
        rate: 0.2
    },
    {
        id: 3,
        rate: 0.3
    },
    {
        id: 4,
        rate: 0.4
    },
    {
        id: 5,
        rate: 0.5
    },
    {
        id: 6,
        rate: 0.6
    },
    {
        id: 7,
        rate: 0.7
    },
    {
        id: 8,
        rate: 0.8
    },
    {
        id: 9,
        rate: 0.9
    },
    {
        id: 10,
        rate: 1
    }
];

const PAYMENT_TYPES = [
    {
        id: 1,
        name: "Cash"
    },
    {
        id: 2,
        name: "Visa Credit Card"
    },
    {
        id: 3,
        name: "WebMoney"
    },
    {
        id: 4,
        name: "WesternUnion"
    }
];

const ROLES = [
    {
        id: 1,
        name: "Admin"
    },
    {
        id: 2,
        name: "User"
    },
    {
        id: 3,
        name: "Owner"
    }
];

const FACILITY_CATEGORIES = [
    {
        id: 1,
        name: "Wellness facilities",
        facilities: [
            {
                id: 1,
                name: "Fitness/spa locker rooms"
            },
            {
                id: 2,
                name: "Fitness"
            },
            {
                id: 3,
                name: "Full body massage"
            }
        ]
    },
    {
        id: 2,
        name: "Pets",
        facilities: [
            {
                id: 4,
                name: "Cats"
            },
            {
                id: 5,
                name: "Dogs"
            },
            {
                id: 6,
                name: "Other"
            }
        ]
    },
    {
        id: 3,
        name: "Outdoors",
        facilities: [
            {
                id: 7,
                name: "Terrace"
            }
        ]
    },
    {
        id: 4,
        name: "Cleaning services",
        facilities: [
            {
                id: 8,
                name: "Daily maid service"
            },
            {
                id: 9,
                name: "Ironing service"
            },
            {
                id: 10,
                name: "Dry cleaning"
            },
            {
                id: 11,
                name: "Laundry"
            }
        ]
    },
    {
        id: 5,
        name: "Activities",
        facilities: [
            {
                id: 12,
                name: "Live sport events (broadcast)"
            },
            {
                id: 13,
                name: "Live music/performance"
            },
            {
                id: 14,
                name: "Themed dinner nights"
            },
            {
                id: 15,
                name: "Bike tours"
            },
            {
                id: 16,
                name: "Walking tours"
            },
            {
                id: 17,
                name: "Movie nights"
            },
            {
                id: 18,
                name: "Temporary art galleries"
            },
            {
                id: 19,
                name: "Hiking"
            },
            {
                id: 20,
                name: "Library"
            },
            {
                id: 21,
                name: "Games room"
            }
        ]
    },
    {
        id: 6,
        name: "General",
        facilities: [
            {
                id: 22,
                name: "Shuttle service"
            },
            {
                id: 23,
                name: "Airport shuttle"
            },
            {
                id: 24,
                name: "Designated smoking area"
            },
            {
                id: 25,
                name: "Air conditioning"
            },
            {
                id: 26,
                name: "Non-smoking throughout"
            },
            {
                id: 27,
                name: "Shops (on site)"
            },
            {
                id: 28,
                name: "Heating"
            },
            {
                id: 29,
                name: "Soundproof rooms"
            },
            {
                id: 30,
                name: "Safety deposit box"
            },
            {
                id: 31,
                name: "Lift"
            },
            {
                id: 32,
                name: "Family rooms"
            },
            {
                id: 33,
                name: "Barber/beauty shop"
            },
            {
                id: 34,
                name: "Non-smoking rooms"
            },
            {
                id: 35,
                name: "Room service"
            }
        ]
    }
];

const REVIEW_CATEGORIES = [
    {
        id: 1,
        name: "Place"
    },
    {
        id: 2,
        name: "Owner"
    },
    {
        id: 3,
        name: "Neighbourhood"
    },
    {
        id: 4,
        name: "Fun things to do"
    }
];

const BED_TYPES = [
    {
        id: 1,
        name: "Twin bed(s) / 90 - 130 cm wide"
    },
    {
        id: 2,
        name: "Full bed(s) / 131 - 150 cm wide"
    },
    {
        id: 3,
        name: "Queen bed(s) / 151 - 180 cm wide"
    },
    {
        id: 4,
        name: "King bed(s) / 181 - 210 cm wide"
    },
    {
        id: 5,
        name: "Bunk bed / Variable Size"
    },
    {
        id: 6,
        name: "Sofa bed / Variable Size"
    },
    {
        id: 7,
        name: "Futon bed(s) / Variable Size"
    }
];

const PROPERTY_TYPE = [
    {
        id: 1,
        name: "Apartment",
        description:
            "Furnished, independent accommodations available for short- and long-term rental"
    },
    {
        id: 2,
        name: "Vacation home",
        description:
            "Freestanding home with private, external entrance and rented specifically for vacation"
    },
    {
        id: 3,
        name: "Villa",
        description:
            "Private, freestanding and independent home with a luxury feel"
    },
    {
        id: 4,
        name: "Homestay",
        description:
            "Private home with shared living facilities for host and guest"
    },
    {
        id: 5,
        name: "Country House",
        description:
            "Private home in the countryside with simple accommodations"
    },
    {
        id: 6,
        name: "Condo hotel",
        description:
            "Independent apartments with some hotel facilities like a front desk"
    },
    {
        id: 7,
        name: "Farm stay",
        description: "Private farm with simple accommodations"
    },
    {
        id: 8,
        name: "Lodge",
        description:
            "Private home with accommodations surrounded by nature, such as a forest or mountains"
    },
    {
        id: 9,
        name: "Hotel",
        description:
            "Accommodations for travelers often with restaurants, meeting rooms and other guest services"
    },
    {
        id: 10,
        name: "Inn",
        description:
            "Small property with basic accommodations and a rustic feel"
    },
    {
        id: 11,
        name: "Capsule Hotel",
        description:
            "Extremely small units or capsules offering cheap and basic overnight accommodations"
    },
    {
        id: 12,
        name: "Economy hotel",
        description: "Economy hotel"
    },
    {
        id: 13,
        name: "Hostel",
        description:
            "Budget accommodations with mostly dorm-style beds and social atmosphere"
    },
    {
        id: 14,
        name: "Love Hotel",
        description: "Adult-only accommodations rented by the hour or night"
    },
    {
        id: 15,
        name: "Motel",
        description:
            "Roadside hotel usually for motorists, with direct access to parking and fewer amenities"
    },
    {
        id: 16,
        name: "Resort",
        description:
            "A place for relaxation with on-site restaurants, activities and often a luxury feel"
    },
    {
        id: 17,
        name: "Riad",
        description:
            "Traditional Moroccan accommodations with a courtyard and luxury feel"
    },
    {
        id: 18,
        name: "Ryokan",
        description:
            "Traditional Japanese-style accommodations with meal options"
    },
    {
        id: 19,
        name: "Campground",
        description:
            "Accommodations offering cabins or bungalows alongside areas for camping or campers, with shared facilities or recreational activities"
    },
    {
        id: 20,
        name: "Boat",
        description: "Commercial travel accommodations located on a boat"
    },
    {
        id: 21,
        name: "Luxury Tent",
        description:
            "Tents with fixed beds and some services, located in natural surroundings"
    }
];

const ROOM_TYPES = [
    {
        id: 1,
        name: "Single Room"
    },
    {
        id: 2,
        name: "Double Room"
    },
    {
        id: 3,
        name: "Twin"
    },
    {
        id: 4,
        name: "Twin / Double"
    },
    {
        id: 5,
        name: "Triple Room"
    },
    {
        id: 6,
        name: "Quadruple"
    },
    {
        id: 7,
        name: "Family"
    },
    {
        id: 8,
        name: "Suite"
    },
    {
        id: 9,
        name: "Studio"
    },
    {
        id: 10,
        name: "Apartment"
    },
    {
        id: 11,
        name: "Dorm Room"
    },
    {
        id: 12,
        name: "Bed in Dorm Room"
    }
];

module.exports = {
    USERS,
    PROPERTIES,
    ROOMS,
    RESERVATIONS,
    IMAGES,
    COUNTRIES,
    DISCOUNTS,
    PAYMENT_TYPES,
    ROLES,
    FACILITY_CATEGORIES,
    REVIEW_CATEGORIES,
    BED_TYPES,
    ROOM_TYPES,
    PROPERTY_TYPE
};
