module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("availabilities", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            date: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            dateCal: {
                type: Sequelize.DATE,
                defaultValue: new Date(),
                allowNull: false,
            },
            price: {
                type: Sequelize.INTEGER,
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
        return queryInterface.dropTable('availabilities');
  }
};
