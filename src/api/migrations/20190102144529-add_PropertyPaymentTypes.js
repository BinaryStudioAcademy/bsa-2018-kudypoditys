module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("propertyPaymentTypes", {
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
            paymentTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'paymentTypes',
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
        return queryInterface.dropTable("propertyPaymentTypes");
    }
};
