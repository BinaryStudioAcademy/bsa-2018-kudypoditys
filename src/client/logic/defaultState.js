import moment from "moment";

const state = {
    search: {
        destination: "",
        checkIn: null,
        checkOut: null,
        adults: 1,
        children: 0,
        rooms: 1,
        results: []
    },
    login: {
        email: "",
        password: "",
        error: "",
        loginSuccess: false
    },
    foundProperties: {
        foundProperty1: {
            _id: 0,
            image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
            name: "DREAM Hostel Lviv",
            description:
                "Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.",
            rating: 9.7,
            location: "Trockiy Ave. 8, Lviv",
            distanceToCenter: 1.2,
            priceTo: 500,
            priceFrom: 700,
            curency: "uah",
            reviewsNamber: 660,
            locationRating: 9.2,
            availableRoomsCount: 1,
            propertyStars: 4,
            roomType: "Double Room",
            facilities: [
                "Free WiFi",
                "Free parking",
                "Spa and wellness centre",
                "Airport shuttle",
                "Family rooms",
                "Pets allowed",
                "Bar"
            ]
        },
        foundProperty2: {
            _id: 1,
            image: `http://cdn.home-designing.com/wp-content/uploads/2018/08/Grey-modern-sofa.jpg`,
            name: "Three Little Pigs Hostel Berlin ",
            description:
                "Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.",
            rating: 7.9,
            location: "Panteleimona Kulisha Street 27, Lviv",
            distanceToCenter: 2.2,
            priceTo: 540,
            priceFrom: 700,
            curency: "uah",
            reviewsNamber: 260,
            locationRating: 7.2,
            availableRoomsCount: 1,
            propertyStars: 5,
            roomType: "Single Room",
            facilities: [
                "Free WiFi",
                "Free parking",
                "Spa and wellness centre",
                "Airport shuttle",
                "Family rooms",
                "Pets allowed",
                "Bar"
            ]
        }
    },

    sortType: {
        activeItem: "price"
    },

    propertySubmit: {
        activeIndex: 2
    },
    header: {
        currencies: [],
        selectedCurrency: JSON.parse(
            localStorage.getItem("selectedCurrency")
        ) || { id: 2, name: "US DOLLAR", code: "USD", number: 840 },
        currentUser: null
    },
    shownProperties: {
        "xyz-1": {
            image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
            name: "DREAM Hostel Lviv",
            description:
                "Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.",
            rating: 9.7,
            location: "Lviv",
            distanceToCenter: 1.2,
            priceTo: 500,
            priceFrom: 700,
            curency: "uah",
            reviewsNamber: 660,
            locationRating: 9.2,
            availableRoomsCount: 4,
            facilities: [
                "Free WiFi",
                "Free parking",
                "Spa and wellness centre",
                "Airport shuttle",
                "Family rooms",
                "Pets allowed",
                "Bar"
            ]
        },
        "xyz-2": {}
    },
    searchResults: {
        destination: "Lviv",
        totalCount: 2,
        shownFrom: 1,
        shownTo: 5
    },
    cityInfos: {
        Lviv: {
            id: 1,
            name: "Lviv",
            properties: 8,
            avgPrice: 120,
            imageUrl:
                "http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg",
            flagUrl:
                "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
        },
        Dnipro: {
            id: 6,
            name: "Dnipro",
            properties: 3,
            avgPrice: 22,
            imageUrl:
                "http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg",
            flagUrl:
                "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
        },
        Ternopil: {
            id: 3,
            name: "Ternopil",
            properties: 3,
            avgPrice: 28,
            imageUrl:
                "http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg",
            flagUrl:
                "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
        },
        Kiev: {
            id: 2,
            name: "Kiev",
            properties: 7,
            avgPrice: 32,
            imageUrl: "https://s.inyourpocket.com/gallery/130361.jpg",
            flagUrl:
                "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
        },
        Odessa: {
            id: 4,
            name: "Odessa",
            properties: 4,
            avgPrice: 24,
            imageUrl:
                "https://www.hotel-deribas.com/wp-content/uploads/2018/03/19odessa.jpg",
            flagUrl:
                "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
        },
        Kharkiv: {
            id: 5,
            name: "Kharkiv",
            properties: 2,
            avgPrice: 27,
            imageUrl:
                "http://www.yoldasin.com/wp-content/uploads/2017/04/kharkiv-tren-istasyonu-960x638.jpg",
            flagUrl:
                "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
        }
    },
    filters: [
        {
            id: "1",
            ischecked: true,
            label: "Pool",
            amount: 321,
            type: "Facility"
        },
        {
            id: "2",
            ischecked: false,
            label: "Very good location: 8+",
            amount: 658,
            type: "Review Score"
        },
        {
            id: "4",
            ischecked: false,
            label: "Hotel",
            amount: 658,
            type: "Property Type"
        },
        {
            id: "3",
            ischecked: false,
            label: "Hostel",
            amount: 658,
            type: "Property Type"
        },
        {
            id: "4",
            ischecked: false,
            label: "4-star hotel",
            amount: 658,
            type: "Hotel Class"
        }
    ],

    rooms: {},
    propertyRegistrationTab: {
        userName: "User Name"
    },

    propertyPage: {
        property: null,
        availabilityInput: {
            checkIn: moment().startOf("day"),
            checkOut: moment()
                .startOf("day")
                .add(5, "days"),
            adults: 2,
            rooms: 1,
            children: 0,
            result: null,
            error: ""
        },
        bookingInput: {
            checkIn: moment().startOf("day"),
            checkOut: moment()
                .startOf("day")
                .add(5, "days"),
            adults: 2,
            children: 0,
            roomId: null,
            paymentTypeId: null,
            error: "",
            message: ""
        }
    },

    propertyLayoutTab: {
        title: "Apartment with Garden View",
        amount: "1"
    },
    personalSettings: {
        avatar: "",
        nickname: "Nickname0",
        dayOfBirth: "01/01/2000",
        countryId: "Ukraine",
        address: "Some Insane Street",
        appeal: "",
        fullName: "Full Name",
        phone: "0123453453",
        email: "john.doe@gmail.com",
        avatarLoading: false,
        oldPassword: "",
        newPassword: "",
        passwordMessage: "",
        //
        additionalFacilities: ["Bar", "Sauna"],
        //
        creditCards: [
            {
                type: "Visa",
                number: "XXXX-XXXX-XXXX-9595",
                owner: "John Doe",
                expirationDay: "6",
                expirationYear: "2022",
                usedForBooking: true,
                transferRemuneration: false
            }
        ],
        //
        paymentType: "Visa",
        //
        currency: "USD Dollar"
    },

    userCabinet: {
        user: null,
        activeBooking: null,
        bookings: []
    },

    resetPassword: {
        passwordReseted: false,
        email: undefined,
        token: undefined,
        isLoading: false,
        error: undefined
    },

    forgotPassword: {
        isLoading: false,
        error: undefined,
        sendEmailSuccess: false,
        bookings: [],
        reviews: [],
        activeIndex: 0
    },
    availabilityCalendar: {
        selectedRoom: {
            id: 33,
            price: 300,
            amount: 5,
            area: 20,
            description: "Test desc 2",
            createdAt: "2018-09-10T09:53:49.179Z",
            updatedAt: "2018-09-10T09:53:49.179Z",
            roomTypeId: 8,
            propertyId: 26,
            reservations: [],
            availabilities: [
                {
                    id: 31,
                    amount: 100,
                    date: "2018-09-01T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.254Z",
                    updatedAt: "2018-09-10T16:42:58.776Z",
                    roomId: 33
                },
                {
                    id: 35,
                    amount: 1,
                    date: "2018-09-05T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.254Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 39,
                    amount: 1,
                    date: "2018-09-09T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.255Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 43,
                    amount: 1,
                    date: "2018-09-13T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 47,
                    amount: 1,
                    date: "2018-09-17T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 51,
                    amount: 1,
                    date: "2018-09-21T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 55,
                    amount: 1,
                    date: "2018-09-25T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.257Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 59,
                    amount: 1,
                    date: "2018-09-29T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.257Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 33,
                    amount: 1,
                    date: "2018-09-03T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.254Z",
                    updatedAt: "2018-09-10T16:42:58.777Z",
                    roomId: 33
                },
                {
                    id: 37,
                    amount: 1,
                    date: "2018-09-07T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.255Z",
                    updatedAt: "2018-09-10T16:42:58.778Z",
                    roomId: 33
                },
                {
                    id: 41,
                    amount: 1,
                    date: "2018-09-11T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.255Z",
                    updatedAt: "2018-09-10T16:42:58.778Z",
                    roomId: 33
                },
                {
                    id: 45,
                    amount: 1,
                    date: "2018-09-15T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.778Z",
                    roomId: 33
                },
                {
                    id: 49,
                    amount: 1,
                    date: "2018-09-19T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.778Z",
                    roomId: 33
                },
                {
                    id: 53,
                    amount: 1,
                    date: "2018-09-23T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.778Z",
                    roomId: 33
                },
                {
                    id: 57,
                    amount: 1,
                    date: "2018-09-27T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.257Z",
                    updatedAt: "2018-09-10T16:42:58.778Z",
                    roomId: 33
                },
                {
                    id: 32,
                    amount: 1,
                    date: "2018-09-02T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.254Z",
                    updatedAt: "2018-09-10T16:42:58.778Z",
                    roomId: 33
                },
                {
                    id: 34,
                    amount: 1,
                    date: "2018-09-04T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.254Z",
                    updatedAt: "2018-09-10T16:42:58.779Z",
                    roomId: 33
                },
                {
                    id: 36,
                    amount: 1,
                    date: "2018-09-06T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.255Z",
                    updatedAt: "2018-09-10T16:42:58.779Z",
                    roomId: 33
                },
                {
                    id: 38,
                    amount: 1,
                    date: "2018-09-08T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.255Z",
                    updatedAt: "2018-09-10T16:42:58.779Z",
                    roomId: 33
                },
                {
                    id: 40,
                    amount: 1,
                    date: "2018-09-10T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.255Z",
                    updatedAt: "2018-09-10T16:42:58.779Z",
                    roomId: 33
                },
                {
                    id: 42,
                    amount: 1,
                    date: "2018-09-12T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.255Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 44,
                    amount: 1,
                    date: "2018-09-14T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 46,
                    amount: 1,
                    date: "2018-09-16T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 48,
                    amount: 1,
                    date: "2018-09-18T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 50,
                    amount: 1,
                    date: "2018-09-20T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 52,
                    amount: 1,
                    date: "2018-09-22T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.256Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 54,
                    amount: 1,
                    date: "2018-09-24T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.257Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 58,
                    amount: 1,
                    date: "2018-09-28T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.257Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 56,
                    amount: 1,
                    date: "2018-09-26T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.257Z",
                    updatedAt: "2018-09-10T16:42:58.780Z",
                    roomId: 33
                },
                {
                    id: 60,
                    amount: 1,
                    date: "2018-09-30T09:53:49.254Z",
                    price: 1,
                    createdAt: "2018-09-10T09:53:49.257Z",
                    updatedAt: "2018-09-10T16:42:58.781Z",
                    roomId: 33
                }
            ],
            roomType: {
                id: 8,
                name: "Suite",
                createdAt: "2018-09-10T09:41:16.167Z",
                updatedAt: "2018-09-10T16:56:24.663Z"
            }
        },
        rooms: [
            {
                id: 0,
                price: 100,
                amount: 4,
                area: 20,
                description: null,
                createdAt: "2018-09-02T16:21:57.072Z",
                updatedAt: "2018-09-02T20:40:35.292Z",
                roomTypeId: 2,
                propertyId: 1,
                reservations: [
                    {
                        id: 2,
                        dateIn: "2018-08-31T00:00:00.000Z",
                        dateOut: "2018-09-01T00:00:00.000Z",
                        guestsCount: 2,
                        createdAt: "2018-09-02T16:21:57.073Z",
                        updatedAt: "2018-09-02T20:40:35.292Z",
                        userId: 1,
                        roomId: 2,
                        paymentTypeId: 1
                    }
                ],
                availabilities: []
            },
            {
                id: 1,
                price: 100,
                amount: 4,
                area: 20,
                description: null,
                createdAt: "2018-09-02T16:21:57.072Z",
                updatedAt: "2018-09-02T20:40:35.292Z",
                roomTypeId: 1,
                propertyId: 1,
                reservations: [
                    {
                        id: 1,
                        dateIn: "2018-08-29T00:00:00.000Z",
                        dateOut: "2018-08-30T00:00:00.000Z",
                        guestsCount: 3,
                        createdAt: "2018-09-02T16:21:57.072Z",
                        updatedAt: "2018-09-02T20:40:35.292Z",
                        userId: 1,
                        roomId: 1,
                        paymentTypeId: 1
                    }
                ],
                availabilities: []
            }
        ]
    },
    reviewData: {
        pros: "",
        cons: "",
        reviewRating: {
            Cleanliness: 0,
            Comfort: 0,
            Facilities: 0,
            Price: 0,
            Location: 0
        }
    },
    //--------------------------
    countriesData: {
        countries: []
    },
    languagesData: {
        languages: []
    },
    faclitiesData: {
        facilities: []
    },
    paymentTypes: {
        paymentTypes: []
    },
    roomTypesData: {
        roomTypes: []
    },
    bedTypesData: {
        bedTypes: []
    },
    currenciesData: {
        currencies: []
    },
    propertyTypesData: {
        propertyTypes: []
    },

    testRoomsTab: {
        editRoomIndex: -1
    },

    simpleModal: {
        buttons: undefined,
        open: false,
        header: undefined,
        content: undefined
    },

    checkInCheckOut: {
        arrivalFrom: "10:00",
        arrivalTo: "13:00",
        departureFrom: "10:00",
        departureTo: "13:00"
    },

    propertyRegistration: {
        error: null
    },

    userCabinetProperties: {},

    propertyEdit: {}

    // _____________________
};

export default state;
