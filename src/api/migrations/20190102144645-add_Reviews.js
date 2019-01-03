module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("reviews", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            pros: {
                type: Sequelize.TEXT
            },
            cons: {
                type: Sequelize.TEXT
            },
            Cleanliness: {
                type: Sequelize.FLOAT,
            },
            Price: {
                type: Sequelize.FLOAT,
            },
            Comfort: {
                type: Sequelize.FLOAT,
            },
            Facilities: {
                type: Sequelize.FLOAT,
            },
            Location: {
                type: Sequelize.FLOAT,
            },
            avgReview: {
                type: Sequelize.FLOAT,
            },
            anon: {
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
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
        return queryInterface.dropTable("reviews");
    }
};
