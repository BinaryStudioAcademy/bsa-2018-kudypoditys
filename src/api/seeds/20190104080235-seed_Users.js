const bcrypt = require("bcrypt");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("users", [
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
                createdAt: new Date(),
                updatedAt: new Date(),
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
                createdAt: new Date(),
                updatedAt: new Date(),
                countryId: 1,
                paymentTypeId: 1
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", {
            [Sequelize.Op.or]: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        });
    }
};
