const bcrypt = require("bcrypt");

const USERS = [
    {
        id: 1,
        fullName: "Natalya",
        password: bcrypt.hashSync("nata1NATA", 10),
        email: "natalya@gmail.com",
        phoneNumber: "80504958671",
        nickname: "Nata1ya",
        address: "Nebereshnaya street 20, Lviv",
        appeal: "Mrs.",
        preferredCurrency: "USD",
        countryId: 1,
        paymentTypeId: 1,
        verifyEmailToken: "verified"
    },
    {
        id: 2,
        fullName: "Nikolay Datsko",
        password: bcrypt.hashSync("102938abC", 10),
        email: "lorem@gmail.com",
        phoneNumber: "80954568261",
        nickname: "Lorem",
        appeal: "Mrs.",
        preferredCurrency: "USD",
        countryId: 1,
        paymentTypeId: 1
    }
];

let PROPERTIES = [
    {
        id: 1,
        name: "Ukraine Hotel",
        rating: 7.3,
        address: "Institutskaya Street 4, Kiev",
        description:
            "This property is 15 minutes walk from the beach. Located on Independence Square in the heart of Kiev, this hotel offers air-conditioned rooms and suites with elegant décor. It is a 3-minute walk from the Maidan Nezalezhnosti and Kreschatik Metro Stations. In-room facilities at the Ukraine Hotel include satellite TV and a refrigerator. Your bathroom includes free toiletries and perfumes. Guests enjoy views of the Kreschatyk Street and the surrounding area. A large breakfast buffet is available at the Ukraine Hotel, and 24-hour room service is offered. Ukrainian and European cuisine is served for lunch and dinner. Live music is sometimes played here. The hotel features a beauty salon, sauna and massage facilities. A private laundry service is also available. Hotel Ukraine is a 10-minute walk from Mariyinsky Park and the St. Sofia Cathedral. Secure parking is available on site. Pecherskyj is a great choice for travellers interested in restaurants, food and friendly locals. This is our guests' favourite part of Kiev, according to independent reviews. This property also has one of the best-rated locations in Kiev! Guests are happier about it compared to other properties in the area.",
        contactPhone: "0509832174",
        coordinates: { lat: 50.44857, lng: 30.52734 },
        distanceToCentre: 1.7,
        userId: 1,
        propertyTypeId: 9,
        cityId: 2,
        accommodationRuleId: 1,
        currencyId: 3,
    },
    {
        id: 2,
        name: "Hotel Dolynskyi",
        rating: 4.5,
        address: "Dolyns'koho Street 2A, Lviv",
        description: `Providing free WiFi, Hotel Dolynskiy is set in Lviv. This property is situated a short distance from attractions such as The St. Onuphrius Church and Monastery and The Church of St. Nicholas. The property is 700 m from The High Castle Park and a 9-minute walk from Zankovetski Drama Theater.
        At the hotel, rooms are equipped with a wardrobe. The private bathroom is equipped with free toiletries. Lviv State Academic Opera and Ballet Theater is 800 m from Hotel Dolynskiy, while The Armenian Cathedral is a 10-minute walk away. The nearest airport is Lviv International Airport, 7 km from the accommodation. This is our guests' favourite part of Lviv, according to independent reviews.`,
        contactPhone: "0509842174",
        coordinates: { lat: 49.850813, lng: 24.028545 },
        propertyTypeId: 9,
        userId: 1,
        distanceToCentre: 0.7,
        cityId: 1,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 3,
        name: "Hotel Atlas Deluxe",
        rating: 4.4,
        address: "Prospekt Shevchenka 27, Lviv",
        description:
            "Hotel Atlas Deluxe is located in the heart of Lviv, within a 2-minute walk of Ploshcha Rynok Square and a 10-minute walk of Ivana Franko Park. It offers a sauna, fitness centre and concierge service. The classic-style air-conditioned rooms feature a flat-screen TV with satellite channels. The bathroom comes with a hairdryer and free toiletries. Guests can order a meal in the on-site restaurant. After a busy day, you can enjoy your favourite drink at the bar. Lviv Train Station is within a 10-minute drive of Hotel Atlas Deluxe. A shuttle to Lviv International Airport (6.5 km) is available at surcharge. This is our guests' favourite part of Lviv, according to independent reviews.",
        contactPhone: "0678674908",
        coordinates: { lat: 49.835743, lng: 24.032616 },
        propertyTypeId: 9,
        distanceToCentre: 1.1,
        cityId: 1,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 4,
        name: "Rius Hotel",
        rating: 7.0,
        address: "12A Hnatiuka St, Lviv",
        description:
            "Located in the city centre of Lviv, less than a 2-minute walk from Svobody Prospekt and a 5-minute walk from Market Square, Rius hotel features free Wi-Fi throughout the property. The modern rooms here provide guests with panoramic windows with a city view, a minibar, a balcony or a terrace, a flat-screen TV with satellite channels, air conditioning, and a private bathroom with a bath or shower. The Lviv Theatre of Opera and Ballet is a 6-minute walk, and the City Hall is a 7-minute walk away. Rius hotel is 2.5 km from Lviv Train Station, 1 km from Doroshenka tram stop, and 7 km from Lviv International Airport. Guarded underground parking is provided. This is our guests' favourite part of Lviv, according to independent reviews. This property also has one of the best-rated locations in Lviv! Guests are happier about it compared to other properties in the area.",
        contactPhone: "0955679712",
        coordinates: { lat: 49.841931, lng: 24.024986 },
        propertyTypeId: 9,
        distanceToCentre: 0.2,
        cityId: 1,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 5,
        name: "British Club Lviv",
        rating: 7.1,
        address: "Nalyvaika Street 18, Lviv",
        description:
            "This hotel is located in the historic centre of Lviv, just a 10-minute walk from Ploschad Rynok Square. Free Wi-Fi and a 24-hour reception are featured at British Club Lviv. The elegant, air-conditioned rooms and apartments of this hotel are decorated in classical English style. Each one includes a flat-screen TV, a refrigerator and a private bathroom with bathrobes and a hairdryer. Breakfast is served every morning in the hotel’s dining area. Lviv Opera Theatre is just a 2-minute walk away, and Ivana Franko Park is a 5-minute walk from the hotel. A bus stop on Prospekt Svobody is 150 m from British Club Lviv. Lviv Central Train Station is 2.5 km away, and Lviv International Airport is 6 km from the hotel. ",
        contactPhone: "0509842174",
        coordinates: { lat: 49.84325, lng: 24.02388 },
        propertyTypeId: 9,
        distanceToCentre: 2.7,
        cityId: 1,
        accommodationRuleId: 1,
        currencyId: 3,
    },
    {
        id: 6,
        name: "Complimente Guest House",
        rating: 7.3,
        address: "Pereulok Kravtsova 13 V, Kharkov",
        description:
            "This guest house is located in the centre of Kharkov, a 5-minute walk from Konstitutsii Square. Free Wi-Fi, a 24-hour reception and private parking are featured at Complimente Guest House. The bright, air-conditioned rooms are decorated in classic style. Every room includes a flat-screen TV, a kitchenette equipped with a fridge and a private bathroom. A hairdryer is available. The on-site café serves European cuisine, and a selection of drinks is available at the bar. Kharkov Opera and Ballet Theatre is a 7-minute walk away, and the Shevchenko Park is within a walking distance of the guest house. Istoricheskiy Muzey and Sovetskaya Metro Stations are 500 m from Complimente Guest House. Kharkov Central Train Station is 5 km away, and Kharkov Airport is 12 km from the guest house. This is our guests' favourite part of Kharkov, according to independent reviews.",
        contactPhone: "0674569222",
        coordinates: { lat: 49.995886, lng: 36.228966 },
        propertyTypeId: 5,
        distanceToCentre: 3.7,
        cityId: 5,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 7,
        name: "Pletnevskiy Inn",
        rating: 7.3,
        address:
            "Kooperatyvna St. 6/8 (entrance from Pletnevskiy lane), Kharkov",
        description:
            "Featuring free WiFi throughout the property, Pletnevskiy Inn offers accommodation in the historical building in the centre of Kharkov. Guests can enjoy the on-site restaurant. Every room at this hotel is air conditioned and is equipped with a flat-screen TV with cable channels. Certain units include a seating area to relax in after a busy day. You will find a kettle in the room. Every room has a private bathroom fitted with a shower. Extras include bathrobes, slippers and free toiletries. You will find a 24-hour front desk and a concierge service at the property. The on-site parking is available. Metallist Stadium is 2.1 km from Pletnevskiy Inn, while Kharkov Historical Museum is 700 m from the property. The nearest Metro Station is Maidan Konstitutzii, 700 m from property. The nearest airport is Kharkiv International Airport, 8 km from the property. ",
        contactPhone: "0896789099",
        coordinates: { lat: 49.986943, lng: 36.233579 },
        propertyTypeId: 6,
        distanceToCentre: 1.4,
        cityId: 5,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 8,
        name: "Londonskaya SPA Hotel",
        rating: 7.3,
        address: "Primorskiy Boulevard 11, Odessa",
        description:
            "his property is 6 minutes walk from the beach. Offering great views of the Black Sea, this historic, classical-style hotel is within a 10-minute walk of Deribasovskaya street, Potemkin Stairs and Duke de Richelieu monument. Opera and Ballet Theatre is 300 m away. Spacious, soundproofed rooms and suites provide a flat-screen TV, desk and safety deposit box. A three-storeyed spa area features a hammam, spa bath, 2 swimming pool and gym. Guests can also enjoy a wide range of massages and cosmetology treatments. The on-site restaurant serves traditional Ukrainian and European cuisine. In summer, guests can dine in the paio. Airport shuttles can be booked at the Londonskaya’s 24-hour reception. The hotel is 2 km from Odessa Train Station and 10 km from Odessa International Airport. Primorsky is a great choice for travellers interested in food, restaurants and architecture.",
        contactPhone: "05089079871",
        coordinates: { lat: 46.486877, lng: 30.741964 },
        propertyTypeId: 16,
        distanceToCentre: 3.7,
        cityId: 4,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 9,
        name: "UNO Design Hotel",
        rating: 7.3,
        address: "Rishelievskaya Street 17, Odessa",
        description:
            "Stylish rooms with free WiFi and unique décor, UNO Design Hotel is just a 2-minute walk from Deribasovskaya Street and 800 m from the sandy Black Sea Coast. UNO Design Hotel offers spacious suites and rooms with a flat-screen TV and a fully equipped kitchenette. Slippers and toiletries are provided. There are many restaurants and bars within walking distance of UNO Design Hotel. The property is centrally located in the city, just a 5-minute walk from sights such as Odessa Opera and Ballet House and the Potemkin Steps. Odessa Main Train Station is a 10-minute drive and Odessa International Airport is 30 minutes' away by car. Primorsky is a great choice for travellers interested in food, restaurants and architecture. This is our guests' favourite part of Odessa, according to independent reviews.",
        contactPhone: "0509842174",
        coordinates: { lat: 46.479989, lng: 30.740628 },
        propertyTypeId: 9,
        distanceToCentre: 1.5,
        cityId: 4,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 10,
        name: "Resort & Spa Hotel NEMO",
        rating: 7.3,
        address: "Plyazh Lanzheron 25, Odessa",
        description:
            "This property is 2 minutes walk from the beach. Featuring the on-site Dolphinarium, Oceanarium and the Dolphin assisted therapy centre, Resort & SPA Hotel NEMO with dolphins is set in the historical centre of Odessa, on Lanzheron Beach. It offers 9 heated sea-water swimming pools, fitness & spa zone, a 24-hour room service and free WiFi. All rooms are air-conditioned and come with a balcony, flat-screen TV, a safety deposit box and minibar. All suites feature a spa bath. Guests can enjoy Ukrainian, European and Japanese cuisine in the hotel's restaurant, or have a drink at the bar. Odessa city centre is a 5-minute drive from Resort & Spa Hotel Nemo with dolphins. Central Train Station is a 10-minute drive from the resort. Odessa International Airport is 10 km away. Primorsky is a great choice for travellers interested in food, restaurants and architecture.",
        contactPhone: "05066789078",
        coordinates: { lat: 46.477551, lng: 30.764932 },
        propertyTypeId: 16,
        distanceToCentre: 6.7,
        cityId: 4,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 11,
        name: "Odesskiy Hostel",
        rating: 7.3,
        address: "Troitskaya Street, 21, Odessa",
        description:
            "This hostel in Odessa city centre is only 15 minutes’ walk from Odessa Central Train Station. It features a lounge area with a TV, a well-equipped kitchen and free Wi-Fi. Hostel-Hotel Odesskiy offers shared dormitory rooms with access to shared bathroom facilities. Every room is heated, and includes a desk and wardrobe. Guests at Hostel-Hotel Odesskiy can use the accommodation’s shared kitchen facilities to prepare meals. The kitchen includes a refrigerator, microwave and electric kettle, and a super market is located next door. Odessa attractions such as the Opera and Ballet Theatre and Odessa Philharmonic can be found within 1 km from the hostel. Chernomorets football stadium is only 300 m away. The hostel is located 7 km from Odessa Airport and a public bus runs from here to Troitskaya bus stop, 50 m from the hostel. Primorsky is a great choice for travellers interested in food, restaurants and architecture. This is our guests' favourite part of Odessa, according to independent reviews.",
        contactPhone: "09565789091",
        coordinates: { lat: 46.476261, lng: 30.743401 },
        propertyTypeId: 13,
        distanceToCentre: 8.7,
        cityId: 4,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 12,
        name: "Apartment on Krushelnytskoi Street",
        rating: 7.3,
        address: "Krushelnytskoi Street 1, Ternopilʼ",
        description: `This property is 6 minutes walk from the beach. Set in Ternopilʼ in the Ternopil region, Apartment on Krushelnytskoi Street features a balcony and lake views. This apartment offers accommodation with free WiFi.

            Featuring city views, the apartment is composed of 2 bedrooms and 1 bathroom with free toiletries and a hair dryer. The kitchen has an oven, a microwave and a toaster, as well as kettle.

            Guests can also relax in the shared lounge area.

            This property also has one of the best-rated locations in Ternopilʼ!`,
        contactPhone: "0674589485",
        coordinates: { lat: 49.557224, lng: 25.591945 },
        propertyTypeId: 1,
        distanceToCentre: 1.9,
        cityId: 3,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 13,
        name: "Hotel Ternopil",
        rating: 7.3,
        address: "Zamkova Street 14, Ternopilʼ",
        description: `A 2-minute walk from Ternopil Lake, this hotel offers air-conditioned rooms with free Wi-Fi.

            Hotel Ternopil provides individually furnished rooms and suites with cable TV. Wooden flooring, large windows and pastel colour schemes create a bright atmosphere.

            A breakfast buffet is provided each morning. Ukrainian and European meals are served in the Panorama restaurant.

            Guests can also visit a beauty salon, Pryma, offering massage sessions.

            Many shops and restaurants are within a 5-minute walk of the Hotel Ternopil. Ternopil Train Station is within a 15-minute walk and Ternopil Airport is a 15-minute drive away. `,
        contactPhone: "0956786121",
        coordinates: { lat: 49.552459, lng: 25.588378 },
        propertyTypeId: 9,
        distanceToCentre: 9.7,
        cityId: 3,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 14,
        name: "Kamelot",
        rating: 7.3,
        address: "Ob'yizdna Street 6 , Ternopilʼ",
        description: `Located 8 minutes’ drive from Ternopil’s 16th-century castle, this hotel offers a sauna and air-conditioned rooms with a flat-screen TV. There is also a 24-hour reception.

            All the modern rooms at Kamelot Hotel are decorated in neutral colours with wooden furnishings. A hairdryer is provided in bathrooms.

            Kamelot’s elegant restaurant serves Ukrainian and European cuisine. Fine wine and other drinks can be ordered at the on-site bar.

            Guests of Hotel Kamelot can relax in the Finnish sauna and cool off in the indoor swimming pool. A massage service is also available.

            Kamelot Hotel is 8 minutes’ drive from Ternopil Train Station and the 18th-century Dominican Church. Ternopil Airport is 15 minutes’ drive away.`,
        contactPhone: "0906786876",
        coordinates: { lat: 49.532944, lng: 25.625296 },
        propertyTypeId: 2,
        distanceToCentre: 1.5,
        cityId: 3,
        accommodationRuleId: 1,
        currencyId: 3,
    },
    {
        id: 15,
        name: "Hotel Verhovina",
        rating: 7.3,
        address:
            "Petropavlivs'ka Street 24, Petropavlivs'ka Borshchahivka, Kiev",
        description: `Featuring free Wi-Fi and a restaurant with a terrace, this hotel is 7 minutes’ drive from Zhitomirskaya Metro Station in Kiev. It offers air-conditioned rooms with a flat-screen TV.

            All the classic-style rooms at Hotel Verhovina include a seating area and a work desk. A hairdryer is provided in the bathrooms.

            The Verhovina’s restaurant serves Ukrainian and Russian dishes, which can be enjoyed on the summer terrace. Cocktails and drinks are offered at the on-site bar.

            Kiev city centre with Maidan Nezalezhnosti Square is 20 minutes’ metro ride from Hotel Verhovina, and Kiev Train Station is 15 minutes away by metro. Boryspil Airport is 50 km from the hotel.`,
        contactPhone: "0678909456",
        coordinates: { lat: 50.442993, lng: 30.355522 },
        propertyTypeId: 9,
        distanceToCentre: 4.7,
        cityId: 2,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 16,
        name: "Tourist Hotel Complex",
        rating: 7.8,
        address: "R. Okipnoi Street 2, Kiev",
        description: `This property is 9 minutes walk from the beach. Located beside Livoberezhna Metro Station in Kiev, this modern, 3-star hotel offers 2 international restaurants, and a 24-hour reception. The International Exhibition Centre is a 7-minute walk away.

            The Tourist Hotel Complex has classic-style rooms and suites with satellite TV, refrigerator, and desk. Wi-Fi is available in the property free of charge.

            The restaurant serves Ukrainian and European specialities. Japanese food can be enjoyed in the sushi bar. Fine drinks are served in the snack bar on the 20th floor. Several restaurants, supermarkets, bars, and eateries are in the vicinity of Tourist Hotel Complex.

            Kiev Central Station is a 15 minutes' drive away by metro. Borispol Airport is a 40 minutes' drive away. Public parking spaces are available outside Tourist Hotel Complex on request.

            Dniprovskyj is a great choice for travellers interested in sightseeing, friendly locals and history.`,
        contactPhone: "0908909422",
        coordinates: { lat: 50.450798, lng: 30.597152 },
        propertyTypeId: 9,
        distanceToCentre: 3.7,
        cityId: 2,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 17,
        name: "Hotel Kyiv",
        rating: 7.3,
        address: "Hrushevskogo Street 26/1, Kiev",
        description: `Centrally located in Kiev, each room at this hotel features balconies with views of the park. The Verkovna Rada building is a 2-minute walk away, and guests enjoy 24-hour access to the reception.

            The elegant rooms at Hotel Complex Kyiv feature individual colour schemes, and come with a flat-screen TV. Each room has air conditioning, and bathrobes are provided in the en suite bathroom.

            Ukranian and European specialities are served in the stylish Complex Kyiv restaurant, and refreshments are available at the 24-hour snack bar. A buffet breakfast is provided.

            Mariinsky Palace is a 5-minute walk from the hotel, and Independence Square is a 15-minute walk away. Arsenalna Metro Station is a 5-minute walk from the hotel and provides links to St Volodymyr’s Cathedral.

            Kiev Airport is a 40-minute drive from the hotel, and Kiev Main Station is a 20-minute drive away. `,
        contactPhone: "09567893241",
        coordinates: { lat: 50.445877, lng: 30.537976 },
        propertyTypeId: 9,
        distanceToCentre: 7.7,
        cityId: 2,
        accommodationRuleId: 1,
        currencyId: 3,
    },
    {
        id: 18,
        name: "City Holiday Resort & SPA",
        rating: 7.3,
        address: "Velyka Kiltseva str. 5,  Petropavlovskaya Borshagovka, Kiev",
        description: `Featuring equipped conference rooms and other business facilities, City Holiday Resort & SPA offers accommodation in Kiev, 11.9 km from Khreshchatyk and Maidan Nezalezhnosti. Free private parking is available on site and free WiFi is provided throughout the property. There is also a free charging station for electric cars at the City Holiday Resort & SPA.

            The hotel's spa centre boasts an indoor pool and a seasonal outdoor pool. Similarly, there are 2 pools for children, indoors and outdoors. There is also a sauna, a massage parlour and a gym. A variety of treatments is offered to guests.

            The air-conditioned rooms of City Holiday Resort & SPA come with a flat-screen satellite TV, a minibar and a safety deposit box. Some rooms have a seating area where you can relax. The private bathrooms feature underfloor heating and are fitted with a shower and bidet. For your comfort, you will find bathrobes and slippers.

            Guests can enjoy dishes of European cuisine at City Holiday and Vinette on-site restaurants, or have a drink at the 24-hour lobby bar of the hotel.

            City Holiday Resort & SPA's front desk operates around the clock and offers car rental, concierge, tour desk and ticket services.

            The nearest airport is Zhuliany Airport, 6 km from City Holiday Resort & SPA. `,
        contactPhone: "0674594012",
        coordinates: { lat: 50.432374, lng: 30.35915 },
        propertyTypeId: 16,
        distanceToCentre: 1.3,
        cityId: 2,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 19,
        name: "MarySmart",
        rating: 7.3,
        address: "39 Mashynobudivna Street, Kiev",
        description: `Situated within 6 km of St. Volodymyr's Cathedral in Kiev, MarySmart features accommodation with a kitchenette. Complimentary WiFi is featured.

            All units include a private bathroom and have air conditioning, a flat-screen TV and a microwave. A fridge and kettle are also provided.

            Saint Sophia Cathedral is 7 km from the apartment. `,
        contactPhone: "0674099409",
        coordinates: { lat: 50.449413, lng: 30.423436 },
        propertyTypeId: 6,
        distanceToCentre: 3.7,
        cityId: 2,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 20,
        name: "Andreevsky Guest House",
        rating: 7.3,
        address: "Vozdvyzhens'ka Street 60 B, Kiev",
        description: ` One of our bestsellers in Kiev!
            Andreevsky Guest House is located in Kiev, 700 m from St. Michael's Golden-Domed Monastery and a 9-minute walk from Saint Sophia Cathedral. The property is around 1.7 km from St. Volodymyr's Cathedral and 2.9 km from Olympic Stadium. Kiev Pechersk Lavra is 4 km from the hotel and International Exhibition Centre is 6 km away.

            The units in the hotel are fitted with a kettle. Every room is fitted with a private bathroom with a hair dryer, while certain rooms include a kitchenette with a microwave.

            Languages spoken at the 24-hour front desk include English, Russian and Ukrainian.

            Expocentre of Ukraine is 9 km from Andreevsky Guest House.

            Podilskyj is a great choice for travellers interested in old town exploring, architecture and walking.`,
        contactPhone: "0955589762",
        coordinates: { lat: 50.459142, lng: 30.515081 },
        propertyTypeId: 11,
        distanceToCentre: 2.7,
        cityId: 2,
        accommodationRuleId: 1,
        currencyId: 3,
    },
    {
        id: 21,
        name: "Bartolomeo",
        rating: 7.3,
        address: "Naberezhnaya Pobedy 9B, Dnipro",
        description: `This property is 1 minute walk from the beach. Bartolomeo Best River Resort in the city of Dnepropetrovsk offers 2-storey wooden bungalows apartments directly on the River Dnepr. For your comfort you will find a cable TV and safe in every room. Free WiFi is available throughout the property.

            There is a restaurant and a pub on site where disco parties take place during weekends.

            Guests can swim in the seasonal outdoor pool and relax in the White Beach.

            Bartolomeo Best River Resort features two tennis courts, playgrounds for mini-football and beach volleyball. `,
        contactPhone: "0678007800",
        coordinates: { lat: 48.446454, lng: 35.081028 },
        propertyTypeId: 9,
        cityId: 6,
        distanceToCentre: 3.5,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 22,
        name: "Tsunami Spa Hotel",
        rating: 7.3,
        address: "Oktyabrska Pl.12A, Dnipro",
        description: `This property is 13 minutes walk from the beach. This 5-star spa hotel with pool stands beside the Saviour's Transfiguration Cathedral, in the historic centre of Dnipro. It offers free Wi-Fi, healthy cuisine and various spa and fitness facilities.

            Free admission to the Spa Centre includes 12 types of saunas and baths, 6 types of swimming pools, a spa bath, a snow room, tropical rain showers, salt lounge and aroma sauna.

            Each room at the Tsunami has its own style of décor. Air conditioning and satellite TV are provided.

            Health foods and natural juices are served in Tsunami’s restaurant. Breakfast is provided each morning.

            The Karl Marx Prospekt boulevard is a 3-minute walk from the Tsunami Spa Hotel. The hotel offers free private parking.`,
        contactPhone: "0674108900",
        coordinates: { lat: 48.457366, lng: 35.068969 },
        propertyTypeId: 17,
        distanceToCentre: 2.7,
        cityId: 6,
        accommodationRuleId: 1,
        currencyId: 1,
    },
    {
        id: 23,
        name: "Apartments on Kirova",
        rating: 7.3,
        address: "Kirova Prospekt  27D, Dnipro",
        description: `Apartments on Kirova is located in the Adler City Centre district of Adler, 200 m from Novy Vek Shopping Centre, an 11-minute walk from Saint Sarkis Cathedral and 1.2 km from Yuzhnye Kultury Park. This apartment is 3 km from Ice Cube Curling Centre and 3 km from Adler-Arena Skating Centre.

            The apartment comes with a flat-screen TV and a living room.

            Bolshoy Ice Palace is 3.2 km from the apartment. The nearest airport is Adler-Sochi International Airport, 3 km from Apartments on Kirova. `,
        contactPhone: "0904118899",
        coordinates: { lat: 48.461395, lng: 35.02735 },
        propertyTypeId: 1,
        distanceToCentre: 1.1,
        cityId: 6,
        accommodationRuleId: 1,
        currencyId: 3,
    },
    {
        id: 24,
        name: "Ratusha Apartments",
        rating: 7.3,
        address: "Area of Rynok Plosha , Lviv",
        description: `Located in the historic centre of Lviv, within a 10-minute walk of the City Hall, these apartments feature a fully equipped kitchen. The 15th-century Dominican Church is about 15 minutes’ walk away.

            Guests of Ratusha Apartments benefit from the central location, as the Mickiewicz Square is less than 8 minutes’ walk away. The High Castle Park is 20 minutes on foot from the apartments.

            Each apartment is decorated in an elegant style with a work desk and satellite TV. Bathrooms are fitted with a hairdryer.

            Meals can be cooked in the fully equipped kitchen with a fridge and a dining area. A lot of cafés and restaurants can also be found less than 5 minutes’ walk from Ratusha Apartments.

            Lviv Train Station is 8 minutes’ drive from Ratusha Apartments, and Lviv Airport is 15 minutes by car away. A shuttle service is available on request.

            This is our guests' favourite part of Lviv, according to independent reviews.`,
        contactPhone: "0671129412",
        coordinates: { lat: 49.841211, lng: 24.032039 },
        propertyTypeId: 1,
        cityId: 1,
        distanceToCentre: 7.7,
        accommodationRuleId: 1,
        currencyId: 2,
    },
    {
        id: 25,
        name: "Avangard Franko VIP Apartment",
        rating: 7.3,
        address: "Ivana Franka Street, Lviv",
        description: `Offering free WiFi and city views, Avangard Franko VIP Apartment is an accommodation situated in the middle of Lviv. This property is 200 m from Volodymyr Ivasyuk Monument.

            The apartment features 2 bedrooms, a flat-screen TV with satellite channels and a fully equipped kitchen that provides guests with an oven. The air-conditioned apartment also provides a seating area, washing machine and a bathroom with a bath and a shower.

            Speaking English, Polish and Russian at the 24-hour front desk, staff are always at hand to help.

            Shevchenka Avenue is 200 m from the apartment, while The Bernardine Monastery is 300 m from the property. The nearest airport is Lviv International Airport, 6 km from the property.

            This is our guests' favourite part of Lviv, according to independent reviews.`,
        contactPhone: "0678907890",
        coordinates: { lat: 49.837202, lng: 24.035115 },
        propertyTypeId: 1,
        distanceToCentre: 7.1,
        cityId: 1,
        accommodationRuleId: 1,
        currencyId: 1,
    }
];

