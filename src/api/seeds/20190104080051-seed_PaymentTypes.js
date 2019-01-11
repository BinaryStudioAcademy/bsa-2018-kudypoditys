const paymentTypes = [
    {
        name: "Cash"
    },
    {
        name: "Visa Credit Card"
    },
    {
        name: "WebMoney"
    },
    {
        name: "WesternUnion"
    }
];

const seed = paymentTypes.map((paymentType, i) => ({
    id: i + 1,
    name: paymentType.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    paymentTypes: seed,
    
    up: (queryInterface) => {
        return queryInterface.bulkInsert("paymentTypes", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("paymentTypes", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
