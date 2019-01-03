module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("bedInRooms", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            count: {
                type: Sequelize.INTEGER,
                validate: { min: 1, isNumeric: true },
                allowNull: false,
                defaultValue: 1
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            bedTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "bedTypes",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            },
            roomId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "rooms",
                    key: "id"
                },
                onUpdate: "cascade",
                onDelete: "set null"
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("bedInRooms");
    }
};
