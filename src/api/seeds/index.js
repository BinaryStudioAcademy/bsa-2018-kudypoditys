const {
    USERS,
    PROPERTIES,
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
        [Property, PROPERTIES],
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
