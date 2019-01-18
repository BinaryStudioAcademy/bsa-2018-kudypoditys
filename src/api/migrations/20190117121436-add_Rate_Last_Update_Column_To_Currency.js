module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.addColumn(
        'currencies',
        'rateLastUpdate',
       Sequelize.DATE
      )
    },

    down: function(queryInterface, Sequelize) {
      return queryInterface.removeColumn(
        'currencies',
        'rateLastUpdate'
      );
    }
  }
