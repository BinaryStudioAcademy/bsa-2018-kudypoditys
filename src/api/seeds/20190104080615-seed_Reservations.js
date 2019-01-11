const reservations = [
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        orderCode: "NSP4ISIYL",
        roomsCount: 1,
        userId: 1,
        roomId: 1,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        orderCode: "JFKSOF9U6",
        roomsCount: 1,
        userId: 1,
        roomId: 2,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        orderCode: "KSIFY6U4H",
        roomsCount: 1,
        userId: 1,
        roomId: 3,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        orderCode: "NLS5F9L5S",
        roomsCount: 1,
        userId: 1,
        roomId: 4,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        orderCode: "LVP6T4GSF",
        roomsCount: 1,
        userId: 1,
        roomId: 5,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        orderCode: "NPSUCCP5O",
        roomsCount: 1,
        userId: 1,
        roomId: 6,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 3,
        orderCode: "9JFISP5N0",
        roomsCount: 1,
        userId: 1,
        roomId: 7,
        paymentTypeId: 1
    },
    {
        dateIn: new Date("2018-09-10"),
        dateOut: new Date("2018-09-15"),
        guestsCount: 2,
        orderCode: "NH9GS8NKD",
        roomsCount: 1,
        userId: 1,
        roomId: 8,
        paymentTypeId: 1
    }
];

const seed = reservations.map((reservation, i) => ({
    id: i + 1,
    dateIn: reservation.dateIn,
    dateOut: reservation.dateOut,
    guestsCount: reservation.guestsCount,
    orderCode: reservation.orderCode,
    roomsCount: reservation.roomsCount,
    priceTotal: 50 + Math.floor(Math.random() * 250),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: reservation.userId,
    roomId: reservation.roomId,
    paymentTypeId: reservation.paymentTypeId
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("reservations", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("reservations", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
