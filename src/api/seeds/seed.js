const bcrypt = require("bcrypt");

const USERS = [
    {
        id: 1,
        fullName: "Natalya",
        password: bcrypt.hashSync("nata1NATA", 10),
        email: "natalya@gmail.com",
        phoneNumber: "0504958671"
    },
    {
        id: 2,
        fullName: "Nikolay Datsko",
        password: bcrypt.hashSync("102938abC", 10),
        email: "lorem@lorem.com",
        phoneNumber: "80954568261"
    }
];

const PROPERTIES = [
    {
        id: 1,
        name: "Hotel Ukraine",
        rating: 4.5,
        address: "Koval street 16, Kyiv",
        description: "Hotel Ukraine located in Kyiv.",
        contactPhone: "0509832174",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 9,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 2,
        name: "Hotel Dolynskyi",
        rating: 4.9,
        address: "Koval street 16, Lviv",
        description: "Hotel Dolynskyi description. Located in Lviv.",
        contactPhone: "0509842174",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 9,
        cityId: 1,
        accommodationRuleId: 1
    },
    {
        id: 3,
        name: "Hotel Atlas Deluxe",
        rating: 9.1,
        address: "Prospekt Shevchenka 27, Lviv",
        description: "Hotel Atlas Deluxe is located in the heart of Lviv, within a 2-minute walk of Ploshcha Rynok Square and a 10-minute walk of Ivana Franko Park. It offers a sauna, fitness center and concierge service.",
        contactPhone: "0678674908",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 9,
        cityId: 1,
        accommodationRuleId: 1
    },
    {
        id: 4,
        name: "Rius Hotel",
        rating: 9.0,
        address: "12A Hnatiuka St, Lviv",
        description: "Located in the city center of Lviv, less than a 2-minute walk from Svobody Prospekt and a 5-minute walk from Market Square, Rius hotel features free Wi-Fi throughout the property.",
        contactPhone: "0955679712",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 9,
        cityId: 1,
        accommodationRuleId: 1
    },
    {
        id: 5,
        name: "British Club Lviv",
        rating: 9.4,
        address: "Nalyvaika Street 18, Lviv",
        description: "This hotel is located in the historic center of Lviv, just a 10-minute walk from Ploschad Rynok Square. Free Wi-Fi and a 24-hour reception are featured at British Club Lviv.",
        contactPhone: "0509842174",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 9,
        cityId: 1,
        accommodationRuleId: 1
    },
    {
        id: 6,
        name: "Complimente Guest House",
        rating: 9.3,
        address: "Pereulok Kravtsova 13 V, Kharkov",
        description: "This guest house is located in the center of Kharkov, a 5-minute walk from Konstitutsii Square. Free Wi-Fi, a 24-hour reception and private parking are featured at Complimente Guest House.",
        contactPhone: "0674569222",
        coordinates: { lat: 49.988358, lng: 36.232845 },
        propertyTypeId: 5,
        cityId: 5,
        accommodationRuleId: 1
    },
    {
        id: 7,
        name: "Pletnevskiy Inn",
        rating: 5.6,
        address: "Kooperatyvna St. 6/8 (entrance from Pletnevskiy lane), Kharkov",
        description: "Featuring free WiFi throughout the property, Pletnevskiy Inn offers accommodations in the historical building in the center of Kharkov. Guests can enjoy the on-site restaurant.",
        contactPhone: "0896789099",
        coordinates: { lat: 49.988358, lng: 36.232845 },
        propertyTypeId: 6,
        cityId: 5,
        accommodationRuleId: 1
    },
    {
        id: 8,
        name: "Londonskaya SPA Hotel",
        rating: 8.6,
        address: "Primorskiy Boulevard 11, Odessa",
        description: "This property is a 6-minute walk from the beach. Offering great views of the Black Sea, this historic, classical-style hotel is within a 10-minute walk of Deribasovskaya street, Potemkin Stairs and Duke de Richelieu monument. Opera and Ballet Theater is 300 m away.",
        contactPhone: "05089079871",
        coordinates: { lat: 46.469391, lng: 30.740883 },
        propertyTypeId: 16,
        cityId: 4,
        accommodationRuleId: 1
    },
    {
        id: 9,
        name: "UNO Design Hotel",
        rating: 3.4,
        address: "Rishelievskaya Street 17, Odessa",
        description: "Stylish rooms with free WiFi and unique décor, UNO Design Hotel is just a 2-minute walk from Deribasovskaya Street and 801 m from the sandy Black Sea Coast.",
        contactPhone: "0509842174",
        coordinates: { lat: 46.469391, lng: 30.740883 },
        propertyTypeId: 9,
        cityId: 4,
        accommodationRuleId: 1
    },
    {
        id: 10,
        name: "Resort & Spa Hotel NEMO",
        rating: 7.9,
        address: "Plyazh Lanzheron 25, Odessa",
        description: "This property is a 2-minute walk from the beach. Featuring the on-site Dolphinarium, Oceanarium and the Dolphin assisted therapy center, Resort & SPA Hotel NEMO with dolphins is set in the historical center of Odessa, on Lanzheron Beach. It offers 9 heated sea-water swimming pools, fitness & spa zone, a 24-hour room service and free WiFi.",
        contactPhone: "05066789078",
        coordinates: { lat: 46.469391, lng: 30.740883 },
        propertyTypeId: 16,
        cityId: 4,
        accommodationRuleId: 1
    },
    {
        id: 11,
        name: "Odesskiy Hostel",
        rating: 4.9,
        address: "Troitskaya Street, 21, Odessa",
        description: "This hostel in Odessa city center is only 15 minutes’ walk from Odessa Central Train Station. It features a lounge area with a TV, a well-equipped kitchen and free Wi-Fi.",
        contactPhone: "09565789091",
        coordinates: { lat: 46.469391, lng: 30.740883 },
        propertyTypeId: 13,
        cityId: 4,
        accommodationRuleId: 1
    },
    {
        id: 12,
        name: "Apartment on Krushelnytskoi Street",
        rating: 7.7,
        address: "Krushelnytskoi Street 1, Ternopilʼ",
        description: "This property is a 6-minute walk from the beach. Located in Ternopilʼ in the Ternopil' region, Apartment on Krushelnytskoi Street features a balcony and lake views. The property has free WiFi.",
        contactPhone: "0674589485",
        coordinates: { lat: 49.553516, lng: 25.594767 },
        propertyTypeId: 1,
        cityId: 3,
        accommodationRuleId: 1
    },
    {
        id: 13,
        name: "Hotel Ternopil",
        rating: 8.9,
        address: "Zamkova Street 14, Ternopilʼ",
        description: "A 2-minute walk from Ternopil Lake, this hotel offers air-conditioned rooms with free Wi-Fi. Hotel Ternopil provides individually furnished rooms and suites with cable TV. Wooden flooring, large windows and pastel color schemes create a bright atmosphere.",
        contactPhone: "0956786121",
        coordinates: { lat: 49.553516, lng: 25.594767 },
        propertyTypeId: 9,
        cityId: 3,
        accommodationRuleId: 1
    },
    {
        id: 14,
        name: "Kamelot",
        rating: 7.7,
        address: "Ob'yizdna Street 6 , Ternopilʼ",
        description: "Located 8 minutes’ drive from Ternopil’s 16th-century castle, this hotel offers a sauna and air-conditioned rooms with a flat-screen TV. There is also a 24-hour reception.",
        contactPhone: "0906786876",
        coordinates: { lat: 49.553516, lng: 25.594767 },
        propertyTypeId: 2,
        cityId: 3,
        accommodationRuleId: 1
    },
    {
        id: 15,
        name: "Hotel Verhovina",
        rating: 7.9,
        address: "Petropavlivs'ka Street 24, Petropavlivs'ka Borshchahivka, Kiev",
        description: "Featuring free Wi-Fi and a restaurant with a terrace, this hotel is 7 minutes’ drive from Zhitomirskaya Metro Station in Kiev. It offers air-conditioned rooms with a flat-screen TV. All the classic-style rooms at Hotel Verhovina include a seating area and a work desk. A hairdryer is provided in the bathrooms.",
        contactPhone: "0678909456",
        coordinates: { lat: 50.471626, lng: 30.453608 },
        propertyTypeId: 9,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 16,
        name: "Tourist Hotel Complex",
        rating: 7.8,
        address: "R. Okipnoi Street 2, Kiev",
        description: "This property is a 9-minute walk from the beach. Located beside Livoberezhna Metro Station in Kiev, this modern, 3-star hotel offers 2 international restaurants, and a 24-hour reception. The International Exhibition Center is a 7-minute walk away.",
        contactPhone: "0908909422",
        coordinates: { lat: 50.471626, lng: 30.453608 },
        propertyTypeId: 9,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 17,
        name: "Hotel Kyiv",
        rating: 7.3,
        address: "Hrushevskogo Street 26/1, Kiev",
        description: "Centrally located in Kiev, each room at this hotel features balconies with views of the park. The Verkovna Rada building is a 2-minute walk away, and guests enjoy 24-hour access to the reception.",
        contactPhone: "09567893241",
        coordinates: { lat: 50.471626, lng: 30.453608 },
        propertyTypeId: 9,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 18,
        name: "City Holiday Resort & SPA",
        rating: 9.0,
        address: "Velyka Kiltseva str. 5,  Petropavlovskaya Borshagovka, Kiev",
        description: "Featuring equipped conference rooms and other business facilities, City Holiday Resort & SPA offers accommodations in Kiev, 7.4 mi from Khreshchatyk and Maidan Nezalezhnosti. Free private parking is available on site and free WiFi is provided throughout the property. There is also a free charging station for electric cars at the City Holiday Resort & SPA.",
        contactPhone: "0674594012",
        coordinates: { lat: 50.471626, lng: 30.453608 },
        propertyTypeId: 16,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 19,
        name: "MarySmart",
        rating: 7.5,
        address: "39 Mashynobudivna Street, Kiev",
        description: "Located within 6.1 km of St. Volodymyr's Cathedral and 6.4 km of Saint Sophia Cathedral in Kiev, MarySmart has accommodations with a kitchenette. Complimentary WiFi is featured.",
        contactPhone: "0674099409",
        coordinates: { lat: 50.471626, lng: 30.453608 },
        propertyTypeId: 6,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 20,
        name: "Andreevsky Guest House",
        rating: 5.4,
        address: "Vozdvyzhens'ka Street 60 B, Kiev",
        description: "Andreevsky Guest House is located in Kiev, 0.6 km from St. Michael's Golden-Domed Monastery and a 9-minute walk from Saint Sophia Cathedral. The property is around 1.8 km from St. Volodymyr's Cathedral and 2.9 km from Olympic Stadium. Kiev Pechersk Lavra is 4 km from the hotel and International Exhibition Centre is 5.5 km away.",
        contactPhone: "0955589762",
        coordinates: { lat: 50.471626, lng: 30.453608 },
        propertyTypeId: 11,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 21,
        name: "Bartolomeo",
        rating: 6.7,
        address: "Naberezhnaya Pobedy 9B, Dnipro",
        description: "This property is 1 minute walk from the beach. Bartolomeo Best River Resort in the city of Dnepropetrovsk offers 2-story wooden bungalows apartments directly on the River Dnepr. For your comfort you will find a cable TV and safe in every room. Free WiFi is available throughout the property.",
        contactPhone: "0678007800",
        coordinates: { lat: 48.4500000, lng: 34.9833300 },
        propertyTypeId: 9,
        cityId: 6,
        accommodationRuleId: 1
    },
    {
        id: 22,
        name: "Tsunami Spa Hotel",
        rating: 6.0,
        address: "Oktyabrska Pl.12A, Dnipro",
        description: "This property is a 13-minute walk from the beach. This 5-star spa hotel with pool stands beside the Savior's Transfiguration Cathedral, in the historic center of Dnipro. It offers free Wi-Fi, healthy cuisine and various spa and fitness facilities.",
        contactPhone: "0674108900",
        coordinates: { lat: 48.4500000, lng: 34.9833300 },
        propertyTypeId: 17,
        cityId: 6,
        accommodationRuleId: 1
    },
    {
        id: 23,
        name: "Apartments on Kirova",
        rating: 6.9,
        address: "Kirova Prospekt  27D, Dnipro",
        description: "Located 5 minutes’ walk from Dnipro Arena and 10 minutes’ walk from the Central Park, these apartments in Dnipropetrovsk feature free Wi-Fi and a fully equipped kitchen.",
        contactPhone: "0904118899",
        coordinates: { lat: 48.4500000, lng: 34.9833300 },
        propertyTypeId: 1,
        cityId: 6,
        accommodationRuleId: 1
    },
    {
        id: 24,
        name: "Ratusha Apartments",
        rating: 8.9,
        address: "Area of Rynok Plosha , Lviv",
        description: "Located in the historic center of Lviv, within a 10-minute walk of the City Hall, these apartments feature a fully equipped kitchen. The 15th-century Dominican Church is about 15 minutes’ walk away.",
        contactPhone: "0671129412",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 1,
        cityId: 1,
        accommodationRuleId: 1
    },
    {
        id: 25,
        name: "Avangard Franko VIP Apartment",
        rating: 6.6,
        address: "Ivana Franka Street, Lviv",
        description: "Offering free WiFi and city views, Avangard Franko VIP Apartment is a property located in the middle of Lviv. This property is 183 m from Volodymyr Ivasyuk Monument.",
        contactPhone: "0678907890",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 1,
        cityId: 1,
        accommodationRuleId: 1
    },

];

