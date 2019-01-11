const languages = [
    {
        name: "English"
    },
    {
        name: "Russian"
    },
    {
        name: "Ukranian"
    },
    {
        name: "German"
    }
];

const seed = languages.map((language, i) => ({
    id: i + 1,
    name: language.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("languages", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("languages", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
