const {
    USERS,
    PROPERTIES,
    // PROPWITHCALCULATEDRATING,
    ACCOMMODATION_RULES,
    FACILITY_LISTS,
    ROOMS,
    IMAGES,
    RESERVATIONS,
    COUNTRIES,
    DISCOUNTS,
    PAYMENT_TYPES,
    ROLES,
    FACILITY_CATEGORIES,
    REVIEW_CATEGORIES,
    PROPERTY_PAYMENT_TYPES,
    BED_TYPES,
    ROOM_TYPES,
    PROPERTY_TYPE,
    BED_IN_ROOM,
    REVIEWS,
    LANGUAGES,
    CURRENCIES,
    AVAILABILITY

} = require("./seed");

let TEMP = [
    {
        id: 1,
        name: "Ukraine Hotel",
        rating: 5,
        address: "Koval street 16, Kyiv",
        description:
            "This property is 15 minutes walk from the beach. Located on Independence Square in the heart of Kiev, this hotel offers air-conditioned rooms and suites with elegant décor. It is a 3-minute walk from the Maidan Nezalezhnosti and Kreschatik Metro Stations. In-room facilities at the Ukraine Hotel include satellite TV and a refrigerator. Your bathroom includes free toiletries and perfumes. Guests enjoy views of the Kreschatyk Street and the surrounding area. A large breakfast buffet is available at the Ukraine Hotel, and 24-hour room service is offered. Ukrainian and European cuisine is served for lunch and dinner. Live music is sometimes played here. The hotel features a beauty salon, sauna and massage facilities. A private laundry service is also available. Hotel Ukraine is a 10-minute walk from Mariyinsky Park and the St. Sofia Cathedral. Secure parking is available on site. Pecherskyj is a great choice for travellers interested in restaurants, food and friendly locals. This is our guests' favourite part of Kiev, according to independent reviews. This property also has one of the best-rated locations in Kiev! Guests are happier about it compared to other properties in the area.",
        contactPhone: "0509832174",
        coordinates: { lat: 49.137089, lng: 24.027161 },
        distanceToCentre: 1.7,
        userId: 1,
        propertyTypeId: 9,
        cityId: 2,
        accommodationRuleId: 1
    }


]
function calc(){
    let Arr = []

    PROPERTIES.forEach(prop => {
        let propReviewArr = [];


        REVIEWS.forEach(review => {
            if (review.propertyId === prop.id) {
                propReviewArr.push(review.avgReview)
            }
        });
        let total = 0;
        let avg;
        for (let i = 0; i < propReviewArr.length; i++) {
            total += propReviewArr[i];
        }
        avg = total / propReviewArr.length;
        if (isNaN(avg)) {
            avg =  0
        }

        prop.rating = JSON.parse( avg.toFixed(1));


        TEMP.push(prop)
        // console.log(TEMP)
    })


}
calc();


function upsertAllData(models) {
    const upsertPromises = [];
    const {
        Country,
        City,
        PaymentType,
        BedType,
        BedInRoom,
        Discount,
        Role,
        FacilityCategory,
        Facility,
        ReviewCategory,
        RoomType,
        PropertyType,
        PropertyPaymentType,
        Property,
        AccommodationRule,
        FacilityList,
        Room,
        Reservation,
        Image,
        User,
        Language,
        Review,
        Currency,
        Availability
    } = models;





    const SimpleUpsertMap = [
        [PaymentType, PAYMENT_TYPES],
        [BedType, BED_TYPES],
        [Discount, DISCOUNTS],
        [Role, ROLES],
        [ReviewCategory, REVIEW_CATEGORIES],
        [RoomType, ROOM_TYPES],
        [PropertyType, PROPERTY_TYPE],
        [AccommodationRule, ACCOMMODATION_RULES],
        [User, USERS],
        [Property, TEMP],
        [FacilityList, FACILITY_LISTS],
        [PropertyPaymentType, PROPERTY_PAYMENT_TYPES],
        [Room, ROOMS],
        [BedInRoom, BED_IN_ROOM],
        [Image, IMAGES],
        [User, USERS],
        [Reservation, RESERVATIONS],
        [Language, LANGUAGES],
        [Review, REVIEWS],
        [Currency, CURRENCIES],
        [Availability, AVAILABILITY]
    ];

    //Country & City
    const CITIES = COUNTRIES.reduce((accumulator, country) => {
        const citiesWithCountry = country.cities.map(x => ({
            ...x,
            countryId: country.id
        }));
        return [...accumulator, ...citiesWithCountry];
    }, []);

    for (const c of COUNTRIES) {
        upsertPromises.push(Country.upsert(c));
    }

    for (const c of CITIES) {
        upsertPromises.push(City.upsert(c));
    }

    //Facility & FacilityCategory
    const FACILITY = FACILITY_CATEGORIES.reduce(
        (accumulator, facilityCategory) => {
            const facilityWithFacilityCategory = facilityCategory.facilities.map(
                x => ({
                    ...x,
                    facilityCategoryId: facilityCategory.id
                })
            );
            return [...accumulator, ...facilityWithFacilityCategory];
        },
        []
    );

    for (const fc of FACILITY_CATEGORIES) {
        upsertPromises.push(FacilityCategory.upsert(fc));
    }

    for (const f of FACILITY) {
        upsertPromises.push(Facility.upsert(f));
    }

    for (const mapItem of SimpleUpsertMap) {
        for (const itemToInsert of mapItem[1]) {
            upsertPromises.push(mapItem[0].upsert(itemToInsert));
        }
    }

    return Promise.all(upsertPromises);
}

function getTableList(orm) {
    const query = `
        SELECT table_name as tableName
        FROM information_schema.tables
        WHERE table_schema='public' AND EXISTS (
            SELECT 1
            FROM information_schema.columns
            WHERE table_name=information_schema.tables.table_name AND column_name='id'
        );
    `;

    return orm
        .query(query, { type: orm.QueryTypes.SELECT })
        .then(data => data.map(x => x.tablename));
}

function inTransaction(orm, action) {
    return orm.transaction({ autocommit: true }).then(() => action());
}

function toggleTablesTriggers(tableList, orm, enable) {
    return Promise.resolve();
    const what = enable ? "ENABLE" : "DISABLE";

    const toggleTriggerQuery = tableList
        .map(x => `ALTER TABLE "${x}" ${what} TRIGGER ALL;`)
        .join(" ");

    return orm.query(toggleTriggerQuery).then(_ => {});
}

function restartSequence(orm, table) {
    const queryFactory = number => `
        ALTER SEQUENCE "${table}_id_seq" RESTART WITH ${number}
    `;

    const countQuery = `
        SELECT MAX(id) as maxId FROM "${table}"
    `;

    return orm
        .query(countQuery, { type: orm.QueryTypes.SELECT })
        .then(x => {
            return queryFactory(+x[0].maxid + 1);
        })
        .then(countQuery => orm.query(countQuery))
        .then(_ => {});
}

module.exports = function seed(models) {
    const { orm } = models;

    return inTransaction(orm, () => {
        // ------- TRANSACTION

        return getTableList(orm)
            .then(tables =>
                toggleTablesTriggers(tables, orm, false).then(_ => tables)
            )
            .then(tables => upsertAllData(models).then(_ => tables))
            .then(tables =>
                toggleTablesTriggers(tables, orm, true).then(_ => tables)
            )
            .then(tables => {
                const restartSeqPromises = tables.map(x =>
                    restartSequence(orm, x)
                );

                return Promise.all(restartSeqPromises);
            });
    }); // ------- TRANSACTION
};