const ACCOMMODATION_RULES = [
    {
        id: 1,
        allowPets: false,
        cancelReservation: true,
        minimumStay: 1,
        arrivalTimeStart: "10:00",
        arrivalTimeEnd: "14:00",
        departureTimeStart: "10:00",
        departureTimeEnd: "12:00"
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
        propertyId: 2
    },
    {
        id: 3,
        price: 33,
        amount: 4,
        area: 29,
        roomTypeId: 2,
        propertyId: 3
    },
    {
        id: 4,
        price: 14,
        amount: 2,
        area: 18,
        roomTypeId: 2,
        propertyId: 4
    },
    {
        id: 5,
        price: 20,
        amount: 2,
        area: 41,
        roomTypeId: 2,
        propertyId: 5
    },
    {
        id: 6,
        price: 33,
        amount: 4,
        area: 67,
        roomTypeId: 2,
        propertyId: 6
    },
    //
    //
    //
    {
        id: 7,
        price: 20,
        amount: 10,
        area: 20,
        roomTypeId: 1,
        propertyId: 7
    },
    {
        id: 8,
        price: 30,
        amount: 4,
        area: 20,
        roomTypeId: 2,
        propertyId: 8
    },
    {
        id: 9,
        price: 33,
        amount: 4,
        area: 29,
        roomTypeId: 2,
        propertyId: 9
    },
    {
        id: 10,
        price: 14,
        amount: 2,
        area: 18,
        roomTypeId: 2,
        propertyId: 10
    },
    {
        id: 11,
        price: 20,
        amount: 2,
        area: 41,
        roomTypeId: 2,
        propertyId: 11
    },
    {
        id: 12,
        price: 33,
        amount: 4,
        area: 67,
        roomTypeId: 2,
        propertyId: 12
    },
    //
    //
    //
    {
        id: 13,
        price: 20,
        amount: 10,
        area: 20,
        roomTypeId: 1,
        propertyId: 13
    },
    {
        id: 14,
        price: 30,
        amount: 4,
        area: 20,
        roomTypeId: 2,
        propertyId: 14
    },
    {
        id: 15,
        price: 33,
        amount: 4,
        area: 29,
        roomTypeId: 2,
        propertyId: 15
    },
    {
        id: 16,
        price: 14,
        amount: 2,
        area: 18,
        roomTypeId: 2,
        propertyId: 16
    },
    {
        id: 17,
        price: 20,
        amount: 2,
        area: 41,
        roomTypeId: 2,
        propertyId: 17
    },
    {
        id: 18,
        price: 33,
        amount: 4,
        area: 67,
        roomTypeId: 2,
        propertyId: 18
    },
    //
    //
    //
    {
        id: 19,
        price: 20,
        amount: 10,
        area: 20,
        roomTypeId: 1,
        propertyId: 19
    },
    {
        id: 20,
        price: 30,
        amount: 4,
        area: 20,
        roomTypeId: 2,
        propertyId: 20
    },
    {
        id: 21,
        price: 33,
        amount: 4,
        area: 29,
        roomTypeId: 2,
        propertyId: 21
    },
    {
        id: 22,
        price: 14,
        amount: 2,
        area: 18,
        roomTypeId: 2,
        propertyId: 22
    },
    {
        id: 23,
        price: 20,
        amount: 2,
        area: 41,
        roomTypeId: 2,
        propertyId: 23
    },
    {
        id: 24,
        price: 33,
        amount: 4,
        area: 67,
        roomTypeId: 2,
        propertyId: 24
    },
    {
        id: 25,
        price: 33,
        amount: 4,
        area: 67,
        roomTypeId: 2,
        propertyId: 25
    },
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
            "https://www.publicdomainpictures.net/pictures/270000/velka/classic-interior-lifestyle.jpg",
        propertyId: 2
    },
    {
        id: 3,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/947-1262818585EUqs.jpg",
        propertyId: 2
    },
    {
        id: 4,
        url:
            "https://www.publicdomainpictures.net/pictures/60000/velka/world-famous-las-vegas.jpg",
        propertyId: 1
    },
    {
        id: 5,
        url:
            "https://www.publicdomainpictures.net/pictures/20000/velka/holiday-resort-11296473620ggd.jpg",
        propertyId: 3
    },
    {
        id: 6,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/spa-331285343005txlT.jpg",
        propertyId: 3
    },
    {
        id: 7,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/1-1265292839YS1S.jpg",
        propertyId: 4
    },
    {
        id: 8,
        url:
            "https://www.publicdomainpictures.net/en/view-image.php?image=95146&picture=hotel-room",
        propertyId: 4
    },
    {
        id: 9,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/beds-331285342771uoMx.jpg",
        propertyId: 5
    },
    {
        id: 10,
        url:
            "https://www.publicdomainpictures.net/pictures/50000/velka/hotel.jpg",
        propertyId: 5
    },
    {
        id: 11,
        url:
            "https://www.publicdomainpictures.net/pictures/20000/velka/hotel-a-madrid.jpg",
        propertyId: 6
    },
    {
        id: 12,
        url:
            "https://www.publicdomainpictures.net/pictures/70000/velka/hotel-room.jpg",
        propertyId: 6
    },
    {
        id: 13,
        url:
            "https://www.publicdomainpictures.net/pictures/80000/velka/un-decor-de-gemma-4.jpg",
        propertyId: 7
    },
    {
        id: 14,
        url:
            "https://www.publicdomainpictures.net/pictures/70000/velka/un-decor-de-gemma-1.jpg",
        propertyId: 7
    },
    {
        id: 15,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/log-home-1492017294F88.jpg",
        propertyId: 8
    },
    {
        id: 16,
        url:
            "https://www.publicdomainpictures.net/pictures/130000/velka/a-sleeping-cat.jpg",
        propertyId: 8
    },
    {
        id: 17,
        url:
            "https://www.publicdomainpictures.net/pictures/210000/velka/living-room-1490132509L6W.jpg",
        propertyId: 9
    },
    {
        id: 18,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/2608-1273404731jPsY.jpg",
        propertyId: 9
    },
    {
        id: 19,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/1453-125183103390v0.jpg",
        propertyId: 10
    },
    {
        id: 20,
        url:
            "https://www.publicdomainpictures.net/pictures/10000/velka/954-1236363893mO6T.jpg",
        propertyId: 10
    },
    {
        id: 21,
        url:
            "https://www.publicdomainpictures.net/pictures/40000/velka/room-at-xmas.jpg",
        propertyId: 11
    },
    {
        id: 22,
        url:
            "https://www.publicdomainpictures.net/pictures/40000/velka/shabby-chi-room-in-magestic-setting.jpg",
        propertyId: 11
    },
    {
        id: 23,
        url:
            "https://www.publicdomainpictures.net/pictures/40000/velka/my-room.jpg",
        propertyId: 12
    },
    {
        id: 24,
        url:
            "https://www.publicdomainpictures.net/pictures/60000/velka/motel-room-1.jpg",
        propertyId: 12
    },
    {
        id: 25,
        url:
            "https://www.publicdomainpictures.net/pictures/60000/velka/pokoj-z-minuleho-stoleti.jpg",
        propertyId: 13
    },
    {
        id: 26,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/living-room-1491698999utS.jpg",
        propertyId: 13
    },
    {
        id: 27,
        url:
            "https://www.publicdomainpictures.net/pictures/210000/velka/dining-room-with-view.jpg",
        propertyId: 14
    },
    {
        id: 28,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/city-view-1491702306XdV.jpg",
        propertyId: 14
    },
    {
        id: 29,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/storing-and-canning-room.jpg",
        propertyId: 15
    },
    {
        id: 30,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/public-domain-pictures-14944035015kq.jpg",
        propertyId: 15
    },
    {
        id: 31,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/public-domain-pictures-1495445493h97.jpg",
        propertyId: 16
    },
    {
        id: 32,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/empty-home-with-view.jpg",
        propertyId: 16
    },
    {
        id: 33,
        url:
            "https://www.publicdomainpictures.net/pictures/220000/velka/childs-bedroom.jpg",
        propertyId: 17
    },
    {
        id: 34,
        url:
            "https://www.publicdomainpictures.net/pictures/230000/velka/decorated-chamber.jpg",
        propertyId: 17
    },
    {
        id: 35,
        url:
            "https://www.publicdomainpictures.net/pictures/230000/velka/room-interior.jpg",
        propertyId: 18
    },
    {
        id: 36,
        url:
            "https://www.publicdomainpictures.net/pictures/230000/velka/bett-15018372700cY.jpg",
        propertyId: 18
    },
    {
        id: 37,
        url:
            "https://www.publicdomainpictures.net/pictures/80000/velka/bedroom-deluxe.jpg",
        propertyId: 19
    },
    {
        id: 38,
        url:
            "https://www.publicdomainpictures.net/pictures/90000/velka/living-room.jpg",
        propertyId: 19
    },
    {
        id: 39,
        url:
            "https://www.publicdomainpictures.net/pictures/100000/velka/une-nuit-a-montreal.jpg",
        propertyId: 20
    },
    {
        id: 40,
        url:
            "https://www.publicdomainpictures.net/pictures/100000/velka/salle-a-manger-antiquesalle-a-mange.jpg",
        propertyId: 20
    },
    {
        id: 41,
        url:
            "https://www.publicdomainpictures.net/pictures/100000/velka/hotel-room-1408755932hPV.jpg",
        propertyId: 21
    },
    {
        id: 42,
        url:
            "https://www.publicdomainpictures.net/pictures/130000/velka/attic-room-arched-windows.jpg",
        propertyId: 21
    },
    {
        id: 43,
        url:
            "https://www.publicdomainpictures.net/pictures/130000/velka/arched-windows-with-balcony.jpg",
        propertyId: 22
    },
    {
        id: 44,
        url:
            "https://www.publicdomainpictures.net/pictures/160000/velka/roof-balcony.jpg",
        propertyId: 22
    },
    {
        id: 45,
        url:
            "https://www.publicdomainpictures.net/pictures/240000/velka/hotel-1509208862T59.jpg",
        propertyId: 23
    },
    {
        id: 46,
        url:
            "https://www.publicdomainpictures.net/pictures/240000/velka/the-reading-room.jpg",
        propertyId: 23
    },
    {
        id: 47,
        url:
            "https://www.publicdomainpictures.net/pictures/240000/velka/decor-de-gemma-1.jpg",
        propertyId: 24
    },
    {
        id: 48,
        url:
            "https://www.publicdomainpictures.net/pictures/240000/velka/decor-de-gemma-7.jpg",
        propertyId: 24
    },
    {
        id: 50,
        url:
            "https://www.publicdomainpictures.net/pictures/240000/velka/sitting-room-with-grand-piano.jpg",
        propertyId: 25
    },
    {
        id: 51,
        url:
            "https://www.publicdomainpictures.net/pictures/270000/velka/ghostly-vintage-dance.jpg",
        propertyId: 25
    },
    {
        id: 52,
        url:
            "https://www.publicdomainpictures.net/pictures/270000/velka/bedroom-interior.jpg",
        propertyId: 1
    },
];