const ACCOMMODATION_RULES = [
    {
        id: 1,
        allowPets: false,
        cancelReservation: false,
        minimumStay: 1,
        arrivalTimeStart: "10:00",
        arrivalTimeEnd: "14:00",
        departureTimeStart: "10:00",
        departureTimeEnd: "12:00"
    }
];

const PROPERTY_PAYMENT_TYPES = [
    {
        propertyId: 1,
        paymentTypeId: 1
    },
    {
        propertyId: 1,
        paymentTypeId: 2
    },
    {
        propertyId: 1,
        paymentTypeId: 3
    },
    {
        propertyId: 2,
        paymentTypeId: 1
    },
    {
        propertyId: 2,
        paymentTypeId: 3
    },
    {
        propertyId: 3,
        paymentTypeId: 4
    },
    {
        propertyId: 3,
        paymentTypeId: 3
    },
    {
        propertyId: 3,
        paymentTypeId: 2
    },
    {
        propertyId: 3,
        paymentTypeId: 1
    },
    {
        propertyId: 4,
        paymentTypeId: 1
    },
    {
        propertyId: 4,
        paymentTypeId: 2
    },
    {
        propertyId: 4,
        paymentTypeId: 4
    },
    {
        propertyId: 5,
        paymentTypeId: 3
    },
    {
        propertyId: 5,
        paymentTypeId: 2
    },
    {
        propertyId: 6,
        paymentTypeId: 1
    },
    {
        propertyId: 6,
        paymentTypeId: 3
    },
    {
        propertyId: 6,
        paymentTypeId: 2
    },
    {
        propertyId: 6,
        paymentTypeId: 4
    },
    {
        propertyId: 7,
        paymentTypeId: 3
    },
    {
        propertyId: 7,
        paymentTypeId: 2
    },
    {
        propertyId: 7,
        paymentTypeId: 1
    },
    {
        propertyId: 8,
        paymentTypeId: 3
    },
    {
        propertyId: 8,
        paymentTypeId: 2
    },
    {
        propertyId: 8,
        paymentTypeId: 1
    },
    {
        propertyId: 9,
        paymentTypeId: 3
    },
    {
        propertyId: 9,
        paymentTypeId: 2
    },
    {
        propertyId: 9,
        paymentTypeId: 1
    },
    {
        propertyId: 10,
        paymentTypeId: 3
    },
    {
        propertyId: 10,
        paymentTypeId: 2
    },
    {
        propertyId: 10,
        paymentTypeId: 1
    },
    {
        propertyId: 11,
        paymentTypeId: 3
    },
    {
        propertyId: 11,
        paymentTypeId: 2
    },
    {
        propertyId: 11,
        paymentTypeId: 1
    },
    {
        propertyId: 12,
        paymentTypeId: 3
    },
    {
        propertyId: 12,
        paymentTypeId: 2
    },
    {
        propertyId: 12,
        paymentTypeId: 1
    },
    {
        propertyId: 13,
        paymentTypeId: 3
    },
    {
        propertyId: 13,
        paymentTypeId: 2
    },
    {
        propertyId: 13,
        paymentTypeId: 1
    },
    {
        propertyId: 14,
        paymentTypeId: 3
    },
    {
        propertyId: 14,
        paymentTypeId: 2
    },
    {
        propertyId: 14,
        paymentTypeId: 1
    },
    {
        propertyId: 15,
        paymentTypeId: 3
    },
    {
        propertyId: 15,
        paymentTypeId: 2
    },
    {
        propertyId: 15,
        paymentTypeId: 1
    },
    {
        propertyId: 16,
        paymentTypeId: 3
    },
    {
        propertyId: 16,
        paymentTypeId: 2
    },
    {
        propertyId: 16,
        paymentTypeId: 1
    },
    {
        propertyId: 17,
        paymentTypeId: 3
    },
    {
        propertyId: 17,
        paymentTypeId: 2
    },
    {
        propertyId: 17,
        paymentTypeId: 1
    },
    {
        propertyId: 18,
        paymentTypeId: 3
    },
    {
        propertyId: 18,
        paymentTypeId: 2
    },
    {
        propertyId: 18,
        paymentTypeId: 1
    },
    {
        propertyId: 19,
        paymentTypeId: 3
    },
    {
        propertyId: 19,
        paymentTypeId: 2
    },
    {
        propertyId: 19,
        paymentTypeId: 1
    },
    {
        propertyId: 20,
        paymentTypeId: 3
    },
    {
        propertyId: 20,
        paymentTypeId: 2
    },
    {
        propertyId: 20,
        paymentTypeId: 1
    },
    {
        propertyId: 21,
        paymentTypeId: 3
    },
    {
        propertyId: 21,
        paymentTypeId: 2
    },
    {
        propertyId: 21,
        paymentTypeId: 1
    },
    {
        propertyId: 22,
        paymentTypeId: 3
    },
    {
        propertyId: 22,
        paymentTypeId: 2
    },
    {
        propertyId: 22,
        paymentTypeId: 1
    },
    {
        propertyId: 23,
        paymentTypeId: 3
    },
    {
        propertyId: 23,
        paymentTypeId: 2
    },
    {
        propertyId: 23,
        paymentTypeId: 1
    },
    {
        propertyId: 24,
        paymentTypeId: 3
    },
    {
        propertyId: 24,
        paymentTypeId: 2
    },
    {
        propertyId: 24,
        paymentTypeId: 1
    },
    {
        propertyId: 25,
        paymentTypeId: 3
    },
    {
        propertyId: 25,
        paymentTypeId: 2
    },
    {
        propertyId: 25,
        paymentTypeId: 1
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
    {
        id: 26,
        price: 33,
        amount: 2,
        area: 67,
        roomTypeId: 4,
        propertyId: 1
    },
    {
        id: 27,
        price: 20,
        amount: 3,
        area: 67,
        roomTypeId: 3,
        propertyId: 1
    },
    {
        id: 28,
        price: 15,
        amount: 3,
        area: 67,
        roomTypeId: 5,
        propertyId: 2
    },
    {
        id: 29,
        price: 25,
        amount: 3,
        area: 67,
        roomTypeId: 1,
        propertyId: 2
    },
    {
        id: 30,
        price: 80,
        amount: 2,
        area: 77,
        roomTypeId: 6,
        propertyId: 3
    },
    {
        id: 31,
        price: 40,
        amount: 4,
        area: 50,
        roomTypeId: 8,
        propertyId: 4
    }
];

const AVAILABILITY = [
    {
        id: 1,
        amount: 10,
        date: 1,
        price: 20,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.776Z",
        roomId: 1
    },
    {
        id: 2,
        amount: 10,
        date: 2,
        price: 20,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 3,
        amount: 10,
        date: 3,
        price: 20,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 4,
        amount: 10,
        date: 4,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 5,
        amount: 10,
        date: 5,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 6,
        amount: 10,
        date: 6,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 7,
        amount: 10,
        date: 7,
        price: 20,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 8,
        amount: 10,
        date: 8,
        price: 20,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 9,
        amount: 10,
        date: 9,
        price: 20,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 1
    },
    {
        id: 10,
        amount: 10,
        date: 10,
        price: 20,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 1
    },
    {
        id: 11,
        amount: 10,
        date: 11,
        price: 20,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 1
    },
    {
        id: 12,
        amount: 10,
        date: 12,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 1
    },
    {
        id: 13,
        amount: 10,
        date: 13,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 1
    },
    {
        id: 14,
        amount: 10,
        date: 14,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 1
    },
    {
        id: 15,
        amount: 10,
        date: 15,
        price: 20,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 1
    },
    {
        id: 16,
        amount: 10,
        date: 16,
        price: 20,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 1
    },
    {
        id: 17,
        amount: 10,
        date: 17,
        price: 20,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 1
    },
    {
        id: 18,
        amount: 10,
        date: 18,
        price: 20,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 1
    },
    {
        id: 19,
        amount: 10,
        date: 19,
        price: 20,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 1
    },
    {
        id: 20,
        amount: 10,
        date: 20,
        price: 20,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 1
    },
    {
        id: 21,
        amount: 10,
        date: 21,
        price: 20,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 22,
        amount: 10,
        date: 22,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 23,
        amount: 10,
        date: 23,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 24,
        amount: 10,
        date: 24,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 25,
        amount: 10,
        date: 25,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 26,
        amount: 10,
        date: 26,
        price: 20,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 27,
        amount: 10,
        date: 27,
        price: 20,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 28,
        amount: 10,
        date: 28,
        price: 20,
        createdAt: 28,
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 29,
        amount: 10,
        date: 29,
        price: 20,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 1
    },
    {
        id: 30,
        amount: 10,
        date: 30,
        price: 20,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.781Z",
        roomId: 1
    },
    {
        id: 31,
        amount: 10,
        date: 31,
        price: 20,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.781Z",
        roomId: 1
    },
    {
        id: 32,
        amount: 2,
        date: 31,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.776Z",
        roomId: 26
    },
    {
        id: 33,
        amount: 2,
        date: 1,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 34,
        amount: 2,
        date: 2,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 35,
        amount: 2,
        date: 3,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 36,
        amount: 2,
        date: 4,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 37,
        amount: 2,
        date: 5,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 38,
        amount: 2,
        date: 6,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 39,
        amount: 2,
        date: 7,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 40,
        amount: 2,
        date: 8,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 26
    },
    {
        id: 41,
        amount: 2,
        date: 9,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 26
    },
    {
        id: 42,
        amount: 2,
        date: 10,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 26
    },
    {
        id: 43,
        amount: 2,
        date: 11,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 26
    },
    {
        id: 44,
        amount: 2,
        date: 12,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 26
    },
    {
        id: 45,
        amount: 2,
        date: 13,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 26
    },
    {
        id: 46,
        amount: 2,
        date: 14,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 26
    },
    {
        id: 47,
        amount: 2,
        date: 15,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 26
    },
    {
        id: 48,
        amount: 2,
        date: 16,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 26
    },
    {
        id: 49,
        amount: 2,
        date: 17,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 26
    },
    {
        id: 50,
        amount: 2,
        date: 18,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 26
    },
    {
        id: 51,
        amount: 2,
        date: 19,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 26
    },
    {
        id: 52,
        amount: 2,
        date: 20,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 53,
        amount: 2,
        date: 21,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 54,
        amount: 2,
        date: 22,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 55,
        amount: 2,
        date: 23,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 56,
        amount: 2,
        date: 24,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 57,
        amount: 2,
        date: 25,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 58,
        amount: 2,
        date: 26,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 59,
        amount: 2,
        date: 27,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 60,
        amount: 2,
        date: 28,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 26
    },
    {
        id: 61,
        amount: 2,
        date: 29,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.781Z",
        roomId: 26
    },
    {
        id: 62,
        amount: 2,
        date: 30,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.776Z",
        roomId: 26
    },
    {
        id: 63,
        amount: 2,
        date: 31,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 64,
        amount: 2,
        date: 1,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 65,
        amount: 2,
        date: 2,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 66,
        amount: 2,
        date: 3,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 67,
        amount: 2,
        date: 4,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 68,
        amount: 2,
        date: 5,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 69,
        amount: 2,
        date: 6,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 70,
        amount: 2,
        date: 7,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.777Z",
        roomId: 27
    },
    {
        id: 71,
        amount: 2,
        date: 8,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 27
    },
    {
        id: 72,
        amount: 2,
        date: 9,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 27
    },
    {
        id: 73,
        amount: 2,
        date: 10,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 27
    },
    {
        id: 74,
        amount: 2,
        date: 11,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 27
    },
    {
        id: 75,
        amount: 2,
        date: 12,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 27
    },
    {
        id: 76,
        amount: 2,
        date: 13,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 27
    },
    {
        id: 77,
        amount: 2,
        date: 14,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.778Z",
        roomId: 27
    },
    {
        id: 78,
        amount: 2,
        date: 15,
        price: 33,
        createdAt: "2018-09-10T09:53:49.254Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 27
    },
    {
        id: 79,
        amount: 2,
        date: 16,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 27
    },
    {
        id: 80,
        amount: 2,
        date: 17,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 27
    },
    {
        id: 81,
        amount: 2,
        date: 18,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.779Z",
        roomId: 27
    },
    {
        id: 82,
        amount: 2,
        date: 19,
        price: 33,
        createdAt: "2018-09-10T09:53:49.255Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 83,
        amount: 2,
        date: 20,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 84,
        amount: 2,
        date: 21,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 85,
        amount: 2,
        date: 22,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 86,
        amount: 2,
        date: 23,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 87,
        amount: 2,
        date: 24,
        price: 33,
        createdAt: "2018-09-10T09:53:49.256Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 88,
        amount: 2,
        date: 25,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 89,
        amount: 2,
        date: 26,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 90,
        amount: 2,
        date: 27,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.780Z",
        roomId: 27
    },
    {
        id: 91,
        amount: 2,
        date: 28,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.781Z",
        roomId: 27
    },
    {
        id: 92,
        amount: 2,
        date: 29,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.781Z",
        roomId: 27
    },
    {
        id: 93,
        amount: 2,
        date: 30,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.781Z",
        roomId: 27
    },
    {
        id: 94,
        amount: 2,
        date: 31,
        price: 33,
        createdAt: "2018-09-10T09:53:49.257Z",
        updatedAt: "2018-09-10T16:42:58.781Z",
        roomId: 27
    }
];

const IMAGES = [
    {
        id: 1,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/130/130907601.jpg",
        propertyId: 1
    },
    {
        id: 2,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/130/130906982.jpg",
        propertyId: 1
    },
    {
        id: 3,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/103/103303105.jpg",
        propertyId: 1
    },
    {
        id: 4,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/505/5056131.jpg",
        propertyId: 1
    },
    {
        id: 5,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/130/130881697.jpg",
        propertyId: 1
    },
    {
        id: 6,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/134/134023287.jpg",
        propertyId: 1
    },
    {
        id: 7,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/134/134023319.jpg",
        propertyId: 1
    },
    {
        id: 8,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/134/134023098.jpg",
        propertyId: 1
    },
    {
        id: 9,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/153/153409181.jpg",
        propertyId: 2
    },
    {
        id: 10,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/153/153409390.jpg",
        propertyId: 2
    },
    {
        id: 11,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/153/153017030.jpg",
        propertyId: 2
    },
    {
        id: 12,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/153/153017417.jpg",
        propertyId: 2
    },
    {
        id: 13,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/153/153249835.jpg",
        propertyId: 2
    },
    {
        id: 14,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/153/153020259.jpg",
        propertyId: 2
    },
    {
        id: 15,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/153/153015987.jpg",
        propertyId: 2
    },
    {
        id: 16,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/153/153020256.jpg",
        propertyId: 2
    },
    {
        id: 17,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/329/32965782.jpg",
        propertyId: 3
    },
    {
        id: 18,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/337/33762093.jpg",
        propertyId: 3
    },
    {
        id: 19,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/335/33545135.jpg",
        propertyId: 3
    },
    {
        id: 20,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/334/33407453.jpg",
        propertyId: 3
    },
    {
        id: 21,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/335/33545298.jpg",
        propertyId: 3
    },
    {
        id: 22,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/331/33122000.jpg",
        propertyId: 3
    },
    {
        id: 23,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/700/70096979.jpg",
        propertyId: 3
    },
    {
        id: 24,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/322/32213752.jpg",
        propertyId: 4
    },
    {
        id: 25,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/895/89541314.jpg",
        propertyId: 4
    },
    {
        id: 26,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/155/155797098.jpg",
        propertyId: 4
    },
    {
        id: 27,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/155/155797017.jpg",
        propertyId: 4
    },
    {
        id: 28,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/155/155789977.jpg",
        propertyId: 4
    },
    {
        id: 29,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/155/155789910.jpg",
        propertyId: 4
    },
    {
        id: 30,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/333/33302219.jpg",
        propertyId: 4
    },
    {
        id: 31,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/322/32218061.jpg",
        propertyId: 4
    },
    {
        id: 32,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/383/38355902.jpg",
        propertyId: 5
    },
    {
        id: 33,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/383/38355498.jpg",
        propertyId: 5
    },
    {
        id: 34,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/383/38358859.jpg",
        propertyId: 5
    },
    {
        id: 35,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/383/38358667.jpg",
        propertyId: 5
    },
    {
        id: 36,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/383/38368984.jpg",
        propertyId: 5
    },
    {
        id: 37,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/160/160594449.jpg",
        propertyId: 5
    },
    {
        id: 38,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/160/160594082.jpg",
        propertyId: 5
    },
    {
        id: 39,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/147/14785565.jpg",
        propertyId: 6
    },
    {
        id: 40,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/270/27035127.jpg",
        propertyId: 6
    },
    {
        id: 41,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/102/102001816.jpg",
        propertyId: 6
    },
    {
        id: 42,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/101/101943223.jpg",
        propertyId: 6
    },
    {
        id: 43,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/101/101942348.jpg",
        propertyId: 6
    },
    {
        id: 44,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/101/101942022.jpg",
        propertyId: 6
    },
    {
        id: 45,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/101/101941661.jpg",
        propertyId: 6
    },
    {
        id: 46,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/931/93124366.jpg",
        propertyId: 7
    },
    {
        id: 47,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/920/92085678.jpg",
        propertyId: 7
    },
    {
        id: 48,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/931/93124178.jpg",
        propertyId: 7
    },
    {
        id: 49,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/931/93124092.jpg",
        propertyId: 7
    },
    {
        id: 50,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/931/93124105.jpg",
        propertyId: 7
    },
    {
        id: 51,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/920/92085679.jpg",
        propertyId: 7
    },
    {
        id: 52,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/920/92037473.jpg",
        propertyId: 7
    },
    {
        id: 53,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/701/70163232.jpg",
        propertyId: 8
    },
    {
        id: 54,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/701/70163222.jpg",
        propertyId: 8
    },
    {
        id: 55,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/399/39930699.jpg",
        propertyId: 8
    },
    {
        id: 56,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/330/33011586.jpg",
        propertyId: 8
    },
    {
        id: 57,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/330/33013389.jpg",
        propertyId: 8
    },
    {
        id: 58,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/330/33011071.jpg",
        propertyId: 8
    },
    {
        id: 59,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/399/39929880.jpg",
        propertyId: 8
    },
    {
        id: 60,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/517/51729276.jpg",
        propertyId: 9
    },
    {
        id: 61,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100776788.jpg",
        propertyId: 9
    },
    {
        id: 62,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/119/119282902.jpg",
        propertyId: 9
    },
    {
        id: 63,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100472902.jpg",
        propertyId: 9
    },
    {
        id: 64,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/545/54569824.jpg",
        propertyId: 9
    },
    {
        id: 65,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/544/54477824.jpg",
        propertyId: 9
    },
    {
        id: 66,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/102/102526287.jpg",
        propertyId: 9
    },
    {
        id: 67,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/661/66121013.jpg",
        propertyId: 10
    },
    {
        id: 68,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/655/65550737.jpg",
        propertyId: 10
    },
    {
        id: 69,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/155/155588429.jpg",
        propertyId: 10
    },
    {
        id: 70,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/655/65511854.jpg",
        propertyId: 10
    },
    {
        id: 71,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/433/43332142.jpg",
        propertyId: 10
    },
    {
        id: 72,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/655/65550741.jpg",
        propertyId: 10
    },
    {
        id: 73,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1280x900/129/129131118.jpg",
        propertyId: 10
    },
    {
        id: 74,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/103/103908012.jpg",
        propertyId: 11
    },
    {
        id: 75,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/154/154686614.jpg",
        propertyId: 11
    },
    {
        id: 76,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/154/154686622.jpg",
        propertyId: 11
    },
    {
        id: 77,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/154/154686687.jpg",
        propertyId: 11
    },
    {
        id: 78,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/154/154686661.jpg",
        propertyId: 11
    },
    {
        id: 79,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/154/154426413.jpg",
        propertyId: 11
    },
    {
        id: 80,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1280x900/103/103908327.jpg",
        propertyId: 11
    },
    {
        id: 81,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/962/96211065.jpg",
        propertyId: 12
    },
    {
        id: 80,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/967/96793665.jpg",
        propertyId: 12
    },
    {
        id: 82,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/926/92695474.jpg",
        propertyId: 12
    },
    {
        id: 83,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/967/96792432.jpg",
        propertyId: 12
    },
    {
        id: 84,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/936/93682623.jpg",
        propertyId: 12
    },
    {
        id: 85,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/926/92695466.jpg",
        propertyId: 12
    },
    {
        id: 86,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/926/92695479.jpg",
        propertyId: 12
    },
    {
        id: 87,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/445/44580919.jpg",
        propertyId: 13
    },
    {
        id: 88,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/103/10354922.jpg",
        propertyId: 13
    },
    {
        id: 89,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/103/10354917.jpg",
        propertyId: 13
    },
    {
        id: 90,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/445/44581172.jpg",
        propertyId: 13
    },
    {
        id: 91,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/139/13967166.jpg",
        propertyId: 13
    },
    {
        id: 92,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/447/4473698.jpg",
        propertyId: 13
    },
    {
        id: 93,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/771/7715967.jpg",
        propertyId: 13
    },
    {
        id: 94,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/103/10354884.jpg",
        propertyId: 13
    },
    {
        id: 95,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/348/34848971.jpg",
        propertyId: 14
    },
    {
        id: 96,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/727/7272702.jpg",
        propertyId: 14
    },
    {
        id: 97,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/727/7272691.jpg",
        propertyId: 14
    },
    {
        id: 98,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/793/7933889.jpg",
        propertyId: 14
    },
    {
        id: 99,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/793/7933909.jpg",
        propertyId: 14
    },
    {
        id: 100,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/252/25276794.jpg",
        propertyId: 14
    },
    {
        id: 101,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/252/25276790.jpg",
        propertyId: 14
    },
    {
        id: 102,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/535/53557690.jpg",
        propertyId: 15
    },
    {
        id: 103,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/154/154114953.jpg",
        propertyId: 15
    },
    {
        id: 104,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/154/154115575.jpg",
        propertyId: 15
    },
    {
        id: 105,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/154/154115755.jpg",
        propertyId: 15
    },
    {
        id: 106,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/187/18706066.jpg",
        propertyId: 15
    },
    {
        id: 107,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/154/154115597.jpg",
        propertyId: 15
    },
    {
        id: 108,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/157/157788784.jpg",
        propertyId: 15
    },
    {
        id: 109,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/131/131133997.jpg",
        propertyId: 16
    },
    {
        id: 110,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/155/155899618.jpg",
        propertyId: 16
    },
    {
        id: 111,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/155/155899632.jpg",
        propertyId: 16
    },
    {
        id: 112,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/155/155891959.jpg",
        propertyId: 16
    },
    {
        id: 113,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/131/131999290.jpg",
        propertyId: 16
    },
    {
        id: 114,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/155/155891968.jpg",
        propertyId: 16
    },
    {
        id: 115,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/155/155890607.jpg",
        propertyId: 16
    },
    {
        id: 116,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/261/26171442.jpg",
        propertyId: 17
    },
    {
        id: 117,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/859/85968690.jpg",
        propertyId: 17
    },
    {
        id: 118,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/617/6171806.jpg",
        propertyId: 17
    },
    {
        id: 119,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/617/6171371.jpg",
        propertyId: 17
    },
    {
        id: 120,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/126/126183140.jpg",
        propertyId: 17
    },
    {
        id: 121,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/903/90315755.jpg",
        propertyId: 17
    },
    {
        id: 122,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/126/126183071.jpg",
        propertyId: 17
    },
    {
        id: 123,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/764/76475415.jpg",
        propertyId: 18
    },
    {
        id: 124,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141267539.jpg",
        propertyId: 18
    },
    {
        id: 125,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/766/76694894.jpg",
        propertyId: 18
    },
    {
        id: 126,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/122/122464312.jpg",
        propertyId: 18
    },
    {
        id: 127,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/122/122464347.jpg",
        propertyId: 18
    },
    {
        id: 128,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/100/100972632.jpg",
        propertyId: 18
    },
    {
        id: 129,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/974/97432886.jpg",
        propertyId: 18
    },
    {
        id: 130,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/157/157563995.jpg",
        propertyId: 19
    },
    {
        id: 131,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/157/157563905.jpg",
        propertyId: 19
    },
    {
        id: 132,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/157/157563908.jpg",
        propertyId: 19
    },
    {
        id: 133,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/157/157563914.jpg",
        propertyId: 19
    },
    {
        id: 134,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/157/157563927.jpg",
        propertyId: 19
    },
    {
        id: 135,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/157/157563943.jpg",
        propertyId: 19
    },
    {
        id: 136,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/157/157563961.jpg",
        propertyId: 19
    },
    {
        id: 137,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/994/99407408.jpg",
        propertyId: 20
    },
    {
        id: 138,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/154/154412322.jpg",
        propertyId: 20
    },
    {
        id: 139,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/153/153636269.jpg",
        propertyId: 20
    },
    {
        id: 140,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/153/153635206.jpg",
        propertyId: 20
    },
    {
        id: 141,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/997/99735730.jpg",
        propertyId: 20
    },
    {
        id: 142,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/997/99730508.jpg",
        propertyId: 20
    },
    {
        id: 143,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/994/99409022.jpg",
        propertyId: 20
    },
    {
        id: 144,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/127/127565620.jpg",
        propertyId: 21
    },
    {
        id: 145,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/574/57468174.jpg",
        propertyId: 21
    },
    {
        id: 146,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/574/57488719.jpg",
        propertyId: 21
    },
    {
        id: 147,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/815/81582265.jpg",
        propertyId: 21
    },
    {
        id: 148,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/813/81356901.jpg",
        propertyId: 21
    },
    {
        id: 149,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/813/81356819.jpg",
        propertyId: 21
    },
    {
        id: 150,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/813/81356788.jpg",
        propertyId: 21
    },
    {
        id: 151,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/134/13449531.jpg",
        propertyId: 22
    },
    {
        id: 152,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/110/110820051.jpg",
        propertyId: 22
    },
    {
        id: 153,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/110/110820078.jpg",
        propertyId: 22
    },
    {
        id: 154,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/110/110820069.jpg",
        propertyId: 22
    },
    {
        id: 155,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/110/110824019.jpg",
        propertyId: 22
    },
    {
        id: 156,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/156/156980682.jpg",
        propertyId: 22
    },
    {
        id: 157,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/156/156976644.jpg",
        propertyId: 22
    },
    {
        id: 158,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/115/115423065.jpg",
        propertyId: 23
    },
    {
        id: 159,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/115/115423066.jpg",
        propertyId: 23
    },
    {
        id: 160,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/115/115423068.jpg",
        propertyId: 23
    },
    {
        id: 161,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/115/115423069.jpg",
        propertyId: 23
    },
    {
        id: 162,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/115/115423073.jpg",
        propertyId: 23
    },
    {
        id: 163,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/115/115423074.jpg",
        propertyId: 23
    },
    {
        id: 164,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/462/46281067.jpg",
        propertyId: 23
    },
    {
        id: 165,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/139/139183612.jpg",
        propertyId: 24
    },
    {
        id: 166,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/139/139183432.jpg",
        propertyId: 24
    },
    {
        id: 167,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/128/128071976.jpg",
        propertyId: 24
    },
    {
        id: 168,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/128/128052958.jpg",
        propertyId: 24
    },
    {
        id: 169,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/128/128052772.jpg",
        propertyId: 24
    },
    {
        id: 170,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/128/128052708.jpg",
        propertyId: 24
    },
    {
        id: 171,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/128/128052659.jpg",
        propertyId: 24
    },
    {
        id: 172,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/114/114869009.jpg",
        propertyId: 25
    },
    {
        id: 173,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/114/114869010.jpg",
        propertyId: 25
    },
    {
        id: 174,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/114/114869091.jpg",
        propertyId: 25
    },
    {
        id: 175,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/114/114869058.jpg",
        propertyId: 25
    },
    {
        id: 176,
        url:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/114/114869017.jpg",
        propertyId: 25
    },
    {
        id: 177,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/114/114869054.jpg",
        propertyId: 25
    },
    {
        id: 178,
        url:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/114/114868988.jpg",
        propertyId: 25
    }
];

const RESERVATIONS = [
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 1,
        paymentTypeId: 1,
        orderCode: "NSP4ISIYL"
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 2,
        paymentTypeId: 1,
        orderCode: "JFKSOF9U6"
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 3,
        paymentTypeId: 1,
        orderCode: "KSIFY6U4H"
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 4,
        paymentTypeId: 1,
        orderCode: "NLS5F9L5S"
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 5,
        paymentTypeId: 1,
        orderCode: "LVP6T4GSF"
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 6,
        paymentTypeId: 1,
        orderCode: "NPSUCCP5O"
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 7,
        paymentTypeId: 1,
        orderCode: "9JFISP5N0"
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 8,
        paymentTypeId: 1,
        orderCode: "NH9GS8NKD"
    }
];

