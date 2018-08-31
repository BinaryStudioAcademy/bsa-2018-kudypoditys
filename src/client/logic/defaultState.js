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
        selectedCurrency: 1,
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
    cityInfos: [],
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
            checkIn: null,
            checkOut: null,
            adults: 2,
            rooms: 1,
            children: 0
        },
        bookingInput: {
            checkIn: null,
            checkOut: null,
            adults: 2,
            children: 0,
            roomId: null,
            paymentTypeId: null,
            error: ""
        }
    },

    propertyLayoutTab: {
        title: "Apartment with Garden View",
        amount: "1"
    },

    propertyRegistration: {
        // PAYMENT_TAB
        paymentType: "cash", // "creditcards"
        paymentCreditCards: {
            mastercard: false,
            visa: false
        },
        rating: 8.8,
        vatTaxes: "default", // "none"
        cityTax: "default", // "individual"
        cityTaxIndividual: {
            value: "",
            type: "percent",
            includeToPrice: false
        },
        additionalFees: false,
        additionalFeesOptions: [],
        commissionName: "Name one",
        recipientSameAddress: true,
        recipientActualAddress: {
            country: "",
            city: "",
            address: "",
            postcode: ""
        },
        // SERVICES_TAB
        internet: "free", // additional, none
        internetFee: "",
        parking: {
            providing: "none",
            type: "private",
            placement: "on_territory",
            booking: "need",
            priceForDay: ""
        },
        languages: ["ukrainian", "russian", "english"],
        facilities: ["Bar", "Sauna", "Pool"],

        // Photo Tab
        images: [],
        //tab Index
        activeIndex: 0,
        //    POLICES TAB

        arrivalFrom: "10:00",
        arrivalTo: "13:00",
        departureFrom: "13:00",
        departureTo: "12:00",
        cancellation: "1 day before"
    },

    personalSettings: {
        avatarUrl: "",
        nickname: "Nickname0",
        dateDay: "5",
        dateMonth: "January",
        dateYear: "2010",
        country: "Ukraine",
        //
        address: "Some Insane Street",
        city: "Lviv",
        addressCountry: "Ukraine",
        postcode: "12345",
        //
        appeal: "Mr.",
        firstName: "John",
        lastName: "Doe",
        phone: "0123453453",
        email: "john.doe@gmail.com",
        //
        additionalFacilities: ["Bar", "Sauna"],
        //
        creditCards: [
            {
                type: "Visa",
                number: "1293-1235-1235-9595",
                owner: "John Doe",
                expirationDay: "6",
                expirationYear: "2022",
                usedForBooking: true,
                transferRemuneration: false
            }
        ],
        //
        paymentType: "Mastercard",
        payForAccommodation: "During stay",
        //
        smokingInRooms: "No",
        countOfStars: "Any",
        //
        showWithDisabledFacilities: true,
        bookForWhom: "For myself",
        //
        currency: "USD Dollar"
    },

    userCabinet: {
        user: null,
        activeBooking: null,
        bookings: []
    }
};

export default state;
