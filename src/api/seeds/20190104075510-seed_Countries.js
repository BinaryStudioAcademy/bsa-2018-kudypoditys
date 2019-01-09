module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("countries", [
            {
                name: "Ukraine",
                flagUrl:
                    "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Poland",
                flagUrl:
                    "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Austria",
                flagUrl:
                    "https://vignette.wikia.nocookie.net/gabrielallon/images/7/7d/Austria_Flag.png/revision/latest?cb=20151228205208",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("countries", {
            [Sequelize.Op.or]: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                }
            ]
        });
    }
};
