module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("facilityLists", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            belongsToProperty: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            facilityId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'facilities',
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
        return queryInterface.dropTable("facilityLists");
    }
};
