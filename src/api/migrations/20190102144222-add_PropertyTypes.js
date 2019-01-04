module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("propertyTypes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
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
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.dropTable("propertyTypes");
    }
};
