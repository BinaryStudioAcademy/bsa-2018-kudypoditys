module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("properties", [
            {
                name: "Ukraine Hotel",
                rating: 7.3,
                address: "Institutskaya Street 4, Kiev",
                description:
                    "This property is 15 minutes walk from the beach. Located on Independence Square in the heart of Kiev, this hotel offers air-conditioned rooms and suites with elegant décor. It is a 3-minute walk from the Maidan Nezalezhnosti and Kreschatik Metro Stations. In-room facilities at the Ukraine Hotel include satellite TV and a refrigerator. Your bathroom includes free toiletries and perfumes. Guests enjoy views of the Kreschatyk Street and the surrounding area. A large breakfast buffet is available at the Ukraine Hotel, and 24-hour room service is offered. Ukrainian and European cuisine is served for lunch and dinner. Live music is sometimes played here. The hotel features a beauty salon, sauna and massage facilities. A private laundry service is also available. Hotel Ukraine is a 10-minute walk from Mariyinsky Park and the St. Sofia Cathedral. Secure parking is available on site. Pecherskyj is a great choice for travellers interested in restaurants, food and friendly locals. This is our guests' favourite part of Kiev, according to independent reviews. This property also has one of the best-rated locations in Kiev! Guests are happier about it compared to other properties in the area.",
                contactPhone: "0509832174",
                coordinates: { lat: 50.44857, lng: 30.52734 },
                distanceToCentre: 1.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: 1,
                propertyTypeId: 9,
                cityId: 2,
                accommodationRuleId: 1,
                currencyId: 3
            },
            {
                name: "Hotel Dolynskyi",
                rating: 4.5,
                address: "Dolyns'koho Street 2A, Lviv",
                description: `Providing free WiFi, Hotel Dolynskiy is set in Lviv. This property is situated a short distance from attractions such as The St. Onuphrius Church and Monastery and The Church of St. Nicholas. The property is 700 m from The High Castle Park and a 9-minute walk from Zankovetski Drama Theater.
                    At the hotel, rooms are equipped with a wardrobe. The private bathroom is equipped with free toiletries. Lviv State Academic Opera and Ballet Theater is 800 m from Hotel Dolynskiy, while The Armenian Cathedral is a 10-minute walk away. The nearest airport is Lviv International Airport, 7 km from the accommodation. This is our guests' favourite part of Lviv, according to independent reviews.`,
                contactPhone: "0509842174",
                coordinates: { lat: 49.850813, lng: 24.028545 },
                distanceToCentre: 0.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                userId: 1,
                cityId: 1,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
                name: "Hotel Atlas Deluxe",
                rating: 4.4,
                address: "Prospekt Shevchenka 27, Lviv",
                description:
                    "Hotel Atlas Deluxe is located in the heart of Lviv, within a 2-minute walk of Ploshcha Rynok Square and a 10-minute walk of Ivana Franko Park. It offers a sauna, fitness centre and concierge service. The classic-style air-conditioned rooms feature a flat-screen TV with satellite channels. The bathroom comes with a hairdryer and free toiletries. Guests can order a meal in the on-site restaurant. After a busy day, you can enjoy your favourite drink at the bar. Lviv Train Station is within a 10-minute drive of Hotel Atlas Deluxe. A shuttle to Lviv International Airport (6.5 km) is available at surcharge. This is our guests' favourite part of Lviv, according to independent reviews.",
                contactPhone: "0678674908",
                coordinates: { lat: 49.835743, lng: 24.032616 },
                distanceToCentre: 1.1,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 1,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
                name: "Rius Hotel",
                rating: 7.0,
                address: "12A Hnatiuka St, Lviv",
                description:
                    "Located in the city centre of Lviv, less than a 2-minute walk from Svobody Prospekt and a 5-minute walk from Market Square, Rius hotel features free Wi-Fi throughout the property. The modern rooms here provide guests with panoramic windows with a city view, a minibar, a balcony or a terrace, a flat-screen TV with satellite channels, air conditioning, and a private bathroom with a bath or shower. The Lviv Theatre of Opera and Ballet is a 6-minute walk, and the City Hall is a 7-minute walk away. Rius hotel is 2.5 km from Lviv Train Station, 1 km from Doroshenka tram stop, and 7 km from Lviv International Airport. Guarded underground parking is provided. This is our guests' favourite part of Lviv, according to independent reviews. This property also has one of the best-rated locations in Lviv! Guests are happier about it compared to other properties in the area.",
                contactPhone: "0955679712",
                coordinates: { lat: 49.841931, lng: 24.024986 },
                distanceToCentre: 0.2,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 1,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
                name: "British Club Lviv",
                rating: 7.1,
                address: "Nalyvaika Street 18, Lviv",
                description:
                    "This hotel is located in the historic centre of Lviv, just a 10-minute walk from Ploschad Rynok Square. Free Wi-Fi and a 24-hour reception are featured at British Club Lviv. The elegant, air-conditioned rooms and apartments of this hotel are decorated in classical English style. Each one includes a flat-screen TV, a refrigerator and a private bathroom with bathrobes and a hairdryer. Breakfast is served every morning in the hotel’s dining area. Lviv Opera Theatre is just a 2-minute walk away, and Ivana Franko Park is a 5-minute walk from the hotel. A bus stop on Prospekt Svobody is 150 m from British Club Lviv. Lviv Central Train Station is 2.5 km away, and Lviv International Airport is 6 km from the hotel. ",
                contactPhone: "0509842174",
                coordinates: { lat: 49.84325, lng: 24.02388 },
                distanceToCentre: 2.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 1,
                accommodationRuleId: 1,
                currencyId: 3
            },
            {
                name: "Complimente Guest House",
                rating: 7.3,
                address: "Pereulok Kravtsova 13 V, Kharkov",
                description:
                    "This guest house is located in the centre of Kharkov, a 5-minute walk from Konstitutsii Square. Free Wi-Fi, a 24-hour reception and private parking are featured at Complimente Guest House. The bright, air-conditioned rooms are decorated in classic style. Every room includes a flat-screen TV, a kitchenette equipped with a fridge and a private bathroom. A hairdryer is available. The on-site café serves European cuisine, and a selection of drinks is available at the bar. Kharkov Opera and Ballet Theatre is a 7-minute walk away, and the Shevchenko Park is within a walking distance of the guest house. Istoricheskiy Muzey and Sovetskaya Metro Stations are 500 m from Complimente Guest House. Kharkov Central Train Station is 5 km away, and Kharkov Airport is 12 km from the guest house. This is our guests' favourite part of Kharkov, according to independent reviews.",
                contactPhone: "0674569222",
                coordinates: { lat: 49.995886, lng: 36.228966 },
                distanceToCentre: 3.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 5,
                cityId: 5,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
                name: "Pletnevskiy Inn",
                rating: 7.3,
                address:
                    "Kooperatyvna St. 6/8 (entrance from Pletnevskiy lane), Kharkov",
                description:
                    "Featuring free WiFi throughout the property, Pletnevskiy Inn offers accommodation in the historical building in the centre of Kharkov. Guests can enjoy the on-site restaurant. Every room at this hotel is air conditioned and is equipped with a flat-screen TV with cable channels. Certain units include a seating area to relax in after a busy day. You will find a kettle in the room. Every room has a private bathroom fitted with a shower. Extras include bathrobes, slippers and free toiletries. You will find a 24-hour front desk and a concierge service at the property. The on-site parking is available. Metallist Stadium is 2.1 km from Pletnevskiy Inn, while Kharkov Historical Museum is 700 m from the property. The nearest Metro Station is Maidan Konstitutzii, 700 m from property. The nearest airport is Kharkiv International Airport, 8 km from the property. ",
                contactPhone: "0896789099",
                coordinates: { lat: 49.986943, lng: 36.233579 },
                distanceToCentre: 1.4,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 6,
                cityId: 5,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
                name: "Londonskaya SPA Hotel",
                rating: 7.3,
                address: "Primorskiy Boulevard 11, Odessa",
                description:
                    "his property is 6 minutes walk from the beach. Offering great views of the Black Sea, this historic, classical-style hotel is within a 10-minute walk of Deribasovskaya street, Potemkin Stairs and Duke de Richelieu monument. Opera and Ballet Theatre is 300 m away. Spacious, soundproofed rooms and suites provide a flat-screen TV, desk and safety deposit box. A three-storeyed spa area features a hammam, spa bath, 2 swimming pool and gym. Guests can also enjoy a wide range of massages and cosmetology treatments. The on-site restaurant serves traditional Ukrainian and European cuisine. In summer, guests can dine in the paio. Airport shuttles can be booked at the Londonskaya’s 24-hour reception. The hotel is 2 km from Odessa Train Station and 10 km from Odessa International Airport. Primorsky is a great choice for travellers interested in food, restaurants and architecture.",
                contactPhone: "05089079871",
                coordinates: { lat: 46.486877, lng: 30.741964 },
                distanceToCentre: 3.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 16,
                cityId: 4,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
                name: "UNO Design Hotel",
                rating: 7.3,
                address: "Rishelievskaya Street 17, Odessa",
                description:
                    "Stylish rooms with free WiFi and unique décor, UNO Design Hotel is just a 2-minute walk from Deribasovskaya Street and 800 m from the sandy Black Sea Coast. UNO Design Hotel offers spacious suites and rooms with a flat-screen TV and a fully equipped kitchenette. Slippers and toiletries are provided. There are many restaurants and bars within walking distance of UNO Design Hotel. The property is centrally located in the city, just a 5-minute walk from sights such as Odessa Opera and Ballet House and the Potemkin Steps. Odessa Main Train Station is a 10-minute drive and Odessa International Airport is 30 minutes' away by car. Primorsky is a great choice for travellers interested in food, restaurants and architecture. This is our guests' favourite part of Odessa, according to independent reviews.",
                contactPhone: "0509842174",
                coordinates: { lat: 46.479989, lng: 30.740628 },
                distanceToCentre: 1.5,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 4,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
                name: "Resort & Spa Hotel NEMO",
                rating: 7.3,
                address: "Plyazh Lanzheron 25, Odessa",
                description:
                    "This property is 2 minutes walk from the beach. Featuring the on-site Dolphinarium, Oceanarium and the Dolphin assisted therapy centre, Resort & SPA Hotel NEMO with dolphins is set in the historical centre of Odessa, on Lanzheron Beach. It offers 9 heated sea-water swimming pools, fitness & spa zone, a 24-hour room service and free WiFi. All rooms are air-conditioned and come with a balcony, flat-screen TV, a safety deposit box and minibar. All suites feature a spa bath. Guests can enjoy Ukrainian, European and Japanese cuisine in the hotel's restaurant, or have a drink at the bar. Odessa city centre is a 5-minute drive from Resort & Spa Hotel Nemo with dolphins. Central Train Station is a 10-minute drive from the resort. Odessa International Airport is 10 km away. Primorsky is a great choice for travellers interested in food, restaurants and architecture.",
                contactPhone: "05066789078",
                coordinates: { lat: 46.477551, lng: 30.764932 },
                distanceToCentre: 6.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 16,
                cityId: 4,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
                name: "Odesskiy Hostel",
                rating: 7.3,
                address: "Troitskaya Street, 21, Odessa",
                description:
                    "This hostel in Odessa city centre is only 15 minutes’ walk from Odessa Central Train Station. It features a lounge area with a TV, a well-equipped kitchen and free Wi-Fi. Hostel-Hotel Odesskiy offers shared dormitory rooms with access to shared bathroom facilities. Every room is heated, and includes a desk and wardrobe. Guests at Hostel-Hotel Odesskiy can use the accommodation’s shared kitchen facilities to prepare meals. The kitchen includes a refrigerator, microwave and electric kettle, and a super market is located next door. Odessa attractions such as the Opera and Ballet Theatre and Odessa Philharmonic can be found within 1 km from the hostel. Chernomorets football stadium is only 300 m away. The hostel is located 7 km from Odessa Airport and a public bus runs from here to Troitskaya bus stop, 50 m from the hostel. Primorsky is a great choice for travellers interested in food, restaurants and architecture. This is our guests' favourite part of Odessa, according to independent reviews.",
                contactPhone: "09565789091",
                coordinates: { lat: 46.476261, lng: 30.743401 },
                distanceToCentre: 8.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 13,
                cityId: 4,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
                name: "Apartment on Krushelnytskoi Street",
                rating: 7.3,
                address: "Krushelnytskoi Street 1, Ternopilʼ",
                description: `This property is 6 minutes walk from the beach. Set in Ternopilʼ in the Ternopil region, Apartment on Krushelnytskoi Street features a balcony and lake views. This apartment offers accommodation with free WiFi.
                    Featuring city views, the apartment is composed of 2 bedrooms and 1 bathroom with free toiletries and a hair dryer. The kitchen has an oven, a microwave and a toaster, as well as kettle.
                    Guests can also relax in the shared lounge area.
                    This property also has one of the best-rated locations in Ternopilʼ!`,
                contactPhone: "0674589485",
                coordinates: { lat: 49.557224, lng: 25.591945 },
                distanceToCentre: 1.9,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 1,
                cityId: 3,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
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
                distanceToCentre: 9.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 3,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
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
                distanceToCentre: 1.5,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 2,
                cityId: 3,
                accommodationRuleId: 1,
                currencyId: 3
            },
            {
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
                distanceToCentre: 4.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 2,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
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
                distanceToCentre: 3.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 2,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
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
                distanceToCentre: 7.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 2,
                accommodationRuleId: 1,
                currencyId: 3
            },
            {
                name: "City Holiday Resort & SPA",
                rating: 7.3,
                address:
                    "Velyka Kiltseva str. 5,  Petropavlovskaya Borshagovka, Kiev",
                description: `Featuring equipped conference rooms and other business facilities, City Holiday Resort & SPA offers accommodation in Kiev, 11.9 km from Khreshchatyk and Maidan Nezalezhnosti. Free private parking is available on site and free WiFi is provided throughout the property. There is also a free charging station for electric cars at the City Holiday Resort & SPA.
                    The hotel's spa centre boasts an indoor pool and a seasonal outdoor pool. Similarly, there are 2 pools for children, indoors and outdoors. There is also a sauna, a massage parlour and a gym. A variety of treatments is offered to guests.
                    The air-conditioned rooms of City Holiday Resort & SPA come with a flat-screen satellite TV, a minibar and a safety deposit box. Some rooms have a seating area where you can relax. The private bathrooms feature underfloor heating and are fitted with a shower and bidet. For your comfort, you will find bathrobes and slippers.
                    Guests can enjoy dishes of European cuisine at City Holiday and Vinette on-site restaurants, or have a drink at the 24-hour lobby bar of the hotel.
                    City Holiday Resort & SPA's front desk operates around the clock and offers car rental, concierge, tour desk and ticket services.
                    The nearest airport is Zhuliany Airport, 6 km from City Holiday Resort & SPA. `,
                contactPhone: "0674594012",
                coordinates: { lat: 50.432374, lng: 30.35915 },
                distanceToCentre: 1.3,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 16,
                cityId: 2,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
                name: "MarySmart",
                rating: 7.3,
                address: "39 Mashynobudivna Street, Kiev",
                description: `Situated within 6 km of St. Volodymyr's Cathedral in Kiev, MarySmart features accommodation with a kitchenette. Complimentary WiFi is featured.
                    All units include a private bathroom and have air conditioning, a flat-screen TV and a microwave. A fridge and kettle are also provided.
                    Saint Sophia Cathedral is 7 km from the apartment. `,
                contactPhone: "0674099409",
                coordinates: { lat: 50.449413, lng: 30.423436 },
                distanceToCentre: 3.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 6,
                cityId: 2,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
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
                distanceToCentre: 2.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 11,
                cityId: 2,
                accommodationRuleId: 1,
                currencyId: 3
            },
            {
                name: "Bartolomeo",
                rating: 7.3,
                address: "Naberezhnaya Pobedy 9B, Dnipro",
                description: `This property is 1 minute walk from the beach. Bartolomeo Best River Resort in the city of Dnepropetrovsk offers 2-storey wooden bungalows apartments directly on the River Dnepr. For your comfort you will find a cable TV and safe in every room. Free WiFi is available throughout the property.
                    There is a restaurant and a pub on site where disco parties take place during weekends.
                    Guests can swim in the seasonal outdoor pool and relax in the White Beach.
                    Bartolomeo Best River Resort features two tennis courts, playgrounds for mini-football and beach volleyball. `,
                contactPhone: "0678007800",
                coordinates: { lat: 48.446454, lng: 35.081028 },
                distanceToCentre: 3.5,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 9,
                cityId: 6,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
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
                distanceToCentre: 2.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 17,
                cityId: 6,
                accommodationRuleId: 1,
                currencyId: 1
            },
            {
                name: "Apartments on Kirova",
                rating: 7.3,
                address: "Kirova Prospekt  27D, Dnipro",
                description: `Apartments on Kirova is located in the Adler City Centre district of Adler, 200 m from Novy Vek Shopping Centre, an 11-minute walk from Saint Sarkis Cathedral and 1.2 km from Yuzhnye Kultury Park. This apartment is 3 km from Ice Cube Curling Centre and 3 km from Adler-Arena Skating Centre.
                    The apartment comes with a flat-screen TV and a living room.
                    Bolshoy Ice Palace is 3.2 km from the apartment. The nearest airport is Adler-Sochi International Airport, 3 km from Apartments on Kirova. `,
                contactPhone: "0904118899",
                coordinates: { lat: 48.461395, lng: 35.02735 },
                distanceToCentre: 1.1,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 1,
                cityId: 6,
                accommodationRuleId: 1,
                currencyId: 3
            },
            {
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
                distanceToCentre: 7.7,
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 1,
                cityId: 1,
                accommodationRuleId: 1,
                currencyId: 2
            },
            {
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
                createdAt: new Date(),
                updatedAt: new Date(),
                propertyTypeId: 1,
                distanceToCentre: 7.1,
                cityId: 1,
                accommodationRuleId: 1,
                currencyId: 1
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("currencies", {
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
                },
                {
                    id: 22
                },
                {
                    id: 23
                },
                {
                    id: 24
                },
                {
                    id: 25
                }
            ]
        });
    }
};
