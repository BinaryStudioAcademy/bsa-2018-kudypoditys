'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
        'rooms',
        'available',
        {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
        'rooms',
        'available'
    );
  }
};
