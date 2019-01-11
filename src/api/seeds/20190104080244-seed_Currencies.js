const currencies = [
    {
        name: "EURO",
        code: "EUR",
        codeTitle: "EUR",
        number: "978"
    },
    {
        name: "US DOLLAR",
        code: "USD",
        codeTitle: "USD",
        number: "840"
    },
    {
        name: "Hryvnia",
        code: "UAH",
        codeTitle: "UAH",
        number: "980"
    }
];

const seed = currencies.map((currency, i) => ({
    id: i + 1,
    name: currency.name,
    code: currency.code,
    codeTitle: currency.codeTitle,
    number: currency.number,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("currencies", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("currencies", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
