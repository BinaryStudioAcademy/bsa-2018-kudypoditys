const { COUNTRIES } = require('./seed');

module.exports = async function (models) {
    const {
        Country,
        City
    } = models;

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

};
