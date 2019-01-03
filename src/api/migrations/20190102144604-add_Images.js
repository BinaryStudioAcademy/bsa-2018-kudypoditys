module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("images", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            url: {
                type: Sequelize.STRING,
                validate: { isUrl: true },
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            roomId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rooms',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            },
            propertyId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'properties',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("images");
    }
};
