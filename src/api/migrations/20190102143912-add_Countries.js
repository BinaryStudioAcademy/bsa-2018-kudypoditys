module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("countries", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false,
                unique: true
            },
            flagUrl: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false,
                unique: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("countries");
    }
};
