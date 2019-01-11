const accommodationRules = [
    {
        allowPets: false,
        cancelReservation: false,
        minimumStay: 1,
        arrivalTimeStart: "10:00",
        arrivalTimeEnd: "14:00",
        departureTimeStart: "10:00",
        departureTimeEnd: "12:00"
    }
];

const seed = accommodationRules.map((accommodationRule, i) => ({
    id: i + 1,
    allowPets: accommodationRule.allowPets,
    cancelReservation: accommodationRule.cancelReservation,
    minimumStay: accommodationRule.minimumStay,
    arrivalTimeStart: accommodationRule.arrivalTimeStart,
    arrivalTimeEnd: accommodationRule.arrivalTimeEnd,
    departureTimeStart: accommodationRule.departureTimeStart,
    departureTimeEnd: accommodationRule.departureTimeEnd,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("accommodationRules", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("accommodationRules", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
