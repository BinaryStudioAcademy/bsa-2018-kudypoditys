module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("currencies", {
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
            code: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false,
                unique: true
            },
            number: {
                type: Sequelize.STRING,
                validate: { notEmpty: true },
                allowNull: false,
                unique: true
            },
            codeTitle: {
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
        return queryInterface.dropTable("currencies");
    }
};
