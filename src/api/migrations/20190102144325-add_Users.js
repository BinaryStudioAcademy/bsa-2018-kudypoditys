module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fullName: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                validate: { notEmpty: true, isEmail: true },
                allowNull: false,
                unique: true
            },
            verifyEmailToken: {
                type: Sequelize.STRING
            },
            verifyEmailTokenTillDate: {
                type: Sequelize.INTEGER
            },
            phoneNumber: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false,
                unique: true
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true
            },
            resetPasswordToken: {
                type: Sequelize.STRING,
                select: false
            },
            dayOfBirth: {
                type: Sequelize.DATE,
                validate: { isDate: true },
                allowNull: true
            },
            appeal: {
                type: Sequelize.STRING,
                allowNull: true
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: true
            },
            preferredCurrency: {
                type: Sequelize.STRING,
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            countryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "countries",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            paymentTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "paymentTypes",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "roles",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            userSettingId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "userSettings",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("users");
    }
};
