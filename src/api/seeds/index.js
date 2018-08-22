const {
    COUNTRIES,
    DISCOUNTS,
    PAYMENT_TYPES,
    ROLES,
    FACILITY_CATEGORIES,
    REVIEW_CATEGORIES,
    BED_TYPES,
    ROOM_TYPES
} = require('./seed');

module.exports = function (models) {
    const {
        Country,
        City,
        PaymentType,
        BedType,
        Discount,
        Role,
        FacilityCategory,
        Facility,
        ReviewCategory,
        RoomType
    } = models;

    const SimpleUpsertMap = [
        [PaymentType, PAYMENT_TYPES],
        [BedType, BED_TYPES],
        [Discount, DISCOUNTS],
        [Role, ROLES],
        [ReviewCategory, REVIEW_CATEGORIES],
        [RoomType, ROOM_TYPES]
    ];

    for (const mapItem of SimpleUpsertMap) {
        for (const itemToInsert of mapItem[1]) {
            mapItem[0].upsert(itemToInsert);
        }
    }

    //Country & City
    const CITIES = COUNTRIES.reduce((accumulator, country) => {
        const citiesWithCountry = country.cities.map(x => ({ ...x, countryId: country.id }));
        return [...accumulator, ...citiesWithCountry];
    }, []);

    for (const c of COUNTRIES) {
        Country.upsert(c);
    }

    for (const c of CITIES) {
        City.upsert(c);
    }

    //Facility & FacilityCategory
    const FACILITY = FACILITY_CATEGORIES.reduce((accumulator, facilityCategory) => {
        const facilityWithFacilityCategory = facilityCategory.facilities.map(x => ({
            ...x, facilityCategoryId: facilityCategory.id
        }));
        return [...accumulator, ...facilityWithFacilityCategory];
    }, []);

    for (const fc of FACILITY_CATEGORIES) {
        FacilityCategory.upsert(fc);
    }

    for (const f of FACILITY) {
        Facility.upsert(f);
    }

};
