module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("roomDiscounts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            discountStart: {
                type: Sequelize.DATE,
                validate: { isDate: true },
                allowNull: false
            },
            discountEnd: {
                type: Sequelize.DATE,
                validate: { isDate: true },
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
            discountId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'discounts',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            },
            roomId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rooms',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("roomDiscounts");
    }
};