const RESERVATIONS = [
    {
        id: 1,
        dateIn: "2018-08-29",
        dateOut: "2018-08-30",
        guestsCount: 3,
        userId: 1,
        roomId: 1,
        paymentTypeId: 1
    },
    {
        id: 2,
        dateIn: "2018-08-31",
        dateOut: "2018-09-01",
        guestsCount: 2,
        userId: 1,
        roomId: 2,
        paymentTypeId: 1
    }
];

const FACILITY_LISTS = [
    {
        id: 1,
        propertyId: 1,
        facilityId: 1
    },
    {
        id: 2,
        propertyId: 2,
        facilityId: 4
    },
    {
        id: 3,
        propertyId: 1,
        facilityId: 3
    },
    {
        id: 4,
        propertyId: 2,
        facilityId: 2
    },
    {
        id: 5,
        propertyId: 3,
        facilityId: 1
    },
    {
        id: 6,
        propertyId: 4,
        facilityId: 4
    },
    {
        id: 7,
        propertyId: 3,
        facilityId: 3
    },
    {
        id: 8,
        propertyId: 4,
        facilityId: 2
    },
    {
        id: 9,
        propertyId: 5,
        facilityId: 1
    },
    {
        id: 10,
        propertyId: 6,
        facilityId: 4
    },
    {
        id: 11,
        propertyId: 5,
        facilityId: 3
    },
    {
        id: 12,
        propertyId: 6,
        facilityId: 2
    },
    {
        id: 13,
        propertyId: 7,
        facilityId: 1
    },
    {
        id: 14,
        propertyId: 8,
        facilityId: 4
    },
    {
        id: 15,
        propertyId: 7,
        facilityId: 3
    },
    {
        id: 16,
        propertyId: 8,
        facilityId: 2
    },
    {
        id: 17,
        propertyId: 9,
        facilityId: 1
    },
    {
        id: 18,
        propertyId: 10,
        facilityId: 4
    },
    {
        id: 19,
        propertyId: 9,
        facilityId: 3
    },
    {
        id: 20,
        propertyId: 10,
        facilityId: 2
    },
    {
        id: 21,
        propertyId: 11,
        facilityId: 1
    },
    {
        id: 22,
        propertyId: 12,
        facilityId: 4
    },
    {
        id: 23,
        propertyId: 11,
        facilityId: 3
    },
    {
        id: 24,
        propertyId: 12,
        facilityId: 2
    },
    {
        id: 25,
        propertyId: 13,
        facilityId: 1
    },
    {
        id: 26,
        propertyId: 14,
        facilityId: 4
    },
    {
        id: 27,
        propertyId: 13,
        facilityId: 3
    },
    {
        id: 28,
        propertyId: 14,
        facilityId: 2
    },
    {
        id: 29,
        propertyId: 15,
        facilityId: 1
    },
    {
        id: 30,
        propertyId: 16,
        facilityId: 4
    },
    {
        id: 31,
        propertyId: 15,
        facilityId: 3
    },
    {
        id: 32,
        propertyId: 16,
        facilityId: 2
    },
    {
        id: 33,
        propertyId: 17,
        facilityId: 1
    },
    {
        id: 34,
        propertyId: 18,
        facilityId: 4
    },
    {
        id: 35,
        propertyId: 17,
        facilityId: 3
    },
    {
        id: 36,
        propertyId: 18,
        facilityId: 2
    },
    {
        id: 37,
        propertyId: 19,
        facilityId: 1
    },
    {
        id: 38,
        propertyId: 20,
        facilityId: 4
    },
    {
        id: 39,
        propertyId: 19,
        facilityId: 3
    },
    {
        id: 40,
        propertyId: 20,
        facilityId: 2
    },
    {
        id: 41,
        propertyId: 21,
        facilityId: 1
    },
    {
        id: 42,
        propertyId: 22,
        facilityId: 1
    },
    {
        id: 43,
        propertyId: 21,
        facilityId: 1
    },
    {
        id: 44,
        propertyId: 22,
        facilityId: 1
    },
    {
        id: 45,
        propertyId: 23,
        facilityId: 3
    },
    {
        id: 46,
        propertyId: 24,
        facilityId: 2
    },
    {
        id: 47,
        propertyId: 23,
        facilityId: 1
    },
    {
        id: 48,
        propertyId: 24,
        facilityId: 1
    },
    {
        id: 49,
        propertyId: 25,
        facilityId: 1
    },
    {
        id: 50,
        propertyId: 25,
        facilityId: 1
    },
];

