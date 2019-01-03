module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("properties", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                validate: { notEmpty: true }
            },
            address: {
                type: Sequelize.STRING,
                validate: { notEmpty: true }
                // unique: true,
                // allowNull: false
            },
            distanceToCentre: {
                type: Sequelize.FLOAT,
                validate: { notEmpty: true }
            },
            distanceToMetro: {
                type: Sequelize.FLOAT
            },
            nearestMetro: {
                type: Sequelize.STRING
            },
            lastBooked: {
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.TEXT,
                validate: { notEmpty: true }
                // allowNull: true
            },
            vatIncluded: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            additionalFees: {
                type: Sequelize.STRING,
                allowNull: true
            },
            coordinates: {
                type: Sequelize.JSON
                // allowNull: false
            },
            rating: {
                type: Sequelize.FLOAT,
                validate: { min: 0, max: 10, isFloat: true }
                // allowNull: true
            },
            contactPersonName: {
                type: Sequelize.STRING
                // allowNull: false
            },
            contactPhone: {
                type: Sequelize.STRING
                // allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            accommodationRuleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "accommodationRules",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            cityId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "cities",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            currencyId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "currencies",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            propertyTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "propertyTypes",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "users",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            verificationStatusId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "verificationStatuses",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("properties");
    }
};
