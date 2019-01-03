module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("cities", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false,
                unique: true
            },
            imageUrl: {
                type: Sequelize.STRING
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
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("cities");
    }
};
