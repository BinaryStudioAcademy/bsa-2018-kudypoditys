module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("accommodationRules", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            allowPets: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            cancelReservation: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            minimumStay: {
                type: Sequelize.INTEGER,
                validate: { min: 1, isNumeric: true },
                defaultValue: 1,
                allowNull: false
            },
            arrivalTimeStart: {
                type: Sequelize.TIME,
                allowNull: false
            },
            arrivalTimeEnd: {
                type: Sequelize.TIME,
                allowNull: false
            },
            departureTimeStart: {
                type: Sequelize.TIME,
                allowNull: false
            },
            departureTimeEnd: {
                type: Sequelize.TIME,
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
        return queryInterface.dropTable('AccommodationRules');
  }
};
