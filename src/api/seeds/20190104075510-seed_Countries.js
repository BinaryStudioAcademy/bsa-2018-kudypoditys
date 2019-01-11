const countries = [
    {
        name: "Ukraine",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    {
        name: "Poland",
        flagUrl:
            "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
    },
    {
        name: "Austria",
        flagUrl:
            "https://vignette.wikia.nocookie.net/gabrielallon/images/7/7d/Austria_Flag.png/revision/latest?cb=20151228205208"
    }
];

const seed = countries.map((country, i) => ({
    id: i + 1,
    name: country.name,
    flagUrl: country.flagUrl,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("countries", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("countries", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
