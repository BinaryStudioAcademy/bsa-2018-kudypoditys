module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("basicFacilities", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hasParking: {
                type: Sequelize.BOOLEAN,
            },
            isFree: {
                type: Sequelize.BOOLEAN
            },
            isPrivate: {
                type: Sequelize.BOOLEAN
            },
            isOnTerritory: {
                type: Sequelize.BOOLEAN
            },
            needToBook: {
                type: Sequelize.BOOLEAN
            },
            parkingPrice: {
                type: Sequelize.DOUBLE
            },
            hasInternet: {
                type: Sequelize.BOOLEAN,
            },
            internetPrice: {
                type: Sequelize.DOUBLE
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
                    model: 'properties',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("basicFacilities");
    }
};
