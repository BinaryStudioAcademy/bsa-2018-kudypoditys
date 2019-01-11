const roles = [
    {
        name: "Admin"
    },
    {
        name: "User"
    },
    {
        name: "Owner"
    }
];

const seed = roles.map((role, i) => ({
    id: i + 1,
    name: role.name,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("roles", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("roles", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