const FACILITY_LISTS = [
    {
        id: 1,
        propertyId: 1,
        facilityId: 5
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
    {
        propertyId: 1,
        facilityId: 2
    },
    {
        propertyId: 1,
        facilityId: 5
    },
    {
        propertyId: 1,
        facilityId: 6
    },
    {
        propertyId: 1,
        facilityId: 4
    },

    {
        propertyId: 1,
        facilityId: 12
    },
    {
        propertyId: 1,
        facilityId: 10
    },
    {
        propertyId: 1,
        facilityId: 16
    },
    {
        propertyId: 2,
        facilityId: 20
    },
    {
        propertyId: 2,
        facilityId: 16
    },
    {
        propertyId: 2,
        facilityId: 18
    },
    {
        propertyId: 2,
        facilityId: 29
    },
    {
        propertyId: 2,
        facilityId: 25
    },
    {
        propertyId: 3,
        facilityId: 15
    },
    {
        propertyId: 3,
        facilityId: 17
    },
    {
        propertyId: 3,
        facilityId: 31
    },
    {
        propertyId: 3,
        facilityId: 35
    },
    {
        propertyId: 3,
        facilityId: 29
    },
    {
        propertyId: 4,
        facilityId: 25
    },
    {
        propertyId: 4,
        facilityId: 24
    },
    {
        propertyId: 4,
        facilityId: 23
    },
    {
        propertyId: 4,
        facilityId: 15
    },
    {
        propertyId: 4,
        facilityId: 16
    },
    {
        propertyId: 5,
        facilityId: 16
    },
    {
        propertyId: 5,
        facilityId: 23
    },
    {
        propertyId: 5,
        facilityId: 22
    },
    {
        propertyId: 5,
        facilityId: 2
    },
    {
        propertyId: 5,
        facilityId: 5
    },
    {
        propertyId: 6,
        facilityId: 1
    },
    {
        propertyId: 6,
        facilityId: 2
    },
    {
        propertyId: 6,
        facilityId: 3
    },
    {
        propertyId: 6,
        facilityId: 6
    },
    {
        propertyId: 6,
        facilityId: 7
    },
    {
        propertyId: 7,
        facilityId: 12
    },
    {
        propertyId: 7,
        facilityId: 2
    },
    {
        propertyId: 7,
        facilityId: 6
    },
    {
        propertyId: 7,
        facilityId: 9
    },
    {
        propertyId: 7,
        facilityId: 10
    },
    {
        propertyId: 8,
        facilityId: 21
    },
    {
        propertyId: 8,
        facilityId: 22
    },
    {
        propertyId: 8,
        facilityId: 18
    },
    {
        propertyId: 8,
        facilityId: 14
    },
    {
        propertyId: 8,
        facilityId: 13
    },
    {
        propertyId: 9,
        facilityId: 12
    },
    {
        propertyId: 9,
        facilityId: 27
    },
    {
        propertyId: 9,
        facilityId: 30
    },
    {
        propertyId: 9,
        facilityId: 29
    },
    {
        propertyId: 9,
        facilityId: 10
    },
    {
        propertyId: 10,
        facilityId: 27
    },
    {
        propertyId: 10,
        facilityId: 28
    },
    {
        propertyId: 10,
        facilityId: 29
    },
    {
        propertyId: 10,
        facilityId: 30
    },
    {
        propertyId: 10,
        facilityId: 33
    },
    {
        propertyId: 11,
        facilityId: 30
    },
    {
        propertyId: 11,
        facilityId: 31
    },
    {
        propertyId: 11,
        facilityId: 32
    },
    {
        propertyId: 11,
        facilityId: 33
    },
    {
        propertyId: 11,
        facilityId: 34
    },
    {
        propertyId: 12,
        facilityId: 18
    },
    {
        propertyId: 12,
        facilityId: 19
    },
    {
        propertyId: 12,
        facilityId: 13
    },
    {
        propertyId: 12,
        facilityId: 12
    },
    {
        propertyId: 12,
        facilityId: 11
    },
    {
        propertyId: 13,
        facilityId: 9
    },
    {
        propertyId: 13,
        facilityId: 10
    },
    {
        propertyId: 13,
        facilityId: 11
    },
    {
        propertyId: 13,
        facilityId: 12
    },
    {
        propertyId: 13,
        facilityId: 13
    },
    {
        propertyId: 14,
        facilityId: 5
    },
    {
        propertyId: 14,
        facilityId: 6
    },
    {
        propertyId: 14,
        facilityId: 7
    },
    {
        propertyId: 14,
        facilityId: 8
    },
    {
        propertyId: 14,
        facilityId: 9
    },
    {
        propertyId: 15,
        facilityId: 1
    },
    {
        propertyId: 15,
        facilityId: 3
    },
    {
        propertyId: 15,
        facilityId: 7
    },
    {
        propertyId: 15,
        facilityId: 11
    },
    {
        propertyId: 15,
        facilityId: 12
    },
    {
        propertyId: 16,
        facilityId: 29
    },
    {
        propertyId: 16,
        facilityId: 28
    },
    {
        propertyId: 16,
        facilityId: 27
    },
    {
        propertyId: 16,
        facilityId: 26
    },
    {
        propertyId: 16,
        facilityId: 24
    },
    {
        propertyId: 17,
        facilityId: 1
    },
    {
        propertyId: 17,
        facilityId: 5
    },
    {
        propertyId: 17,
        facilityId: 4
    },
    {
        propertyId: 17,
        facilityId: 8
    },
    {
        propertyId: 17,
        facilityId: 10
    },
    {
        propertyId: 18,
        facilityId: 31
    },
    {
        propertyId: 18,
        facilityId: 29
    },
    {
        propertyId: 18,
        facilityId: 33
    },
    {
        propertyId: 18,
        facilityId: 3
    },
    {
        propertyId: 18,
        facilityId: 2
    },
    {
        propertyId: 19,
        facilityId: 26
    },
    {
        propertyId: 19,
        facilityId: 27
    },
    {
        propertyId: 19,
        facilityId: 28
    },
    {
        propertyId: 19,
        facilityId: 11
    },
    {
        propertyId: 19,
        facilityId: 9
    },
    {
        propertyId: 20,
        facilityId: 22
    },
    {
        propertyId: 20,
        facilityId: 24
    },
    {
        propertyId: 20,
        facilityId: 26
    },
    {
        propertyId: 20,
        facilityId: 28
    },
    {
        propertyId: 20,
        facilityId: 29
    },
    {
        propertyId: 21,
        facilityId: 21
    },
    {
        propertyId: 21,
        facilityId: 22
    },
    {
        propertyId: 21,
        facilityId: 18
    },
    {
        propertyId: 21,
        facilityId: 14
    },
    {
        propertyId: 21,
        facilityId: 13
    },
    {
        propertyId: 22,
        facilityId: 27
    },
    {
        propertyId: 22,
        facilityId: 29
    },
    {
        propertyId: 22,
        facilityId: 31
    },
    {
        propertyId: 22,
        facilityId: 33
    },
    {
        propertyId: 22,
        facilityId: 35
    },
    {
        propertyId: 23,
        facilityId: 22
    },
    {
        propertyId: 23,
        facilityId: 32
    },
    {
        propertyId: 23,
        facilityId: 2
    },
    {
        propertyId: 23,
        facilityId: 12
    },
    {
        propertyId: 23,
        facilityId: 34
    },
    {
        propertyId: 24,
        facilityId: 28
    },
    {
        propertyId: 24,
        facilityId: 30
    },
    {
        propertyId: 24,
        facilityId: 32
    },
    {
        propertyId: 24,
        facilityId: 34
    },
    {
        propertyId: 24,
        facilityId: 35
    },
    {
        propertyId: 25,
        facilityId: 29
    },
    {
        propertyId: 25,
        facilityId: 31
    },
    {
        propertyId: 25,
        facilityId: 33
    },
    {
        propertyId: 25,
        facilityId: 35
    },
    {
        propertyId: 25,
        facilityId: 1
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
                imageUrl:
                    "http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg"
            },
            {
                id: 2,
                name: "Kiev",
                imageUrl: "https://s.inyourpocket.com/gallery/130361.jpg"
            },
            {
                id: 3,
                name: "Ternopil",
                imageUrl:
                    "http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg"
            },
            {
                id: 4,
                name: "Odessa",
                imageUrl:
                    "https://www.hotel-deribas.com/wp-content/uploads/2018/03/19odessa.jpg"
            },
            {
                id: 5,
                name: "Kharkiv",
                imageUrl:
                    "http://www.yoldasin.com/wp-content/uploads/2017/04/kharkiv-tren-istasyonu-960x638.jpg"
            },
            {
                id: 6,
                name: "Dnipro",
                imageUrl:
                    "http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg"
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
                imageUrl:
                    "https://tripmydream.cc/travelhub/blog/blog/36/1/block_361.jpg?v1"
            },
            {
                id: 8,
                name: "Warsaw",
                imageUrl:
                    "https://ticketspy.nl/wp-content/uploads/2014/08/Dollarphotoclub_43324037-1024x682.jpg?x43213"
            },
            {
                id: 9,
                name: "Gdańsk",
                imageUrl:
                    "https://api.culture.pl/sites/default/files/2018-04/gdansk_fot_sizun_eyegettyimages.jpg"
            },
            {
                id: 10,
                name: "Poznań",
                imageUrl:
                    "https://prex.com.ua/wp-content/uploads/2017/08/119801-Poznan.jpg.pagespeed.ce.ZttXnv9K1t.jpg"
            },
            {
                id: 11,
                name: "Katowice",
                imageUrl: "https://m.blog.hu/sa/sakk-mester/image//katowice.jpg"
            },
            {
                id: 12,
                name: "Rzeszów",
                imageUrl:
                    "http://blog.kudoybook.com/wp-content/uploads/images/Rzeszow_9867.jpg"
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
                imageUrl:
                    "https://www.rosewoodhotels.com/en/~/media/Images/Rosewood_Hotels_and_Resorts/Rosewood_Vienna/Homepage_1.ashx"
            },
            {
                id: 14,
                name: "Bregenz",
                imageUrl:
                    "http://www.bodensee.eu/regionen-staedte/oesterreich/bodensee-vorarlberg/staedte/bregenz/image-thumb__338__lightbox/bregenz.jpeg"
            },
            {
                id: 15,
                name: "Salzburg",
                imageUrl:
                    "https://www.planetware.com/photos-large/A/austria-salzburg-where-to-stay-skyline.jpg"
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
const BED_IN_ROOM = [
    { id: 1, count: 2, roomId: 1, bedTypeId: 1 },
    { id: 2, count: 2, roomId: 2, bedTypeId: 2 },
    { id: 3, count: 3, roomId: 3, bedTypeId: 3 },
    { id: 4, count: 2, roomId: 4, bedTypeId: 4 },
    { id: 5, count: 2, roomId: 5, bedTypeId: 5 },
    { id: 6, count: 5, roomId: 6, bedTypeId: 6 },
    { id: 7, count: 2, roomId: 7, bedTypeId: 5 },
    { id: 8, count: 6, roomId: 8, bedTypeId: 3 },
    { id: 9, count: 2, roomId: 9, bedTypeId: 3 },
    { id: 10, count: 2, roomId: 10, bedTypeId: 2 },
    { id: 11, count: 2, roomId: 11, bedTypeId: 2 },
    { id: 12, count: 2, roomId: 12, bedTypeId: 3 },
    { id: 13, count: 4, roomId: 13, bedTypeId: 4 },
    { id: 14, count: 2, roomId: 14, bedTypeId: 5 },
    { id: 15, count: 5, roomId: 15, bedTypeId: 6 },
    { id: 16, count: 1, roomId: 16, bedTypeId: 7 },
    { id: 17, count: 3, roomId: 17, bedTypeId: 1 },
    { id: 18, count: 2, roomId: 18, bedTypeId: 2 },
    { id: 19, count: 6, roomId: 19, bedTypeId: 3 },
    { id: 20, count: 2, roomId: 20, bedTypeId: 1 },
    { id: 21, count: 2, roomId: 21, bedTypeId: 2 },
    { id: 22, count: 7, roomId: 22, bedTypeId: 3 },
    { id: 23, count: 2, roomId: 23, bedTypeId: 4 },
    { id: 24, count: 3, roomId: 24, bedTypeId: 5 },
    { id: 25, count: 2, roomId: 25, bedTypeId: 6 },
    { id: 26, count: 2, roomId: 26, bedTypeId: 4 },
    { id: 27, count: 1, roomId: 27, bedTypeId: 2 },
    { id: 28, count: 1, roomId: 28, bedTypeId: 2 },
    { id: 29, count: 1, roomId: 28, bedTypeId: 3 },
    { id: 30, count: 1, roomId: 29, bedTypeId: 2 },
    { id: 31, count: 2, roomId: 30, bedTypeId: 3 },
    { id: 32, count: 1, roomId: 30, bedTypeId: 1 },
    { id: 33, count: 1, roomId: 31, bedTypeId: 4 }
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

const LANGUAGES = [
    {
        id: 1,
        name: "English"
    },
    {
        id: 2,
        name: "Russian"
    },
    {
        id: 3,
        name: "Ukranian"
    },
    {
        id: 4,
        name: "German"
    }
];

const REVIEWS = [
    {
        id: 1,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel.",
        Cleanliness: 3,
        Price: 5,
        Comfort: 5,
        Facilities: 4,
        Location: 2,
        avgReview: 3.8,

        userId: 1,
        propertyId: 1,
        anon: true
    },
    {
        id: 2,
        pros: "Nice staff",
        cons: "A bit expensive",
        Cleanliness: 4,
        Price: 3,
        Comfort: 5,
        Facilities: 4,
        Location: 4,
        avgReview: 4,
        userId: 2,
        propertyId: 1,
        anon: false
    },
    {
        id: 3,
        pros: "Perfect location",
        cons: "Had some problems with check-in and check-out time",
        Cleanliness: 3,
        Price: 5,
        Comfort: 4,
        Facilities: 3,
        Location: 5,
        avgReview: 4,
        userId: 1,
        propertyId: 2,
        anon: false
    },
    {
        id: 4,
        pros: "Nice facilities here",
        cons: "None",
        Cleanliness: 5,
        Price: 5,
        Comfort: 5,
        Facilities: 5,
        Location: 5,
        avgReview: 5,
        userId: 2,
        propertyId: 2,
        anon: false
    },
    {
        id: 5,
        pros: "You can pay with allmost anything",
        cons: "Dinner time is a bit uncomfortable. It is also untidy somewhere",
        Cleanliness: 3,
        Price: 5,
        Comfort: 4,
        Facilities: 5,
        Location: 5,
        avgReview: 4.4,
        userId: 2,
        propertyId: 3,
        anon: false
    },
    {
        id: 6,
        pros: "Brilliant location. Left the hotel 20 minutes prior to my train",
        cons: "Would like to have my room cleaned more often",
        Cleanliness: 3,
        Price: 4,
        Comfort: 5,
        Facilities: 5,
        Location: 5,
        avgReview: 4.4,
        userId: 1,
        propertyId: 3,
        anon: false
    },
    {
        id: 7,
        pros: "Would like to see more facilities",
        cons: "A bit expensive",
        Cleanliness: 8,
        Price: 6,
        Comfort: 8,
        Facilities: 4,
        Location: 7,
        avgReview: 6.6,
        userId: 1,
        propertyId: 4,
        anon: false
    },
    {
        id: 8,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 5,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,
        userId: 2,
        propertyId: 4,
        anon: false
    },
    {
        id: 9,
        pros: "Nice place for a romantic weekend, liked it",
        cons: "Location is uncomfortable a bit",
        Cleanliness: 7,
        Price: 6,
        Comfort: 9,
        Facilities: 8,
        Location: 4,
        avgReview: 6.8,
        userId: 2,
        propertyId: 5,
        anon: false
    },
    {
        id: 10,
        pros: "Nice place. Realy liked it",
        cons: "Could be closer to a historic center",
        Cleanliness: 6,
        Price: 7,
        Comfort: 8,
        Facilities: 6,
        Location: 4,
        avgReview: 7.4,
        userId: 1,
        propertyId: 5,
        anon: false
    },
    {
        id: 11,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 6,
        anon: true
    },
    {
        id: 12,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 6,
        anon: false
    },
    {
        id: 13,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 25,
        anon: true
    },
    {
        id: 14,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 25,
        anon: false
    },
    {
        id: 15,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 7,
        anon: false
    },
    {
        id: 16,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 7,
        anon: false
    },
    {
        id: 17,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 8,
        anon: false
    },
    {
        id: 18,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 8,
        anon: false
    },
    {
        id: 19,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 9,
        anon: false
    },
    {
        id: 20,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 9,
        anon: false
    },
    {
        id: 21,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 10,
        anon: false
    },
    {
        id: 22,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 10,
        anon: false
    },
    {
        id: 23,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 11,
        anon: false
    },
    {
        id: 24,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 11,
        anon: false
    },
    {
        id: 25,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 12,
        anon: false
    },
    {
        id: 26,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 12,
        anon: false
    },
    {
        id: 27,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 13,
        anon: false
    },
    {
        id: 28,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 13,
        anon: false
    },
    {
        id: 29,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 14,
        anon: false
    },
    {
        id: 30,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 14,
        anon: false
    },
    {
        id: 31,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 15,
        anon: false
    },
    {
        id: 32,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 15,
        anon: false
    },
    {
        id: 33,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 16,
        anon: false
    },
    {
        id: 34,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 16,
        anon: false
    },
    {
        id: 35,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 17,
        anon: false
    },
    {
        id: 36,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 17,
        anon: false
    },
    {
        id: 37,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 18,
        anon: false
    },
    {
        id: 38,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 18,
        anon: false
    },
    {
        id: 39,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 19,
        anon: false
    },
    {
        id: 40,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 19,
        anon: false
    },
    {
        id: 41,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 20,
        anon: false
    },
    {
        id: 42,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 20,
        anon: false
    },
    {
        id: 43,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 21,
        anon: false
    },
    {
        id: 44,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 21,
        anon: false
    },
    {
        id: 45,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 22,
        anon: false
    },
    {
        id: 46,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 22,
        anon: false
    },
    {
        id: 47,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 23,
        anon: false
    },
    {
        id: 48,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 23,
        anon: false
    },
    {
        id: 49,
        pros: "very nice place for family ",
        cons: "It was hard to find a hostel",
        Cleanliness: 7,
        Price: 8,
        Comfort: 8,
        Facilities: 6,
        Location: 8,
        avgReview: 7.4,

        userId: 1,
        propertyId: 24,
        anon: false
    },
    {
        id: 50,
        pros: "Quite clean. Realy liked it",
        cons: "Would love it to be less expensive(",
        Cleanliness: 9,
        Price: 4,
        Comfort: 9,
        Facilities: 6,
        Location: 8,
        avgReview: 7.2,
        userId: 2,
        propertyId: 24,
        anon: false
    }
];

const CURRENCIES = [
    {
        name: "EURO",
        code: "EUR",
        codeTitle:"EUR",
        number: "978"
    },
    {
        name: "US DOLLAR",
        code: "USD",
        codeTitle:"USD",
        number: "840"
    },
    {
        name: "Hryvnia",
        code: "UAH",
        codeTitle:"UAH",
        number: "980"
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
    PROPERTY_PAYMENT_TYPES,
    ROLES,
    FACILITY_CATEGORIES,
    REVIEW_CATEGORIES,
    BED_IN_ROOM,
    BED_TYPES,
    ROOM_TYPES,
    PROPERTY_TYPE,
    LANGUAGES,
    REVIEWS,
    CURRENCIES,
    AVAILABILITY
};
