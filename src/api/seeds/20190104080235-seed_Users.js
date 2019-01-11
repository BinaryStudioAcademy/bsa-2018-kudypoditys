const bcrypt = require("bcrypt");

const users = [
    {
        fullName: "Natalya",
        password: bcrypt.hashSync("nata1NATA", 10),
        email: "natalya@gmail.com",
        phoneNumber: "80504958671",
        nickname: "Nata1ya",
        address: "Nebereshnaya street 20, Lviv",
        appeal: "Mrs.",
        verifyEmailToken: "verified",
        preferredCurrency: "USD",
        countryId: 1,
        paymentTypeId: 1
    },
    {
        fullName: "Nikolay Datsko",
        password: bcrypt.hashSync("102938abC", 10),
        email: "lorem@gmail.com",
        phoneNumber: "80954568261",
        nickname: "Lorem",
        appeal: "Mrs.",
        preferredCurrency: "USD",
        countryId: 1,
        paymentTypeId: 1
    }
];

const seed = users.map((user, i) => ({
    id: i + 1,
    fullName: user.fullName,
    password: user.password,
    email: user.email,
    phoneNumber: user.phoneNumber,
    nickname: user.nickname,
    address: user.address,
    appeal: user.appeal,
    verifyEmailToken: user.verifyEmailToken,
    preferredCurrency: "USD",
    countryId: 1,
    paymentTypeId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const deleteIds = seed.map(item => ({
    id: item.id
}));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("users", seed);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", {
            [Sequelize.Op.or]: deleteIds
        });
    }
};
