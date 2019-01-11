const discounts = [
    {
        rate: 0.1
    },
    {
        rate: 0.2
    },
    {
        rate: 0.3
    },
    {
        rate: 0.4
    },
    {
        rate: 0.5
    },
    {
        rate: 0.6
    },
    {
        rate: 0.7
    },
    {
        rate: 0.8
    },
    {
        rate: 0.9
    },
    {
        rate: 1
    }
];

const seed = discounts.map((discount, i) => ({
    id: i + 1,
    rate: discount.rate,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("discounts", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("discounts", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
