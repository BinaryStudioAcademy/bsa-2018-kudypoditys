module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("rooms", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.INTEGER,
                validate: { min: 1, notEmpty: true },
                allowNull: false
            },
            amount: {
                type: Sequelize.INTEGER,
                validate: { min: 1 },
                allowNull: false
            },
            area: {
                type: Sequelize.FLOAT,
                validate: { min: 1, isFloat: true },
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            available: {
                type: Sequelize.INTEGER,
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
            roomTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'roomTypes',
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
        return queryInterface.dropTable("rooms");
    }
};
