module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("reservations", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            dateIn: {
                type: Sequelize.DATE,
                validate: { isDate: true }
            },
            dateOut: {
                type: Sequelize.DATE,
                validate: { isDate: true }
            },
            guestsCount: {
                type: Sequelize.INTEGER,
                validate: { min: 1 }
            },
            orderCode: {
                type: Sequelize.STRING
            },
            priceTotal: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            roomsCount: {
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
            roomId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rooms',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
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
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("reservations");
    }
};
