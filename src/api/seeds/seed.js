const COUNTRIES = [
    {
        id: 1,
        name: 'Ukraine',

        cities: [
            {
                id: 1,
                name: 'Lviv'
            },
            {
                id: 2,
                name: 'Kiev'
            },
            {
                id: 3,
                name: 'Ternopil'
            },
            {
                id: 4,
                name: 'Odessa'
            },
            {
                id: 5,
                name: 'Kharkiv'
            },
            {
                id: 6,
                name: 'Dnipro'
            },
        ]
    },
    {
        id: 2,
        name: 'Poland',
        cities: [
            {
                id: 4,
                name: 'Krakow'
            },
            {
                id: 5,
                name: 'Warsaw'
            }

        ]
    }
];

const DISCOUNTS = [
    {
        id: 1,
        rate: 0.1,
    },
    {
        id: 2,
        rate: 0.2,
    },
    {
        id: 3,
        rate: 0.3,
    },
    {
        id: 4,
        rate: 0.4,
    },
    {
        id: 5,
        rate: 0.5,
    },
    {
        id: 6,
        rate: 0.6,
    },
    {
        id: 7,
        rate: 0.7,
    },
    {
        id: 8,
        rate: 0.8,
    },
    {
        id: 9,
        rate: 0.9,
    },
    {
        id: 10,
        rate: 1,
    },

];

const PAYMENT_TYPES = [
    {
        id: 1,
        name: 'Cash',
    },
    {
        id: 2,
        name: 'Visa Credit Card',
    },
    {
        id: 3,
        name: 'WebMoney'
    },
    {
        id: 4,
        name: 'WesternUnion'
    }
];

const ROLES = [
    {
        id: 1,
        name: 'Admin'
    },
    {
        id: 2,
        name: 'User'
    },
    {
        id: 3,
        name: 'Owner'
    }
];

const FACILITY_CATEGORIES = [
    {
        id: 1,
        name: 'Wellness facilities',
        facilities: [
            {
                id: 1,
                name: 'Fitness/spa locker rooms'
            },
            {
                id: 2,
                name: 'Fitness'
            },
            {
                id: 3,
                name: 'Full body massage'
            }
        ]
    },
    {
        id: 2,
        name: 'Pets',
        facilities: [
            {
                id: 4,
                name: 'Cats'
            },
            {
                id: 5,
                name: 'Dogs'
            },
            {
                id: 6,
                name: 'Other'
            }
        ]
    },
    {
        id: 3,
        name: 'Outdoors',
        facilities: [
            {
                id: 7,
                name: 'Terrace'
            }
        ]
    },
    {
        id: 4,
        name: 'Cleaning services',
        facilities: [
            {
                id: 8,
                name: 'Daily maid service'
            },
            {
                id: 9,
                name: 'Ironing service'
            },
            {
                id: 10,
                name: 'Dry cleaning'
            },
            {
                id: 11,
                name: 'Laundry'
            }
        ]
    },
    {
        id: 5,
        name: 'Activities',
        facilities: [
            {
                id: 12,
                name: 'Live sport events (broadcast)'
            },
            {
                id: 13,
                name: 'Live music/performance'
            },
            {
                id: 14,
                name: 'Themed dinner nights'
            },
            {
                id: 15,
                name: 'Bike tours'
            },
            {
                id: 16,
                name: 'Walking tours'
            },
            {
                id: 17,
                name: 'Movie nights'
            },
            {
                id: 18,
                name: 'Temporary art galleries'
            },
            {
                id: 19,
                name: 'Hiking'
            },
            {
                id: 20,
                name: 'Library'
            },
            {
                id: 21,
                name: 'Games room'
            }
        ]
    },
    {
        id: 6,
        name: 'General',
        facilities: [
            {
                id: 22,
                name: 'Shuttle service'
            },
            {
                id: 23,
                name: 'Airport shuttle'
            },
            {
                id: 24,
                name: 'Designated smoking area'
            },
            {
                id: 25,
                name: 'Air conditioning'
            },
            {
                id: 26,
                name: 'Non-smoking throughout'
            },
            {
                id: 27,
                name: 'Shops (on site)'
            },
            {
                id: 28,
                name: 'Heating'
            },
            {
                id: 29,
                name: 'Soundproof rooms'
            },
            {
                id: 30,
                name: 'Safety deposit box'
            },
            {
                id: 31,
                name: 'Lift'
            },
            {
                id: 32,
                name: 'Family rooms'
            },
            {
                id: 33,
                name: 'Barber/beauty shop'
            },
            {
                id: 34,
                name: 'Non-smoking rooms'
            },
            {
                id: 35,
                name: 'Room service'
            }
        ]
    }
];

const REVIEW_CATEGORIES = [
    {
        id: 1,
        name: 'Place'
    },
    {
        id: 2,
        name: 'Owner'
    },
    {
        id: 3,
        name: 'Neighbourhood'
    },
    {
        id: 4,
        name: 'Fun things to do'
    },


];

const BED_TYPES = [
    {
        id: 1,
        name: 'Twin bed(s) / 90 - 130 cm wide'
    },
    {
        id: 2,
        name: 'Full bed(s) / 131 - 150 cm wide'
    },
    {
        id: 3,
        name: 'Queen bed(s) / 151 - 180 cm wide'
    },
    {
        id: 4,
        name: 'King bed(s) / 181 - 210 cm wide'
    },
    {
        id: 5,
        name: 'Bunk bed / Variable Size'
    },
    {
        id: 6,
        name: 'Sofa bed / Variable Size'
    },
    {
        id: 7,
        name: 'Futon bed(s) / Variable Size'
    }
];

const ROOM_TYPES = [
    {
        id: 1,
        name: 'Single Room'
    },
    {
        id: 2,
        name: 'Double Room'
    },
    {
        id: 3,
        name: 'Twin'
    },
    {
        id: 4,
        name: 'Twin / Double'
    },
    {
        id: 5,
        name: 'Triple Room'
    },
    {
        id: 6,
        name: 'Quadruple'
    },
    {
        id: 7,
        name: 'Family'
    },
    {
        id: 8,
        name: 'Suite'
    },
    {
        id: 9,
        name: 'Studio'
    },
    {
        id: 10,
        name: 'Apartment'
    },
    {
        id: 11,
        name: 'Dorm Room'
    },
    {
        id: 12,
        name: 'Bed in Dorm Room'
    }
];


module.exports = {
    COUNTRIES,
    DISCOUNTS,
    PAYMENT_TYPES,
    ROLES,
    FACILITY_CATEGORIES,
    REVIEW_CATEGORIES,
    BED_TYPES,
    ROOM_TYPES
};

