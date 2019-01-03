module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("propertyLanguages", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            propertyId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "properties",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            languageId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "languages",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("propertyLanguages");
    }
};
