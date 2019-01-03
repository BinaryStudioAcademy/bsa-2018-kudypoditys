module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("userRefreshTokens", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            refreshToken: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false,
                unique: true
            },
            tillDate: {
                type: Sequelize.INTEGER,
                validate: { notEmpty: true },
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
        return queryInterface.dropTable("userRefreshTokens");
    }
};
