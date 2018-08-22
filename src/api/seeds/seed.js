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
                name: 'Kiew'
            },
            {
                id: 3,
                name: 'Ternopil'
            }

        ]
    },
    {
        id: 2,
        name: 'Poland',
        cities: [
            {
                id: 4,
                name: 'Krakiw'
            },
            {
                id: 5,
                name: 'Warshava'
            }

        ]
    },
    {
        id: 3,
        name: 'Poland12',
        cities: [
            {
                id: 6,
                name: 'Krakiw12'
            },
            {
                id: 7,
                name: 'Warshava'
            }
        ]
    }
];

const PROPERTY_TYPE = [
    {
        id: 1,
        name: 'Apartment',
        description:'Furnished, independent accommodations available for short- and long-term rental'
    },
    {
        id: 2,
        name: 'Vacation home',
        description:'Freestanding home with private, external entrance and rented specifically for vacation'
    },
    {
        id: 3,
        name: 'Villa',
        description:'Private, freestanding and independent home with a luxury feel'
    },
    {
        id: 4,
        name: 'Homestay',
        description:'Private home with shared living facilities for host and guest'
    },
    {
        id: 5,
        name: 'Country House',
        description:'Private home in the countryside with simple accommodations'
    },
    {
        id: 6,
        name: 'Condo hotel',
        description:'Independent apartments with some hotel facilities like a front desk'
    },
    {
        id: 7,
        name: 'Farm stay',
        description:'Private farm with simple accommodations'
    },
    {
        id: 8,
        name: 'Lodge',
        description:'Private home with accommodations surrounded by nature, such as a forest or mountains'
    },
    {
        id: 9,
        name: 'Hotel',
        description:'Accommodations for travelers often with restaurants, meeting rooms and other guest services'
    },
    {
        id: 10,
        name: 'Inn',
        description:'Small property with basic accommodations and a rustic feel'
    },
    {
        id: 11,
        name: 'Capsule Hotel',
        description:'Extremely small units or capsules offering cheap and basic overnight accommodations'
    },
    {
        id: 12,
        name: 'Economy hotel',
        description:'Economy hotel'
    },
    {
        id: 13,
        name: 'Hostel',
        description:'Budget accommodations with mostly dorm-style beds and social atmosphere'
    },
    {
        id: 14,
        name: 'Love Hotel',
        description:'Adult-only accommodations rented by the hour or night'
    },
    {
        id: 15,
        name: 'Motel',
        description:'Roadside hotel usually for motorists, with direct access to parking and fewer amenities'
    },
    {
        id: 16,
        name: 'Resort',
        description:'A place for relaxation with on-site restaurants, activities and often a luxury feel'
    },
    {
        id: 17,
        name: 'Riad',
        description:'Traditional Moroccan accommodations with a courtyard and luxury feel'
    },
    {
        id: 18,
        name: 'Ryokan',
        description:'Traditional Japanese-style accommodations with meal options'
    },
    {
        id: 19,
        name: 'Campground',
        description:'Accommodations offering cabins or bungalows alongside areas for camping or campers, with shared facilities or recreational activities'
    },
    {
        id: 20,
        name: 'Boat',
        description:'Commercial travel accommodations located on a boat'
    },
    {
        id: 21,
        name: 'Luxury Tent',
        description:'Tents with fixed beds and some services, located in natural surroundings'
    }
];

module.exports = {
    COUNTRIES,
    PROPERTY_TYPE
};
