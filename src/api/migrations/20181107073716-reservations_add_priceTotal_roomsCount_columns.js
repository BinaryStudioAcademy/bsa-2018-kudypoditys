'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn(
            'reservations',
            'priceTotal',
            {
                type: Sequelize.INTEGER
            }
        );
        queryInterface.addColumn(
            'reservations',
            'roomsCount',
            {
                type: Sequelize.INTEGER
            }
        );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
        'reservations',
        'priceTotal'
    );
    queryInterface.removeColumn(
        'reservations',
        'roomsCount'
    );
  }
};