const BED_IN_ROOMS = [
    {
        count: 1,
        roomId: 1,
        bedTypeId: 1
    },
    {
        count: 1,
        roomId: 2,
        bedTypeId: 2
    },
    {
        count: 1,
        roomId: 2,
        bedTypeId: 1
    }
];

const COUNTRIES = [
    {
        id: 1,
        name: "Ukraine",

        cities: [
            {
                id: 1,
                name: "Lviv",
                imageUrl: "http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg"
            },
            {
                id: 2,
                name: "Kiev",
                imageUrl: "https://s.inyourpocket.com/gallery/130361.jpg"
            },
            {
                id: 3,
                name: "Ternopil",
                imageUrl: "http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg"
            },
            {
                id: 4,
                name: "Odessa",
                imageUrl: "https://www.hotel-deribas.com/wp-content/uploads/2018/03/19odessa.jpg"
            },
            {
                id: 5,
                name: "Kharkiv",
                imageUrl: "http://www.yoldasin.com/wp-content/uploads/2017/04/kharkiv-tren-istasyonu-960x638.jpg"
            },
            {
                id: 6,
                name: "Dnipro",
                imageUrl: "http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "Poland",
        cities: [
            {
                id: 7,
                name: "Kraków",
                imageUrl: "https://tripmydream.cc/travelhub/blog/blog/36/1/block_361.jpg?v1"
            },
            {
                id: 8,
                name: "Warsaw",
                imageUrl: "https://ticketspy.nl/wp-content/uploads/2014/08/Dollarphotoclub_43324037-1024x682.jpg?x43213"
            },
            {
                id: 9,
                name: "Gdańsk",
                imageUrl: "https://api.culture.pl/sites/default/files/2018-04/gdansk_fot_sizun_eyegettyimages.jpg"
            },
            {
                id: 10,
                name: "Poznań",
                imageUrl: "https://prex.com.ua/wp-content/uploads/2017/08/119801-Poznan.jpg.pagespeed.ce.ZttXnv9K1t.jpg"
            },
            {
                id: 11,
                name: "Katowice",
                imageUrl: "https://m.blog.hu/sa/sakk-mester/image//katowice.jpg"
            },
            {
                id: 12,
                name: "Rzeszów",
                imageUrl: "http://blog.kudoybook.com/wp-content/uploads/images/Rzeszow_9867.jpg"
            }
        ]
    },
    {
        id: 3,
        name: "Austria",
        cities: [
            {
                id: 13,
                name: "Vienna",
                imageUrl: "https://www.rosewoodhotels.com/en/~/media/Images/Rosewood_Hotels_and_Resorts/Rosewood_Vienna/Homepage_1.ashx"
            },
            {
                id: 14,
                name: "Bregenz",
                imageUrl: "http://www.bodensee.eu/regionen-staedte/oesterreich/bodensee-vorarlberg/staedte/bregenz/image-thumb__338__lightbox/bregenz.jpeg"
            },
            {
                id: 15,
                name: "Salzburg",
                imageUrl: "https://www.planetware.com/photos-large/A/austria-salzburg-where-to-stay-skyline.jpg"
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
    ACCOMMODATION_RULES,
    FACILITY_LISTS,
    ROOMS,
    RESERVATIONS,
    IMAGES,
    COUNTRIES,
    DISCOUNTS,
    PAYMENT_TYPES,
    ROLES,
    FACILITY_CATEGORIES,
    REVIEW_CATEGORIES,
    BED_IN_ROOMS,
    BED_TYPES,
    ROOM_TYPES,
    PROPERTY_TYPE
};
