module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("scoreByCategories", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            evaluation: {
                type: Sequelize.DOUBLE,
                validate: { min: 0, max: 10 },
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
            reviewId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'reviews',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            },
            reviewCategoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'reviewCategories',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'set null'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("scoreByCategories");
    }
};
