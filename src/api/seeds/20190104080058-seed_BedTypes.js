const bedTypes = [
    {
        name: "Twin bed(s) / 90 - 130 cm wide"
    },
    {
        name: "Full bed(s) / 131 - 150 cm wide"
    },
    {
        name: "Queen bed(s) / 151 - 180 cm wide"
    },
    {
        name: "King bed(s) / 181 - 210 cm wide"
    },
    {
        name: "Bunk bed / Variable Size"
    },
    {
        name: "Sofa bed / Variable Size"
    },
    {
        name: "Futon bed(s) / Variable Size"
    }
];

const seed = bedTypes.map((bedType, i) => ({
    id: i + 1,
    name: bedType.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("bedTypes", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("bedTypes", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
