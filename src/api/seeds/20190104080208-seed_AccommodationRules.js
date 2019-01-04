module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("accommodationRules", [
            {
                allowPets: false,
                cancelReservation: false,
                minimumStay: 1,
                arrivalTimeStart: "10:00",
                arrivalTimeEnd: "14:00",
                departureTimeStart: "10:00",
                departureTimeEnd: "12:00",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("accommodationRules", {
            [Sequelize.Op.or]: [
                {
                    id: 1
                }
            ]
        });
    }
};
