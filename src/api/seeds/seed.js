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
        name: "Ukraine Hotel",
        rating: 5,
        address: "Koval street 16, Kyiv",
        description:
            "This property is 15 minutes walk from the beach. Located on Independence Square in the heart of Kiev, this hotel offers air-conditioned rooms and suites with elegant décor. It is a 3-minute walk from the Maidan Nezalezhnosti and Kreschatik Metro Stations. In-room facilities at the Ukraine Hotel include satellite TV and a refrigerator. Your bathroom includes free toiletries and perfumes. Guests enjoy views of the Kreschatyk Street and the surrounding area. A large breakfast buffet is available at the Ukraine Hotel, and 24-hour room service is offered. Ukrainian and European cuisine is served for lunch and dinner. Live music is sometimes played here. The hotel features a beauty salon, sauna and massage facilities. A private laundry service is also available. Hotel Ukraine is a 10-minute walk from Mariyinsky Park and the St. Sofia Cathedral. Secure parking is available on site. Pecherskyj is a great choice for travellers interested in restaurants, food and friendly locals. This is our guests' favourite part of Kiev, according to independent reviews. This property also has one of the best-rated locations in Kiev! Guests are happier about it compared to other properties in the area.",
        contactPhone: "0509832174",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        userId: 1,
        propertyTypeId: 9,
        cityId: 2,
        accommodationRuleId: 1
    },
    {
        id: 2,
        name: "Hotel Dolynskyi",
        rating: 4,
        address: "Koval street 16, Lviv",
        description: `Providing free WiFi, Hotel Dolynskiy is set in Lviv. This property is situated a short distance from attractions such as The St. Onuphrius Church and Monastery and The Church of St. Nicholas. The property is 700 m from The High Castle Park and a 9-minute walk from Zankovetski Drama Theater.
        At the hotel, rooms are equipped with a wardrobe. The private bathroom is equipped with free toiletries. Lviv State Academic Opera and Ballet Theater is 800 m from Hotel Dolynskiy, while The Armenian Cathedral is a 10-minute walk away. The nearest airport is Lviv International Airport, 7 km from the accommodation. This is our guests' favourite part of Lviv, according to independent reviews.`,
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
        description:
            "Hotel Atlas Deluxe is located in the heart of Lviv, within a 2-minute walk of Ploshcha Rynok Square and a 10-minute walk of Ivana Franko Park. It offers a sauna, fitness centre and concierge service. The classic-style air-conditioned rooms feature a flat-screen TV with satellite channels. The bathroom comes with a hairdryer and free toiletries. Guests can order a meal in the on-site restaurant. After a busy day, you can enjoy your favourite drink at the bar. Lviv Train Station is within a 10-minute drive of Hotel Atlas Deluxe. A shuttle to Lviv International Airport (6.5 km) is available at surcharge. This is our guests' favourite part of Lviv, according to independent reviews.",
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
        description:
            "Located in the city centre of Lviv, less than a 2-minute walk from Svobody Prospekt and a 5-minute walk from Market Square, Rius hotel features free Wi-Fi throughout the property. The modern rooms here provide guests with panoramic windows with a city view, a minibar, a balcony or a terrace, a flat-screen TV with satellite channels, air conditioning, and a private bathroom with a bath or shower. The Lviv Theatre of Opera and Ballet is a 6-minute walk, and the City Hall is a 7-minute walk away. Rius hotel is 2.5 km from Lviv Train Station, 1 km from Doroshenka tram stop, and 7 km from Lviv International Airport. Guarded underground parking is provided. This is our guests' favourite part of Lviv, according to independent reviews. This property also has one of the best-rated locations in Lviv! Guests are happier about it compared to other properties in the area.",
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
        description:
            "This hotel is located in the historic centre of Lviv, just a 10-minute walk from Ploschad Rynok Square. Free Wi-Fi and a 24-hour reception are featured at British Club Lviv. The elegant, air-conditioned rooms and apartments of this hotel are decorated in classical English style. Each one includes a flat-screen TV, a refrigerator and a private bathroom with bathrobes and a hairdryer. Breakfast is served every morning in the hotel’s dining area. Lviv Opera Theatre is just a 2-minute walk away, and Ivana Franko Park is a 5-minute walk from the hotel. A bus stop on Prospekt Svobody is 150 m from British Club Lviv. Lviv Central Train Station is 2.5 km away, and Lviv International Airport is 6 km from the hotel. ",
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
        description:
            "This guest house is located in the centre of Kharkov, a 5-minute walk from Konstitutsii Square. Free Wi-Fi, a 24-hour reception and private parking are featured at Complimente Guest House. The bright, air-conditioned rooms are decorated in classic style. Every room includes a flat-screen TV, a kitchenette equipped with a fridge and a private bathroom. A hairdryer is available. The on-site café serves European cuisine, and a selection of drinks is available at the bar. Kharkov Opera and Ballet Theatre is a 7-minute walk away, and the Shevchenko Park is within a walking distance of the guest house. Istoricheskiy Muzey and Sovetskaya Metro Stations are 500 m from Complimente Guest House. Kharkov Central Train Station is 5 km away, and Kharkov Airport is 12 km from the guest house. This is our guests' favourite part of Kharkov, according to independent reviews.",
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
        address:
            "Kooperatyvna St. 6/8 (entrance from Pletnevskiy lane), Kharkov",
        description:
            "Featuring free WiFi throughout the property, Pletnevskiy Inn offers accommodation in the historical building in the centre of Kharkov. Guests can enjoy the on-site restaurant. Every room at this hotel is air conditioned and is equipped with a flat-screen TV with cable channels. Certain units include a seating area to relax in after a busy day. You will find a kettle in the room. Every room has a private bathroom fitted with a shower. Extras include bathrobes, slippers and free toiletries. You will find a 24-hour front desk and a concierge service at the property. The on-site parking is available. Metallist Stadium is 2.1 km from Pletnevskiy Inn, while Kharkov Historical Museum is 700 m from the property. The nearest Metro Station is Maidan Konstitutzii, 700 m from property. The nearest airport is Kharkiv International Airport, 8 km from the property. ",
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
        description:
            "his property is 6 minutes walk from the beach. Offering great views of the Black Sea, this historic, classical-style hotel is within a 10-minute walk of Deribasovskaya street, Potemkin Stairs and Duke de Richelieu monument. Opera and Ballet Theatre is 300 m away. Spacious, soundproofed rooms and suites provide a flat-screen TV, desk and safety deposit box. A three-storeyed spa area features a hammam, spa bath, 2 swimming pool and gym. Guests can also enjoy a wide range of massages and cosmetology treatments. The on-site restaurant serves traditional Ukrainian and European cuisine. In summer, guests can dine in the paio. Airport shuttles can be booked at the Londonskaya’s 24-hour reception. The hotel is 2 km from Odessa Train Station and 10 km from Odessa International Airport. Primorsky is a great choice for travellers interested in food, restaurants and architecture.",
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
        description:
            "Stylish rooms with free WiFi and unique décor, UNO Design Hotel is just a 2-minute walk from Deribasovskaya Street and 800 m from the sandy Black Sea Coast. UNO Design Hotel offers spacious suites and rooms with a flat-screen TV and a fully equipped kitchenette. Slippers and toiletries are provided. There are many restaurants and bars within walking distance of UNO Design Hotel. The property is centrally located in the city, just a 5-minute walk from sights such as Odessa Opera and Ballet House and the Potemkin Steps. Odessa Main Train Station is a 10-minute drive and Odessa International Airport is 30 minutes' away by car. Primorsky is a great choice for travellers interested in food, restaurants and architecture. This is our guests' favourite part of Odessa, according to independent reviews.",
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
        description:
            "This property is 2 minutes walk from the beach. Featuring the on-site Dolphinarium, Oceanarium and the Dolphin assisted therapy centre, Resort & SPA Hotel NEMO with dolphins is set in the historical centre of Odessa, on Lanzheron Beach. It offers 9 heated sea-water swimming pools, fitness & spa zone, a 24-hour room service and free WiFi. All rooms are air-conditioned and come with a balcony, flat-screen TV, a safety deposit box and minibar. All suites feature a spa bath. Guests can enjoy Ukrainian, European and Japanese cuisine in the hotel's restaurant, or have a drink at the bar. Odessa city centre is a 5-minute drive from Resort & Spa Hotel Nemo with dolphins. Central Train Station is a 10-minute drive from the resort. Odessa International Airport is 10 km away. Primorsky is a great choice for travellers interested in food, restaurants and architecture.",
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
        description:
            "This hostel in Odessa city centre is only 15 minutes’ walk from Odessa Central Train Station. It features a lounge area with a TV, a well-equipped kitchen and free Wi-Fi. Hostel-Hotel Odesskiy offers shared dormitory rooms with access to shared bathroom facilities. Every room is heated, and includes a desk and wardrobe. Guests at Hostel-Hotel Odesskiy can use the accommodation’s shared kitchen facilities to prepare meals. The kitchen includes a refrigerator, microwave and electric kettle, and a super market is located next door. Odessa attractions such as the Opera and Ballet Theatre and Odessa Philharmonic can be found within 1 km from the hostel. Chernomorets football stadium is only 300 m away. The hostel is located 7 km from Odessa Airport and a public bus runs from here to Troitskaya bus stop, 50 m from the hostel. Primorsky is a great choice for travellers interested in food, restaurants and architecture. This is our guests' favourite part of Odessa, according to independent reviews.",
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
        description: `This property is 6 minutes walk from the beach. Set in Ternopilʼ in the Ternopil region, Apartment on Krushelnytskoi Street features a balcony and lake views. This apartment offers accommodation with free WiFi.

            Featuring city views, the apartment is composed of 2 bedrooms and 1 bathroom with free toiletries and a hair dryer. The kitchen has an oven, a microwave and a toaster, as well as kettle.

            Guests can also relax in the shared lounge area.

            This property also has one of the best-rated locations in Ternopilʼ!`,
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
        description: `A 2-minute walk from Ternopil Lake, this hotel offers air-conditioned rooms with free Wi-Fi.

            Hotel Ternopil provides individually furnished rooms and suites with cable TV. Wooden flooring, large windows and pastel colour schemes create a bright atmosphere.

            A breakfast buffet is provided each morning. Ukrainian and European meals are served in the Panorama restaurant.

            Guests can also visit a beauty salon, Pryma, offering massage sessions.

            Many shops and restaurants are within a 5-minute walk of the Hotel Ternopil. Ternopil Train Station is within a 15-minute walk and Ternopil Airport is a 15-minute drive away. `,
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
        description: `Located 8 minutes’ drive from Ternopil’s 16th-century castle, this hotel offers a sauna and air-conditioned rooms with a flat-screen TV. There is also a 24-hour reception.

            All the modern rooms at Kamelot Hotel are decorated in neutral colours with wooden furnishings. A hairdryer is provided in bathrooms.

            Kamelot’s elegant restaurant serves Ukrainian and European cuisine. Fine wine and other drinks can be ordered at the on-site bar.

            Guests of Hotel Kamelot can relax in the Finnish sauna and cool off in the indoor swimming pool. A massage service is also available.

            Kamelot Hotel is 8 minutes’ drive from Ternopil Train Station and the 18th-century Dominican Church. Ternopil Airport is 15 minutes’ drive away.`,
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
        address:
            "Petropavlivs'ka Street 24, Petropavlivs'ka Borshchahivka, Kiev",
        description: `Featuring free Wi-Fi and a restaurant with a terrace, this hotel is 7 minutes’ drive from Zhitomirskaya Metro Station in Kiev. It offers air-conditioned rooms with a flat-screen TV.

            All the classic-style rooms at Hotel Verhovina include a seating area and a work desk. A hairdryer is provided in the bathrooms.

            The Verhovina’s restaurant serves Ukrainian and Russian dishes, which can be enjoyed on the summer terrace. Cocktails and drinks are offered at the on-site bar.

            Kiev city centre with Maidan Nezalezhnosti Square is 20 minutes’ metro ride from Hotel Verhovina, and Kiev Train Station is 15 minutes away by metro. Boryspil Airport is 50 km from the hotel.`,
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
        description: `This property is 9 minutes walk from the beach. Located beside Livoberezhna Metro Station in Kiev, this modern, 3-star hotel offers 2 international restaurants, and a 24-hour reception. The International Exhibition Centre is a 7-minute walk away.

            The Tourist Hotel Complex has classic-style rooms and suites with satellite TV, refrigerator, and desk. Wi-Fi is available in the property free of charge.

            The restaurant serves Ukrainian and European specialities. Japanese food can be enjoyed in the sushi bar. Fine drinks are served in the snack bar on the 20th floor. Several restaurants, supermarkets, bars, and eateries are in the vicinity of Tourist Hotel Complex.

            Kiev Central Station is a 15 minutes' drive away by metro. Borispol Airport is a 40 minutes' drive away. Public parking spaces are available outside Tourist Hotel Complex on request.

            Dniprovskyj is a great choice for travellers interested in sightseeing, friendly locals and history.`,
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
        description: `Centrally located in Kiev, each room at this hotel features balconies with views of the park. The Verkovna Rada building is a 2-minute walk away, and guests enjoy 24-hour access to the reception.

            The elegant rooms at Hotel Complex Kyiv feature individual colour schemes, and come with a flat-screen TV. Each room has air conditioning, and bathrobes are provided in the en suite bathroom.

            Ukranian and European specialities are served in the stylish Complex Kyiv restaurant, and refreshments are available at the 24-hour snack bar. A buffet breakfast is provided.

            Mariinsky Palace is a 5-minute walk from the hotel, and Independence Square is a 15-minute walk away. Arsenalna Metro Station is a 5-minute walk from the hotel and provides links to St Volodymyr’s Cathedral.

            Kiev Airport is a 40-minute drive from the hotel, and Kiev Main Station is a 20-minute drive away. `,
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
        description: `Featuring equipped conference rooms and other business facilities, City Holiday Resort & SPA offers accommodation in Kiev, 11.9 km from Khreshchatyk and Maidan Nezalezhnosti. Free private parking is available on site and free WiFi is provided throughout the property. There is also a free charging station for electric cars at the City Holiday Resort & SPA.

            The hotel's spa centre boasts an indoor pool and a seasonal outdoor pool. Similarly, there are 2 pools for children, indoors and outdoors. There is also a sauna, a massage parlour and a gym. A variety of treatments is offered to guests.

            The air-conditioned rooms of City Holiday Resort & SPA come with a flat-screen satellite TV, a minibar and a safety deposit box. Some rooms have a seating area where you can relax. The private bathrooms feature underfloor heating and are fitted with a shower and bidet. For your comfort, you will find bathrobes and slippers.

            Guests can enjoy dishes of European cuisine at City Holiday and Vinette on-site restaurants, or have a drink at the 24-hour lobby bar of the hotel.

            City Holiday Resort & SPA's front desk operates around the clock and offers car rental, concierge, tour desk and ticket services.

            The nearest airport is Zhuliany Airport, 6 km from City Holiday Resort & SPA. `,
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
        description: `Situated within 6 km of St. Volodymyr's Cathedral in Kiev, MarySmart features accommodation with a kitchenette. Complimentary WiFi is featured.

            All units include a private bathroom and have air conditioning, a flat-screen TV and a microwave. A fridge and kettle are also provided.

            Saint Sophia Cathedral is 7 km from the apartment. `,
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
        description: ` One of our bestsellers in Kiev!
            Andreevsky Guest House is located in Kiev, 700 m from St. Michael's Golden-Domed Monastery and a 9-minute walk from Saint Sophia Cathedral. The property is around 1.7 km from St. Volodymyr's Cathedral and 2.9 km from Olympic Stadium. Kiev Pechersk Lavra is 4 km from the hotel and International Exhibition Centre is 6 km away.

            The units in the hotel are fitted with a kettle. Every room is fitted with a private bathroom with a hair dryer, while certain rooms include a kitchenette with a microwave.

            Languages spoken at the 24-hour front desk include English, Russian and Ukrainian.

            Expocentre of Ukraine is 9 km from Andreevsky Guest House.

            Podilskyj is a great choice for travellers interested in old town exploring, architecture and walking.`,
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
        description: `This property is 1 minute walk from the beach. Bartolomeo Best River Resort in the city of Dnepropetrovsk offers 2-storey wooden bungalows apartments directly on the River Dnepr. For your comfort you will find a cable TV and safe in every room. Free WiFi is available throughout the property.

            There is a restaurant and a pub on site where disco parties take place during weekends.

            Guests can swim in the seasonal outdoor pool and relax in the White Beach.

            Bartolomeo Best River Resort features two tennis courts, playgrounds for mini-football and beach volleyball. `,
        contactPhone: "0678007800",
        coordinates: { lat: 48.45, lng: 34.98333 },
        propertyTypeId: 9,
        cityId: 6,
        accommodationRuleId: 1
    },
    {
        id: 22,
        name: "Tsunami Spa Hotel",
        rating: 6.0,
        address: "Oktyabrska Pl.12A, Dnipro",
        description: `This property is 13 minutes walk from the beach. This 5-star spa hotel with pool stands beside the Saviour's Transfiguration Cathedral, in the historic centre of Dnipro. It offers free Wi-Fi, healthy cuisine and various spa and fitness facilities.

            Free admission to the Spa Centre includes 12 types of saunas and baths, 6 types of swimming pools, a spa bath, a snow room, tropical rain showers, salt lounge and aroma sauna.

            Each room at the Tsunami has its own style of décor. Air conditioning and satellite TV are provided.

            Health foods and natural juices are served in Tsunami’s restaurant. Breakfast is provided each morning.

            The Karl Marx Prospekt boulevard is a 3-minute walk from the Tsunami Spa Hotel. The hotel offers free private parking.`,
        contactPhone: "0674108900",
        coordinates: { lat: 48.45, lng: 34.98333 },
        propertyTypeId: 17,
        cityId: 6,
        accommodationRuleId: 1
    },
    {
        id: 23,
        name: "Apartments on Kirova",
        rating: 6.9,
        address: "Kirova Prospekt  27D, Dnipro",
        description: `Apartments on Kirova is located in the Adler City Centre district of Adler, 200 m from Novy Vek Shopping Centre, an 11-minute walk from Saint Sarkis Cathedral and 1.2 km from Yuzhnye Kultury Park. This apartment is 3 km from Ice Cube Curling Centre and 3 km from Adler-Arena Skating Centre.

            The apartment comes with a flat-screen TV and a living room.

            Bolshoy Ice Palace is 3.2 km from the apartment. The nearest airport is Adler-Sochi International Airport, 3 km from Apartments on Kirova. `,
        contactPhone: "0904118899",
        coordinates: { lat: 48.45, lng: 34.98333 },
        propertyTypeId: 1,
        cityId: 6,
        accommodationRuleId: 1
    },
    {
        id: 24,
        name: "Ratusha Apartments",
        rating: 8.9,
        address: "Area of Rynok Plosha , Lviv",
        description: `Located in the historic centre of Lviv, within a 10-minute walk of the City Hall, these apartments feature a fully equipped kitchen. The 15th-century Dominican Church is about 15 minutes’ walk away.

            Guests of Ratusha Apartments benefit from the central location, as the Mickiewicz Square is less than 8 minutes’ walk away. The High Castle Park is 20 minutes on foot from the apartments.

            Each apartment is decorated in an elegant style with a work desk and satellite TV. Bathrooms are fitted with a hairdryer.

            Meals can be cooked in the fully equipped kitchen with a fridge and a dining area. A lot of cafés and restaurants can also be found less than 5 minutes’ walk from Ratusha Apartments.

            Lviv Train Station is 8 minutes’ drive from Ratusha Apartments, and Lviv Airport is 15 minutes by car away. A shuttle service is available on request.

            This is our guests' favourite part of Lviv, according to independent reviews.`,
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
        description: `Offering free WiFi and city views, Avangard Franko VIP Apartment is an accommodation situated in the middle of Lviv. This property is 200 m from Volodymyr Ivasyuk Monument.

            The apartment features 2 bedrooms, a flat-screen TV with satellite channels and a fully equipped kitchen that provides guests with an oven. The air-conditioned apartment also provides a seating area, washing machine and a bathroom with a bath and a shower.

            Speaking English, Polish and Russian at the 24-hour front desk, staff are always at hand to help.

            Shevchenka Avenue is 200 m from the apartment, while The Bernardine Monastery is 300 m from the property. The nearest airport is Lviv International Airport, 6 km from the property.

            This is our guests' favourite part of Lviv, according to independent reviews.`,
        contactPhone: "0678907890",
        coordinates: { lat: 49.837089, lng: 24.021161 },
        propertyTypeId: 1,
        cityId: 1,
        accommodationRuleId: 1
    }
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
        id: 49,
        url:
            "https://www.publicdomainpictures.net/pictures/240000/velka/sitting-room-with-grand-piano.jpg",
        propertyId: 25
    },
    {
        id: 50,
        url:
            "https://www.publicdomainpictures.net/pictures/270000/velka/ghostly-vintage-dance.jpg",
        propertyId: 25
    },
    {
        id: 51,
        url:
            "https://www.publicdomainpictures.net/pictures/270000/velka/bedroom-interior.jpg",
        propertyId: 1
    }
];

const RESERVATIONS = [
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 1,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 2,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 3,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 4,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 5,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 6,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        userId: 1,
        roomId: 7,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        userId: 1,
        roomId: 8,
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
const BED_IN_ROOMS = [
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
    { id: 25, count: 2, roomId: 25, bedTypeId: 6 }
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
        propertyId: 2,
        anon: false
    },
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
        propertyId: 2,
        anon: false
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
    BED_IN_ROOMS,
    BED_TYPES,
    ROOM_TYPES,
    PROPERTY_TYPE,
    REVIEWS
};
